<template>
  <img :src="app.icon" class="app-img" alt="" @click.stop="dialogVisible = true">

  <IDialog title="假装升级" :width="640" :visible="dialogVisible" @cancel="dialogVisible = false">
    <div class="fake-update">
      <p class="title">请选择一个主题</p>
      <div class="fakes">
        <!-- https://fakeupdate.net/ -->
        <div class="fake-item" v-for="(fake, index) in fakes" :key="index" @click="handleUseFake(fake)">
          <img :src="fake.cover" alt="">
        </div>
      </div>
      <p class="tips">本功能会让你的电脑进入一个假更新的画面，让别人以为你的电脑正在升级，这时候你就可以休息一下，优雅地喝一杯咖啡。不要有内疚感，适当的休息可以让你的大脑重新充满活力，能面对更多挑战，更高效地完成工作。</p>
    </div>
  </IDialog>

  <img ref="fakeRef" v-show="activeFake.cover" :src="activeFake.cover" alt="">
</template>

<script setup>
import { reactive, ref } from "vue"
import { useFullscreen } from "@vueuse/core";

const props = defineProps({
  app: {
    type: Object,
    default: () => {},
  }
})

const dialogVisible = ref(false);
const activeFake = ref({});
const fakes = reactive([
  {
    cover: "https://i.postimg.cc/PrG8Pb9Q/2.png",
  }
])

const fakeRef = ref(null);
const { isFullscreen, toggle, enter } = useFullscreen(fakeRef);

const handleUseFake = (fake) => {
  activeFake.value = fake;
  console.log('fake: ', fake);
  enter();
}
</script>

<style lang="less" scoped>
.fake-update {
  .title {
    text-align: center;
    font-size: 16px;
  }
  .fakes {
    display: flex;
    justify-content: space-between;
    .fake-item {
      width: 33%;
      cursor: pointer;
      img {
        width: 100%;
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