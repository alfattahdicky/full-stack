import modalForm from "../../core/modal/form-modal.js";
import { getDataById } from "../../../fetchers/fetch-data.js";
import { Modal } from "bootstrap";

const detail = async (modalId, id) => {
  const dataById = await getDataById(id);
  const payload = await dataById.payload;

  modalId.innerHTML = modalForm(
    "read",
    payload.nik,
    payload.fullName,
    payload.dateOfBirth,
    payload.gender,
    payload.address,
    payload.country
  );
  const modalShow = new Modal("#readView");
  const dateOfBirthInput = document.getElementById("bornId");
  const btnBack = document.getElementById("btnBack");
  dateOfBirthInput.value = payload.dateOfBirth;
  btnBack.addEventListener("click", () => window.location.reload());

  modalShow.show();
};

export default detail;
