<template>
  <div class="pagination">
    <button
      class="page-btn"
      :disabled="currentPage === 1"
      @click="prevPage"
    >
      ‹ Prev
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      class="page-btn"
      :class="{ active: currentPage === page }"
      @click="goToPage(0)"
    >
      {{ page }}
    </button>

    <button
      class="page-btn"
      :disabled="currentPage === totalPages"
      @click="nextPage"
    >
      Next ›
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
import { ref } from "vue";

const totalPages = 2;
const currentPage = ref(1);

function gonewpage2() {
  router.push('/newsgridpage2') // navigate to newpage2 page
}


function goToPage(page: number) {
  currentPage.value = page;
}

function nextPage() {
  if (currentPage.value < totalPages) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 30px;
}

/* Pagination button styling */
.page-btn {
  background-color: #433bff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.page-btn:hover:not(:disabled) {
  background-color: #5a53ff;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Active page */
.page-btn.active {
  background-color: #2c25d3;
  font-weight: bold;
  box-shadow: 0 0 5px rgba(67, 59, 255, 0.5);
}
</style>
