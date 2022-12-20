const modalElement = (nik, name, date, gender, address, country) => {
  return `
  <div class="modal fade show" role="dialog" style="display: block;" aria-modal="true" sid="modalView" aria-labelledby="Modal Add" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header ">
          <section class="d-flex align-items-center">
            <img src="./assets/personal-data.png" class="object-cover" height="30px" alt="Data Person Image">
            <h1 class="ms-2 fs-2">Aplikasi Pribadi</h1>
          </section>
        </div>
        <div class="modal-body mx-3">
          <h3 class="fs-4">Tambah Data Baru</h3>
          <form action="">
            <div class="nik mb-3">
              <label for="number" class="fw-semibold">NIK</label>
              <input type="number" class="form-control" name="number" class="form-control" id="inputNumber" value=${nik} required>
            </div>
            <div class="name mb-3">
              <label for="name" class="fw-semibold d-block">Nama</label>
              <input type="text" name="name" class="form-control" id="inputName" value=${name} required>
            </div>
            <div class="kelamin mb-3">
              <label for="" class="d-block fw-semibold">Jenis kelamin</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="laki" value="Laki-Laki" checked=${
                  "Laki-Laki" === gender
                }>
                <label class="form-check-label" for="laki">
                  Laki-Laki
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="perempuan" value="Perempuan" checked=${
                  "perempuan" === gender
                }>
                <label class="form-check-label" for="perempuan">
                  Perempuan
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label for="lahir" class="d-block fw-semibold">Tanggal Lahir</label>
              <input type="date" name="lahir" class="form-control" id="bornId" value=${date} required>
            </div>
            <div class="mb-3">
              <label for="alamat" class="d-block fw-semibold">Alamat</label>
              <Textarea name="alamat" id="alamat" class="form-control" value=${address} required></Textarea>
            </div>
            <div class="mb-3">
              <label for="negara" class="fw-semibold">Negara</label>
              <select class="form-select" name="negara" value=${"Indonesia"} required>
                <option selected>Open this select menu</option>
                <option value="Argentina">Argentina</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Portugal">Portugal</option>
                <option value="Rusia">Rusia</option>
                <option value="Malaysia">Malaysia</option>
              </select>
            </div>
            <div class="modal-footer justify-content-start p-0 py-2">
              <button type="submit" class="btn btn-primary">Submit</button>
              <button data-bs-dismiss="modal" class="btn btn-outline-secondary btn-back">Kembali</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `;
};

export default modalElement;
