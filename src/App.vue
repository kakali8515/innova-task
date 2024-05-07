<template>
  <div id="app-container">
    <!-- header -->
    <Header />
    <!--ENd header -->
    <router-view :key="$route.path" v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- Footer -->
    <!-- <Footer v-if="routeName == 'LogIn' || routeName == 'SignUp'" /> -->
    <!-- Footer -->
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>
