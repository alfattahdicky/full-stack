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
document
  .getElementById("btnBack")
  .addEventListener("click", () => window.location.reload());
modalShow.show();
