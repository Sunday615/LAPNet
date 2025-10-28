<script setup>
import Blogviewhomepage from './Blogviewhomepage.vue';
</script>


<template>
    <div class="container-blog">
        <div class="upsideblog">
            <img id="blogupperimg" src="../../assets/Homepage-assets/blog-bg.png" alt="">
            <div class="logoupperblog">
                <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="">
                <img src="../../assets/Logo-lapnet/textlogo.PNG" alt="">
            </div>
            <div class="title-blog">

                <div data-aos="zoom-out">
                    <p>ຂ່າວສານ ແລະ ກິດຈະກຳ</p>
                </div>

            </div>
            <div class="downblog">
                <blogviewhomepage></blogviewhomepage>
            </div>
        </div>
        <div class="boxcontianer"></div>

    </div>


</template>




<style scoped>
.boxcontianer {
    width: 100%;
    height: 200px;
    background-color: #fff;
}

.container-blog {
    width: 100%;
    height: 1300px;


}

.upsideblog {
    width: 100%;
    height: 70%;
}

#blogupperimg {
    width: 98%;
    height: 100%;
    position: absolute;
    z-index: -1;
    margin-left: 15px;

    border-radius: 35px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.logoupperblog {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;

}

.logoupperblog img {
    width: 150px;
    height: 150px;

}

.title-blog p {
    text-align: center;
    font-size: 70px;
    font-family: notosanlao-bold;
}

.downblog {
    width: 100%;
    height: 750px;
    margin-top: 60px;


}
</style>