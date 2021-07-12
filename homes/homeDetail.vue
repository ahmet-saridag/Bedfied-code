<template>
  <div>
    <HomesPageHeader :userProfilesData="haveUserData" id="scroll" />
    <div class="container-fluid w-100 mt-4 ct pc-detail" v-if="homeDetails">
      <div class="container-fluid container-photos" style="margin-left: 4.7%">
        <h2 class="mb-3">
          <span style="margin-left: -10px">{{ homeData.title }}</span>
          <span class="card-right h3 ml-2 houseType-font-size">
            <i
              class="fas fa-star text-left"
              style="color: #f93b3b; font-size: 20px"
              v-if="generalEvaluation != null && evaluationData.length != 0"

            ></i>
            <span
             v-if="generalEvaluation != null && evaluationData.length != 0"         
            class="text-muted" style="font-size: 20px"
              >{{ generalEvaluation }}({{ evaluationData.length }})</span
            >
             <i
              class="fas fa-star text-left"
              style="color: #f93b3b; font-size: 20px"
              v-if="nullEvaluation"
            ></i>
            <span
             v-if="nullEvaluation"         
            class="text-muted" style="font-size: 20px"
              >Yeni (Değerlendirme yok)</span
            >
            <i
              class="far fa-heart heart-responsive h2 mt-1"
              :class="
                heartShow
                  ? 'fas fa-heart heart-responsive h2 mr-2 mt-1 float-right'
                  : 'far fa-heart  heart-responsive h2 mr-2 mt-1 float-right'
              "
              @click.prevent="heartShow = !heartShow"
            ></i>
          </span>
        </h2>
        <div class="row row-photo-height" style="height: 340px">
          <div
            class="col-5 h-100 w-100 hover-photo button-click"
            style="cursor: pointer"
            @click.prevent="showPhotos"
          >
            <img
              :src="
                homeData.photos[0] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[0].photo
              "
              alt=""
              class="img-responsive"
              style="border-radius: 10px 0px 0px 10px; object-fit: cover"
            />
          </div>
          <div class="col-7 h-100 h-100" style="margin-left: -18.5px">
            <div class="row w-125 h-100">
              <div
                class="
                  col-5
                  w-50
                  mr-2
                  ml-2
                  hover-photo
                  img-height-pc
                  button-click
                "
                style="height: 166px; cursor: pointer"
                @click.prevent="showPhotos"
              >
                <img
                  :src="
                    homeData.photos[1] == undefined
                      ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                      : homeData.photos[1].photo
                  "
                  style="object-fit: cover !important"
                  alt=""
                  class="img-responsive2"
                />
              </div>
              <div
                class="
                  col-5
                  w-50
                  hover-photo
                  img-height-pc
                  margin-pc
                  button-click
                "
                @click.prevent="showPhotos"
                style="height: 166px; cursor: pointer"
              >
                <img
                  :src="
                    homeData.photos[2] == undefined
                      ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                      : homeData.photos[2].photo
                  "
                  alt=""
                  class="img-responsive2"
                  style="border-radius: 0px 10px 10px 0px; object-fit: cover"
                />
              </div>
              <div
                class="
                  col-5
                  w-50
                  ml-2
                  mr-2
                  mt-2
                  hover-photo
                  img-height-pc
                  button-click
                "
                style="height: 166px; cursor: pointer"
                @click.prevent="showPhotos"
              >
                <img
                  :src="
                    homeData.photos[3] == undefined
                      ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                      : homeData.photos[3].photo
                  "
                  style="object-fit: cover !important"
                  alt=""
                  class="img-responsive2"
                />
              </div>
              <div
                class="
                  col-5
                  w-50
                  mt-2
                  hover-photo
                  img-height-pc
                  margin-pc
                  button-click
                "
                @click.prevent="showPhotos"
                style="height: 166px; cursor: pointer"
              >
                <img
                  :src="
                    homeData.photos[4] == undefined
                      ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                      : homeData.photos[4].photo
                  "
                  alt=""
                  class="img-responsive2"
                  style="border-radius: 0px 10px 10px 0px; object-fit: cover"
                />
                <button
                  class="btn absolutly"
                  style="background: white; color: black; z-index: 3"
                  @click.prevent="showPhotos"
                >
                  <img
                    src="./İcons/setup-dots (1).png"
                    class="mr-1"
                    style="margin-bottom: 3px"
                    alt=""
                  />
                  Tüm fotoğrafları göster
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Ana bölüm -->
      <div class="container-fluid">
        <div class="row mt-5" style="margin-left: 35px">
          <div class="col-7">
            <div class="row">
              <div class="col-10">
                <h4 class="font-weight-bold">
                  {{ homeData.houseType }} - Ev sahibi:
                  <span v-if="userProfileData.fullName">
                    {{
                      userProfileData.fullName == null
                        ? "İsim belirtilmemiş"
                        : userProfileData.fullName
                    }}</span
                  ><span v-else>İsim yok</span>
                </h4>
                <h6>
                  {{ homeData.peopleCounty }} misafir
                  {{ Math.floor(homeData.bed / 2) }} yatak odası
                  {{ homeData.bed }} yatak {{ homeData.bathroom }} banyo
                </h6>
              </div>
              <div class="col-2 mt-0 pt-0">
                <img
                  :src="
                    userProfileData.profileImage == null
                      ? './İcons/user.png'
                      : userProfileData.profileImage
                  "
                  class="rounded-circle"
                  style="object-fit: cover"
                  height="70"
                  width="70"
                  alt="Yükleniyor.."
                  v-if="userProfileData.profileImage"
                />
                <img
                  src="./İcons/user.png"
                  class="rounded-circle"
                  style="object-fit: cover"
                  height="70"
                  width="70"
                  alt="Yükleniyor.."
                  v-else
                />
                <div class="col-1" style="margin-top: -25px; margin-left: 34px">
                  <img src="./İcons/checked.png" alt />
                </div>
              </div>
              <div class="col-12">
                <hr />
              </div>
              <div class="col-1" style="margin-top: 28px">
                <img
                  src="./İcons/university.png"
                  alt
                  v-if="homeData.houseType == 'İkincil birim'"
                />
                <img
                  src="./İcons/house (2).png"
                  v-if="homeData.houseType == 'Oda kahvaltı'"
                  alt
                />
                <img
                  src="./İcons/hotel.png"
                  alt
                  v-if="homeData.houseType == 'Butik otel'"
                />
                <img
                  src="./İcons/house.png"
                  alt
                  v-if="homeData.houseType == 'Ev'"
                />
                <img
                  src="./İcons/apartment.png"
                  alt
                  v-if="homeData.houseType == 'Apartman dairesi'"
                />
                <img
                  src="./İcons/cottage.png"
                  alt
                  v-if="homeData.houseType == 'Benzersiz yer'"
                />
                <!-- <img src="./İcons/homes.png" alt /> -->
              </div>
              <div class="col-11 mt-3">
                <span class="font-weight-bold ml-2" style="font-size: 20px">{{
                  homeData.houseType
                }}</span>
                <br />
                <span class="ml-2"
                  >{{ homeData.houseStayType }} size ait olacak.</span
                >
              </div>
              <div class="col-1" style="margin-top: 35px">
                <img src="./İcons/soaps.png" alt />
              </div>
              <div class="col-11 mt-4">
                <span class="font-weight-bold ml-2" style="font-size: 20px"
                  >Üstün temizlik</span
                >
                <br />
                <span class="ml-2">
                  Bu ev sahibi Bedfied'da ki üstün temizlik sürecine uymayı
                  taahhüt etmiştir.
                </span>
              </div>
              <div class="col-1" style="margin-top: 45px">
                <img src="./İcons/checked (3).png" alt />
              </div>
              <div class="col-11 mt-4">
                <span class="font-weight-bold ml-2" style="font-size: 20px"
                  >Süper ev sahibi</span
                >
                <br />
                <span class="ml-2">
                  Süper ev sahipleri, kendileri için mükemmel konaklamalar
                  sunmaya adanmış <span class="ml-2">deneyimli</span>, yüksek
                  puanlı ev sahipleridir.
                </span>
              </div>
              <div class="col-1" style="margin-top: 45px">
                <img src="./İcons/rejected.png" alt />
              </div>
              <div class="col-11 mt-4">
                <span class="font-weight-bold ml-2" style="font-size: 20px"
                  >İptal politikası</span
                >
                <br />
                <span class="ml-2">
                  Bu konaklamanın iptal edilmesiyle ilgili ayrıntıları görmek
                  için seyahat tarihlerinizi
                  <span class="ml-2">ekleyin.</span>
                </span>
              </div>
              <div class="col-1" style="margin-top: 45px">
                <img src="./İcons/compliant.png" alt />
              </div>

              <div class="col-11 mt-4">
                <span class="font-weight-bold ml-2" style="font-size: 20px"
                  >Ev kuralları</span
                >
                <br />
                <span class="ml-2"
                  >Ev sahibi ev kurallarını aşşağıda belirtmiştir.</span
                >
              </div>
              <hr class="mt-5 w-100" />
              <div class="col-12 mt-2 p-0">
                <h4 class="font-weight-bold mb-3">Tanıtım</h4>
                <p style="letter-spacing: 0.5px">
                  {{ homeData.promotion }}
                </p>
              </div>
              <hr class="mt-5 w-100" />
              <div class="col-12 mt-2 p-0">
                <h4 class="font-weight-bold mb-5">Uyuma düzeni</h4>
                <div
                  class="card w-50 border border-info text-center p-4"
                  style="border-radius: 15px"
                >
                  <div class="row">
                    <div class="col-12 text-center">
                      <img src="./İcons/bed.png" alt />
                    </div>
                  </div>
                  <span class="font-weight-bold my-1"
                    >{{ Math.floor(homeData.bed / 2) }} Yatak odası</span
                  >
                  {{ homeData.bed }} yatak
                </div>
              </div>
              <hr class="mt-5 w-100" />
              <div class="col-12 mt-2 p-0">
                <h4
                  class="font-weight-bold"
                  v-if="
                    !homeData.wifi &&
                    !homeData.basicMaterials &&
                    !homeData.washingMachine &&
                    !homeData.kitchen &&
                    !homeData.tv &&
                    !homeData.Iron &&
                    !homeData.carPark &&
                    !homeData.table &&
                    !homeData.airConditioning &&
                    !homeData.cabinet &&
                    !homeData.pool &&
                    !homeData.notFreeCarPark
                      ? ''
                      : 'Olanaklar'
                  "
                >
                  Olanaklar
                </h4>
                <div class="row">
                  <div
                    class="col-1 mt-5"
                    style="cursor: pointer"
                    v-if="homeData.wifi"
                  >
                    <img src="./İcons/wifi.png" alt />
                  </div>
                  <div
                    class="col-5 mt-5"
                    style="cursor: pointer"
                    v-if="homeData.wifi"
                  >
                    <span style="font-size: 20px">Wifi</span>
                  </div>
                  <div
                    class="col-1 mt-5"
                    style="cursor: pointer"
                    v-if="homeData.basicMaterials"
                  >
                    <img src="./İcons/soap.png" alt />
                  </div>
                  <div
                    class="col-5 mt-5"
                    style="cursor: pointer"
                    v-if="homeData.basicMaterials"
                  >
                    <span style="font-size: 20px">Temel Malzemeler</span>
                  </div>
                  <div
                    class="col-1 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.carPark"
                  >
                    <img src="./İcons/parking-car.png" alt />
                  </div>
                  <div
                    class="col-5 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.carPark"
                  >
                    <span style="font-size: 20px">Ücretsiz Otopark</span>
                  </div>
                  <div
                    class="col-1 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.kitchen"
                  >
                    <img src="./İcons/kitchen.png" alt />
                  </div>
                  <div
                    class="col-5 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.kitchen"
                  >
                    <span style="font-size: 20px">Mutfak</span>
                  </div>
                  <div
                    class="col-1 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.Iron"
                  >
                    <img src="./İcons/iron.png" alt />
                  </div>
                  <div
                    class="col-5 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.Iron"
                  >
                    <span style="font-size: 20px">Ütü</span>
                  </div>
                  <div
                    class="col-1 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.washingMachine"
                  >
                    <img src="./İcons/washing-machine.png" alt />
                  </div>
                  <div
                    class="col-5 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.washingMachine"
                  >
                    <span style="font-size: 20px">Çamaşır Makinesi</span>
                  </div>
                  <div
                    class="col-1 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.tv"
                  >
                    <img src="./İcons/monitor.png" alt />
                  </div>
                  <div
                    class="col-5 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.tv"
                  >
                    <span style="font-size: 20px">TV</span>
                  </div>
                  <div
                    class="col-1 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.cabinet"
                  >
                    <img src="./İcons/wardrobe.png" alt />
                  </div>
                  <div
                    class="col-5 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.cabinet"
                  >
                    <span style="font-size: 20px">Dolap / Çekmeceler</span>
                  </div>
                  <div
                    class="col-1 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.table"
                  >
                    <img src="./İcons/chair.png" alt />
                  </div>
                  <div
                    class="col-5 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.table"
                  >
                    <span style="font-size: 20px">Masa, Sandalye</span>
                  </div>
                  <div
                    class="col-1 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.airConditioning"
                  >
                    <img src="./İcons/air-conditioner (1).png" alt />
                  </div>
                  <div
                    class="col-5 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.airConditioning"
                  >
                    <span style="font-size: 20px">Klima</span>
                  </div>
                  <div
                    class="col-1 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.pool"
                  >
                    <img src="./İcons/swimming-pool.png" alt />
                  </div>
                  <div
                    class="col-5 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.pool"
                  >
                    <span style="font-size: 20px">Havuz</span>
                  </div>
                  <div
                    class="col-1 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.notFreeCarPark"
                  >
                    <img src="./İcons/car-park (1).png" alt />
                  </div>
                  <div
                    class="col-5 mt-4"
                    style="cursor: pointer"
                    v-if="homeData.notFreeCarPark"
                  >
                    <span style="font-size: 20px">Ücretli otopark</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="card shadow-lg card-price-position">
              <div class="row p-4">
                <div class="col-6">
                  <h5 class="font-weight-bold ml-2">
                    {{ homeData.price }} ₺
                    <span class="h6">/ gece</span>
                  </h5>
                </div>
                <div class="col-6 text-right mr-auto">
                  <i v-if="generalEvaluation != null && evaluationData.length" class="fa fa-star" style="color: #f93b3b"></i>
                  <span v-if="generalEvaluation != null && evaluationData.length"
                    >{{ generalEvaluation }}({{ evaluationData.length }})</span
                  >
                  <i v-if="nullEvaluation" class="fa fa-star" style="color: #f93b3b"></i>
                  <span v-if="nullEvaluation"
                    >Yeni</span
                  >
                </div>
                <div
                  class="col-12 my-3 border w-50"
                  style="height: auto; border-radius: 15px"
                >
                  <div class="row">
                    <div
                      class="col-6 border"
                      style="border-radius: 15px 0px 0px 0px"
                    >
                      <!-- <h6  class="font-weight-bold pt-3 pl-3 pr-2">Giriş</h6> -->
                      <h6 class="mt-3">
                        <span
                          class="font-weight-bold pt-3 pr-2"
                          style="padding-left: 2px"
                          >Giriş</span
                        >
                        <input
                          type="date"
                          name="dates"
                          id="dates"
                          @mouseover="saveRezervation = false"
                          v-model="sendTravelModeDetails.dateData.goDate"
                          class="form-control border-0 h-100 px-0 w-100"
                          :style="
                            !saveRezervation
                              ? ''
                              : 'border-bottom:1px solid #f93b3b!important'
                          "
                        />
                      </h6>
                    </div>
                    <div
                      class="col-6 border"
                      style="border-radius: 0px 15px 0px 0px"
                    >
                      <h6 class="mt-3">
                        <span
                          class="font-weight-bold pt-3 pr-2"
                          style="padding-left: 2px"
                          >Çıkış</span
                        >
                        <input
                          type="date"
                          name="dates"
                          id="dates"
                          @mouseover="saveRezervation = false"
                          v-model="sendTravelModeDetails.dateData.endDate"
                          class="form-control border-0 px-0 h-100 w-100"
                          :style="
                            !saveRezervation
                              ? ''
                              : 'border-bottom:1px solid #f93b3b!important'
                          "
                        />
                      </h6>
                    </div>

                    <div
                      @click.prevent="
                        sendTravelModeDetails.guest.countyGuest =
                          !sendTravelModeDetails.guest.countyGuest
                      "
                      class="col-10"
                      style="cursor: pointer"
                    >
                      <h6
                        class="font-weight-bold pl-1 pr-2"
                        style="margin-top: 13px"
                      >
                        Misafir sayısı
                      </h6>
                      <h6 class="pl-1 pb-2">
                        {{
                          sendTravelModeDetails.guest.oldBoy +
                          sendTravelModeDetails.guest.middleBoy
                        }}
                        misafir
                        <span v-if="sendTravelModeDetails.guest.smallBoy != 0"
                          >,
                          {{ sendTravelModeDetails.guest.smallBoy }} bebek</span
                        >
                      </h6>
                    </div>
                    <div
                      class="col-2 mb-2"
                      @click.prevent="
                        sendTravelModeDetails.guest.countyGuest =
                          !sendTravelModeDetails.guest.countyGuest
                      "
                    >
                      <i
                        :class="
                          !sendTravelModeDetails.guest.countyGuest
                            ? 'fa fa-chevron-down mt-4'
                            : 'fa fa-chevron-left mt-4'
                        "
                        style="font-size: 25px; color: #f93b3b"
                      ></i>
                    </div>
                    <div
                      class="col-8"
                      style="cursor: pointer"
                      v-if="sendTravelModeDetails.guest.countyGuest"
                    >
                      <h6
                        class="font-weight-bold pl-1"
                        style="margin-top: 13px"
                      >
                        Yetişkinler
                      </h6>
                    </div>
                    <div class="col-4 d-flex" style="user-select: none">
                      <div
                        class="col-0"
                        @click.prevent="guestOldBoyMinus"
                        style="cursor: pointer"
                        v-if="
                          sendTravelModeDetails.guest.countyGuest &&
                          sendTravelModeDetails.guest.oldBoy > 1
                        "
                      >
                        <img class="mt-2" src="./İcons/minus.png" alt />
                      </div>
                      <div
                        class="col-0 mx-3 mt-2"
                        v-if="sendTravelModeDetails.guest.countyGuest"
                      >
                        <span class="mt-3" style="cursor: pointer">{{
                          sendTravelModeDetails.guest.oldBoy
                        }}</span>
                      </div>
                      <div
                        class="col-0"
                        @click.prevent="guestOldBoyPlus"
                        style="cursor: pointer"
                        v-if="sendTravelModeDetails.guest.countyGuest"
                      >
                        <img
                          class="mt-2"
                          src="./İcons/plus (1).png"
                          alt
                          v-if="
                            sendTravelModeDetails.guest.oldBoy +
                              sendTravelModeDetails.guest.middleBoy <
                            homeData.peopleCounty
                          "
                        />
                      </div>
                    </div>
                    <div
                      class="col-8 mb-2"
                      style="cursor: pointer"
                      v-if="sendTravelModeDetails.guest.countyGuest"
                    >
                      <h6
                        class="font-weight-bold pl-1 mt-3 pr-2 pb-0 mb-0"
                        style="margin-top: 13px"
                      >
                        Çocuklar
                      </h6>
                      <span class="pl-1 pr-2 pt-0 mt-0 small"
                        >Yaş aralığı 2-12</span
                      >
                    </div>
                    <div class="col-4 d-flex" style="user-select: none">
                      <div
                        class="col-0 my-3"
                        @click.prevent="guestMiddleBoyMinus"
                        v-if="
                          sendTravelModeDetails.guest.countyGuest &&
                          sendTravelModeDetails.guest.middleBoy >= 1
                        "
                      >
                        <img
                          class="mt-2"
                          style="cursor: pointer"
                          src="./İcons/minus.png"
                          alt
                        />
                      </div>
                      <div
                        class="col-0 mx-3 mt-4 mb-3"
                        v-if="sendTravelModeDetails.guest.countyGuest"
                      >
                        <span class="mt-4" style="cursor: pointer">{{
                          sendTravelModeDetails.guest.middleBoy
                        }}</span>
                      </div>
                      <div
                        class="col-0 my-3"
                        @click.prevent="guestMiddleBoyPlus"
                        v-if="sendTravelModeDetails.guest.countyGuest"
                      >
                        <img
                          class="mt-2"
                          style="cursor: pointer"
                          src="./İcons/plus (1).png"
                          v-if="
                            sendTravelModeDetails.guest.oldBoy +
                              sendTravelModeDetails.guest.middleBoy <
                            homeData.peopleCounty
                          "
                          alt
                        />
                      </div>
                    </div>
                    <div
                      class="col-8 mb-2"
                      style="cursor: pointer"
                      v-if="sendTravelModeDetails.guest.countyGuest"
                    >
                      <h6
                        class="font-weight-bold pl-1 pr-2 pb-0 mb-0"
                        style="margin-top: 13px"
                      >
                        Bebekler
                      </h6>
                      <span class="pl-1 pr-2 pt-0 mt-0 small"
                        >2 yaş ve altı</span
                      >
                    </div>
                    <div class="col-4 d-flex" style="user-select: none">
                      <div
                        class="col-0 mb-2 mt-2"
                        @click.prevent="guestSmallBoyMinus"
                        v-if="
                          sendTravelModeDetails.guest.countyGuest &&
                          sendTravelModeDetails.guest.smallBoy >= 1
                        "
                      >
                        <img
                          class="mt-2"
                          style="cursor: pointer"
                          src="./İcons/minus.png"
                          alt
                        />
                      </div>
                      <div
                        class="col-0 mx-3 mb-2 mt-3"
                        v-if="sendTravelModeDetails.guest.countyGuest"
                      >
                        <span class="mt-3" style="cursor: pointer">{{
                          sendTravelModeDetails.guest.smallBoy
                        }}</span>
                      </div>
                      <div
                        class="col-0 mb-2 mt-2"
                        @click.prevent="guestSmallBoyPlus"
                        v-if="sendTravelModeDetails.guest.countyGuest"
                      >
                        <img
                          class="mt-2"
                          style="cursor: pointer"
                          v-if="this.sendTravelModeDetails.guest.smallBoy < 10"
                          src="./İcons/plus (1).png"
                          alt
                        />
                      </div>
                    </div>
                    <div
                      class="col-12 my-3 ml-3"
                      v-if="sendTravelModeDetails.guest.countyGuest"
                    >
                      <h6>
                        En fazla {{ homeData.peopleCounty }} misafir. Bebekler
                        misafir sayısına dahil edilmez.
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  class="row px-3"
                  v-if="
                    sendTravelModeDetails.dateData.endDate != null &&
                    sendTravelModeDetails.dateData.goDate != null
                  "
                >
                  <div class="col-12">
                    <p class="text-center">Henüz sizden ücret alınmayacak</p>
                  </div>
                  <div class="col-8">
                    {{ homeData.price }}₺ x {{ lastDay }} gece
                  </div>
                  <div class="col-4 text-right">
                    {{ homeData.price * lastDay }} ₺
                  </div>
                  <div class="col-8 my-2">Hizmet bedeli</div>
                  <div class="col-4 text-right my-2">
                    {{ Math.round(homeData.price * lastDay * (8 / 100)) }} ₺
                  </div>
                  <div class="col-12">
                    <hr />
                  </div>
                  <div
                    class="col-8 mb-3 font-weight-bold"
                    v-if="sendTravelModeDetails.dateData.endDate != null"
                  >
                    Toplam
                  </div>
                  <div
                    class="col-4 mb-3 text-right font-weight-bold"
                    v-if="sendTravelModeDetails.dateData.endDate != null"
                  >
                    {{
                      Math.round(
                        homeData.price * lastDay +
                          homeData.price * lastDay * (8 / 100)
                      )
                    }}
                    ₺
                  </div>
                </div>

                <div class="col-12 text-center mt-1">
                  <button
                    class="btn btn-md"
                    style="
                      background: #f93b3b;
                      color: white;
                      border-radius: 7px;
                    "
                    v-if="
                      sendTravelModeDetails.dateData.endDate != null &&
                      sendTravelModeDetails.dateData.goDate != null
                    "
                  >
                    <a
                      class="text-white"
                      style="text-decoration: none"
                      @click="showPriceDetails"
                      >Rezerve Edin</a
                    >
                  </button>
                  <button
                    @click.prevent="saveRezerv"
                    class="btn btn-reserve button-click"
                    v-else
                  >
                    Uygunluk durumunu kontrol edin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comments :homeData="homeData" @generalEvaluation="generalEvaluations($event)" />
      <!-- Harita -->
      <div class="containers">
        <div class="row" style="margin-top: 100px">
          <div class="d-block mx-auto w-100">
            <GmapMap
              :center="center"
              :zoom="9"
              map-type-id="roadmap"
              style="
                width: 100% !important;
                height: 405px;
                overflow: hidden;
                border-radius: 15px;
              "
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                :icon="{ url: require('./İcons/home (4).png') }"
              />
            </GmapMap>
          </div>
        </div>
      </div>
      <!-- Bilinmesi gerekenler -->
      <div class="container-fluid">
        <div class="ml-4">
          <hr class="w-100 d-block mx-auto my-5" />
          <h4 class="font-weight-bold">Bilinmesi Gerekenler</h4>
          <div class="row">
            <div class="col-4 mt-1">
              <div class="row" v-if="homeData.rules">
                <div class="col-12">
                  <h6 class="mt-2 font-weight-bold">Ev kuralları</h6>
                </div>
                <div class="col-1 mt-3" v-if="homeData.rules.childRule">
                  <img src="./İcons/children.png" alt />
                </div>
                <div class="col-10 ml-3 mt-3" v-if="homeData.rules.childRule">
                  Çocuklar için uygun (2-12 yaş ve altı)
                </div>
                <div class="col-1 mt-3" v-if="homeData.rules.funnyRule">
                  <img src="./İcons/celebration.png" alt />
                </div>
                <div class="col-10 ml-3 mt-3" v-if="homeData.rules.funnyRule">
                  Etkinliklere , eğlencelere izin veriliyor
                </div>
                <div class="col-1 mt-3" v-if="homeData.rules.animalRule">
                  <img src="./İcons/cat.png" alt />
                </div>
                <div class="col-10 ml-3 mt-3" v-if="homeData.rules.animalRule">
                  Evcil hayvanlar için uygun
                </div>
                <div class="col-1 mt-3" v-if="homeData.rules.smogeRule">
                  <img src="./İcons/cigarrete.png" alt />
                </div>
                <div class="col-10 ml-3 mt-3" v-if="homeData.rules.smogeRule">
                  Sigara içilebilir
                </div>
                <div class="col-1 mt-3" v-if="homeData.rules.babyRule">
                  <img src="./İcons/baby-boy.png" alt />
                </div>
                <div class="col-10 ml-3 mt-3" v-if="homeData.rules.babyRule">
                  Bebekler için uygun (2 yaş ve altı)
                </div>
              </div>
            </div>
            <div class="col-4 mt-1">
              <div class="row">
                <div class="col-12">
                  <h6 class="mt-2 font-weight-bold">Sağlık ve güvenlik</h6>
                </div>
                <div class="col-1 mt-3">
                  <img src="./İcons/spray.png" alt />
                </div>
                <div class="col-10 ml-3 mt-3">
                  Bedfied'ın üstün temizlik sürecine uymayı taahhüt etmiştir.
                </div>
                <div class="col-1 mt-3">
                  <img src="./İcons/disinfectant.png" alt />
                </div>
                <div class="col-10 ml-3 mt-3">
                  Bedfied'ın sosyal mesafe ve COVID-19 ile ilgili diğer
                  kuralları geçerlidir.
                </div>
                <div class="col-1 mt-4">
                  <img src="./İcons/carbon-monoxide.png" alt />
                </div>
                <div class="col-10 ml-3 mt-4">
                  Karbonmonoksit alarmı bildirilmedi.
                </div>
                <div class="col-1 mt-4">
                  <img src="./İcons/smoke-detector.png" alt />
                </div>
                <div class="col-10 ml-3 mt-4">
                  Duman dedektörü bildirilmedi.
                </div>
              </div>
            </div>
            <div class="col-4 mt-1">
              <div class="row">
                <div class="col-12">
                  <h6 class="mt-2 font-weight-bold">İptal politikası</h6>
                </div>
                <div class="col-1 mt-3">
                  <img src="./İcons/calendar.png" alt />
                </div>
                <div class="col-10 ml-3 mt-3">
                  Bu konaklamanın iptal edilmesiyle ilgili ayrıntıları görmek
                  için seyahat tarihlerinizi ekleyin.
                </div>
              </div>
            </div>
          </div>
          <hr class="w-100 d-block mx-auto my-5" />
        </div>
      </div>
      <!-- Daha fazla konaklama yeri -->
      <div class="containers">
        <div class="row">
          <div class="col-12 mb-4">
            <h3 class="font-weight-bold">Daha fazla konaklama yeri</h3>
          </div>

          <div class="d-block mx-auto w-100">
            <GmapMap
              :center="centerTurkey"
              :zoom="6"
              map-type-id="roadmap"
              style="
                width: 100% !important;
                height: 405px;
                overflow: hidden;
                border-radius: 15px;
              "
              :options="mapStyle"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in newAllData"
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
                  style="width: 18rem; height: auto; border-radius: 20px"
                  v-html="infoContent"
                ></div>
              </gmap-info-window>
            </GmapMap>
          </div>
        </div>
      </div>
      <div style="height: 100px"></div>
    </div>
    <transition name="home" v-if="photoDetails">
      <div class="container-fluid container-photo">
        <div class="row">
          <div class="col-md-12 mb-3">
            <h1
              @click.prevent="showHomeDetails"
              class="back-photo"
              style="cursor: pointer"
            >
              <i class="fas fa-arrow-alt-circle-left text-dark mr-2"></i>
              Geri dön
            </h1>
          </div>
          <div class="col-md-12 w-100 mb-3" v-if="homeData.videos">
            <header>
              <div class="overlay"></div>
              <video playsinline="playsinline" autoplay controls>
                <source :src="homeData.videos.video" type="video/mp4" />
              </video>
            </header>
          </div>
          <div
            class="col-md-5 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[0] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[0].photo
              "
              alt=""
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
            />
          </div>
          <div
            class="col-md-7 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[1] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[1].photo
              "
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
              alt=""
            />
          </div>
          <div
            class="col-md-7 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[2] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[2].photo
              "
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
              alt=""
            />
          </div>

          <div
            class="col-md-5 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[3] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[3].photo
              "
              alt=""
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
            />
          </div>
          <div
            class="col-md-5 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[4] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[4].photo
              "
              alt=""
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
            />
          </div>
          <div
            class="col-md-7 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[5] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[5].photo
              "
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
              alt=""
            />
          </div>
          <div
            class="col-md-7 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[6] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[6].photo
              "
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
              alt=""
            />
          </div>

          <div
            class="col-md-5 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[7] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[7].photo
              "
              alt=""
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
            />
          </div>
          <div
            class="col-md-5 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[8] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[8].photo
              "
              alt=""
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
            />
          </div>
          <div
            class="col-md-7 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[9] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[9].photo
              "
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
              alt=""
            />
          </div>
          <div
            class="col-md-7 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[10] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[10].photo
              "
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
              alt=""
            />
          </div>

          <div
            class="col-md-5 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[11] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[11].photo
              "
              alt=""
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
            />
          </div>
          <div
            class="col-md-5 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[12] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[12].photo
              "
              alt=""
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
            />
          </div>
          <div
            class="col-md-7 col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[13] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[13].photo
              "
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
              alt=""
            />
          </div>
          <div
            class="col-md-7 d-block mx-auto col-sm-12 col-xs-12 mb-3"
            style="height: 390px !important"
          >
            <img
              :src="
                homeData.photos[14] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[14].photo
              "
              class="w-100 h-100"
              style="object-fit: cover; border-radius: 10px"
              alt=""
            />
          </div>
        </div>
      </div>
    </transition>
    <!-- Rezervasyon detayları -->
    <transition name="home">
      <div class="container mt-3" v-if="priceDetails">
        <div class="row rezervation-detail-pc width-pc-rezerve">
          <div class="col-6">
            <h1 class="text-center">
              <i
                class="fas fa-arrow-alt-circle-left h2 mr-2"
                style="color: #f93b3b !important; cursor: pointer"
                @click.prevent="showHomeDetails"
              ></i>
              Rezervasyon isteği gönderin
            </h1>
            <div
              class="card mt-4"
              style="border-radius: 20px !important; border: 1px solid #f93b3b"
            >
              <div class="row">
                <div class="col-9 ml-4 p-3">
                  <h5>Bu nadir bulunan bir fırsat</h5>
                  <p>
                    <span v-if="userProfileData.fullName">
                      {{
                        userProfileData.fullName == null
                          ? "İsim belirtilmemiş"
                          : userProfileData.fullName
                      }}</span
                    ><span v-else>İsim yok</span> adlı kişinin evi genellikle
                    rezerve edilir.
                  </p>
                </div>
                <div class="col-2">
                  <i
                    class="far fa-gem d-flex justify-content-center"
                    style="font-size: 24px; color: #f93b3b; margin-top: 33px"
                  ></i>
                </div>
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-12 mt-4 mb-3">
                <h3 class="font-weight-bold text-center">Ödeme</h3>
              </div>
              <div
                :class="guestHaveCardError ? 'col-12 button-click mb-1' : 'col-12 button-click mb-3'"
                v-if="creditCardData.lastFourDigits != null"
                @click.prevent="guestHaveCreditCardShow"
                id="scrolPay"
              >
                <div :class="cardHaveErrorBorder ? 'card border border-danger' : 'card border border-dark'" style="cursor: pointer">
                  <div class="row p-0 m-0">
                    <div class="col-2">
                      <img
                        src="./İcons/masterCard.png"
                        alt=""
                        v-if="masterCard"
                      />

                      <img src="./İcons/visa (2).png" alt="" v-if="visa" />

                      <img
                        src="./İcons/american-express (2).png"
                        alt=""
                        v-if="americanExpress"
                      />
                    </div>
                    <div
                      class="col-8 text-center"
                      :style="visa ? 'margin-top: 15px' : 'margin-top: 8px'"
                    >
                      <span style="font-size: 22px" class="text-center"
                        >TR  {{cardFirstFourNumber}}
                      {{cardFirstTwoNumber}}** ****
                        {{ creditCardData.lastFourDigits }}</span
                      >
                    </div>
                    <div class="col-2">
                      <img
                        src="./İcons/checked (3).png"
                        :style="visa ? 'margin-top: 18%' : 'margin-top:17%'"
                        v-if="guestHaveCreditCard"
                        alt=""
                      />
                      <img
                        src="./İcons/cancel (1).png"
                        :style="visa ? 'margin-top: 18%' : 'margin-top:17%'"
                        v-if="!guestHaveCreditCard"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

              </div>
               <div v-if="guestHaveCardError" class="text-danger d-block mx-auto  mb-2 mt-1">{{guestHaveCardErrorMessage}}</div>
              <div class="col-12" @click.prevent="createCardShow">
                <div class="card border border-dark" style="cursor: pointer">
                  <div class="row">
                    <div class="col-1">
                      <i class="far fa-credit-card p-3"></i>
                    </div>
                    <div class="col-8" style="margin-top: 8px">
                      <span style="font-size: 22px" class="text-center"
                        >Kredi veya banka kartı</span
                      >
                    </div>
                    <div class="col-3 d-flex justify-content-end">
                      <i class="fas fa-chevron-down p-3"></i>
                    </div>
                  </div>
                </div>
              </div>

              <transition name="home" v-if="createCard">
                <div class="col-12 mt-4">
                  <div
                    class="card border border-dark"
                    style="border-radius: 40px"
                  >
                    <div class="row p-5">
                      <div class="col-12">
                        <label for="cno" :class="cardNumberBorder ? 'font-weight-bold text-danger' : 'font-weight-bold'">
                          Kart Numarası
                          <i class="fas fa-lock"></i>
                        </label>
                        <input
                          type="number"
                          name="card-num"
                          
                          :class="cardNumberBorder ? 'form-control border border-danger' : 'form-control border border-dark'"
                          placeholder=" 0000 0000 0000 0000"
                          size="17"
                          v-model="cardData.cardNumber"
                          id="cardNumber"
                          minlength="16"
                          maxlength="16"
                        />
                        <small
                          v-if="guestCardIbanError"
                          class="text-danger mt-1 font-weight-bold"
                          >{{ guestCardIbanErrorMessage }} !!</small
                        >
                      </div>
                      <div class="col-12 mt-3">
                        <label for="cno" :class="cardNameBorder ? 'font-weight-bold text-danger' : 'font-weight-bold'">
                          Kart Sahibinin Adı Soyadı
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          v-model="cardData.cardName"
                          :class="cardNameBorder ? 'form-control border border-danger' : 'form-control border border-dark'"
                          placeholder="AD SOYAD"
                          id="cardName"
                        />
                        <small
                          v-if="guestCardNameError"
                          class="text-danger mt-1 font-weight-bold"
                          >{{ guestCardNameErrorMessage }} !!</small
                        >
                      </div>
                      <div class="col-8 mt-3">
                        <label
                          :class="cardMmBorder ? 'font-weight-bold text-danger' : 'font-weight-bold'"
                          style="text-align: center !important"
                          for="endDate"
                          >Son kullanma tarihi</label
                        >
                        <div class="d-flex">
                          <input
                            type="number"
                            name="expityMonth"
                            placeholder=" MM"
                            v-model="cardData.cardMm"
                            id="expityMonth"
                            :class="cardMmBorder ? 'form-control border border-danger w-50 mr-2' : 'form-control border border-dark w-50 mr-2'"
                          />

                          <input
                            type="number"
                            :class="cardYyBorder ? 'form-control border border-danger w-50' : 'form-control border border-dark w-50'"
                            id="expityYear"
                            placeholder="YYYY"
                            v-model="cardData.cardYy"
                            required
                          />
                        </div>
                        <small
                          v-if="guestCardMmError"
                          class="text-danger mt-1 font-weight-bold"
                          >{{ guestCardMmErrorMessage }} !!</small
                        >
                        <small
                          class="text-danger font-weight-bold"
                          style="margin-left: 52% !important"
                          v-if="guestCardYyError"
                          >{{ guestCardYyErrorMessage }} !!</small
                        >
                      </div>
                      <div class="col-4 mt-3">
                        <label :class="cardCvcBorder ? 'font-weight-bold text-danger' : 'font-weight-bold'" for="Cvc"
                          >CVC</label
                        >
                        <br />
                        <input
                          type="number"
                          name="Cvc"
                          placeholder="123"
                          v-model="cardData.cardCvc"
                          size="1"
                          id="expityCvc"
                          minlength="3"
                          maxlength="3"
                          :class="cardCvcBorder ? 'form-control border border-danger' : 'form-control border border-dark'"
                          
                        />
                        <small
                          v-if="guestCardCvcError"
                          class="text-danger mt-1 font-weight-bold"
                          >{{ guestCardCvcErrorMessage }} !!</small
                        >
                      </div>
                      <div class="col-12">
                        <div
                          v-if="guestCardAnotherError"
                          class="text-danger mt-5 text-center font-weight-bold"
                        >
                          {{ guestCardAnotherErrorMessage }} !!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>

              <div class="col-12 mt-5">
                <div
                  class="pop-up card"
                  style="border: 1px solid #f93b3b"
                  v-if="popupInfo"
                >
                  <h6 class="p-3">
                    Bu konaklamanın rezervasyonunu tamamlamak için ev sahibinize
                    bir mesaj yazın.
                  </h6>
                </div>
                <h4 class="font-weight-bold">
                  Seyahatiniz için gerekli
                  <i
                    @click.prevent="popupInfo = !popupInfo"
                    class="fa fa-info-circle h4 ml-1"
                    style="color: #f93b3b; cursor: pointer"
                  ></i>
                </h4>
                <h5 class="font-weight-bold mt-4">Ev sahibine mesaj gönder</h5>
                <h6>
                  Seyahat nedeninizi ve ne zaman giriş yapacağınızı ev sahibine
                  bildirin.
                </h6>
                <div class="row mt-5">
                  <div class="col-1">
                    <img
                      :src="
                        userProfileData.profileImage == null
                          ? './Icons/user.png'
                          : userProfileData.profileImage
                      "
                      width="50"
                      class="rounded-circle"
                      height="50"
                      alt="Yükleniyor.."
                      style="object-fit: cover"
                    />
                  </div>
                  <div class="col-11">
                    <h6 class="font-weight-bold mt-1 ml-3 mb-0">
                      {{
                        userProfileData.fullName == null
                          ? "İsim Yok"
                          : userProfileData.fullName
                      }}
                    </h6>
                    <p class="font-weight-bold text-muted ml-3 mt-0">
                      Ev sahibi
                    </p>
                  </div>
                  <div class="col-12 mt-3">
                    <textarea
                      name="message"
                      class="form-control border border-dark"
                      id
                      placeholder="Evinizi belirttiğim tarihler arasında rezerve etmek istiyorum sizin için de uygun mu aceba?"
                      cols="20"
                      rows="5"
                      v-model="sendTravelModeDetails.travelsMessage"
                    ></textarea>
                  </div>
                  <div class="col-12 mt-5">
                    <h4 class="font-weight-bold mb-4">İptal politikası</h4>
                    <div class="card p-4" style="border: 1px solid #f93b3b">
                      <div class="row">
                        <div class="col-2 d-flex justify-content-center mt-5">
                          <i
                            class="far fa-clock"
                            style="font-size: 30px; color: #f93b3b"
                          ></i>
                        </div>
                        <div class="col-10 font-weight-bold">
                          Ev sahibi  isteğinizi kabul edene
                          kadar rezervasyonunuz onaylanmayacaktır.
                          <br />
                          <br />
                          <span class="font-weight-normal">
                            O zamana kadar istediğiniz zaman iptal edebilir ve
                            ödemenizi eksiksiz bir şekilde geri alabilirsiniz.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="btn text-white btn-md my-5 d-block mx-auto"
                  style="background: #f93b3b"
                  @click.prevent="rezervationData"
                  :disabled="$v.$invalid"
                  v-if="!loadedButton"
                >
                  Rezervasyon isteği gönderin
                </button>
                <button
                  v-if="loadedButton"
                  id="loaded-button-color"
                  class="btn btn-lg my-5 d-block mx-auto"
                >
                  <div class="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="card p-3 shadow-lg card-price-position"
              style="border-radius: 40px; margin-left: 60px"
            >
              <div class="row p-3">
                <div class="col-3">
                  <img
                    style="object-fit: cover"
                    :src="homeData.photos[0].photo"
                    width="150"
                    height="150"
                    alt
                    class="rounded"
                  />
                </div>
                <div class="col-7 offset-2 mt-3">
                  <h5>
                    {{ homeData.county }} bölgesinde
                    {{ homeData.houseStayType }}
                  </h5>
                  <h6 class="text-muted mb-4">
                    {{ homeData.bed }} yatak {{ homeData.bathroom }} banyo
                  </h6>
             <i  v-if="generalEvaluation != null && evaluationData.length != 0"         
 class="fa fa-star" style="color: #f93b3b"></i>
          <span  v-if="generalEvaluation != null && evaluationData.length != 0"         
 class="font-weight-bold">{{ generalEvaluation }}({{ evaluationData.length
          }}
          değerlendirme)</span> 
            <i
              class="fas fa-star"
              style="color: #f93b3b;"
              v-if="nullEvaluation"
            ></i>
            <span
             v-if="nullEvaluation"         
            class="text-muted"
              >Yeni (Değerlendirme yok)</span
            >
                  <i class="fa fa-check-circle" style="color: #f93b3b"></i>
                  Süper ev sahibi
                </div>
                <div class="col-12 mt-4">
                  <hr />
                </div>
                <div class="col-12">
                  <h4 class="font-weight-bold mb-3">Fiyat ayrıntıları</h4>
                </div>
                <div class="col-6">
                  {{ homeData.price }}₺ x {{ lastDay }} gece
                </div>
                <div class="col-6 my-2 text-right">
                  {{ homeData.price * lastDay }}₺
                </div>
                <div class="col-6 my-2">Hizmet bedeli</div>
                <div class="col-6 my-2 text-right">
                  {{ Math.round(homeData.price * lastDay * (8 / 100)) }}₺
                </div>
                <div class="col-6 my-2 font-weight-bold">Toplam (TRY)</div>
                <div class="col-6 my-2 text-right font-weight-bold">
                  {{
                    Math.round(
                      homeData.price * lastDay +
                        homeData.price * lastDay * (8 / 100)
                    )
                  }}₺
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row rezervation-detail-mobile">
          <div class="col-12">
            <h4 class="text-center">
              <i
                class="fas fa-arrow-alt-circle-left h4 mr-2"
                style="color: #f93b3b !important; cursor: pointer"
                @click.prevent="showHomeDetails"
              ></i>
              Rezervasyon isteği gönderin
            </h4>
            <div
              class="card mt-4"
              style="border-radius: 20px !important; border: 1px solid #f93b3b"
            >
              <div class="row">
                <div class="col-7 ml-4 p-2">
                  <h6 class="font-weight-bold mt-1">
                    Bu nadir bulunan bir fırsat
                  </h6>
                  <p>
                    <span v-if="userProfileData.fullName">
                      {{
                        userProfileData.fullName == null
                          ? "İsim belirtilmemiş"
                          : userProfileData.fullName
                      }}</span
                    ><span v-else>İsim yok</span> adlı kişinin evi genellikle
                    rezerve edilir.
                  </p>
                </div>
                <div class="col-4">
                  <i
                    class="far fa-gem d-flex justify-content-center"
                    style="font-size: 24px; color: #f93b3b; margin-top: 50%"
                  ></i>
                </div>
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-12 mt-4 mb-3">
                <h3 class="font-weight-bold text-center">Ödeme</h3>
              </div>
                <div
                :class="guestHaveCardError ? 'col-12 button-click mb-1' : 'col-12 button-click mb-3'"
                v-if="creditCardData.lastFourDigits != null"
                @click.prevent="guestHaveCreditCardShow"
                id="scrolPay"
              >
                <div :class="cardHaveErrorBorder ? 'card border border-danger' : 'card border border-dark'" style="cursor: pointer">
                  <div class="row p-0 m-0">
                    <div class="col-2">
                      <img
                        src="./İcons/masterCard.png"
                        alt=""
                        v-if="masterCard"
                      />

                      <img src="./İcons/visa (2).png" alt="" v-if="visa" />

                      <img
                        src="./İcons/american-express (2).png"
                        alt=""
                        v-if="americanExpress"
                      />
                    </div>
                    <div
                      class="col-9 pl-4 text-center"
                      :style="visa ? 'margin-top: 15px' : 'margin-top: 15px'"
                    >
                      <span style="font-size: 17px" class="text-center"
                        >TR  {{cardFirstFourNumber}}
                      {{cardFirstTwoNumber}}** ****
                        {{ creditCardData.lastFourDigits }}</span
                      >
                    </div>
                    <div class="col-1 p-0 m-0">
                      <img
                        src="./İcons/checked (3).png"
                        :style="visa ? 'margin-top: 35% ; margin-left:-15px' : 'margin-top:35% ; margin-left:-15px'"
                        v-if="guestHaveCreditCard"
                        alt=""
                      />
                      <img
                        src="./İcons/cancel (1).png"
                        :style="visa ? 'margin-top: 35% ; margin-left:-15px' : 'margin-top:35% ; margin-left:-15px'"
                        v-if="!guestHaveCreditCard"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

              </div>
          <div v-if="guestHaveCardError" class="text-danger d-block mx-auto  mb-2 mt-1">{{guestHaveCardErrorMessage}}</div>

              <div class="col-12" @click.prevent="createCardShow">
                <div class="card border border-dark" style="cursor: pointer">
                  <div class="row">
                    <div class="col-1">
                      <i class="far fa-credit-card p-3"></i>
                    </div>
                    <div class="col-8 ml-3" style="margin-top: 8px">
                      <span style="font-size: 20px" class="text-center"
                        >Kredi veya banka kartı</span
                      >
                    </div>
                    <div class="col-2 d-flex justify-content-end">
                      <i class="fas fa-chevron-down p-3"></i>
                    </div>
                  </div>
                </div>
              </div>
              <transition name="home" v-if="createCard">
                <div class="col-12 mt-4">
                  <div
                    class="card border border-dark"
                    style="border-radius: 40px"
                  >
                    <div class="row p-4">
                      <div class="col-12">
                       <label for="cno" :class="cardNumberBorder ? 'font-weight-bold text-danger' : 'font-weight-bold'">
                          Kart Numarası
                          <i class="fas fa-lock"></i>
                        </label>
                        <input
                          type="number"
                          name="card-num"
                          
                          :class="cardNumberBorder ? 'form-control border border-danger' : 'form-control border border-dark'"
                          placeholder=" 0000 0000 0000 0000"
                          size="17"
                          v-model="cardData.cardNumber"
                          id="cardNumber"
                          minlength="16"
                          maxlength="16"
                        />
                        <small
                          v-if="guestCardIbanError"
                          class="text-danger mt-1 font-weight-bold"
                          >{{ guestCardIbanErrorMessage }} !!</small
                        >
                      </div>
                      <div class="col-12 mt-3">
                        <label for="cno" :class="cardNameBorder ? 'font-weight-bold text-danger' : 'font-weight-bold'">
                          Kart Sahibinin Adı Soyadı
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          v-model="cardData.cardName"
                          :class="cardNameBorder ? 'form-control border border-danger' : 'form-control border border-dark'"
                          placeholder="AD SOYAD"
                          id="cardName"
                        />
                        <small
                          v-if="guestCardNameError"
                          class="text-danger mt-1 font-weight-bold"
                          >{{ guestCardNameErrorMessage }} !!</small
                        >
                     
                      </div>
                      <div class="col-8 mt-3">
                          <label
                          :class="cardMmBorder ? 'font-weight-bold text-danger' : 'font-weight-bold'"
                          style="text-align: center !important"
                          for="endDate"
                          >Son kullanma tarihi</label
                        >
                        <div class="d-flex">
                          <input
                            type="number"
                            name="expityMonth"
                            placeholder=" MM"
                            v-model="cardData.cardMm"
                            id="expityMonth"
                            :class="cardMmBorder ? 'form-control border border-danger w-50 mr-2' : 'form-control border border-dark w-50 mr-2'"
                          />

                          <input
                            type="number"
                            :class="cardYyBorder ? 'form-control border border-danger w-50' : 'form-control border border-dark w-50'"
                            id="expityYear"
                            placeholder="YYYY"
                            v-model="cardData.cardYy"
                            required
                          />
                        </div>
                        <small
                          v-if="guestCardMmError"
                          class="text-danger mt-1 font-weight-bold"
                          >{{ guestCardMmErrorMessage }} !!</small
                        >
                        <small
                          class="text-danger font-weight-bold"
                          style="margin-left: 52% !important"
                          v-if="guestCardYyError"
                          >{{ guestCardYyErrorMessage }}</small
                        >
                       
                      </div>
                         <div class="col-4 mt-3">
                        <label :class="cardCvcBorder ? 'font-weight-bold text-danger' : 'font-weight-bold'" for="Cvc"
                          >CVC</label
                        >
                        <br />
                        <input
                          type="number"
                          name="Cvc"
                          placeholder="123"
                          v-model="cardData.cardCvc"
                          size="1"
                          id="expityCvc"
                          minlength="3"
                          maxlength="3"
                          :class="cardCvcBorder ? 'form-control border border-danger' : 'form-control border border-dark'"
                          
                        />
                        <small
                          v-if="guestCardCvcError"
                          class="text-danger mt-1 font-weight-bold"
                          >{{ guestCardCvcErrorMessage }} !!</small
                        >
                      </div>
                      <div class="col-12">
                        <div
                          v-if="guestCardAnotherError"
                          class="text-danger mt-5 text-center font-weight-bold"
                        >
                          {{ guestCardAnotherErrorMessage }} !!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>

              <div class="col-12 mt-5">
                <div
                  class="mb-3 card"
                  style="border: 1px solid #f93b3b"
                  v-if="popupInfo"
                >
                  <h6 class="p-3">
                    Bu konaklamanın rezervasyonunu tamamlamak için ev sahibinize
                    bir mesaj yazın.
                  </h6>
                </div>
                <h4 class="font-weight-bold">
                  Seyahatiniz için gerekli
                  <i
                    @click.prevent="popupInfo = !popupInfo"
                    class="fa fa-info-circle h4 ml-1"
                    style="color: #f93b3b; cursor: pointer"
                  ></i>
                </h4>
                <h5 class="font-weight-bold mt-4">Ev sahibine mesaj gönder</h5>
                <h6>
                  Seyahat nedeninizi ve ne zaman giriş yapacağınızı ev sahibine
                  bildirin.
                </h6>
                <div class="row mt-5">
                  <div class="col-2">
                    <img
                      :src="
                        userProfileData.profileImage == null
                          ? './Icons/user.png'
                          : userProfileData.profileImage
                      "
                      width="60"
                      class="rounded-circle"
                      height="60"
                      alt="Yükleniyor.."
                      style="object-fit: cover"
                    />
                  </div>
                  <div class="col-10">
                    <h6 class="font-weight-bold mt-2 ml-3 mb-0">
                      {{
                        userProfileData.fullName == null
                          ? "İsim Yok"
                          : userProfileData.fullName
                      }}
                    </h6>
                    <p class="font-weight-bold text-muted ml-3 mt-0">
                      Ev sahibi
                    </p>
                  </div>
                  <div class="col-12 mt-3">
                    <textarea
                      name="message"
                      class="form-control border border-dark"
                      id
                      placeholder="Evinizi belirttiğim tarihler arasında rezerve etmek istiyorum sizin için de uygun mu aceba?"
                      cols="20"
                      rows="5"
                      v-model="sendTravelModeDetails.travelsMessage"
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 mt-3">
                    <div
                      class="card p-3 m-0 shadow-lg"
                      style="border-radius: 40px"
                    >
                      <div class="row p-2">
                        <div class="col-3">
                          <img
                            style="object-fit: cover"
                            :src="homeData.photos[0].photo"
                            width="90"
                            height="90"
                            alt
                            class="rounded mt-4"
                          />
                        </div>
                        <div class="col-7 offset-2 mt-2">
                          <h6>
                            {{ homeData.county }} bölgesinde
                            {{ homeData.houseStayType }}
                          </h6>
                          <h6 class="text-muted mb-2">
                            {{ homeData.bed }} yatak
                            {{ homeData.bathroom }} banyo
                          </h6>
                            <i  v-if="generalEvaluation != null && evaluationData.length != 0"         
 class="fa fa-star" style="color: #f93b3b"></i>
          <span  v-if="generalEvaluation != null && evaluationData.length != 0"         
 class="font-weight-bold">{{ generalEvaluation }}({{ evaluationData.length
          }}
          değerlendirme)</span> 
            <i
              class="fas fa-star"
              style="color: #f93b3b;"
              v-if="nullEvaluation"
            ></i>
            <span
             v-if="nullEvaluation"         
            class="text-muted"
              >Yeni (Değerlendirme yok)</span
            >
                          <br />
                          <i
                            class="fa fa-check-circle"
                            style="color: #f93b3b"
                          ></i>
                          Süper ev sahibi
                        </div>
                        <div class="col-12 mt-1">
                          <hr />
                        </div>
                        <div class="col-12">
                          <h4 class="font-weight-bold mb-3">
                            Fiyat ayrıntıları
                          </h4>
                        </div>
                        <div class="col-6">
                          {{ homeData.price }}₺ x {{ lastDay }} gece
                        </div>
                        <div class="col-6 my-2 text-right">
                          {{ homeData.price * lastDay }}₺
                        </div>
                        <div class="col-6 my-2">Hizmet bedeli</div>
                        <div class="col-6 my-2 text-right">
                          {{
                            Math.round(homeData.price * lastDay * (8 / 100))
                          }}₺
                        </div>
                        <div class="col-6 my-2 font-weight-bold">
                          Toplam (TRY)
                        </div>
                        <div class="col-6 my-2 text-right font-weight-bold">
                          {{
                            Math.round(
                              homeData.price * lastDay +
                                homeData.price * lastDay * (8 / 100)
                            )
                          }}₺
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 m-0 mt-5">
                    <h4 class="font-weight-bold mb-4">İptal politikası</h4>
                    <div class="card p-3" style="border: 1px solid #f93b3b">
                      <div class="row">
                        <div class="col-2 mt-4">
                          <i
                            class="far fa-clock"
                            style="font-size: 30px; color: #f93b3b"
                          ></i>
                        </div>
                        <div class="col-10 font-weight-bold">
                          Ev sahibi isteğinizi kabul edene
                          kadar rezervasyonunuz onaylanmayacaktır.
                          <br />
                          <br />
                          <span class="font-weight-normal">
                            O zamana kadar istediğiniz zaman iptal edebilir ve
                            ödemenizi eksiksiz bir şekilde geri alabilirsiniz.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="btn text-white btn-md my-5 d-block mx-auto"
                  style="background: #f93b3b"
                  @click.prevent="rezervationData"
                  :disabled="$v.$invalid"
                  v-if="!loadedButton"
                >
                  Rezervasyon isteği gönderin
                </button>
                <button
                  v-if="loadedButton"
                  id="loaded-button-color"
                  class="btn btn-lg my-5 d-block mx-auto"
                >
                  <div class="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Rezervasyon detayları  bitiş -->
    <!-- Bu sayfanın mobil versiyonu -->
    <div
      class="container mobile-detail"
      style="height: auto; margin-top: -6%"
      v-if="mobileDetail"
    >
      <div class="row p-2 bg-light w-120 container-header" style="height: auto">
        <div
          class="col-1"
          @click.prevent="$router.push('/homes')"
          style="cursor: pointer"
        >
          <i
            class="fas fa-chevron-left"
            style="font-size: 16px; margin-top: 10px"
          ></i>
        </div>
        <div
          class="col-5 p-0"
          @click.prevent="$router.push('/homes')"
          style="cursor: pointer"
        >
          <h6 class="ml-2 mt-2">Evler Bedfied</h6>
        </div>
        <div class="col-2 p-0 offset-3">
          <i
            class="far fa-heart mt-2 text-dark d-flex justify-content-end"
            style="font-size: 22px"
          ></i>
        </div>
      </div>

      <div
        id="carouselExampleIndicators"
        class="carousel slide mt-3"
        data-ride="carousel"
      >
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
        <div
          class="carousel-inner"
          @click.prevent="showPhotos"
          style="cursor: pointer"
        >
          <div class="carousel-item active">
            <img
              :src="
                homeData.photos[0] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[0].photo
              "
              alt="First slide"
              height="200"
              style="width: 100%; object-fit: cover; border-radius: 10px"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                homeData.photos[1] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[1].photo
              "
              alt="Second slide"
              height="200"
              style="width: 100%; object-fit: cover; border-radius: 10px"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                homeData.photos[2] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[2].photo
              "
              alt="Third slide"
              height="200"
              style="width: 100%; object-fit: cover; border-radius: 10px"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                homeData.photos[3] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[3].photo
              "
              alt="Third slide"
              height="200"
              style="width: 100%; object-fit: cover; border-radius: 10px"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="
                homeData.photos[4] == undefined
                  ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                  : homeData.photos[4].photo
              "
              alt="Third slide"
              height="200"
              style="width: 100%; object-fit: cover; border-radius: 10px"
            />
          </div>
          <button
            @click.prevent="showPhotos"
            class="btn btn-dark btn-sm"
            style="position: absolute; bottom: 10px; right: 10px; z-index: 22"
          >
            1/{{ homeData.photos.length }}
          </button>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="row p-2 mt-3">
        <div class="col-12">
          <h3 class="font-weight-bold w-75">
            {{ homeData.title }}
          </h3>
        </div>
        <div class="col-12 my-2">             
          <i  v-if="generalEvaluation != null && evaluationData.length != 0"         
 class="fa fa-star" style="color: #f93b3b"></i>
          <span  v-if="generalEvaluation != null && evaluationData.length != 0"         
 class="font-weight-bold">{{ generalEvaluation }}({{ evaluationData.length
          }}
          değerlendirme)</span> 
            <i
              class="fas fa-star"
              style="color: #f93b3b;"
              v-if="nullEvaluation"
            ></i>
            <span
             v-if="nullEvaluation"         
            class="text-muted"
              >Yeni (Değerlendirme yok)</span
            >
        </div>
        <div class="col-12">
          <h6 style="font-family: inherit !important">
            {{ homeData.county }} , Türkiye
          </h6>
          <hr />
        </div>
        <div class="col-9">
          <span class="font-weight-bold">Bu nadir bulunan bir fırsat.</span>
          <span v-if="userProfileData.fullName">
            {{
              userProfileData.fullName == null
                ? "İsim belirtilmemiş"
                : userProfileData.fullName
            }}</span
          ><span v-else>İsim yok</span> adlı ev sahibinin Bedfied'daki yeri
          genellikle rezerve edilmiş olur.
        </div>
        <div class="col-3">
          <img class="mt-2" src="./İcons/gems (1).png" alt="" />
        </div>
        <div class="col-12 mb-2">
          <hr />
        </div>
        <div class="col-9 font-weight-bold">
          {{ homeData.houseType }} <br />
          Ev sahibi:
          <span v-if="userProfileData.fullName">
            {{
              userProfileData.fullName == null
                ? "İsim belirtilmemiş"
                : userProfileData.fullName
            }}</span
          ><span v-else>İsim yok</span>
        </div>
        <div class="col-2">
          <img
            :src="
              userProfileData.profileImage == null
                ? './İcons/user.png'
                : userProfileData.profileImage
            "
            class="rounded-circle"
            style="object-fit: cover"
            height="60"
            width="60"
            alt="Yükleniyor.."
            v-if="userProfileData.profileImage"
          />
          <img
            src="./İcons/user.png"
            class="rounded-circle"
            style="object-fit: cover"
            height="60"
            width="60"
            alt="Yükleniyor.."
            v-else
          />
          <div class="col-1" style="margin-top: -25px; margin-left: 25px">
            <img src="./İcons/checked.png" alt />
          </div>
        </div>
        <div class="col-12 mt-3">
          {{ homeData.peopleCounty }} misafir
          {{ Math.floor(homeData.bed / 2) }} yatak odası
          {{ homeData.bed }} yatak {{ homeData.bathroom }} banyo
        </div>
        <div class="col-12">
          <hr />
        </div>
        <div class="col-1 mb-2">
          <hr />
          <img
            src="./İcons/university.png"
            alt
            v-if="homeData.houseType == 'İkincil birim'"
          />
          <img
            src="./İcons/house (2).png"
            v-if="homeData.houseType == 'Oda kahvaltı'"
            alt
          />
          <img
            src="./İcons/hotel.png"
            alt
            v-if="homeData.houseType == 'Butik otel'"
          />
          <img src="./İcons/house.png" alt v-if="homeData.houseType == 'Ev'" />
          <img
            src="./İcons/apartment.png"
            alt
            v-if="homeData.houseType == 'Apartman dairesi'"
          />
          <img
            src="./İcons/cottage.png"
            alt
            v-if="homeData.houseType == 'Benzersiz yer'"
          />
        </div>
        <div class="col-10 mt-4 ml-3 mb-2">
          <span class="font-weight-bold ml-2" style="font-size: 20px">{{
            homeData.houseType
          }}</span>
          <br />
          <span class="ml-2"
            >{{ homeData.houseStayType }} size ait olacak.</span
          >
        </div>
        <div class="col-1 mb-2 mt-5">
          <img src="./İcons/soaps.png" alt />
        </div>
        <div class="col-10 mt-4 ml-4 mb-2">
          <span class="font-weight-bold" style="font-size: 20px"
            >Üstün temizlik</span
          >
          <br />
          Bu ev sahibi Bedfied'da ki üstün temizlik sürecine uymayı taahhüt
          etmiştir.
        </div>
        <div class="col-1 mb-2 mt-5">
          <img class="mt-4" src="./İcons/checked (3).png" alt />
        </div>
        <div class="col-10 mt-4 ml-4 mb-2">
          <span class="font-weight-bold" style="font-size: 20px"
            >Süper ev sahibi</span
          >
          <br />
          Süper ev sahipleri, kendileri için mükemmel konaklamalar sunmaya
          adanmış deneyimli, yüksek puanlı ev sahipleridir.
        </div>
        <div class="col-1 mb-2 mt-5">
          <img class="mt-2" src="./İcons/rejected.png" alt />
        </div>
        <div class="col-10 mt-4 ml-4 mb-2">
          <span class="font-weight-bold" style="font-size: 20px"
            >İptal politikası</span
          >
          <br />

          Bu konaklamanın iptal edilmesiyle ilgili ayrıntıları görmek için
          seyahat tarihlerinizi ekleyin.
        </div>
        <div class="col-1 mb-2 mt-5">
          <img src="./İcons/compliant.png" alt />
        </div>
        <div class="col-10 mt-4 ml-4 mb-2">
          <span class="font-weight-bold" style="font-size: 20px"
            >Ev kuralları</span
          >
          <br />

          Ev sahibi ev kurallarını aşşağıda belirtmiştir.
        </div>
        <div class="col-12">
          <hr />
        </div>
        <div class="col-12 mt-2">
          <p style="letter-spacing: 0.5px">
            {{ homeData.promotion }}
          </p>
        </div>
        <div class="col-12">
          <hr />
        </div>
        <div class="col-12 mt-2">
          <h4 class="font-weight-bold mb-5">Uyuma düzeni</h4>
          <div
            class="card w-75 border border-info text-center p-4"
            style="border-radius: 10px"
          >
            <div class="row">
              <div class="col-12 text-center">
                <img src="./İcons/bed.png" alt />
              </div>
            </div>
            <span class="font-weight-bold my-1"
              >{{ Math.floor(homeData.bed / 2) }} Yatak odası</span
            >
            {{ homeData.bed }} yatak
          </div>
        </div>
        <div class="col-12 mt-3 mb-2">
          <hr />
        </div>
        <div class="col-12 mt-2">
          <h4
            class="font-weight-bold mb-3"
            v-if="
              !homeData.wifi &&
              !homeData.basicMaterials &&
              !homeData.washingMachine &&
              !homeData.kitchen &&
              !homeData.tv &&
              !homeData.Iron &&
              !homeData.carPark &&
              !homeData.table &&
              !homeData.airConditioning &&
              !homeData.cabinet &&
              !homeData.pool &&
              !homeData.notFreeCarPark
                ? ''
                : 'Olanaklar'
            "
          >
            Olanaklar
          </h4>
          <div class="row">
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.wifi"
            >
              <img src="./İcons/wifi.png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.wifi"
            >
              <span style="font-size: 20px">Wifi</span>
            </div>
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.basicMaterials"
            >
              <img src="./İcons/soap.png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.basicMaterials"
            >
              <span style="font-size: 20px">Temel Malzemeler</span>
            </div>
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.carPark"
            >
              <img src="./İcons/parking-car.png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.carPark"
            >
              <span style="font-size: 20px">Ücretsiz Otopark</span>
            </div>
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.kitchen"
            >
              <img src="./İcons/kitchen.png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.kitchen"
            >
              <span style="font-size: 20px">Mutfak</span>
            </div>
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.Iron"
            >
              <img src="./İcons/iron.png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.Iron"
            >
              <span style="font-size: 20px">Ütü</span>
            </div>
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.washingMachine"
            >
              <img src="./İcons/washing-machine.png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.washingMachine"
            >
              <span style="font-size: 20px">Çamaşır Makinesi</span>
            </div>
            <div class="col-2 mt-4" style="cursor: pointer" v-if="homeData.tv">
              <img src="./İcons/monitor.png" alt />
            </div>
            <div class="col-10 mt-4" style="cursor: pointer" v-if="homeData.tv">
              <span style="font-size: 20px">TV</span>
            </div>
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.cabinet"
            >
              <img src="./İcons/wardrobe.png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.cabinet"
            >
              <span style="font-size: 20px">Dolap / Çekmeceler</span>
            </div>
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.table"
            >
              <img src="./İcons/chair.png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.table"
            >
              <span style="font-size: 20px">Masa, Sandalye</span>
            </div>
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.airConditioning"
            >
              <img src="./İcons/air-conditioner (1).png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.airConditioning"
            >
              <span style="font-size: 20px">Klima</span>
            </div>
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.pool"
            >
              <img src="./İcons/swimming-pool.png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.pool"
            >
              <span style="font-size: 20px">Havuz</span>
            </div>
            <div
              class="col-2 mt-4"
              style="cursor: pointer"
              v-if="homeData.notFreeCarPark"
            >
              <img src="./İcons/car-park (1).png" alt />
            </div>
            <div
              class="col-10 mt-4"
              style="cursor: pointer"
              v-if="homeData.notFreeCarPark"
            >
              <span style="font-size: 20px">Ücretli otopark</span>
            </div>
          </div>
        </div>
        <div class="col-12 mt-3 mb-2">
          <hr />
        </div>
         <Comments :homeData="homeData" @generalEvaluation="generalEvaluations($event)" />
        <div class="col-12 mb-2">
          <hr />
        </div>
        <div class="col-12 mb-3">
          <h4 class="font-weight-bold">Konum</h4>
        </div>
        <div class="col-12">
          <div>
            <GmapMap
              :center="center"
              :zoom="9"
              map-type-id="roadmap"
              style="
                width: 100%;
                height: 300px;
                border-radius: 10px;
                overflow: hidden;
              "
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                :icon="{ url: require('./İcons/home (4).png') }"
              />
            </GmapMap>
          </div>
        </div>
        <div class="col-12 mt-4 text-center">
          <h6 class="font-weight-bold">{{ homeData.county }} , Türkiye</h6>
        </div>
        <div class="col-12 mt-3 mb-2">
          <hr />
        </div>
        <div class="col-12 mt-2">
          <h4 class="font-weight-bold">Ev kuralları</h4>
        </div>
        <div class="row ml-1 w-100" v-if="homeData.rules">
          <div class="col-1 mt-3" v-if="homeData.rules.childRule">
            <img src="./İcons/children.png" alt />
          </div>
          <div class="col-10 ml-3 mt-3" v-if="homeData.rules.childRule">
            Çocuklar için uygun (2-12 yaş ve altı)
          </div>
          <div class="col-1 mt-3" v-if="homeData.rules.funnyRule">
            <img src="./İcons/celebration.png" alt />
          </div>
          <div class="col-10 ml-3 mt-3" v-if="homeData.rules.funnyRule">
            Etkinliklere , eğlencelere izin veriliyor
          </div>
          <div class="col-1 mt-3" v-if="homeData.rules.animalRule">
            <img src="./İcons/cat.png" alt />
          </div>
          <div class="col-10 ml-3 mt-3" v-if="homeData.rules.animalRule">
            Evcil hayvanlar için uygun
          </div>
          <div class="col-1 mt-3" v-if="homeData.rules.smogeRule">
            <img src="./İcons/cigarrete.png" alt />
          </div>
          <div class="col-10 ml-3 mt-3" v-if="homeData.rules.smogeRule">
            Sigara içilebilir
          </div>
          <div class="col-1 mt-3" v-if="homeData.rules.babyRule">
            <img src="./İcons/baby-boy.png" alt />
          </div>
          <div class="col-10 ml-3 mt-3" v-if="homeData.rules.babyRule">
            Bebekler için uygun (2 yaş ve altı)
          </div>
        </div>
        <div class="col-12 mt-4">
          <hr />
        </div>
        <div class="row ml-1 w-100">
          <div class="col-12">
            <h5 class="mt-2 font-weight-bold">Sağlık ve güvenlik</h5>
          </div>
          <div class="col-1 mt-3">
            <img class="mt-1" src="./İcons/spray.png" alt />
          </div>
          <div class="col-10 ml-3 mt-3">
            Bedfied'ın üstün temizlik sürecine uymayı taahhüt etmiştir.
          </div>
          <div class="col-1 mt-3">
            <img class="mt-3" src="./İcons/disinfectant.png" alt />
          </div>
          <div class="col-10 ml-3 mt-3">
            Bedfied'ın sosyal mesafe ve COVID-19 ile ilgili diğer kuralları
            geçerlidir.
          </div>
          <div class="col-1 mt-4">
            <img src="./İcons/carbon-monoxide.png" alt />
          </div>
          <div class="col-10 ml-3 mt-4">
            Karbonmonoksit alarmı bildirilmedi.
          </div>
          <div class="col-1 mt-4">
            <img src="./İcons/smoke-detector.png" alt />
          </div>
          <div class="col-10 ml-3 mt-4">Duman dedektörü bildirilmedi.</div>
        </div>
        <div class="row ml-1 mt-5 w-100">
          <div class="col-12">
            <h5 class="mt-2 font-weight-bold">İptal politikası</h5>
          </div>
          <div class="col-1 mt-4">
            <img src="./İcons/calendar.png" alt />
          </div>
          <div class="col-10 ml-3 mt-3">
            Bu konaklamanın iptal edilmesiyle ilgili ayrıntıları görmek için
            seyahat tarihlerinizi ekleyin.
          </div>
        </div>
        <div class="col-12 mt-4">
          <hr />
        </div>
        <div class="col-12 p-2 mt-2">
          <div class="card w-100 shadow-lg" style="border-radius: 20px">
            <div class="row p-4">
              <div class="col-6">
                <h5 class="font-weight-bold ml-2">
                  {{ homeData.price }} ₺
                  <span class="h6">/ gece</span>
                </h5>
              </div>
              <div class="col-6 text-right mr-auto">
                  <i  v-if="generalEvaluation != null && evaluationData.length != 0"         
 class="fa fa-star" style="color: #f93b3b"></i>
          <span  v-if="generalEvaluation != null && evaluationData.length != 0"         
 class="font-weight-bold">{{ generalEvaluation }}({{ evaluationData.length
          }}
          değerlendirme)</span> 
            <i
              class="fas fa-star"
              style="color: #f93b3b;"
              v-if="nullEvaluation"
            ></i>
            <span
             v-if="nullEvaluation"         
            class="text-muted"
              >Yeni</span
            >
              </div>
              <div
                class="col-12 my-3 border w-100"
                style="height: auto; border-radius: 15px"
              >
                <div class="row">
                  <div
                    class="col-6 border"
                    style="border-radius: 15px 0px 0px 0px"
                  >
                    <!-- <h6  class="font-weight-bold pt-3 pl-3 pr-2">Giriş</h6> -->
                    <h6 class="mt-3">
                      <span
                        class="font-weight-bold pt-3 pr-2"
                        style="padding-left: 2px"
                        >Giriş</span
                      >
                      <input
                        type="date"
                        name="dates"
                        id="dates"
                        @mouseover="saveRezervation = false"
                        :style="
                          !saveRezervation
                            ? ''
                            : 'border-bottom:1px solid #f93b3b!important'
                        "
                        v-model="sendTravelModeDetails.dateData.goDate"
                        class="form-control border-0 h-100 px-0 w-100"
                      />
                    </h6>
                  </div>
                  <div
                    class="col-6 border"
                    style="border-radius: 0px 15px 0px 0px"
                  >
                    <h6 class="mt-3">
                      <span
                        class="font-weight-bold pt-3 pr-2"
                        style="padding-left: 2px"
                        >Çıkış</span
                      >
                      <input
                        type="date"
                        name="dates"
                        id="dates"
                        @mouseover="saveRezervation = false"
                        :style="
                          !saveRezervation
                            ? ''
                            : 'border-bottom:1px solid #f93b3b!important'
                        "
                        v-model="sendTravelModeDetails.dateData.endDate"
                        class="form-control border-0 px-0 h-100 w-100"
                      />
                    </h6>
                  </div>

                  <div
                    @click.prevent="
                      sendTravelModeDetails.guest.countyGuest =
                        !sendTravelModeDetails.guest.countyGuest
                    "
                    class="col-10"
                    style="cursor: pointer"
                  >
                    <h6
                      class="font-weight-bold pl-1 pr-2"
                      style="margin-top: 13px"
                    >
                      Misafir sayısı
                    </h6>
                    <h6 class="pl-1 pb-2">
                      {{
                        sendTravelModeDetails.guest.oldBoy +
                        sendTravelModeDetails.guest.middleBoy
                      }}
                      misafir
                      <span v-if="sendTravelModeDetails.guest.smallBoy != 0"
                        >,
                        {{ sendTravelModeDetails.guest.smallBoy }} bebek</span
                      >
                    </h6>
                  </div>
                  <div
                    class="col-2 mb-2"
                    @click.prevent="
                      sendTravelModeDetails.guest.countyGuest =
                        !sendTravelModeDetails.guest.countyGuest
                    "
                  >
                    <i
                      :class="
                        !sendTravelModeDetails.guest.countyGuest
                          ? 'fa fa-chevron-down mt-4'
                          : 'fa fa-chevron-left mt-4'
                      "
                      style="font-size: 25px; color: #f93b3b"
                    ></i>
                  </div>

                  <div
                    class="col-8"
                    style="cursor: pointer"
                    v-if="sendTravelModeDetails.guest.countyGuest"
                  >
                    <h6 class="font-weight-bold pl-1" style="margin-top: 13px">
                      Yetişkinler
                    </h6>
                  </div>
                  <div class="col-4 d-flex" style="user-select: none">
                    <div
                      class="col-0"
                      @click.prevent="guestOldBoyMinus"
                      style="cursor: pointer"
                      v-if="
                        sendTravelModeDetails.guest.countyGuest &&
                        sendTravelModeDetails.guest.oldBoy > 1
                      "
                    >
                      <img class="mt-2" src="./İcons/minus.png" alt />
                    </div>
                    <div
                      class="col-0 mx-3 mt-2"
                      v-if="sendTravelModeDetails.guest.countyGuest"
                    >
                      <span class="mt-3" style="cursor: pointer">{{
                        sendTravelModeDetails.guest.oldBoy
                      }}</span>
                    </div>
                    <div
                      class="col-0"
                      @click.prevent="guestOldBoyPlus"
                      style="cursor: pointer"
                      v-if="sendTravelModeDetails.guest.countyGuest"
                    >
                      <img
                        class="mt-2"
                        src="./İcons/plus (1).png"
                        alt
                        v-if="
                          sendTravelModeDetails.guest.oldBoy +
                            sendTravelModeDetails.guest.middleBoy <
                          homeData.peopleCounty
                        "
                      />
                    </div>
                  </div>
                  <div
                    class="col-8 mb-2"
                    style="cursor: pointer"
                    v-if="sendTravelModeDetails.guest.countyGuest"
                  >
                    <h6
                      class="font-weight-bold pl-1 mt-3 pb-0 mb-0"
                      style="margin-top: 13px"
                    >
                      Çocuklar
                    </h6>
                    <span class="pl-1 pt-0 mt-0 small">Yaş aralığı 2-12</span>
                  </div>
                  <div class="col-4 d-flex" style="user-select: none">
                    <div
                      class="col-0 my-3"
                      @click.prevent="guestMiddleBoyMinus"
                      v-if="
                        sendTravelModeDetails.guest.countyGuest &&
                        sendTravelModeDetails.guest.middleBoy >= 1
                      "
                    >
                      <img
                        class="mt-2"
                        style="cursor: pointer"
                        src="./İcons/minus.png"
                        alt
                      />
                    </div>
                    <div
                      class="col-0 mx-3 mt-4 mb-3"
                      v-if="sendTravelModeDetails.guest.countyGuest"
                    >
                      <span class="mt-4" style="cursor: pointer">{{
                        sendTravelModeDetails.guest.middleBoy
                      }}</span>
                    </div>
                    <div
                      class="col-0 my-3"
                      @click.prevent="guestMiddleBoyPlus"
                      v-if="sendTravelModeDetails.guest.countyGuest"
                    >
                      <img
                        class="mt-2"
                        style="cursor: pointer"
                        src="./İcons/plus (1).png"
                        v-if="
                          sendTravelModeDetails.guest.oldBoy +
                            sendTravelModeDetails.guest.middleBoy <
                          homeData.peopleCounty
                        "
                        alt
                      />
                    </div>
                  </div>
                  <div
                    class="col-8 mb-2"
                    style="cursor: pointer"
                    v-if="sendTravelModeDetails.guest.countyGuest"
                  >
                    <h6
                      class="font-weight-bold pl-1 pb-0 mb-0"
                      style="margin-top: 13px"
                    >
                      Bebekler
                    </h6>
                    <span class="pl-1 pt-0 mt-0 small">2 yaş ve altı</span>
                  </div>
                  <div class="col-4 d-flex" style="user-select: none">
                    <div
                      class="col-0 mb-2 mt-2"
                      @click.prevent="guestSmallBoyMinus"
                      v-if="
                        sendTravelModeDetails.guest.countyGuest &&
                        sendTravelModeDetails.guest.smallBoy >= 1
                      "
                    >
                      <img
                        class="mt-2"
                        style="cursor: pointer"
                        src="./İcons/minus.png"
                        alt
                      />
                    </div>
                    <div
                      class="col-0 mx-3 mb-2 mt-3"
                      v-if="sendTravelModeDetails.guest.countyGuest"
                    >
                      <span class="mt-3" style="cursor: pointer">{{
                        sendTravelModeDetails.guest.smallBoy
                      }}</span>
                    </div>
                    <div
                      class="col-0 mb-2 mt-2"
                      @click.prevent="guestSmallBoyPlus"
                      v-if="sendTravelModeDetails.guest.countyGuest"
                    >
                      <img
                        class="mt-2"
                        style="cursor: pointer"
                        v-if="this.sendTravelModeDetails.guest.smallBoy < 10"
                        src="./İcons/plus (1).png"
                        alt
                      />
                    </div>
                  </div>
                  <div
                    class="col-12 my-3 ml-1"
                    v-if="sendTravelModeDetails.guest.countyGuest"
                  >
                    <h6>
                      En fazla {{ homeData.peopleCounty }} misafir. Bebekler
                      misafir sayısına dahil edilmez.
                    </h6>
                  </div>
                </div>
              </div>
              <div
                class="row px-3"
                v-if="
                  sendTravelModeDetails.dateData.endDate != null &&
                  sendTravelModeDetails.dateData.goDate != null
                "
              >
                <div class="col-12">
                  <p class="text-center">Henüz sizden ücret alınmayacak</p>
                </div>
                <div class="col-8">
                  {{ homeData.price }}₺ x {{ lastDay }} gece
                </div>
                <div class="col-4 text-right">
                  {{ homeData.price * lastDay }}₺
                </div>
                <div class="col-8 my-2">Hizmet bedeli</div>
                <div class="col-4 text-right my-2">
                  {{ Math.round(homeData.price * lastDay * (8 / 100)) }} ₺
                </div>
                <div class="col-12">
                  <hr />
                </div>
                <div
                  class="col-8 mb-3 font-weight-bold"
                  v-if="sendTravelModeDetails.dateData.endDate != null"
                >
                  Toplam
                </div>
                <div
                  class="col-4 mb-3 text-right font-weight-bold"
                  v-if="sendTravelModeDetails.dateData.endDate != null"
                >
                  {{
                    Math.round(
                      homeData.price * lastDay +
                        homeData.price * lastDay * (8 / 100)
                    )
                  }}₺
                </div>
              </div>

              <div class="col-12 text-center mt-1">
                <button
                  class="btn btn-md"
                  style="background: #f93b3b; color: white; border-radius: 7px"
                  v-if="
                    sendTravelModeDetails.dateData.endDate != null &&
                    sendTravelModeDetails.dateData.goDate != null
                  "
                >
                  <a
                    class="text-white button-click"
                    style="text-decoration: none"
                    @click="showPriceDetails"
                    >Rezerve Edin</a
                  >
                </button>
                <button
                  @click.prevent="saveRezerv"
                  class="btn btn-reserve"
                  v-else
                >
                  Uygunluk durumunu kontrol edin
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4">
          <hr />
        </div>
        <div class="col-12">
          <h4 class="text-center font-weight-bold mb-4">
            Daha fazla konaklama yeri
          </h4>
        </div>
        <div class="col-12">
          <div>
            <GmapMap
              :center="centerTurkey"
              :zoom="4.7"
              map-type-id="roadmap"
              style="
                width: 100%;
                height: 300px;
                border-radius: 10px;
                overflow: hidden;
              "
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in newAllData"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                @click="toggleInfoMobileWindow(m, index)"
                :icon="Icon"
                :label="m.price + '₺'"
              />
              <gmap-info-window
                :position="infoWindowMobilePos"
                :opened="infoWinMobileOpen"
                @closeclick="infoWinMobileOpen = false"
              >
                <div
                  class="card m-0 p-0 border-0 map-responsive-1"
                  style="width: auto; height: 19rem; border-radius: 20px"
                  v-html="infoMobileContent"
                ></div>
              </gmap-info-window>
            </GmapMap>
          </div>
        </div>
      </div>
    </div>
    <!-- Bu sayfanın mobil versiyonu bitiş -->
  </div>
