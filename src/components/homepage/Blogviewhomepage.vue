<template>
  <div class="news-swiper-container">
    <Swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="2"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: autoplayDelay,
        disableOnInteraction: false
      }"
      navigation
      class="news-swiper"
    >
      <SwiperSlide
        v-for="(item, index) in newsItems"
        :key="index"
        class="news-card"
      >
        <div class="card">
          <img :src="item.image" alt="news" class="card-img" />
          <div class="card-content">
            <p class="date">{{ item.date }}</p>
            <h3 class="title">{{ item.title }}</h3>
            <a :href="item.link" class="read-more" target="_blank">
              ອ່ານເພີ່ມເຕີ່ມ →
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ✅ ข่าวแต่ละข่าวมีลิงก์อ่านเพิ่มเติมของตัวเอง
const newsItems = [
  {
    image: '/images/1.jpg',
    date: '19 ທັນວາ 2024',
    title: 'ພິທີລົງນາມເຊັນສັນຍາໂຄງການຊຳລະຂ້າມແດນລາວ-ຈີນ',
    link: '/news/1'
  },
  {
    image: '/images/2.png',
    date: '19 ສິງຫາ 2024',
    title: 'ແຈ້ງເຊີນເຂົ້າຮ່ວມປະມູນຍື່ນຊອງລາຄາ ການບຳລຸງຮັກສາອຸປະກອນເຄືອຂ່າຍ',
    link: '/news/2'
  },
  {
    image: '/images/3.jpg',
    date: '30 ພຶດສະພາ 2024',
    title: 'ແຈ້ງເຊີນປະມູນ ອຸປະກອນ HARDWARE ເພື່ອສ້າງສູນສຳຮອງຂໍ້ມູນຂອງບໍລິສັດ LAPNET',
    link: '/news/3'
  },
  {
    image: '/images/4.png',
    date: '03 ເມສາ 2024',
    title: 'ພິທີເປີດໂຕການນຳໃຊ້ລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງ ລາວ - ໄທ',
    link: '/news/4'
  },
  {
    image: '/images/5.jpg',
    date: '14 ມີນາ 2024',
    title: 'ພິທີ ເຊັນສັນຍາວ່າດ້ວຍການຮ່ວມມືທາງດ້ານການເຊື່ອມຕໍ່ລະບົບຊຳລະຂ້າມແດນ QR CODE ລະຫວ່າງ ສປປ ລາວ ແລະ ປະເທດໄທ',
    link: '/news/5'
  },
  {
    image: '/images/6.jpg',
    date: '29 ກັນຍາ 2023',
    title: 'ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ເດີນທາງໄປແລກປ່ຽນບົດຮຽນທາງດ້ານການໃຫ້ບໍລິການເງິນທີ່ປະເທດສິງກະໂປ',
    link: '/news/6'
  }
]

const autoplayDelay = 3000
</script>

<style scoped>
*{
    font-family: notosanlao;
}
.news-swiper-container {
  width: 100%;
  max-width: 1500px;
 
  margin: 0 auto;
  padding: 40px 0;
}

.card {
  background: #19175a;
  height: 650px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform .3s;

}

.card:hover {
  transform: translateY(-5px);
}

.card-img {
  width: 100%;
  height: 450px;
  object-fit: cover;

}

.card-content {
  padding: 15px 20px;
}

.date {
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.title {
  font-size: 1.3rem;
  font-family: notosanlao-bold;
  margin-bottom: 25px; 
  color: #fff;
  margin-top: 15px;

}

.read-more {
  font-size: 1.1rem;
  color: #ffffff;
  text-decoration: none;
  background-color: #433BFF;
  padding: 10px 10px 10px 10px;
  border-radius: 7px;
  
  
}

.read-more:hover {
  text-decoration: underline;
}

.swiper-button-next,
.swiper-button-prev {
  color: #ffffff;
  transition: color .3s;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #063e9d;
}
</style>