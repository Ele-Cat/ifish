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
        <!-- https://hellokit.com.cn/fakeupdate -->
        <div
          class="fake-item"
          :title="fake.label"
          v-for="(fake, index) in fakes"
          :key="index"
          @click="handleUseFake(fake)"
        >
          <img :src="fake.cover" alt="" />
          <p>{{ fake.label }}</p>
        </div>
      </div>
      <div class="tips">
        <p>
          1.本功能会让你的电脑进入一个假更新的画面，让别人以为你的电脑正在升级，这时候你就可以休息一下，优雅地喝一杯咖啡。不要有内疚感，适当的休息可以让你的大脑重新充满活力，能面对更多挑战，更高效地完成工作。
        </p>
        <p>2.全屏后，点击Esc退出伪装升级。</p>
      </div>
    </div>
  </IDialog>
  <Teleport to="body">
    <component
      ref="fakeRef"
      v-show="isFullscreen"
      :visible="isFullscreen"
      :is="activeFake.component"
      @contextmenu="(e) => e.preventDefault()"
    />
  </Teleport>
</template>

<script setup>
import { nextTick, reactive, ref, defineAsyncComponent } from "vue";
import { useFullscreen } from "@vueuse/core";
import { toast } from "@/utils/feedback";

const Windows98 = defineAsyncComponent(() => import("./Windows98.vue"));
const WindowsXp = defineAsyncComponent(() => import("./WindowsXp.vue"));
const WindowsVista = defineAsyncComponent(() => import("./WindowsVista.vue"));
const Windows7 = defineAsyncComponent(() => import("./Windows7.vue"));
const Windows8 = defineAsyncComponent(() => import("./Windows8.vue"));
const Windows10 = defineAsyncComponent(() => import("./Windows10.vue"));
const MacOS = defineAsyncComponent(() => import("./MacOS.vue"));
const BlueScreen = defineAsyncComponent(() => import("./BlueScreen.vue"));
const TheMatrix = defineAsyncComponent(() => import("./TheMatrix.vue"));

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
    label: "Windows 98",
    cover:
      "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/1.png",
    component: Windows98,
  },
  {
    label: "Windows XP",
    cover:
      "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/2.png",
    component: WindowsXp,
  },
  {
    label: "Windows Vista",
    cover:
      "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/3.png",
    component: WindowsVista,
  },
  {
    label: "Windows 7",
    cover:
      "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/4.png",
    component: Windows7,
  },
  {
    label: "Windows 8",
    cover:
      "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/5.png",
    component: Windows8,
  },
  {
    label: "Windows 10",
    cover:
      "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/win10u.png",
    component: Windows10,
  },
  {
    label: "MacOS",
    cover:
      "https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/6.png",
    component: MacOS,
  },
  {
    label: "蓝屏",
    cover: "https://hellokit.com.cn/fakeupdate/assets/img/SSa5BPv.png",
    component: BlueScreen,
  },
  {
    label: "黑客帝国",
    cover: "https://i.postimg.cc/cC9Jvv3R/image.png",
    component: TheMatrix,
  },
]);

const fakeRef = ref(null);
const { isFullscreen, enter } = useFullscreen(fakeRef);

const handleUseFake = (fake) => {
  if (!fake.component) {
    toast({
      type: "warning",
      content: "开发中...",
    });
    return;
  }
  activeFake.value = fake;
  nextTick(() => {
    enter();
  });
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
    margin: 20px 0 10px;
    .fake-item {
      width: 32%;
      margin: 0 2% 10px 0;
      text-align: center;
      cursor: pointer;
      &:nth-of-type(3n) {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: 120px;
        transition: box-shadow 0.2s ease 0s;
      }
      &:hover {
        color: var(--primary-color);
        img {
          box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px,
            rgba(255, 255, 255, 0.4) 0px 0px 3px;
        }
      }
    }
  }
  .tips {
    font-size: 12px;
    color: #666;
  }
}
</style>
