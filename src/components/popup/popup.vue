<template>
  <div v-if="show" class="popup-overlay" @click.self="closePopup">
    <div ref="popup" class="popup-card">
      <!-- ปุ่มปิด -->
      <button class="popup-close" @click="closePopup">✕</button>

      <!-- เนื้อหาโฆษณา -->
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370" alt="Promo" class="popup-img" />
      <div class="popup-content">
        <h2 class="popup-title">✨ โปรโมชั่นสุดหรู!</h2>
        <p class="popup-text">
          รับส่วนลด <strong>50%</strong> สำหรับลูกค้าใหม่<br />
          พร้อมของขวัญพิเศษเมื่อสั่งซื้อภายในวันนี้ 🛍️
        </p>
        <button class="popup-btn" @click="closePopup">รับสิทธิ์เลย</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const show = ref(false)
const popup = ref(null)

onMounted(() => {
  // แสดง popup หลัง delay 1.5 วิ
  setTimeout(() => {
    show.value = true
    requestAnimationFrame(() => {
      // เอฟเฟกต์เข้า: fade + zoom-in + blur
      const tl = gsap.timeline()
      tl.fromTo(
        popup.value,
        { opacity: 0, scale: 0.85, filter: 'blur(8px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
        }
      )
    })
  }, 1500)
})

function closePopup() {
  // เอฟเฟกต์ออก: zoom-out + fade + blur
  const tl = gsap.timeline({
    onComplete: () => (show.value = false),
  })
  tl.to(popup.value, {
    opacity: 0,
    scale: 0.85,
    filter: 'blur(8px)',
    duration: 0.6,
    ease: 'power2.inOut',
  })
}
</script>

<style scoped>
/* 🩶 พื้นหลังโปร่ง */
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
}

/* 📦 กล่อง popup */
.popup-card {
  position: relative;
  background: rgba(255, 255, 255, 0.97);
  border-radius: 24px;
  width: 90vw;
  max-width: 850px;
  height: 80vh;
  padding: 28px;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.35);
  overflow-y: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
}

/* ปุ่มปิด */
.popup-close {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 1.8rem;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  color: #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: 0.3s;
}

.popup-close:hover {
  background: #ff4c24;
  color: white;
  transform: rotate(90deg) scale(1.1);
}

/* รูปภาพ */
.popup-img {
  width: 100%;
  border-radius: 18px;
  object-fit: cover;
  height: 45vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* เนื้อหา */
.popup-content {
  padding: 16px;
}

.popup-title {
  font-size: 2.2rem;
  color: #ff4c24;
  margin-bottom: 12px;
  font-weight: 700;
}

.popup-text {
  color: #333;
  margin-bottom: 24px;
  font-size: 1.2rem;
  line-height: 1.6;
}

.popup-btn {
  background: linear-gradient(135deg, #ff4c24, #ff7a1a);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s;
}

.popup-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(255, 100, 20, 0.5);
}
</style>