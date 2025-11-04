<script setup lang="ts">

import navbar from '../../Navbar-footer/navbartemplete.vue'
import contentproduct1 from './contentproduct1.vue';
import ft from '../../Navbar-footer/ft.vue';


import { onMounted } from 'vue'

onMounted(() => {
  // เมื่อ component นี้ถูกโหลด → scroll ขึ้นบนสุด
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // ทำให้เลื่อนนุ่มๆ
  })
})
</script>


<template>
    <navbar></navbar>
    <contentproduct1></contentproduct1>
    <ft></ft>
</template>



<style scoped></style>