</template>


<script>
import axios from "axios";
import Comments from '@/components/homes/comment/comments';
import HomesPageHeader from "@/components/common/homesPageHeader";
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  sameAs,
  between,
} from "vuelidate/lib/validators";
export default {
  scrollToTop: true,
  components: {
    HomesPageHeader,
    Comments
  },
  data() {
    return {
      generalEvaluation:null,
      evaluationData:[],
      nullEvaluation:false,
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

      infoWindowMobilePos: {
        lat: 0,
        lng: 0,
      },
      infoWinMobileOpen: false,
      currentMobileMidx: null,
      infoMobileContent: "",
      centerTurkey: {
        lat: 39.37643801214484,
        lng: 35.11810328900551,
      },
      createCard: false,
      popupInfo: false,
      homeDetails: true,
      heartShow: true,
      priceDetails: false,
      photoDetails: false,
      userProfileData: [],
      mobileDetail: true,
      haveUserData: [],
      loadedButton: false,
      cardData: {
        cardNumber: null,
        cardName: null,
        cardMm: null,
        cardYy: null,
        cardCvc: null,
      },
      markers: [
        {
          position: {
            lat: null,
            lng: null,
          },
        },
      ],
      center: { lat: 40.960882, lng: 29.271368 },
      sendTravelModeDetails: {
        guest: {
          countyGuest: false,
          oldBoy: 1,
          middleBoy: 0,
          smallBoy: 0,
        },
        travelsMessage: null,
        dateData: {
          goDate: null,
          endDate: null,
          createRezervationDate: null,
        },
      },
      saveRezervation: false,
      masterCard: false,
      visa: false,
      americanExpress: false,
      creditCardData: [],
      guestHaveCreditCard: true,
      guestCardIbanError: false,
      guestCardAnotherErrorMessage:null,
      guestCardAnotherError:false,
      guestCardIbanErrorMessage: null,
      guestCardNameError: false,
      guestCardNameErrorMessage: null,
      guestCardYyError: false,
      guestCardYyErrorMessage: null,
      guestCardMmError: false,
      guestCardMmErrorMessage: null,
      guestCardCvcError: false,
      guestCardCvcErrorMessage: null,
      cardNumberBorder:false,
      cardNameBorder:false,
      cardNYyBorder:false,
      cardMmBorder:false,
      cardCvcBorder:false,
      cardFirstFourNumber:null,
      cardFirstTwoNumber:null,
      cardHaveErrorBorder:false,
      guestHaveCardErrorMessage:null,
      guestHaveCardError:false,
    };
  },
  props: {
    homeData: {
      required: true,
    },
    homeFirebaseId: {
      required: true,
    },
  },
  validations: {
    sendTravelModeDetails: {
      travelsMessage: {
        required,
      },
    },
  },
  methods: {
    generalEvaluations(event){
     this.generalEvaluation = event
     let array = [];
     let data = this.homeData.evaluation;
     if(!data){
       this.nullEvaluation = true;
     }
     for (let key in data) {
        array.push({ firebaseId: key, ...data[key] });
      }
      this.evaluationData = array
    },
    
    saveRezerv() {
      if (this.$store.getters.isAuthenticated) {
        this.saveRezervation = !this.saveRezervation;
      } else {
        this.$router.push("/auth");
      }
    },
    showPriceDetails() {
      if (this.$store.getters.isAuthenticated) {
        if (this.lastDay != 0 && this.lastDay != null) {
          this.homeDetails = false;
          this.priceDetails = true;
          this.mobileDetail = false;
          window.scrollTo(0, 0);
        } else {
          this.saveRezervation = true;
        }
      } else {
        this.$router.push("/auth");
      }
    },
    showHomeDetails() {
      this.homeDetails = true;
      this.mobileDetail = true;
      this.priceDetails = false;
      this.photoDetails = false;
    },
    guestOldBoyPlus() {
      let oldBoy = this.sendTravelModeDetails.guest.oldBoy;
      let middleBoy = this.sendTravelModeDetails.guest.middleBoy;
      if (oldBoy + middleBoy < this.homeData.peopleCounty)
        this.sendTravelModeDetails.guest.oldBoy++;
    },
    guestOldBoyMinus() {
      if (this.sendTravelModeDetails.guest.oldBoy > 1) {
        this.sendTravelModeDetails.guest.oldBoy--;
      }
    },
    guestMiddleBoyPlus() {
      let oldBoy = this.sendTravelModeDetails.guest.oldBoy;
      let middleBoy = this.sendTravelModeDetails.guest.middleBoy;
      if (oldBoy + middleBoy < this.homeData.peopleCounty)
        this.sendTravelModeDetails.guest.middleBoy++;
    },
    guestMiddleBoyMinus() {
      if (this.sendTravelModeDetails.guest.middleBoy != 0) {
        this.sendTravelModeDetails.guest.middleBoy--;
      }
    },
    guestSmallBoyPlus() {
      if (this.sendTravelModeDetails.guest.smallBoy < 10) {
        this.sendTravelModeDetails.guest.smallBoy++;
      }
    },
    guestSmallBoyMinus() {
      if (this.sendTravelModeDetails.guest.smallBoy != 0) {
        this.sendTravelModeDetails.guest.smallBoy--;
      }
    },
    getUserProfileData() {
      return axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/userProfileDATA.json"
        )
        .then((res) => {
          let data = res.data;
          let profileArray = [];
          for (let key in data) {
            profileArray.push({ firebaseId: key, ...data[key] });
          }
          let userArray = [];
          userArray = profileArray.find(
            (c) => c.authId == this.homeData.authId
          );
          if (userArray != undefined) {
            this.userProfileData = userArray; // Ev sahibinin profil bilgisi
          }
          let userData = [];
          userData.push(
            profileArray.find((s) => s.authId == this.$store.state.authKey)
          );
          if (userData[0] != undefined) {
            this.haveUserData = userData[0]; // Misafirn profil bilgisi
          }
        });
    },
    rezervationData() {
       this.loadedButton = true;
      if (this.creditCardData.lastFourDigits && this.guestHaveCreditCard) {
        this.guestHaveCard();
      } else {
        let cardNumber = this.cardData.cardNumber;
        let cardName = this.cardData.cardName;
        let cardMm = this.cardData.cardMm;
        let cardYy = this.cardData.cardYy;
        let cardCvc = this.cardData.cardCvc;

        if (
          cardNumber != null &&
          cardNumber != "" &&
          cardName != null &&
          cardName != "" &&
          cardMm != null &&
          cardMm != "" &&
          cardYy != null &&
          cardYy != "" &&
          cardCvc != null &&
          cardCvc != ""
        ) {
          let registerCard = null;
          if (this.creditCardData.lastFourDigits && !this.guestHaveCreditCard) {
            registerCard = 0;
          } else {
            registerCard = 1;
          }
          axios
            .post("https://www.bedfied.com/api/payWithApi", {
              price: this.homeData.price * this.lastDay, // Gecelik ücret ile gece sayısının çarpımı
              paidPrice:
                this.homeData.price * this.lastDay +
                this.homeData.price * this.lastDay * (8 / 100), // Bizim komisyonumuzun da dahil olduğu toplam ücret
              guestId: this.$store.state.authKey, // Misafirin id bilgisi,
              paymentCard: {
                cardHolderName: cardName,
                cardNumber: cardNumber,
                expireMonth: cardMm,
                expireYear: cardYy,
                cvc: cardCvc,
                registerCard: registerCard,
              },
              hostData: {
                id: this.homeData.authId, // Ev sahibinin id bilgisi,
                name: "Ev sahibinin adı: " + this.userProfileData.fullName, // Ev sahibinin adı
                surname:
                  "Ev sahibinin soyadı: " + this.userProfileData.fullName, // Ev sahibinin soyadı
                email: this.userProfileData.email, // Ev sahibinin email adresi
              },
              basketItems: {
                id: this.homeData.authId, // Ev sahibinin id bilgisi,
                name: "Ev sahibi:" + this.userProfileData.fullName, // Ev sahibin adı
                price: this.homeData.price * this.lastDay, // Gecelik ücret ile gece sayısının çarpımı
                subMerchantKey: this.userProfileData.hostIbanCardId, // Ev sahibinin ıban bilgisini temsil eden kimlik değeri
                subMerchantPrice: this.homeData.price * this.lastDay, // Ev sahibine ödenecek tutar
              },
            })
            .then((res) => {
              let registerCardControl = registerCard
              let data = res.data.result;
              if (data.status == "success") {
                if (registerCardControl == 1) {
                 axios.post(
                   "https://munhasir-ad882-default-rtdb.firebaseio.com/creaditCards.json",
                   {
                     binNumber: data.binNumber,
                     cardAssociation: data.cardAssociation,
                     cardFamily: data.cardFamily,
                     cardToken: data.cardToken,
                     cardUserKey: data.cardUserKey,
                     cardType: data.cardType,
                     email: this.haveUserData.email,
                     authId: this.$store.state.authKey,
                     lastFourDigits: data.lastFourDigits,
                   }
                 )
                }    
                this.createRezervWithChat(
                    data
                 );
                  this.sendMail();
                  this.sendNotification();    
                 
              } else {
                this.loadedButton = false;
                let errorMessage = data.errorMessage;
                if (errorMessage == "expireMonth geçersizdir") {
                  window.scroll(0,340);
                  this.cardMmBorder = true
                  this.guestCardMmError = true;
                  this.guestCardMmErrorMessage = "Ay bilgisi yanlış";
                  if (this.guestCardMmError == true) {
                    setTimeout(() => {
                      this.cardMmBorder = false;
                      this.guestCardMmError = false;
                    }, 5000);
                  }
                }
                if (errorMessage == "expireYear geçersizdir") {
                                    window.scroll(0,340);

                  this.cardYyBorder = true


                  this.guestCardYyError = true;
                  this.guestCardYyErrorMessage = "Yıl bilgisi yanlış";
                  if (this.guestCardYyError == true) {
                    setTimeout(() => {
                        this.cardYyBorder = false;

                      this.guestCardYyError = false;
                    }, 5000);
                  }
                }
                if (errorMessage == "cardHolderName geçersizdir") {
                  window.scroll(0,340);
                  this.cardNameBorder = true
                  this.guestCardNameError = true;
                  this.guestCardNameErrorMessage =
                    "Kart sahibinin Adı Soyadı hatalı";
                  if (this.guestCardNameError == true) {
                    setTimeout(() => {
                      this.guestCardNameError = false;
                      this.cardNameBorder = false;
                    }, 5000);
                  }
                }
                if (errorMessage == "Kart numarası geçersizdir") {
                  window.scroll(0,340);
                  this.guestCardIbanError = true;
                  this.guestCardIbanErrorMessage = errorMessage;
                  this.cardNumberBorder = true;

                  if (this.guestCardIbanError == true) {
                    setTimeout(() => {
                      this.guestCardIbanError = false;
                       this.cardNumberBorder = false;

                    }, 5000);
                  }
                }
                if (errorMessage == "cvc geçersizdir") {
                    window.scroll(0,340)

                  this.guestCardCvcError = true;
                  this.guestCardCvcErrorMessage = "Şifre (CVC) yanlış !!";
                  this.cardCvcBorder = true;
                  if (this.guestCardCvcError == true) {
                    setTimeout(() => {
                      this.guestCardCvcError = false;
                       this.cardCvcBorder = false;

                    }, 5000);
                  }
                }
                if(errorMessage
                    != "expireMonth geçersizdir" &&
                   errorMessage != "expireYear geçersizdir" &&
                   errorMessage != "cardHolderName geçersizdir" &&
                   errorMessage != "Kart numarası geçersizdir" &&
                   errorMessage != "cvc geçersizdir"
                   ){
                      window.scroll(0,340)

                  this.guestCardAnotherError = true;
                  this.guestCardAnotherErrorMessage = errorMessage;
                  this.cardNameBorder = true;
                  this.cardNumberBorder = true;
                  this.cardCvcBorder = true;
                  this.cardMmBorder = true;
                  this.cardYyBorder = true;
                  if (this.guestCardAnotherError == true) {
                    setTimeout(() => {
                      this.guestCardAnotherError = false;
                       this.cardNameBorder = false;
                  this.cardNumberBorder = false;
                  this.cardCvcBorder = false;
                  this.cardMmBorder = false;
                  this.cardYyBorder = false;
                    }, 5000);
                  }                  
                }
              }
            }); 
        } else {
          this.loadedButton = false;

          this.createCard = true
            window.scroll(0,340)
          if(cardNumber == null || cardNumber == ""){                        
           this.cardNumberBorder = true
          }
          if(cardName == null || cardName == "" ){
            this.cardNameBorder = true
          }
          if(cardMm == null || cardMm == "" ){
            this.cardMmBorder = true
          }
          if(cardYy == null || cardYy == "" ){
            this.cardYyBorder = true
          }
          if(cardCvc == null || cardCvc == ""){
            this.cardCvcBorder = true
          }
              this.guestCardAnotherError = true;
                  this.guestCardAnotherErrorMessage = 'Lütfen önce kart bilgilerinizi doldurun';
                  if (this.guestCardAnotherError == true) {
                    setTimeout(() => {
                      this.guestCardAnotherError = false;
                      this.cardNumberBorder = false;
                      this.cardNameBorder = false
                      this.cardMmBorder = false;
                      this.cardYyBorder = false;
                      this.cardCvcBorder = false



                    }, 5000);
                  } 
        }
      }
    },
    guestHaveCard() {
          axios
            .post("https://www.bedfied.com/api/payWithHaveCard", {
              price: this.homeData.price * this.lastDay, // Gecelik ücret ile gece sayısının çarpımı
              paidPrice:
                this.homeData.price * this.lastDay +
                this.homeData.price * this.lastDay * (8 / 100), // Bizim komisyonumuzun da dahil olduğu toplam ücret
              guestId: this.$store.state.authKey, // Misafirin id bilgisi,
              paymentCard: {
                cardUserKey:this.creditCardData.cardUserKey,
                cardToken:this.creditCardData.cardToken
              },
              hostData: {
                id: this.homeData.authId, // Ev sahibinin id bilgisi,
                name: "Ev sahibinin adı: " + this.userProfileData.fullName, // Ev sahibinin adı
                surname:
                  "Ev sahibinin soyadı: " + this.userProfileData.fullName, // Ev sahibinin soyadı
                email: this.userProfileData.email, // Ev sahibinin email adresi
              },
              basketItems: {
                id: this.homeData.authId, // Ev sahibinin id bilgisi,
                name: "Ev sahibi:" + this.userProfileData.fullName, // Ev sahibin adı
                price: this.homeData.price * this.lastDay, // Gecelik ücret ile gece sayısının çarpımı
                subMerchantKey: this.userProfileData.hostIbanCardId, // Ev sahibinin ıban bilgisini temsil eden kimlik değeri
                subMerchantPrice: this.homeData.price * this.lastDay, // Ev sahibine ödenecek tutar
              },
            })
            .then((res) => {
              let data = res.data.result;
              if (data.status == "success") {   
                this.createRezervWithChat(data);
                this.sendMail();
                this.sendNotification();
              } else {
                this.loadedButton = false;
                let errorMessage = data.errorMessage;             
                  window.scroll(0,100)
                  this.guestHaveCardError = true;
                  this.cardHaveErrorBorder = true
                  this.guestHaveCardErrorMessage = errorMessage;
                  if (this.guestHaveCardError == true) {
                    setTimeout(() => {
                      this.guestHaveCardError = false;
                       this.cardHaveErrorBorder = false;
                       this.createCardShow();
                    }, 5000);
                  }                  
                
              }
            }); 
    },
    createRezervWithChat(data) {
      let date = new Date(); // Gün ay yıl saat ve dakika rezervasyon oluşturulma tarihi
      let day = date.getDate();
      let weekDay = date.getDay();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let minutes = date.getMinutes(); // dakika
      let hour = date.getHours();
      this.$store.dispatch("rezervationData", {
        data: data,
        travelData: this.sendTravelModeDetails, // Seyahat bilgileri
        homeData: this.homeData, // Evin bilgileri
        createRezevDate: {
          Days: day,
          months: month,
          years: year,
          Minutes: minutes,
          hours: hour,
        }, // Rezervasyon oluşturulma tarihi
        travelRemoveMode: {
          authId: this.$store.state.authKey, // Rezervasyonun oluşturan kişi
          reserveStatus: null,
        }, // Rezervasyonun durumunu belirtiyor / Kim tarafından iptal edildiğide
        homeDataFirebaseId: this.homeFirebaseId, // Evin firebase ıd si
        userProfileData: this.userProfileData, // Ev sahibinin profil bilgisi

        authId: this.$store.state.authKey, // Rezervasyonu oluşturan kişi
        lastDay: this.lastDay, // Seyahatin kaç gün olacağı
      });
      this.$store.dispatch("addNewChat", {
        messageSendDate: {
          Days: day,
          months: month,
          years: year,
          Minutes: minutes,
          hours: hour,
        },
        hostProfile: this.userProfileData, // Ev sahibi profil bilgisi,
        authId: this.$store.state.authKey, // Rezervasyonu oluşturan kişi
        authData: this.haveUserData, // Rezervasyonu oluşturan kişinin profil bilgisi
        messageTravel: this.sendTravelModeDetails.travelsMessage,
        order: date,
      });
    },
    sendNotification() {
      let date = new Date(); // Gün ay yıl saat ve dakika rezervasyon oluşturulma tarihi
      let day = date.getDate();
      let weekDay = date.getDay();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let minutes = date.getMinutes(); // dakika
      let hour = date.getHours();
      this.$store.dispatch("notification", {
        hostHomePhoto: this.homeData.photos[0].photo, // Evin fotoğrafı
        county: this.homeData.county, // Misafirn gideceği bölgenin adı
        day: day, // Ayın gününü belirtiyor.
        month: month, // Hangi ay oluşturduğunu belirtiyor.
        weekDay: weekDay, // Haftanın gününü veriyor,
        guestName:
          this.haveUserData.fullName == undefined
            ? "1 misafir"
            : this.haveUserData.fullName, // Misafirin adı
        guestProfilePhoto:
          this.haveUserData.profileImage == undefined
            ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
            : this.haveUserData.profileImage, // Misafir profil fotoğrafı
        hostId: this.homeData.authId, // Kimin evi için oluşturulduğu
        guestId: this.$store.state.authKey, // Kimin oluşturduğu
        orderDate: date.getTime(), // Sıralanacağı tarih
        homeDataFirebaseId: this.homeFirebaseId, // Evin firebase ıd si
      });
      this.$store.dispatch("notificationValue", {
        guestId: this.$store.state.authKey, // Kimin oluşturduğu
        hostId: this.homeData.authId, // Kimin evi için oluşturulduğu
        value: 1,
      }).then((res) => {
          this.$router.push("/travelMode");
            setTimeout(() => {
                  window.location.reload();
                }, 1000);
        });
    },
    sendMail() {
      let goDayDate = this.sendTravelModeDetails.dateData.goDate.split("-")[2];
      let goMonthDate =
        this.sendTravelModeDetails.dateData.goDate.split("-")[1];
      let goYearDate = this.sendTravelModeDetails.dateData.goDate.split("-")[0];
      let endDayDate =
        this.sendTravelModeDetails.dateData.endDate.split("-")[2];
      let endMonthDate =
        this.sendTravelModeDetails.dateData.endDate.split("-")[1];
      let endYearDate =
        this.sendTravelModeDetails.dateData.endDate.split("-")[0];
      axios.post("https://www.bedfied.com/api/sendGuest", {
        hostName:
          this.userProfileData.fullName == null
            ? "İsim belirtmemiş"
            : this.userProfileData.fullName, // Ev sahibi adı
        guestName: this.haveUserData.fullName, // Misafirin adı
        guestEmail: this.haveUserData.email, // Misafir email adresi
        hostHomePhoto: this.homeData.photos[0].photo, // Evin fotoğrafı
        hostProfilePhoto: this.userProfileData.profileImage, // Ev sahibi profil fotoğrafı
        totalDays: this.lastDay, // Toplam kaç gün olacağı
        houseType: this.homeData.houseType, // Mülk türü
        houseStayType: this.homeData.houseStayType, // Yer türü
        goDate: goDayDate + "." + goMonthDate + "." + goYearDate, // Giriş tarihi
        endDate: endDayDate + "." + endMonthDate + "." + endYearDate, // Çıkış tarihi
        goMyRezervations: "https://www.bedfied.com/travelMode", // Rezervasyonu incelemesi için id bilgisi
        cancelRezervation: "https://www.bedfied.com/travelMode", // Rezervasyonu iptal etmesi için id bilgisi
      });
      axios
        .post("https://www.bedfied.com/api/sendHost", {
          hostName:
            this.userProfileData.fullName == null
              ? "İsim belirtmemiş"
              : this.userProfileData.fullName, // Ev sahibi adı
          guestName: this.haveUserData.fullName, // Misafirin adı
          hostEmail: this.userProfileData.email, // Ev sahibi email adresi
          hostHomePhoto: this.homeData.photos[0].photo, // Evin fotoğrafı
          guestProfilePhoto: this.haveUserData.profileImage, // Misafir profil fotoğrafı
          totalDays: this.lastDay, // Toplam kaç gün olacağı
          oldBoy: this.sendTravelModeDetails.guest.oldBoy, // Yetişkin sayısı
          middleBoy: this.sendTravelModeDetails.guest.middleBoy, // Çocuk sayısı
          smallBoy: this.sendTravelModeDetails.guest.smallBoy, // Bebek sayısı
          price: this.homeData.price * this.lastDay, // Toplam ev sahibi kazancı
          goDate: goDayDate + "." + goMonthDate + "." + goYearDate, // Giriş tarihi
          endDate: endDayDate + "." + endMonthDate + "." + endYearDate, // Çıkış tarihi
          goMyRezervations: "https://www.bedfied.com/homeHost/myReservations", // Rezervasyonu incelemesi için id bilgisi
          cancelRezervation: "https://www.bedfied.com/homeHost/myReservations", // Rezervasyonu iptal etmesi için id bilgisi
        })
    },
    showPhotos() {
      this.homeDetails = false;
      this.photoDetails = true;
      this.mobileDetail = false;
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
        <div class="carousel-inner" style="border-radius: 10px 10px 3px 3px;cursor:pointer">
          <div class="carousel-item active" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer" >
            <img
               src="${
                 marker.photos[0] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[0].photo
               }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
               src="${
                 marker.photos[1] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[1].photo
               }
                        "             alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
               src="${
                 marker.photos[2] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[2].photo
               }
                        "
              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item"  onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
               src="${
                 marker.photos[3] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[3].photo
               }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
                src="${
                  marker.photos[4] == undefined
                    ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                    : marker.photos[4].photo
                }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
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
      <div class="card-body pb-0 mb-0 pt-2   map-responsive"  onclick="location.href='/homes/${
        marker.firebaseId
      }'" style="cursor:pointer">
        <div class="row" style="height:6rem">
          <div class="col-md-12 mb-1" style="font-size:15px">
            <i class="fa fa-star" style="color: #f93b3b;"></i> 4,${Math.round(
              Math.random() * 20
            )}
                    
            <small class="text-muted">(${Math.round(
              Math.random() * 20
            )} değerlendirme)</small>
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
      </div>
    </div>`;
    },
    toggleInfoMobileWindow(marker, idx) {
      this.infoWindowMobilePos = marker.position;
      this.infoMobileContent = this.getInfoMobileWindowContent(marker);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMobileMidx == idx) {
        this.infoWinMobileOpen = !this.infoWinMobileOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinMobileOpen = true;
        this.currentMobileMidx = idx;
      }
    },
    getInfoMobileWindowContent(marker) {
      return `<div>
        
      <div
        id="${marker.firebaseId + 35}"
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
        <div class="carousel-inner" style="border-radius: 10px 10px 3px 3px;cursor:pointer">
          <div class="carousel-item active" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer" >
            <img
               src="${
                 marker.photos[0] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[0].photo
               }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
               src="${
                 marker.photos[1] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[1].photo
               }
                        "             alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
               src="${
                 marker.photos[2] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[2].photo
               }
                        "
              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item"  onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
               src="${
                 marker.photos[3] == undefined
                   ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                   : marker.photos[3].photo
               }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
          <div class="carousel-item" onclick="location.href='/homes/${
            marker.firebaseId
          }'" style="cursor:pointer">
            <img
                src="${
                  marker.photos[4] == undefined
                    ? "https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                    : marker.photos[4].photo
                }
                        "              alt=""
              width="400"
              height="160"
              class="border-radius-img"
              style="object-fit: cover!important;background-position:center center!important"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="${"#" + marker.firebaseId + 35}"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only" >Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="${"#" + marker.firebaseId + 35}"
          role="button"
          data-slide="next"
          style="font-weight:bold;color:#f93b3b!important"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="card-body pb-0 mb-0 pt-2   map-responsive"  onclick="location.href='/homes/${
        marker.firebaseId
      }'" style="cursor:pointer">
        <div class="row" style="height:6rem">
          <div class="col-md-12 mb-1" style="font-size:15px">
            <i class="fa fa-star" style="color: #f93b3b;"></i> 4,${Math.round(
              Math.random() * 20
            )}
                    
            <small class="text-muted">(${Math.round(
              Math.random() * 20
            )} değerlendirme)</small>
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
      </div>
    </div>`;
    },
    getGuestCreaditCardData() {
      axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/creaditCards.json"
        )
        .then((res) => {
          let data = res.data;
          let creaditData = [];
          let myCreaditData = [];
          for (let key in data) {
            creaditData.push({ firebaseId: key, ...data[key] });
          }
          myCreaditData = creaditData.filter(
            (s) => s.authId == this.$store.state.authKey
          );
          if (myCreaditData.length != 0) {
            let creaditDatas = myCreaditData[0];
            if (creaditDatas.cardAssociation == "MASTER_CARD") {
              this.masterCard = true;
            }
            if (creaditDatas.cardAssociation == "VISA") {
              this.visa = true;
            }
            if (creaditDatas.cardAssociation == "AMERICAN_EXPRESS") {
              this.americanExpress = true;
            }
            
           
            this.creditCardData = creaditDatas;
             let binNumber =  this.creditCardData.binNumber
             let cardSixNumber = binNumber.toString();
             let sayi = cardSixNumber.slice(cardSixNumber.length - 2 , cardSixNumber.length)
             let sayi2 = cardSixNumber.slice(0, 4)
             this.cardFirstTwoNumber = sayi;
             this.cardFirstFourNumber = sayi2
          }
        });
    },
    createCardShow() {
      this.guestHaveCreditCard = !this.guestHaveCreditCard;
      this.createCard = !this.createCard;
    },
    guestHaveCreditCardShow() {
      this.guestHaveCreditCard = !this.guestHaveCreditCard;
      this.createCard = !this.createCard;
    },
  },
  computed: {
    lastDay: function () {
      if (
        this.sendTravelModeDetails.dateData.goDate != null &&
        this.sendTravelModeDetails.dateData.endDate != null &&
        this.sendTravelModeDetails.dateData.endDate >
          this.sendTravelModeDetails.dateData.goDate
      ) {
        var tarih1 = new Date(this.sendTravelModeDetails.dateData.endDate);
        var tarih2 = new Date(this.sendTravelModeDetails.dateData.goDate);
        // console.log(new Date().getTime() , tarih2.getTime());
        if (tarih2.getTime() >= new Date().getTime()) {
          //iki tarih arasındaki saat farkını hesaplamak için aşağıdaki yöntemi kullanabiliriz.
          var zamanFark = Math.abs(tarih2.getTime() - tarih1.getTime());

          //zamanFark değişkeni ile elde edilen saati güne çevirmek için aşağıdaki yöntem kullanılabilir.
          return Math.ceil(zamanFark / (1000 * 3600 * 24));
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    newAllData: function () {
      return this.$store.getters.getHomesData;
    },
  },
  created() {
    this.getUserProfileData();
    axios
      .get(
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          this.homeData.adres +
          "&key=AIzaSyAJ60rXBHT0NkgcAmOlgbR7svLYHLFWnvc"
      )
      .then((res) => {
        let position = res.data.results[0].geometry.location;
        this.center = position;
        this.markers[0].position = position;
      });
    this.getGuestCreaditCardData();
    console.log(this.generalEvaluation);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.check {
  position: relative;
  background: linear-gradient(90deg, #f19af3, #f099b5);
  line-height: 0;
  perspective: 400px;
}

.check input[type="checkbox"],
.check label,
.check label::before,
.check label::after,
.check {
  appearance: none;
  display: inline-block;
  border-radius: 1rem;
  border: 0;
  transition: 0.35s ease-in-out;
  box-sizing: border-box;
  cursor: pointer;
}

.check label {
  width: 2.2rem;
  height: 1rem;
  background: #d7d7d7;
  overflow: hidden;
}

.check input[type="checkbox"] {
  position: absolute;
  z-index: 1;
  width: 0.8rem;
  height: 0.8rem;
  top: 0.1rem;
  left: 0.1rem;
  background: linear-gradient(45deg, #dedede, #ffffff);
  box-shadow: 0 6px 7px rgba(0, 0, 0, 0.3);
  outline: none;
}

.check input[type="checkbox"]:checked {
  left: 1.3rem;
}

.check input[type="checkbox"]:checked + label {
  background: transparent;
}

.check label::before,
.check label::after {
  content: "· ·";
  position: absolute;
  overflow: hidden;
  left: 0.15rem;
  top: 0.5rem;
  height: 1rem;
  letter-spacing: -0.04rem;
  color: #9b9b9b;
  font-family: "Times New Roman", serif;
  z-index: 2;
  font-size: 0.6rem;
  border-radius: 0;
  transform-origin: 0 0 -0.5rem;
  backface-visibility: hidden;
}

.check label::after {
  content: "●";
  top: 0.65rem;
  left: 0.3rem;
  height: 0.1rem;
  width: 0.35rem;
  font-size: 0.2rem;
  transform-origin: 0 0 -0.4rem;
}

.check input[type="checkbox"]:checked + label::before,
.check input[type="checkbox"]:checked + label::after {
  left: 1.55rem;
  top: 0.4rem;
  line-height: 0.1rem;
  transform: rotateY(360deg);
}

.check input[type="checkbox"]:checked + label::after {
  height: 0.16rem;
  top: 0.55rem;
  left: 1.6rem;
  font-size: 0.6rem;
  line-height: 0;
}

.sc {
  transition: all 1s;
}
.hover-photo {
  transition: 1s all;
}
.hover-photo:hover {
  transform: scale(1.009);
}
.button-click {
  transition: transform 80ms ease-in;
}
.container-photo {
  width: 90%;
}
.containers {
  width: 93%;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 1520px) {
  .width-pc-rezerve {
    width: 140% !important;
    margin-left: -15% !important;
  }
  .margin-left-pc {
    margin-left: -12%;
  }
  .gmap-ekstra {
    width: 1400px !important;
    margin-left: -13%;
    text-align: center !important;
  }
  /* .Map-responsive-sm{
    width: 1430px!important;
  } */
  .card-price-position {
    height: auto;
    border-radius: 40px;
    position: -webkit-sticky;
    width: 75% !important;
    position: sticky;
    top: 120px;
    margin-left: 14% !important;
  }
  .margin-pc {
    margin-left: 15px !important;
  }
  .img-height-pc {
    height: 196px !important;
  }
  .row-photo-height {
    height: 400px !important;
  }
  .back-photo {
    font-size: 55px;
  }
  .container-photos {
    margin-left: 3.8% !important;
  }
}
.button-click:active {
  transform: scale(0.95);
}
.font {
  font-family: "Titillium Web", sans-serif !important;
}
.loader {
  text-align: center;
  vertical-align: middle;
  position: relative;
  display: flex;
  box-shadow: 0px 40px 60px -20px rgba(0, 0, 0, 0.2);
}
#loaded-button-color {
  background: #f93b3b;
}
.loader span {
  display: block;
  width: 14px;
  height: 14px;
  background: #eee;
  border-radius: 50%;
  margin: 0 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

.loader span:nth-child(2) {
  background: #fff;
}

.loader span:nth-child(3) {
  background: #fff;
}

.loader span:nth-child(4) {
  background: #fff;
}

.loader span:not(:last-child) {
  animation: animate 1.5s linear infinite;
}

@keyframes animate {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(20px);
  }
}

.loader span:last-child {
  animation: jump 1.5s ease-in-out infinite;
}

@keyframes jump {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(10px, -10px);
  }
  20% {
    transform: translate(20px, 10px);
  }
  30% {
    transform: translate(30px, -50px);
  }
  70% {
    transform: translate(-150px, -50px);
  }
  80% {
    transform: translate(-140px, 10px);
  }
  90% {
    transform: translate(-130px, -10px);
  }
  100% {
    transform: translate(-120px, 0);
  }
}
header {
  position: relative;
  background-color: black;
  height: 430px;
  width: 100%;
  border-radius: 10px;
}
header video {
  width: 100% !important;
  height: 430px;
  border-radius: 10px;
}
header .container {
  position: relative;
  z-index: 2;
}
header .overlay {
  /* position: absolute; */
  /* top: 0;
  left: 0;
  height: 100%;
  width: 100%; */
  background-color: black;
  opacity: 0.5;
  /* z-index: 1; */
}
@media (pointer: coarse) and (hover: none) {
  header {
    background: black no-repeat center center scroll;
  }
  /* header video {
    display: none;
  } */
}
.photo {
  object-fit: cover !important;
  background-position: center center !important;
  background-size: cover !important;
}
.btn-reserve {
  background: #f93b3b !important;
  color: white !important;
  border-radius: 7px !important;
}
.heart-responsive {
  color: #f93b3b;
  cursor: pointer;
  margin-right: 120px !important;
}
.absolutly {
  position: absolute !important;
  bottom: 15px;
  right: 15px;
}
.img-responsive {
  width: 102.5% !important;
  height: 100% !important;
  background-size: cover;
  object-fit: cover;
  margin-left: -14px !important;
  padding-right: 0px !important ;
  background-position: center center;
}
.img-responsive2 {
  width: 112% !important;
  height: 100% !important;
  margin-left: -14px !important;
  background-size: cover;
  object-fit: cover;
  background-position: center center;
}
.card-price-position {
  height: auto;
  border-radius: 40px;
  position: -webkit-sticky;
  width: 85%;
  position: sticky;
  top: 120px;
  margin-left: 5%;
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.2s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.pop-up {
  width: 300px;
  height: 100px;
  position: absolute;
  left: 280px;
  z-index: 5;
}
@media (max-width: 762px) {
  .mobile-detail {
    display: inherit !important;
  }
  .pc-detail {
    display: none;
  }
  .houseType-font-size {
    font-size: 25px !important;
    margin: 0px !important;
    padding: 10px !important;

    /* padding: 5px!important; */
  }
  .Map-responsive-sm {
    width: 380px !important;

    height: 400px !important;
  }
  .w-100-sm {
    width: 100% !important;
  }
  .heart-responsive {
    padding: 0px !important;
  }
  .w-sm-50 {
    width: 100% !important;
  }
  .rezervation-detail-mobile {
    display: inherit !important;
  }
  .rezervation-detail-pc {
    display: none;
  }
}
.rezervation-detail-mobile {
  display: none;
}

.mobile-detail {
  display: none;
}
.sc:hover {
  transform: scale(1.02);
  cursor: pointer;
}
.br-left {
  border-radius: 20px 0px 0px 20px;
}
.br-right {
  border-radius: 0px 20px 20px 0px;
}

.ct {
  /* background-color: red; */
  width: 93% !important ;
  height: auto;
}
.fy {
  font-size: 2rem !important  ;
  font-family: "Titillium Web", sans-serif !important;

  color: BLACK;
  font-weight: bold;
  letter-spacing: 0.4px;
  transition: 1s all;
}
.fy:hover {
  transform: scale(1.04);
}
</style>