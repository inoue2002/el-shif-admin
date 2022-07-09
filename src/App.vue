<script setup>
import AsideMenu from "@/components/AsideMenu.vue";
import FooterBar from "@/components/FooterBar.vue";
import NavBar from "@/components/NavBar.vue";
import OverlayLayer from "@/components/OverlayLayer.vue";
import menu from "@/menu.js";
import { useLayoutStore } from "@/stores/layout.js";
import { useMainStore } from "@/stores/main.js";
import { useStyleStore } from "@/stores/style.js";
import { computed } from "vue";
import { RouterView } from "vue-router";

const styleStore = useStyleStore();

// 白基調にしたい場合は'white'を指定する
styleStore.setStyle("basic");
styleStore.setDarkMode(false);

const mainStore = useMainStore();

mainStore.setUser({
  name: "John Doe",
  email: "john@example.com",
  avatar:
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",
});

const layoutStore = useLayoutStore();

const isAsideLgActive = computed(() => layoutStore.isAsideLgActive);

const overlayClick = () => {
  layoutStore.asideLgToggle(false);
};
</script>

<template>
  <NavBar />
  <AsideMenu :menu="menu" />
  <RouterView />
  <FooterBar />
  <OverlayLayer
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
</template>
