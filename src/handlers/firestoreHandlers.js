import db from "../firestore"; // Adjust the path if your firebase.js file is in a different directory
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const firestoreMethods = {
  async savePlayerData(gameData) {
    try {
      console.log("uspjeh");
      const docRef = await addDoc(collection(db, "players"), gameData);
      localStorage.setItem("thisGameId", docRef.id);
      window.location.reload();
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },

  async updateFirestoreDocument(gameData) {
    const docRef = doc(db, "players", localStorage.getItem("thisGameId"));
    const positionUpdates = Object.keys(gameData).map((key) => ({
      [`${key}.value`]: gameData[key].value,
    }));
    const positionUpdateObject = Object.assign({}, ...positionUpdates);
    try {
      await updateDoc(docRef, positionUpdateObject);

      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  },

  async getInitial(id) {
    const docRef = doc(db, "players", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  },
  async rememberPosition(id, entryData) {
    const docRef = doc(db, "players", id);

    try {
      const positionUpdates = Object.keys(entryData).map((key) => ({
        [`${key}.position`]: entryData[key].position,
      }));
      const positionUpdateObject = Object.assign({}, ...positionUpdates);
      await updateDoc(docRef, positionUpdateObject);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  },
  async updateURL(id, URL) {
    const docRef = doc(db, "overlays", id);
    try {
      await setDoc(docRef, { overlaylink: URL });
    } catch (error) {
      console.log(error);
    }
  },
};

export default firestoreMethods;
