<template>
  <div>
    <div>
      <TravelModeHeader :userProfilesData="userData" />
    </div>
    <div class="container-fluid fm" >
      <div class="row"> 
        <div
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
import TravelModeHeader from "@/components/travel/travelHeader";
export default {
    middleware: ["session-control", "auth"],

  layout: "homes",
  components: {
    TravelModeHeader,
  },
  data() {
    return {
      markers: [
        {
          position: {
            lat: null,
            lng: null,
          },
        },
      ],
      markersAVM: [
        {
          position: {
            lat: 40.9859469520207,
            lng: 29.100253406231417,
            name: "Pladium Avm",
          },
        },
        {
          position: {
            lat: 40.98622324311971,
            lng: 29.11845494659659,
            name: "Novado Avm",
          },
        },
        {
          position: {
            lat: 40.979888249712914,
            lng: 29.099865187641388,
            name: "Carrefour Avm",
          },
        },
        {
          position: {
            lat: 40.982578729826656,
            lng: 29.132146579672018,

            name: "Brandium Avm",
          },
        },
        {
          position: {
            lat: 40.982578729826656,
            lng: 29.132146579672018,

            name: "Brandium Avm",
          },
        },
        {
          position: {
            lat: 41.00275803242759,
            lng: 29.055001710596763,

            name: "Akasya Avm",
          },
        },
        {
          position: {
            lat: 41.00347241004005,
            lng: 29.071378721263052,

            name: "Emaar Avm",
          },
        },
        {
          position: {
            lat: 41.000062590252156,
            lng: 29.031661501518546,
            name: "Nautlius Avm",
          },
        },
        {
          position: {
            lat: 41.021195788303515,
            lng: 29.03940741469711,
            name: "Caiptol Avm",
          },
        },
        {
          position: {
            lat: 41.01301858929726,
            lng: 29.01587782659242,
            name: "Çicekçi Avm",
          },
        },
        {
          position: {
            lat: 41.05722188429511,
            lng: 29.052745640796353,
            name: "AVM Life",
          },
        },
        {
          position: {
            lat: 41.0627161453924,
            lng: 28.993025513107796,
            name: "Cevahir Avm",
          },
        },
        {
          position: {
            lat: 41.0627161453924,
            lng: 28.993025513107796,
            name: "Cevahir Avm",
          },
        },
        {
          position: {
            lat: 41.005772917271194,
            lng: 28.959220561278915,
            name: "İstanbul Avm",
          },
        },
        {
          position: {
            lat: 41.014429812154155,
            lng: 28.945278352986936,
            name: "Historia Avm",
          },
        },
      ],
      markersHistoryPlaces: [
        {
          position: {
            lat: 41.01156853958498,
            lng: 28.983346600012737,
            name: "Topkapı Sarayı",
          },
        },
        {
          position: {
            lat: 41.008463694770924,
            lng: 28.977878783967025,
            name: "Yerebatan Sarnıcı",
          },
        },
        {
          position: {
            lat: 41.00869240388766,
            lng: 28.980152550982957,
            name: "Ayasofya Cami",
          },
        },
        {
          position: {
            lat: 41.00547417530242,
            lng: 28.976804297980806,
            name: "Sultanahmet Cami",
          },
        },
        {
          position: {
            lat: 41.01077743160436,
            lng: 28.968044890755433,
            name: "Kapalı Çarşı",
          },
        },
        {
          position: {
            lat: 41.01620645493823,
            lng: 28.964137388677837,
            name: "Süleymaniye Cami",
          },
        },
        {
          position: {
            lat: 41.01620645493823,
            lng: 28.964137388677837,
            name: "Süleymaniye Cami",
          },
        },
        {
          position: {
            lat: 41.02566625777256,
            lng: 28.974180695374482,
            name: "Süleymaniye Cami",
          },
        },
        {
          position: {
            lat: 41.02113955790478,
            lng: 29.004117190315096,
            name: "Kız Kulesi",
          },
        },
      ],
      markersFunnyPlaces: [
        {
          position: {
            lat: 40.989967593615866,
            lng: 29.027033534877848,
            name: "Escape İstanbul",
          },
        },
        {
          position: {
            lat: 40.99963370911064,
            lng: 29.031601497747484,
            name: "Play Planet",
          },
        },
        {
          position: {
            lat: 40.9804465156402,
            lng: 29.049998478130053,
            name: "Çocuklar Aktivite Merkezi",
          },
        },
        {
          position: {
            lat: 41.004934149553556,
            lng: 29.070514846460817,
            name: "Fun Lab",
          },
        },
        {
          position: {
            lat: 41.02096805999483,
            lng: 29.039460085994133,
            name: "Captune World",
          },
        },
        {
          position: {
            lat: 41.03488016904019,
            lng: 28.979697648858217,
            name: "Gençlik Merkezi",
          },
        },
        {
          position: {
            lat: 41.04363410527961,
            lng: 29.006198903190295,
            name: "Vr House",
          },
        },
        {
          position: {
            lat: 41.07242969133288,
            lng: 28.92233817561233,
            name: "Tema Park",
          },
        },
      ],
      center: { lat: 40.960882, lng: 29.271368 },
      userData:[],
    };
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
              this.$router.push('/travelMode')
          })
      },
      getUserData(){
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
           this.userData = newArray
         }
      })
    },
  },
  created(){
    this.getUserData();
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