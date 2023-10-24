<template>
  <div class="about bf">
    <p class="title">【爱摸鱼温馨提示您】</p>
    <p>你好，摸鱼人，工作再累，一定不要忘记摸鱼哦 ！</p>
    <p>有事没事起身去茶水间去廊道去天台走走，别老在工位上坐着。</p>
    <p>多喝点水，钱是老板的，但命是自己的 !</p><br />
    <p>🐟 好好摸鱼！摸鱼人 {{daysToWeekend}}</p><br />
    <p>【友情提示】三甲医院 ICU 躺一天平均费用大概一万块。</p>
    <p>你晚一天进 ICU，就等于为你的家庭多赚一万块。少上班，多摸鱼。</p>
    <p>上班是帮老板赚钱，摸鱼是赚老板的钱！最后，祝愿天下所有摸鱼人，都能愉快的渡过每一天 !</p>
    <p class="tips">这是爱摸鱼的第一版，还有很多东西不太完善，更多精彩正在路上，感谢您的支持！</p>
    <p class="announce">摸鱼办 宣</p>
  </div>
</template>

<script setup>
import { computed } from "vue";


const daysToWeekend = computed(() => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 获取当前是星期几，0代表周日，1代表周一，以此类推

  // 计算距离周六或周日的天数
  let daysToWeekend;
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    daysToWeekend = "今天就是周末哦，尽情玩耍！"; // 如果今天是周日，距离周六还有6天
  } else if (dayOfWeek === 5) {
    daysToWeekend = "明天就是周末了，坚持一下！"; // 如果今天是周日，距离周六还有6天
  } else {
    daysToWeekend = `还有 ${5 - dayOfWeek} 天就是周末啦！`; // 其他情况下，距离下一个周六还有6 - dayOfWeek + 1 天
  }

  return daysToWeekend;
})
</script>

<style lang="less" scoped>
.about {
  background-color: var(--theme-bg-color-a8);
  padding: 20px;
  p {
    text-align: center;
    line-height: 1.8;
    margin-bottom: 12px;
  }
  .title {
    font-size: 18px;
    margin-bottom: 24px;
    font-weight: bold;
  }
  .tips {
    font-size: 12px;
    color: gray;
  }
  .announce {
    text-align: right;
    margin-top: 28px;
  }
}
</style>