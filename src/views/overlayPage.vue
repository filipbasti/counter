<template>
  <div>
    <img src="https://i.imgur.com/moqON4T.png" width="1920" height="1080" />
    <h2>Pick color</h2>
    <p>User ID: {{ $route.params.id }}</p>
    <compact-picker
      v-model="colors"
      class="np-mb"
      @update:modelValue="changeColor()"
    />
    <!-- Fetch user details based on the ID and display them -->

    <div v-for="(value, key) in entryData" v-bind:key="key">
      <Vue3DraggableResizable
        v-model:x="value.position.x"
        v-model:y="value.position.y"
        v-model:w="value.position.w"
        v-model:h="value.position.h"
        :init-h="110"
        :init-w="100"
        :draggable="true"
        :resizable="true"
        @activated="temp = key"
        @drag-start="active = true"
        @drag-end="(active = false), rememberPosition()"
        @resize-end="rememberPosition()"
      >
        <p
          :style="{
            fontSize: calculateFontSize(value.position.w, value.position.h),
            color: value.position.color,
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
  <button>promjeni boju aktivnog</button>
</template>
<style scoped></style>
<script>
//v-for="(value, key) in entryData"
import Vue3DraggableResizable from "vue3-draggable-resizable";
//default styles
import "vue3-draggable-resizable/dist/Vue3DraggableResizable.css";
import db from "../firestore";
import { doc, onSnapshot } from "firebase/firestore";
import { updateDoc, getDoc } from "firebase/firestore";
import { Compact } from "@lk77/vue3-color";
export default {
  // Use the $route to access the dynamic parameter
  async mounted() {
    this.getInitial();
    this.watcher();
  },
  components: {
    Vue3DraggableResizable,
    "compact-picker": Compact,
  },
  data() {
    return {
      active: false,
      id: "",
      entryData: {},
      temp: "",
      colors: {},
    };
  },
  methods: {
    changeColor() {
      if (this.temp) {
        this.entryData[this.temp].position.color = this.colors.hex;
        this.rememberPosition();
      } else alert("Izaberi sta hoces mijenjat");
    },
    calculateFontSize(w, h) {
      const fontSize = Math.min(w, h) / 2;
      return `${fontSize}px`;
    },
    async watcher() {
      (this.id = this.$route.params.id),
        onSnapshot(doc(db, "players", this.id), (doc) => {
          this.entryData = {
            ...doc.data().gameData,
          };
        });
    },
    async getInitial() {
      const docRef = doc(db, "players", this.$route.params.id);
      const docSnap = await getDoc(docRef);

      this.entryData = { ...docSnap.data().gameData };
    },
    async rememberPosition() {
      const docRef = doc(db, "players", this.id);

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
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    },
  },
};
</script>
