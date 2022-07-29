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

const userList = ref([]);

userList.value = [
  {
    userId: "xxxx",
    image:
      "https://profile.line-scdn.net/0hFdXw-JScGUt1Dg1E02xnNAVeGiFWf0BZXWkBJRIITy9BOA0dXGhWfxQGR3kdPVcVXWhfLxUGFHl5HW4ta1jlf3I-R3xIN1wbUWBTrg/preview",
    displayName: "Yosuke Inoue",
  },
  {
    userId: "xxxx",
    image:
      "https://profile.line-scdn.net/0h2UPeFFRXbXp9HHlm7zcTBQ1MbhBebTRoAS0qHR1MMkpAfyN7VnJxGBtPMx8XeSIqUykhGk1JZBpxDxocY0qRTnosM01AJSgqWXInnw/preview",
    displayName: "金城　金太郎",
  },
  {
    userId: "xxxx",
    image:
      "https://profile.line-scdn.net/0h9-Obb_N6ZgJiG0-m4AcYfRJLZWhBaj8QTHR-ZlMYOWELKXFWHnovYFYSbTcNfCNcTH4vYlIcaDNuCBFkfE2aNmUrODVfIiNSRnUs5w/preview",
    displayName: "おつにっしー",
  },
];
</script>

<template>
  <CardBox>
    ユーザー一覧

    <div v-for="user in userList" :key="user.userId">
      <div class="flex mt-4 mb-4">
        <div class="w-3/12 flex">
          <img
            :src="user.image"
            alt=""
            class="rounded-full w-full justify-center m-auto w-12 h-12"
          />
        </div>
        <div class="w-9/12 justify-center">
          <div class="pl-8">
            <div>
              <p class="text-lg font-bold">{{ user.displayName }}</p>
              <p><span class="text-stone-400">あ</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <BaseLevel mobile>
      <img
        src="https://profile.line-scdn.net/0hFdXw-JScGUt1Dg1E02xnNAVeGiFWf0BZXWkBJRIITy9BOA0dXGhWfxQGR3kdPVcVXWhfLxUGFHl5HW4ta1jlf3I-R3xIN1wbUWBTrg/preview"
        alt=""
        class="rounded-full w-16"
      />
      <div>
        <h3 class="text-lg leading-tight text-gray-500 dark:text-gray-400">
          {{ label }}
        </h3>
        <h1 class="text-3xl leading-tight font-semibold">
          <NumberDynamic :value="number" :prefix="prefix" :suffix="suffix" />
        </h1>
      </div>
    </BaseLevel> -->
  </CardBox>
</template>
