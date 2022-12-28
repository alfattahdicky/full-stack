const validationNIK = (e) => {
  const value = e.target.value;
  const description = document.getElementById("descNik");
  if (value.length > 16) {
    description.style.color = "red";
  }
  description.textContent = `Panjang NIK : ${value.length}`;
};

export default validationNIK;
