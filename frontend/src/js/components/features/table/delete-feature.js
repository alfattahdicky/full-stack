const fullName = e.target.parentElement.parentElement.children[2].textContent;
modalId.innerHTML = modalDelete(fullName);
const modalShow = new bootstrap.Modal("#modalDelete");
modalShow.show();
const idBtn = document.getElementById("btnOk");
idBtn.addEventListener("click", async () => {
  const remove = await deleteDataById(id);
  if (remove.status !== 200) {
    Toastify({
      text: "Failed Delete Data",
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
  console.log("tet");
});
