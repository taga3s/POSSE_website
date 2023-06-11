<script setup lang="ts">
import Hero from "../components/features/Quiz/Hero.vue";
import Quiz from "../components/features/Quiz/Quiz.vue";
import Line from "../components/features/common/Line.vue";
import LineAdd from "../components/features/common/LineAdd.vue";

import { quizSet } from "../constants";
</script>

<template>
  <article class="l-main">
    <Hero />
    <section class="p-quiz-container" id="js-quiz-area">
      <Quiz v-for="q in quizSet" :quiz="q" :key="q.num" />
    </section>
    <Line />
    <LineAdd />
  </article>
</template>
