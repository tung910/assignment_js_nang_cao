import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css";
import toastr from "toastr";
import { deleteBlog, getBlogs } from "../../api/blogs";
import $ from "../../utils/dom";
import reRender from "../../utils/rerender";

const blogs = {
    async render() {
        const { data } = await getBlogs();
        return /* html */ `${data.map((item) => `<tr class="text-gray-700  ">
        <td class="hidden w-28  md:block">
       <img class="object-cover w-full h-full m-3" src="${item.thumbnail}" />
        </td>
        <td class="px-4 py-3 text-sm">
        ${item.title}
        </td>
        <td class="px-4 py-3 text-sm">
        ${item.create_at}
        </td>
        <td class="px-4 py-3 text-sm">
        <div class="flex items-center space-x-4 text-sm">
        <a href="/#/admin/blogs/edit/${item.id}"
           class="edit-product flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
           aria-label="Edit">
           <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
              viewBox="0 0 20 20">
              <path
                 d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
              </path>
           </svg>
        </a>
        <button data-id="${item.id}"
           class="delete-blog flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
           aria-label="Delete">
           <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
              viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                 clip-rule="evenodd"></path>
           </svg>
        </button>
     </div>
    </td>
        
     </tr>`).join("")}`;
    },
    afterRender() {
        $(".delete-blog").forEach((btn) => {
            btn.addEventListener("click", () => {
                const { id } = btn.dataset;
                const notifier = new AWN();
                const onOk = () => {
                    deleteBlog(id)
                        .then(() => {
                            toastr.success("Xóa thành công");
                            reRender("#blogs-table", blogs);
                        })
                        .catch((err) => {
                            toastr.error(err);
                        });
                };
                const onCancel = () => "";
                notifier.confirm(
                    " ",
                    onOk,
                    onCancel,
                    {
                        labels: {
                            confirm: "Bạn có muốn xóa không?",
                        },
                    },
                );
            });
        });
    },
};
export default blogs;