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
            v-model="player1Name"
          />
          <div class="mb-3 col d-grid gap-2">
            <button
              class="btn btn-primary row"
              @click="changeLife('player1', 1)"
            >
              +
            </button>
            <h1 class="row mx-auto d-block">{{ player1Life }}</h1>

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
            v-model="player2Name"
          />
          <div class="mb-3 col d-grid gap-2">
            <button
              class="btn btn-primary row"
              @click="changeLife('player2', 1)"
            >
              +
            </button>
            <h1 class="row mx-auto d-block">{{ player2Life }}</h1>

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
              <h2 id="score">{{ player1Score }}:{{ player2Score }}</h2>
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
          </div>
        </div>
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
import db from "../firestore"; // Adjust the path if your firebase.js file is in a different directory
import { addDoc, collection } from "firebase/firestore";
export default {
  name: "Home",
  data() {
    return {
      player1Name: "",
      player2Name: "",
      player1Life: 20,
      player2Life: 20,
      player1Score: 0,
      player2Score: 0,
      initialFlag: false,
    };
  },
  mounted() {
    if (this.initialFlag == false) this.savePlayerData();
  },
  methods: {
    async savePlayerData() {
      try {
        this.initialFlag = true;
        console.log("uspjeh");
        const docRef = await addDoc(collection(db, "players"), {
          player1Name: this.player1Name,
          player2Name: this.player2Name,
          player1Life: this.player1Life,
          player2Life: this.player2Life,
          player1Score: this.player1Score,
          player2Score: this.player2Score,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    changeLife(player, amount) {
      if (player === "player1") {
        this.player1Life += amount;
      } else {
        this.player2Life += amount;
      }
      if (this.player1Life < 0) {
        this.player1Life = 0;
      }
      if (this.player2Life < 0) {
        this.player2Life = 0;
      }
    },
    changeScore(player, amount) {
      if (player === "player1") {
        this.player1Score += amount;
      } else {
        this.player2Score += amount;
      }
    },
    resetScore() {
      this.player1Score = 0;
      this.player2Score = 0;
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
