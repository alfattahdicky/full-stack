export const modalDelete = (name) => {
  return `
  <div class="modal fade" id="modalDelete" aria-hidden="true" aria-labelledby="modalDelete" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          Anda yakin menghapus data ${name}?
        </div>
        <div class="modal-footer border-0">
          <button class="btn btn-primary" id="btnOk">Ok</button>
          <button class="btn btn-secondary" data-bs-dismiss="modal" id="btnBack">Batal</button>
        </div>
      </div>
    </div>
  </div>
  `;
};
