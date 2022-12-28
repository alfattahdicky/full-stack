import { Modal } from "bootstrap";
import { deleteDataById } from "../../../fetchers/fetch-data.js";
import Toastify from "toastify-js";
import modalDelete from "../../core/modal/delete-modal.js";

const deleteItem = (modalId, e, id) => {
  const fullName = e.target.parentElement.parentElement.children[2].textContent;
  modalId.innerHTML = modalDelete(fullName);

  const modalShow = new Modal("#modalDelete");
  modalShow.show();

  const idBtn = document.getElementById("btnOk");

  const handleItemDelete = async () => {
    const remove = await deleteDataById(id);
    if (remove.status !== 200) {
      Toastify({
        text: "Failed Delete Data",
        duration: 2000,
        gravity: "top",
        position: "left",
        style: {
          background: "#B33030",
        },
      }).showToast();
    }
    Toastify({
      text: "Success Deleted",
      duration: 2000,
      gravity: "top",
      position: "left",
      style: {
        background: "#68B984",
      },
    }).showToast();
  };

  idBtn.addEventListener("click", handleItemDelete);
};

export default deleteItem;
