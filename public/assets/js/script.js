$(document).ready(() => {
  // attach handler to "change devoured" buttons
  // might have to be attached to the window
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
    console.log("add falafel");
    $.post("/api/falafel", { falafel: falafel }, response => {
      location.reload();
    });
  });
});
