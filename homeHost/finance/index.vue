<template>
  <div style="font-family: 'Titillium Web', sans-serif !important">
    <HostHeader :userProfilesData="userProfileDatas" />
    <!-- Finance Banner -->
    <div
      class="container text-center align-items-center"
      style="height: 600px !important"
    >
      <h4 class="text-center finance-title font-weight-bold" style="margin-top: 7rem">
        Finans
      </h4>
      <h1
        class="text-center font-weight-bold finance-title "
        style="font-size: 3rem; cursor: pointer"
      >
        Bedfied'da nasıl para kazanırsınız?
      </h1>
      <div class="banner-content  h4 my-5 p-2">
        Bedfied sizden hiçbir kesinti yapmaz, siz sadece
        ücretlendirebileceğiniz şeyleri serbestçe belirlemenin keyifini çıkarın.
      </div>
       <nuxt-link
           to="/homeHost/auth"
           tag="div"
           
           >
              <button class="btn  btn-danger btn-lg my-5 button-sm-2">
              Kaydınızı oluşturmaya başlayın
            </button>
           </nuxt-link>
    </div>
    <!-- Finance Banner 2 -->
    <div
      class="container background my-5 border"
      style="cursor: pointer !important"
    >
      <div
        class="card w-75 h-75 border border-info d-block mx-auto"
        style="margin-top: 5% !important; border-radius:50px!important"
      >
        <div class="card-body d-flex" >
          <div class="w-50 h-50">
            <h2 class="p-3 text-center margin-title sm-h1">
              İstanbul şehrinde ev sahipliği yaparak ayda
              <span class="text-danger">6.804₺</span> tutarında kazanç elde edin
            </h2>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary btn-md btn-block mt-2 button-sm"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              + Potansiyel kazancınızı <br> nasıl tahmin ediyoruz?
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
                      Potansiyel kazancınızı tahmin etmek amacıyla yaptıklarımız
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
                    hesaplanır ("Doluluk Oranı "). Kullanılan gecelik fiyatlar,
                    son 12 aydaki ortalama fiyatların medyanına dayanmaktadır
                    (harcamalar, ücretler ve vergilerden önce). Haftalık
                    tahminler 7 gece doluluk kullanır. Tahminleri hesaplamak
                    için kullanılan Doluluk Oranları, o bölgede ne sıklıkta
                    rezerve edildiklerine göre ölçülen listelerin ilk% 50'sine
                    dayanır ve girişlerin bu kısmı, ilgili ev sahiplerinin
                    kazanç potansiyelini göstermek için kullanılır. Yalnızca
                    yeterli kullanılabilirliğe sahip girişler dikkate alınır.
                    Enlem / boylam dahil olmak üzere potansiyel listeniz
                    hakkında bilgi verdiğiniz yer, Yatak odası sayısı ve oda
                    tipi, sağladığımız tahmini kazanç tahminini bu bilgileri
                    yansıtır. Tutarlar tahminidir ve garanti edilmez. Gerçekte
                    ne kadar kazandığınız müsaitlik durumunuza, fiyatınıza,
                    listeleme özelliklerinize ve olanaklarınıza, kabul ve iptal
                    oranlarınıza, misafir değerlendirmelerine, geçerli yasal
                    kısıtlamalara, bölgenizdeki talebe ve diğer faktörlere bağlı
                    olacaktır.
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
          <div class="w-50 p-5">
            <span class="border rounded fa p-3 my-1 span-xs"> İstanbul</span>
            <span class="border rounded fa p-3 my-1 span-xs">Yerin tamamı</span>
            <span class="border rounded text fa p-3 my-1 span-xs"
              >6 Misafir</span
            ><br />
          </div>
        </div>
      </div>
    </div>
    <hr class="my-5 w-25 d-block bg-dark mx-auto" />
    <div class="container-fluid mt-4">
      <hr class="my-5 w-50 d-block mx-auto" />
      <h1
        class="text-center  finance-title font-weight-bold my-5"
        style="font-size: 3rem ; cursor: pointer"
      >
        Basit, sorunsuz ödemeler
      </h1>
      <div class="d-flex justify-content-center d-block-xs">
        <div
          class="card shadow-lg border border-info card-xs-sm-font text-center mt-5"
          style="width: 30%; cursor: pointer !important"
        >
          <div class="card-body">
            <h2><span class="badge badge-info">1</span></h2>
            <div class="card-title text-dark h3 p-2 font-weight-bold">
              Yerinizi ücretsiz kayıt edin
            </div>
            <div class="card-text h4 p-4">
              Evinizin reklamını koşulsuz olarak binlerce gezgine
              yapabilirsiniz. kaydolma ücreti ya da üyelik ücreti yok.
            </div>
          </div>
        </div>
        <div
          class="card shadow-lg border border-info card-xs-sm-font text-center mx-5 mt-5"
          style="width: 30%; cursor: pointer !important"
        >
          <div class="card-body">
            <h2><span class="badge badge-info">2</span></h2>
            <div class="card-title text-dark h3 p-2 font-weight-bold">
              Rezervasyon alın
            </div>
            <div class="card-text h4 p-4">
              Bedfied'da ev sahipliği yaptığınızda rezervasyon alarak
              misafirlere keyifli deneyimler yaşatabilirsiniz.
            </div>
          </div>
        </div>
        <div
          class="card shadow-lg border border-info card-xs-sm-font text-center mt-5"
          style="width: 30%; cursor: pointer !important"
        >
          <div class="card-body">
            <h2><span class="badge badge-info">3</span></h2>
            <div class="card-title text-dark h3 p-2 font-weight-bold">
              Girişten sonra ödeme alın
            </div>
            <div class="card-text h4 p-3">
              Misafiriniz evinizi beğendikten sonra anlaştığınız ücrette ödeme
              alın. Tamamen özgürsünüz hiçbir kısıtlama , komisyon , faiz yok!
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="container " style="margin-top: 15rem">
      <hr class="my-5 w-25 d-block mx-auto bg-dark" />
      <h1
        class="text-center font-weight-bold my-5"
        style="
          font-size: 4rem !important;
          cursor: pointer;
          margin-bottom: 7rem !important;
        "
      >
        Her gece harika bir fiyat
      </h1>
      <div class="row">
        <div class="col-md-6 col-xs-12 col-sm-12 d-flex">
          <img
            style="border-radius: 40px"
            class="img-fluid w-100 h-100"
            src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="sol fotoğraf"
          />
        </div>
        <div class="col-md-6 col-xs-12 col-sm-12 col-responsive2">
          <div class="img-content w-75 text-center">
            <div
              class="content-title text-center d-flex justify-content-center align-items-center h3 font-weight-bold my-5"
            >
              Hizmetler için ekstra para kazanın
            </div>
            <div class="content-decreption p-3 h4">
              Bedfied topluluğu bir ev sahibi olarak her zaman sizin
              yanınızdadır.İşe yarayacak ipuçları ve öneriler için karşınızda
              güçlü bir Yardım Merkezi,Topluluk Merkezimizde binlerce ev sahibi
              ve birkaç ev sahipliği araç takımı bulacaksanız.
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-xs-12 col-sm-12 d-flex order-2"
          style="margin-top: 10rem"
        >
          <img
            style="border-radius: 40px"
            class="img-fluid w-100 h-100"
            src="https://images.unsplash.com/photo-1588453251771-cd919b362ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="sol fotoğraf"
          />
        </div>
        <div
          class="col-md-6 col-xs-12 col-sm-12 col-responsive2"
          style="margin-top: 10rem"
        >
          <div class="img-content w-75 text-center">
            <i
              class="far fa-calendar-alt text-dark"
              style="font-size: 2.5rem"
            ></i>
            <div
              class="content-title text-center d-flex justify-content-center align-items-center h2 font-weight-bold my-5"
            >
              İhtiyaçlarınıza göre özelleştirin
            </div>
            <div class="content-decreption p-3 h4">
              Küresel ekibimiz sizi telefon, e-posta ve canlı sohbet yoluyla
              desteklemek için 7/24 beklemede ekip kaydınızla ilgili sorunlardan
              misafirlerle ilgili endişelere kadar her konuda size yardımcı
              olabilir.
            </div>
          </div>
        </div>
      </div>
    </div>
    <Sss />
  </div>
