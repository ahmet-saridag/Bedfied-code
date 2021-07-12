<template>
  <div>
    <!-- Yardım sayfası header -->
    <TravelModeHeader :userProfilesData="userData" />
    <!-- Yardım sayfası body  -->
    <div class="container fm">
      <div class="card">
        <div class="row">
          <div class="filter"></div>
          <div
            class="col-left col-xl-6 mx-auto col-lg-6 col-md-6 col-sm-12 col-xs-12"
          >
            <div class="row row-padding pt-5">
              <div class="col-12 text-center">
                <h1 class="help-center" style="margin-top: 15%">
                  Yardım merkezi
                </h1>
                <h3 class="my-4 help-center-hi">
                  Merhaba {{ userData.fullName }} , bir sorun mu var ? bizimle
                  iletişime geçebilirsin.
                </h3>
                <a
                  href="mailto:bedfied@gmail.com"
                  class="text-white"
                  style="text-decoration: none"
                >
                  <div
                    class="button-click icons-size border border-white w-75 mx-auto mt-4 rounded py-2 px-0"
                  >
                    <i class="far fa-envelope icon-mail"></i>
                    bedfied@gmail.com
                  </div>
                </a>

                <a
                  href="tel:+90-537-232-0235"
                  class="text-white"
                  style="text-decoration: none"
                >
                  <div
                    class="button-click icons-size border border-white w-75 mx-auto mt-4 rounded py-2 px-0"
                  >
                    <i class="fas fa-mobile icon-mobile"></i>
                    +90 537 232 02 35
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Yardım sayfası body bitiş -->
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
      userData: [],
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
  },
  created() {
    this.getUserDATA();
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.fm {
  font-family: "Titillium Web", sans-serif !important;
}

@media (min-width: 1450px) and (max-width: 1550px) {
  .help-center {
    margin-top: 15% !important;
    font-size: 50px !important;
  }
  .help-center-hi {
    font-size: 30px !important;
    margin: 40px 0px 40px 0px !important;
  }
  .icons-size {
    font-size: 18px !important;
  }
}
@media (min-width: 1550px) {
  .help-center {
    margin-top: 25% !important;
    font-size: 55px !important;
  }
  .help-center-hi {
    font-size: 30px !important;
    margin: 50px 0px 50px 0px !important;
  }
  .icons-size {
    font-size: 22px !important;
  }
}
@media (max-width: 762px) {
  .row-padding {
    padding: 0px !important;
  }
  .help-center {
    margin-top: 35% !important;
  }
}
.filter {
  height: 100%;
  width: 100%;
  border-radius: 40px;
  background: rgb(0, 0, 0, 0.5);
  position: absolute;
  filter: blur(10px);
  z-index: 0;
}

.card {
  width: 75%;
  min-width: 70%;
  max-width: 100%;
  height: 100%;
  max-height: 650px;
  margin-left: auto;
  margin-right: auto;
  min-height: 80vh;
  border-radius: 40px;
  margin-top: 1%;
  overflow: hidden;
  box-sizing: border-box;
  border: none;
  background-image: url("./helpBackground.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
}
.row {
  width: 100% !important;
  max-height: 650px;
  height: 100%;
  min-height: 80vh;
  border-radius: 40px;
  margin: 0px;
  padding: 0px;
}
.col-left {
  border-radius: 40px 0px 0px 40px;
  color: #fff;
  z-index: 2 !important;
}
.col-right {
  border-radius: 0px 40px 40px 0px;
}
.button-click {
  transition: transform 80ms ease-in;
  cursor: pointer;
}

.button-click:active {
  transform: scale(0.95);
}
.icon-mail {
  font-size: 25px;
  margin-right: 7%;
}
.icon-mobile {
  font-size: 25px;
  margin-right: 7%;
}
</style>