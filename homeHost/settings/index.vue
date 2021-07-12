<template>
  <div style="font-family: 'Titillium Web', sans-serif !important">
    <HostHeader :userProfilesData="userProfileDatas"/>
    <div
      class="container text-center align-items-center"
      style="height: 600px !important"
    >
      <h4 class="text-center setting-h4-margin font-weight-bold" style="margin-top: 7rem">
        Ayarlar
      </h4>
      <h1
        class="text-center setting-h1-margin font-weight-bold"
        style="font-size: 3rem ; cursor: pointer"
      >
        Ev sahipliği yapmaya başlamak
      </h1>
      <div class="banner-content banner-margin h5 text-center my-5 p-2">
        Bedfied'a ev kaydetmek hiç bu kadar kolay ya da ihtiyaca göre
        düzenlenebilir olmamıştı. Para kazanmanıza ve binlerce seyahatsevere
        ulaşmanıza yalnız birkaç adım kaldı.
      </div>
     <nuxt-link
     to="/homeHost/auth"
     tag="div"
     >
        <button class="btn btn-danger btn-lg">Başlayın</button>
     </nuxt-link>
    </div>

    <div class="container text-dark text-center">
      <hr class="mb-5 w-25 d-block mx-auto bg-dark" />
      <div class="row">
        <h1
          class="d-block mx-auto font-title font-weight-bold mb-5"
          style="
            font-size: 2.5rem;
            cursor: pointer;
            margin-bottom: 6rem !important;
          "
        >
          Nasıl ev sahipliği yaptığınızı kontrol edin
        </h1>
        <div class="col-md-6 col-xs-12 col-sm-12 col-lg-6 col-xl-6">
          <i class="far fa-clock m-3 text-primary title-pc " style="font-size: 2rem"></i>
          <h3 class="font-weight-bold text-info title-pc">
            İstediğiniz zaman ev sahipliği yapın
          </h3>
          <div class="context p-4 h5 mt-3">
            Ev sahipliği yapmanızı gerektiren minimum ya da zorunlu bir süre
            yok, dolayısıyla uygun olmadığınız tarihleri devre dışı
            bırakabilirsiniz. Aynı zamanda da bir misafirin konaklayabileceği
            min/mak gece misafirlerin ne kadar önceden rezervasyon
            yapabilecekleri bir rezervasyondan önce, önceden bildirme
            gerekliliği de dahil, uygunluğunuz ile ilgili kurallar da
            koyabilirsiniz.
          </div>
        </div>
        <div class="col-md-6 col-xs-12 col-sm-12 col-lg-6 col-xl-6">
          <i
            class="fas fa-money-bill-wave m-3 text-success title-pc"
            style="font-size: 2rem"
          ></i>
          <h3 class="font-weight-bold text-success title-pc">
            İyi hissettiğiniz fiyatlar belirleyin
          </h3>
          <div class="context p-4 h5   mt-5">
            Gecelik fiyatlarınızı seçmelisiniz ve fiyatlandırma araçlarımız
            karar vermenize yardımcı olabilir. Ayrıca aşağıdaki gibi özel
            ayrıntıları kolayca ekleyebilirsiniz.

            <div class="p-4">
              -Temizlik ücretleri + Haftalık indirimler + Yılın belirli
              zamanları için özel fiyatlar
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xs-12 col-sm-12 col-lg-6 col-xl-6">
          <i
            class="far fa-calendar-check m-3 text-warning title-pc"
            style="font-size: 2rem"
          ></i>
          <h3 class="font-weight-bold text-warning title-pc">
            Takvimleri hızlıca kontrol edin
          </h3>
          <div class="context p-4 h5 mt-3">
            Ev sahipliği yapamayacağınız zaman veya mevcut bir rezervasyonunuz
            bulunurken rezervasyon almayı önlemek için Bedfied takviminizi
            diğer takvimlerizle birleştirebilirsiniz. Bu tüm takvimlerinizi
            otomatik olarak güncel tutmanızı sağlar.
          </div>
        </div>
        <div class="col-md-6 col-xs-12 col-sm-12 col-lg-6 col-xl-6">
          <i class="fas fa-key m-3 text-secondary title-pc  " style="font-size: 2rem"></i>
          <h3 class="font-weight-bold text-secondary title-pc">
            Yeriniz için kurallar koyun
          </h3>
          <div class="context p-4 h5 mt-3">
            Beklentileri belirlemeye yardımcı olmak için rezervasyon yapmadan
            önce misafirlerin kabul etmesi gereken ev kuralları
            ekleyebilirsiniz. Bir misafir rezervasyon yaptıktan sonra bir kuralı
            çiğnerse, rezervasyonu cezasız olarak iptal edebilirsiniz.
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" style="height: 400px">
      <header>
        <div class="overlay"></div>
        <div class="container h-100"></div>
      </header>
    </div>
    <div class="container-fluid mt-4 margin-pc">
      <hr class="my-5 w-25 d-block mx-auto bg-dark" />
      <div class="d-flex justify-content-center d-block-xs">
        <div
          class="card shadow-lg  border border-dark card-xs-sm-font text-center mt-5"
          style="width: 30%; cursor: pointer !important;"
        >
          <div class="card-body">
            <i
              class="fas fa-info-circle text-alertalert"
              style="font-size: 2rem"
            ></i>
            <div class="card-title text-dark h3 p-3 font-weight-bold">
              Başlamanız için rehberlik
            </div>
            <div class="card-text h5 p-4">
              Kaydınızı oluştururken size misafirlerin rezervasyon yaparken
              bilmek isteyeceği soruları soracağız. Misafirlerin
              bekleyebilecekleri herhangi orijinalikler de dahil olmak üzere,
              yer ile ilgili neyin özel olduğuna dair ayrıntıları vererek
              evinizi tarif edeceksiniz.
            </div>
          </div>
        </div>
        <div
          class="card shadow-lg  border border-dark card-xs-sm-font text-center mx-5 mt-5"
          style="width: 30%; cursor: pointer !important"
        >
          <div class="card-body">
            <i
              class="fas fa-lightbulb text-alert"
              style="font-size: 2rem"
            ></i>
            <div class="card-title text-dark h3 p-3 font-weight-bold">
              Yardım ipuçları
            </div>
            <div class="card-text h5 p-4">
              Rezervasyon alma ile ilgili herhangi bir sıkıntı yaşıyorsanız,
              size fiyatlar, ayarlar ve daha hızlı rezervasyon almanıza yardımcı
              olabilecek diğer güncellemeler ile ilgili tavsiyelerde
              bulunacağız. Ayrıca, Topluluk merkezimizdeki deneyimi ev sahipleri
              de buna katkıda bulunabilir.
            </div>
          </div>
        </div>
        <div
          class="card shadow-lg  border border-dark card-xs-sm-font text-center mt-5"
          style="width: 30%; cursor: pointer !important"
        >
          <div class="card-body">
            <i
              class="fab fa-angellist text-alert"
              style="font-size: 2rem"
            ></i>
            <div class="card-title text-dark h3 p-3 font-weight-bold">
              Binlerce misafir
            </div>
            <div class="card-text h5 p-4">
              Kaydınızı tamamladıktan sonra Türkiye'nin her yanından misafir
              evinizi arama sonuçlarında bulabilir. Her gece için 2 bine yakın
              Bedfied misafiri var ve sizin için uygun olan rezevasyonları
              almanıza yardımcı olacak araçlarımız var.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 15rem">
      <hr class="my-5 w-25 d-block mx-auto bg-dark" />
      <h1
        class="text-center font-weight-bold my-5"
        style="
          font-size: 4rem !important;
          cursor: pointer;
          margin-bottom: 7rem !important;
        "
      >
        Ev sahipliği ile ilgili destek alın
      </h1>
      <div class="row">
        <div class="col-md-6 col-xs-12 col-sm-12 d-flex">
          <img
            style="border-radius: 40px"
            class="img-fluid w-100 h-100"
            src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="sol fotoğraf"
          />
        </div>
        <div class="col-md-6 col-xs-12 col-sm-12 col-responsive2">
          <div class="img-content w-75 text-center">
            <div
              class="content-title text-center d-flex justify-content-center align-items-center h2 font-weight-bold my-5"
            >
              Yardımcı kaynaklar
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
            src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="sol fotoğraf"
          />
        </div>
        <div
          class="col-md-6 col-xs-12 col-sm-12 col-responsive2"
          style="margin-top: 10rem"
        >
          <div class="img-content w-75 text-center">
            <div
              class="content-title text-center d-flex justify-content-center align-items-center h2 font-weight-bold mb-5"
            >
              Sizin için 7/24 buradayız
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
     <div class="container-fluid mb-5" style="height: 600px">
      <footer>
        <div class="overlay"></div>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white font-weight-bold">
              <h1 class="fwb" style="cursor: pointer; font-size: 60px">
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
    
  </div>
