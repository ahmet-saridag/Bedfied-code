<template>
  <div class="container">
    <hr class=" w-25 d-block mx-auto bg-dark"  />
    <h1
      class="text-center font-weight-bold my-5"
      style="font-size: 3rem !important; cursor: pointer"
    >
      Sık Sorulan Sorular
    </h1>

    <div class="accordion text-center" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link text-dark"
              style="font-size: 1.5rem"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Kimler Bedfied'da ev sahipliği yapabilir?
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body" style="font-size: 1.5rem">
            Boş odası veya evi olan herkes Bedfied misafirlerini ev sahipliği
            deneyimi sunabilir
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed text-dark"
              style="font-size: 1.5rem"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Yerimi kaydetmemin maliyeti nedir?
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div class="card-body text-dark" style="font-size: 1.5rem">
            Yerinizi kaydetmenizin maliyeti yoktur. Tamamen ücretsiz sizin
            belirlediğiniz ücretlerle misafirlerinize iyi bir deneyim sağlamanız
            için 0% komisyon alıyoruz. Sizin eviniz sizin kurallarınız.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed text-dark"
              style="font-size: 1.5rem"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Rezervasyon yapmadan önce misafirlerden neler istenir?
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          style="font-size: 1.5rem"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div class="card-body text-dark">
            Misafirlerinizden isteklerinizi talep edebilirsiniz. ( Evcil köpek
            istememek , En fazla 4 misafir gibi )
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>