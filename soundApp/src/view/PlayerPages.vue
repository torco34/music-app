<template>
  <q-page padding>
    <div class="weather-container ">
      <div class="flex">

        <q-btn label="Sol" icon="sunny" color="yellow" @click="simulateWeather('Clear')" />
        <q-btn label=" Lluvia" icon="water_drop" color="blue" @click="simulateWeather('Rain')" />
      </div>


      <div v-if="currentWeather" class="animation-container ">

        <motion-div v-if="isSunny" class="sun-container" :initial="{ scale: 0.5 }" :enter="{ scale: 1.2 }">
          <div class="sun">☀️</div>
        </motion-div>


        <div v-else class="rain-container">
          <motion-div class="cloud" :initial="{ y: -50 }" :enter="{ y: 0 }">
            ☁️
          </motion-div>
          <motion-div v-for="n in 7" :key="n" class="raindrop" :initial="{ y: -200 }" :enter="{ y: 0 }">
            💧
          </motion-div>
        </div>


        <div class="tree-container">
          <div class="tree">
            <div class="tree">🌳</div>

          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';


const currentWeather = ref(null);
const isSunny = ref(false);

const simulateWeather = (weatherType) => {
  currentWeather.value = weatherType;
  isSunny.value = weatherType === 'Clear';
};
</script>

<style>
.weather-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
  width: 600px;
}

.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
}

.sun-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sun {
  font-size: 70px;
  position: relative;
  z-index: 2;
  animation: pulse 3s infinite ease-in-out;
}

.sun-container::before,
.sun-container::after {
  content: '';
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, transparent 40%, yellow 60%);
  animation: rotate-rays 4s linear infinite;
}

.sun-container::after {
  transform: rotate(45deg);
}

@keyframes rotate-rays {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }
}

.rain-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  top: -10px;
}

.cloud {
  position: absolute;
  top: -200px;
  font-size: 14rem;
  z-index: 2;
  animation: float 6s ease-in-out infinite;
}

.raindrop {
  position: absolute;
  font-size: 40px;
  height: 40vh;
  animation: drop 1s infinite;
}

.raindrop:nth-child(2) {
  left: 20px;
  animation-delay: 0s;
}

.raindrop:nth-child(3) {
  left: 40px;
  animation-delay: 0.2s;
}

.raindrop:nth-child(4) {
  left: 60px;
  animation-delay: 0.4s;
}

.raindrop:nth-child(5) {
  left: 80px;
  animation-delay: 0.6s;
}

.raindrop:nth-child(6) {
  left: 100px;
  animation-delay: 0.8s;
}

.raindrop:nth-child(7) {
  left: 120px;
  animation-delay: 1s;
}

@keyframes drop {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(150px);
    opacity: 0;
  }
}

@keyframes float {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(0);
  }
}

.tree-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.tree {
  display: flex;
  font-size: 10rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  width: 200px;
  z-index: -1;
}
</style>
