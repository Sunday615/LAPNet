<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()


function goproduct4() {
    router.push("/products-service/products-4")
}

</script>


<template>
    <div class="homepagecontent4">
        <img src="../../assets/Homepage-assets/bg-content4.png" alt="">

        <div data-aos="fade-up" data-aos-delay="700">
            <button @click = goproduct4() >
                <span>ອ່ານເພີ່ມເຕີ່ມ</span>
            </button>
        </div>
    </div>

</template>


<style scoped>
.homepagecontent4 {
    width: 100%;
    height: 1000px;


}

.homepagecontent4 img {
    width: 100%;
    height: 1000px;
    position: absolute;
    z-index: -1;
}

.homepagecontent4 button {
    margin-top: 700px;
    margin-left: 650px;
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