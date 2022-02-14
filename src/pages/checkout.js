import CheckoutList from "../components/checkout";

const Checkout = {
    render() {
        document.title = "Thanh toán";
        return /* html */ `<main class="max-w-4xl container mx-auto my-32">
        <div class="container mx-auto px-6 bg-white border-2 pb-6">
           <div class="flex flex-col lg:flex-row mt-8">
              <div class="w-full lg:w-1/2 order-1">
                 <div class="flex items-center">
                    <h3 class="text-gray-700 text-2xl font-mono">Thanh toán</h3>
                 </div>
                 <form class="mt-8 lg:w-3/4">
                    <div>
                       <div class="mt-6">
                          <div class="relative z-0 mb-6 w-full group">
                             <input type="text" name="username"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                             <label for="username"
                                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform
                                 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                                  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                   >Tên khách hàng
                                   </label>
                          </div>
                       </div>
                       <div class="mt-6">
                       <div class="relative z-0 mb-6 w-full group">
                       <input type="email" name="email"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" " required />
                       <label for="email"
                          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform
                           -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                            peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                             peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                             >Email
                             </label>
                    </div>
                       </div>
                       <div class="mt-6">
                       <div class="relative z-0 mb-6 w-full group">
                       <input type="number" name="phone"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" " required />
                       <label for="phone"
                          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform
                           -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                            peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                             peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                             >Số điện thoại
                             </label>
                    </div>
                       </div>
                    </div>
                    
                    <div class="mt-8">
                    <h4 class="text-sm text-gray-500 font-medium">Địa chỉ</h4>
                    <div class="mt-6 flex">
                       <label class="block w-3/12">
                          <select class="form-select text-gray-700 mt-1 block w-full">
                             <option>VN</option>
                             <option>NY</option>
                             <option>DC</option>
                             <option>MH</option>
                             <option>MD</option>
                          </select>
                       </label>
                       <label class="block flex-1 ml-3">
                          <input type="text" class="form-input mt-1 block w-full text-gray-700"
                             placeholder="Address">
                       </label>
                    </div>
                 </div>
                 <div class="mt-8">
                 <h4 class="text-sm text-gray-500 font-medium">Ghi chú</h4>
                 <div class="mt-6 flex">
                 <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900
                  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="...."></textarea>

                 </div>
              </div>
                    <div class="flex items-center justify-between mt-8">
                       <a href="/#/products"
                          class="flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none">
                          <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                             <path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                          </svg>
                          <span class="mx-2">Tiếp tục mua hàng</span>
                       </a>
                       <button
                          class="flex items-center px-3 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                          <span>Thanh toán</span>
                          <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                             <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                       </button>
                    </div>
                 </form>
              </div>
              <div class="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
                 <div class="flex justify-center items-center lg:justify-end">
                    <div  id="product-table" class="border rounded-md max-w-md w-full px-4 py-3">
                       ${CheckoutList.render()}
                       
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </main>`;
    },

    afterRender() {
        const activeMenu = document.querySelector("#menu");
        activeMenu.classList.toggle("text-black");
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 100) {
                activeMenu.classList.add(
                    "bg-white",
                    "shadow-lg",
                    "transition-all",
                    "text-black",
                );
            } else {
                activeMenu.classList.remove(
                    "bg-white",
                    "shadow-lg",
                    "transition-all",
                    "text-black",
                );
            }
        });
        CheckoutList.afterRender();
    },
};
export default Checkout;