// eslint-disable-next-line import/no-cycle
import { signOut } from "firebase/auth";
import Cart from "../cart";
import reRender from "../../utils/rerender";
import Search from "../search";
import { auth } from "../../../firebase-config";

const Nav = {
    render() {
        return /* html */ `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" class="w-40" fill="currentColor"
        viewBox="0 0 170.445 21.625">
        <g id="Layer_1" data-name="Layer 1">
           <path id="Path_12" data-name="Path 12"
              d="M742.409,11.621c0-2.173.037-4.364-.139-6.52A5.086,5.086,0,0,0,737.13.2c-1.984-.1-6.207-.037-6.35,0v21.43c.143.026,4.366.087,6.35,0a5.111,5.111,0,0,0,5.148-4.885C742.433,15.044,742.413,13.329,742.409,11.621Zm-3.477,3.866a3.14,3.14,0,0,1-2.873,3.1c-.6.039-1.215,0-1.854,0V3.161a21.1,21.1,0,0,1,2.688.217,2.6,2.6,0,0,1,2.045,2.756c.052,3.112.061,6.237,0,9.353Z"
              transform="translate(-571.967 -0.118)" fill-rule="evenodd"></path>
           <path id="Path_13" data-name="Path 13"
              d="M662,3.2c-.974-2.343-3.04-3.071-5.49-3.034-3.188.035-5.487,1.971-5.594,5.046-.13,3.762-.122,7.532,0,11.3.087,2.923,1.852,4.746,4.824,5.111,3.753.461,6.535-1.265,6.82-5.1.135-1.832.124-8.384.015-9.827A11.784,11.784,0,0,0,662,3.2Zm-2.8,13.15a2.3,2.3,0,0,1-2.554,2.3,2.347,2.347,0,0,1-2.423-2.447c-.043-1.758,0-3.518,0-5.279h0c0-1.739-.03-3.477,0-5.216a2.415,2.415,0,0,1,3.058-2.449,2.191,2.191,0,0,1,1.925,2.223C659.249,9.106,659.258,12.733,659.2,16.349Z"
              transform="translate(-509.388 -0.128)" fill-rule="evenodd"></path>
           <path id="Path_14" data-name="Path 14"
              d="M374.072,1.86a5.917,5.917,0,0,0-4.951-1.7,5.306,5.306,0,0,0-5.185,5.051c-.124,3.812-.067,7.63,0,11.446a5.029,5.029,0,0,0,1.658,3.653,5.892,5.892,0,0,0,4.32,1.391,5.173,5.173,0,0,0,5.5-5c.117-1.9.176-8.788.128-10.323A6.722,6.722,0,0,0,374.072,1.86Zm-1.938,14.321a2.374,2.374,0,0,1-3.042,2.419,2.248,2.248,0,0,1-1.88-2.325c-.041-3.564-.048-7.132,0-10.7a2.316,2.316,0,0,1,2.512-2.391,2.283,2.283,0,0,1,2.391,2.421c.043,1.782.011,3.564.011,5.346h0c.026,1.747.052,3.488.009,5.229Z"
              transform="translate(-284.788 -0.121)" fill-rule="evenodd"></path>
           <path id="Path_15" data-name="Path 15"
              d="M443.42.184c.026,6.67.015,14.778.017,21.443,0,.148-.03.052.072.054,1.017.024,2.262.015,3.347.015l-.02-8.643h4.811l.013-3.312h-4.816V3.176h6.52V.16Z"
              transform="translate(-347.056 -0.125)" fill-rule="evenodd"></path>
           <path id="Path_16" data-name="Path 16"
              d="M581.781,9.989h-6v2.749h2.825c.1.869.08,4.861.08,5.726a4,4,0,0,1-3.455.576c-1.752-.55-1.739-2.093-1.821-3.847-.093-2.123-.139-3.373-.169-5.5-.022-1.326-.022-2.651.05-3.973a2.266,2.266,0,0,1,1.956-2.31A2.307,2.307,0,0,1,578.023,5.4c.141.713.183,1.443.27,2.184h3.488c-.059-.785-.2-1.521-.3-2.236-.278-2.023-1.087-3.784-3.114-4.59a6.307,6.307,0,0,0-6.624.787,3.94,3.94,0,0,0-1.13,1.452,9.464,9.464,0,0,0-.763,3.464c-.094,2.586-.089,5.179-.024,7.765a17.386,17.386,0,0,0,.463,3.555,4.9,4.9,0,0,0,4.525,3.886c5.133.637,6.954-2.132,6.954-2.132Z"
              transform="translate(-445.956 -0.134)" fill-rule="evenodd"></path>
           <path id="Path_17" data-name="Path 17"
              d="M146.566.022c-1.156,6.063-2.406,12.713-3.584,18.776-.176.908-.339,1.819-.513,2.769h3.284c.3-1.56.6-3.116.9-4.657h4.625c.311,1.545.619,3.084.932,4.635h3.477c-1.48-7.2-2.943-14.358-4.409-21.545C149.9,0,146.566.022,146.566.022Zm.626,13.769,1.676-9.3h.113l1.728,9.3Z"
              transform="translate(-111.508)" fill-rule="evenodd"></path>
           <path id="Path_18" data-name="Path 18"
              d="M71.55,21.694h9.8V18.636h-6.42V13.1h4.709V9.785c-1.373,0-3.39.015-4.781.015,0,0,.024-6.157.046-6.572h6.439V.19h-9.8Z"
              transform="translate(-56.001 -0.149)" fill-rule="evenodd"></path>
           <path id="Path_19" data-name="Path 19"
              d="M0,21.762H3.364V13.171H8.186l-.009-3.31H3.386l.009-6.552H9.951V.28H0Z" transform="translate(0 -0.219)"
              fill-rule="evenodd"></path>
           <path id="Path_20" data-name="Path 20"
              d="M237.592,11.871a4.79,4.79,0,0,0,2.947-4.129,10.3,10.3,0,0,0,0-3.182C240.3,1.822,238.3.118,235.386.118c-2.032,0-6.2-.026-6.346,0V21.657h3.345V12.931c.5,0,1.971-.024,1.971-.024.824,2.608,2.023,6.172,2.882,8.76,0,0,2.412.011,3.59.011-1.021-3.114-2.288-6.954-3.225-9.805ZM237.2,7.133c-.03,1.521-1.271,2.247-2.88,2.345-.606.037-1.217,0-1.856,0V2.822a13.427,13.427,0,0,1,2.688.122c1.254.246,2.021.717,2.045,2.121.009.428.009,1.723,0,2.069Z"
              transform="translate(-179.265 -0.083)" fill-rule="evenodd"></path>
        </g>
     </svg>
     <nav class="nav">
        <ul class="flex justify-center items-center gap-x-8">
           <li><a href="/#/">Trang chủ</a></li>
           <li><a href="/#/products">Sản phẩm</a></li>
           <li><a href="/#/contact">Liên hệ</a></li>
           <li><a href="/#/blogs">Blogs</a></li>
        </ul>
     </nav>
     <div class="header-right flex items-center gap-x-6">
        <div class="focus-within:border-teal-500">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer modal-open" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                 clip-rule="evenodd" />
           </svg>
        </div>
        <button class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
           @click="cartOpen = !cartOpen" aria-label="Notifications" aria-haspopup="true">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                 d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
           </svg>
           <!-- Notification badge -->
           ${JSON.parse(localStorage.getItem("cart")) && JSON.parse(localStorage.getItem("cart")).length !== 0
        ? `<span aria-hidden="true"
           class="absolute top-0 right-0 text-white inline-block w-4 h-4
            transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white
             rounded-full text-center text-[10px]">${
    JSON.parse(localStorage.getItem("cart")).length
}</span>`
        : ""
}
        </button>
        ${localStorage.getItem("user") ? `<a href="/#/me">Hello! ${JSON.parse(localStorage.getItem("user")).username ?? JSON.parse(localStorage.getItem("user"))?.displayName}</a> <svg
           xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer logout" viewBox="0 0 20 20"
           fill="currentColor">
           <path fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd" />
        </svg>`
        : `<a href="/#/login">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
           </svg>
        </a>`
}
     </div><div :class="cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'"
     class="fixed cart-modal right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 z-50">
     ${Cart.render()}</div>`;
    },
    afterRender() {
        Cart.afterRender();
        const logout = document.querySelector(".logout");
        Search.afterRender();
        if (logout) {
            logout.addEventListener("click", async (e) => {
                e.preventDefault();
                await signOut(auth);
                localStorage.removeItem("user");
                reRender("#authen", Nav);
            });
        }
    },
};
export default Nav;