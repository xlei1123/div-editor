<template>
  <el-row :gutter="8" class="layout">
    <el-col :span="4" class="sideBar">
      <h4 class="moduleName">编辑器demo</h4>
      <el-menu :default-active="activeMenu" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/editor/pro">
          <el-icon><icon-menu /></el-icon>
          <router-link to="/editor/pro">完整编辑器</router-link>
        </el-menu-item>
        <el-menu-item index="/editor/noheader">
          <el-icon><setting /></el-icon>
          <router-link to="/editor/noheader">无头编辑器</router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <el-card class="boxCard">
        <router-view></router-view>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue';

const route = useRoute();
const activeMenu = computed(() => {
  return route.fullPath;
});
const hasAuthQueryAssets = ref(false);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

</script>
<style scoped>
.layout {
  min-height: 100%;
}
.sideBar {
  min-height: 100%;
  background-color: #fff;
}
:deep(.el-menu) {
  border-right: none;
}
.moduleName {
  font-size: 18px;
  margin: 16px;
}
.boxCard {
  min-height: 100%;
  background-color: #fff;
}
</style>
