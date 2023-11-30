<template>
  <div class="container">
    <div id="app" class="row mt-3">
      <div class="col"></div>
      <div class="col-sm-8 col-lg-6 col-md-6 col-10">
        <div class="col">
          <div class="mb-3 col d-grid gap-2">
            <button
              class="btn btn-primary row btn-lg"
              @click="changeLife('player1', 1)"
            >
              +
            </button>
            <h1 class="row mx-auto d-block display-1" style="font-size: 7rem">
              {{ gameData.player1Life.value }}
            </h1>

            <button
              class="btn btn-primary row btn-lg"
              @click="changeLife('player1', -1)"
            >
              -
            </button>
          </div>
        </div>
        <div class="mb-3 col">
          <div class="mb-3 col d-grid gap-2">
            <button
              class="btn btn-primary row btn-lg"
              @click="changeLife('player2', 1)"
            >
              +
            </button>
            <h1 class="row mx-auto d-block display-1" style="font-size: 7rem">
              {{ gameData.player2Life.value }}
            </h1>

            <button
              class="btn btn-primary row btn-lg"
              @click="changeLife('player2', -1)"
            >
              -
            </button>
          </div>
        </div>
        <label for="player1" class="form-label">Player 1 Name:</label>
        <input
          type="text"
          class="form-control mb-3"
          id="player1"
          v-model="gameData.player1Name.value"
        />
        <label for="player2" class="form-label">Player 2 Name:</label>
        <input
          type="text"
          class="form-control mb-3"
          id="player2"
          v-model="gameData.player2Name.value"
        />
        <div>
          <div class="container mt-4">
            <div class="row">
              <div class="col-lg text-center">
                <button
                  class="btn btn-primary"
                  id="increasePlayer1"
                  @click="changeScore('player1', 1)"
                >
                  Player 1
                </button>
              </div>
              <div class="col-lg text-center">
                <h2 id="score">
                  {{ gameData.player1Score.value }}:{{
                    gameData.player2Score.value
                  }}
                </h2>
              </div>

              <div class="col-lg text-center">
                <button
                  class="btn btn-primary"
                  id="increasePlayer2"
                  @click="changeScore('player2', 1)"
                >
                  Player 2
                </button>
              </div>
            </div>
            <div class="row mt-3">
              <button class="btn btn-primary" @click="resetScore()">
                reset
              </button>
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
  </div>
</template>

<script>
import { watch } from "vue";
import gameData from "../models/game";
import scoreMethods from "../handlers/scoreHandlers";
import initializeMethods from "../handlers/initHandlers";
import firestoreMethods from "../handlers/firestoreHandlers";
export default {
  name: "HomePage",
  data() {
    return {
      gameData,

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
    this.initializeGame();

    if (!this.thisGameId) this.savePlayerData(this.gameData);
    watch(
      () => this.gameData,

      () => {
        console.log(gameData);
        this.updateFirestoreDocument(this.gameData);
        localStorage.setItem("gameData", JSON.stringify(this.gameData));
      },
      { deep: true }
    );
  },
  methods: {
    ...initializeMethods,
    ...scoreMethods,
    ...firestoreMethods,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
