import { postData } from "../../../fetchers/fetch-data";
import Toastify from "toastify-js";

export const getDataForm = () => {
  const nik = document.getElementById("inputNumber").value;
  const fullName = document.getElementById("inputName").value;
  const genderEl = document.getElementsByName("gender");
  const dateOfBirth = document.getElementById("bornId").value;
  const country = document.getElementById("selectCountry").value;
  const address = document.getElementById("alamat").value;
  let gender;

  genderEl.forEach((gen) => (gen.checked ? (gender = gen.value) : ""));

  const objData = {
    nik,
    fullName,
    gender,
    dateOfBirth,
    country,
    address,
  };
  return objData;
};

export const create = async (renderRow, data) => {
  try {
    const post = await postData(data);
    console.log(post);
    const datas = [];
    datas.push(post.payload);
    renderRow(datas);
    // formEl.reset();
    Toastify({
      text: "Success Post Data",
      duration: 2000,
      gravity: "top",
      position: "left",
      style: {
        background: "#68B984",
      },
    }).showToast();
  } catch (error) {
    // console.log(error.message);
    Toastify({
      text: error.message,
      duration: 2000,
      gravity: "top",
      position: "left",
      style: {
        background: "#B33030",
      },
    }).showToast();
  }
};
