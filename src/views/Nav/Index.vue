<template>
  <Draggable
    :list="apps"
    :animation="100"
    item-key="id"
    class="list-group apps"
    :forceFallback="true"
    ghost-class="ghost"
    :move="onMove"
  >
    <template #item="{ element }">
      <div class="app" :class="[`column${element.gridSize[1]}-row${element.gridSize[0]}`]" @contextmenu.stop="handleAppContextMenu">
        <div class="dataset">
          <div class="bookmark" v-if="element.type === 'bookmark'">
            <img :src="element.data.icon" alt="">
            <div class="description" v-if="element.gridSize[1] == 2 && element.gridSize[0] == 1">
              <p>{{element.data.title}}</p>
              <span>{{element.data.description}}</span>
            </div>
          </div>
          <div class="comp" v-else>
            {{element.data.title}}
          </div>
        </div>
        <!-- <p>{{app.data.title}}{{app.gridSize}}{{app.gridPosition}}</p> -->
        <p class="title">{{element.data.title}}</p>
      </div>
    </template>
  </Draggable>
</template>

<script setup>
import { reactive } from "vue";
import Draggable from 'vuedraggable';
import useStore from "@/store";
const { useAppStore, useContextMenuStore } = useStore();

const apps = reactive(useAppStore.list);

const onMove = (val) => {
  useAppStore.list = apps;
};

const handleAppContextMenu = (e) => {
  e.preventDefault();
  useContextMenuStore.showContextMenu(e.clientX, e.clientY);
  useContextMenuStore.activeType = "app";
}
</script>

<style lang="less">
:root {
  --max-page-width: 1360px;
  --grid-size: 5.5rem;
  --border-radius: 8px;
  --icon-fit: contain;
}
.apps {
  padding: 20px 0 0;
  max-width: var(--max-page-width);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--grid-size));
  grid-template-rows: repeat(auto-fill, var(--grid-size));
  grid-auto-flow: dense;
  grid-auto-rows: var(--grid-size);
  justify-content: center;
  .app {
    position: relative;
    padding: 0 calc(var(--grid-size) / 6) calc(var(--grid-size) / 3);
    .dataset {
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      overflow: hidden;
      cursor: pointer;
      display: flex;
      transition: box-shadow 0.2s ease 0s;
      font-size: calc(var(--grid-size) / 6);
      .bookmark {
        display: flex;
        background-color: rgba(255, 255, 255, 0.9);
        img {
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          margin: auto;
          overflow-clip-margin: content-box;
          overflow: clip;
          object-fit: var(--icon-fit, cover);
        }
        .description {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3px 6px;
          p {
            text-align: left;
            color: rgb(51, 51, 51);
            font-size: 0.95em;
            font-weight: 500;
            line-height: 1.3;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          span {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 0.6em;
            margin-top: 0.3em;
            color: rgb(102, 102, 102);
            line-height: 1.3;
            word-break: break-all;
          }
        }
      }
      .comp {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: aqua;
      }
      &:hover {
        transform: scale(1.01);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px, rgba(255, 255, 255, 0.4) 0px 0px 3px;
        .bookmark {
          img {
            filter: brightness(1.05);
          }
        }
      }
    }
    .title {
      position: relative;
      left: 0px;
      display: inline-block;
      width: 100%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      pointer-events: none;
      font-size: 0.6rem;
      color: #FFF;
      text-shadow: 0 0 4px var(--grey-0);
    }
    &.column1-row1 {
      grid-column-start: span 1;
      grid-row-start: span 1;
    }
    &.column2-row1 {
      grid-column-start: span 2;
      grid-row-start: span 1;
    }
    &.column2-row2 {
      grid-column-start: span 2;
      grid-row-start: span 2;
    }
    &.column3-row2 {
      grid-column-start: span 3;
      grid-row-start: span 2;
    }
    &.column4-row2 {
      grid-column-start: span 4;
      grid-row-start: span 2;
    }
  }
}
</style>
