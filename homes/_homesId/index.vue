<template>
  <div class="fm">
 
   <HomeDetail :homeData="homeDataArray" :homeFirebaseId="homesFirebaseId" /> 
  </div>
</template>

<script>
import HomeDetail from '@/components/homes/homeDetail';

import axios from 'axios';
export default {
  components: {
    
    HomeDetail
  },
  asyncData(context){
     return axios.get('https://munhasir-ad882-default-rtdb.firebaseio.com/homeData/' + context.params.homesId + '.json')
     .then(res => {
       return {
          homeDataArray:res.data,
          homesFirebaseId:context.params.homesId
       }
     })
  },
};
</script>

<style scoped>
.fm {
  font-family: "Titillium Web", sans-serif !important;
}
</style>