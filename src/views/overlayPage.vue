<template>
  <div>
    <img src="https://i.imgur.com/moqON4T.png" width="1920" height="1080" />
    <h2>User Details</h2>
    <p>User ID: {{ $route.params.id }}</p>
    <!-- Fetch user details based on the ID and display them -->
    <p v-for="(value, key) in entryData" v-bind:key="key">
      {{ key }} : {{ value }}
    </p>
    <div v-for="(value, key) in entryData" v-bind:key="key">
      <Vue3DraggableResizable
        v-model:x="value.position.x"
        v-model:y="value.position.y"
        v-model:w="value.position.w"
        v-model:h="value.position.h"
        :initW="110"
        :initH="120"
        :draggable="true"
        :resizable="true"
        @drag-start="active = true"
        @drag-end="(active = false), rememberPosition()"
        @resize-end="rememberPosition()"
      >
        <p
          :style="{
            fontSize: calculateFontSize(value.position.w, value.position.h),
          }"
          data-bs-toggle="tooltip"
          data-bs-title="Default tooltip"
        >
          {{ value.value }}
        </p>
        <p v-if="active">{{ key }}</p>
      </Vue3DraggableResizable>
    </div>
  </div>
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    data-bs-title="This top tooltip is themed via CSS variables."
  >
    Custom tooltip
  </button>
</template>

<script>
//v-for="(value, key) in entryData"
import Vue3DraggableResizable from "vue3-draggable-resizable";
//default styles
import "vue3-draggable-resizable/dist/Vue3DraggableResizable.css";
import db from "../firestore";
import { doc, onSnapshot } from "firebase/firestore";

import { updateDoc } from "firebase/firestore";
export default {
  // Use the $route to access the dynamic parameter
  async mounted() {
    (this.id = this.$route.params.id),
      onSnapshot(doc(db, "players", this.id), (doc) => {
        const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        this.entryData = {
          ...doc.data().gameData,
        };
        console.log(source, " data: ", doc.data());
      });
  },
  components: {
    Vue3DraggableResizable,
  },
  data() {
    return {
      active: false,
      id: "",
      entryData: {},
    };
  },
  methods: {
    print(val) {
      console.log(val);
    },
    calculateFontSize(w, h) {
      const fontSize = Math.min(w, h) / 2;
      return `${fontSize}px`;
    },
    async rememberPosition() {
      const docRef = doc(db, "players", localStorage.getItem("thisGameId"));

      try {
        await updateDoc(docRef, {
          "gameData.player1Name.position": this.entryData.player1Name.position,
          "gameData.player2Name.position": this.entryData.player2Name.position,
          "gameData.player1Life.position": this.entryData.player1Life.position,
          "gameData.player2Life.position": this.entryData.player2Life.position,
          "gameData.player1Score.position":
            this.entryData.player1Score.position,
          "gameData.player2Score.position":
            this.entryData.player2Score.position,
        });

        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    },
  },
};
</script>
