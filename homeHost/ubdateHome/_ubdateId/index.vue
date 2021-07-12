<template>
  <div class="fm">
    <HostHeader :userProfilesData="userProfileDatas" />
    <!-- Progress Bar Start  -->
    <div class="progress border">
      <div
        class="
          progress-bar
          bg-danger
          progress-bar-striped progress-bar-animated
        "
        role="progressbar"
        :style="'width:' + stepsWidth + '%'"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <!-- Progress Bar Finish -->
    <!-- 1 -->
    <!-- New-Home-Step-1 Start -->
    <div v-if="steps.step1">
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1>Güncellemeyi hangi adımda gerçekleştirmek istiyorsunuz ?</h1>
            <h5 class="text-muted my-3">
              Yayımladıktan sonra kaydınızı istediğiniz zaman
              düzenleyebilirsiniz
            </h5>
            <div class="row">
              <div
                @click.prevent="step1Go"
                style="cursor: pointer"
                class="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-2 my-3"
              >
                <h4><span class="badge badge-danger rounded">1</span> Konum</h4>
              </div>
              <div
                @click.prevent="first3Look"
                style="cursor: pointer"
                class="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-2 my-3"
              >
                <h4>
                  <span class="badge badge-danger rounded">2</span> Konut türü
                </h4>
              </div>
              <div
                @click.prevent="first4Look"
                style="cursor: pointer"
                class="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-2 my-3"
              >
                <h4>
                  <span class="badge badge-danger rounded">3</span> Mekan türü
                </h4>
              </div>
              <div
                @click.prevent="first5Look"
                style="cursor: pointer"
                class="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-2 my-3"
              >
                <h4>
                  <span class="badge badge-danger rounded">4</span> Misafir,
                  yatak ve banyo sayısı
                </h4>
              </div>
              <div
                @click.prevent="first6Look"
                style="cursor: pointer"
                class="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-2 my-3"
              >
                <h4>
                  <span class="badge badge-danger rounded">5</span> Mekanlar ve
                  Olanaklar
                </h4>
              </div>
              <div
                @click.prevent="first7Look"
                style="cursor: pointer"
                class="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-2 my-3"
              >
                <h4>
                  <span class="badge badge-danger rounded">6</span> Açıklama
                </h4>
              </div>
              <div
                @click.prevent="first8Look"
                style="cursor: pointer"
                class="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-2 my-3"
              >
                <h4>
                  <span class="badge badge-danger rounded">7</span> Ev kuralları
                </h4>
              </div>
              <div
                @click.prevent="first9Look"
                style="cursor: pointer"
                class="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-2 my-3"
              >
                <h4>
                  <span class="badge badge-danger rounded">8</span> Fotoğraflar
                </h4>
              </div>
              <div
                @click.prevent="first10Look"
                style="cursor: pointer"
                class="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-2 my-3"
              >
                <h4>
                  <span class="badge badge-danger rounded">9</span>
                  Fiyatlandırma
                </h4>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5">
            <img
              :src="
                home.photos[0].photo == null
                  ? 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                  : home.photos[0].photo
              "
              alt="new-home-1-img"
              class="float-right img-responsive w-75 img-all img-phone-screen"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
    <transition name="home">
      <div
        class="card pop-up-info bg-light shadow-lg"
        style="z-index: 5"
        v-if="popUp"
      >
        <div class="row w-100 h-100">
          <div class="col-6 text-center mt-4">
            <h6>
              Güncelle başarılı <i class="fa fa-check-circle text-success"></i>
              <br />
              {{ home.fullName }}
            </h6>
            <h6>{{ home.county }} bölgesinde</h6>
            <button
              @click="$router.push('/homes/' + $route.params.ubdateId)"
              class="btn btn-success"
            >
              Önizleme
            </button>
          </div>
          <div class="col-6">
            <img
              class="float-right img-responsive mt-3 mr-3 rounded"
              :src="home.photos[0].photo"
              style="object-fit: cover"
              width="150"
              height="140"
              alt="img"
            />
          </div>
        </div>
      </div>
    </transition>
    <transition name="home">
      <div class="container mt-5" v-if="steps.step2">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1 class="h1 mb-3">
              Merhaba, {{ home.fullName }} <br />
              haydi konutunuzu güncelleyelim birlikte
            </h1>
            <span class="text-muted">1.ADIM</span>
            <h3 class="mb-3">Yeriniz nerede bulunuyor?</h3>
            <button @click.prevent="getAdress" class="btn btn-outline-dark">
              <i class="fas fa-map-marker-alt mr-1"></i>
              Mevcut konumu kullan
            </button>
            <input
              @blur="$v.home.adres.$touch()"
              v-model="home.adres"
              :class="{ 'is-invalid mt-4 ': $v.home.adres.$error }"
              type="text"
              class="form-control font-weight-bold border border-dark mt-4"
              id="inputAddress1"
              placeholder="Adres"
            />
            <div v-if="$v.home.adres.$error" class="form-text text-danger">
              Bu alan zorunludur...!!!
            </div>
            <button @click.prevent="step2Back" class="btn btn-danger mt-5">
              <i class="far fa-arrow-alt-circle-left"></i> Genel Bakış
            </button>
            <button
              :disabled="$v.home.adres.$invalid"
              @click.prevent="step2Go"
              class="btn btn-danger mt-5 float-right"
            >
              Devam et
            </button>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img
              :src="
                home.photos.photo2 == null
                  ? 'https://images.unsplash.com/photo-1562831156-b5c62546508a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : home.photos.photo2
              "
              alt="2.Fotoğrafı eklememişsiniz"
              class="float-right img-responsive w-75 img-all img-phone-screen"
              height="400"
            />
          </div>
        </div>
      </div>
    </transition>

    <!-- New-Home-Step-1 Finish -->
    <!-- 2 -->
    <!-- New-Home-Step-2 Start  -->
    <transition name="home">
      <div class="container mt-4" v-if="steps.step3">
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <h1 class="h1 mb-3">Ne tür bir mekan kaydediyorsunuz?</h1>
            <span class="text-muted">2.ADIM</span>
            <div class="form-group my-3">
              <label class="label font-weight-bold" for="selectBox1"
                >Bir konut türü seçin</label
              >
              <select
                @blur="$v.home.houseType.$touch()"
                v-model="home.houseType"
                :class="{ 'is-invalid': $v.home.houseType.$error }"
                class="form-control border border-dark mt-2"
                id="selectBox1"
              >
                <option disabled selected>Birini seçin</option>
                <option>Apartman dairesi</option>
                <option>Ev</option>
                <option>İkincil birim</option>
                <option>Benzersiz yer</option>
                <option>Oda kahvaltı</option>
                <option>Butik otel</option>
              </select>
              <div
                v-if="$v.home.houseType.$error"
                class="form-text text-danger"
              >
                Bu alan zorunludur...!!!
              </div>
            </div>
            <div class="buttons my-5">
              <button @click.prevent="step3Back" class="btn btn-danger">
                <i class="far fa-arrow-alt-circle-left"></i> Önceki
              </button>
              <button
                @click.prevent="step3Go"
                class="btn btn-danger float-right"
                :disabled="$v.home.houseType.$invalid"
              >
                Sonraki <i class="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div class="d-flex">
              <div class="card w-50 p-3">
                <h4>Apartman Dairesi</h4>
                <div class="card-text">
                  Genellikle birden fazla hanenin bulunduğu konut birimleri veya
                  rezidanslarda yer alırlar.
                </div>
              </div>
              <div class="card w-50 p-3">
                <h4>Ev</h4>
                <div class="card-text">
                  Genellikle müstakil yapılardır. Ancak dubleks evler gibi bazı
                  örneklerinin bir başka yapıyla ortak duvarı veya avlu ya da
                  bahçesi olabilir.
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="card w-50 p-3">
                <h4>İkincil birim</h4>
                <div class="card-text">
                  Misafirlere ait ayrı girişi bulunur ve mülkiyeti genelikle
                  başka mekânla ortaktır.
                </div>
              </div>
              <div class="card w-50 p-3">
                <h4>Benzersiz yer</h4>
                <div class="card-text">
                  Geleneksel ev ve dairelerde görülmeyen ilginç veya sıra dışı
                  yapısal özelliklere sahip konaklama yerleri.
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="card w-50 p-3">
                <h4>Oda kahvaltı</h4>
                <div class="card-text">
                  Misafirlere kahvaltı sunan profesyonel konaklama işletmeleri.
                  Ev sahibi de genellikle aynı mekânda yaşar.
                </div>
              </div>
              <div class="card w-50 p-3">
                <h4>Butik otel</h4>
                <div class="card-text">
                  Markası veya dekoruyla genellikle kendine özgü bir tarz ya da
                  temaya göre tanımlanmış profesyonel konaklama işletmeleri.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- New-Home-Step-2 Finish  -->
    <!-- 3 -->
    <!-- New-Home-Step-3 Start -->
    <transition name="home">
      <div class="container mt-5" v-if="steps.step4">
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <h1 class="h1 mb-3">Misafirlerin kalacağı yerin türü nedir?</h1>
            <span class="text-muted">3.ADIM</span>
            <div class="form-group my-3">
              <label class="label font-weight-bold" for="selectBox1"
                >Bir yer türü seçin</label
              >
              <select
                class="form-control border border-dark mt-2"
                placeholder="Birini seçin"
                id="selectBox1"
                @blur="$v.home.houseStayType.$touch()"
                v-model="home.houseStayType"
                :class="{ 'is-invalid': $v.home.houseStayType.$error }"
              >
                <option disabled selected>Birini seçin</option>
                <option>Yerin tamamı</option>
                <option>Özel oda</option>
                <option>Müşterek oda</option>
              </select>
              <div
                v-if="$v.home.houseStayType.$error"
                class="form-text text-danger"
              >
                Bu alan zorunludur...!!!
              </div>

              <label class="label my-3 font-weight-bold" for="inputName1"
                >İl ve İlçe adını giriniz</label
              >
              <input
                class="form-control border border-dark w-100"
                type="text"
                id="input"
                @blur="$v.home.county.$touch()"
                v-model="home.county"
                :class="{ 'is-invalid': $v.home.county.$error }"
                placeholder="İstanbul / Kadıköy"
              />
              <div v-if="$v.home.county.$error" class="form-text text-danger">
                Bu alan zorunludur...!!!
              </div>
            </div>
            <div class="buttons my-5">
              <button @click.prevent="step4Back" class="btn btn-danger">
                <i class="far fa-arrow-alt-circle-left"></i> Önceki
              </button>
              <button
                :disabled="
                  $v.home.houseStayType.$invalid || $v.home.county.$invalid
                "
                @click.prevent="step4Go"
                class="btn btn-danger float-right"
              >
                Sonraki <i class="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div class="d-flex">
              <div class="card w-50 p-4">
                <h4>Yerin tamamı</h4>
                <div class="card-text">
                  Tüm mekan misafire aittir; özel giriş mevcuttur ve ortak alan
                  bulunmaz. Genellikle bir yatak odası, banyo ve mutfak da buna
                  dâhildir.
                </div>
              </div>

              <div class="card w-50 p-4">
                <h4>Müşterek oda</h4>
                <div class="card-text">
                  Misafirler diğerleriyle paylaşılabilecek bir yatak odasında ya
                  da bir ortak alanda uyurlar.
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="card w-50 p-4">
                <h4>Özel oda</h4>
                <div class="card-text">
                  Misafirlerin uyumak için kendi özel odaları vardır. Diğer
                  alanlar paylaşılabilir.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- New-Home-Step-3 Finish -->
    <!-- 4 -->
    <!-- New-Home-Step-4 Start -->
    <transition name="home">
      <div class="container mt-5" v-if="steps.step5">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-sm-12">
            <h1>Kaç misafir konaklayabilir?</h1>
            <span class="text-muted">4.ADIM</span>
            <div class="form-group my-3">
              <label for="homeNumber" class="label">Misafir sayısı</label>
              <input
                type="number"
                @blur="$v.home.peopleCounty.$touch()"
                v-model="home.peopleCounty"
                :class="{ 'is-invalid': $v.home.peopleCounty.$error }"
                class="form-control border border-dark w-50"
                placeholder="Misafir sayısını giriniz.."
                id="homeNumber"
              />
              <div
                v-if="$v.home.peopleCounty.$error"
                class="form-text text-danger"
              >
                Bu alan sayı olmalıdır...!!!
              </div>
              <label for="homeNumber" class="label my-3"
                >Misafirler kaç yatak kullanalabilir?</label
              >

              <input
                type="number"
                @blur="$v.home.bed.$touch()"
                v-model="home.bed"
                :class="{ 'is-invalid': $v.home.bed.$error }"
                class="form-control border border-dark w-50"
                placeholder="Misafirler kaç yatak kullanılabilir.."
                id="homeBed"
              />
              <div v-if="$v.home.bed.$error" class="form-text text-danger">
                Bu alan sayı olmalıdır...!!!
              </div>
              <label for="homeNumber" class="label mt-3"
                >Misafirler kaç banyo kullanalabilir?</label
              >
              <input
                type="number"
                @blur="$v.home.bathroom.$touch()"
                v-model="home.bathroom"
                :class="{ 'is-invalid': $v.home.bathroom.$error }"
                class="form-control border border-dark w-50"
                placeholder="Misafirler kaç banyo kullanılabilir.."
                id="homeNumber"
              />
              <div v-if="$v.home.bathroom.$error" class="form-text text-danger">
                Bu alan sayı olmalıdır...!!!
              </div>
            </div>
            <div class="buttons my-5">
              <button class="btn btn-danger" @click.prevent="step5Back">
                <i class="far fa-arrow-alt-circle-left"></i> Önceki
              </button>
              <button
                class="btn btn-danger float-right"
                :disabled="
                  $v.home.peopleCounty.$invalid ||
                  $v.home.bed.$invalid ||
                  $v.home.bathroom.$invalid
                "
                @click.prevent="step5Go"
              >
                Sonraki <i class="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-sm-12">
            <div class="d-flex">
              <div class="card w-50 p-4">
                <h4>
                  Misafir sayısı<i
                    class="far fa-lightbulb text-center text-danger ml-2"
                    style="font-size: 20px"
                  ></i>
                </h4>
                <div class="card-text">
                  Bulunduğunuz yerdeki yatakların, ağırlamayı seçtiğiniz misafir
                  sayısını rahatça karşılayabileceğinden emin olun.
                </div>
              </div>

              <div class="card w-50 p-4">
                <h4>
                  Banyo sayısı<i
                    class="far fa-lightbulb text-center text-danger ml-2"
                    style="font-size: 20px"
                  ></i>
                </h4>
                <div class="card-text">
                  Duşu veya küveti olmayan banyoları tuvalet olarak sayın.
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="card w-50 p-4">
                <h4>
                  Uyku düzeni<i
                    class="far fa-lightbulb text-center text-danger ml-2"
                    style="font-size: 20px"
                  ></i>
                </h4>
                <div class="card-text">
                  Her odada bulunan yatak sayısını paylaşmak insanların uyku
                  düzenlemesini anlamasına yardımcı olabilir.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- New-Home-Step-4 Finish -->
    <!-- 5 -->
    <!-- New-Home-Step-5 Start -->
    <transition name="home">
      <div class="container mt-4" v-if="steps.step6">
        <div class="row">
          <div class="col-lg-6 col-ms-6 col-sm-12 col-xs-12">
            <h3>Misafirler hangi alanları kullanabilir?</h3>
            <small class="text-muted">5.ADIM</small>
            <h5 class="mb-2 text-center">Mekanlar</h5>
            <div class="checkbox c-checkbox">
              <div class="row">
                <div class="col-6">
                  <label>
                    <input type="checkbox" v-model="home.kitchen" />
                    <span class="fa fa-check"></span>
                    Mutfak
                  </label>
                </div>
                <div class="col-6">
                  <label>
                    <input type="checkbox" v-model="home.carPark" />
                    <span class="fa fa-check"></span>
                    Binada ücretsiz otopark
                  </label>
                </div>
                <div class="col-6 my-4">
                  <label>
                    <input type="checkbox" v-model="home.washingMachine" />
                    <span class="fa fa-check"></span>
                    Çamaşır Makinesi
                  </label>
                </div>
                <div class="col-6 my-4">
                  <label>
                    <input type="checkbox" v-model="home.cabinet" />
                    <span class="fa fa-check"></span>
                    Dolap / Çekmeceler
                  </label>
                </div>
                <div class="col-6">
                  <label>
                    <input type="checkbox" v-model="home.notFreeCarPark" />
                    <span class="fa fa-check"></span>
                    Bina dışında ücretli otopark
                  </label>
                </div>
                <div class="col-6">
                  <label>
                    <input type="checkbox" v-model="home.pool" />
                    <span class="fa fa-check"></span>
                    Havuz
                  </label>
                </div>
              </div>
            </div>
            <h5 class="my-3 text-center">Olanaklar</h5>
            <div class="checkbox c-checkbox">
              <div class="row">
                <div class="col-6">
                  <label>
                    <input type="checkbox" v-model="home.basicMaterials" />
                    <span class="fa fa-check"></span>
                    Temel malzemeler
                  </label>
                </div>
                <div class="col-6">
                  <label>
                    <input type="checkbox" v-model="home.wifi" />
                    <span class="fa fa-check"></span>
                    Wifi
                  </label>
                </div>
                <div class="col-6 my-4">
                  <label>
                    <input type="checkbox" v-model="home.Iron" />
                    <span class="fa fa-check"></span>
                    Ütü
                  </label>
                </div>
                <div class="col-6 my-4">
                  <label>
                    <input type="checkbox" v-model="home.tv" />
                    <span class="fa fa-check"></span>
                    TV
                  </label>
                </div>
                <div class="col-6">
                  <label>
                    <input type="checkbox" v-model="home.table" />
                    <span class="fa fa-check"></span>
                    Masa / Çalışma Ortamı
                  </label>
                </div>
                <div class="col-6">
                  <label>
                    <input type="checkbox" v-model="home.airConditioning" />
                    <span class="fa fa-check"></span>
                    Klima
                  </label>
                </div>
              </div>
            </div>
            <div class="buttons mt-5">
              <button class="btn btn-danger" @click.prevent="step6Back">
                <i class="far fa-arrow-alt-circle-left"></i> Önceki
              </button>
              <button
                class="btn btn-danger float-right"
                @click.prevent="step6Go"
              >
                Sonraki <i class="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-sm-12 mt-4">
            <div class="d-flex d-sm-inherit">
              <div class="card w-50 w-xs-100 p-4">
                <h4>
                  Temel malzemeleri ekleyin<i
                    class="far fa-lightbulb text-center text-danger ml-2"
                    style="font-size: 20px"
                  ></i>
                </h4>
                <div class="card-text">
                  Havlular, nevresimler, sabun, tuvalet kağıdı, yastık, şampuan
                  , saç kurutma makinesi gibi temel ihtiyaçlar.
                </div>
              </div>

              <div class="card w-50 w-xs-100 p-4">
                <h4>
                  Wifi ekleyin<i
                    class="far fa-lightbulb text-center text-danger ml-2"
                    style="font-size: 20px"
                  ></i>
                </h4>
                <div class="card-text">
                  %56 oranında daha fazla misafir, seyahatte internete bağlanmak
                  istiyor. Yerinizde güvenilir bir wifi varsa belirtin;
                  rezervasyon almanıza yardımcı olacaktır.
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="card w-50 w-xs-100 p-4">
                <h5>
                  Masa ve çalışma alanı ekleyin<i
                    class="far fa-lightbulb text-center text-danger ml-2"
                    style="font-size: 20px"
                  ></i>
                </h5>
                <div class="card-text">
                  %47 oranında daha fazla misafir, dizüstü bilgisayara uygun,
                  rahat bir sandalyenin bulunduğu bir ortam arıyor.Yerinizde bu
                  ortamı sunuyorsanız belirtin.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- New-Home-Step-5 Finish -->
    <!-- 6 -->
    <!-- New-Home-Step-6 Start -->
    <transition name="home">
      <div class="container mt-5" v-if="steps.step7">
        <div class="row">
          <div class="col-lg-6 col-ms-6 col-sm-12 col-xs-12">
            <h1>Yerinizi misafirlerinize anlatın</h1>
            <span class="text-muted">6.ADIM</span>
            <div class="form-group mt-1">
                <input
                  type="text"
                  class="form-control w-75 border border-dark"
                         :class="{ 'is-invalid': $v.home.title.$error }"
                  name="titleHome"
                  id="titleHome"
                  @blur="$v.home.title.$touch()"
                  v-model="home.title"
                  placeholder="Eşsiz Manzaralı , Keyifli Çatı Katı - Roof suite"
                />
                 <div
                  v-if="$v.home.title.$error"
                  class="form-text text-danger"
                  
                >
                  Bu alan zorunludur. Ve en az 2 , en fazla 48 karkaterden
                  oluşmalıdır...!!!
                </div>
              <label class="label my-3" for="promotoion">Açıklama</label>
              <textarea
                class="form-control w-75 border border-dark"
                name="promotoion"
                id="İnputPromotoion1"
                @blur="$v.home.promotion.$touch()"
                v-model="home.promotion"
                :class="{ 'is-invalid': $v.home.promotion.$error }"
                cols="10"
                rows="5"
                placeholder="Yerinizi misafirlerinize anlatın..."
              ></textarea>
              <div
                v-if="$v.home.promotion.$error"
                class="form-text text-danger"
              >
                Bu alan zorunludur. Ve en fazla 350 karkaterden
                oluşmalıdır...!!!
              </div>
            </div>
            <div class="buttons mt-5">
              <button class="btn btn-danger" @click.prevent="step7Back">
                <i class="far fa-arrow-alt-circle-left"></i> Önceki
              </button>
              <button
                :disabled="$v.home.promotion.$invalid"
                class="btn btn-danger float-right"
                @click.prevent="step7Go"
              >
                Sonraki <i class="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-sm-12 mt-4">
            <div class="card w-75 w-xs-100 p-5">
              <h5>
                Bedfied'daki en yüksek puanlı kayıtlardan ilham alın.<i
                  class="far fa-lightbulb text-center text-danger ml-2"
                  style="font-size: 20px"
                ></i>
              </h5>
              <hr />
              <div class="row">
                <div class="col-2">
                  <img
                    width="50"
                    class="rounded"
                    height="50"
                    src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="card-img"
                  />
                </div>
                <div class="col-10 mb-4">
                  <h6 class="ml-2">
                    Kadıköy, İstanbul
                    <span class="ml-2"
                      >4,17 <i class="fas fa-star text-danger"></i
                    ></span>
                  </h6>
                  <span class="ml-2">Tüm Daire 2 yatak odası </span>
                </div>
              </div>
              <div class="card-text">
                "Kadıköyün tarihi yeldeğirmeni sokaklarında cafeler, sanat,
                müzik ve huzurun buluştuğu yerde sizleri ağırlamak bize keyif
                verecektir".
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- New-Home-Step-6 Finish -->
    <!-- 7 -->
    <!-- New-Home-Step-7 Start -->
    <transition name="home">
      <div class="container mt-4" v-if="steps.step8">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-sm-12">
            <h1 class="mb-3">Misafirler için ev kurallarını düzenleyin</h1>
            <span class="text-muted">7.ADIM</span>
            <div class="row">
              <div class="col-md-12 d-flex my-2">
                <label class="h5" for="baby" style="cursor: pointer"
                  >Çocuklar için uygun (2-12 yaş arası)</label
                >
                <div class="checkbox c-checkbox d-block ml-auto w-25">
                  <label>
                    <input id="baby" type="checkbox" v-model="home.childRule" />
                    <span class="fa fa-check"></span>
                  </label>
                </div>
              </div>
              <div class="col-md-12 d-flex my-2">
                <label class="h5" for="baby2" style="cursor: pointer"
                  >Bebekler için uygun (2 yaş ve altı)</label
                >
                <div class="checkbox c-checkbox d-block ml-auto w-25">
                  <label>
                    <input id="baby2" type="checkbox" v-model="home.babyRule" />
                    <span class="fa fa-check"></span>
                  </label>
                </div>
              </div>
              <div class="col-md-12 d-flex my-2">
                <label class="h5" for="baby3" style="cursor: pointer"
                  >Sigara içilebilir</label
                >
                <div class="checkbox c-checkbox d-block ml-auto w-25">
                  <label>
                    <input
                      id="baby3"
                      type="checkbox"
                      v-model="home.smogeRule"
                    />
                    <span class="fa fa-check"></span>
                  </label>
                </div>
              </div>
              <div class="col-md-12 d-flex my-2">
                <label class="h5" for="baby4" style="cursor: pointer"
                  >Evcil hayvanlar için uygun</label
                >
                <div class="checkbox c-checkbox d-block ml-auto w-25">
                  <label>
                    <input
                      id="baby4"
                      type="checkbox"
                      v-model="home.animalRule"
                    />
                    <span class="fa fa-check"></span>
                  </label>
                </div>
              </div>
              <div class="col-md-12 d-flex my-2">
                <label class="h5" for="baby5" style="cursor: pointer"
                  >Etkinliklere , eğlencelere izin veriliyor</label
                >
                <div class="checkbox c-checkbox d-block ml-auto w-25">
                  <label>
                    <input
                      id="baby5"
                      type="checkbox"
                      v-model="home.funnyRule"
                    />
                    <span class="fa fa-check"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="buttons mt-5">
              <button class="btn btn-danger" @click.prevent="step8Back">
                <i class="far fa-arrow-alt-circle-left"></i> Önceki
              </button>
              <button
                class="btn btn-danger float-right"
                @click.prevent="step8Go"
              >
                Sonraki <i class="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
          <div
            class="
              col-lg-6 col-md-6 col-sm-12 col-sm-12
              my-4
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <div class="card w-75 w-xs-100 p-5 border border-danger">
              <h5>
                Ev kuralları<i
                  class="far fa-lightbulb text-center text-danger ml-2"
                  style="font-size: 20px"
                ></i>
              </h5>
              <hr />
              <div class="card-text">
                Misafirler rezervasyon yapmadan önce ev kurallarını kabul
                etmelidir. Onaylamadığınız kuralları kabul edilmiyor olarak
                görünecektir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 8 -->
    <!-- New-Home-Step-8 Start -->
    <transition name="home">
      <div class="container mt-4" v-if="steps.step9">
        <div class="row">
          <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <h4 class="text-center" style="margin-top: 15%">
              15 fotoğraf ve 1 video yükleyebilirsiniz.
              <br />
              <small class="text-muted text-center">8.ADIM</small>
            </h4>

            <div id="FileUpload">
              <div class="wrapper border">
                <div class="row p-3 mb-3 text-center">
                  <div class="col-md-6 mb-3">
                    <input
                      ref="file"
                      type="file"
                      @change="processFile($event)"
                      value=""
                      style="display: none"
                    />
                    <button
                      class="btn btn-danger btn-md mt-1"
                      @click.prevent="$refs.file.click()"
                    >
                      <i class="fas fa-cloud"></i> Resim Seç
                    </button>
                  </div>
                  <div class="col-md-6">
                    <input
                      ref="file2"
                      type="file"
                      @change="processFile2($event)"
                      value=""
                      style="display: none"
                    />
                    <button
                      class="btn btn-dark btn-md mt-1"
                      @click.prevent="$refs.file2.click()"
                    >
                      <i class="fas fa-video"></i> Video yükle
                    </button>
                  </div>
                </div>

                <div
                  class="uploaded uploaded--one ml-3"
                  v-for="(file, idx) in fileData"
                  :key="idx"
                >
                  <img
                    :src="file.url"
                    width="60"
                    height="60"
                    class="mr-2"
                    alt="img"
                    style="object-fit: cover; border-radius: 5px"
                  />
                  <div class="row w-75">
                    <div class="col-md-11">
                      <div class="progress mt-2">
                        <div
                          class="
                            progress-bar
                            bg-danger
                            progress-bar-striped progress-bar-animated
                          "
                          :style="'width:' + file.progress + '%'"
                        >
                          {{ Math.floor(file.progress) }}%
                        </div>
                      </div>
                    </div>
                    <div class="col-md-0 ml-2">
                      <div
                        class="text-danger"
                        style="cursor: pointer; font-size: 20px"
                        @click.prevent="deleteFile(file)"
                      >
                        X
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="uploaded uploaded--one ml-3"
                  v-for="file in file2Data"
                  :key="file.videoId"
                >
                  <video
                    width="50"
                    height="50"
                    class="mr-2"
                    alt="Video yükleniyor.."
                    style="object-fit: cover; border-radius: 5px"
                  >
                    <source :src="file.videoUrl" type="video/mp4" />
                  </video>
                  <div class="row w-75">
                    <div class="col-md-11">
                      <div class="progress mt-2">
                        <div
                          class="
                            progress-bar
                            bg-dark
                            progress-bar-striped progress-bar-animated
                          "
                          :style="'width:' + progress2 + '%'"
                        >
                          {{ Math.floor(progress2) }}%
                        </div>
                      </div>
                    </div>
                    <div class="col-md-0 ml-2">
                      <div
                        class="text-danger"
                        style="cursor: pointer; font-size: 20px"
                        @click.prevent="deleteFile2(file)"
                      >
                        X
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="buttons mt-5">
              <button class="btn btn-danger" @click.prevent="step9Back">
                <i class="far fa-arrow-alt-circle-left"></i> Önceki
              </button>
              <button
                class="btn btn-danger float-right"
                @click.prevent="step9Go"
              >
                Sonraki <i class="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>

          <div
            class="
              col-lg-5 col-md-5 col-sm-12 col-xs-12
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <div
              class="card w-100 w-xs-100 p-5 mt-3"
              style="border-radius: 20px"
            >
              <i
                class="far fa-lightbulb text-center text-danger mb-2"
                style="font-size: 30px"
              ></i>
              <h5>Kaliteli fotoğraflar için ipuçları</h5>
              <hr />
              <div class="card-text">
                1) Mekandaki dağınıklığı toplayın <br />
                2) Doğal gün ışığı kullanın ve flaş kullanmaktan kaçının
                <br />
                3) Yatay modda oda köşelerinden çekim yapın <br />
                4) Zeminin ve tavanın görünür alanları arasında denge kurun
                <br />
                5) Özel dekorasyon öğelerini ve olanakları vurgulayın <br />
                6) Misafirlerin kullanabileceği odaların fotoğraflarını ekleyin
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- New-Home-Step-8 Finish -->
    <!-- 9 -->
    <!-- New-Home-Step-9 Start -->
    <transition name="home"
      ><div class="container mt-4" v-if="steps.step10">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1>Gecelik ne kadar ücret almak istiyorsunuz?</h1>
            <span class="text-muted my-2">9.ADIM</span>
            <h6>
              Her ev sahibinin uyguladığı fiyata %8 misafir hizmet bedeli
              eklenir. Bazen bu oran seyahatin uzunluğuna bağlı olarak
              değişebilir.
            </h6>
            <div class="form-group mt-4">
              <label for="inputPrice1" class="label">Taban fiyat</label><br />
              <div class="input-group w-50">
                <input
                  @blur="$v.home.price.$touch()"
                  v-model="home.price"
                  :class="{ 'is-invalid': $v.home.price.$error }"
                  id="price1"
                  type="number"
                  class="form-control border border-dark"
                  placeholder="Fiyat"
                  aria-label="Price"
                  aria-describedby="basic-addon1"
                />

                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">₺</span>
                </div>
              </div>
              <div v-if="$v.home.price.$error" class="form-text text-danger">
                Bu alan zorunludur...!!!
              </div>
              <small>İpucu:116₺</small>
            </div>
            <div class="buttons mt-5">
              <button class="btn btn-danger" @click.prevent="step10Back">
                <i class="far fa-arrow-alt-circle-left"></i> Önceki
              </button>
              <button
                class="btn btn-danger float-right"
                :disabled="$v.home.price.$invalid"
                @click.prevent="onSubmit"
              >
                Güncelle <i class="far fa-check-circle"></i>
              </button>
            </div>
          </div>
          <div
            class="
              col-lg-6 col-md-6 col-sm-12 col-xs-12
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <div class="card w-75 w-xs-100 p-5 mt-3">
              <i
                class="far fa-lightbulb text-center text-danger mb-2"
                style="font-size: 30px"
              ></i>
              <h5>
                Rezervasyonları çekmek için daha düşük bir fiyatla başlayın
              </h5>
              <hr />
              <div class="card-text">
                Yeni ev sahipleri, ilk birkaç rezervasyonlarını çekmek için daha
                düşük bir fiyatla başlar. Fiyatlarını fiyat ipuçlarının %5
                içinde ayarlayan ev sahipleri 4 kat fazla olasılıkla rezervasyon
                alır.
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- New-Home-Step-9 Finish -->
  </div>
