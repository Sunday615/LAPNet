<script setup lang="ts">
import productdropdown from './product-dropdown.vue'
import dropdownmember from './memberdropdown.vue'
import aboutusdropdown from './aboutusdropdown.vue';

</script>


<template>
    <nav class="navbar">
        <img id="navbar-bg" src="../../assets/Navbarasset/navbar-bg.png" alt="">
        <div class="logo">
            <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="">
            <img src="../../assets/Logo-lapnet/textlogo.PNG" alt="">

        </div>
        <div class="listnavbar">
            <ul>
               <li><productdropdown></productdropdown></li>
               <li><dropdownmember></dropdownmember></li>
               <li style="  padding: 10px 20px;">ຂ່າວສານ ແລະ ກິດຈະກຳ</li>
               <li style="  padding: 10px 20px;">ຮ່ວມງານກັບເຮົາ</li>
               <li><aboutusdropdown></aboutusdropdown></li>
               <li>ຕິດຕໍ່ພວກເຮົາ</li>
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

}
.listnavbar ul{
 display: flex;
 padding-left: 55px;
 align-items: center;
}

#navbar-bg{
    position: absolute;
    z-index: -1;
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