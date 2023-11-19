<template>
  <perfect-scrollbar class="scroll-bar" @ps-scroll-y="onSearchScroll">
    <div class="system-tags">
      <div
        class="system-tag"
        v-for="(nav, idx) in navList"
        :key="idx"
        @click="addSystemTag(nav)"
      >
        <a-tooltip :title="nav.desc && `${nav.name}：${nav.desc}`">
          <img
            :src="renderIcon(nav.url)"
            onerror="this.src='./images/website.svg'"
            :alt="nav.name"
          />
          <p>{{ nav.name }}</p>
        </a-tooltip>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import _ from "lodash";
import useStore from "@/store";
const { useAppStore } = useStore();
import nav from "@/mock/nav";
import { toast } from "@/utils/feedback";
import { renderIco, uuid } from "@/utils/utils";

const pageSize = 48;
const pageNo = ref(1);
const navList = ref([]);
let navLists = [];
onMounted(() => {
  nav.map((nav1) => {
    nav1.nav.map((nav2) => {
      nav2.nav.map((nav3) => {
        nav3.nav.map((nav4) => {
          navLists.push(nav4);
        });
      });
    });
  });
  renderNavs();
});

const renderNavs = () => {
  const cloneNavs = _.cloneDeep(navLists);
  const nextNavs = cloneNavs.splice((pageNo.value - 1) * pageSize, pageSize);
  navList.value = [...navList.value, ...nextNavs];
};

const onSearchScroll = (event) => {
  let el = event.target;
  if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
    pageNo.value++;
    renderNavs();
  }
};

const renderIcon = computed(() => (url) => {
  return renderIco(url);
});

const addSystemTag = (nav) => {
  useAppStore.lists.push({
    id: uuid(21),
    type: "bookmark",
    title: nav.name,
    url: nav.url,
    icon: renderIco(nav.url),
    description: nav.desc,
    gridSize: [1, 1],
  });
  toast({
    content: "添加成功",
  });
};
</script>

<style lang="less" scoped>
.system-tags {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  overflow-x: hidden;
  .system-tag {
    width: 88px;
    padding: 8px;
    margin: 0 12px 12px 0;
    overflow: hidden;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        display: block;
        margin: 0 auto;
        width: 66px;
        height: 66px;
        border-radius: 6px;
      }
      p {
        width: 72px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px, rgba(255, 255, 255, 0.4) 0px 0px 3px;
      background-color: var(--theme-bg-color-a8);
      color: var(--primary-color);
    }
  }
}
</style>
