const images = [
  "./imgs/product1.png",
  "./imgs/product2.png",
  "./imgs/product3.png",
  "./imgs/product4.png",
  "./imgs/product5.png",
  "./imgs/product6.png",
  "./imgs/product7.png",
  "./imgs/product8.png",
];

(function renderProductItem() {
  const products = document.querySelector(".products");

  const html = images
    .map((url) => {
      return `<div class="lg:w-1/5 sm:w-1/3 w-full ">
              <img
                src=${url}
                alt=""
                class="object-cover object-center hover:shadow-lg duration-150 ease-in-out hover:scale-[1.02] cursor-pointer w-full h-48" />
              <div class="flex items-start justify-between mt-2">
                <span>
                  <p class="text-gray-500">Product Name</p>
                  <p>£9.99</p>
                </span>
                <span>
                  <i class="ti-heart text-lg cursor-pointer font-bold text-gray-600 hover:text-black"></i>
                </span>
              </div>
            </div>`;
    })
    .join("");

  products.innerHTML = html;
})();
