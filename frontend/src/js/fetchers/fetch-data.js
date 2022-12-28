import BASEURL from "../config/global.js";

const url = `${BASEURL.url}${BASEURL.api}`;

async function getAllData() {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const allData = await response.json();
    if (allData.status === 500) {
      throw new Error("Cannot Get Data");
    }
    return allData;
  } catch (err) {
    return err.message;
  }
}

async function postData(data) {
  const post = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/schema+json",
    },
    body: JSON.stringify(data),
  });
  const result = await post.json();
  return result;
}

async function getDataById(id) {
  const getData = await fetch(`${url}/${id}`, {
    method: "GET",
  });

  const response = await getData.json();
  if (response.status !== 200) throw new Error(response.messages[0]);
  return response;
}

async function putData(data) {
  const putData = await fetch(`${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/schema+json",
    },
    body: JSON.stringify(data),
  });

  const response = await putData.json();

  if (response.status !== 200) throw new Error("Updating has been Failed");

  return response;
}

async function deleteDataById(id) {
  const removeData = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/schema+json",
    },
    body: null,
  });
  const response = await removeData.json();
  // console.log(response);
  if (response.status !== 200) throw Error(response.messages[0]);
  window.location.reload();
  return response;
}

export { getAllData, getDataById, postData, putData, deleteDataById };
