<template>
  <div id="app" class="row mt-5">
    <div class="col"></div>
    <div class="col">
      <div class="">
        <div class="col">
          <label for="player1" class="form-label">Player 1 Name:</label>
          <input
            type="text"
            class="form-control mb-3"
            id="player1"
            v-model="gameData.player1Name.value"
          />
          <div class="mb-3 col d-grid gap-2">
            <button
              class="btn btn-primary row"
              @click="changeLife('player1', 1)"
            >
              +
            </button>
            <h1 class="row mx-auto d-block">
              {{ gameData.player1Life.value }}
            </h1>

            <button
              class="btn btn-primary row"
              @click="changeLife('player1', -1)"
            >
              -
            </button>
          </div>
        </div>
        <div class="mb-3 col">
          <label for="player2" class="form-label">Player 2 Name:</label>
          <input
            type="text"
            class="form-control mb-3"
            id="player2"
            v-model="gameData.player2Name.value"
          />
          <div class="mb-3 col d-grid gap-2">
            <button
              class="btn btn-primary row"
              @click="changeLife('player2', 1)"
            >
              +
            </button>
            <h1 class="row mx-auto d-block">
              {{ gameData.player2Life.value }}
            </h1>

            <button
              class="btn btn-primary row"
              @click="changeLife('player2', -1)"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="container mt-4">
          <div class="row">
            <div class="col text-center">
              <h2 id="score">
                {{ gameData.player1Score.value }}:{{
                  gameData.player2Score.value
                }}
              </h2>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col text-center">
              <button
                class="btn btn-primary"
                id="increasePlayer1"
                @click="changeScore('player1', 1)"
              >
                Player 1
              </button>
            </div>
            <div class="col text-center">
              <button
                class="btn btn-primary"
                id="increasePlayer2"
                @click="changeScore('player2', 1)"
              >
                Player 2
              </button>
              <button class="btn btn-primary" @click="resetScore()">
                reset
              </button>
            </div>
            <div class="container mt-5">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  v-model="fullUrl"
                  readonly
                />
                <button
                  class="btn btn-outline-secondary"
                  @click="copyToClipboard"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
import db from "../firestore"; // Adjust the path if your firebase.js file is in a different directory
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { watch } from "vue";
export default {
  name: "HomePage",
  data() {
    return {
      gameData: {
        player1Name: {
          value: "",
        },
        player2Name: {
          value: "",
        },
        player1Life: {
          value: 20,
        },
        player2Life: {
          value: 20,
        },
        player1Score: {
          value: 0,
        },
        player2Score: {
          value: 0,
        },
      },
      thisGameId: "",
      currentAdress: window.location.href,
    };
  },

  computed: {
    fullUrl() {
      return (
        this.currentAdress + "overlay/" + localStorage.getItem("thisGameId")
      );
    },
  },
  mounted() {
    if (!localStorage.getItem("gameData"))
      localStorage.setItem("gameData", JSON.stringify(this.gameData));

    this.thisGameId = localStorage.getItem("thisGameId");
    this.gameData = JSON.parse(localStorage.getItem("gameData"));
    console.log(this.gameData);

    if (!this.thisGameId) this.savePlayerData();
    watch(
      () => this.gameData,

      () => {
        this.updateFirestoreDocument();
        localStorage.setItem("gameData", JSON.stringify(this.gameData));
      },
      { deep: true }
    );
  },
  methods: {
    copyToClipboard() {
      const textToCopy = this.fullUrl;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Copied to clipboard!");
        })
        .catch((err) => {
          console.error("Unable to copy to clipboard", err);
        });
    },
    async savePlayerData() {
      try {
        console.log("uspjeh");
        const docRef = await addDoc(collection(db, "players"), {
          gameData: {
            player1Name: {
              value: this.gameData.player1Name.value,
              position: {
                x: 100,
                y: 100,
                h: 110,
                w: 100,
              },
            },
            player2Name: {
              value: this.gameData.player2Name.value,
              position: {
                x: 100,
                y: 100,
                h: 110,
                w: 100,
              },
            },
            player1Life: {
              value: this.gameData.player1Life.value,
              position: {
                x: 100,
                y: 100,
                h: 110,
                w: 100,
              },
            },
            player2Life: {
              value: this.gameData.player2Life.value,
              position: {
                x: 100,
                y: 100,
                h: 110,
                w: 100,
              },
            },
            player1Score: {
              value: this.gameData.player1Score.value,
              position: {
                x: 100,
                y: 100,
                h: 110,
                w: 100,
              },
            },
            player2Score: {
              value: this.gameData.player2Score.value,
              position: {
                x: 100,
                y: 100,
                h: 110,
                w: 100,
              },
            },
          },
        });
        localStorage.setItem("thisGameId", docRef.id);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },

    async updateFirestoreDocument() {
      const docRef = doc(db, "players", localStorage.getItem("thisGameId"));

      try {
        await updateDoc(docRef, {
          "gameData.player1Name.value": this.gameData.player1Name.value,
          "gameData.player2Name.value": this.gameData.player2Name.value,
          "gameData.player1Life.value": this.gameData.player1Life.value,
          "gameData.player2Life.value": this.gameData.player2Life.value,
          "gameData.player1Score.value": this.gameData.player1Score.value,
          "gameData.player2Score.value": this.gameData.player2Score.value,
        });

        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    },

    changeLife(player, amount) {
      if (player === "player1") {
        this.gameData.player1Life.value += amount;
      } else {
        this.gameData.player2Life.value += amount;
      }
      if (this.gameData.player1Life.value < 0) {
        this.gameData.player1Life.value = 0;
      }
      if (this.gameData.player2Life.value < 0) {
        this.gameData.player2Life.value = 0;
      }
    },
    changeScore(player, amount) {
      if (player === "player1") {
        this.gameData.player1Score.value += amount;
      } else {
        this.gameData.player2Score.value += amount;
      }
    },
    resetScore() {
      this.gameData.player1Score.value = 0;
      this.gameData.player2Score.value = 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
