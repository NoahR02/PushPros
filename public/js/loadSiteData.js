"use strict";

let loadData = (data) => {
  let htmlData = "";

  data.map((data) => {
    htmlData += `
        <tr>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.url}</td>
        <tr>
      `;
  });

  $("tbody").html(htmlData);
}

$("button").click(async () => {
  try {
    await $.ajax({
      url: "/api/sites",
      type: "GET",
      async: true,
      dataType: "json",
      success: (data) => loadData(data)
    });
  } catch (e) {
    alert("Could not load data, please try again.");
  }
});