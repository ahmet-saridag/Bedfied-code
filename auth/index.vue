<template>
  <div>
    <HomesPageHeader :userProfilesData="userProfileDatas" />
    <Auth />
   
  </div>
</template>

<script>
import HomesPageHeader from "@/components/common/homesPageHeader";
import Auth from "@/components/auth/auth";
import axios from 'axios';
export default {
  layout: "homes",
  components: {
    Auth,
    HomesPageHeader,
  },
  data(){
    return {
      userProfileDatas:[]
    }
  },
  methods:{
    getUserDATA(){
      return axios.get('https://munhasir-ad882-default-rtdb.firebaseio.com/userProfileDATA.json')
      .then(res => {
        let data = res.data;
         let userArray = [];
         let newArray = [];
         for(let key in data){
           userArray.push({firebaseId: key , ...data[key]})
         }
         newArray = userArray.find(c => c.authId == this.$store.state.authKey)
         if(newArray){
           this.userProfileDatas = newArray
         }
      })
    },
  },
  created(){
   this.getUserDATA();
 }
};
</script>

<style scoped>
</style>