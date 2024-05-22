function changeCarousel(val) {
  const carousel = document.getElementById("items-carrusel");
  const items = document.getElementById("items-content");
  if (val.checked) {
    carousel.classList.remove("hidden");
    items.classList.add("hidden");
  } else {
    carousel.classList.add("hidden");
    items.classList.remove("hidden");
  }
}
let total = 0;
document.addEventListener("DOMContentLoaded", function () {
  function loadCarousel(title, data) {
    const carousel = document.getElementById("items-carrusel");
    let elements = "";
    for (let d of data) {
      //<!-- slide item -->
      const projectHTML = `                    
                <div class="swiper-slide duration-700 ease-in-out">
                  <section class="flex justify-center items-center h-full">
                    <div class="w-72 bg-gray-900 shadow-md rounded-xl duration-500 contrast-75 brightness-90 hover:scale-105 hover:shadow-xl hover:contrast-100 hover:brightness-100">
                      <a href="${d.link}" target="_blank">
                        <img src="${d.image}" alt="Product" class="h-80 w-72 object-cover rounded-t-xl">
                        <div class="px-4 py-3 w-72">
                          <span class="text-gray-300 mr-3 uppercase text-xs">${d.brand}</span>
                          <p class="text-lg font-bold text-black text-white truncate block uppercase">${d.title}</p>
                          <div class="flex items-center">
                          <p class="text-lg font-semibold cursor-auto my-3 text-blue-400">${d.price}</p>                                          
                          </div>
                        </div>
                      </a>
                    </div>
                  </section>
              </div>`;
      elements += projectHTML;
    }
    //<!-- Slider Title -->
    const ttl = `<div class="text-center pt-4">
                    <h1 class="text-3xl uppercase text-4xl font-bold text-center mt-8 text-gray-700">${title}</h1>
                 </div>`;

    //<!-- Slider wrapper -->
    const wrapper = `<div class="swiper-wrapper">${elements}</div>`;
    //<!-- Slider pagination -->
    const pagination = `<div class="swiper-pagination"></div>`;
    //<!-- navigation buttons -->
    const buttons = `<!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>`;
    //<!--  scrollbar -->
    const scrollbar = `<div class="swiper-scrollbar"></div>`;
    //<!-- swiper slider -->
    const swiper = `<div class="swiper">${wrapper}${pagination}${buttons}${scrollbar}</div>`;
    carousel.innerHTML += `${ttl}${swiper}`;
  }

  function loadData(title, data) {
    const projectsSection = document.getElementById("items-content");
    const content = `
                <div class="text-center pt-4">
                    <h1 class="text-3xl uppercase text-4xl font-bold text-center mt-8 text-gray-700">${title}</h1>
                </div>
                <div class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 mx-4 p-4 pb-10 sm:p-10 rounded-xl xl:flex-row bg-gray-200">
                `;
    let elements = "";
    for (let d of data) {
      try {
        total += +d.price.replaceAll("₡", "").replaceAll(",", "");
      } catch (error) {}
      const projectHTML = `
            <section class="">
                <div class="w-72 bg-gray-900 shadow-md rounded-xl duration-500 contrast-75 brightness-90 hover:scale-110 hover:shadow-xl hover:contrast-100 hover:brightness-100">
                    <a href="${d.link}" target="_blank" >
                        <img src="${d.image}" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-300 mr-3 uppercase text-xs">${d.brand}</span>
                            <p class="text-lg font-bold text-black text-white truncate block uppercase">${d.title}</p>
                            <div class="flex items-center">
                            <p class="text-lg font-semibold cursor-auto my-3 text-blue-400">${d.price}</p>                                          
                            </div>
                        </div>
                    </a>
                </div>
            </section>
            `;
      elements += projectHTML;
    }

    // Agrega el HTML generado al contenido de la sección
    projectsSection.innerHTML += content + elements + "</div>"; // close last div
  }

  function loadContent() {
    total = 0;
    loadData("Cocina", cocina);
    loadData("Baños", bathroom);
    loadData("Sala", sala);
    loadData("Luces", luces);
    try {
      formatoDinero = total.toLocaleString("es-CR", {
        style: "currency",
        currency: "CRC",
      });
      console.log("TOTAL: " + formatoDinero);
    } catch (error) {}

    loadCarousel("Cocina", cocina);
    loadCarousel("Baños", bathroom);
    loadCarousel("Luces", luces);

    // load swiper js
    new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: false,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }
  loadContent();
});
