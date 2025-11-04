<template>
  <div class="search-container">
    <!-- ปุ่มเปิด -->
    <button class="open-btn" @click="openSearch">
      <i class="fas fa-search"></i> Search
    </button>

    <!-- Overlay -->
    <transition name="fade">
      <div v-if="isOpen" class="overlay" @click.self="closeSearch">
        <div ref="searchBox" class="search-box">
          <button class="close-btn" @click="closeSearch">
            <i class="fas fa-times"></i>
          </button>

          <div class="search-inner">
            <i class="fas fa-search search-icon"></i>
            <input
              v-model="query"
              type="text"
              class="search-input"
              placeholder="Search something..."
              @keydown.enter="handleSearch"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { gsap } from 'gsap'

const isOpen = ref(false)
const query = ref('')
const searchBox = ref(null)

function openSearch() {
  isOpen.value = true
  nextTick(() => {
    gsap.fromTo(
      searchBox.value,
      { y: -50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
    )
  })
}

function closeSearch() {
  gsap.to(searchBox.value, {
    y: -30,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      isOpen.value = false
      query.value = ''
    },
  })
}

function handleSearch() {
  alert(`Searching for: ${query.value}`)
  closeSearch()
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

/* 🔲 ปุ่มเปิด */
.open-btn {
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #0051ff, #1500b7);
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}
.open-btn:hover {
  background: linear-gradient(135deg, #2910e5, #2d6fff);
  transition: 0.5s;
}

/* 🔳 Overlay */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* 🔍 กล่องค้นหา */
.search-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 35px 40px;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

/* 🔘 ปุ่มปิด */
.close-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  font-size: 22px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}
.close-btn:hover {
  transform: rotate(90deg);
  color: #ff6b6b;
}

/* 🔤 ภายใน */
.search-inner {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 10px;
}

.search-icon {
  color: #ccc;
  font-size: 20px;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 18px;
  font-weight: 300;
}
.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* ✨ Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
