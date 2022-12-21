import * as bootstrap from "bootstrap";
import "../css/style.css";
import Toastify from "toastify-js";

import modalElement from "./modal";
import getDate from "./helper/date";
import tableData from "./table";
import BASEURL from "./config/global";

const url = `${BASEURL.url}${BASEURL.api}`;
const tableBodyEl = document.getElementById("tableBody");
const modalForm = new bootstrap.Modal("#modalView");
const idSubmit = document.getElementById("submitForm");
const formEl = document.getElementById("addForm");
const modalId = document.getElementById("modalId");
const inputNumber = document.getElementById("inputNumber");
const btnBack = document.getElementById("btnBack");
const titleModal = document.getElementById("titleModal");
const formData = new FormData(formEl);
let element = "";

const renderRow = (datas) => {
  datas.map((data, index, arr) => {
    element += tableData(
      index + 1,
      data.nik,
      data.fullName,
      data.gender,
      data.dateOfBirth,
      data.address,
      data.country
    );
  });
  tableBodyEl.innerHTML = element;
};

async function getAllData() {
  const response = await fetch(url, {
    method: "GET",
  });
  const allData = await response.json();
  if (allData.status === 500) {
    Toastify({
      text: "Cannot Get All Data",
      duration: 3000,
      gravity: "top",
      stopOnFocus: true,
      close: true,
      newWindow: true,
      position: "right",
      style: {
        background: "#B33030",
      },
    }).showToast();
    throw new Error("Cannot Get Data");
  }

  renderRow(allData);
}

async function postData(data) {
  const post = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/schema+json",
    },
    body: JSON.stringify(data),
  });
  const result = await post.json();
  if (result.status === 400) {
    throw new Error("NIK Sudah Ada");
  }
  return result;
}

async function getDataById(id) {
  const getData = await fetch(`${url}/${id}`, {
    method: "GET",
  });

  const response = await getData.json();
  if (response.status !== 200) throw new Error(response.messages[0]);
  return response;
}

async function putData(data) {
  const putData = await fetch(`${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/schema+json",
    },
    body: JSON.stringify(data),
  });

  const response = await putData.json();

  if (response.status !== 200) throw new Error("Updating has been Failed");

  return response;
}

async function deleteDataById(id) {
  const removeData = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/schema+json",
    },
    body: null,
  });
  const response = await removeData.json();
  console.log(response);
  if (response.status !== 200) throw Error(response.messages[0]);
  window.location.reload();
  return response;
}

document.getElementById("modalView").addEventListener("submit", (e) => {
  e.preventDefault();
  let arr = [];
  for (const obj of formData) {
    arr.push(obj);
  }
  const objData = Object.fromEntries(arr);

  console.log(objData);
  modalForm.hide();
  postData(objData)
    .then((data) => {
      const datas = [];
      datas.push(data.payload);
      renderRow(datas);
      Toastify({
        text: "Success Post Data",
        duration: 2000,
        gravity: "top",
        position: "left",
        style: {
          background: "#68B984",
        },
      }).showToast();
    })
    .catch((error) => {
      console.log(error.message);
      Toastify({
        text: error.message,
        duration: 2000,
        gravity: "top",
        position: "left",
        style: {
          background: "#B33030",
        },
      }).showToast();
    });
});

const handleClickItem = async (e) => {
  const btnDetail = e.target.id === "btnDetail";
  const btnEdit = e.target.id === "btnEdit";
  const btnDelete = e.target.id === "btnDelete";

  const id = e.target.parentElement.parentElement.dataset.id;

  if (btnDetail) {
    const dataById = await getDataById(id);
    const payload = await dataById.payload;

    modalId.innerHTML = modalElement(
      "read",
      payload.nik,
      payload.fullName,
      payload.dateOfBirth,
      payload.gender,
      payload.address,
      payload.country
    );
    const modalShow = new bootstrap.Modal("#readView");
    document.getElementById("bornId").value = payload.dateOfBirth;
    modalShow.show();
  }

  if (btnEdit) {
    const dataById = await getDataById(id);
    const payload = await dataById.payload;
    modalId.innerHTML = modalElement(
      "edit",
      payload.nik,
      payload.fullName,
      payload.dateOfBirth,
      payload.gender,
      payload.address,
      payload.country
    );
    const modalShow = new bootstrap.Modal("#editView");
    document.getElementById("bornId").value = payload.dateOfBirth;
    modalShow.show();
    const editForm = document.getElementById("actionForm");
    const editBtn = document.getElementById("editBtn");
    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const formEdit = new FormData(editForm);
      let arr = [];
      for (const obj of formEdit) {
        arr.push(obj);
      }
      const objData = Object.fromEntries(arr);
      console.log(objData);
      putData(objData)
        .then((msg) => {
          console.log(msg);
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
        })
        .catch((err) => {
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
        });
    });
  }

  if (btnDelete) {
    const remove = await deleteDataById(id);
    if (remove.status !== 200) {
      Toastify({
        text: "Success Post Data",
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
  }
};

getAllData();
tableBodyEl.addEventListener("click", handleClickItem);
