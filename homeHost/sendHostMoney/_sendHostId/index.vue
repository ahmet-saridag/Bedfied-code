<template>
  <div>    
    <TravelModeHeader :userProfilesData="userData" />

    <!-- Yardım sayfası header -->
    <!-- Yardım sayfası body bitiş -->
    <transition name="home">
      <div class="containers mt-5 fm " v-if="!secondStep">
        <div class="row ">
          <div
            class="
              col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 
              mt-5
            "
          >
            <h1 class="h1 mb-3">
              Merhaba, umarım yolculuğunuz keyifli geçmiştir.
              <img src="./unicorn.svg" width="40" height="40" alt="" />

              <img src="./smile (1).svg" width="40" height="40" alt="" />
            </h1>
            <span class="text-muted">Ödeme</span>
            <h3 class="mb-0 pb-0">
              Eve güvenli bir giriş sağladınız mı? <br />
              o halde ev sahibine parasını gönderin.
            </h3>
            <button
              @click.prevent="goMoneyHost"
              class="btn button-click btn-send-money"
            >
            {{loadingButtonRemove ? 'Yükleniyor...' : 'Ev sahibine parasını gönder'}}
            </button>
            <div v-if="errorRemove" class="text-danger text-center mt-2 font-weight-bold">
               {{ errorRemoveMessage }} !!
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <img
              src="./a.png"
              alt="new-home-1-img"
              class="float-right img-responsive w-100 img-all img-phone-screen"
              height="400"
            />
          </div>
        </div>
        <div class="d-none height-div" style="height: 100px"></div>
      </div>
      <div class="containers fm mt-5 " v-if="secondStep">
        <div class="row">
          <div
            class="
              col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 
              mt-4
            "
          >
            <h2 class="h2 mb-3">
               Tebrikler ev sahibine parası gönderilmiştir <i class="fa fa-check text-success h2"></i> . Umarım seyahatiniz keyifli geçer.
                <img src="./unicorn.svg" width="40" height="40" alt="" />

            </h2>
            <span class="text-muted mb-2">Değerlendirme</span>
            <h3 class="mb-0 pb-0 mt-2 ">
               Merhaba, Haydi ev sahibini puanlamaya geçelim.
              <img src="./abs.svg" width="40" height="40" alt="" />
            </h3>
                <button
              @click.prevent="$router.push('/homeHost/comments/' + homeDataFirebaseId )"
              class="btn button-click btn-send-money"
            >
            Ev sahibini puanla
            </button>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img
              src="./ab.png"
              alt="new-home-1-img"
              class="float-right img-responsive w-100 img-all img-phone-screen"
              height="400"
            />
          </div>
        </div>
        <div class="d-none height-div" style="height: 100px"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import TravelModeHeader from "@/components/travel/travelHeader";
export default {
  layout: "homes",
  components: {
    TravelModeHeader,
  },
  data() {
    return {
      userData: [],
      secondStep:false,
      paymentTransactionId:null,
      loadingButtonRemove:false,
      homeDataFirebaseId:null,
      errorRemove:false,
      errorRemoveMessage:null
    };
  },
  methods: {
  getUserDATA() {
      return axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/userProfileDATA.json"
        )
        .then((res) => {
          let data = res.data;
          let userArray = [];
          let newArray = [];
          for (let key in data) {
            userArray.push({ firebaseId: key, ...data[key] });
          }
          newArray = userArray.find(
            (c) => c.authId == this.$store.state.authKey
          );
          if (newArray) {
            this.userData = newArray;
          }
        });
    },
     goMoneyHost(){
          this.loadingButtonRemove = true;
         axios.post('https://www.bedfied.com/api/approvalPay', {
           paymentTransactionId:this.paymentTransactionId
         })
         .then(res => {
           let data = res.data.result;
           if(data.status == 'success'){
               this.secondStep = true;
           }
           else {
             this.travelErrorMessage(data)
           }
         })
     },
      travelErrorMessage(data) {
      this.loadingButtonRemove = false;
      let message = data.errorMessage;
      this.errorRemove = true;
      this.errorRemoveMessage = message;
      setTimeout(() => {
        this.errorRemove = false;
      }, 5000);
    },
    getRezervData(){
      axios.get('https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/' + this.$route.params.sendHostId + '/.json')
          .then(res => {
            this.homeDataFirebaseId = res.data.homeDataFirebaseId
            this.paymentTransactionId = res.data.data.itemTransactions[0].paymentTransactionId
          })
    }
  },    
  created() {
    this.getUserDATA();
    this.getRezervData();
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.fm {
  font-family: "Titillium Web", sans-serif !important;
}
.btn-send-money {
  background: #f93b3b;
  color: #fff;
  margin-top: 8%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.button-click {
  transition: transform 80ms ease-in;
  cursor: pointer;
}

.button-click:active {
  transform: scale(0.9);
}
.fm {
  font-family: "Titillium Web", sans-serif !important;
}
* {
  box-sizing: border-box;
}

.rating {
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  height: 150px;
  position: relative;
}

.rating-0 {
  filter: grayscale(100%);
}

.rating > input {
  display: none;
}

.rating > label {
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-top: auto;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 76%;
  transition: 0.3s;
}

.rating > input:checked ~ label,
.rating > input:checked ~ label ~ label {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
}

.rating > input:not(:checked) ~ label:hover,
.rating > input:not(:checked) ~ label:hover ~ label {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
}

.emoji-wrapper {
  width: 100%;
  text-align: center;
  height: 100px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.emoji-wrapper:before,
.emoji-wrapper:after {
  content: "";
  height: 15px;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 1;
}

.emoji-wrapper:before {
  top: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(255, 255, 255, 0) 100%
  );
}

.emoji-wrapper:after {
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(255, 255, 255, 0) 100%
  );
}

.emoji {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
}

.emoji > svg {
  margin: 15px 0;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
}

#rating-1:checked ~ .emoji-wrapper > .emoji {
  transform: translateY(-100px);
}
#rating-2:checked ~ .emoji-wrapper > .emoji {
  transform: translateY(-200px);
}
#rating-3:checked ~ .emoji-wrapper > .emoji {
  transform: translateY(-300px);
}
#rating-4:checked ~ .emoji-wrapper > .emoji {
  transform: translateY(-400px);
}
#rating-5:checked ~ .emoji-wrapper > .emoji {
  transform: translateY(-500px);
}

