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

const inputMessage = ref("");

const messages = ref([]);

messages.value = [
  {
    userId: "123",
    image:
      "https://profile.line-scdn.net/0hFdXw-JScGUt1Dg1E02xnNAVeGiFWf0BZXWkBJRIITy9BOA0dXGhWfxQGR3kdPVcVXWhfLxUGFHl5HW4ta1jlf3I-R3xIN1wbUWBTrg/preview",
    text: ["あ", "あ"],
    time: "11:00",
    messageId: "xxxxx",
  },
];

const sendMessage = () => {
  if (inputMessage.value === "") return;

  console.log(`sending///:${inputMessage.value}`);
  //最後のメッセージが自分かどうか確認する
  const messagesLenght = messages.value.length;
  console.log(messages.value[messagesLenght - 1]);
  if (messages.value[messagesLenght - 1].userId === null) {
    messages.value[messagesLenght - 1].text.push(inputMessage.value);
  } else {
    messages.value.push({
      userId: null,
      time: "11:40",
      text: [inputMessage.value],
      messageId: "xxxx",
    });
  }
  inputMessage.value = "";
};

const onKeyDown = () => {
  sendMessage();
};
</script>

<template>
  <CardBox>
    トーク内容
    <div class="">
      <!-- トーク画面 -->
      <div class="w-full overflow-y-scroll" style="height: 500px">
        <div v-for="message in messages" :key="message.messageId">
          <!-- ユーザーからのメッセージ -->
          <div v-if="message.userId" class="flex w-full">
            <div class="w-2/12 flex mt-6">
              <img
                src="https://profile.line-scdn.net/0hFdXw-JScGUt1Dg1E02xnNAVeGiFWf0BZXWkBJRIITy9BOA0dXGhWfxQGR3kdPVcVXWhfLxUGFHl5HW4ta1jlf3I-R3xIN1wbUWBTrg/preview"
                alt=""
                class="rounded-full w-10 h-10 justify-center ml-2"
              />
            </div>
            <div class="w-10/12">
              <p v-for="text of message.text" :key="text" class="pt-6 pl-6">
                <span class="p-2 rounded-md bg-slate-200">あ</span>
                <span class="ml-2 text-sm">11:04</span>
              </p>
            </div>
          </div>
          <div v-else>
            <!-- 自分のメッセージ -->
            <div class="mt-6">
              <div class="w-full">
                <p
                  v-for="text of message.text"
                  :key="text"
                  class="pt-6 w-full text-end"
                >
                  <span class="mr-2 text-sm">11:10</span>
                  <span class="p-2 rounded-md bg-green-300">{{ text }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 入力インターフェース -->
      <div class="w-full bg-slate-500 h-16 flex">
        <textarea
          class="w-4/5"
          v-model="inputMessage"
          placeholder="add multiple lines"
          v-on:keydown.ctrl.enter="onKeyDown"
          v-on:keydown.meta.enter="onKeyDown"
        ></textarea>
        <button class="w-1/5" @click="sendMessage()">送信</button>
      </div>
    </div>
  </CardBox>
</template>
