import { createRouter, createWebHistory } from 'vue-router'
import mergehomepage from '../components/homepage/mergehomepage.vue'
import mergeproduct01 from '../components/Products/product1/mergeproduct01.vue'
import mergeproduct02 from '../components/Products/product2/maincontentproduct2.vue'
import mergeproduct03 from '../components/Products/product3/mainproduct3.vue'
import mergeproduct04 from '../components/Products/product4/maincontentproduct4.vue'
import mergeproduct05 from '../components/Products/product5/maincontentproduct5.vue'
import mergeproduct06 from '../components/Products/product6/maincontentproduct6.vue'
import newsgrid_page1 from '../components/Blog-news/page_of_news/newsgrid_page1.vue'
import newsgrid_page2 from '../components/Blog-news/page_of_news/newsgrid_page2.vue'
import joinus from '../components/joinus/joinus.vue'
import vision_mission from '../components/About-us/vision_mission.vue'
import Role from '../components/About-us/Role.vue'
import History from '../components/About-us/History.vue'
import board_of_director from '../components/About-us/board_of_director.vue'
import companystructure from '../components/About-us/companystructure.vue'
import contact from '../components/Contact/contact.vue'




import blogdetail1 from '../components/Blog-news/blogdetailpage/blogdetail1.vue'
import blogdetail2 from '../components/Blog-news/blogdetailpage/blogdetail2.vue'
import blogdetail3 from '../components/Blog-news/blogdetailpage/blogdetail3.vue'
import blogdetail4 from '../components/Blog-news/blogdetailpage/blogdetail4.vue'
import blogdetail5 from '../components/Blog-news/blogdetailpage/blogdetail5.vue'
import blogdetail6 from '../components/Blog-news/blogdetailpage/blogdetail6.vue'
import blogdetail7 from '../components/Blog-news/blogdetailpage/blogdetail7.vue'
import blogdetail8 from '../components/Blog-news/blogdetailpage/blogdetail8.vue'
import blogdetail9 from '../components/Blog-news/blogdetailpage/blogdetail9.vue'
import blogdetail10 from '../components/Blog-news/blogdetailpage/blogdetail10.vue'
import blogdetail11 from '../components/Blog-news/blogdetailpage/blogdetail11.vue'




import membercardpage1 from '../components/member/membercard/membercardpage1.vue'
import membercardpage2 from '../components/member/membercard/membercardpage2.vue'
import membercarpage3 from '../components/member/membercard/membercarpage3.vue'

import membercardpage2_1 from '../components/member/membermobilebanking/membercardpage2_1.vue'
import membercardpage2_2 from '../components/member/membermobilebanking/membercardpage2_2.vue'
import membercarpage2_3 from '../components/member/membermobilebanking/membercarpage2_3.vue'
import Blogdetail12 from '../components/Blog-news/blogdetailpage/blogdetail12.vue'
import Blogdetail13 from '../components/Blog-news/blogdetailpage/blogdetail13.vue'
import Blogdetail14 from '../components/Blog-news/blogdetailpage/blogdetail14.vue'
import Blogdetail15 from '../components/Blog-news/blogdetailpage/blogdetail15.vue'
import Blogdetail16 from '../components/Blog-news/blogdetailpage/blogdetail16.vue'
import Blogdetail17 from '../components/Blog-news/blogdetailpage/blogdetail17.vue'
import Newsgrid_page3 from '../components/Blog-news/page_of_news/newsgrid_page3.vue'

import Blogdetail18 from '../components/Blog-news/blogdetailpage/blogdetail18.vue'
import Blogdetail19 from '../components/Blog-news/blogdetailpage/blogdetail19.vue'
import Blogdetail20 from '../components/Blog-news/blogdetailpage/blogdetail20.vue'

