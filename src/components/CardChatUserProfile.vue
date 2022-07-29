<script setup>
import CardBox from "@/components/CardBox.vue";
import { ref } from "vue";

defineProps({
  number: {
    type: Number,
    default: 0,
  },
  icon: {
    type: String,
    default: null,
  },
  prefix: {
    type: String,
    default: null,
  },
  suffix: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: null,
  },
  trend: {
    type: String,
    default: null,
  },
  trendType: {
    type: String,
    default: null,
  },
});

const user = ref({});

user.value = {
  userId: "xxxx",
  image:
    "https://profile.line-scdn.net/0h9-Obb_N6ZgJiG0-m4AcYfRJLZWhBaj8QTHR-ZlMYOWELKXFWHnovYFYSbTcNfCNcTH4vYlIcaDNuCBFkfE2aNmUrODVfIiNSRnUs5w/preview",
  displayName: "おつにっしー",
};
</script>

<template>
  <CardBox>
    ユーザー情報

    <div>
      <div class="flex justify-center mt-4">
        <img :src="user.image" alt="" class="rounded-full" />
      </div>
      <div class="mt-4 text-center">
        <p class="text-xl font-bold">{{ user.displayName }}</p>
      </div>
    </div>

    <div class="mt-6">
      <p>最近の勤務状況</p>
      <p class="mt-2 font-bold text-3xl">最悪</p>
    </div>
    <div class="mt-6">
      <p>次回出勤予定日</p>
      <p class="mt-2 font-bold text-3xl">9/20</p>
    </div>
    <div class="mt-6">
      <p>ノート</p>
      <textarea class="w-full"></textarea>
    </div>
  </CardBox>
</template>
