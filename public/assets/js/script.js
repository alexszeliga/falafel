$(document).ready(() => {
  // attach handler to "change devoured" buttons
  // TODO: attach to the window
  $(".change-devoured").on("click", e => {
    e.preventDefault();
    var id = e.currentTarget.dataset.id;
    var devouredStatus = e.currentTarget.dataset.devoured;
    $.ajax(`/api/falafel/${id}`, {
      type: "PUT",
      data: { id: id, devoured: devouredStatus }
    }).then(() => {
      location.reload();
    });
  });

  $(".submit-button").on("click", e => {
    e.preventDefault();

    var falafel = $("#falafel")
      .val()
      .trim();

    $.post("/api/falafel", { falafel: falafel }, response => {
      if (response !== "err") {
        location.reload();
      } else {
        console.log(response);
      }
    });
  });
  $(".delete-item").on("click", e => {
    e.preventDefault();
    var id = e.currentTarget.dataset.id;
    console.log(id);
    $.ajax(
      `/api/falafel/${id}`,
      // code to delete id with ajax
      { type: "DELETE", data: { id: id } }
    ).then(() => {
      location.reload();
    });
  });
});
