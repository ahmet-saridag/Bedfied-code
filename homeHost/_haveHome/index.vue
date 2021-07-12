<template>
  <div class="font w-100 h-100">
    <HostHeader :userProfilesData="userProfileDatas" />
    <div class="container-fluid">
      <!--MDB Tables-->
      <div class="container-fluid w-100" style="witdh: 100% !important">
        <div class="card mb-4 border-0">
          <div class="card-body">
            <!-- Grid row -->
            <div class="row">
              <!-- Grid column -->
              <div class="col-md-12 mb-3">
                <h3
                  class="pt-3 pb-4 text-center font-bold font-up deep-purple-text"
                  v-if="newHomeData.length != 0"
                >
                  Merhaba, {{ newHomeData[0].fullName }} işte kayıtlı
                  {{ newHomeData.length }} konutunuz
                </h3>
                <h3 v-else class="text-center">Konut bulunamadı..!! <br /></h3>
                <div
                  class="input-group w-50 w-sm-100 d-flex justify-content-center mx-auto md-form form-sm form-2 mb-3"
                >
                  <input
                    type="search"
                    class="form-control ft rounded text-dark font-weight-bold border border-dark"
                    placeholder="Kayıt arayın.."
                    aria-label="Search"
                    id="inputSearch1"
                    aria-describedby="search-addon"
                    v-model="event"
                    @keyup.enter="haveHome"
                  />
                  <button @click.prevent="haveHome" class="btn btn-dark btn-sm">
                    <span
                      class="input-group-text border-0 bg-dark"
                      id="search-addon"
                    >
                      <i
                        class="fas fa-search text-white w-50"
                        style="font-size: 16.5px"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
            <!--Table-->
            <table
              class="table table-striped table-hover table-phone-responsive"
            >
              <!--Table head-->
              <thead>
                <tr>
                  <th>#</th>
                  <th>Kayıt</th>
                  <th>Durumu</th>
                  <th>Rezervasyon</th>
                  <th>Misafir</th>
                  <th>Yatak</th>
                  <th>Banyo</th>
                  <th>Fiyat</th>

                  <th>Konum</th>

                  <th>İncele</th>
                  <th>Güncelle</th>
                </tr>
              </thead>
              <!--Table head-->
              <!--Table body-->
              <tbody>
                <tr v-for="home in newHomeData" :key="home.firebaseId">
                  <th scope="row">{{ newHomeData.indexOf(home) + 1 }}</th>
                  <td class="d-flex">
                    <img
                      :src="
                        home.photos == undefined
                          ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                          : home.photos[0].photo
                      "
                      width="50"
                      height="50"
                      class="img-responsive mr-2 rounded"
                      alt="home-img"
                    />
                    <p class="font-weight-bold">
                      {{ home.county }} bölgesinde <br />
                      {{ home.houseStayType }}
                    </p>
                  </td>
                  <td><i class="fa fa-check-circle text-success"></i> Aktif</td>
                  <td>
                    <i class="fas fa-hourglass-half mr-1"></i> Devam ediyor
                  </td>
                  <td>{{ home.peopleCounty }}</td>
                  <td>{{ home.bed }}</td>
                  <td>{{ home.bathroom }}</td>
                  <td>{{ home.price }}₺</td>

                  <td>{{ home.county }} , Türkiye</td>

                  <td>
                    <button
                      @click="$router.push('/homes/' + home.firebaseId)"
                      class="btn btn-outline-dark btn-sm"
                    >
                      İncele
                    </button>
                  </td>
                  <td>
                    <button
                      @click="
                        $router.push('/homeHost/ubdateHome/' + home.firebaseId)
                      "
                      class="btn btn-outline-dark btn-sm"
                    >
                      Güncelle
                    </button>
                  </td>
                </tr>
              </tbody>
              <!--Table body-->
            </table>
            <table
              class="table table-striped table-hover table-phone-responsive2"
            >
              <!--Table head-->
              <thead>
                <tr>
                  <th>#</th>
                  <th>Kayıt</th>
                  <th>Fiyat</th>
                  <th>Güncelle</th>
                </tr>
              </thead>
              <!--Table head-->
              <!--Table body-->
              <tbody>
                <tr v-for="home in newHomeData" :key="home.firebaseId">
                  <th scope="row">{{ newHomeData.indexOf(home) + 1 }}</th>
                  <td
                    style="cursor: pointer"
                    @click.prevent="$router.push('/homes/' + home.firebaseId)"
                    class="d-flex"
                  >
                    <img
                      :src=" home.photos == undefined
                          ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                          : home.photos[0].photo
                      "
                      width="50"
                      height="50"
                      class="img-responsive mr-1 rounded"
                      alt="home-img"
                    />
                    <p class="font-weight-bold font-phone-p">
                      {{ home.county }} bölgesinde <br />
                      {{ home.houseStayType }}
                    </p>
                  </td>
                  <td>{{ home.price }}₺</td>
                  <td>
                    <button
                      @click="
                        $router.push('/homeHost/ubdateHome/' + home.firebaseId)
                      "
                      class="btn btn-outline-dark btn-sm"
                    >
                      Güncelle
                    </button>
                  </td>
                </tr>
              </tbody>
              <!--Table body-->
            </table>
            <!--Table-->
          </div>
        </div>
      </div>
      <!--MDB Tables-->
    </div>
  </div>
</template>

<script>
import HostHeader from "@/components/host/hostHeader";
import axios from "axios";
export default {
  middleware: ["session-control", "auth"],
  layout: "homes",
  components: {
    HostHeader,
  },
  data() {
    return {
      haveHomeData: [],
      event: null,
      newHomeData: [],
      userProfileDatas: [],
    };
  },

  methods: {
    haveHome() {
      this.haveHomeData = this.$store.state.homesData.filter(
        (c) => c.authId == this.$store.state.authKey
      );
      if (this.event != null) {
        this.newHomeData = this.haveHomeData.filter((s) =>
          s.county.startsWith(this.event)
        );
      }
    },
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
            this.userProfileDatas = newArray;
          }
        });
    },
  },

  created() {
    this.haveHome();
    this.newHomeData = this.haveHomeData;
    this.getUserDATA();
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.font {
  font-family: "Titillium Web", sans-serif !important;
}
.hm-gradient {
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
}
.img-responsive {
  object-fit: cover;
}
.table-phone-responsive2 {
  display: none;
}
@media (max-width: 762px) {
  .table-phone-responsive {
    display: none;
  }
  .table-phone-responsive2 {
    display: inherit;
    margin-left: -25px;
  }
  .w-sm-100 {
    width: 100% !important;
  }
  .font-phone-p {
    font-size: 15px;
  }
}
.darken-grey-text {
  color: #2e2e2e;
}
.input-group.md-form.form-sm.form-2 input {
  border: 1px solid #bdbdbd;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.input-group.md-form.form-sm.form-2 input.purple-border {
  border: 1px solid #9e9e9e;
}
.input-group.md-form.form-sm.form-2
  input[type="text"]:focus:not([readonly]).purple-border {
  border: 1px solid #ba68c8;
  box-shadow: none;
}
.danger-text {
  color: #ff3547;
}
.success-text {
  color: #00c851;
}
.table-bordered.red-border,
.table-bordered.red-border th,
.table-bordered.red-border td {
  border: 1px solid #ff3547 !important;
}
.table.table-bordered th {
  text-align: center;
}
</style>