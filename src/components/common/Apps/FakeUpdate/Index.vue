<template>
  <img :src="app.icon" class="app-img" alt="" @click.stop="dialogVisible = true" />

  <IDialog
    title="伪装升级"
    :width="640"
    :visible="dialogVisible"
    @cancel="dialogVisible = false"
  >
    <div class="fake-update">
      <p class="title">请选择一个主题</p>
      <div class="fakes">
        <!-- https://fakeupdate.net/ -->
        <div
          class="fake-item"
          :title="fake.label"
          v-for="(fake, index) in fakes"
          :key="index"
          @click="handleUseFake(fake)"
        >
          <img :src="fake.cover" alt="" />
        </div>
      </div>
      <p class="tips">
        本功能会让你的电脑进入一个假更新的画面，让别人以为你的电脑正在升级，这时候你就可以休息一下，优雅地喝一杯咖啡。不要有内疚感，适当的休息可以让你的大脑重新充满活力，能面对更多挑战，更高效地完成工作。
      </p>
    </div>
    <component ref="fakeRef" v-if="activeFake.label" :is="activeFake.component" />
  </IDialog>
</template>

<script setup>
import { nextTick, onMounted, reactive, ref } from "vue";
import { useFullscreen } from "@vueuse/core";
import WindowsXp from "./WindowsXp.vue";

const props = defineProps({
  app: {
    type: Object,
    default: () => {},
  },
});

const dialogVisible = ref(false);
const activeFake = ref({});
const fakes = reactive([
  {
    label: "Windows XP",
    cover: "https://i.postimg.cc/PrG8Pb9Q/2.png",
    component: WindowsXp,
  },
  {
    label: "Windows Vista",
    cover: "https://fakeupdate.net/assets/img/3.png",
  },
  {
    label: "Windows 7",
    cover: "https://fakeupdate.net/assets/img/4.png",
  },
  {
    label: "Windows 8 / 10",
    cover: "https://fakeupdate.net/assets/img/5.png",
  },
  {
    label: "Windows 11",
    cover: "https://fakeupdate.net/assets/img/win10u.png",
  },
  {
    label: "MacOS",
    cover: "https://fakeupdate.net/assets/img/6.png",
  },
]);

const fakeRef = ref(null);
const { isFullscreen, toggle, enter, exit } = useFullscreen(fakeRef);

const handleUseFake = (fake) => {
  // activeFake.value = fake;
  // nextTick(() => {
  //   enter();
  // });
  // document.addEventListener("keydown", function (event) {
  //   console.log("event: ", event);
  //   if (event.key === "Escape") {
  //     exit();
  //     activeFake.value = {};
  //   }
  // });
};
</script>

<style lang="less" scoped>
.fake-update {
  .title {
    text-align: center;
    font-size: 16px;
  }
  .fakes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    .fake-item {
      width: 32%;
      margin: 0 0 10px 0;
      cursor: pointer;
      img {
        width: 100%;
        height: 120px;
      }
      &:hover {
        box-shadow: 0 0 6px red;
      }
    }
  }
  .tips {
    font-size: 12px;
    color: #666;
    margin-top: 20px;
  }
}
</style>
