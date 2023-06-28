<!--
 * @Date: 2023-06-06 15:11:11
 * @LastEditors: 李鹏玺 2899952565@qq.com
 * @LastEditTime: 2023-06-06 15:23:20
 * @FilePath: /vue3_ts_demo/src/pages/count/slot.vue
 * @description: 
-->
<template>
  <div>
    <el-button>
      <slot name="header" :count="1"> </slot>
    </el-button>
  </div>
</template>
