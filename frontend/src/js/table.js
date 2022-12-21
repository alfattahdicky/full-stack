const tableData = (
  index,
  nik,
  name,
  dateOfBirth,
  gender,
  address,
  country,
) => {
  return `<tr id="column" data-id=${nik}>
    <th>${index}</th>
    <td>${nik}</td>
    <td>${name}</td>
    <td>${dateOfBirth}</td>
    <td>${gender}</td>
    <td>${address}</td>
    <td>${country}</td>
    <td>
      <button class="fw-semibold text-warning btn-action" id="btnDetail">
        Detail
      </button>
      <button class="fw-semibold text-primary btn-action" id="btnEdit">
        Edit
      </button>
      <button class="fw-semibold text-danger btn-action" id="btnDelete">
        Hapus
      </button>
    </td>
  </tr>`;
};

export default tableData;
