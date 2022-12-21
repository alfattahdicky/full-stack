import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/style.css";
import $ from "jquery";
import modalElement from "./modal";
import getDate from "./helper/date";
import tableData from "./table";

const BASEURL = "http://localhost:8081/api/person";
const tableBodyEl = $("#tableBody");
const formEl = $("#addForm");
const datas = [];
let formData;

const requestAll = $.ajax({
  url: BASEURL,
  type: "GET",
});

formEl.on("submit", function (e) {
  e.preventDefault();
  const nik = Number($("#inputNumber").val());
  const fullName = $("#inputName").val();
  const gender = $("input[type='radio']:checked").val();
  const dateOfBirth = $("input[type='date']").val();
  const address = $("#alamat").val();
  const country = $("#selectCountry option:selected").val();
  formData = { nik, fullName, gender, dateOfBirth, address, country };
  $.ajax({
    url: BASEURL,
    type: "POST",
    data: JSON.stringify(formData),
    contentType: "application/schema+json",
    success: function (msg) {
      console.log(msg);
      datas.push(formData);
      window.location.replace("http://localhost:8085");
    },
    error: function (err) {
      console.log(err);
    },
  });
});

requestAll
  .then((msgs) => {
    if (!msgs) return;
    datas.push(...msgs);
  })
  .catch((err) => {
    if (err.status === 0) {
      console.log("Cannot get all data");
    }
  });

const handleDelete = (nik) => {
  console.log("delete", nik);
  // $.ajax({
  //   url: `${BASEURL}/${nik}`,
  //   type: "DELETE",
  //   success: function (msg) {
  //     console.log(msg);
  //     window.location.replace("http://localhost:8085");
  //   },
  //   error: function (err) {
  //     console.log(err);
  //   },
  // });
};

setTimeout(() => {
  console.log(datas);
  tableBodyEl.append(
    datas.map((msg, index) =>
      tableData(
        index + 1,
        msg.nik,
        msg.fullName,
        msg.gender,
        msg.dateOfBirth,
        msg.address,
        msg.country
      )
    )
  );
}, 1000);

$("#column").each(function (item, index) {
  console.log(item);
});

// $("#btnDetail").on("click", function () {
//   console.log("Open");
//   $("#btnDetail").attr("data-bs-modal", "modal");
//   $("#btnDetail").attr("data-bs-target", "#modalView");
//   $("#modalId").append(
//     modalElement(
//       3175050111011001,
//       "Dicky AL Fatah",
//       "Laki-Laki",
//       "Jl. Lebak Para RT 05 / RW 05 No. 1",
//       "Indonesia"
//     )
//   );
//   $("#bornId").attr("value", "2001-11-01");
// });
