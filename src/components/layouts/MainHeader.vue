<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <p class="setting" @click="changeTheme">
      设置
    </p>
  </div>
</template>

<script setup>
let isDark = false;
let html = document.documentElement;
if (!isDark) {
  // html添加theme 属性值
  html.setAttribute("theme","")
} else {
  // html添加theme 属性值
  html.setAttribute("theme","dark")
}

const changeTheme = () => {
  html.setAttribute("theme", "dark")
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.6);
  height: 36px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    img {
      max-height: 32px;
    }
  }
  .setting {
    font-size: 12px;
    cursor: pointer;
  }
}
</style>