import { getAllData } from "../../../fetchers/fetch-data.js";
import renderRow from "../../core/table/row.js";
import tableData from "../../core/table/table.js";
import Toastify from "toastify-js";

const read = () => {
  const tableBodyEl = document.getElementById("tableBody");

  getAllData()
    .then((datas) => {
      tableBodyEl.innerHTML = renderRow(datas, tableData);
    })
    .catch((err) => {
      Toastify({
        text: `Failed Get All Data, ${err.message}`,
        duration: 4000,
        gravity: "top",
        position: "center",
        style: {
          background: "#B33030",
        },
      }).showToast();
    });
};

export default read;