</template>

<script>
import axios from "axios";
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  sameAs,
  between,
} from "vuelidate/lib/validators";
import HostHeader from "@/components/host/hostHeader";
export default {
  middleware: ["session-control", "auth"],
  layout: "homes",
  components: {
    HostHeader,
  },

  data() {
    return {
      home: {
        adres: null,
        title:null,
        orderDate:null,
        houseType: "Birini seçin",
        houseStayType: "Birini seçin",
        peopleCounty: null,
        bathroom: null,
        notFreeCarPark: null,
        tv: null,
        kitchen: null,
        washingMachine: null,
        carPark: null,
        pool: null,
        table: null,
        cabinet: null,
        airConditioning: null,
        Iron: null,
        basicMaterials: null,
        wifi: null,
        price: null,
        bed: null,
        promotion: null,
        county: null,
        babyRule: null,
        childRule: null,
        smogeRule: null,
        animalRule: null,
        funnyRule: null,
        position: {
          lng: 0,
          lat: 0,
        },
        photos: [],
        videos: {
          video: null,
          videoId: null,
        },
      },
      fileData: [],
      file2Data: [],
      photosWaitData: [],
      progress2: null,
      steps: {
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
        step7: false,
        step8: false,
        step9: false,
        step10: false,
      },
      stepsWidth: 10,
      popUp: false,
      userProfileDatas: [],
    };
  },
  validations: {
    home: {
      adres: {
        required,
      },
       title: {
        required,
        maxLength: maxLength(48),
        minLength: minLength(2),
      },
      county: {
        required,
      },
      houseType: {
        required,
      },
      houseStayType: {
        required,
      },
      peopleCounty: {
        required,
        numeric,
      },
      bathroom: {
        required,
        numeric,
      },
      price: {
        required,
        numeric,
      },
      promotion: {
        required,
        maxLength: maxLength(350),
      },
      bed: {
        required,
        numeric,
      },
      photos: {
        photo1: {
          required,
        },
      },
    },
  },

  methods: {
    first3Look() {
      this.stepsWidth = 30;
      this.steps.step1 = false;
      this.steps.step3 = true;
    },
    first4Look() {
      this.stepsWidth = 40;
      this.steps.step1 = false;
      this.steps.step4 = true;
    },
    first5Look() {
      this.stepsWidth = 50;
      this.steps.step1 = false;
      this.steps.step5 = true;
    },
    first6Look() {
      this.stepsWidth = 60;
      this.steps.step1 = false;
      this.steps.step6 = true;
    },
    first7Look() {
      this.stepsWidth = 70;
      this.steps.step1 = false;
      this.steps.step7 = true;
    },
    first8Look() {
      this.stepsWidth = 80;
      this.steps.step1 = false;
      this.steps.step8 = true;
    },
    first9Look() {
      this.stepsWidth = 90;
      this.steps.step1 = false;
      this.steps.step9 = true;
    },
    first10Look() {
      this.stepsWidth = 100;
      this.steps.step1 = false;
      this.steps.step10 = true;
    },
    step1Go() {
      this.stepsWidth = 20;
      this.steps.step1 = false;
      this.steps.step2 = true;
    },
    step2Back() {
      this.stepsWidth = 10;
      this.steps.step2 = false;
      this.steps.step1 = true;
    },
    step2Go() {
      this.stepsWidth = 30;
      this.steps.step2 = false;
      this.steps.step3 = true;
    },
    step3Back() {
      this.stepsWidth = 20;
      this.steps.step3 = false;
      this.steps.step2 = true;
    },
    step3Go() {
      this.stepsWidth = 40;
      this.steps.step3 = false;
      this.steps.step4 = true;
    },
    step4Back() {
      this.stepsWidth = 30;
      this.steps.step4 = false;
      this.steps.step3 = true;
    },
    step4Go() {
      this.stepsWidth = 50;
      this.steps.step4 = false;
      this.steps.step5 = true;
    },
    step5Back() {
      this.stepsWidth = 40;
      this.steps.step5 = false;
      this.steps.step4 = true;
    },
    step5Go() {
      this.stepsWidth = 60;
      this.steps.step5 = false;
      this.steps.step6 = true;
    },
    step6Back() {
      this.stepsWidth = 50;
      this.steps.step6 = false;
      this.steps.step5 = true;
    },
    step6Go() {
      this.stepsWidth = 70;
      this.steps.step6 = false;
      this.steps.step7 = true;
    },
    step7Back() {
      this.stepsWidth = 60;
      this.steps.step7 = false;
      this.steps.step6 = true;
    },
    step7Go() {
      this.stepsWidth = 80;
      this.steps.step7 = false;
      this.steps.step8 = true;
    },
    step8Back() {
      this.stepsWidth = 70;
      this.steps.step8 = false;
      this.steps.step7 = true;
    },
    step8Go() {
      this.stepsWidth = 90;
      this.steps.step8 = false;
      this.steps.step9 = true;
    },
    step9Back() {
      this.stepsWidth = 80;
      this.steps.step9 = false;
      this.steps.step8 = true;
    },
    step9Go() {
      this.stepsWidth = 100;
      this.steps.step9 = false;
      this.steps.step10 = true;
      if (this.photosWaitData.length != 0) {
        this.home.photos = this.photosWaitData;
      }
    },
    step10Back() {
      this.stepsWidth = 90;
      this.steps.step10 = false;
      this.steps.step9 = true;
    },
    step10GoEnd() {
      this.$router.push("/homeHost/_haveHome");
    },
    getAdress() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          axios
            .get(
              "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
                position.coords.latitude +
                "," +
                position.coords.longitude +
                "&key=AIzaSyA7htgCBMDGzsSEb6R7KmtfG1oerNDZxhQ"
            )
            .then((res) => {
              this.home.adres = res.data.results[0].formatted_address;
            });
        });
      } else {
        alert("Tarayıcınız konum özelliğini desteklememektedir..!!!");
      }
    },
    processFile(event) {
      let photo1Id = Math.random(Math.round()) * 10000000000;
      let file = event.target.files[0];
      let filesData = {
        url: null,
        photo1: photo1Id,
        files: file,
        progress: null,
      };
      if (file) {
        if (file.type.startsWith("image/")) {
          filesData.url = URL.createObjectURL(file);
          var storageRef = this.$fire.storage
            .ref("photos/")
            .child("photos1/" + photo1Id)
            .put(file);
          storageRef.on(
            "state_changed",
            (snapshot) => {
              filesData.progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
              console.log(error);
            },
            () => {
              this.$fire.storage
                .ref("photos/")
                .child("photos1/" + photo1Id)
                .getDownloadURL()
                .then((url) => {
                  this.photosWaitData.push({
                    photo: url,
                    photoId: photo1Id,
                  });
                });
            }
          );
          this.fileData.push(filesData);
        } else {
          alert("Lütfen fotoğraf yükleyiniz!!");
        }
      }
    },
    processFile2(event) {
      let videoIds = Math.random(Math.round()) * 1000000000;
      let file = event.target.files[0];
      let filesData = [
        {
          videoUrl: null,
          videoId: videoIds,
          files: file,
        },
      ];
      if (file) {
        if (file.type.startsWith("video/")) {
          filesData[0].videoUrl = URL.createObjectURL(file);
          var storageRef = this.$fire.storage
            .ref("videos/")
            .child("video1/" + videoIds)
            .put(file);
          storageRef.on(
            "state_changed",
            (snapshot) => {
              this.progress2 =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
              console.log(error);
            },
            () => {
              this.$fire.storage
                .ref("videos/")
                .child("video1/" + videoIds)
                .getDownloadURL()
                .then((url) => {
                  this.home.videos.video = url;
                  this.home.videos.videoId = videoIds;
                });
            }
          );
          this.file2Data = filesData;
        } else {
          alert("Lütfen video yükleyiniz!!");
        }
      }
    },
    deleteFile(fileData) {
      this.$fire.storage
        .ref("photos/")
        .child("photos1/" + fileData.photo1)
        .put(fileData.files)
        .cancel();
      for (var i = 0; i < this.fileData.length; i++) {
        if (
          this.fileData[i] ===
          this.fileData.find((s) => s.photo1 == fileData.photo1)
        ) {
          //çıkarılacak değer
          this.fileData.splice(i, 1);
        }
      }
      for (var i = 0; i < this.home.photos.length; i++) {
        if (
          this.home.photos[i] ===
          this.home.photos.find((s) => s.photoId == fileData.photo1)
        ) {
          //çıkarılacak değer
          this.home.photos.splice(i, 1);
        }
      }
    },
    deleteFile2() {
      (this.home.videos = null),
        (this.file2Data = null),
        (this.progress2 = null);
    },
    onSubmit() {
      this.$store
        .dispatch("ubdateHome", {
          ...this.home,
          firebaseId: this.$route.params.ubdateId,
        })
        .then((res) => {
          this.steps.step10 = false;
          this.steps.step1 = true;
          this.popUp = true;
          // setTimeout(() => {
          //   this.popUp = false;
          // }, 4000);
        });

      // Sayfayı resetleyen fonksiyon window.location.reload();
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

  computed: {
    getHomeData() {
      return this.$store.getters.getHomesData.filter(
        (c) => c.authId == this.$store.state.authKey
      );
    },
  },
  created() {
    this.home = this.getHomeData.find(
      (c) => c.firebaseId == this.$route.params.ubdateId
    );
    this.getUserDATA();
     let date = new Date();
    let time = date.getTime();
    this.home.orderDate = time
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.fm {
  font-family: "Titillium Web", sans-serif !important;
}
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
  background-attachment: fixed;
  background-size: cover;
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
@media (max-width: 762px) {
  .img-phone-screen {
    display: none;
  }
  .w-xs-100 {
    width: 100% !important;
  }
  .pop-up-info {
    width: 350px;
    height: 180px;
    position: fixed;
    bottom: 15px;
    right: 15px;
  }
  .d-sm-inherit {
    display: inherit !important;
    margin-top: 40px !important;
  }
}
</style>