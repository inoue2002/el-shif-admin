<script setup>
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config.js";
import LineChart from "@/components/Charts/LineChart.vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import SectionHeroBar from "@/components/SectionHeroBar.vue";
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import CardChatUserList from "@/components/CardChatUserList.vue";
import CardChat from "@/components/CardChat.vue";
import CardChatUserProfile from "@/components/CardChatUserProfile.vue";
import CardBox from "@/components/CardBox.vue";
import TableSampleClients from "@/components/TableSampleClients.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBoxTransaction from "@/components/CardBoxTransaction.vue";
import CardBoxClient from "@/components/CardBoxClient.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

const titleStack = ref(["Admin", "Dashboard"]);

const chartData = ref(null);

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
  fillChartData();
});

const mainStore = useMainStore();

const clientBarItems = computed(() => mainStore.clients.slice(0, 3));

const transactionBarItems = computed(() => mainStore.history.slice(0, 3));
</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>Chat</SectionHeroBar>
  <SectionMain>
    <SectionTitleBarSub :icon="mdiChartPie" title="Trends overview" />

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <CardChatUserList
        trend="12%"
        trend-type="up"
        color="text-emerald-500"
        :icon="mdiAccountMultiple"
        :number="600"
        label="Clients"
      />
      <CardChat
        trend="12%"
        trend-type="up"
        color="text-emerald-500"
        :icon="mdiAccountMultiple"
        :number="600"
        label="Clients"
      />
      <CardChatUserProfile
        trend="12%"
        trend-type="up"
        color="text-emerald-500"
        :icon="mdiAccountMultiple"
        :number="600"
        label="Clients"
      /> 
    </div>
  </SectionMain>
</template>
