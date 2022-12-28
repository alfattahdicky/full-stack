import renderRow from "../../core/table/row.js";
import read from "./read-feature.js";
import { create, getDataForm } from "./create-feature.js";

const btnAdd = document.getElementById("submitForm");
const formEl = document.getElementById("addForm");

const handleSubmit = (e) => {
  e.preventDefault();
  const dataForm = getDataForm();
  let createDataState = false;

  for (const data in dataForm) {
    console.log(`${dataForm[data]}`);
    if (dataForm[data] === "") {
      console.log("harus diisi");
      createDataState = false;
    } else {
      createDataState = true;
    }
  }

  if(createDataState) {
    formEl.reset();
    // console.log(dataForm);
    create(renderRow, dataForm);
  }

};

const renderHome = () => {
  btnAdd.addEventListener("click", handleSubmit);
  read();
};

export default renderHome;
