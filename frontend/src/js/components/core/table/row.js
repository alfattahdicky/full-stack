import tableData from "./table";

const renderRow = (datas) => {
  let element = "";
  datas.map((data, index, arr) => {
    element += tableData(
      index + 1,
      data.nik,
      data.fullName,
      data.gender,
      data.dateOfBirth,
      data.address,
      data.country
    );
  });
  // tableBodyEl.innerHTML = element;
  return element;
};

export default renderRow;
