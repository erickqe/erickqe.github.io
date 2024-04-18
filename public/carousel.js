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
    let indicators = "";
    let index = 0;
    for (let d of data) {
      //<!-- Carousel wrapper -->
      const projectHTML = `                    
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
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
                    </div>                  
                    `;
      elements += projectHTML;
      indicators += `<button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="${index}"></button>`;
      index++;
    }

    //<!-- Slider Title -->
    const ttl = `<div class="text-center pt-4">
                    <h1 class="text-3xl uppercase text-4xl font-bold text-center mt-8 text-gray-700">${title}</h1>
                 </div>`;

    //<!-- Slider indicators -->
    const indicatorsContent = `<div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">${indicators}</div>`;
    //<!-- Slider controls -->
    const sliderControls = `
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>`;

    //<!-- Carousel -->
    const elementWarper = `<div class="relative overflow-hidden rounded-lg" style="height: 555px;">${elements}</div>`;
    carousel.innerHTML += `${ttl}<div id="carousel" class="relative w-full" data-carousel="static">${
      elementWarper + indicatorsContent + sliderControls
    }</div>`;
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
  }
  loadContent();
});
