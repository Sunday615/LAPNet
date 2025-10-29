<script setup lang="ts">
    import homepage from './homepage.vue'
    import homepagecontent2 from './homepagecontent2.vue'
    import homepagecontent3 from './homepagecontent3.vue'
    import homepagecontent4 from './homepagecontent4.vue'
    import memberscrolling from './memberscrolling.vue' 
    import news from './blog-news.vue'
    import ft from '../Navbar-footer/ft.vue'
   
    
    
</script>

<template>
    
<div class="hiden-overflow">
     <homepage></homepage>
 <homepagecontent2></homepagecontent2>
 <homepagecontent3></homepagecontent3>
 <homepagecontent4></homepagecontent4>
 <memberscrolling></memberscrolling>
 <news></news>
 <ft></ft>
</div>

</template>

<style scoped>
    .hiden-overflow{
        width: 100%;
        height: auto;
        overflow: hidden;

    }
</style>
