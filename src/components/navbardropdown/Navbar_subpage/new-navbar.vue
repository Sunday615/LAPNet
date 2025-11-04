<script setup lang="ts">
import productdropdown from './product-dropdown.vue'
import dropdownmember from './memberdropdown.vue'
import aboutusdropdown from './aboutusdropdown.vue';


function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>


<template>
    <nav class="navbar">
        <img id="navbar-bg" src="../../../assets/Navbarasset/navbar-bg.png" alt="">
        <div class="logo">
            <router-link to="/"><img src="../../../assets/Logo-lapnet/logolapnet.PNG" alt=""></img></router-link>
            <router-link to="/">  <img src="../../../assets/Logo-lapnet/textlogo.PNG" alt=""></router-link>
          

        </div>
        <div class="listnavbar">
            <ul>
               <li @click="goTop()"><productdropdown></productdropdown></li>
               <li @click="goTop()" ><dropdownmember></dropdownmember></li>
               <li style="  padding: 10px 20px; font-size:21px;" @click="goTop()"><router-link to="/newsgridpage1">ຂ່າວສານ ແລະ ກິດຈະກຳ</router-link></li>
               <li style="  padding: 10px 20px; font-size:21px;"> <router-link to="/joinus">ຮ່ວມງານກັບເຮົາ </router-link> </li>
               <li><aboutusdropdown></aboutusdropdown></li>
               <li style="font-size:21px;"> <router-link to="/contact">ຕິດຕໍ່ພວກເຮົາ</router-link> </li>
            </ul>
        </div>
    </nav>
</template>


<style scoped>
.listnavbar ul li {
    font-size: 23px;
    color: #fff;
    font-family: notosanlao;
    padding-right: 15px;
    cursor: pointer;

}
.listnavbar ul{
 display: flex;
 padding-left: 55px;
 align-items: center;
}

#navbar-bg{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 160px;
}
.listnavbar{
    display: flex;
    align-items: center;
    
    width: 80%;
    height: 100%;
  
}
.logo img{
    width: 120px;
    height: 120px;
    margin-right: 10px;

}
.logo{
    display: flex;
    align-items: center;
    padding-left: 70px;
    width: 20%;
    height: 100%;
 
}

.navbar{
    width: 100%;
    height: 160px;
    display: flex;
    

}
</style>