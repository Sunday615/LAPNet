<script setup lang="ts">

import navbartemplete from '../Navbar-footer/navbartemplete.vue';
import ft from '../Navbar-footer/ft.vue';
</script>

<template>



    <navbartemplete></navbartemplete>
    <div class="navigatorcontent">
        <img id="navigator-img" src="../../assets/Vision-bg/navigatormission-bg.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <p>ໂຄງຮ່າງການຈັດຕັ້ງ</p>
            </div>
            <div class="navigatorlink">
                <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                            class="fa-solid fa-chevron-right"></i></span> ກ່ຽວກັບພວກເຮົາ <span
                        style="padding-right: 40px; padding-left: 40px;"><i class="fa-solid fa-chevron-right"></i>
                    </span> ໂຄງຮ່າງການຈັດຕັ້ງ </p>
            </div>
        </div>
    </div>
    <div class="companystructure">
        <img src="../../assets/Aboutusasset/companystructure-2.png" alt="">
    </div>
    <ft></ft>
</template>


<style scoped>
.companystructure{
    width: 100%;
    height: 1100px;
    border: 1px solid red;
}
.navigatorcontent {
    width: 100%;
    height: 300px;

}

.navigatorcontent {
    width: 100%;
    height: 470px;


}

.navigator-info-container {
    width: 1000px;
    height: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

#navigator-img {
    width: 100%;
    height: 470px;
    position: absolute;
    z-index: -1;
}

.titlenavigator p {
    font-size: 80px;
    color: #fff;
    font-family: notosanlao-bold;
    padding-bottom: 70px;
}

.navigatorlink p {
    color: #fff;
    font-size: 20px;

    font-family: notosanlao;
}
</style>