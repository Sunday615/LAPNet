<script setup lang="ts">
import productdropdown from '../navbar-homepage/product-dropdown.vue'
import dropdownmember from '../navbar-homepage/memberdropdown.vue'
import aboutusdropdown from '../navbar-homepage/aboutusdropdown.vue';




function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>


<template>
    <nav class="navbar">
        <img id="navbar-bg" src="../../../assets/Homepage-assets/bg-page1.png" alt="">
        <div class="logo">
            <img src="../../../assets/Logo-lapnet/logolapnet.PNG" alt="">
        

        </div>
        <div class="listnavbar">
            <ul>
               <li @click="goTop()"><productdropdown></productdropdown></li>
               <li @click="goTop()"><dropdownmember></dropdownmember></li>
               <li style="  padding: 10px 20px;" @click="goTop()"> <router-link to="/newsgridpage1"> ຂ່າວສານ ແລະ ກິດຈະກຳ</router-link></li>
               <li style="  padding: 10px 20px;"><router-link to="/joinus">ຮ່ວມງານກັບເຮົາ</router-link> </li>
               <li><aboutusdropdown></aboutusdropdown></li>
               <li> <router-link to="/contact">ຕິດຕໍ່ພວກເຮົາ</router-link> </li>
            </ul>
        </div>
        <div class="search">
            <div class="changelanguage">
                <a href="" style="padding-right: 10px;">EN  </a> 
                <p> / </p>
                <a href="" style="padding-left: 10px;"> LA</a>
                
                
            </div>
            <div class="searchbox">
            
            </div>
        </div>
    </nav>
</template>


<style scoped>
.searchbox{
    width: 150px;
    height: 60px;


}
.searchbox i{
    font-size: 30px;
    color: white;
    cursor: pointer;
}

.changelanguage {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
}

.searchbox{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
}
.changelanguage{
    width: 50%;
    height: 100%;
    
    
}
.search{
    width: 15%;
    height: 120px;
    display: flex;
 
}
.listnavbar ul li {
    font-size: 23px;
    color: #fff;
    font-family: notosanlao;


}
.listnavbar ul{
 display: flex;

 align-items: center;
}

#navbar-bg{
    position: absolute;
    z-index: -1;
}
.listnavbar{
    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;
 
  
}
.logo img{
  width: 90px;
  height: 90px;
   

}
.logo{
    display: flex;
    align-items: center;
   
    justify-content: end;


    width: 9%;
    height: 100%;
 
}

.navbar{
    width: 100%;
    height: 160px;
    display: flex;
   
    

}
</style>