.feedback {
  max-width: 360px;
  background-color: #fff;
  width: 100%;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

.progress {
  height: 12px;
}
/* === Wrapper Styles === */
#FileUpload {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  margin: 30px;
  padding: 10px;
  /* box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); */
  border-radius: 20px;
  background-color: white;
  width: 465px;
}

/* === Upload Box === */
.upload {
  margin: 10px;
  height: 85px;
  border: 8px dashed #e6f5e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.upload p {
  margin-top: 12px;
  line-height: 0;
  font-size: 22px;
  color: #0c3214;
  letter-spacing: 1.5px;
}
.upload__button {
  background-color: #e6f5e9;
  border-radius: 10px;
  padding: 0px 8px 0px 10px;
}
.upload__button:hover {
  cursor: pointer;
  opacity: 0.8;
}

/* === Uploaded Files === */
.uploaded {
  width: 395px;
  margin: 10px 10px 20px 10px;
  background-color: #e6f5e9;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.file {
  display: flex;
  flex-direction: column;
}
.file__name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 300px;
  line-height: 0;
  color: #0c3214;
  font-size: 18px;
  letter-spacing: 1.5px;
}
.fa-times:hover {
  cursor: pointer;
  opacity: 0.8;
}
.fa-file-pdf {
  padding: 15px;
  font-size: 40px;
  color: #0c3214;
}
.pop-up-info {
  width: 400px;
  height: 180px;
  position: fixed;
  bottom: 15px;
  right: 15px;
}
.img-all {
  object-fit: cover;

  border-radius: 40px;
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.2s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.ct {
  /* background-color: red; */
  width: 100% !important ;
  height: 150px;
}
#checkboxes {
  background-color: #fff;
  min-height: 200px;
  padding: 10px;
  margin-top: 20px;
}

.checkbox label {
  min-height: 21px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
  line-height: 22px;
  font-size: 19px;
}

.sc {
  transition: all 1s;
}
.fm {
  font-family: "Titillium Web", sans-serif !important;
}

.photo {
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.sc:hover {
  transform: scale(1.04);
  cursor: pointer;
}
.br-left {
  border-radius: 20px 0px 0px 20px;
}
.br-right {
  border-radius: 0px 20px 20px 0px;
}

.c-checkbox span {
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin-left: -20px;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  border: 1px solid #ff4444;
  text-align: center;
}

.c-checkbox span:before {
  position: absolute;
  top: 5;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  text-align: center !important;
  font-size: 20px;
  line-height: 18px;
  vertical-align: middle;
}

.c-checkbox input[type="checkbox"] {
  position: absolute;
  margin: 5px 0 0;
  opacity: 0;
}

.c-checkbox input[type="checkbox"]:checked {
  color: #fff;
  transition: color 0.3s ease-out;
}

.c-checkbox input[type="checkbox"]:checked + span {
  border-color: #ff4444;
  background-color: #ff4444;
  /* --background: #fff;
    --border: #D1D6EE;
    --border-hover: #BBC1E1;
    --border-active: #1E2235; */
}

.c-checkbox input[type="checkbox"]:checked + span:before {
  color: #fff;
  opacity: 1;
  transition: color 0.3s ease-out;
}
.containers {
  width: 80%;
  margin-right: auto !important;
  margin-left: auto !important;
  margin-top: 2%;
}
.mobile-step8 {
  display: none;
}

@media (max-width: 762px) {
  .height-div {
    display: inherit !important;
  }
  .mobile-step8 {
    display: inherit !important;
  }
  .responsive-margin {
    margin-bottom: 130px !important;
  }
  .img-phone-screen {
    display: none;
  }
  .w-xs-100 {
    width: 100% !important;
  }
  .d-sm-inherit {
    display: inherit !important;
    margin-top: 40px !important;
  }
}
</style>