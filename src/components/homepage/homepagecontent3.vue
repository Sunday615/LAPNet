<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()


function goproduct6() {
    router.push("/products-service/products-6")
}
</script>


<template>
    <div class="content3homepage">
        <img src="../../assets/Homepage-assets/bg-content3.png" alt="">
        <div class="infocontent3">
            <div data-aos="fade-right" data-aod-delay="300">
                     <p>ການຊຳລະເງິນຂ້າມແດນ<br>ໃນຮູບແບບ QR CODE<br>ລະຫວ່າງປະເທດ</p>
        
            </div>
            <div data-aos="fade-up" data-aos-dela="400">
                <button @click = goproduct6()>
                <span>ອ່ານເພີ່ມເຕີ່ມ</span>
            </button>
            </div>
           
        </div>

    </div>

</template>


<style scoped>
@font-face {
    font-family: notosanlao-bold;
    src: url(../Fonts/NotoSansLao-Bold.ttf);
}

.content3homepage {
    width: 100%;
    height: 1100px;


}

.content3homepage img {
    width: 100%;
    height: 1100px;
    position: absolute;
    z-index: -1;

}

.infocontent3 {

    border: 1px solid rgba(255, 0, 0, 0);
    margin-left: 150px;
}

.infocontent3 p {
    font-family: notosanlao-bold;
    font-size: 100px;
    color: #fff;
    line-height: 1.5;
    margin-top: 200px;

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