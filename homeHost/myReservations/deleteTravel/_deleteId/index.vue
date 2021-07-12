<template>
  <div>
    <div>
      <HostHeader :userProfilesData="userProfileDatas" />
    </div>
    <div class="container-fluid fm" >
      <div class="row"> <div
              class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-5"
            >
              <div
                class="card shadow-lg card-mobile ml-3"
                style="width: 30rem; border-radius: 20px"
              >
                <img
                  class="card-img-top"
                  height="200"
                  width="200"
                  style="object-fit: cover; border-radius: 20px 20px 0px 0px"
                  :src="travelData.homeData.photos[0].photo"
                  alt="Card image cap"
                />
                <div class="card-body p-4 text-center">
                  <h5 class="card-title mb-1">
                    <h6 class=" mt-2 text-center text-danger">
                      {{ travelData.travelData.dateData.goDate.split("-")[2] }}.{{
                        travelData.travelData.dateData.goDate.split("-")[1]
                      }}.{{
                        travelData.travelData.dateData.goDate.split("-")[0]
                      }}
                      ile
                      {{ travelData.travelData.dateData.endDate.split("-")[2] }}.{{
                        travelData.travelData.dateData.endDate.split("-")[1]
                      }}.{{ travelData.travelData.dateData.endDate.split("-")[0] }}
                      arası 
                    </h6>
                    {{ travelData.homeData.county }} <br> <span class="text-danger">İptal Edildi !!</span>
                  </h5>
                  <p class="card-text">
                    {{ travelData.homeData.peopleCounty }} misafir
                    {{ Math.floor(travelData.homeData.bed) }} yatak odası
                    {{ travelData.homeData.bed }} yatak
                    {{ travelData.homeData.bathroom }} banyo
                  </p>

                </div>
              </div>
            </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 remove-mobile text-center" style="margin-top:180px">
              <h2 class="mb-3">İptal edilmiş kaydınızı silin</h2>
              <div class="buttons">
                  <button @click.prevent="$router.push('/homes/' + travelData.homeDataFirebaseId )" class="btn btn-info">Konutun Profiline Git</button>
                  <button @click="removeTravel" class="btn btn-danger">Kaydı sil</button>
              </div>
          </div>
          <div style="height:300px"></div>
          
      </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import HostHeader from "@/components/host/hostHeader";
export default {
    middleware: ["session-control", "auth"],

  layout: "homes",
  components: {
    HostHeader,
  },
  data(){
    return {
      userProfileDatas:[]
    }
  },
  asyncData(context) {
    return axios
      .get(
        "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
          context.params.deleteId +
          ".json"
      )
      .then((res) => {
        return {
          travelData: res.data,
        };
      });
  },
  methods: {
      removeTravel(){
          axios.delete( "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
          this.$route.params.deleteId +
          ".json")
          .then(res => {
              this.$router.push('/homeHost/myReservations')
          })
      },
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
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.fm {
  font-family: "Titillium Web", sans-serif !important;
}
@media (max-width:762px) {
  .remove-mobile {
    margin-top: 10px!important;
  }
  .card-mobile {
    width: 20rem!important;
    box-shadow: none!important;
    margin-top: -50px!important;
  }
}
</style>