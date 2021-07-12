<template>
  <div>
    <TravelModeHeader :userProfilesData="userData" />
    <div class="fm">
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
      <div class="container-fluid responsive-margin">
        <transition name="home">
          <div class="containers mt-5" v-if="steps.step1">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1 class="h1 mb-3">
                  Merhaba, Haydi seyahat deneyiminizi birlikte değerlendirelim.
                </h1>
                <span class="text-muted">1.ADIM</span>
                <h3 class="mb-0 pb-0">
                  Konuma rahat bir şekilde ulaşabildiniz mi?
                </h3>
                <div class="feedback mt-0 pt-1">
                  <div class="rating">
                    <input
                      v-model="step1Rating5"
                      type="radio"
                      name="rating"
                      id="rating-5"
                    />
                    <label
                      @click.prevent="step1Rating5Control"
                      for="rating-5"
                    ></label>
                    <input
                      v-model="step1Rating4"
                      type="radio"
                      name="rating"
                      id="rating-4"
                    />
                    <label
                      @click.prevent="step1Rating4Control"
                      for="rating-4"
                    ></label>
                    <input
                      v-model="step1Rating3"
                      type="radio"
                      name="rating"
                      id="rating-3"
                    />
                    <label
                      @click.prevent="step1Rating3Control"
                      for="rating-3"
                    ></label>
                    <input
                      v-model="step1Rating2"
                      type="radio"
                      name="rating"
                      id="rating-2"
                    />
                    <label
                      @click.prevent="step1Rating2Control"
                      for="rating-2"
                    ></label>
                    <input
                      v-model="step1Rating1"
                      type="radio"
                      name="rating"
                      id="rating-1"
                    />
                    <label
                      @click.prevent="step1Rating1Control"
                      for="rating-1"
                    ></label>
                    <div class="emoji-wrapper">
                      <div class="emoji">
                        <svg
                          class="rating-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z"
                            fill="#f4c534"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.433 -595.455)"
                            cx="166.318"
                            cy="199.829"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 180.87 175.82)"
                            cx="180.871"
                            cy="175.822"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-113.778 194.434 165.995)"
                            cx="194.433"
                            cy="165.993"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.397 -1237.664)"
                            cx="345.695"
                            cy="199.819"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 360.25 175.837)"
                            cx="360.252"
                            cy="175.84"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(66.227 254.508 -573.138)"
                            cx="373.794"
                            cy="165.987"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <path
                            d="M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z"
                            fill="#3e4347"
                          />
                        </svg>
                        <svg
                          class="rating-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M328.4 428a92.8 92.8 0 0 0-145-.1 6.8 6.8 0 0 1-12-5.8 86.6 86.6 0 0 1 84.5-69 86.6 86.6 0 0 1 84.7 69.8c1.3 6.9-7.7 10.6-12.2 5.1z"
                            fill="#3e4347"
                          />
                          <path
                            d="M269.2 222.3c5.3 62.8 52 113.9 104.8 113.9 52.3 0 90.8-51.1 85.6-113.9-2-25-10.8-47.9-23.7-66.7-4.1-6.1-12.2-8-18.5-4.2a111.8 111.8 0 0 1-60.1 16.2c-22.8 0-42.1-5.6-57.8-14.8-6.8-4-15.4-1.5-18.9 5.4-9 18.2-13.2 40.3-11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M357 189.5c25.8 0 47-7.1 63.7-18.7 10 14.6 17 32.1 18.7 51.6 4 49.6-26.1 89.7-67.5 89.7-41.6 0-78.4-40.1-82.5-89.7A95 95 0 0 1 298 174c16 9.7 35.6 15.5 59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M396.2 246.1a38.5 38.5 0 0 1-38.7 38.6 38.5 38.5 0 0 1-38.6-38.6 38.6 38.6 0 1 1 77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M380.4 241.1c-3.2 3.2-9.9 1.7-14.9-3.2-4.8-4.8-6.2-11.5-3-14.7 3.3-3.4 10-2 14.9 2.9 4.9 5 6.4 11.7 3 15z"
                            fill="#fff"
                          />
                          <path
                            d="M242.8 222.3c-5.3 62.8-52 113.9-104.8 113.9-52.3 0-90.8-51.1-85.6-113.9 2-25 10.8-47.9 23.7-66.7 4.1-6.1 12.2-8 18.5-4.2 16.2 10.1 36.2 16.2 60.1 16.2 22.8 0 42.1-5.6 57.8-14.8 6.8-4 15.4-1.5 18.9 5.4 9 18.2 13.2 40.3 11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M155 189.5c-25.8 0-47-7.1-63.7-18.7-10 14.6-17 32.1-18.7 51.6-4 49.6 26.1 89.7 67.5 89.7 41.6 0 78.4-40.1 82.5-89.7A95 95 0 0 0 214 174c-16 9.7-35.6 15.5-59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M115.8 246.1a38.5 38.5 0 0 0 38.7 38.6 38.5 38.5 0 0 0 38.6-38.6 38.6 38.6 0 1 0-77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M131.6 241.1c3.2 3.2 9.9 1.7 14.9-3.2 4.8-4.8 6.2-11.5 3-14.7-3.3-3.4-10-2-14.9 2.9-4.9 5-6.4 11.7-3 15z"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M336.6 403.2c-6.5 8-16 10-25.5 5.2a117.6 117.6 0 0 0-110.2 0c-9.4 4.9-19 3.3-25.6-4.6-6.5-7.7-4.7-21.1 8.4-28 45.1-24 99.5-24 144.6 0 13 7 14.8 19.7 8.3 27.4z"
                            fill="#3e4347"
                          />
                          <path
                            d="M276.6 244.3a79.3 79.3 0 1 1 158.8 0 79.5 79.5 0 1 1-158.8 0z"
                            fill="#fff"
                          />
                          <circle cx="340" cy="260.4" r="36.2" fill="#3e4347" />
                          <g fill="#fff">
                            <ellipse
                              transform="rotate(-135 326.4 246.6)"
                              cx="326.4"
                              cy="246.6"
                              rx="6.5"
                              ry="10"
                            />
                            <path
                              d="M231.9 244.3a79.3 79.3 0 1 0-158.8 0 79.5 79.5 0 1 0 158.8 0z"
                            />
                          </g>
                          <circle
                            cx="168.5"
                            cy="260.4"
                            r="36.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-135 182.1 246.7)"
                            cx="182.1"
                            cy="246.7"
                            rx="10"
                            ry="6.5"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M407.7 352.8a163.9 163.9 0 0 1-303.5 0c-2.3-5.5 1.5-12 7.5-13.2a780.8 780.8 0 0 1 288.4 0c6 1.2 9.9 7.7 7.6 13.2z"
                            fill="#3e4347"
                          />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <g fill="#fff">
                            <path
                              d="M115.3 339c18.2 29.6 75.1 32.8 143.1 32.8 67.1 0 124.2-3.2 143.2-31.6l-1.5-.6a780.6 780.6 0 0 0-284.8-.6z"
                            />
                            <ellipse cx="356.4" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="356.4"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <g fill="#fff">
                            <ellipse
                              transform="scale(-1) rotate(45 454 -906)"
                              cx="375.3"
                              cy="188.1"
                              rx="12"
                              ry="8.1"
                            />
                            <ellipse cx="155.6" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="155.6"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(45 454 -421.3)"
                            cx="174.5"
                            cy="188"
                            rx="12"
                            ry="8.1"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M232.3 201.3c0 49.2-74.3 94.2-74.3 94.2s-74.4-45-74.4-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M96.1 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2C80.2 229.8 95.6 175.2 96 173.3z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M215.2 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M428.4 201.3c0 49.2-74.4 94.2-74.4 94.2s-74.3-45-74.3-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M292.2 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2-77.8-65.7-62.4-120.3-61.9-122.2z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M411.3 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M381.7 374.1c-30.2 35.9-75.3 64.4-125.7 64.4s-95.4-28.5-125.8-64.2a17.6 17.6 0 0 1 16.5-28.7 627.7 627.7 0 0 0 218.7-.1c16.2-2.7 27 16.1 16.3 28.6z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 438.5c25.7 0 50-7.5 71.7-19.5-9-33.7-40.7-43.3-62.6-31.7-29.7 15.8-62.8-4.7-75.6 34.3 20.3 10.4 42.8 17 66.5 17z"
                            fill="#e24b4b"
                          />
                        </svg>
                        <svg
                          class="rating-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <g fill="#ffd93b">
                            <circle cx="256" cy="256" r="256" />
                            <path
                              d="M512 256A256 256 0 0 1 56.8 416.7a256 256 0 0 0 360-360c58 47 95.2 118.8 95.2 199.3z"
                            />
                          </g>
                          <path
                            d="M512 99.4v165.1c0 11-8.9 19.9-19.7 19.9h-187c-13 0-23.5-10.5-23.5-23.5v-21.3c0-12.9-8.9-24.8-21.6-26.7-16.2-2.5-30 10-30 25.5V261c0 13-10.5 23.5-23.5 23.5h-187A19.7 19.7 0 0 1 0 264.7V99.4c0-10.9 8.8-19.7 19.7-19.7h472.6c10.8 0 19.7 8.7 19.7 19.7z"
                            fill="#e9eff4"
                          />
                          <path
                            d="M204.6 138v88.2a23 23 0 0 1-23 23H58.2a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#45cbea"
                          />
                          <path
                            d="M476.9 138v88.2a23 23 0 0 1-23 23H330.3a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#e84d88"
                          />
                          <g fill="#38c0dc">
                            <path
                              d="M95.2 114.9l-60 60v15.2l75.2-75.2zM123.3 114.9L35.1 203v23.2c0 1.8.3 3.7.7 5.4l116.8-116.7h-29.3z"
                            />
                          </g>
                          <g fill="#d23f77">
                            <path
                              d="M373.3 114.9l-66 66V196l81.3-81.2zM401.5 114.9l-94.1 94v17.3c0 3.5.8 6.8 2.2 9.8l121.1-121.1h-29.2z"
                            />
                          </g>
                          <path
                            d="M329.5 395.2c0 44.7-33 81-73.4 81-40.7 0-73.5-36.3-73.5-81s32.8-81 73.5-81c40.5 0 73.4 36.3 73.4 81z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 476.2a70 70 0 0 0 53.3-25.5 34.6 34.6 0 0 0-58-25 34.4 34.4 0 0 0-47.8 26 69.9 69.9 0 0 0 52.6 24.5z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M290.3 434.8c-1 3.4-5.8 5.2-11 3.9s-8.4-5.1-7.4-8.7c.8-3.3 5.7-5 10.7-3.8 5.1 1.4 8.5 5.3 7.7 8.6z"
                            fill="#fff"
                            opacity=".2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  src="../İcons/a.png"
                  alt="new-home-1-img"
                  class="
                    float-right
                    img-responsive
                    w-75
                    img-all img-phone-screen
                  "
                  height="400"
                />
              </div>
            </div>
          </div>
        </transition>
        <!-- New-Home-Step-1 Konum Finish -->
        <!-- 2 -->
        <!-- New-Home-Step-2 İletişim şekli Start  -->
        <transition name="home">
          <div class="containers mt-4" v-if="steps.step2">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1 class="h1 mb-3">
                  Ev sahibinin iletişim şekli nasıldı sizce?
                </h1>
                <span class="text-muted">2.ADIM</span>
                <div class="feedback mt-0 pt-1">
                  <div class="rating">
                    <input
                      v-model="step2RatingMeeting5"
                      type="radio"
                      name="rating"
                      id="rating-5"
                    />
                    <label
                      @click.prevent="step2RatingMeeting5Control"
                      for="rating-5"
                    ></label>
                    <input
                      v-model="step2RatingMeeting4"
                      type="radio"
                      name="rating"
                      id="rating-4"
                    />
                    <label
                      @click.prevent="step2RatingMeeting4Control"
                      for="rating-4"
                    ></label>
                    <input
                      v-model="step2RatingMeeting3"
                      type="radio"
                      name="rating"
                      id="rating-3"
                    />
                    <label
                      @click.prevent="step2RatingMeeting3Control"
                      for="rating-3"
                    ></label>
                    <input
                      v-model="step2RatingMeeting2"
                      type="radio"
                      name="rating"
                      id="rating-2"
                    />
                    <label
                      @click.prevent="step2RatingMeeting2Control"
                      for="rating-2"
                    ></label>
                    <input
                      v-model="step2RatingMeeting1"
                      type="radio"
                      name="rating"
                      id="rating-1"
                    />
                    <label
                      @click.prevent="step2RatingMeeting1Control"
                      for="rating-1"
                    ></label>
                    <div class="emoji-wrapper">
                      <div class="emoji">
                        <svg
                          class="rating-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z"
                            fill="#f4c534"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.433 -595.455)"
                            cx="166.318"
                            cy="199.829"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 180.87 175.82)"
                            cx="180.871"
                            cy="175.822"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-113.778 194.434 165.995)"
                            cx="194.433"
                            cy="165.993"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.397 -1237.664)"
                            cx="345.695"
                            cy="199.819"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 360.25 175.837)"
                            cx="360.252"
                            cy="175.84"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(66.227 254.508 -573.138)"
                            cx="373.794"
                            cy="165.987"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <path
                            d="M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z"
                            fill="#3e4347"
                          />
                        </svg>
                        <svg
                          class="rating-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M328.4 428a92.8 92.8 0 0 0-145-.1 6.8 6.8 0 0 1-12-5.8 86.6 86.6 0 0 1 84.5-69 86.6 86.6 0 0 1 84.7 69.8c1.3 6.9-7.7 10.6-12.2 5.1z"
                            fill="#3e4347"
                          />
                          <path
                            d="M269.2 222.3c5.3 62.8 52 113.9 104.8 113.9 52.3 0 90.8-51.1 85.6-113.9-2-25-10.8-47.9-23.7-66.7-4.1-6.1-12.2-8-18.5-4.2a111.8 111.8 0 0 1-60.1 16.2c-22.8 0-42.1-5.6-57.8-14.8-6.8-4-15.4-1.5-18.9 5.4-9 18.2-13.2 40.3-11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M357 189.5c25.8 0 47-7.1 63.7-18.7 10 14.6 17 32.1 18.7 51.6 4 49.6-26.1 89.7-67.5 89.7-41.6 0-78.4-40.1-82.5-89.7A95 95 0 0 1 298 174c16 9.7 35.6 15.5 59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M396.2 246.1a38.5 38.5 0 0 1-38.7 38.6 38.5 38.5 0 0 1-38.6-38.6 38.6 38.6 0 1 1 77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M380.4 241.1c-3.2 3.2-9.9 1.7-14.9-3.2-4.8-4.8-6.2-11.5-3-14.7 3.3-3.4 10-2 14.9 2.9 4.9 5 6.4 11.7 3 15z"
                            fill="#fff"
                          />
                          <path
                            d="M242.8 222.3c-5.3 62.8-52 113.9-104.8 113.9-52.3 0-90.8-51.1-85.6-113.9 2-25 10.8-47.9 23.7-66.7 4.1-6.1 12.2-8 18.5-4.2 16.2 10.1 36.2 16.2 60.1 16.2 22.8 0 42.1-5.6 57.8-14.8 6.8-4 15.4-1.5 18.9 5.4 9 18.2 13.2 40.3 11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M155 189.5c-25.8 0-47-7.1-63.7-18.7-10 14.6-17 32.1-18.7 51.6-4 49.6 26.1 89.7 67.5 89.7 41.6 0 78.4-40.1 82.5-89.7A95 95 0 0 0 214 174c-16 9.7-35.6 15.5-59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M115.8 246.1a38.5 38.5 0 0 0 38.7 38.6 38.5 38.5 0 0 0 38.6-38.6 38.6 38.6 0 1 0-77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M131.6 241.1c3.2 3.2 9.9 1.7 14.9-3.2 4.8-4.8 6.2-11.5 3-14.7-3.3-3.4-10-2-14.9 2.9-4.9 5-6.4 11.7-3 15z"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M336.6 403.2c-6.5 8-16 10-25.5 5.2a117.6 117.6 0 0 0-110.2 0c-9.4 4.9-19 3.3-25.6-4.6-6.5-7.7-4.7-21.1 8.4-28 45.1-24 99.5-24 144.6 0 13 7 14.8 19.7 8.3 27.4z"
                            fill="#3e4347"
                          />
                          <path
                            d="M276.6 244.3a79.3 79.3 0 1 1 158.8 0 79.5 79.5 0 1 1-158.8 0z"
                            fill="#fff"
                          />
                          <circle cx="340" cy="260.4" r="36.2" fill="#3e4347" />
                          <g fill="#fff">
                            <ellipse
                              transform="rotate(-135 326.4 246.6)"
                              cx="326.4"
                              cy="246.6"
                              rx="6.5"
                              ry="10"
                            />
                            <path
                              d="M231.9 244.3a79.3 79.3 0 1 0-158.8 0 79.5 79.5 0 1 0 158.8 0z"
                            />
                          </g>
                          <circle
                            cx="168.5"
                            cy="260.4"
                            r="36.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-135 182.1 246.7)"
                            cx="182.1"
                            cy="246.7"
                            rx="10"
                            ry="6.5"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M407.7 352.8a163.9 163.9 0 0 1-303.5 0c-2.3-5.5 1.5-12 7.5-13.2a780.8 780.8 0 0 1 288.4 0c6 1.2 9.9 7.7 7.6 13.2z"
                            fill="#3e4347"
                          />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <g fill="#fff">
                            <path
                              d="M115.3 339c18.2 29.6 75.1 32.8 143.1 32.8 67.1 0 124.2-3.2 143.2-31.6l-1.5-.6a780.6 780.6 0 0 0-284.8-.6z"
                            />
                            <ellipse cx="356.4" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="356.4"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <g fill="#fff">
                            <ellipse
                              transform="scale(-1) rotate(45 454 -906)"
                              cx="375.3"
                              cy="188.1"
                              rx="12"
                              ry="8.1"
                            />
                            <ellipse cx="155.6" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="155.6"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(45 454 -421.3)"
                            cx="174.5"
                            cy="188"
                            rx="12"
                            ry="8.1"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M232.3 201.3c0 49.2-74.3 94.2-74.3 94.2s-74.4-45-74.4-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M96.1 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2C80.2 229.8 95.6 175.2 96 173.3z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M215.2 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M428.4 201.3c0 49.2-74.4 94.2-74.4 94.2s-74.3-45-74.3-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M292.2 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2-77.8-65.7-62.4-120.3-61.9-122.2z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M411.3 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M381.7 374.1c-30.2 35.9-75.3 64.4-125.7 64.4s-95.4-28.5-125.8-64.2a17.6 17.6 0 0 1 16.5-28.7 627.7 627.7 0 0 0 218.7-.1c16.2-2.7 27 16.1 16.3 28.6z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 438.5c25.7 0 50-7.5 71.7-19.5-9-33.7-40.7-43.3-62.6-31.7-29.7 15.8-62.8-4.7-75.6 34.3 20.3 10.4 42.8 17 66.5 17z"
                            fill="#e24b4b"
                          />
                        </svg>
                        <svg
                          class="rating-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <g fill="#ffd93b">
                            <circle cx="256" cy="256" r="256" />
                            <path
                              d="M512 256A256 256 0 0 1 56.8 416.7a256 256 0 0 0 360-360c58 47 95.2 118.8 95.2 199.3z"
                            />
                          </g>
                          <path
                            d="M512 99.4v165.1c0 11-8.9 19.9-19.7 19.9h-187c-13 0-23.5-10.5-23.5-23.5v-21.3c0-12.9-8.9-24.8-21.6-26.7-16.2-2.5-30 10-30 25.5V261c0 13-10.5 23.5-23.5 23.5h-187A19.7 19.7 0 0 1 0 264.7V99.4c0-10.9 8.8-19.7 19.7-19.7h472.6c10.8 0 19.7 8.7 19.7 19.7z"
                            fill="#e9eff4"
                          />
                          <path
                            d="M204.6 138v88.2a23 23 0 0 1-23 23H58.2a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#45cbea"
                          />
                          <path
                            d="M476.9 138v88.2a23 23 0 0 1-23 23H330.3a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#e84d88"
                          />
                          <g fill="#38c0dc">
                            <path
                              d="M95.2 114.9l-60 60v15.2l75.2-75.2zM123.3 114.9L35.1 203v23.2c0 1.8.3 3.7.7 5.4l116.8-116.7h-29.3z"
                            />
                          </g>
                          <g fill="#d23f77">
                            <path
                              d="M373.3 114.9l-66 66V196l81.3-81.2zM401.5 114.9l-94.1 94v17.3c0 3.5.8 6.8 2.2 9.8l121.1-121.1h-29.2z"
                            />
                          </g>
                          <path
                            d="M329.5 395.2c0 44.7-33 81-73.4 81-40.7 0-73.5-36.3-73.5-81s32.8-81 73.5-81c40.5 0 73.4 36.3 73.4 81z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 476.2a70 70 0 0 0 53.3-25.5 34.6 34.6 0 0 0-58-25 34.4 34.4 0 0 0-47.8 26 69.9 69.9 0 0 0 52.6 24.5z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M290.3 434.8c-1 3.4-5.8 5.2-11 3.9s-8.4-5.1-7.4-8.7c.8-3.3 5.7-5 10.7-3.8 5.1 1.4 8.5 5.3 7.7 8.6z"
                            fill="#fff"
                            opacity=".2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buttons mt-4">
                  <button @click.prevent="step2Back" class="btn btn-danger">
                    <i class="far fa-arrow-alt-circle-left"></i> Önceki
                  </button>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  src="../İcons/2.png"
                  alt="new-home-1-img"
                  class="
                    float-right
                    img-responsive
                    w-100
                    img-all img-phone-screen
                  "
                  height="400"
                />
              </div>
            </div>
          </div>
        </transition>
        <!-- New-Home-Step-2 Finish  -->
        <!-- 3 -->
        <!-- New-Home-Step-3 Contact sizi nasıl karşıladı Start -->
        <transition name="home">
          <div class="containers mt-5" v-if="steps.step3">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1 class="h1 mb-3">Ev sahibi sizi nasıl karşıladı?</h1>
                <span class="text-muted">3.ADIM</span>
                <div class="feedback mt-0 pt-1">
                  <div class="rating">
                    <input
                      v-model="step3RatingContact5"
                      type="radio"
                      name="rating"
                      id="rating-5"
                    />
                    <label
                      @click.prevent="step3RatingContact5Control"
                      for="rating-5"
                    ></label>
                    <input
                      v-model="step3RatingContact4"
                      type="radio"
                      name="rating"
                      id="rating-4"
                    />
                    <label
                      @click.prevent="step3RatingContact4Control"
                      for="rating-4"
                    ></label>
                    <input
                      v-model="step3RatingContact3"
                      type="radio"
                      name="rating"
                      id="rating-3"
                    />
                    <label
                      @click.prevent="step3RatingContact3Control"
                      for="rating-3"
                    ></label>
                    <input
                      v-model="step3RatingContact2"
                      type="radio"
                      name="rating"
                      id="rating-2"
                    />
                    <label
                      @click.prevent="step3RatingContact2Control"
                      for="rating-2"
                    ></label>
                    <input
                      v-model="step3RatingContact1"
                      type="radio"
                      name="rating"
                      id="rating-1"
                    />
                    <label
                      @click.prevent="step3RatingContact1Control"
                      for="rating-1"
                    ></label>
                    <div class="emoji-wrapper">
                      <div class="emoji">
                        <svg
                          class="rating-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z"
                            fill="#f4c534"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.433 -595.455)"
                            cx="166.318"
                            cy="199.829"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 180.87 175.82)"
                            cx="180.871"
                            cy="175.822"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-113.778 194.434 165.995)"
                            cx="194.433"
                            cy="165.993"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.397 -1237.664)"
                            cx="345.695"
                            cy="199.819"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 360.25 175.837)"
                            cx="360.252"
                            cy="175.84"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(66.227 254.508 -573.138)"
                            cx="373.794"
                            cy="165.987"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <path
                            d="M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z"
                            fill="#3e4347"
                          />
                        </svg>
                        <svg
                          class="rating-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M328.4 428a92.8 92.8 0 0 0-145-.1 6.8 6.8 0 0 1-12-5.8 86.6 86.6 0 0 1 84.5-69 86.6 86.6 0 0 1 84.7 69.8c1.3 6.9-7.7 10.6-12.2 5.1z"
                            fill="#3e4347"
                          />
                          <path
                            d="M269.2 222.3c5.3 62.8 52 113.9 104.8 113.9 52.3 0 90.8-51.1 85.6-113.9-2-25-10.8-47.9-23.7-66.7-4.1-6.1-12.2-8-18.5-4.2a111.8 111.8 0 0 1-60.1 16.2c-22.8 0-42.1-5.6-57.8-14.8-6.8-4-15.4-1.5-18.9 5.4-9 18.2-13.2 40.3-11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M357 189.5c25.8 0 47-7.1 63.7-18.7 10 14.6 17 32.1 18.7 51.6 4 49.6-26.1 89.7-67.5 89.7-41.6 0-78.4-40.1-82.5-89.7A95 95 0 0 1 298 174c16 9.7 35.6 15.5 59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M396.2 246.1a38.5 38.5 0 0 1-38.7 38.6 38.5 38.5 0 0 1-38.6-38.6 38.6 38.6 0 1 1 77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M380.4 241.1c-3.2 3.2-9.9 1.7-14.9-3.2-4.8-4.8-6.2-11.5-3-14.7 3.3-3.4 10-2 14.9 2.9 4.9 5 6.4 11.7 3 15z"
                            fill="#fff"
                          />
                          <path
                            d="M242.8 222.3c-5.3 62.8-52 113.9-104.8 113.9-52.3 0-90.8-51.1-85.6-113.9 2-25 10.8-47.9 23.7-66.7 4.1-6.1 12.2-8 18.5-4.2 16.2 10.1 36.2 16.2 60.1 16.2 22.8 0 42.1-5.6 57.8-14.8 6.8-4 15.4-1.5 18.9 5.4 9 18.2 13.2 40.3 11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M155 189.5c-25.8 0-47-7.1-63.7-18.7-10 14.6-17 32.1-18.7 51.6-4 49.6 26.1 89.7 67.5 89.7 41.6 0 78.4-40.1 82.5-89.7A95 95 0 0 0 214 174c-16 9.7-35.6 15.5-59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M115.8 246.1a38.5 38.5 0 0 0 38.7 38.6 38.5 38.5 0 0 0 38.6-38.6 38.6 38.6 0 1 0-77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M131.6 241.1c3.2 3.2 9.9 1.7 14.9-3.2 4.8-4.8 6.2-11.5 3-14.7-3.3-3.4-10-2-14.9 2.9-4.9 5-6.4 11.7-3 15z"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M336.6 403.2c-6.5 8-16 10-25.5 5.2a117.6 117.6 0 0 0-110.2 0c-9.4 4.9-19 3.3-25.6-4.6-6.5-7.7-4.7-21.1 8.4-28 45.1-24 99.5-24 144.6 0 13 7 14.8 19.7 8.3 27.4z"
                            fill="#3e4347"
                          />
                          <path
                            d="M276.6 244.3a79.3 79.3 0 1 1 158.8 0 79.5 79.5 0 1 1-158.8 0z"
                            fill="#fff"
                          />
                          <circle cx="340" cy="260.4" r="36.2" fill="#3e4347" />
                          <g fill="#fff">
                            <ellipse
                              transform="rotate(-135 326.4 246.6)"
                              cx="326.4"
                              cy="246.6"
                              rx="6.5"
                              ry="10"
                            />
                            <path
                              d="M231.9 244.3a79.3 79.3 0 1 0-158.8 0 79.5 79.5 0 1 0 158.8 0z"
                            />
                          </g>
                          <circle
                            cx="168.5"
                            cy="260.4"
                            r="36.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-135 182.1 246.7)"
                            cx="182.1"
                            cy="246.7"
                            rx="10"
                            ry="6.5"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M407.7 352.8a163.9 163.9 0 0 1-303.5 0c-2.3-5.5 1.5-12 7.5-13.2a780.8 780.8 0 0 1 288.4 0c6 1.2 9.9 7.7 7.6 13.2z"
                            fill="#3e4347"
                          />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <g fill="#fff">
                            <path
                              d="M115.3 339c18.2 29.6 75.1 32.8 143.1 32.8 67.1 0 124.2-3.2 143.2-31.6l-1.5-.6a780.6 780.6 0 0 0-284.8-.6z"
                            />
                            <ellipse cx="356.4" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="356.4"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <g fill="#fff">
                            <ellipse
                              transform="scale(-1) rotate(45 454 -906)"
                              cx="375.3"
                              cy="188.1"
                              rx="12"
                              ry="8.1"
                            />
                            <ellipse cx="155.6" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="155.6"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(45 454 -421.3)"
                            cx="174.5"
                            cy="188"
                            rx="12"
                            ry="8.1"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M232.3 201.3c0 49.2-74.3 94.2-74.3 94.2s-74.4-45-74.4-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M96.1 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2C80.2 229.8 95.6 175.2 96 173.3z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M215.2 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M428.4 201.3c0 49.2-74.4 94.2-74.4 94.2s-74.3-45-74.3-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M292.2 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2-77.8-65.7-62.4-120.3-61.9-122.2z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M411.3 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M381.7 374.1c-30.2 35.9-75.3 64.4-125.7 64.4s-95.4-28.5-125.8-64.2a17.6 17.6 0 0 1 16.5-28.7 627.7 627.7 0 0 0 218.7-.1c16.2-2.7 27 16.1 16.3 28.6z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 438.5c25.7 0 50-7.5 71.7-19.5-9-33.7-40.7-43.3-62.6-31.7-29.7 15.8-62.8-4.7-75.6 34.3 20.3 10.4 42.8 17 66.5 17z"
                            fill="#e24b4b"
                          />
                        </svg>
                        <svg
                          class="rating-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <g fill="#ffd93b">
                            <circle cx="256" cy="256" r="256" />
                            <path
                              d="M512 256A256 256 0 0 1 56.8 416.7a256 256 0 0 0 360-360c58 47 95.2 118.8 95.2 199.3z"
                            />
                          </g>
                          <path
                            d="M512 99.4v165.1c0 11-8.9 19.9-19.7 19.9h-187c-13 0-23.5-10.5-23.5-23.5v-21.3c0-12.9-8.9-24.8-21.6-26.7-16.2-2.5-30 10-30 25.5V261c0 13-10.5 23.5-23.5 23.5h-187A19.7 19.7 0 0 1 0 264.7V99.4c0-10.9 8.8-19.7 19.7-19.7h472.6c10.8 0 19.7 8.7 19.7 19.7z"
                            fill="#e9eff4"
                          />
                          <path
                            d="M204.6 138v88.2a23 23 0 0 1-23 23H58.2a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#45cbea"
                          />
                          <path
                            d="M476.9 138v88.2a23 23 0 0 1-23 23H330.3a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#e84d88"
                          />
                          <g fill="#38c0dc">
                            <path
                              d="M95.2 114.9l-60 60v15.2l75.2-75.2zM123.3 114.9L35.1 203v23.2c0 1.8.3 3.7.7 5.4l116.8-116.7h-29.3z"
                            />
                          </g>
                          <g fill="#d23f77">
                            <path
                              d="M373.3 114.9l-66 66V196l81.3-81.2zM401.5 114.9l-94.1 94v17.3c0 3.5.8 6.8 2.2 9.8l121.1-121.1h-29.2z"
                            />
                          </g>
                          <path
                            d="M329.5 395.2c0 44.7-33 81-73.4 81-40.7 0-73.5-36.3-73.5-81s32.8-81 73.5-81c40.5 0 73.4 36.3 73.4 81z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 476.2a70 70 0 0 0 53.3-25.5 34.6 34.6 0 0 0-58-25 34.4 34.4 0 0 0-47.8 26 69.9 69.9 0 0 0 52.6 24.5z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M290.3 434.8c-1 3.4-5.8 5.2-11 3.9s-8.4-5.1-7.4-8.7c.8-3.3 5.7-5 10.7-3.8 5.1 1.4 8.5 5.3 7.7 8.6z"
                            fill="#fff"
                            opacity=".2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buttons my-5">
                  <button @click.prevent="step3Back" class="btn btn-danger">
                    <i class="far fa-arrow-alt-circle-left"></i> Önceki
                  </button>
                </div>
              </div>
              <div
                class="col-xl-6 mt-0 pt-0 col-lg-6 col-md-6 col-sm-12 col-xs-12"
              >
                <img
                  src="../İcons/c.png"
                  alt="new-home-1-img"
                  class="
                    float-right
                    img-responsive
                    w-100
                    img-all img-phone-screen
                  "
                  style="margin-top: -7%"
                  height="400"
                />
              </div>
            </div>
          </div>
        </transition>

        <!-- New-Home-Step-3 Finish -->
        <!-- 4 -->
        <!-- New-Home-Step-4 Start -->
        <transition name="home">
          <div class="containers mt-5" v-if="steps.step4">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1 class="h1 mb-3">
                  Ev sahibinin bahsettiği gibi mi her şey? (Doğruluk)
                </h1>
                <span class="text-muted">4.ADIM</span>
                <div class="feedback mt-0 pt-1">
                  <div class="rating">
                    <input
                      v-model="step4RatingHonest5"
                      type="radio"
                      name="rating"
                      id="rating-5"
                    />
                    <label
                      @click.prevent="step4RatingHonest5Control"
                      for="rating-5"
                    ></label>
                    <input
                      v-model="step4RatingHonest4"
                      type="radio"
                      name="rating"
                      id="rating-4"
                    />
                    <label
                      @click.prevent="step4RatingHonest4Control"
                      for="rating-4"
                    ></label>
                    <input
                      v-model="step4RatingHonest3"
                      type="radio"
                      name="rating"
                      id="rating-3"
                    />
                    <label
                      @click.prevent="step4RatingHonest3Control"
                      for="rating-3"
                    ></label>
                    <input
                      v-model="step4RatingHonest2"
                      type="radio"
                      name="rating"
                      id="rating-2"
                    />
                    <label
                      @click.prevent="step4RatingHonest2Control"
                      for="rating-2"
                    ></label>
                    <input
                      v-model="step4RatingHonest1"
                      type="radio"
                      name="rating"
                      id="rating-1"
                    />
                    <label
                      @click.prevent="step4RatingHonest1Control"
                      for="rating-1"
                    ></label>
                    <div class="emoji-wrapper">
                      <div class="emoji">
                        <svg
                          class="rating-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z"
                            fill="#f4c534"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.433 -595.455)"
                            cx="166.318"
                            cy="199.829"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 180.87 175.82)"
                            cx="180.871"
                            cy="175.822"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-113.778 194.434 165.995)"
                            cx="194.433"
                            cy="165.993"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.397 -1237.664)"
                            cx="345.695"
                            cy="199.819"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 360.25 175.837)"
                            cx="360.252"
                            cy="175.84"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(66.227 254.508 -573.138)"
                            cx="373.794"
                            cy="165.987"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <path
                            d="M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z"
                            fill="#3e4347"
                          />
                        </svg>
                        <svg
                          class="rating-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M328.4 428a92.8 92.8 0 0 0-145-.1 6.8 6.8 0 0 1-12-5.8 86.6 86.6 0 0 1 84.5-69 86.6 86.6 0 0 1 84.7 69.8c1.3 6.9-7.7 10.6-12.2 5.1z"
                            fill="#3e4347"
                          />
                          <path
                            d="M269.2 222.3c5.3 62.8 52 113.9 104.8 113.9 52.3 0 90.8-51.1 85.6-113.9-2-25-10.8-47.9-23.7-66.7-4.1-6.1-12.2-8-18.5-4.2a111.8 111.8 0 0 1-60.1 16.2c-22.8 0-42.1-5.6-57.8-14.8-6.8-4-15.4-1.5-18.9 5.4-9 18.2-13.2 40.3-11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M357 189.5c25.8 0 47-7.1 63.7-18.7 10 14.6 17 32.1 18.7 51.6 4 49.6-26.1 89.7-67.5 89.7-41.6 0-78.4-40.1-82.5-89.7A95 95 0 0 1 298 174c16 9.7 35.6 15.5 59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M396.2 246.1a38.5 38.5 0 0 1-38.7 38.6 38.5 38.5 0 0 1-38.6-38.6 38.6 38.6 0 1 1 77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M380.4 241.1c-3.2 3.2-9.9 1.7-14.9-3.2-4.8-4.8-6.2-11.5-3-14.7 3.3-3.4 10-2 14.9 2.9 4.9 5 6.4 11.7 3 15z"
                            fill="#fff"
                          />
                          <path
                            d="M242.8 222.3c-5.3 62.8-52 113.9-104.8 113.9-52.3 0-90.8-51.1-85.6-113.9 2-25 10.8-47.9 23.7-66.7 4.1-6.1 12.2-8 18.5-4.2 16.2 10.1 36.2 16.2 60.1 16.2 22.8 0 42.1-5.6 57.8-14.8 6.8-4 15.4-1.5 18.9 5.4 9 18.2 13.2 40.3 11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M155 189.5c-25.8 0-47-7.1-63.7-18.7-10 14.6-17 32.1-18.7 51.6-4 49.6 26.1 89.7 67.5 89.7 41.6 0 78.4-40.1 82.5-89.7A95 95 0 0 0 214 174c-16 9.7-35.6 15.5-59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M115.8 246.1a38.5 38.5 0 0 0 38.7 38.6 38.5 38.5 0 0 0 38.6-38.6 38.6 38.6 0 1 0-77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M131.6 241.1c3.2 3.2 9.9 1.7 14.9-3.2 4.8-4.8 6.2-11.5 3-14.7-3.3-3.4-10-2-14.9 2.9-4.9 5-6.4 11.7-3 15z"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M336.6 403.2c-6.5 8-16 10-25.5 5.2a117.6 117.6 0 0 0-110.2 0c-9.4 4.9-19 3.3-25.6-4.6-6.5-7.7-4.7-21.1 8.4-28 45.1-24 99.5-24 144.6 0 13 7 14.8 19.7 8.3 27.4z"
                            fill="#3e4347"
                          />
                          <path
                            d="M276.6 244.3a79.3 79.3 0 1 1 158.8 0 79.5 79.5 0 1 1-158.8 0z"
                            fill="#fff"
                          />
                          <circle cx="340" cy="260.4" r="36.2" fill="#3e4347" />
                          <g fill="#fff">
                            <ellipse
                              transform="rotate(-135 326.4 246.6)"
                              cx="326.4"
                              cy="246.6"
                              rx="6.5"
                              ry="10"
                            />
                            <path
                              d="M231.9 244.3a79.3 79.3 0 1 0-158.8 0 79.5 79.5 0 1 0 158.8 0z"
                            />
                          </g>
                          <circle
                            cx="168.5"
                            cy="260.4"
                            r="36.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-135 182.1 246.7)"
                            cx="182.1"
                            cy="246.7"
                            rx="10"
                            ry="6.5"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M407.7 352.8a163.9 163.9 0 0 1-303.5 0c-2.3-5.5 1.5-12 7.5-13.2a780.8 780.8 0 0 1 288.4 0c6 1.2 9.9 7.7 7.6 13.2z"
                            fill="#3e4347"
                          />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <g fill="#fff">
                            <path
                              d="M115.3 339c18.2 29.6 75.1 32.8 143.1 32.8 67.1 0 124.2-3.2 143.2-31.6l-1.5-.6a780.6 780.6 0 0 0-284.8-.6z"
                            />
                            <ellipse cx="356.4" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="356.4"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <g fill="#fff">
                            <ellipse
                              transform="scale(-1) rotate(45 454 -906)"
                              cx="375.3"
                              cy="188.1"
                              rx="12"
                              ry="8.1"
                            />
                            <ellipse cx="155.6" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="155.6"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(45 454 -421.3)"
                            cx="174.5"
                            cy="188"
                            rx="12"
                            ry="8.1"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M232.3 201.3c0 49.2-74.3 94.2-74.3 94.2s-74.4-45-74.4-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M96.1 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2C80.2 229.8 95.6 175.2 96 173.3z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M215.2 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M428.4 201.3c0 49.2-74.4 94.2-74.4 94.2s-74.3-45-74.3-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M292.2 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2-77.8-65.7-62.4-120.3-61.9-122.2z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M411.3 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M381.7 374.1c-30.2 35.9-75.3 64.4-125.7 64.4s-95.4-28.5-125.8-64.2a17.6 17.6 0 0 1 16.5-28.7 627.7 627.7 0 0 0 218.7-.1c16.2-2.7 27 16.1 16.3 28.6z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 438.5c25.7 0 50-7.5 71.7-19.5-9-33.7-40.7-43.3-62.6-31.7-29.7 15.8-62.8-4.7-75.6 34.3 20.3 10.4 42.8 17 66.5 17z"
                            fill="#e24b4b"
                          />
                        </svg>
                        <svg
                          class="rating-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <g fill="#ffd93b">
                            <circle cx="256" cy="256" r="256" />
                            <path
                              d="M512 256A256 256 0 0 1 56.8 416.7a256 256 0 0 0 360-360c58 47 95.2 118.8 95.2 199.3z"
                            />
                          </g>
                          <path
                            d="M512 99.4v165.1c0 11-8.9 19.9-19.7 19.9h-187c-13 0-23.5-10.5-23.5-23.5v-21.3c0-12.9-8.9-24.8-21.6-26.7-16.2-2.5-30 10-30 25.5V261c0 13-10.5 23.5-23.5 23.5h-187A19.7 19.7 0 0 1 0 264.7V99.4c0-10.9 8.8-19.7 19.7-19.7h472.6c10.8 0 19.7 8.7 19.7 19.7z"
                            fill="#e9eff4"
                          />
                          <path
                            d="M204.6 138v88.2a23 23 0 0 1-23 23H58.2a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#45cbea"
                          />
                          <path
                            d="M476.9 138v88.2a23 23 0 0 1-23 23H330.3a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#e84d88"
                          />
                          <g fill="#38c0dc">
                            <path
                              d="M95.2 114.9l-60 60v15.2l75.2-75.2zM123.3 114.9L35.1 203v23.2c0 1.8.3 3.7.7 5.4l116.8-116.7h-29.3z"
                            />
                          </g>
                          <g fill="#d23f77">
                            <path
                              d="M373.3 114.9l-66 66V196l81.3-81.2zM401.5 114.9l-94.1 94v17.3c0 3.5.8 6.8 2.2 9.8l121.1-121.1h-29.2z"
                            />
                          </g>
                          <path
                            d="M329.5 395.2c0 44.7-33 81-73.4 81-40.7 0-73.5-36.3-73.5-81s32.8-81 73.5-81c40.5 0 73.4 36.3 73.4 81z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 476.2a70 70 0 0 0 53.3-25.5 34.6 34.6 0 0 0-58-25 34.4 34.4 0 0 0-47.8 26 69.9 69.9 0 0 0 52.6 24.5z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M290.3 434.8c-1 3.4-5.8 5.2-11 3.9s-8.4-5.1-7.4-8.7c.8-3.3 5.7-5 10.7-3.8 5.1 1.4 8.5 5.3 7.7 8.6z"
                            fill="#fff"
                            opacity=".2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buttons my-5">
                  <button @click.prevent="step4Back" class="btn btn-danger">
                    <i class="far fa-arrow-alt-circle-left"></i> Önceki
                  </button>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  src="../İcons/3.png"
                  alt="new-home-1-img"
                  class="
                    float-right
                    img-responsive
                    w-100
                    img-all img-phone-screen
                  "
                  height="400"
                />
              </div>
            </div>
          </div>
        </transition>

        <!-- New-Home-Step-4 Finish -->
        <!-- 5 -->
        <!-- New-Home-Step-5 Start -->
        <transition name="home">
          <div class="containers mt-5" v-if="steps.step5">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1 class="h1 mb-3">
                  Ev sahibinin evi temiz miydi sizce? (Temizlik)
                </h1>
                <span class="text-muted">5.ADIM</span>
                <div class="feedback mt-0 pt-1">
                  <div class="rating">
                    <input
                      v-model="step5RatingClean5"
                      type="radio"
                      name="rating"
                      id="rating-5"
                    />
                    <label
                      @click.prevent="step5RatingClean5Control"
                      for="rating-5"
                    ></label>
                    <input
                      v-model="step5RatingClean4"
                      type="radio"
                      name="rating"
                      id="rating-4"
                    />
                    <label
                      @click.prevent="step5RatingClean4Control"
                      for="rating-4"
                    ></label>
                    <input
                      v-model="step5RatingClean3"
                      type="radio"
                      name="rating"
                      id="rating-3"
                    />
                    <label
                      @click.prevent="step5RatingClean3Control"
                      for="rating-3"
                    ></label>
                    <input
                      v-model="step5RatingClean2"
                      type="radio"
                      name="rating"
                      id="rating-2"
                    />
                    <label
                      @click.prevent="step5RatingClean2Control"
                      for="rating-2"
                    ></label>
                    <input
                      v-model="step5RatingClean1"
                      type="radio"
                      name="rating"
                      id="rating-1"
                    />
                    <label
                      @click.prevent="step5RatingClean1Control"
                      for="rating-1"
                    ></label>
                    <div class="emoji-wrapper">
                      <div class="emoji">
                        <svg
                          class="rating-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z"
                            fill="#f4c534"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.433 -595.455)"
                            cx="166.318"
                            cy="199.829"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 180.87 175.82)"
                            cx="180.871"
                            cy="175.822"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-113.778 194.434 165.995)"
                            cx="194.433"
                            cy="165.993"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.397 -1237.664)"
                            cx="345.695"
                            cy="199.819"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 360.25 175.837)"
                            cx="360.252"
                            cy="175.84"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(66.227 254.508 -573.138)"
                            cx="373.794"
                            cy="165.987"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <path
                            d="M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z"
                            fill="#3e4347"
                          />
                        </svg>
                        <svg
                          class="rating-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M328.4 428a92.8 92.8 0 0 0-145-.1 6.8 6.8 0 0 1-12-5.8 86.6 86.6 0 0 1 84.5-69 86.6 86.6 0 0 1 84.7 69.8c1.3 6.9-7.7 10.6-12.2 5.1z"
                            fill="#3e4347"
                          />
                          <path
                            d="M269.2 222.3c5.3 62.8 52 113.9 104.8 113.9 52.3 0 90.8-51.1 85.6-113.9-2-25-10.8-47.9-23.7-66.7-4.1-6.1-12.2-8-18.5-4.2a111.8 111.8 0 0 1-60.1 16.2c-22.8 0-42.1-5.6-57.8-14.8-6.8-4-15.4-1.5-18.9 5.4-9 18.2-13.2 40.3-11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M357 189.5c25.8 0 47-7.1 63.7-18.7 10 14.6 17 32.1 18.7 51.6 4 49.6-26.1 89.7-67.5 89.7-41.6 0-78.4-40.1-82.5-89.7A95 95 0 0 1 298 174c16 9.7 35.6 15.5 59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M396.2 246.1a38.5 38.5 0 0 1-38.7 38.6 38.5 38.5 0 0 1-38.6-38.6 38.6 38.6 0 1 1 77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M380.4 241.1c-3.2 3.2-9.9 1.7-14.9-3.2-4.8-4.8-6.2-11.5-3-14.7 3.3-3.4 10-2 14.9 2.9 4.9 5 6.4 11.7 3 15z"
                            fill="#fff"
                          />
                          <path
                            d="M242.8 222.3c-5.3 62.8-52 113.9-104.8 113.9-52.3 0-90.8-51.1-85.6-113.9 2-25 10.8-47.9 23.7-66.7 4.1-6.1 12.2-8 18.5-4.2 16.2 10.1 36.2 16.2 60.1 16.2 22.8 0 42.1-5.6 57.8-14.8 6.8-4 15.4-1.5 18.9 5.4 9 18.2 13.2 40.3 11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M155 189.5c-25.8 0-47-7.1-63.7-18.7-10 14.6-17 32.1-18.7 51.6-4 49.6 26.1 89.7 67.5 89.7 41.6 0 78.4-40.1 82.5-89.7A95 95 0 0 0 214 174c-16 9.7-35.6 15.5-59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M115.8 246.1a38.5 38.5 0 0 0 38.7 38.6 38.5 38.5 0 0 0 38.6-38.6 38.6 38.6 0 1 0-77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M131.6 241.1c3.2 3.2 9.9 1.7 14.9-3.2 4.8-4.8 6.2-11.5 3-14.7-3.3-3.4-10-2-14.9 2.9-4.9 5-6.4 11.7-3 15z"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M336.6 403.2c-6.5 8-16 10-25.5 5.2a117.6 117.6 0 0 0-110.2 0c-9.4 4.9-19 3.3-25.6-4.6-6.5-7.7-4.7-21.1 8.4-28 45.1-24 99.5-24 144.6 0 13 7 14.8 19.7 8.3 27.4z"
                            fill="#3e4347"
                          />
                          <path
                            d="M276.6 244.3a79.3 79.3 0 1 1 158.8 0 79.5 79.5 0 1 1-158.8 0z"
                            fill="#fff"
                          />
                          <circle cx="340" cy="260.4" r="36.2" fill="#3e4347" />
                          <g fill="#fff">
                            <ellipse
                              transform="rotate(-135 326.4 246.6)"
                              cx="326.4"
                              cy="246.6"
                              rx="6.5"
                              ry="10"
                            />
                            <path
                              d="M231.9 244.3a79.3 79.3 0 1 0-158.8 0 79.5 79.5 0 1 0 158.8 0z"
                            />
                          </g>
                          <circle
                            cx="168.5"
                            cy="260.4"
                            r="36.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-135 182.1 246.7)"
                            cx="182.1"
                            cy="246.7"
                            rx="10"
                            ry="6.5"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M407.7 352.8a163.9 163.9 0 0 1-303.5 0c-2.3-5.5 1.5-12 7.5-13.2a780.8 780.8 0 0 1 288.4 0c6 1.2 9.9 7.7 7.6 13.2z"
                            fill="#3e4347"
                          />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <g fill="#fff">
                            <path
                              d="M115.3 339c18.2 29.6 75.1 32.8 143.1 32.8 67.1 0 124.2-3.2 143.2-31.6l-1.5-.6a780.6 780.6 0 0 0-284.8-.6z"
                            />
                            <ellipse cx="356.4" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="356.4"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <g fill="#fff">
                            <ellipse
                              transform="scale(-1) rotate(45 454 -906)"
                              cx="375.3"
                              cy="188.1"
                              rx="12"
                              ry="8.1"
                            />
                            <ellipse cx="155.6" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="155.6"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(45 454 -421.3)"
                            cx="174.5"
                            cy="188"
                            rx="12"
                            ry="8.1"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M232.3 201.3c0 49.2-74.3 94.2-74.3 94.2s-74.4-45-74.4-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M96.1 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2C80.2 229.8 95.6 175.2 96 173.3z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M215.2 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M428.4 201.3c0 49.2-74.4 94.2-74.4 94.2s-74.3-45-74.3-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M292.2 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2-77.8-65.7-62.4-120.3-61.9-122.2z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M411.3 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M381.7 374.1c-30.2 35.9-75.3 64.4-125.7 64.4s-95.4-28.5-125.8-64.2a17.6 17.6 0 0 1 16.5-28.7 627.7 627.7 0 0 0 218.7-.1c16.2-2.7 27 16.1 16.3 28.6z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 438.5c25.7 0 50-7.5 71.7-19.5-9-33.7-40.7-43.3-62.6-31.7-29.7 15.8-62.8-4.7-75.6 34.3 20.3 10.4 42.8 17 66.5 17z"
                            fill="#e24b4b"
                          />
                        </svg>
                        <svg
                          class="rating-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <g fill="#ffd93b">
                            <circle cx="256" cy="256" r="256" />
                            <path
                              d="M512 256A256 256 0 0 1 56.8 416.7a256 256 0 0 0 360-360c58 47 95.2 118.8 95.2 199.3z"
                            />
                          </g>
                          <path
                            d="M512 99.4v165.1c0 11-8.9 19.9-19.7 19.9h-187c-13 0-23.5-10.5-23.5-23.5v-21.3c0-12.9-8.9-24.8-21.6-26.7-16.2-2.5-30 10-30 25.5V261c0 13-10.5 23.5-23.5 23.5h-187A19.7 19.7 0 0 1 0 264.7V99.4c0-10.9 8.8-19.7 19.7-19.7h472.6c10.8 0 19.7 8.7 19.7 19.7z"
                            fill="#e9eff4"
                          />
                          <path
                            d="M204.6 138v88.2a23 23 0 0 1-23 23H58.2a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#45cbea"
                          />
                          <path
                            d="M476.9 138v88.2a23 23 0 0 1-23 23H330.3a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#e84d88"
                          />
                          <g fill="#38c0dc">
                            <path
                              d="M95.2 114.9l-60 60v15.2l75.2-75.2zM123.3 114.9L35.1 203v23.2c0 1.8.3 3.7.7 5.4l116.8-116.7h-29.3z"
                            />
                          </g>
                          <g fill="#d23f77">
                            <path
                              d="M373.3 114.9l-66 66V196l81.3-81.2zM401.5 114.9l-94.1 94v17.3c0 3.5.8 6.8 2.2 9.8l121.1-121.1h-29.2z"
                            />
                          </g>
                          <path
                            d="M329.5 395.2c0 44.7-33 81-73.4 81-40.7 0-73.5-36.3-73.5-81s32.8-81 73.5-81c40.5 0 73.4 36.3 73.4 81z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 476.2a70 70 0 0 0 53.3-25.5 34.6 34.6 0 0 0-58-25 34.4 34.4 0 0 0-47.8 26 69.9 69.9 0 0 0 52.6 24.5z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M290.3 434.8c-1 3.4-5.8 5.2-11 3.9s-8.4-5.1-7.4-8.7c.8-3.3 5.7-5 10.7-3.8 5.1 1.4 8.5 5.3 7.7 8.6z"
                            fill="#fff"
                            opacity=".2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buttons my-5">
                  <button @click.prevent="step5Back" class="btn btn-danger">
                    <i class="far fa-arrow-alt-circle-left"></i> Önceki
                  </button>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  src="../İcons/e.jpg"
                  alt="new-home-1-img"
                  class="
                    float-right
                    img-responsive
                    w-100
                    img-all img-phone-screen
                  "
                  height="400"
                />
              </div>
            </div>
          </div>
        </transition>

        <!-- New-Home-Step-6 Finish -->
        <transition name="home">
          <div class="containers mt-5" v-if="steps.step6">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1 class="h1 mb-3">
                  Fiyat / Kalite oranı hakkında ne düşünüyorsunuz? (Kalite)
                </h1>
                <span class="text-muted">6.ADIM</span>
                <div class="feedback mt-0 pt-1">
                  <div class="rating">
                    <input
                      v-model="step6RatingPrice5"
                      type="radio"
                      name="rating"
                      id="rating-5"
                    />
                    <label
                      @click.prevent="step6RatingPrice5Control"
                      for="rating-5"
                    ></label>
                    <input
                      v-model="step6RatingPrice4"
                      type="radio"
                      name="rating"
                      id="rating-4"
                    />
                    <label
                      @click.prevent="step6RatingPrice4Control"
                      for="rating-4"
                    ></label>
                    <input
                      v-model="step6RatingPrice3"
                      type="radio"
                      name="rating"
                      id="rating-3"
                    />
                    <label
                      @click.prevent="step6RatingPrice3Control"
                      for="rating-3"
                    ></label>
                    <input
                      v-model="step6RatingPrice2"
                      type="radio"
                      name="rating"
                      id="rating-2"
                    />
                    <label
                      @click.prevent="step6RatingPrice2Control"
                      for="rating-2"
                    ></label>
                    <input
                      v-model="step6RatingPrice1"
                      type="radio"
                      name="rating"
                      id="rating-1"
                    />
                    <label
                      @click.prevent="step6RatingPrice1Control"
                      for="rating-1"
                    ></label>
                    <div class="emoji-wrapper">
                      <div class="emoji">
                        <svg
                          class="rating-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z"
                            fill="#f4c534"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.433 -595.455)"
                            cx="166.318"
                            cy="199.829"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 180.87 175.82)"
                            cx="180.871"
                            cy="175.822"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-113.778 194.434 165.995)"
                            cx="194.433"
                            cy="165.993"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <ellipse
                            transform="scale(-1) rotate(31.21 715.397 -1237.664)"
                            cx="345.695"
                            cy="199.819"
                            rx="56.146"
                            ry="56.13"
                            fill="#fff"
                          />
                          <ellipse
                            transform="rotate(-148.804 360.25 175.837)"
                            cx="360.252"
                            cy="175.84"
                            rx="28.048"
                            ry="28.08"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(66.227 254.508 -573.138)"
                            cx="373.794"
                            cy="165.987"
                            rx="8.016"
                            ry="5.296"
                            fill="#5a5f63"
                          />
                          <path
                            d="M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z"
                            fill="#3e4347"
                          />
                        </svg>
                        <svg
                          class="rating-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M328.4 428a92.8 92.8 0 0 0-145-.1 6.8 6.8 0 0 1-12-5.8 86.6 86.6 0 0 1 84.5-69 86.6 86.6 0 0 1 84.7 69.8c1.3 6.9-7.7 10.6-12.2 5.1z"
                            fill="#3e4347"
                          />
                          <path
                            d="M269.2 222.3c5.3 62.8 52 113.9 104.8 113.9 52.3 0 90.8-51.1 85.6-113.9-2-25-10.8-47.9-23.7-66.7-4.1-6.1-12.2-8-18.5-4.2a111.8 111.8 0 0 1-60.1 16.2c-22.8 0-42.1-5.6-57.8-14.8-6.8-4-15.4-1.5-18.9 5.4-9 18.2-13.2 40.3-11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M357 189.5c25.8 0 47-7.1 63.7-18.7 10 14.6 17 32.1 18.7 51.6 4 49.6-26.1 89.7-67.5 89.7-41.6 0-78.4-40.1-82.5-89.7A95 95 0 0 1 298 174c16 9.7 35.6 15.5 59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M396.2 246.1a38.5 38.5 0 0 1-38.7 38.6 38.5 38.5 0 0 1-38.6-38.6 38.6 38.6 0 1 1 77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M380.4 241.1c-3.2 3.2-9.9 1.7-14.9-3.2-4.8-4.8-6.2-11.5-3-14.7 3.3-3.4 10-2 14.9 2.9 4.9 5 6.4 11.7 3 15z"
                            fill="#fff"
                          />
                          <path
                            d="M242.8 222.3c-5.3 62.8-52 113.9-104.8 113.9-52.3 0-90.8-51.1-85.6-113.9 2-25 10.8-47.9 23.7-66.7 4.1-6.1 12.2-8 18.5-4.2 16.2 10.1 36.2 16.2 60.1 16.2 22.8 0 42.1-5.6 57.8-14.8 6.8-4 15.4-1.5 18.9 5.4 9 18.2 13.2 40.3 11.4 64.1z"
                            fill="#f4c534"
                          />
                          <path
                            d="M155 189.5c-25.8 0-47-7.1-63.7-18.7-10 14.6-17 32.1-18.7 51.6-4 49.6 26.1 89.7 67.5 89.7 41.6 0 78.4-40.1 82.5-89.7A95 95 0 0 0 214 174c-16 9.7-35.6 15.5-59 15.5z"
                            fill="#fff"
                          />
                          <path
                            d="M115.8 246.1a38.5 38.5 0 0 0 38.7 38.6 38.5 38.5 0 0 0 38.6-38.6 38.6 38.6 0 1 0-77.3 0z"
                            fill="#3e4347"
                          />
                          <path
                            d="M131.6 241.1c3.2 3.2 9.9 1.7 14.9-3.2 4.8-4.8 6.2-11.5 3-14.7-3.3-3.4-10-2-14.9 2.9-4.9 5-6.4 11.7-3 15z"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M336.6 403.2c-6.5 8-16 10-25.5 5.2a117.6 117.6 0 0 0-110.2 0c-9.4 4.9-19 3.3-25.6-4.6-6.5-7.7-4.7-21.1 8.4-28 45.1-24 99.5-24 144.6 0 13 7 14.8 19.7 8.3 27.4z"
                            fill="#3e4347"
                          />
                          <path
                            d="M276.6 244.3a79.3 79.3 0 1 1 158.8 0 79.5 79.5 0 1 1-158.8 0z"
                            fill="#fff"
                          />
                          <circle cx="340" cy="260.4" r="36.2" fill="#3e4347" />
                          <g fill="#fff">
                            <ellipse
                              transform="rotate(-135 326.4 246.6)"
                              cx="326.4"
                              cy="246.6"
                              rx="6.5"
                              ry="10"
                            />
                            <path
                              d="M231.9 244.3a79.3 79.3 0 1 0-158.8 0 79.5 79.5 0 1 0 158.8 0z"
                            />
                          </g>
                          <circle
                            cx="168.5"
                            cy="260.4"
                            r="36.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="rotate(-135 182.1 246.7)"
                            cx="182.1"
                            cy="246.7"
                            rx="10"
                            ry="6.5"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M407.7 352.8a163.9 163.9 0 0 1-303.5 0c-2.3-5.5 1.5-12 7.5-13.2a780.8 780.8 0 0 1 288.4 0c6 1.2 9.9 7.7 7.6 13.2z"
                            fill="#3e4347"
                          />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <g fill="#fff">
                            <path
                              d="M115.3 339c18.2 29.6 75.1 32.8 143.1 32.8 67.1 0 124.2-3.2 143.2-31.6l-1.5-.6a780.6 780.6 0 0 0-284.8-.6z"
                            />
                            <ellipse cx="356.4" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="356.4"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <g fill="#fff">
                            <ellipse
                              transform="scale(-1) rotate(45 454 -906)"
                              cx="375.3"
                              cy="188.1"
                              rx="12"
                              ry="8.1"
                            />
                            <ellipse cx="155.6" cy="205.3" rx="81.1" ry="81" />
                          </g>
                          <ellipse
                            cx="155.6"
                            cy="205.3"
                            rx="44.2"
                            ry="44.2"
                            fill="#3e4347"
                          />
                          <ellipse
                            transform="scale(-1) rotate(45 454 -421.3)"
                            cx="174.5"
                            cy="188"
                            rx="12"
                            ry="8.1"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          class="rating-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                          <path
                            d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                            fill="#f4c534"
                          />
                          <path
                            d="M232.3 201.3c0 49.2-74.3 94.2-74.3 94.2s-74.4-45-74.4-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M96.1 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2C80.2 229.8 95.6 175.2 96 173.3z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M215.2 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M428.4 201.3c0 49.2-74.4 94.2-74.4 94.2s-74.3-45-74.3-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M292.2 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2-77.8-65.7-62.4-120.3-61.9-122.2z"
                            fill="#d03f3f"
                          />
                          <path
                            d="M411.3 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                            fill="#fff"
                          />
                          <path
                            d="M381.7 374.1c-30.2 35.9-75.3 64.4-125.7 64.4s-95.4-28.5-125.8-64.2a17.6 17.6 0 0 1 16.5-28.7 627.7 627.7 0 0 0 218.7-.1c16.2-2.7 27 16.1 16.3 28.6z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 438.5c25.7 0 50-7.5 71.7-19.5-9-33.7-40.7-43.3-62.6-31.7-29.7 15.8-62.8-4.7-75.6 34.3 20.3 10.4 42.8 17 66.5 17z"
                            fill="#e24b4b"
                          />
                        </svg>
                        <svg
                          class="rating-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <g fill="#ffd93b">
                            <circle cx="256" cy="256" r="256" />
                            <path
                              d="M512 256A256 256 0 0 1 56.8 416.7a256 256 0 0 0 360-360c58 47 95.2 118.8 95.2 199.3z"
                            />
                          </g>
                          <path
                            d="M512 99.4v165.1c0 11-8.9 19.9-19.7 19.9h-187c-13 0-23.5-10.5-23.5-23.5v-21.3c0-12.9-8.9-24.8-21.6-26.7-16.2-2.5-30 10-30 25.5V261c0 13-10.5 23.5-23.5 23.5h-187A19.7 19.7 0 0 1 0 264.7V99.4c0-10.9 8.8-19.7 19.7-19.7h472.6c10.8 0 19.7 8.7 19.7 19.7z"
                            fill="#e9eff4"
                          />
                          <path
                            d="M204.6 138v88.2a23 23 0 0 1-23 23H58.2a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#45cbea"
                          />
                          <path
                            d="M476.9 138v88.2a23 23 0 0 1-23 23H330.3a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                            fill="#e84d88"
                          />
                          <g fill="#38c0dc">
                            <path
                              d="M95.2 114.9l-60 60v15.2l75.2-75.2zM123.3 114.9L35.1 203v23.2c0 1.8.3 3.7.7 5.4l116.8-116.7h-29.3z"
                            />
                          </g>
                          <g fill="#d23f77">
                            <path
                              d="M373.3 114.9l-66 66V196l81.3-81.2zM401.5 114.9l-94.1 94v17.3c0 3.5.8 6.8 2.2 9.8l121.1-121.1h-29.2z"
                            />
                          </g>
                          <path
                            d="M329.5 395.2c0 44.7-33 81-73.4 81-40.7 0-73.5-36.3-73.5-81s32.8-81 73.5-81c40.5 0 73.4 36.3 73.4 81z"
                            fill="#3e4347"
                          />
                          <path
                            d="M256 476.2a70 70 0 0 0 53.3-25.5 34.6 34.6 0 0 0-58-25 34.4 34.4 0 0 0-47.8 26 69.9 69.9 0 0 0 52.6 24.5z"
                            fill="#e24b4b"
                          />
                          <path
                            d="M290.3 434.8c-1 3.4-5.8 5.2-11 3.9s-8.4-5.1-7.4-8.7c.8-3.3 5.7-5 10.7-3.8 5.1 1.4 8.5 5.3 7.7 8.6z"
                            fill="#fff"
                            opacity=".2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buttons my-5">
                  <button @click.prevent="step6Back" class="btn btn-danger">
                    <i class="far fa-arrow-alt-circle-left"></i> Önceki
                  </button>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  src="../İcons/abcd.png"
                  alt="new-home-1-img"
                  style="margin-right: -5%"
                  class="
                    float-right
                    img-responsive
                    w-100
                    img-all img-phone-screen
                  "
                  height="400"
                />
              </div>
            </div>
          </div>
        </transition>
        <!-- New-Home-Step-6 Finish -->
        <transition name="home">
          <div class="containers mt-5" v-if="steps.step7">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h2 class="h2 mb-3">
                  Genel olarak ev sahibi hakkındaki yorumlarınız. (Yorum)
                </h2>
                <div class="text-muted my-4">7.ADIM</div>
                <textarea
                  name="decreption"
                  class="form-control"
                  placeholder="Yorumlarınız.."
                  v-model="decreption"
                  id=""
                  cols="20"
                  rows="5"
                ></textarea>
                <div class="buttons my-5">
                  <button @click.prevent="step7Back" class="btn btn-danger">
                    <i class="far fa-arrow-alt-circle-left"></i> Önceki
                  </button>
                  <button
                    :disabled="$v.decreption.$invalid"
                    @click.prevent="sendEvaluation"
                    class="btn btn-danger float-right"
                  >
                    {{ loadingFinishButton ? "Yükleniyor..." : "Bitir" }}
                  </button>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  src="../İcons/agd.png"
                  alt="new-home-1-img"
                  style="margin-right: -5%"
                  class="
                    float-right
                    img-responsive
                    w-100
                    img-all img-phone-screen
                  "
                  height="400"
                />
              </div>
            </div>
          </div>
        </transition>
        <transition name="home">
          <div class="containers mt-5" v-if="steps.step8">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h2
                  class="h2 mb-3 img-phone-screen text-center"
                  style="margin-top: 21%"
                >
                  Değerlendirmeleriniz başarıyla gönderilmiştir.
                  <img src="../İcons/fireworks.png" alt="" /><img
                    src="../İcons/fireworks.png"
                    alt=""
                  />
                </h2>
                <h2 class="h2 mb-3 mobile-step8 text-center">
                  Değerlendirmeleriniz başarıyla gönderilmiştir.
                  <br />
                  <img src="../İcons/fireworks.png" alt="" /><img
                    src="../İcons/fireworks.png"
                    alt=""
                  />
                </h2>
                <div class="buttons mt-5 img-phone-screen">
                  <button
                    @click.prevent="$router.push('/homes')"
                    class="btn btn-danger d-block mx-auto"
                  >
                    Benzer konaklamaları keşfet
                  </button>
                </div>
                <div class="buttons mt-5 mobile-step8">
                  <button
                    @click.prevent="$router.push('/homes')"
                    class="btn btn-danger d-block mx-auto"
                  >
                    Benzer konaklamaları keşfet
                  </button>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  src="../İcons/asds.png"
                  alt="new-home-1-img"
                  style="margin-right: -5%"
                  class="float-right img-responsive w-100 img-all"
                  height="400"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TravelModeHeader from "@/components/travel/travelHeader";
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
  middleware: ["session-control", "auth"],
  layout: "homes",
  components: {
    TravelModeHeader,
  },
  data() {
    return {
      userData: [],
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
      },
      step1Rating5: false,
      step1Rating4: false,
      step1Rating3: false,
      step1Rating2: false,
      step1Rating1: false,

      step3RatingContact5: false,
      step3RatingContact4: false,
      step3RatingContact3: false,
      step3RatingContact2: false,
      step3RatingContact1: false,

      step2RatingMeeting5: false,
      step2RatingMeeting4: false,
      step2RatingMeeting3: false,
      step2RatingMeeting2: false,
      step2RatingMeeting1: false,

      step4RatingHonest5: false,
      step4RatingHonest4: false,
      step4RatingHonest3: false,
      step4RatingHonest2: false,
      step4RatingHonest1: false,

      step5RatingClean5: false,
      step5RatingClean4: false,
      step5RatingClean3: false,
      step5RatingClean2: false,
      step5RatingClean1: false,

      step6RatingPrice5: false,
      step6RatingPrice4: false,
      step6RatingPrice3: false,
      step6RatingPrice2: false,
      step6RatingPrice1: false,

      step1KonumRatingValue: null,
      step3RatingContactValue: null,
      step2RatingMeetingValue: null,
      step4RatingHonestValue: null,
      step5RatingCleanValue: null,
      step6RatingPriceValue: null,

      loadingFinishButton: false,
      decreption: null,
      stepsWidth: 30,
      meetingValueNotString:null,
      contactValueNotString:null,
      mapValueNotString:null,
      cleanValueNotString:null,
      priceAndValueNotString:null,
      honestValueNotString:null,
      generalEvaluation:null,
    };
  },
  validations: {
    decreption: {
      required,
    },
  },
  methods: {
    step1Rating1Control() {
      (this.step1Rating5 = false),
        (this.step1Rating4 = false),
        (this.step1Rating3 = false),
        (this.step1Rating2 = false),
        (this.step1Rating1 = null);
      this.step1KonumRatingValue = 1;
      setTimeout(() => {
        this.step1Go();
      }, 1000);
    },
    step1Rating2Control() {
      (this.step1Rating5 = false),
        (this.step1Rating4 = false),
        (this.step1Rating3 = false),
        (this.step1Rating2 = null),
        (this.step1Rating1 = false);
      this.step1KonumRatingValue = 2;
      setTimeout(() => {
        this.step1Go();
      }, 1000);
    },
    step1Rating3Control() {
      (this.step1Rating5 = false),
        (this.step1Rating4 = false),
        (this.step1Rating3 = null),
        (this.step1Rating2 = false),
        (this.step1Rating1 = false);
      this.step1KonumRatingValue = 3;
      setTimeout(() => {
        this.step1Go();
      }, 1000);
    },
    step1Rating4Control() {
      (this.step1Rating5 = false),
        (this.step1Rating4 = null),
        (this.step1Rating3 = false),
        (this.step1Rating2 = false),
        (this.step1Rating1 = false);
      this.step1KonumRatingValue = 4;
      setTimeout(() => {
        this.step1Go();
      }, 1000);
    },
    step1Rating5Control() {
      (this.step1Rating5 = null),
        (this.step1Rating4 = false),
        (this.step1Rating3 = false),
        (this.step1Rating2 = false),
        (this.step1Rating1 = false);
      this.step1KonumRatingValue = 5;
      setTimeout(() => {
        this.step1Go();
      }, 1000);
    },

    step3RatingContact5Control() {
      (this.step3RatingContact5 = null),
        (this.step3RatingContact4 = false),
        (this.step3RatingContact3 = false),
        (this.step3RatingContact2 = false),
        (this.step3RatingContact1 = false);
      this.step3RatingContactValue = 5;
      setTimeout(() => {
        this.step3Go();
      }, 1000);
    },
    step3RatingContact4Control() {
      (this.step3RatingContact5 = false),
        (this.step3RatingContact4 = null),
        (this.step3RatingContact3 = false),
        (this.step3RatingContact2 = false),
        (this.step3RatingContact1 = false);
      this.step3RatingContactValue = 4;
      setTimeout(() => {
        this.step3Go();
      }, 1000);
    },
    step3RatingContact3Control() {
      (this.step3RatingContact5 = false),
        (this.step3RatingContact4 = false),
        (this.step3RatingContact3 = null),
        (this.step3RatingContact2 = false),
        (this.step3RatingContact1 = false);
      this.step3RatingContactValue = 3;
      setTimeout(() => {
        this.step3Go();
      }, 1000);
    },
    step3RatingContact2Control() {
      (this.step3RatingContact5 = false),
        (this.step3RatingContact4 = false),
        (this.step3RatingContact3 = false),
        (this.step3RatingContact2 = null),
        (this.step3RatingContact1 = false);
      this.step3RatingContactValue = 2;
      setTimeout(() => {
        this.step3Go();
      }, 1000);
    },
    step3RatingContact1Control() {
      (this.step3RatingContact5 = false),
        (this.step3RatingContact4 = false),
        (this.step3RatingContact3 = false),
        (this.step3RatingContact2 = false),
        (this.step3RatingContact1 = null);
      this.step3RatingContactValue = 1;
      setTimeout(() => {
        this.step3Go();
      }, 1000);
    },

    step2RatingMeeting5Control() {
      this.step2RatingMeeting5 = null;
      this.step2RatingMeeting4 = false;
      this.step2RatingMeeting3 = false;
      this.step2RatingMeeting2 = false;
      this.step2RatingMeeting1 = false;
      this.step2RatingMeetingValue = 5;
      setTimeout(() => {
        this.step2Go();
      }, 1000);
    },
    step2RatingMeeting4Control() {
      this.step2RatingMeeting5 = false;
      this.step2RatingMeeting4 = null;
      this.step2RatingMeeting3 = false;
      this.step2RatingMeeting2 = false;
      this.step2RatingMeeting1 = false;
      this.step2RatingMeetingValue = 4;
      setTimeout(() => {
        this.step2Go();
      }, 1000);
    },
    step2RatingMeeting3Control() {
      this.step2RatingMeeting5 = false;
      this.step2RatingMeeting4 = false;
      this.step2RatingMeeting3 = null;
      this.step2RatingMeeting2 = false;
      this.step2RatingMeeting1 = false;
      this.step2RatingMeetingValue = 3;
      setTimeout(() => {
        this.step2Go();
      }, 1000);
    },
    step2RatingMeeting2Control() {
      this.step2RatingMeeting5 = false;
      this.step2RatingMeeting4 = false;
      this.step2RatingMeeting3 = false;
      this.step2RatingMeeting2 = null;
      this.step2RatingMeeting1 = false;
      this.step2RatingMeetingValue = 2;
      setTimeout(() => {
        this.step2Go();
      }, 1000);
    },
    step2RatingMeeting1Control() {
      this.step2RatingMeeting5 = false;
      this.step2RatingMeeting4 = false;
      this.step2RatingMeeting3 = false;
      this.step2RatingMeeting2 = false;
      this.step2RatingMeeting1 = null;
      this.step2RatingMeetingValue = 1;
      setTimeout(() => {
        this.step2Go();
      }, 1000);
    },

    step4RatingHonest5Control() {
      this.step4RatingHonest5 = null;
      this.step4RatingHonest4 = false;
      this.step4RatingHonest3 = false;
      this.step4RatingHonest2 = false;
      this.step4RatingHonest1 = false;
      this.step4RatingHonestValue = 5;
      setTimeout(() => {
        this.step4Go();
      }, 1000);
    },
    step4RatingHonest4Control() {
      this.step4RatingHonest5 = false;
      this.step4RatingHonest4 = null;
      this.step4RatingHonest3 = false;
      this.step4RatingHonest2 = false;
      this.step4RatingHonest1 = false;
      this.step4RatingHonestValue = 4;
      setTimeout(() => {
        this.step4Go();
      }, 1000);
    },
    step4RatingHonest3Control() {
      this.step4RatingHonest5 = false;
      this.step4RatingHonest4 = false;
      this.step4RatingHonest3 = null;
      this.step4RatingHonest2 = false;
      this.step4RatingHonest1 = false;
      this.step4RatingHonestValue = 3;
      setTimeout(() => {
        this.step4Go();
      }, 1000);
    },
    step4RatingHonest2Control() {
      this.step4RatingHonest5 = false;
      this.step4RatingHonest4 = false;
      this.step4RatingHonest3 = false;
      this.step4RatingHonest2 = null;
      this.step4RatingHonest1 = false;
      this.step4RatingHonestValue = 2;
      setTimeout(() => {
        this.step4Go();
      }, 1000);
    },
    step4RatingHonest1Control() {
      this.step4RatingHonest5 = false;
      this.step4RatingHonest4 = false;
      this.step4RatingHonest3 = false;
      this.step4RatingHonest2 = false;
      this.step4RatingHonest1 = null;
      this.step4RatingHonestValue = 1;
      setTimeout(() => {
        this.step4Go();
      }, 1000);
    },

    step5RatingClean5Control() {
      this.step5RatingClean5 = null;
      this.step5RatingClean4 = false;
      this.step5RatingClean3 = false;
      this.step5RatingClean2 = false;
      this.step5RatingClean1 = false;
      this.step5RatingCleanValue = 5;
      setTimeout(() => {
        this.step5Go();
      }, 1000);
    },
    step5RatingClean4Control() {
      this.step5RatingClean5 = false;
      this.step5RatingClean4 = null;
      this.step5RatingClean3 = false;
      this.step5RatingClean2 = false;
      this.step5RatingClean1 = false;
      this.step5RatingCleanValue = 4;
      setTimeout(() => {
        this.step5Go();
      }, 1000);
    },
    step5RatingClean3Control() {
      this.step5RatingClean5 = false;
      this.step5RatingClean4 = false;
      this.step5RatingClean3 = null;
      this.step5RatingClean2 = false;
      this.step5RatingClean1 = false;
      this.step5RatingCleanValue = 3;
      setTimeout(() => {
        this.step5Go();
      }, 1000);
    },
    step5RatingClean2Control() {
      this.step5RatingClean5 = false;
      this.step5RatingClean4 = false;
      this.step5RatingClean3 = false;
      this.step5RatingClean2 = null;
      this.step5RatingClean1 = false;
      this.step5RatingCleanValue = 2;
      setTimeout(() => {
        this.step5Go();
      }, 1000);
    },
    step5RatingClean1Control() {
      this.step5RatingClean5 = false;
      this.step5RatingClean4 = false;
      this.step5RatingClean3 = false;
      this.step5RatingClean2 = false;
      this.step5RatingClean1 = null;
      this.step5RatingCleanValue = 1;
      setTimeout(() => {
        this.step5Go();
      }, 1000);
    },

    step6RatingPrice5Control() {
      this.step6RatingPrice5 = null;
      this.step6RatingPrice4 = false;
      this.step6RatingPrice3 = false;
      this.step6RatingPrice2 = false;
      this.step6RatingPrice1 = false;
      this.step6RatingPriceValue = 5;
      setTimeout(() => {
        this.step6Go();
      }, 1000);
    },
    step6RatingPrice4Control() {
      this.step6RatingPrice5 = false;
      this.step6RatingPrice4 = null;
      this.step6RatingPrice3 = false;
      this.step6RatingPrice2 = false;
      this.step6RatingPrice1 = false;
      this.step6RatingPriceValue = 4;
      setTimeout(() => {
        this.step6Go();
      }, 1000);
    },
    step6RatingPrice3Control() {
      this.step6RatingPrice5 = false;
      this.step6RatingPrice4 = false;
      this.step6RatingPrice3 = null;
      this.step6RatingPrice2 = false;
      this.step6RatingPrice1 = false;
      this.step6RatingPriceValue = 3;
      setTimeout(() => {
        this.step6Go();
      }, 1000);
    },
    step6RatingPrice2Control() {
      this.step6RatingPrice5 = false;
      this.step6RatingPrice4 = false;
      this.step6RatingPrice3 = false;
      this.step6RatingPrice2 = null;
      this.step6RatingPrice1 = false;
      this.step6RatingPriceValue = 2;
      setTimeout(() => {
        this.step6Go();
      }, 1000);
    },
    step6RatingPrice1Control() {
      this.step6RatingPrice5 = false;
      this.step6RatingPrice4 = false;
      this.step6RatingPrice3 = false;
      this.step6RatingPrice2 = false;
      this.step6RatingPrice1 = null;
      this.step6RatingPriceValue = 1;
      setTimeout(() => {
        this.step6Go();
      }, 1000);
    },

    step1Go() {
      this.progress2 = 40;
      (this.steps.step1 = false), (this.steps.step2 = true);
    },
    step2Back() {
      this.stepsWidth = 30;
      this.steps.step2 = false;
      this.steps.step1 = true;
    },
    step2Go() {
      this.stepsWidth = 50;
      this.steps.step2 = false;
      this.steps.step3 = true;
    },
    step3Back() {
      this.stepsWidth = 40;
      this.steps.step3 = false;
      this.steps.step2 = true;
    },
    step3Go() {
      this.stepsWidth = 60;
      this.steps.step3 = false;
      this.steps.step4 = true;
    },
    step4Back() {
      this.stepsWidth = 50;
      this.steps.step4 = false;
      this.steps.step3 = true;
    },
    step4Go() {
      this.stepsWidth = 70;
      this.steps.step4 = false;
      this.steps.step5 = true;
    },
    step5Back() {
      this.stepsWidth = 60;
      this.steps.step5 = false;
      this.steps.step4 = true;
    },
    step5Go() {
      this.stepsWidth = 80;
      this.steps.step5 = false;
      this.steps.step6 = true;
    },
    step6Back() {
      this.stepsWidth = 70;
      this.steps.step6 = false;
      this.steps.step5 = true;
    },
    step6Go() {
      this.stepsWidth = 90;
      this.steps.step6 = false;
      this.steps.step7 = true;
    },
    step7Back() {
      this.stepsWidth = 80;
      this.steps.step7 = false;
      this.steps.step6 = true;
    },
    step7Go() {
      this.stepsWidth = 100;
      this.steps.step7 = false;
      this.steps.step8 = true;
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
            this.userData = newArray;
          }
        });
    },
    sendEvaluation() {
      this.loadingFinishButton = true;
        this.getEvaluation();
    },
    sendEvaluationData() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      switch (month) {
        case 0:
          month = "Ocak";
          break;
        case 1:
          month = "Şubat";
          break;
        case 2:
          month = "Mart";
          break;
        case 3:
          month = "Nisan";
          break;
        case 4:
          month = "Mayıs";
          break;
        case 5:
          month = "Haziran";
          break;
        case 6:
          month = "Temmuz";
          break;
        case 7:
          month = "Ağustos";
          break;
        case 8:
          month = "Eylül";
          break;
        case 9:
          month = "Ekim";
          break;
        case 10:
          month = "Kasım";
          break;
        case 11:
          month = "Aralık";
          break;
      }
      axios
        .post(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/homeData/" +
            this.$route.params.commentId +
            "/evaluation/.json",
          {
            guestId: this.userData.authId,
            guestProfileImage: this.userData.profileImage
              ? this.userData.profileImage
              : "https://image.flaticon.com/icons/png/512/149/149071.png",
            guestName: this.userData.fullName
              ? this.userData.fullName
              : "Misafir",
            year: year,
            month: month,
            decreption: this.decreption, // Yorum açıkalam
            clean: this.step5RatingCleanValue, // Temizlik puanı 1
            priceAndValue: this.step6RatingPriceValue, // Fiyat / kalite 2
            map: this.step1KonumRatingValue, // Konuma rahat ulaştın mı 3
            honest: this.step4RatingHonestValue, // Doğruluk 4
            contact: this.step3RatingContactValue, // İletişim  5
            meeting: this.step2RatingMeetingValue, // Karşılama   6
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.step7Go();
          } else {
            alert("Lütfen daha sonra tekrar deneyiniz!!");
          }
        });
    },
    getEvaluation() {
      let array = [];
      let map = [];
      let honest = [];
      let meeting = [];
      let contact = [];
      let price = [];
      let clean = [];
      let data = this.newAllData[0].evaluation;
      for (let key in data) {
        array.push({ firebaseId: key, ...data[key] });
      }
      this.generalLength = array.length + 1;
      array.forEach((element) => {
        price.push(element.priceAndValue);
        map.push(element.map);
        honest.push(element.honest);
        meeting.push(element.meeting);
        contact.push(element.contact);
        clean.push(element.clean);
      });
      this.chancePriceValue(price);
      this.chanceHonestValue(honest);
      this.chanceCleanValue(clean);
      this.chanceMapValue(map);
      this.chanceMeetingValue(meeting);
      this.chanceContactValue(contact);
    },
    searchEvaControl() {
      this.searchDataAll = this.evaluationAll.filter((s) =>
        s.decreption.startsWith(this.searchEva)
      );
    },
    chancePriceValue(price) {
      let priceValue = null;
      price.forEach((element) => {
        priceValue = priceValue + element;
      });
      let priceValue2 = null;
      priceValue2 = (priceValue + this.step6RatingPriceValue ) / (price.length + 1);
      this.priceAndValueNotString = priceValue2;
    },
    chanceHonestValue(honest) {
      let honestValue = null;
      honest.forEach((element) => {
        honestValue = honestValue + element;
      });
      let honestValue2 = null;
      honestValue2 = (honestValue + this.step4RatingHonestValue) / (honest.length + 1);
      this.honestValueNotString = honestValue2;
    },
    chanceCleanValue(clean) {
      let cleanValue = null;
      clean.forEach((element) => {
        cleanValue = cleanValue + element;
      });
      let cleanValue2 = null;
      cleanValue2 = (cleanValue + this.step5RatingCleanValue) / ( clean.length + 1);
      this.cleanValueNotString = cleanValue2;
    },
    chanceMapValue(map) {
      let mapValue = null;
      map.forEach((element) => {
        mapValue = mapValue + element;
      });
      let mapValue2 = null;
      mapValue2 = (mapValue + this.step1KonumRatingValue) / (map.length + 1);
      this.mapValueNotString = mapValue2;
    },
    chanceMeetingValue(meeting) {
      let meetingValue = null;
      meeting.forEach((element) => {
        meetingValue = meetingValue + element;
      });
      let meetingValue2 = null;
      meetingValue2 = (meetingValue + this.step2RatingMeetingValue) / (meeting.length + 1);
      this.meetingValueNotString = meetingValue2;
    },
    chanceContactValue(contact) {
      let contactValue = null;
      contact.forEach((element) => {
        contactValue = contactValue + element;
      });
      let contactValue2 = null;
      contactValue2 = (contactValue + this.step3RatingContactValue) / (contact.length + 1);
      this.contactValueNotString = contactValue2;
      let a = this.meetingValueNotString;
      let b = this.contactValueNotString;
      let c = this.mapValueNotString;
      let d = this.cleanValueNotString;
      let e = this.priceAndValueNotString;
      let f = this.honestValueNotString;

      let generalPuan =  (a + b + c + d + e + f ) / 6
      let generalString = generalPuan.toString();
      this.generalEvaluation = generalString.slice(0, 3);
      axios
         .put(
           "https://munhasir-ad882-default-rtdb.firebaseio.com/homeData/" +
             this.$route.params.commentId +
             "/generalPuan/.json",
           {
            generalEvaluation:this.generalEvaluation,
            generalLength:this.generalLength
           }
         )
         .then((res) => {
           console.log(res);
           if (res.status == 200) {
             this.sendEvaluationData();
           } else {
             alert("Lütfen daha sonra tekrar deneyiniz!!");
           }
         });
    },
  },
  computed: {
    newAllData: function () {
      return this.$store.getters.getHomesData.filter(
        (s) => s.firebaseId == this.$route.params.commentId
      );
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
}
.mobile-step8 {
  display: none;
}
@media (max-width: 762px) {
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