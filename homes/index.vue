<template>
  <div>
    <!-- Konaklama Yerleri Header -->
    <HomesPageHeader :userProfilesData="userProfileData" />
    <!-- Konaklama Yerleri Header Bitiş -->
    <!-- Konaklama yerleri body -->
    <div class="container-fluid" id="scroll">
      <div class="show-map responsive-filter2">
        <button
          @click.prevent="showMobileMaps"
          class="btn btn-dark btn-sm"
          style="border-radius: 10px !important"
        >
          <i
            :class="
              !showMobileMap ? 'fas fa-location-arrow' : 'far fa-times-circle'
            "
          ></i>
          {{ !showMobileMap ? "Haritayı göster" : "Haritayı kapat" }}
        </button>
      </div>

      <div class="row w-125 h-100" v-if="!showMobileMap">
        <div class="col-lg-7 col-xl-7 col-md-7 mt-4">
          <div class="row p-3">
            <div class="col-md-12">
              <h6 class="font">500'den fazla konaklama</h6>
            </div>
            <div class="col-md-12">
              <h2 class="font-weight-bold font mb-4">
                Haritada seçilen bölgedeki konaklamalar
              </h2>
            </div>
            <div class="col col-md-3 responsive-filter">
              <button
                @click.prevent="getAllData"
                class="btn border border-dark font-weight-choose"
              >
                Yerin tamamı
                <i v-if="checkImage" class="fa fa-check-circle"></i>
              </button>
            </div>

            <div class="col col-md-3 responsive-filter">
              <button
                @click.prevent="houseStayTypeCard = !houseStayTypeCard"
                class="btn border border-dark font-weight-choose"
              >
                {{ houseStayTypeValue }}
                <i v-if="checkCircle" class="fa fa-check-circle"></i>
                <i v-if="checkCircle2" class="fa fa-check-circle"></i>
                <i v-if="checkCircle3" class="fa fa-check-circle"></i>
                <i v-if="checkCircle4" class="fa fa-check-circle"></i>
                <i v-if="checkCircle5" class="fa fa-check-circle"></i>
                <i v-if="checkCircle6" class="fa fa-check-circle"></i>
                <i
                  :class="
                    houseStayTypeCard
                      ? 'fa fa-chevron-down '
                      : 'fa fa-chevron-right '
                  "
                  style="font-size: 14px"
                ></i>
              </button>
              <div
                class="card cards"
                v-if="houseStayTypeCard"
                style="z-index: 4"
              >
                <div class="row">
                  <div
                    class="col-md-9"
                    @click.prevent="houseStayTypeHome"
                    @mouseover="checkCircle = true"
                    @mouseout="checkCircle = false"
                    style="cursor: pointer"
                  >
                    Ev <i v-if="checkCircle" class="fa fa-check-circle"></i>
                  </div>
                  <div
                    @click.prevent="houseStayTypeCard = !houseStayTypeCard"
                    class="col-md-1 hovers"
                  >
                    X
                  </div>
                  <div
                    class="col-md-11"
                    @click.prevent="houseStayTypeHome2"
                    @mouseover="checkCircle2 = true"
                    @mouseout="checkCircle2 = false"
                    style="cursor: pointer"
                  >
                    Apartman dairesi
                    <i v-if="checkCircle2" class="fa fa-check-circle"></i>
                  </div>
                  <div
                    class="col-md-12"
                    @click.prevent="houseStayTypeHome3"
                    @mouseover="checkCircle3 = true"
                    @mouseout="checkCircle3 = false"
                    style="cursor: pointer"
                  >
                    İkincil birim
                    <i v-if="checkCircle3" class="fa fa-check-circle"></i>
                  </div>
                  <div
                    class="col-md-12"
                    @click.prevent="houseStayTypeHome4"
                    @mouseover="checkCircle4 = true"
                    @mouseout="checkCircle4 = false"
                    style="cursor: pointer"
                  >
                    Benzersiz yer
                    <i v-if="checkCircle4" class="fa fa-check-circle"></i>
                  </div>
                  <div
                    class="col-md-12"
                    @click.prevent="houseStayTypeHome5"
                    @mouseover="checkCircle5 = true"
                    @mouseout="checkCircle5 = false"
                    style="cursor: pointer"
                  >
                    Oda kahvaltı
                    <i v-if="checkCircle5" class="fa fa-check-circle"></i>
                  </div>
                  <div
                    class="col-md-12"
                    @click.prevent="houseStayTypeHome6"
                    @mouseover="checkCircle6 = true"
                    @mouseout="checkCircle6 = false"
                    style="cursor: pointer"
                  >
                    Butik otel
                    <i v-if="checkCircle6" class="fa fa-check-circle"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col-md-3 responsive-filter">
              <button
                @click.prevent="peopleCounty = !peopleCounty"
                class="btn border border-dark font-weight-choose"
              >
                Misafir sayısı
                <i
                  :class="
                    peopleCounty
                      ? 'fa fa-chevron-down ml-1'
                      : 'fa fa-chevron-right ml-1'
                  "
                  style="font-size: 14px"
                ></i>
              </button>
              <div class="card cards2" v-if="peopleCounty" style="z-index: 4">
                <div class="row">
                  <div class="col-md-5" style="cursor: pointer">
                    Yetişkinler
                  </div>
                  <div
                    class="col-md-0 ml-2"
                    v-if="guestCounty > 1"
                    @click.prevent="guestOldBoyMinus"
                  >
                    <i
                      class="fa fa-minus-circle mt-1"
                      style="color: #f93b3b; font-size: 22px; cursor: pointer"
                    ></i>
                  </div>
                  <div
                    class="col-md-0 ml-3"
                    style="margin-top: 3px; margin-right: 10px"
                  >
                    <div>{{ guestCounty }}</div>
                  </div>
                  <div class="col-md-0" @click.prevent="guestOldBoyPlus">
                    <i
                      class="fa fa-plus-circle mt-1"
                      style="color: #f93b3b; font-size: 22px; cursor: pointer"
                    ></i>
                  </div>
                  <div
                    @click.prevent="peopleCounty = !peopleCounty"
                    class="col-md-1 hovers"
                  >
                    X
                  </div>
                  <div class="col-md-5 my-2" style="cursor: pointer">
                    Çocuklar <br />
                    (<small>2-12 arası</small>)
                  </div>
                  <div
                    class="col-md-0 mt-3"
                    v-if="guestChildCounty > 0"
                    @click.prevent="guestMiddleBoyMinus"
                  >
                    <i
                      class="fa fa-minus-circle mt-1"
                      style="
                        color: #f93b3b;
                        font-size: 22px;
                        cursor: pointer;
                        margin-left: 8.5px;
                      "
                    ></i>
                  </div>
                  <div class="col-md-0 ml-3 mt-3">
                    <div>{{ guestChildCounty }}</div>
                  </div>
                  <div
                    class="col-md-0 mt-3"
                    @click.prevent="guestMiddleBoyPlus"
                  >
                    <i
                      class="fa fa-plus-circle mt-1"
                      style="
                        color: #f93b3b;
                        font-size: 22px;
                        margin-left: 9px;
                        cursor: pointer;
                      "
                    ></i>
                  </div>
                  <div class="col-md-5" style="cursor: pointer">
                    Bebekler <br />
                    (<small>2 yaş altı</small>)
                  </div>
                  <div
                    class="col-md-0 mt-3"
                    v-if="guestBabyCounty > 0"
                    @click.prevent="guestSmallBoyMinus"
                  >
                    <i
                      class="fa fa-minus-circle mt-1"
                      style="
                        color: #f93b3b;
                        font-size: 22px;
                        cursor: pointer;
                        margin-left: 8.5px;
                      "
                    ></i>
                  </div>
                  <div class="col-md-0 ml-3 mt-3">
                    <div>{{ guestBabyCounty }}</div>
                  </div>
                  <div class="col-md-0 mt-3" @click.prevent="guestSmallBoyPlus">
                    <i
                      class="fa fa-plus-circle mt-1"
                      style="
                        color: #f93b3b;
                        font-size: 22px;
                        margin-left: 9px;
                        cursor: pointer;
                      "
                    ></i>
                  </div>
                  <div
                    class="col-md-12 text-center mt-3"
                    style="cursor: pointer"
                  >
                    <button
                      @click.prevent="saveGuestCounty"
                      class="btn btn-sm text-white"
                      style="
                        background: #f93b3b;
                        border-radius: 12px !important;
                      "
                    >
                      Uygula
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col-md-3 responsive-filter">
              <button
                @click.prevent="choosePrice = !choosePrice"
                class="btn border border-dark font-weight-choose"
              >
                Fiyat aralığı
                <i
                  :class="
                    choosePrice
                      ? 'fa fa-chevron-down ml-1'
                      : 'fa fa-chevron-right ml-1'
                  "
                  style="font-size: 14px"
                ></i>
              </button>
              <div class="card cards2" v-if="choosePrice" style="z-index: 4">
                <div class="row">
                  <div class="col-md-5 mt-1 mb-3">Başlangıç</div>
                  <div class="col-md-5 mb-3">
                    <input
                      type="text"
                      v-model="goChoosePrice"
                      class="form-control text-dark"
                      style="border-radius: 15px !important"
                      placeholder="86"
                    />
                  </div>
                  <div class="span mt-2" style="margin-left: -10px">₺</div>
                  <div class="col-md-5">Bitiş</div>
                  <div class="col-md-5">
                    <input
                      type="text"
                      v-model="endChoosePrice"
                      class="form-control text-dark"
                      style="border-radius: 15px !important"
                      placeholder="696"
                    />
                  </div>
                  <div class="span mt-2" style="margin-left: -10px">₺</div>

                  <div
                    @click.prevent="choosePrice = !choosePrice"
                    class="col-md-1 hovers"
                  >
                    X
                  </div>
                  <div
                    class="col-md-12 text-center mt-3"
                    style="cursor: pointer"
                  >
                    <button
                      @click.prevent="saveChoosePrice"
                      class="btn btn-sm text-white"
                      style="
                        background: #f93b3b;
                        border-radius: 12px !important;
                      "
                    >
                      Uygula
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 mb-3 responsive-filter2">
              <button
                @click.prevent="getAllData"
                class="btn border border-dark font-weight-choose"
              >
                Yerin tamamı

                <i v-if="checkImage" class="fa fa-check-circle"></i>
              </button>
            </div>
            <div class="col-6 mb-3 responsive-filter2">
              <button
                @click.prevent="houseStayTypeCard = !houseStayTypeCard"
                class="btn border border-dark font-weight-choose"
              >
                {{ houseStayTypeValue }}
                <i v-if="checkCircle" class="fa fa-check-circle"></i>
                <i v-if="checkCircle2" class="fa fa-check-circle"></i>
                <i v-if="checkCircle3" class="fa fa-check-circle"></i>
                <i v-if="checkCircle4" class="fa fa-check-circle"></i>
                <i v-if="checkCircle5" class="fa fa-check-circle"></i>
                <i v-if="checkCircle6" class="fa fa-check-circle"></i>
                <i
                  :class="
                    houseStayTypeCard
                      ? 'fa fa-chevron-down '
                      : 'fa fa-chevron-right '
                  "
                  style="font-size: 14px"
                ></i>
              </button>
              <div
                class="card cards"
                v-if="houseStayTypeCard"
                style="z-index: 4"
              >
                <div class="row">
                  <div
                    class="col-md-9"
                    @click.prevent="houseStayTypeHome"
                    @mouseover="checkCircle = true"
                    @mouseout="checkCircle = false"
                    style="cursor: pointer"
                  >
                    Ev <i v-if="checkCircle" class="fa fa-check-circle"></i>
                    <!-- <small>
                            (Genellikle müstakil yapılardır. Ancak dubleks evler
                            gibi bazı örneklerinin bir başka yapıyla ortak
                            duvarı veya avlu ya da bahçesi olabilir.)</small
                          > -->
                  </div>
                  <div
                    @click.prevent="houseStayTypeCard = !houseStayTypeCard"
                    class="col-3 hovers"
                  >
                    X
                  </div>
                  <div
                    class="col-md-11"
                    @click.prevent="houseStayTypeHome2"
                    @mouseover="checkCircle2 = true"
                    @mouseout="checkCircle2 = false"
                    style="cursor: pointer"
                  >
                    Apartman dairesi
                    <i v-if="checkCircle2" class="fa fa-check-circle"></i>
                    <!-- <small
                            >(Genellikle birden fazla hanenin bulunduğu konut
                            birimleri veya rezidanslarda yer alırlar.)</small
                          > -->
                  </div>
                  <div
                    class="col-md-12"
                    @click.prevent="houseStayTypeHome3"
                    @mouseover="checkCircle3 = true"
                    @mouseout="checkCircle3 = false"
                    style="cursor: pointer"
                  >
                    İkincil birim
                    <i v-if="checkCircle3" class="fa fa-check-circle"></i>
                    <!-- <small
                            >(Misafirlere ait ayrı girişi bulunur ve mülkiyeti
                            genelikle başka mekânla ortaktır.)</small
                          > -->
                  </div>
                  <div
                    class="col-md-12"
                    @click.prevent="houseStayTypeHome4"
                    @mouseover="checkCircle4 = true"
                    @mouseout="checkCircle4 = false"
                    style="cursor: pointer"
                  >
                    Benzersiz yer
                    <i v-if="checkCircle4" class="fa fa-check-circle"></i>
                    <!-- <small
                            >(Geleneksel ev ve dairelerde görülmeyen ilginç veya
                            sıra dışı yapısal özelliklere sahip konaklama
                            yerleri.)</small
                          > -->
                  </div>
                  <div
                    class="col-md-12"
                    @click.prevent="houseStayTypeHome5"
                    @mouseover="checkCircle5 = true"
                    @mouseout="checkCircle5 = false"
                    style="cursor: pointer"
                  >
                    Oda kahvaltı
                    <i v-if="checkCircle5" class="fa fa-check-circle"></i>
                    <!-- <small
                            >(Misafirlere kahvaltı sunan profesyonel konaklama
                            işletmeleri. Ev sahibi de genellikle aynı mekânda
                            yaşar.)</small
                          > -->
                  </div>
                  <div
                    class="col-md-12"
                    @click.prevent="houseStayTypeHome6"
                    @mouseover="checkCircle6 = true"
                    @mouseout="checkCircle6 = false"
                    style="cursor: pointer"
                  >
                    Butik otel
                    <i v-if="checkCircle6" class="fa fa-check-circle"></i>
                    <!-- <small
                            >(Markası veya dekoruyla genellikle kendine özgü bir
                            tarz ya da temaya göre tanımlanmış profesyonel
                            konaklama işletmeleri.)</small
                          > -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 responsive-filter2">
              <button
                @click.prevent="peopleCounty = !peopleCounty"
                class="btn border border-dark font-weight-choose"
              >
                Misafir sayısı
                <i
                  :class="
                    peopleCounty
                      ? 'fa fa-chevron-down ml-1'
                      : 'fa fa-chevron-right ml-1'
                  "
                  style="font-size: 14px"
                ></i>
              </button>
              <div class="card cards2" v-if="peopleCounty" style="z-index: 4">
                <div class="row">
                  <div class="col-6" style="cursor: pointer">Yetişkinler</div>
                  <div
                    class="col-md-0 ml-2"
                    v-if="guestCounty > 1"
                    @click.prevent="guestOldBoyMinus"
                  >
                    <i
                      class="fa fa-minus-circle mt-1"
                      style="color: #f93b3b; font-size: 22px; cursor: pointer"
                    ></i>
                  </div>
                  <div
                    class="col-md-0 ml-3"
                    style="margin-top: 3px; margin-right: 10px"
                  >
                    <div>{{ guestCounty }}</div>
                  </div>
                  <div class="col-md-0" @click.prevent="guestOldBoyPlus">
                    <i
                      class="fa fa-plus-circle mt-1"
                      style="color: #f93b3b; font-size: 22px; cursor: pointer"
                    ></i>
                  </div>
                  <div
                    @click.prevent="peopleCounty = !peopleCounty"
                    class="col-1 hovers"
                  >
                    X
                  </div>
                  <div class="col-6 my-2" style="cursor: pointer">
                    Çocuklar <br />
                    (<small>2-12 arası</small>)
                  </div>
                  <div
                    class="col-md-0 mt-3"
                    v-if="guestChildCounty > 0"
                    @click.prevent="guestMiddleBoyMinus"
                  >
                    <i
                      class="fa fa-minus-circle mt-1"
                      style="
                        color: #f93b3b;
                        font-size: 22px;
                        cursor: pointer;
                        margin-left: 8.5px;
                      "
                    ></i>
                  </div>
                  <div class="col-md-0 ml-3 mt-3">
                    <div>{{ guestChildCounty }}</div>
                  </div>
                  <div
                    class="col-md-0 mt-3"
                    @click.prevent="guestMiddleBoyPlus"
                  >
                    <i
                      class="fa fa-plus-circle mt-1"
                      style="
                        color: #f93b3b;
                        font-size: 22px;
                        margin-left: 9px;
                        cursor: pointer;
                      "
                    ></i>
                  </div>
                  <div class="col-6" style="cursor: pointer">
                    Bebekler <br />
                    (<small>2 yaş altı</small>)
                  </div>
                  <div
                    class="col-md-0 mt-3"
                    v-if="guestBabyCounty > 0"
                    @click.prevent="guestSmallBoyMinus"
                  >
                    <i
                      class="fa fa-minus-circle mt-1"
                      style="
                        color: #f93b3b;
                        font-size: 22px;
                        cursor: pointer;
                        margin-left: 8.5px;
                      "
                    ></i>
                  </div>
                  <div class="col-md-0 ml-3 mt-3">
                    <div>{{ guestBabyCounty }}</div>
                  </div>
                  <div class="col-md-0 mt-3" @click.prevent="guestSmallBoyPlus">
                    <i
                      class="fa fa-plus-circle mt-1"
                      style="
                        color: #f93b3b;
                        font-size: 22px;
                        margin-left: 9px;
                        cursor: pointer;
                      "
                    ></i>
                  </div>
                  <div
                    class="col-md-12 text-center mt-3"
                    style="cursor: pointer"
                  >
                    <button
                      @click.prevent="saveGuestCounty"
                      class="btn btn-sm text-white"
                      style="
                        background: #f93b3b;
                        border-radius: 12px !important;
                      "
                    >
                      Uygula
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 responsive-filter2">
              <button
                @click.prevent="choosePrice = !choosePrice"
                class="btn border border-dark font-weight-choose"
              >
                Fiyat aralığı
                <i
                  :class="
                    choosePrice
                      ? 'fa fa-chevron-down ml-1'
                      : 'fa fa-chevron-right ml-1'
                  "
                  style="font-size: 14px"
                ></i>
              </button>
              <div class="card cards3" v-if="choosePrice" style="z-index: 4">
                <div class="row">
                  <div class="col-md-5 mt-1 mb-3">Başlangıç</div>
                  <div class="col-md-5 mb-3">
                    <input
                      type="text"
                      v-model="goChoosePrice"
                      class="form-control text-dark"
                      style="border-radius: 15px !important"
                      placeholder="86"
                    />
                  </div>
                  <div class="span mt-2" style="margin-left: -40px; z-index: 3">
                    ₺
                  </div>
                  <div class="col-md-5">Bitiş</div>
                  <div class="col-md-5">
                    <input
                      type="text"
                      v-model="endChoosePrice"
                      class="form-control text-dark"
                      style="border-radius: 15px !important"
                      placeholder="696"
                    />
                  </div>
                  <div class="span mt-2" style="margin-left: -40px; z-index: 3">
                    ₺
                  </div>

                  <div
                    @click.prevent="choosePrice = !choosePrice"
                    class="col-1 hovers"
                  >
                    X
                  </div>
                  <div
                    class="col-md-12 text-center mt-3"
                    style="cursor: pointer"
                  >
                    <button
                      @click.prevent="saveChoosePrice"
                      class="btn btn-sm text-white"
                      style="
                        background: #f93b3b;
                        border-radius: 12px !important;
                      "
                    >
                      Uygula
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 mt-3 mb-3">
              <p>
                Rezervasyon yapmadan önce COVID-19 nedeniyle getirilen seyahat
                bilgilendirilmesini inceleyin.
              </p>
            </div>
            <div
              class="
                col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12
                mb-5
                responsive-filter
              "
              v-for="home in newAllData2"
              :key="home.index"
              style="cursor: pointer"
            >
              <div class="card border-0">
                <a
                  class="div card-absoluty w-100 text-dark"
                  :href="'/homes/' + home.firebaseId"
                  style="text-decoration: none"
                >
                  <span class="perfectHost" style="margin-left: -7px"
                    >Süper ev sahibi <i class="fa fa-check-circle"></i
                  ></span>
                  <div
                    class="d-flex justify-content-end"
                    style="margin-top: -23px"
                  >
                    <i class="far fa-heart" style="font-size: 23px"></i>
                  </div>
                </a>
                <div
                  :id="home.firebaseId"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="3"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="4"
                    ></li>
                  </ol>
                  <div class="carousel-inner">
                    <a :href="'/homes/' + home.firebaseId" class="div">
                      <div class="carousel-item active">
                        <img
                          v-if="home.photos"
                          class="card-img-top mb-2"
                          :src="
                            home.photos[0] == undefined
                              ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                              : home.photos[0].photo
                          "
                          width="200"
                          height="160"
                          alt=""
                        />

                        <img
                          v-else
                          class="card-img-top mb-2"
                          src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-if="home.photos"
                          class="card-img-top mb-2"
                          :src="
                            home.photos[1] == undefined
                              ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                              : home.photos[1].photo
                          "
                          width="200"
                          height="160"
                          alt=""
                        />
                        <img
                          v-else
                          class="card-img-top mb-2"
                          src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-if="home.photos"
                          class="card-img-top mb-2"
                          :src="
                            home.photos[2] == undefined
                              ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                              : home.photos[2].photo
                          "
                          width="200"
                          height="160"
                          alt=""
                        />
                        <img
                          v-else
                          class="card-img-top mb-2"
                          src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-if="home.photos"
                          class="card-img-top mb-2"
                          :src="
                            home.photos[3] == undefined
                              ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                              : home.photos[3].photo
                          "
                          width="200"
                          height="160"
                          alt=""
                        />
                        <img
                          v-else
                          class="card-img-top mb-2"
                          src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-if="home.photos"
                          class="card-img-top mb-2"
                          :src="
                            home.photos[4] == undefined
                              ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                              : home.photos[4].photo
                          "
                          width="200"
                          height="160"
                          alt=""
                        />
                        <img
                          v-else
                          class="card-img-top mb-2"
                          src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <a
                    class="carousel-control-prev"
                    :href="'#' + home.firebaseId"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    :href="'#' + home.firebaseId"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>

                <a
                  class="div card-text text-dark ml-1"
                  :href="'/homes/' + home.firebaseId"
                  style="text-decoration: none"
                >
                  <p v-if="home.evaluation" class="mb-1 font-size-responsive">
                    <i class="fa fa-star" style="color: #f93b3b"></i>{{
                      home.generalPuan.generalEvaluation
                    }}
                    ({{  home.generalPuan.generalLength }} değerlendirme)
                  </p>
                  <p v-else class="mb-1 font-size-responsive">
                    <i class="fa fa-star" style="color: #f93b3b"></i>

                    Yeni (Değerlendirme yok)
                  </p>
                  <p class="mb-0 font-size-responsive">{{ home.county }}</p>
                  <p class="font-size-responsive">
                    <span class="font-weight-bold font"
                      >{{ home.price }} ₺</span
                    >
                    / gece
                  </p>
                </a>
              </div>
            </div>
            <div
              class="
                col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12
                mb-5
                responsive-filter2
              "
              v-for="home in newAllData"
              :key="home.index"
              style="cursor: pointer"
            >
              <div class="card border-0">
                <a
                  class="div card-absoluty w-100 text-dark"
                  :href="'/homes/' + home.firebaseId"
                  style="text-decoration: none"
                >
                  <span class="perfectHost" style="margin-left: -7px"
                    >Süper ev sahibi <i class="fa fa-check-circle"></i
                  ></span>
                  <div
                    class="d-flex justify-content-end"
                    style="margin-top: -23px"
                  >
                    <i class="far fa-heart" style="font-size: 23px"></i>
                  </div>
                </a>
                <div
                  :id="home.firebaseId + 32"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="3"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="4"
                    ></li>
                  </ol>
                  <div class="carousel-inner">
                    <a :href="'/homes/' + home.firebaseId" class="div">
                      <div class="carousel-item active">
                        <img
                          v-if="home.photos"
                          class="card-img-top mb-2"
                          :src="
                            home.photos[0] == undefined
                              ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                              : home.photos[0].photo
                          "
                          width="200"
                          height="160"
                          alt=""
                        />

                        <img
                          v-else
                          class="card-img-top mb-2"
                          src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-if="home.photos"
                          class="card-img-top mb-2"
                          :src="
                            home.photos[1] == undefined
                              ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                              : home.photos[1].photo
                          "
                          width="200"
                          height="160"
                          alt=""
                        />
                        <img
                          v-else
                          class="card-img-top mb-2"
                          src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-if="home.photos"
                          class="card-img-top mb-2"
                          :src="
                            home.photos[2] == undefined
                              ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                              : home.photos[2].photo
                          "
                          width="200"
                          height="160"
                          alt=""
                        />
                        <img
                          v-else
                          class="card-img-top mb-2"
                          src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-if="home.photos"
                          class="card-img-top mb-2"
                          :src="
                            home.photos[3] == undefined
                              ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                              : home.photos[3].photo
                          "
                          width="200"
                          height="160"
                          alt=""
                        />
                        <img
                          v-else
                          class="card-img-top mb-2"
                          src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-if="home.photos"
                          class="card-img-top mb-2"
                          :src="
                            home.photos[4] == undefined
                              ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                              : home.photos[4].photo
                          "
                          width="200"
                          height="160"
                          alt=""
                        />
                        <img
                          v-else
                          class="card-img-top mb-2"
                          src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                  <a
                    class="carousel-control-prev"
                    :href="'#' + home.firebaseId + 32"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    :href="'#' + home.firebaseId + 32"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>

                <a
                  class="div card-text text-dark ml-1"
                  :href="'/homes/' + home.firebaseId"
                  style="text-decoration: none"
                >
                  <p v-if="home.evaluation" class="mb-1 font-size-responsive">
                    <i class="fa fa-star" style="color: #f93b3b"></i>
                    {{ home.generalPuan.generalEvaluation}}
                    ({{home.generalPuan.generalLength}} değerlendirme)
                  </p>
                  <p v-else class="mb-1 font-size-responsive">
                    <i class="fa fa-star" style="color: #f93b3b"></i>
                    Yeni (Değerlendirme yok)
                  </p>
                  <p class="mb-0 font-size-responsive">{{ home.county }}</p>
                  <p class="font-size-responsive">
                    <span class="font-weight-bold font"
                      >{{ home.price }} ₺</span
                    >
                    / gece
                  </p>
                </a>
              </div>
            </div>

            <div
              class="col-md-12 remove-mobile"
              v-if="!nullHome"
              style="cursor: pointer"
            >
              <h4 class="mb-5 font font-weight-bold">
                500'den fazla konaklama yerinin tamamını keşfedin
              </h4>
            </div>
            <div class="col-md-12" v-if="nullHome">
              <h3 class="font font-weight-bold text-center">
                Bu filtreye uygun konut bulunumadı lütfen diğerlerini
                deneyiniz..
              </h3>
            </div>
            <div
              class="col-md-12 remove-mobile mb-5"
              v-for="home in newAllData"
              :key="home.index"
            >
              <div class="row">
                <div class="col-5">
                  <a
                    :href="'/homes/' + home.firebaseId"
                    class="card-absoluty text-dark"
                    style="text-decoration: none"
                  >
                    <span style="margin-left: -7px"
                      >Süper ev sahibi <i class="fa fa-check-circle"></i
                    ></span>
                  </a>
                  <div
                    :id="home.firebaseId"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <ol class="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        class="active"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="3"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="4"
                      ></li>
                    </ol>
                    <div
                      class="carousel-inner"
                      style="border-radius: 10px; cursor: pointer"
                    >
                      <a :href="'/homes/' + home.firebaseId" class="div">
                        <div class="carousel-item active">
                          <img
                            v-if="home.photos"
                            :src="
                              home.photos[0] == undefined
                                ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                                : home.photos[0].photo
                            "
                            alt="img"
                            height="200"
                            class="border-radius-img w-100"
                            style="object-fit: cover"
                          />
                          <img
                            v-else
                            src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                            alt="img"
                            height="200"
                            class="border-radius-img w-100"
                            style="object-fit: cover"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            v-if="home.photos"
                            :src="
                              home.photos[1] == undefined
                                ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                                : home.photos[1].photo
                            "
                            alt="img"
                            height="200"
                            class="border-radius-img w-100"
                            style="object-fit: cover"
                          />
                          <img
                            v-else
                            src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                            alt="img"
                            height="200"
                            class="border-radius-img w-100"
                            style="object-fit: cover"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            v-if="home.photos"
                            :src="
                              home.photos[2] == undefined
                                ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                                : home.photos[2].photo
                            "
                            alt="img"
                            height="200"
                            class="border-radius-img w-100"
                            style="object-fit: cover"
                          />
                          <img
                            v-else
                            src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                            alt="img"
                            height="200"
                            class="border-radius-img w-100"
                            style="object-fit: cover"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            v-if="home.photos"
                            :src="
                              home.photos[3] == undefined
                                ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                                : home.photos[3].photo
                            "
                            alt="img"
                            height="200"
                            class="border-radius-img w-100"
                            style="object-fit: cover"
                          />
                          <img
                            v-else
                            src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                            alt="img"
                            height="200"
                            class="border-radius-img w-100"
                            style="object-fit: cover"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            v-if="home.photos"
                            :src="
                              home.photos[4] == undefined
                                ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                                : home.photos[4].photo
                            "
                            alt="img"
                            height="200"
                            class="border-radius-img w-100"
                            style="object-fit: cover"
                          />
                          <img
                            v-else
                            src="https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                            alt="img"
                            height="200"
                            class="border-radius-img w-100"
                            style="object-fit: cover"
                          />
                        </div>
                      </a>
                    </div>
                    <a
                      class="carousel-control-prev"
                      :href="'#' + home.firebaseId"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      :href="'#' + home.firebaseId"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <a
                  class="div col-md-7 text-dark"
                  :href="'/homes/' + home.firebaseId"
                  style="cursor: pointer; text-decoration: none"
                >
                  <div class="row">
                    <div class="col-md-12">
                      <h6 class="font">
                        {{ home.houseType }} - {{ home.county }}
                        <i
                          class="
                            fa fa-heart
                            heart-icon
                            d-flex
                            justify-content-end
                          "
                        ></i>
                      </h6>
                    </div>
                    <div class="col-md-12">
                      <h5>{{ home.title }}</h5>
                    </div>
                    <div class="col-md-12">
                      <hr />
                    </div>
                    <div class="col-md-12">
                      <p>
                        {{ home.peopleCounty }} misafir
                        {{ Math.floor(home.bed / 2) }} yatak odası
                        {{ home.bed }} yatak {{ home.bathroom }} banyo
                      </p>
                    </div>
                    <div class="col-md-12" style="margin-top: 43px">
                      <span v-if="home.evaluation"
                        ><i class="fa fa-star" style="color: #f93b3b"></i>{{
                          home.generalPuan.generalEvaluation
                        }}
                        ({{
                          home.generalPuan.generalLength
                        }}
                        değerlendirme)</span
                      >
                      <span v-else
                        ><i class="fa fa-star" style="color: #f93b3b"></i>
                        Yeni (Değerlendirme yok)
                      </span>
                      <span
                        ><span
                          class="font-weight-bold font"
                          style="margin-left: 100px"
                          >{{ home.price }} ₺</span
                        >
                        / gece</span
                      >
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-xl-5 col-md-5 p-0">
          <div class="position-map">
            <GmapMap
              :center="centerTurkey"
              :zoom="5"
              map-type-id="roadmap"
              style="width: 100%; height: 525px"
              class="position-map"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in mapHomeData"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                @click="toggleInfoWindow(m, index)"
                :icon="Icon"
                :label="m.price + '₺'"
              />
              <gmap-info-window
                :position="infoWindowPos"
                :opened="infoWinOpen"
                @closeclick="infoWinOpen = false"
              >
                <div
                  class="card m-0 p-0 border-0"
                  style="width: 18rem; height: 21.9rem; border-radius: 20px"
                  v-html="infoContent"
                ></div>
              </gmap-info-window>
            </GmapMap>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation-bottom -->
    <nav class="container" v-if="!showMobileMap">
      <div class="row w-50 width-mobile mx-auto">
        <div class="col-1 offset-1 pr-4">
          <i class="fas fa-chevron-left navigation-icon mr-5 button-click"></i>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-2">
              <div
                class="navigation-couty button-click"
                :style="step1 ? 'background:#f93b3b;color:white' : ''"
                @click.prevent="navigationStep1"
              >
                1
              </div>
            </div>
            <div class="col-2">
              <div
                class="navigation-couty button-click"
                :style="step2 ? 'background:#f93b3b;color:white' : ''"
                @click.prevent="navigationStep2"
              >
                2
              </div>
            </div>
            <div class="col-2">
              <div
                class="navigation-couty button-click"
                :style="step3 ? 'background:#f93b3b;color:white' : ''"
                @click.prevent="navigationStep3"
              >
                3
              </div>
            </div>
            <div class="col-2">
              <div
                class="navigation-couty button-click"
                :style="step4 ? 'background:#f93b3b;color:white' : ''"
                @click.prevent="navigationStep4"
              >
                4
              </div>
            </div>
            <div class="col-2">
              <div
                style="margin-top: -5px; cursor: pointer"
                @click.prevent="navigationStep1"
              >
                ...
              </div>
            </div>
            <div class="col-2">
              <div
                class="navigation-couty button-click"
                :style="step5 ? 'background:#f93b3b;color:white' : ''"
                @click.prevent="navigationStep5"
              >
                5
              </div>
            </div>
          </div>
        </div>
        <div class="col-1">
          <i class="fas fa-chevron-right navigation-icon button-click"></i>
        </div>
        <div class="col-12 text-center mx-auto">
          <div class="navigation-bottom-decreption-count my-2">
            1-5 / 500 + ev
          </div>
          <small class="navigation-bottom-decreption text-muted">
            Toplam fiyatı görmek için tarihleri girin. Ek ücretler uygulanır.
            Vergiler eklenebilir.
          </small>
        </div>
      </div>
    </nav>
    <!-- Navigation-bottom bitiş -->
    <div
      class="row p-0 m-0 responsive-filter2"
      id="scroll"
      v-if="showMobileMap"
    >
      <div style="height: 665px; margin-top: -40px">
        <GmapMap
          :center="centerTurkey"
          :zoom="5"
          map-type-id="roadmap"
          style="width: 100%; height: 110%"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in getHomeData"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            @click="toggleInfoWindow(m, index)"
            :icon="Icon"
            :label="m.price + '₺'"
          />
          <gmap-info-window
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen = false"
          >
            <div
              class="card m-0 p-0 border-0 map-responsive-1"
              style="width: 18rem; height: 21.9rem; border-radius: 20px"
              v-html="infoContent"
            ></div>
          </gmap-info-window>
        </GmapMap>
      </div>
    </div>
    <!-- Konaklama yerleri body bitiş -->
  </div>
