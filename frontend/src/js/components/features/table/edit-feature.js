import modalForm from "../../core/modal/form-modal";
import { getDataById } from "../../../fetchers/fetch-data";
import { Modal } from "bootstrap";
import { putData } from "../../../fetchers/fetch-data";
import Toastify from "toastify-js";

const edit = async (modalId, id) => {
  const dataById = await getDataById(id);
  const payload = await dataById.payload;

  modalId.innerHTML = modalForm(
    "edit",
    payload.nik,
    payload.fullName,
    payload.dateOfBirth,
    payload.gender,
    payload.address,
    payload.country
  );
  const modalShow = new Modal("#editView");
  const dateOfBirth = document.getElementById("bornId");
  const btnBack = document.getElementById("btnBack");

  dateOfBirth.value = payload.dateOfBirth;
  btnBack.addEventListener("click", () => window.location.reload());
  modalShow.show();

  const editForm = document.getElementById("actionForm");
  const editBtn = document.getElementById("editBtn");

  const handleItemEdit = async (e) => {
    e.preventDefault();
    const formEdit = new FormData(editForm);
    let arr = [];
    for (const obj of formEdit) {
      arr.push(obj);
    }
    const objData = Object.fromEntries(arr);
    objData.nik = Number(id);
    // console.log(objData);
    try {
      const updateData = await putData(objData);
      // console.log(updateData);
      Toastify({
        text: "Success Post Data",
        duration: 2000,
        gravity: "top",
        position: "left",
        style: {
          background: "#68B984",
        },
      }).showToast();
      modalShow.hide();
    } catch (err) {
      console.log(err);
      Toastify({
        text: err.message,
        duration: 2000,
        gravity: "top",
        position: "left",
        style: {
          background: "#B33030",
        },
      }).showToast();
    }
  };

  editBtn.addEventListener("click", handleItemEdit);
};

export default edit;
