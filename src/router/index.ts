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

import blogdetail from '../components/Blog-news/blogdetail.vue'



import membercardpage1 from '../components/member/membercard/membercardpage1.vue'
import membercardpage2_1 from '../components/member/membermobilebanking/membercardpage2_1.vue'


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
  { path: '/member2_1', name: 'member2_1', component: membercardpage2_1 },

  //####################  Blog-news #####################

  { path: '/newsgridpage1', name: 'newsgrid1', component: newsgrid_page1 },
  { path: '/newsgridpage2', name: 'newsgrid2', component: newsgrid_page2 },


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
   { path: '/blogdetail', name: 'blogdetail', component: blogdetail },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