</template>

<script>
import axios from 'axios';
import HostHeader from "@/components/host/hostHeader";
export default {
 
  components: {
    HostHeader,
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
    this.getUserDATA()
  }
};
</script>

<style  scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");

@media (min-width:1450px) {
  .context {
    font-size:1.7rem!important ;
  }
   .title-pc {
     font-size: 2.7rem!important;
   }
  .font-title  {
    font-size: 4rem!important;
  }
  .setting-h4-margin {
    font-size: 50px;
  }
  .setting-h1-margin {
    font-size: 70px!important;

  }
  .banner-margin  {
    font-size: 30px!important;
  }
  .margin-pc {
     margin-top: 10%!important;
  }
}

@media (max-width: 576px) {
  .sm-h1 {
    font-size: 27px !important;
  }
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
  .col-responsive {
    margin-left: 40px;
  }
  .col-responsive2 {
    margin-left: 95px!important; 
  }
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
@media (max-width: 768px) {
  .content-decreption {
    margin: 0px 0px 0px -30px!important;
    padding: 0px!important;
    width: 130%!important;
  }
  .d-block-xs {
    display: block !important;
    /* justify-content: center!important;
    align-items: center; */
  }
  .card-xs-sm-font {
    justify-content: center !important;
    margin: 105px auto !important;
    width: 95%!important;
  }
  .col-responsive {
    margin-left: 40px;
  }
  .col-responsive2 {
    margin-left: 55px;
  }
}
header {
  position: relative;
  background-image: url("https://images.unsplash.com/flagged/photo-1573168710511-8742850a07b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
  height: 65vh;
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