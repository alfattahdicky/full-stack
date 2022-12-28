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

document
  .getElementById("btnBack")
  .addEventListener("click", () => window.location.reload());
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
