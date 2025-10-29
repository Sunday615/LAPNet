<script setup lang="ts">
import navbar_homepage from '../homepage/navbar-homepage/navbar-homepage.vue'


import { useRouter } from 'vue-router';

const router = useRouter()


function goproduct5() {
    router.push("/products-service/products-5")
}

</script>

<template>
    <navbar_homepage></navbar_homepage>
    <div class="contentimg1">
        <img src="../../assets/Homepage-assets/bg-page1.png" alt="">
    </div>
    <div class="titlecontent1">
        <div class="headercontent1">
            <div data-aos="fade-down" data-aos-delay = "200">
                <p>ການຊຳລະເງິນຂ້າມ<br>ທະນາຄານຜ່ານ QR</p>
            </div>

        </div>
        <div class="infocontent1">
            <div data-aos="fade-down" data-aos-delay = "200">  <p>ການຊໍາລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ<br>Applications
                ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet ໃຫ້ສາມາດນຳໃຊ້ຟັງຊັ່ນການ<br>ດຳເນີນທຸລະກຳຊໍາລະຜ່ານ QR
                ຂອງທະນາຄານອື່ນໄດ້.</p></div>
          

<div data-aos="fade-up" data-aos-delay = "200">
     <button @click= goproduct5()>
                <span>ອ່ານເພີ່ມເຕີ່ມ</span>
            </button>
</div>
           
        </div>
        <div class="btn-product">

        </div>
    </div>

</template>

<style scoped>
.navbar {

    width: 100%;
    height: 120px;
    position: relative;
    display: flex;

    justify-content: space-evenly;
    align-items: center;
}

.imglogo img {
    width: 100px;
    height: 100px;
}

.listnav {
    display: flex;

}

.listnav ul {
    list-style: none;
}

.listnav ul li {
    margin-right: 40px;
    font-family: notosanlao;
    font-size: 24px;
}

.listnav ul a {
    text-decoration: none;
    color: white;

}

.rightbtn {
    display: flex;
    font-size: 20px;
    color: white;
    margin-right: 30px;
}

.rightbtn a {
    text-decoration: none;
    color: white;
}

.search {
    margin-left: 15px;
    size: 20px;
}

.contentimg1 {
    width: 100%;
    height: auto;

    position: absolute;
    z-index: -1;
    top: -5px;
}

.contentimg1 img {
    width: 100%;
    height: 1000px;

}

.titlecontent1 {
    margin-top: 100px;
    margin-left: 140px;

}

.headercontent1 p {
    font-size: 100px;
    color: white;
    font-family: notosanlao-bold;
    line-height: 1.2;
}

.infocontent1 {
    margin-top: 25px;
    font-size: 25px;
    color: white;
    font-family: notosanlao;


}

button {
    display: inline-block;
    border-radius: 7px;
    background-color: #fff;
    border: none;
    color: #0c2a6a;
    text-align: center;
    font-size: 25px;
    padding: 16px;
    width: 340px;
    transition: all 0.5s;
    font-family: notosanlao-bold;
    box-shadow: 0 0 10px 2px #a2a2a2, 0.2rem 0.2rem 10px;
    cursor: pointer;
    margin: 5px;

    margin-top: 80px;
}

button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

button span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -15px;
    transition: 0.5s;
}

button:hover span {
    padding-right: 15px;
}

button:hover span:after {
    opacity: 1;
    right: 0;
}
</style>