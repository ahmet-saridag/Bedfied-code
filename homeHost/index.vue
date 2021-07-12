<template>
  <div style="font-family: 'Titillium Web', sans-serif !important">
    <!-- Host Header -->
    <HostHeader :userProfilesData="userProfileDatas" :homePageStatus="true" />
    <!-- Host Header Bitiş -->

    <div v-if="!$store.getters.isAuthenticated">
      <!-- HomePost Banner Başlangıç -->
      <div class="container-fluid mt-5 host-container">
        <div class="filter"></div>
        <div
          class="row text-white h-100 w-50"
          style="padding: 38px 0px 0px 83px"
        >
          <div class="col-12 p-0" style="z-index:6!important">
            <h1 style="font-size: 25px;" class="font-weight-bold h-25">
              Ev sahipliği yapmaya başlayın
            </h1>
          </div>
          <div class="col-12 p-0" style="z-index:6!important">
            <h1 style="font-size: 45px" class="font-weight-bold h-25">
              Bir mekân paylaşın, bir dünya kazanın
            </h1>
          </div>

          <div class="col-12 p-0" style="z-index:6!important">
            <h5 class="" style="margin-top: -27px">
              Ev sahipliği, kullanmadığınız mekânınızı ekstra gelire
              dönüştürmenize ve sevdiğiniz şeyin peşinden gitmenize yardımcı
              olur.
            </h5>
          </div>
          <div class="col-12 p-0 mb-3" style="z-index:6!important">
            <button
              class="btn font-weight-bold px-4 py-2 font col-button-click"
              style="border-radius: 7px; background: #ffff; font-size: 17px"
              @click.prevent="$router.push('/homeHost/newHome')"
            >
              Başlayın
            </button>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5 host-container-mobile">
          <div class="filter-mobile"></div>
        <div
          class="row text-white h-50 w-100"
          style="padding: 38px 0px 0px 83px"
        >
          <div class="col-12 p-0" style="z-index:6!important">
            <h1 style="font-size: 20px;" class="font-weight-bold h-25">
              Ev sahipliği yapmaya başlayın
            </h1>
          </div>
          <div class="col-12 p-0  my-3" style="z-index:6!important">
            <h1 style="font-size: 40px" class="font-weight-bold h-25">
              Bir mekân paylaşın, bir dünya kazanın
            </h1>
          </div>
          <div class="col-12 p-0 mb-3" style="z-index:6!important">
            <button
              class="btn font-weight-bold px-4 py-2 font col-button-click"
              style="border-radius: 7px; background: #ffff; font-size: 17px"
              @click.prevent="$router.push('/auth')"
            >
              Başlayın
            </button>
          </div>
        </div>
      </div>
      <div class="container-fluid my-4">
        <hr class="my-5 w-50 d-block mx-auto" />
        <h1
          class="text-center font-weight-bold my-5"
          style="font-size: 3rem !important; cursor: pointer"
        >
          Bedfied Hakkında
        </h1>
        <div class="d-flex  justify-content-center d-block-xs">
          <div
            class="card partner-card shadow-lg card-xs-sm-font card-width-xs text-center mt-5"
            style="width: 35%; cursor: pointer !important"
          >
            <div class="card-body">
              <img src="./placeholder (3).png" alt="" />
              <div class="card-title text-dark h3 p-2 font-weight-bold">
                Bedfied nedir ?
              </div>
              <div class="card-text h4 p-3">
                Bedfied, Türkiyenin her yerinde insanlarla konaklanacak yerleri
                paylaşımlı ev ekonomisi (oda kiralama sistemi) ile birbirine
                bağlar.
              </div>
            </div>
          </div>
          <div
            class="card partner-card shadow-lg border border-alert card-xs-sm-font text-center mx-5 mt-5"
            style="width: 35%; cursor: pointer !important"
          >
            <div class="card-body">
              <i class="fas fa-home text-alert" style="font-size: 2.5rem"></i>
              <div class="card-title text-dark h3 p-2 font-weight-bold">
                Ev sahipliği nedir ?
              </div>
              <div class="card-text h4 p-4">
                Ekstra bir oda veya evin tamamı bunu Türkiye'de herhangi biriyle
                paylaşarak para kazanabilirsiniz. Sizin eviniz sizin
                kurallarınız.
              </div>
            </div>
          </div>
        </div>
         <hr class="w-50 d-block mx-auto" style="margin:8% 0px" />
      </div>
      <div
        class="container  background  background-mobile my-5 border"
        style="cursor: pointer !important"
      >
        <div
          class="card w-75 h-75  d-block mx-auto"
          style="margin-top: 8% !important;border-radius:15px"
        >
          <div class="card-body d-flex">
            <div class="w-50 h-50">
              <h2 class="p-3 text-center mt-3" id="h2-istanbul">
                İstanbul şehrinde ev sahipliği yaparak ayda
                <span class="text-danger">6.804₺</span> tutarında kazanç elde
                edin
              </h2>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary btn-sm btn-block mt-4 button-sm"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                + Potansiyel kazancınızı <br />
                nasıl tahmin ediyoruz?
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Potansiyel kazancınızı tahmin etmek amacıyla
                        yaptıklarımız
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div
                      class="modal-body p-4 text-dark"
                      style="letter-spacing: 0.06rem; font-size: 1.2rem"
                    >
                      Gösterdiğimiz varsayılan kazanç tahminleri, misafir
                      kapasitesi 6 olan tüm ev listeleri içindir. Tahminler,
                      bölgeniz için son 12 aydaki rezervasyon verilerine dayanır
                      ve bir gecelik fiyatı toplam gece sayısı ile çarpılarak
                      hesaplanır ("Doluluk Oranı "). Kullanılan gecelik
                      fiyatlar, son 12 aydaki ortalama fiyatların medyanına
                      dayanmaktadır (harcamalar, ücretler ve vergilerden önce).
                      Haftalık tahminler 7 gece doluluk kullanır. Tahminleri
                      hesaplamak için kullanılan Doluluk Oranları, o bölgede ne
                      sıklıkta rezerve edildiklerine göre ölçülen listelerin
                      ilk% 50'sine dayanır ve girişlerin bu kısmı, ilgili ev
                      sahiplerinin kazanç potansiyelini göstermek için
                      kullanılır. Yalnızca yeterli kullanılabilirliğe sahip
                      girişler dikkate alınır. Enlem / boylam dahil olmak üzere
                      potansiyel listeniz hakkında bilgi verdiğiniz yer, Yatak
                      odası sayısı ve oda tipi, sağladığımız tahmini kazanç
                      tahminini bu bilgileri yansıtır. Tutarlar tahminidir ve
                      garanti edilmez. Gerçekte ne kadar kazandığınız müsaitlik
                      durumunuza, fiyatınıza, listeleme özelliklerinize ve
                      olanaklarınıza, kabul ve iptal oranlarınıza, misafir
                      değerlendirmelerine, geçerli yasal kısıtlamalara,
                      bölgenizdeki talebe ve diğer faktörlere bağlı olacaktır.
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Kapat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div class="w-50 p-4">
              <span class="border rounded fa p-3 my-1 span-xs"> İstanbul</span>
              <span class="border rounded fa p-3 my-1 span-xs"
                >Yerin tamamı</span
              >
              <span class="border rounded text fa p-3 span-xs mb-3"
                >6 Misafir</span
              ><br />

              <nuxt-link to="/homeHost/auth" tag="div">
                <button
                  class="btn btn-block btn-danger btn-md mt-5 button-sm-2"
                >
                  Kaydınızı oluşturmaya başlayın
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- HomePost Banner Bitiş -->

      <!-- Cardlar -->
      <!-- Münhasır Hakkında -->
      
      <!-- Münhasır Hakkında bitiş -->
      <!-- 3 adımda ev sahipliği -->
      <div class="container-fluid mt-5">
        <hr class="my-5 w-50 d-block mx-auto" />
        <h1
          class="text-center font-weight-bold my-5"
          style="font-size: 3rem !important; cursor: pointer"
        >
          3 adımda ev sahipliği
        </h1>
        <div class="d-flex justify-content-center d-block-xs">
          <div
            class="card partner-card shadow-lg border border-success card-xs-sm-font text-center"
            style="width: 30%; cursor: pointer !important"
          >
            <div class="card-body">
              <i
                class="fas fa-check text-success"
                style="font-size: 2.5rem"
              ></i>
              <div class="card-title text-dark h3 p-3 font-weight-bold">
                Yerinizi ücretsiz kaydedin
              </div>
              <div class="card-text h4 p-3">
                Ortak bir oturma odasından ikinci ev ve ikisi arasındaki her
                şeye kadar, her türlü yeri kayıt olma ücreti olmadan paylaşın.
              </div>
            </div>
          </div>
          <div
            class="card partner-card shadow-lg border border-success card-xs-sm-font text-center mx-5"
            style="width: 30%; cursor: pointer !important"
          >
            <div class="card-body">
              <i
                class="fas fa-check text-success"
                style="font-size: 2.5rem"
              ></i>
              <div class="card-title text-dark h3 p-3 font-weight-bold">
                Nasıl ev sahipliği yapmak istediğinize karar verin
              </div>
              <div class="card-text h4 p-3">
                Kendi programınızı, fiyatlarınızı ve misafirlerin karşılaması
                gereken koşulları seçin. Bu süreçte size yardımcı olacağız.
              </div>
            </div>
          </div>
          <div
            class="card partner-card shadow-lg border border-success card-xs-sm-font text-center"
            style="width: 30%; cursor: pointer !important"
          >
            <div class="card-body">
              <i
                class="fas fa-check text-success"
                style="font-size: 2.5rem"
              ></i>
              <div class="card-title text-dark h3 p-3 font-weight-bold">
                İlk misafirinizi karşılayın
              </div>
              <div class="card-text h4 p-3">
                Kaydınız yayınlandıktan sonra uygun misafirler size ulaşabilir.
                Konaklamalarından önce onlara soru sormak isterseniz iletişime
                geçebilirsiniz.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 3 adımda ev sahipliği bitiş-->

      <!-- Münhasır'da oda kiralama Banner -->
      <div class="container-fluid" style="height: 600px">
        <header>
          <div class="overlay"></div>
          <div class="container h-100">
            <div class="filter"></div>
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-dark" style="z-index:80!important">
                <h1 class="fwb text-white" style="cursor: pointer;">
                  Bedfied'da evinizin odalarını kiralamak ister misiniz?
                </h1>
                <div class="w-50 mx-auto d-block my-4 text-center">
                  <nuxt-link tag="div" to="/homeHost/auth">
                    <button class="btn btn-info btn-block btn-lg">
                      Keşfet
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <!-- Münhasır'da oda kiralama Banner bitiş-->

      <!-- Kolaylaştırılmış Ödemeler -->
      <div class="container-fluid margin-pc">
        <hr class="w-25 d-block mx-auto bg-dark text-dark" />
        <h1
          class="text-center easy-money-margin font-weight-bold mb-5"
          style="font-size: 3rem !important; cursor: pointer"
        >
          Kolaylaştırılmış ödemeler
        </h1>
        <div class="d-flex justify-content-center d-block-xs">
          <div
            class="card partner-card shadow-lg border border-dark card-xs-sm-font text-center mt-5"
            style="width: 30%; cursor: pointer !important"
          >
            <div class="card-body">
              <i
                class="fas fa-check text-alertalert"
                style="font-size: 2.5rem"
              ></i>
              <div class="card-title text-dark h3 p-3 font-weight-bold">
                İstediğiniz fiyatı tahsil edin
              </div>
              <div class="card-text h4 p-4">
                Fiyatınızı hep siz seçersiniz. Yardıma mı ihtiyacınız var?
                Bölgenizdeki talep ile eşleşmenize yardımcı olucak araçlarımız
                var.
              </div>
            </div>
          </div>
          <div
            class="card partner-card shadow-lg border border-dark card-xs-sm-font text-center mx-5 mt-5"
            style="width: 30%; cursor: pointer !important"
          >
            <div class="card-body">
              <i class="fas fa-check text-alert" style="font-size: 2.5rem"></i>
              <div class="card-title text-dark h3 p-3 font-weight-bold">
                Hiçbir ücret ödemeyin
              </div>
              <div class="card-text h4 p-4">
                Kaydolma ücreti yoktur. Bedfied ev sahiplerinden hiçbir ücret
                almaz %0 kesinti. Tamamen ücretiz. Sizin eviniz sizin
                kurallarınız.
              </div>
            </div>
          </div>
          <div
            class="card partner-card shadow-lg border border-dark card-xs-sm-font text-center mt-5"
            style="width: 30%; cursor: pointer !important"
          >
            <div class="card-body">
              <i class="fas fa-check text-alert" style="font-size: 2.5rem"></i>
              <div class="card-title text-dark h3 p-3 font-weight-bold">
                Hızlı şekilde ödeme alın
              </div>
              <div class="card-text h4 p-4">
                Misafiriniz evinizi beğendikten sonra anlaştığınız ücrette ödeme
                alın. Tamamen özgürsünüz hiçbir kısıtlama , komisyon , faiz yok!
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Kolaylaştırılmış Ödemeler bitiş -->

      <!-- Neden Bedfied'da ev sahipliği yapmalısınız -->
      <div class="container">
        <hr class="my-5" />
        <div
          class="card shadow-lg text-center border border-info d-block mx-auto HomePost-card"
          style="cursor: pointer !important"
        >
          <div class="card-body">
            <div
              class="card-title fa p-2 text-center font-weight-bold text-danger p-2"
            >
              Neden Bedfied'da ev sahipliği yapmalısınız?
            </div>
            <div class="card-text h3 p-3">
              Paylaşabileceğiniz ev ya da oda türü ne olursa olsun Bedfied
              seyahatseverlere ev sahipliği yapmanızı kolay ve güvenli hale
              getirir. Uygunluk durumunuza, fiyatlara, ev kurallarına ve
              misafirlerle etkileşim şeklinize ilişkin tüm kontrol sizdedir.
            </div>
          </div>
        </div>
        <hr class="my-5" />
      </div>
      <!-- Neden Bedfied'da ev sahipliği yapmalısınız bitiş -->

      <!-- Oda paylaşımı Banner -->
      <div
        class="container-fluid mb-5 easy-money-margin-bottom"
        
        style="height: 600px; margin-bottom: -50px"
      >
        <footer>
          <div class="overlay"></div>
          <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-white font-weight-bold">
                <h1 class="fwb" style="cursor: pointer; font-size: 65px">
                  Para kazanmaya hazır mısınız?
                </h1>
                <div class="w-50 mx-auto d-block my-4 text-center">
                  <nuxt-link tag="div" to="/homeHost/auth">
                    <button class="btn btn-dark btn-block btn-lg">
                      Başlayın
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <!-- Oda paylaşımı Banner bitiş -->

      <!-- Sık sorulan sorular -->
      <div class="margin-pc">
      <Sss />

      </div>
      <div style="height:100px"></div>
      <!-- Sık sorulan sorular bitiş -->
    </div>
    <div v-else>
      <div class="containers mt-4">
        <div class="row">
          <div class="col-12 mb-4">
            <h2 class="font-weight-bold" v-if="goodMorning">
              Günaydın
              {{
                userProfileDatas.fullName == null
                  ? ""
                  : userProfileDatas.fullName + " ,"
              }}
            </h2>
            <h2 class="font-weight-bold" v-if="yourLord">
              Tünaydın
              {{
                userProfileDatas.fullName == null
                  ? ""
                  : userProfileDatas.fullName + " ,"
              }}
            </h2>
            <h2 class="font-weight-bold" v-if="niceDays">
              İyi günler
              {{
                userProfileDatas.fullName == null
                  ? ""
                  : userProfileDatas.fullName + " ,"
              }}
            </h2>
            <h2 class="font-weight-bold" v-if="goodEvening">
              İyi akşamlar
              {{
                userProfileDatas.fullName == null
                  ? ""
                  : userProfileDatas.fullName + " ,"
              }}
            </h2>
            <h2 class="font-weight-bold" v-if="sleepWell">
              İyi uykular
              {{
                userProfileDatas.fullName == null
                  ? ""
                  : userProfileDatas.fullName + " ,"
              }}
            </h2>
          </div>
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div class="card rounded p-4">
              <h3>
                İstekler
                <span
                  class="badge rounded-circle badge-info mb-1"
                  style="font-size: 17px"
                  v-if="newSendTravelData.length != 0"
                  >{{ newSendTravelData.length }}</span
                >
              </h3>
              <div
                class="card-text mb-2"
                v-for="(travel, idx) in newSendTravelData"
                :key="idx"
              >
                {{
                  travel.travelRemoveMode.reserveStatus == true
                    ? "Ev sahibi rezervasyonunuzu onayladı"
                    : travel.travelRemoveMode.reserveStatus == null
                    ? "Yeni bir rezervasyon isteği oluşturdunuz (onay bekleniyor)"
                    : "Ev sahibi rezervasyonu reddetti"
                }}

                <i
                  class="fas fa-check-circle text-success mr-2 ml-1"
                  :class="
                    travel.travelRemoveMode.reserveStatus == true
                      ? 'fas fa-check-circle text-success mr-2 ml-1'
                      : travel.travelRemoveMode.reserveStatus == null
                      ? 'far fa-clock text-warning mr-2 ml-1'
                      : 'fas fa-times-circle text-danger mr-2 ml-1'
                  "
                  style="font-size: 18px"
                ></i>
                <a
                  href=""
                  v-if="travel.travelRemoveMode.reserveStatus != false"
                  @click.prevent="
                    $router.push('/travelMode/' + travel.firebaseId)
                  "
                  style="color: #f93b3b; cursor: pointer"
                  >Detaylara git</a
                >
              </div>
              <div class="card-text" v-if="newSendTravelData.length == 0">
                Oluşturduğunuz rezervasyon isteği bulunmamaktadır.
                <a
                  href=""
                  @click.prevent="$router.push('/homes')"
                  style="color: #f93b3b; cursor: pointer"
                  >Keşfet</a
                >
              </div>
            </div>
            <div class="card rounded my-4 p-4">
              <h3>
                Rezervasyonlar
                <span
                  class="badge rounded-circle badge-info mb-1"
                  style="font-size: 17px"
                  v-if="travelsData.length != 0"
                  >{{ travelsData.length }}</span
                >
              </h3>
              <div
                class="card-text mb-2"
                v-for="(travel, idx) in travelsData"
                :key="idx"
              >
                {{
                  travel.travelRemoveMode.reserveStatus == true
                    ? "1 rezervasyon onayladınız"
                    : "1 misafir konutunuz için rezervasyon oluşturdu"
                }}
                <i
                  class="fas fa-check text-success mr-2 ml-1"
                  :class="
                    travel.travelRemoveMode.reserveStatus == true
                      ? 'fas fa-check text-success mr-2 ml-1'
                      : 'fas fa-info text-info mr-2 ml-1'
                  "
                  style="font-size: 18px"
                ></i>
                <a
                  href=""
                  @click.prevent="
                    $router.push(
                      '/homeHost/myReservations/' + travel.firebaseId
                    )
                  "
                  style="color: #f93b3b; cursor: pointer"
                  >Detaylara git</a
                >
              </div>
              <div class="card-text" v-if="travelsData.length == 0">
                Yaklaşan rezervasyonunuz bulunmamaktadır.
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="card p-4 rounded">
              <h3>Bildirimler</h3>
              <div
                class="card-text"
                style="cursor: pointer"
                v-if="showCardText"
              >
                <div class="row">
                  <div
                    class="col-11 card-hover p-3"
                    @click.prevent="
                      $router.push('/profile/' + $store.state.authKey)
                    "
                  >
                    Profil bilgilerinizi doldurmaya zaman ayırın.
                  </div>
                  <div
                    class="col-1 position-x"
                    @click.prevent="showCardText = false"
                  >
                    X
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="display-sm" style="height: 150px"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Sss from "@/components/common/sss";
import HostHeader from "@/components/host/hostHeader";
import axios from "axios";
export default {
  layout: "homes",
  components: {
    HostHeader,
    Sss,
  },
  data() {
    return {
      userProfileDatas: [],
      showCardText: true,
      travelsData: [],
      newSendTravelData: [],
      goodMorning: false,
      yourLord: false,
      niceDays: false,
      goodEvening: false,
      sleepWell: false,
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
            this.userProfileDatas = newArray;
          }
        });
    },
    getSendRezervData() {
      axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData.json"
        )
        .then((res) => {
          let data = res.data;
          let travelAllData = [];
          let newTravelData = [];
          for (let key in data) {
            travelAllData.push({ firebaseId: key, ...data[key] });
          }
          newTravelData = travelAllData.filter(
            (s) => s.authId == this.$store.state.authKey
          );
          for (let travel of newTravelData) {
            if (
              travel.userProfileData.authId == this.$store.state.authKey &&
              travel.travelRemoveMode.reserveStatus == false
            ) {
            } else {
              let tarih = new Date();
              let time = tarih.getTime();
              let travelTime = new Date(travel.travelData.dateData.endDate);
              let chanceTime = travelTime.getTime();
              if (time > chanceTime) {
              } else {
                this.newSendTravelData.push(travel);
              }
            }
          }
        });
    },
    getRezervData() {
      axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData.json"
        )
        .then((res) => {
          let data = res.data;
          let travelAllData = [];
          let newTravelData = [];
          for (let key in data) {
            travelAllData.push({ firebaseId: key, ...data[key] });
          }
          newTravelData = travelAllData.filter(
            (s) => s.userProfileData.authId == this.$store.state.authKey
          );
          for (let travel of newTravelData) {
            if (
              travel.userProfileData.authId == this.$store.state.authKey &&
              travel.travelRemoveMode.reserveStatus == false
            ) {
            } else {
              let tarih = new Date();
              let time = tarih.getTime();
              let travelTime = new Date(travel.travelData.dateData.endDate);
              let chanceTime = travelTime.getTime();
              if (time > chanceTime) {
              } else {
                this.travelsData.push(travel);
              }
            }
          }
        });
    },
    goNewHome(){
      if(this.$store.getters.isAuthenticated){
        let goNewHome = this.$store.state.homesData.filter(
        (c) => c.authId == this.$store.state.authKey
      );
        if(goNewHome.length == 0){
          this.$router.push('/homeHost/newHome')
        }
      }
      
    }
  },
  created() {
    this.getUserDATA();
    this.goNewHome();
    this.getSendRezervData();
    this.getRezervData();
    let date = new Date().getHours();
    if (date >= 5 && date <= 11) {
      this.goodMorning = true;
    }
    if (date >= 12 && date <= 13) {
      this.yourLord = true;
    }

    if (date >= 14 && date <= 18) {
      this.niceDays = true;
    }
    if (date >= 19 && date <= 21) {
      this.goodEvening = true;
    }
    if (date >= 22) {
      this.sleepWell = true;
    }
    if (date <= 4) {
      this.sleepWell = true;
    }

  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.filter {
  height: 450px;
  width: 550px;
  border-radius: 40px;
  background: rgb(0, 0, 0 , 0.4);
  position: absolute;
  filter: blur(10px);
  z-index: 5;

}
.filter-mobile {
  height: 400px;
  width: 300px;
  border-radius: 40px;
  background: rgb(0, 0, 0 , 0.3);
  position: absolute;
  filter: blur(10px);
  z-index: 5
}
.host-container {
  height: 450px;
  width: 86%;
  border-radius: 15px;
  display: inherit;
  object-fit: cover;
  background-image: url("https://a0.muscache.com/im/pictures/35b38dd0-5cec-4e9a-995d-7a0f9adcc372.jpg?im_q=highq&im_w=2560");
 background-position: center center;
 background-size: cover;

}
.col-button-click {
  transition: transform 80ms ease-in;
}

.col-button-click:active {
  transform: scale(0.95);
}
.host-container-mobile {
  display: none;
}
header {
  position: relative;
  background-image: url("https://a0.muscache.com/im/pictures/b2aa56df-5e9f-45a9-bb36-2b8a5b6640af.jpg");
  height: 75vh;
  margin: 100px 10px;
  min-height: 20rem;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  object-fit: cover;
}
footer {
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1541194577687-8c63bf9e7ee3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
  height: 75vh;
  margin: 100px 10px;
  min-height: 20rem;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  object-fit: cover;
}
.fwb {
  font-weight: bolder !important;
}
@media (max-width: 576px) {
  #h2-istanbul {
    font-size: 20px !important;
  }
  .sm-h1 {
    font-size: 10px !important;
  }
  .background {
    height: 35rem !important;
    border-radius: 40px;
    background-image: url("https://images.unsplash.com/photo-1620086385485-d0bd6daa815c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    width: 97% !important;
  }
  .HomePost-card {
    height: 20rem;
    border-radius: 40px;
  }
}
@media (min-width:1450px) {
  .margin-pc {
    margin-top: 5%;
  }
    .fwb {
  font-size: 55px!important;
}
}
.display-sm {
  display: none;
}
.containers {
  width: 80%;
  margin-right: auto;
  margin-left:auto;
}
@media (max-width: 768px) {
  .easy-money-margin {
    margin-top: 20%;
  }
  .easy-money-margin-bottom {
    margin-bottom: 25%!important;
  }
  .background-mobile{
    display: none!important;
  }
  .fwb {
  font-size: 45px !important;
}
  .host-container-mobile {
    display: inherit !important;
    min-height: 400px;
    width: 90%;
    border-radius: 15px;
    padding: 0px;
    display: inherit;
    background-image: url("https://a0.muscache.com/im/pictures/35b38dd0-5cec-4e9a-995d-7a0f9adcc372.jpg?im_q=highq&im_w=2560");
     object-fit: cover;
 background-position: center center;
 background-size: cover;
  }
  .host-container {
    display: none;
  }
  .display-sm {
    display: inherit !important;
  }
  #h2-istanbul {
    font-size: 20px !important;
  }
  .d-block-xs {
    display: block !important;
    /* justify-content: center!important;
    align-items: center; */
  }
  .background {
    height: 35rem !important;
    border-radius: 40px;
    background-image: url("https://images.unsplash.com/photo-1620086385485-d0bd6daa815c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    width: 95%;
  }
  .card-xs-sm-font {
    justify-content: center !important;
    margin: 15px auto !important;
    width: 90%!important;
  }
  .sm-h1 {
    font-size: 0px !important;
  }
  .span-xs {
    font-size: 10px !important;
  }
  .button-sm {
    font-size: 10px !important;
    margin-top: 10px !important;
  }
  .button-sm-2 {
    font-size: 15px !important;
    width: 125px !important;
    margin-top: 10px !important;
  }
  .HomePost-card {
    height: auto !important;
    border-radius: 40px;
  }
  .d-block-xs {
    display: block !important;
    /* justify-content: center!important;
    align-items: center; */
  }
  .card-xs-sm-font {
    justify-content: center !important;
    margin: 15px auto !important;
  }

  .sm-h1 {
    font-size: 27px !important;
  }
  .span-xs {
    font-size: 19px !important;
  }
  .button-sm {
    font-size: 14px !important;
    margin-top: 10px !important;
  }
  .button-sm-2 {
    font-size: 15px !important;
    width: 125px !important;
    margin-top: 10px !important;
  }
}
.HomePost-card {
  height: 20rem;
  border-radius: 40px;
}

.background {
  height: 35rem !important;
  border-radius: 40px;
  background-image: url("https://images.unsplash.com/photo-1620086385485-d0bd6daa815c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 70%;
}

.fy {
  font-size: 2.4rem !important  ;
  font-family: "Titillium Web", sans-serif !important;

  color: BLACK;
  font-weight: 500;
  letter-spacing: 0.4px;
  transition: 1s all;
  cursor: pointer;
}
.position-x {
  position: fixed;
  right: 90px;
  cursor: pointer;
  margin-top: 8px;
}
.position-x:hover {
  color: #f93b3b;
}
.card-hover {
  border-radius: 10px;
}
.card-hover:hover {
  background: rgb(0, 0, 0, 0.09);
}
.fa {
  font-size: 1.5rem;
  font-family: "Titillium Web", sans-serif !important;

  color: BLACK;
  font-weight: 500;
  letter-spacing: 0.4px;
  transition: 1s all;
  cursor: pointer;
}
.ft {
  font-size: 3rem !important  ;
  font-family: "Titillium Web", sans-serif !important;

  color: BLACK;
  font-weight: 500;
  letter-spacing: 0.4px;
  transition: 1s all;
}
.fy:hover {
  transform: scale(1.01);
}
.sc {
  transition: all 1s;
}
.sc:hover {
  transform: scale(1.01);
  cursor: pointer;
}
</style>