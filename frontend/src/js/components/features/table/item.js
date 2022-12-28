import detail from "./detail-feature";

const tableBodyEl = document.getElementById("tableBody");
const modalId = document.getElementById("modalId");

const handleClickItem = async (e) => {
  const btnDetail = e.target.id === "btnDetail";
  const btnEdit = e.target.id === "btnEdit";
  const btnDelete = e.target.id === "btnDelete";

  const id = e.target.parentElement.parentElement.dataset.id;

  if (btnDetail) {
    detail(modalId, id);
  }

  if (btnEdit) {
  }

  if (btnDelete) {
  }
};

const actionTable = () => {
  tableBodyEl.addEventListener("click", handleClickItem);
};

export default actionTable;
