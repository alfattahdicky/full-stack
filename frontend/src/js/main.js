import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/style.css";
import $ from "jquery";
import modalElement from "./modal";
import getDate from "./helper/date";

$("#btnDetail").click(function () {
  console.log("Open");
  $("#btnDetail").attr("data-bs-modal", "modal");
  $("#btnDetail").attr("data-bs-target", "#modalView");
  $("#modalId").append(   
    modalElement(
      3175050111011001,
      "Dicky AL Fatah",
      "Laki-Laki",
      "2001/11/01",
      "Jl. Lebak Para RT 05 / RW 05 No. 1",
      "Indonesia"
    )
  );
});
