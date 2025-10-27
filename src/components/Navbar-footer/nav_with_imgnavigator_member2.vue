
<script setup lang="ts">
import navbartemplete from '../Navbar-footer/navbartemplete.vue';
</script>


<template>
    <navbartemplete></navbartemplete>
   
<div class="navigatorcontent">
        <img id="navigator-img" src="../../assets/memberassets/navbg.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <p>ສະມາຊິກລະບົບຊຳລະຂ້າມທະນາຄານເທິງມືຖື</p>
            </div>
            <div class="navigatorlink">
                <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                            class="fa-solid fa-chevron-right"></i></span> ສະມາຊິກ <span
                        style="padding-right: 40px; padding-left: 40px;"><i class="fa-solid fa-chevron-right"></i>
                    </span> ສະມາຊິກລະບົບຊຳລະຂ້າມທະນາຄານເທິງມືຖື</p>
            </div>
        </div>
    </div>
  
</template>
 


<style scoped>




.navigatorcontent {
    width: 100%;
    height: 470px;


}

.navigator-info-container {
    width: 1200px;
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
    font-size: 70px;
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