</template>

<script>
import Sss from "@/components/common/sss";
import HostHeader from "@/components/host/hostHeader";
import axios from 'axios';
export default {
  components: {
    HostHeader,
    Sss
  },
  data(){
    return {
      userProfileDatas:[]
    }
  },
  methods: {
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

<style  scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");

.fwb {
  font-weight: bolder !important;
}
@media (min-width:1450px) {
  .margin-title {
    margin-top: 10%;
  }
  .background {
    height: 35rem!important;
  }
  .banner-content {
     font-size: 35px!important;
  }
  .finance-title {
    font-size: 55px!important;
  }
}
@media (max-width: 576px) {
 
  .span-xs {
    font-size: 17px !important;
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
  .HomePost-card {
    height: 30rem !important;
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
   .col-responsive2 {
    margin-left: 95px!important; 
  }
}

@media (max-width: 768px) {
  .background {
    display: none;
  }
   .col-responsive2 {
    margin-left: 60px!important; 
  }
  .d-block-xs {
    display: block !important;
    /* justify-content: center!important;
    align-items: center; */
  }
  .card-xs-sm-font {
    justify-content: center !important;
    margin: 15px auto !important;
    width: 90%!important;
  }
  .sm-h1 {
    font-size: 20px !important;
     margin-top: -10px !important;
  }
  .span-xs {
    font-size: 15px !important;
    font-weight: bold;
  }
  .button-sm {
    font-size: 10px !important;
    margin-top: -10px !important;
  }
  .button-sm-2 {
    font-size: 15px !important;
    width: 125px !important;
    margin-top: 10px !important;
  }
  .HomePost-card {
    height: 30rem !important;
    border-radius: 40px;
  }
}
.HomePost-card {
  height: 20rem;
  border-radius: 40px;
}

.background {
  height: 30rem ;
  border-radius: 40px;
  background-image: url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
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
.fa {
  font-size: 2rem;
  font-family: "Titillium Web", sans-serif !important;

  color: BLACK;
  font-weight: 500;
  letter-spacing: 0.4px;
  transition: 1s all;
  cursor: pointer;
}
.ft {
  font-size: 4rem !important  ;
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