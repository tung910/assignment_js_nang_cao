/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import { limitPageProduct, limitPageProducts } from "../api/products";
import { getRelationships } from "../api/categories";
import { AddToCart } from "../api/cart";

const Product = {
    async render() {
        if (document.location.hash.split("#/productCates")[1]) {
            const { data: { products } } = await getRelationships(document.location.href.split("#")[1]);
            if (products) {
                return products.map((item) => /* html */`<div class="group relative">
            <div class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
            <div class="relative w-full h-full">
               <img
                  src="${item.featured_image}"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                  <img
                  src="${item.sub_image}"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
            </div>
   
            <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
               class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] popup-product z-10 group-hover:opacity-100 text-black"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
               </svg>
               <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
               class="add-to-cart h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-10 group-hover:opacity-100 text-black"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               <div class="italic absolute top-2 right-4 font-mono text-xl">
               ${(item.sale_off != 0) ? `${item.sale_off}%` : ""}
               </div>
               </div>
               <div class="mt-4 flex justify-between">
               <div>
               <h3 class="text-sm text-gray-700">
               <a href="/#/details/${item.id}">
               <span aria-hidden="true" class="absolute inset-0"></span>
               ${item.title}
               </a>
               </h3>
               <p class="mt-1 text-sm text-gray-500">${item.options[0].name}</p>
               </div>
               <p class="text-sm font-sans text-gray-900">${(+item.sale_off != 0) ? (+item.price * (+item.sale_off / 100)).toLocaleString("vi", { style: "currency", currency: "VND" }) : (+item.price).toLocaleString("vi", { style: "currency", currency: "VND" })}</p>
               </div>
               </div>`).join(" ");
            }
        } else if (document.location.hash.split("#/products")[1]) {
            const { data: limitPage } = await limitPageProducts(document.location.hash.split("#/products")[1]);
            return limitPage.map((item) => /* html */`<div class="group relative">
      <div class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
         <div class="relative w-full h-full">
            <img
               src="${item.featured_image}"
               alt="Front of men&#039;s Basic Tee in black."
               class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
            <img
               src="${item.sub_image}"
               alt="Front of men&#039;s Basic Tee in black."
               class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
         </div>

         <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] popup-product z-10 group-hover:opacity-100 text-black"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
         </svg>
         <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
               class="add-to-cart h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-10 group-hover:opacity-100 text-black"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               
               <div class="italic absolute top-2 right-4 font-mono text-xl">
               ${(item.sale_off != 0) ? `${item.sale_off}%` : ""}
               </div>
      </div>
      <div class="mt-4 flex justify-between">
         <div>
            <h3 class="text-sm text-gray-700">
               <a href="/#/details/${item.id}">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  ${item.title}
               </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">${item.options[0].name}</p>
         </div>
         <p class="text-sm font-sans text-gray-900">${(+item.sale_off != 0) ? (+item.price * (+item.sale_off / 100)).toLocaleString("vi", { style: "currency", currency: "VND" }) : (+item.price).toLocaleString("vi", { style: "currency", currency: "VND" })}</p>
         </div>
   </div>`).join(" ");
        } else {
            const { data } = await limitPageProduct(1, 8);
            return data.map((item) => /* html */`<div class="group relative">
      <div class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
         <div class="relative w-full h-full">
            <img
               src="${item.featured_image}"
               alt="Front of men&#039;s Basic Tee in black."
               class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
            <img
               src="${item.sub_image}"
               alt="Front of men&#039;s Basic Tee in black."
               class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
         </div>

         <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] popup-product z-10 group-hover:opacity-100 text-black"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
         </svg>
         <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
               class="add-to-cart h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-10 group-hover:opacity-100 text-black"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               
               <div class="italic absolute top-2 right-4 font-mono text-xl">
               ${(item.sale_off != 0) ? `${item.sale_off}%` : ""}
               </div>
      </div>
      <div class="mt-4 flex justify-between">
         <div>
            <h3 class="text-sm text-gray-700">
               <a href="/#/details/${item.id}">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  ${item.title}
               </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">${item.options[0].name}</p>
         </div>
         <p class="text-sm font-sans text-gray-900">${(+item.sale_off != 0) ? (+item.price * (+item.sale_off / 100)).toLocaleString("vi", { style: "currency", currency: "VND" }) : (+item.price).toLocaleString("vi", { style: "currency", currency: "VND" })}</p>
      </div>
      
   </div>`).join(" ");
        }
    },
    async renderDetail() {
        const { data } = await limitPageProduct(1, 4);
        return data.map((item) => /* html */`<div class="group relative">
<div class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
   <div class="relative w-full h-full">
      <img
         src="${item.featured_image}"
         alt="Front of men&#039;s Basic Tee in black."
         class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
      <img
         src="${item.sub_image}"
         alt="Front of men&#039;s Basic Tee in black."
         class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
   </div>

   <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] popup-product z-10 group-hover:opacity-100 text-black"
      fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
   </svg>
   <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
               class="add-to-cart h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-10 group-hover:opacity-100 text-black"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               <div class="italic absolute top-2 right-4 font-mono text-xl">
               ${(item.sale_off != 0) ? `${item.sale_off}%` : ""}
               </div>
</div>
<div class="mt-4 flex justify-between">
   <div>
      <h3 class="text-sm text-gray-700">
         <a href="/#/details/${item.id}">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${item.title}
         </a>
      </h3>
      <p class="mt-1 text-sm text-gray-500">${item.options[0].name}</p>
   </div>
   <p class="text-sm font-sans text-gray-900">${(+item.sale_off != 0) ? (+item.price * (+item.sale_off / 100)).toLocaleString("vi", { style: "currency", currency: "VND" }) : (+item.price).toLocaleString("vi", { style: "currency", currency: "VND" })}</p>
</div>
</div>`).join(" ");
    },
    afterRender() {
        /**
        * Thêm sản phẩm
        */
        AddToCart(".add-to-cart");
    },
};
export default Product;