</template>

<script>
import axios from "axios";
import HomesPageHeader from "@/components/common/homesPageHeader";
export default {
  components: {
    HomesPageHeader,
  },
  data() {
    return {
      mapStyle: {
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
          },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      },
      centerTurkey: {
        lat: 39.37643801214484,
        lng: 35.11810328900551,
      },
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      checkImage: false,
      nullHome: false,
      peopleCounty: false,
      choosePrice: false,
      guestCounty: 1,
      guestChildCounty: 0,
      guestBabyCounty: 0,
      houseStayTypeCard: false,
      houseStayTypeValue: "Konut türü",
      endChoosePrice: null,
      goChoosePrice: null,
      checkCircle: false,
      checkCircle2: false,
      checkCircle3: false,
      checkCircle4: false,
      checkCircle5: false,
      checkCircle6: false,
      randomNumber: null,
      randomNumber2: null,
      randomNumber3: null,
      userProfileData: [],
      showMobileMap: false,
      newAllData: [],
      newAllData2: [],
      mapHomeData: [],
      Icon: {
        path: "M100,0 A100,100 0 1,1 100,200 A100,100 0 1,1 100,0",
        fillColor: "white",
        fillOpacity: 1,
        scale: 0.2,
        strokeColor: "white",
        strokeWeight: 1,
        labelOrigin: { x: 100, y: 100 },
      },
      infoWindowPos: {
        lat: 0,
        lng: 0,
      },
      infoWinOpen: false,
      currentMidx: null,
      infoContent: "",
      markers: [
        {
          position: {
            lat: null,
            lng: null,
          },
        },
      ],
      center: { lat: 40.960882, lng: 29.271368 },
      guestNotData: [],
    };
  },
  methods: {
    guestOldBoyPlus() {
      if (this.guestCounty <= 19) {
        this.guestCounty++;
      }
    },
    guestOldBoyMinus() {
      if (this.guestCounty > 1) {
        this.guestCounty--;
      }
    },
    guestMiddleBoyPlus() {
      if (this.guestChildCounty <= 19) {
        this.guestChildCounty++;
      }
    },
    guestMiddleBoyMinus() {
      if (this.guestChildCounty != 0) {
        this.guestChildCounty--;
      }
    },
    guestSmallBoyPlus() {
      if (this.guestBabyCounty <= 19) {
        this.guestBabyCounty++;
      }
    },
    guestSmallBoyMinus() {
      if (this.guestBabyCounty != 0) {
        this.guestBabyCounty--;
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
            this.userProfileData = newArray;
          }
        });
    },
    getAllData() {
      this.checkImage = !this.checkImage;
      this.houseStayTypeValue = "Konut türü";
      this.checkCircle = false;
      this.checkCircle2 = false;
      this.checkCircle3 = false;
      this.checkCircle4 = false;
      this.checkCircle5 = false;
      this.checkCircle6 = false;
      if (this.checkImage) {
        this.newAllData = this.getHomeData.filter(
          (s) => s.houseStayType == "Yerin tamamı"
        );
        if (this.newAllData.length == 0) {
          this.nullHome = true;
        }
      } else {
        if (this.newAllData.length != 0) {
          this.nullHome = false;
        }
      }
      if (this.checkImage) {
        this.newAllData2 = this.getHomeData.filter(
          (s) => s.houseStayType == "Yerin tamamı"
        );
        if (this.newAllData2.length == 0) {
          this.nullHome = true;
        }
      } else {
        if (this.newAllData2.length != 0) {
          this.nullHome = false;
        }
      }
      if (this.checkImage) {
        this.mapHomeData = this.getHomeData.filter(
          (s) => s.houseStayType == "Yerin tamamı"
        );
        if (this.mapHomeData.length == 0) {
          this.nullHome = true;
        }
      } else {
        if (this.mapHomeData.length != 0) {
          this.nullHome = false;
        }
      }
    },
    houseStayTypeHome() {
      this.checkImage = false;
      (this.houseStayTypeValue = "Ev"),
        (this.houseStayTypeCard = false),
        (this.checkCircle2 = false);
      (this.checkCircle3 = false),
        (this.checkCircle4 = false),
        (this.checkCircle5 = false),
        (this.checkCircle6 = false),
        (this.newAllData = this.getHomeData.filter((s) => s.houseType == "Ev"));
      if (this.newAllData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.newAllData2 = this.getHomeData.filter((s) => s.houseType == "Ev");
      if (this.newAllData2.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.mapHomeData = this.getHomeData.filter((s) => s.houseType == "Ev");
      if (this.mapHomeData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
    },
    houseStayTypeHome2() {
      this.checkImage = false;
      (this.houseStayTypeValue = "Apartman dairesi"),
        (this.houseStayTypeCard = false);
      this.checkCircle = false;
      (this.checkCircle3 = false),
        (this.checkCircle4 = false),
        (this.checkCircle5 = false),
        (this.checkCircle6 = false),
        (this.newAllData = this.getHomeData.filter(
          (s) => s.houseType == "Apartman dairesi"
        ));
      if (this.newAllData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.newAllData2 = this.getHomeData.filter(
        (s) => s.houseType == "Apartman dairesi"
      );
      if (this.newAllData2.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.mapHomeData = this.getHomeData.filter(
        (s) => s.houseType == "Apartman dairesi"
      );
      if (this.mapHomeData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
    },
    houseStayTypeHome3() {
      this.checkImage = false;
      (this.houseStayTypeValue = "İkincil birim"),
        (this.houseStayTypeCard = false);

      this.checkCircle2 = false;
      (this.checkCircle = false),
        (this.checkCircle4 = false),
        (this.checkCircle5 = false),
        (this.checkCircle6 = false),
        (this.newAllData = this.getHomeData.filter(
          (s) => s.houseType == "İkincil birim"
        ));
      if (this.newAllData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.newAllData2 = this.getHomeData.filter(
        (s) => s.houseType == "İkincil birim"
      );
      if (this.newAllData2.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.mapHomeData = this.getHomeData.filter(
        (s) => s.houseType == "İkincil birim"
      );
      if (this.mapHomeData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
    },
    houseStayTypeHome4() {
      this.checkImage = false;
      (this.houseStayTypeValue = "Benzersiz yer"),
        (this.houseStayTypeCard = false);
      this.checkCircle2 = false;
      (this.checkCircle3 = false),
        (this.checkCircle = false),
        (this.checkCircle5 = false),
        (this.checkCircle6 = false),
        (this.newAllData = this.getHomeData.filter(
          (s) => s.houseType == "Benzersiz yer"
        ));
      if (this.newAllData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.newAllData2 = this.getHomeData.filter(
        (s) => s.houseType == "Benzersiz yer"
      );
      if (this.newAllData2.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.mapHomeData = this.getHomeData.filter(
        (s) => s.houseType == "Benzersiz yer"
      );
      if (this.mapHomeData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
    },
    houseStayTypeHome5() {
      this.checkImage = false;
      (this.houseStayTypeValue = "Oda kahvaltı"),
        (this.houseStayTypeCard = false);
      this.checkCircle2 = false;
      (this.checkCircle3 = false),
        (this.checkCircle4 = false),
        (this.checkCircle = false),
        (this.checkCircle6 = false),
        (this.newAllData = this.getHomeData.filter(
          (s) => s.houseType == "Oda kahvaltı"
        ));
      if (this.newAllData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.newAllData2 = this.getHomeData.filter(
        (s) => s.houseType == "Oda kahvaltı"
      );
      if (this.newAllData2.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.mapHomeData = this.getHomeData.filter(
        (s) => s.houseType == "Oda kahvaltı"
      );
      if (this.mapHomeData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
    },
    houseStayTypeHome6() {
      this.checkImage = false;
      (this.houseStayTypeValue = "Butik otel"),
        (this.houseStayTypeCard = false);
      this.checkCircle2 = false;
      (this.checkCircle3 = false),
        (this.checkCircle4 = false),
        (this.checkCircle5 = false),
        (this.checkCircle = false),
        (this.newAllData = this.getHomeData.filter(
          (s) => s.houseType == "Butik otel"
        ));
      if (this.newAllData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.newAllData2 = this.getHomeData.filter(
        (s) => s.houseType == "Butik otel"
      );
      if (this.newAllData2.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.mapHomeData = this.getHomeData.filter(
        (s) => s.houseType == "Butik otel"
      );
      if (this.mapHomeData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
    },
    saveGuestCounty() {
      this.houseStayTypeValue = "Konut türü";
      (this.checkCircle = false), (this.checkCircle2 = false);
      (this.checkCircle3 = false),
        (this.checkCircle4 = false),
        (this.checkCircle5 = false),
        (this.checkCircle6 = false),
        (this.peopleCounty = false);

      this.newAllData = this.getHomeData.filter(
        (s) => s.peopleCounty == this.guestCounty
      );
      var firstArray2 = this.newAllData.filter(function (value, index, arr) {
        return index > 2;
      });
      if (this.newAllData.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.newAllData = firstArray2;
      this.newAllData2 = this.getHomeData.filter(
        (s) => s.peopleCounty == this.guestCounty
      );
      var firstArray2 = this.newAllData2.filter(function (value, index, arr) {
        return index < 2;
      });
      if (this.newAllData2.length == 0) {
        this.nullHome = true;
      } else {
        this.nullHome = false;
      }
      this.newAllData2 = firstArray2;
      this.mapHomeData = this.getHomeData.filter(
        (s) => s.peopleCounty == this.guestCounty
      );
    },
    saveChoosePrice() {
      this.choosePrice = false;

      // this.newAllData = this.getHomeData.filter((s) => s.peopleCounty == 4);
      // console.log(this.newAllData);
      // if (
      //   86 < this.endChoosePrice &&
      //   this.endChoosePrice < 20000 &&
      //   this.goChoosePrice > 0
      // ) {
      //   console.log(
      //     "Başlangıç: " + this.goChoosePrice + "Bitiş: " + this.endChoosePrice
      //   );

      //   console.log(this.newAllData);
      //   allData = this.getHomeData.forEach((element) => {
      //     element.price > this.goChoosePrice;
      //   });
      //   this.newAllData.push(allData);
      //   console.log(this.newAllData);
      //   console.log(this.newAllData);
      //   this.newAllData = this.getHomeData.filter((s) => {
      //     s.price < this.endChoosePrice;
      //   });
      //   console.log(this.newAllData);
      //   if (this.newAllData.length == 0) {
      //     this.nullHome = true;
      //   } else {
      //     this.nullHome = false;
      //   }
      // }
    },
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent(marker) {
      return `<div>
        
      <div
        id="${marker.firebaseId + 34}"
        data-ride="carousel"
         class="carousel slide map-info-popup"
        
      >
      <div  style=" position: absolute;
  padding: 10px;
  width:100%;
  z-index: 3;margin-top:5px">
        <span style="color: black;
  background: #ffff;
  padding: 9px;
  border-radius: 20px;
  margin-top: -5px;
  font-size: 13px;"
          >Süper ev sahibi
          <i
            class="fa fa-check-circle"
            style="color: #f93b3b; font-size: 15px"
          ></i
        ></span>
        <i
            class="fas fa-heart float-right"
            style="color: #f93b3b; font-size: 21px;"
          ></i
        >
      </div>
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner" style="border-radius: 20px 20px 0px 0px;cursor:pointer">
          <a class="carousel-item active"  href="/homes/${
            marker.firebaseId
          }" style="cursor:pointer" >
            <img
            
               src="${
                 marker.photos[0] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[0].photo
               }
                        "              alt=""
              width="300"
              height="200"
              class="border-radius-img"
              style="object-fit: cover"
            />
          </a>
          <a class="carousel-item"  href="/homes/${
            marker.firebaseId
          }" style="cursor:pointer">
            <img
               src="${
                 marker.photos[1] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[1].photo
               }
                        "             alt=""
              width="300"
              height="200"
              class="border-radius-img"
              style="object-fit: cover"
            />
          </a>
          <a class="carousel-item"  href="/homes/${
            marker.firebaseId
          }" style="cursor:pointer">
            <img
               src="${
                 marker.photos[2] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[2].photo
               }
                        "
              alt=""
              width="300"
              height="200"
              class="border-radius-img"
              style="object-fit: cover"
            />
          </a>
          <a class="carousel-item"  href="/homes/${
            marker.firebaseId
          }" style="cursor:pointer">
            <img
               src="${
                 marker.photos[3] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[3].photo
               }
                        "              alt=""
              width="300"
              height="200"
              class="border-radius-img"
              style="object-fit: cover"
            />
          </a>
          <a class="carousel-item"  href="/homes/${
            marker.firebaseId
          }" style="cursor:pointer">
            <img
                src="${
                  marker.photos[4] == undefined
                    ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                    : marker.photos[4].photo
                }
                        "              alt=""
              width="300"
              height="200"
              class="border-radius-img"
              style="object-fit: cover"
            />
          </a>
        </div>
        <a
          class="carousel-control-prev"
          href="${"#" + marker.firebaseId + 34}"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only" >Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="${"#" + marker.firebaseId + 34}"
          role="button"
          data-slide="next"
          style="font-weight:bold;color:#f93b3b!important"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="card-body mt-2"  style="cursor:pointer">
       <a href="/homes/${
         marker.firebaseId
       }"  style="text-decoration:none" class="text-dark">
        <div class="row" style="height:6rem">
          <div class="col-md-12 mb-1" style="font-size:15px">
            <i class="fa fa-star" style="color: #f93b3b;"></i> ${
              marker.evaluation ? marker.generalPuan.generalEvaluation : 'Yeni'
            }
            <small class="text-muted">(${ marker.evaluation ? marker.generalPuan.generalLength + ' Değerlendirme' : 'Değerlendirme yok'  }) </small>
          </div>
          <div class="col-md-12" style="font-size:17px">${marker.houseType} - 
          ${marker.county}</div>
          <div class="col-md-12 my-1" style="font-size:17px">
            <small>${marker.peopleCounty} misafir ${Math.floor(
        marker.bed / 2
      )} yatak odası ${marker.bed} yatak ${marker.bathroom} banyo</small>
          </div>
          <div class="col-md-12" style="font-size:17px">
            <span class="font-weight-bold">${marker.price} ₺</span> / gece
          </div>
        </div>
        </a>
      </div>
    </div>`;
    },
    showMobileMaps() {
      this.showMobileMap = !this.showMobileMap;
      window.scrollTo(6000, 0);
    },
    shortGetHomeData() {
      this.getHomeData.sort((a, b) => a.price - b.price);
      let firstData = this.getHomeData.filter(function (value, index, arr) {
        return index <= 30 && index >= 0;
      });
      this.mapHomeData = firstData;
      let firstArray = firstData.slice(0, 3);
      this.newAllData2 = firstArray;
      var firstArray2 = firstData.filter(function (value, index, arr) {
        return index > 2;
      });
      this.newAllData = firstArray2;
    },
    navigationStep1() {
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
      this.step5 = false;
      this.getHomeData.sort((a, b) => a.price - b.price);
      let firstData = this.getHomeData.filter(function (value, index, arr) {
        return index <= 20 && index >= 0;
      });
      this.mapHomeData = firstData;
      let firstArray = firstData.slice(0, 3);
      this.newAllData2 = firstArray;
      var firstArray2 = firstData.filter(function (value, index, arr) {
        return index > 2;
      });
      this.newAllData = firstArray2;
      window.scrollTo(6000, 0);
    },
    navigationStep2() {
      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;
      this.step5 = false;
      this.getHomeData.sort((a, b) => a.price - b.price);
      let firstData = this.getHomeData.filter(function (value, index, arr) {
        return index <= 50 && index >= 20;
      });
      this.mapHomeData = firstData;
      let firstArray = firstData.slice(0, 3);
      this.newAllData2 = firstArray;
      var firstArray2 = firstData.filter(function (value, index, arr) {
        return index > 2;
      });
      this.newAllData = firstArray2;
      window.scrollTo(6000, 0);
    },
    navigationStep3() {
      this.step1 = false;
      this.step2 = false;
      this.step3 = true;
      this.step4 = false;
      this.step5 = false;
      this.getHomeData.sort((a, b) => a.price - b.price);
      let firstData = this.getHomeData.filter(function (value, index, arr) {
        return index <= 80 && index >= 50;
      });
      this.mapHomeData = firstData;
      let firstArray = firstData.slice(0, 3);
      this.newAllData2 = firstArray;

      var firstArray2 = firstData.filter(function (value, index, arr) {
        return index > 2;
      });
      this.newAllData = firstArray2;
      window.scrollTo(6000, 0);
    },
    navigationStep4() {
      this.step1 = false;
      this.step2 = false;
      this.step3 = false;
      this.step4 = true;
      this.step5 = false;
      this.getHomeData.sort((a, b) => a.price - b.price);
      let firstData = this.getHomeData.filter(function (value, index, arr) {
        return index <= 110 && index >= 80;
      });
      this.mapHomeData = firstData;
      let firstArray = firstData.slice(0, 3);
      this.newAllData2 = firstArray;
      var firstArray2 = firstData.filter(function (value, index, arr) {
        return index > 2;
      });
      this.newAllData = firstArray2;
      window.scrollTo(6000, 0);
    },
    navigationStep5() {
      this.step1 = false;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
      this.step5 = true;
      this.getHomeData.sort((a, b) => a.price - b.price);
      let firstData = this.getHomeData.filter(function (value, index, arr) {
        return index >= 110;
      });
      this.mapHomeData = firstData;
      let firstArray = firstData.slice(0, 3);
      this.newAllData2 = firstArray;
      var firstArray2 = firstData.filter(function (value, index, arr) {
        return index > 2;
      });
      this.newAllData = firstArray2;
      window.scrollTo(6000, 0);
    },
  },
  computed: {
    getHomeData() {
      return this.$store.getters.getHomesData;
    },
  },
  created() {
    this.getUserDATA();
    this.shortGetHomeData();
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");

/* Navigation-bottom  */

.navigation-icon {
  font-size: 22px;
  cursor: pointer;
}
.navigation-icon:hover {
  color: #f93b3b;
  cursor: no-drop;
}
.navigation-couty {
  font-size: 17px;
  text-align: center;
  border-radius: 45%;
}
.navigation-couty:hover {
  font-size: 17px;
  background-color: #f93b3b;
  color: #fff;
}

/* Navigation-bottom-bitiş  */

@media (min-width: 1400px) {
  .position-map {
    height: 696px !important;
  }
}
.button-click {
  transition: transform 80ms ease-in;
  cursor: pointer;
}

.button-click:active {
  transform: scale(0.95);
}
@media (max-width: 762px) {
  .navigation-couty {
    padding: 0px 20px 0px 10px;
    text-align: center !important;
    border-radius: 45% !important;
  }
  .width-mobile {
    width: 100% !important;
  }
  .position-map {
    display: none;
  }
  .responsive-filter {
    display: none;
  }
  .responsive-filter2 {
    display: inherit !important;
  }
  .cards2 {
    position: absolute;
    padding: 15px;
    border-radius: 20px;
    z-index: 3;
    margin-left: 1px !important;
    width: 150px !important;
    height: 200px !important;
  }
  .cards3 {
    position: absolute;
    padding: 15px;
    border-radius: 20px;
    z-index: 3;
    margin-left: -40px !important;
    margin-top: -60px;
    width: 200px !important;
    height: 235px !important;
  }
  .card-img-top {
    height: 220px !important;
  }
  .perfectHost {
    margin-left: 5px !important;
  }
  .font-size-responsive {
    font-size: 20px;
  }
  .remove-mobile {
    display: none !important;
  }
  .show-map {
    position: fixed;
    bottom: 10%;
    left: 3%;
    z-index: 21;
  }
  .map-responsive {
    width: 13rem !important;
  }
  .map-responsive-1 {
    width: 13rem !important;
    height: 23.9rem !important;
  }
}
@media (max-width: 562px) {
  .show-map {
    bottom: 11%;
  }
}
.responsive-filter2 {
  display: none;
}
.font {
  font-family: "Titillium Web", sans-serif !important;
}

.position-map {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  margin-bottom: 55px;
}
.font-weight-choose {
  border-radius: 20px;
}
.heart-icon {
  margin-top: -22px;
  font-size: 23px;
  color: #f93b3b;
}

.card-absoluty {
  position: absolute;
  padding: 10px;
  z-index: 3;
}
.cards {
  position: absolute;
  padding: 15px;
  border-radius: 20px;
  margin-top: -90px;
  margin-left: -40px;
  z-index: 3;
  width: 200px !important;
}
.cards2 {
  position: absolute;
  padding: 15px;
  border-radius: 20px;
  margin-top: -90px;
  margin-left: -67px;
  z-index: 3;
  width: 247px !important;
}
.hovers {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
.hovers:hover {
  color: #f93b3b;
  border-radius: 50%;
}
.card-absoluty span {
  color: black;
  background: #ffff;
  padding: 9px;
  border-radius: 20px;
  margin-top: -5px;
  font-size: 13px;
}
.heart-imgs {
  margin-left: 105.5px !important;
}
.font-weight-choose:hover {
  background: linear-gradient(to right, #323b42, #121317);
  color: #fff;
  border: 1px solid #fff !important;
}
.card-img-top {
  border-radius: 10px;
  object-fit: cover;
}
.border-radius-img {
  border-radius: 10px !important;
}
.pagination {
  list-style: none;
  display: inline-block;
  padding: 0;
  margin-top: 10px;
}
.pagination li {
  display: inline;
  text-align: center;
}
.pagination a {
  float: left;
  display: block;
  font-size: 20px;
  text-decoration: none;
  padding: 5px 12px;
  color: #fff;
  margin-left: -1px;
  border: 1px solid transparent;
  line-height: 1.5;
}
.pagination a.active {
  cursor: default;
}
.pagination a:active {
  outline: none;
}
.modal-2 li:first-child a {
  -moz-border-radius: 50px 0 0 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px 0 0 50px;
}
.modal-2 li:last-child a {
  -moz-border-radius: 0 50px 50px 0;
  -webkit-border-radius: 0;
  border-radius: 0 50px 50px 0;
}
.modal-2 a {
  border-color: #ddd;
  color: #999;
  background: #fff;
}
.modal-2 a:hover {
  color: #e34e48;
  background-color: #eee;
}
.modal-2 a.active,
.modal-2 a:active {
  border-color: #e34e48;
  background: #e34e48;
  color: #fff;
}
</style>