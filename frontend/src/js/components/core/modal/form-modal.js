const modalForm = (nameView, nik, fullName, date, gender, address, country) => {
  return `
  <div class="modal" id="${nameView}View" aria-labelledby="Read" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header ">
          <section class="d-flex align-items-center">
            <img src="./assets/personal-data.png" class="object-cover" height="30px" alt="Data Person Image">
            <h1 class="ms-2 fs-2">Aplikasi Pribadi</h1>
          </section>
        </div>
        <div class="modal-body mx-3">
          <h3 class="fs-4">${nameView} Data</h3>
          <form id="actionForm">
            <div class="nik mb-3">
              <label for="number" class="fw-semibold">NIK</label>
              <input type="text" class="form-control" maxlength="16" name="nik" class="form-control" id="inputNumber" value=${nik} required readonly>
            </div>
            <div class="name mb-3">
              <label for="name" class="fw-semibold d-block">Nama</label>
              <input type="text" name="fullName" class="form-control" id="inputName" 
              value=${fullName} required ${
    nameView === "read" ? "readonly" : ""
  }>
            </div>
            <div class="kelamin mb-3">
              <label for="" class="d-block fw-semibold">Jenis kelamin</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="laki" value="LAKI" ${
                  "LAKI" === gender ? "checked" : ""
                }  ${"perempuan" === gender ? "disabled" : ""}>
                <label class="form-check-label" for="laki">
                  Laki-Laki
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="perempuan" value="PEREMPUAN" ${
                  "PEREMPUAN" === gender ? "checked" : ""
                } ${"Laki-Laki" === gender ? "disabled" : ""}>
                <label class="form-check-label" for="perempuan">
                  Perempuan
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label for="lahir" class="d-block fw-semibold">Tanggal Lahir</label>
              <input type="date" name="dateOfBirth" class="form-control" id="bornId" value=${date} required ${
    nameView === "read" ? "readonly" : ""
  }>
            </div>
            <div class="mb-3">
              <label for="alamat" class="d-block fw-semibold">Alamat</label>
              <textarea name="address" id="alamat" class="form-control" required ${
                nameView === "read" ? "readonly" : ""
              }>${address}</textarea>
            </div>
            <div class="mb-3">
              <label for="negara" class="fw-semibold">Negara</label>
              <select class="form-select" name="country" value="Indonesia" required ${
                nameView === "read" ? "disabled" : ""
              }>
                <option>Open this select menu</option>
                <option value="ARGENTINA" selected=${
                  "ARGENTINA" === country
                }>Argentina</option>
                <option value="INDONESIA" selected=${
                  "INDONESIA" === country
                }>Indonesia</option>
                <option value="PORTUGAL" selected=${
                  "PORTUGAL" === country
                }>Portugal</option>
                <option value="RUSIA" selected=${
                  "RUSIA" === country
                }>Rusia</option>
              </select>
            </div>
            <div class="modal-footer justify-content-start p-0 py-2">
              <button type="submit" class="btn btn-primary"${
                nameView === "read" ? "disabled" : ""
              } id="editBtn" >Submit</button>
              <button data-bs-dismiss="modal" class="btn btn-outline-secondary btn-back" id="btnBack">Kembali</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `;
};

export default modalForm;