const routes = [
  //#################### Products Path #####################
  { path: '/', name: 'Home', component: mergehomepage },
  { path: '/products-service/', name: 'Product1', component: mergeproduct01 },
  { path: '/products-service/products-1', name: 'Product1', component: mergeproduct01 },
  { path: '/products-service/products-2', name: 'Product2', component: mergeproduct02 },
  { path: '/products-service/products-3', name: 'Product3', component: mergeproduct03 },
  { path: '/products-service/products-4', name: 'Product4', component: mergeproduct04 },
  { path: '/products-service/products-5', name: 'Product5', component: mergeproduct05 },
  { path: '/products-service/products-6', name: 'Product6', component: mergeproduct06 },
  //####################  Member Path #####################


  { path: '/member1', name: 'member1', component: membercardpage1 },
  { path: '/member1_2', name: 'member1_2', component: membercardpage2 },
  { path: '/member1_3', name: 'member1_3', component: membercarpage3 },
  //#################### Member2 #####################
  { path: '/member2_1', name: 'member2_1', component: membercardpage2_1 },
  { path: '/member2_2', name: 'member2_2', component: membercardpage2_2 },
  { path: '/member2_3', name: 'member2_3', component: membercarpage2_3 },

  //####################  Blog-news #####################

  { path: '/newsgridpage1', name: 'newsgrid1', component: newsgrid_page1 },
  { path: '/newsgridpage2', name: 'newsgrid2', component: newsgrid_page2 },
  { path: '/newsgridpage3', name: 'newsgrid3', component: Newsgrid_page3 },



  //#################### Join us #####################
  { path: '/joinus', name: 'joinus', component: joinus },


  //#################### About us #####################
  { path: '/vision_mission', name: 'vision_mission', component: vision_mission },
  { path: '/Role', name: 'Role', component: Role },
  { path: '/History', name: 'History', component: History },
  { path: '/board_of_director', name: 'board_of_director', component: board_of_director },
  { path: '/companystructure', name: 'companystructure', component: companystructure },


  //#################### Contact us #####################
  { path: '/contact', name: 'contact', component: contact },


  //#################### Sub-Route #########################
   { path: '/blogdetail1', name: 'blogdetail1', component: blogdetail1 },
   { path: '/blogdetail2', name: 'blogdetail2', component: blogdetail2 },
   { path: '/blogdetail3', name: 'blogdetail3', component: blogdetail3 },
   { path: '/blogdetail4', name: 'blogdetail4', component: blogdetail4 },
   { path: '/blogdetail5', name: 'blogdetail5', component: blogdetail5 },
   { path: '/blogdetail6', name: 'blogdetail6', component: blogdetail6 },
   { path: '/blogdetail7', name: 'blogdetail7', component: blogdetail7 },
   { path: '/blogdetail8', name: 'blogdetail8', component: blogdetail8 },
   { path: '/blogdetail9', name: 'blogdetail9', component: blogdetail9 },
   { path: '/blogdetail10', name: 'blogdetail10', component: blogdetail10 },
   { path: '/blogdetail11', name: 'blogdetail11', component: blogdetail11 },
   { path: '/blogdetail12', name: 'blogdetail12', component: Blogdetail12 },
   { path: '/blogdetail13', name: 'blogdetail13', component: Blogdetail13 },
   { path: '/blogdetail14', name: 'blogdetail14', component: Blogdetail14 },
   { path: '/blogdetail15', name: 'blogdetail15', component: Blogdetail15 },
   { path: '/blogdetail16', name: 'blogdetail16', component: Blogdetail16 },
   { path: '/blogdetail17', name: 'blogdetail17', component: Blogdetail17 },
   { path: '/blogdetail18', name: 'blogdetail18', component: Blogdetail18 },
   { path: '/blogdetail19', name: 'blogdetail19', component: Blogdetail19 },
   { path: '/blogdetail20', name: 'blogdetail20', component: Blogdetail20 },

   
  ]




const router = createRouter({
  history: createWebHistory(),
  routes,

 

  

 
})

export default router

