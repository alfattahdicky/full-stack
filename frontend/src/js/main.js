import * as bootstrap from "bootstrap";
import "../css/style.css";

import renderHome from "./components/features/home/home.js";
import actionTable from "./components/features/table/item";

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  actionTable();
});

const modalForm = new bootstrap.Modal("#modalView");
const idSubmit = document.getElementById("submitForm");
const formEl = document.getElementById("addForm");

const inputNumber = document.getElementById("inputNumber");
const btnBack = document.getElementById("btnBack");
const titleModal = document.getElementById("titleModal");
const formData = new FormData(formEl);

// tableBodyEl.addEventListener("click", handleClickItem);
