$(document).ready(() => {
  // attach handler to "change devoured" buttons
  // might have to be attached to the window
  $(".change-devoured").on("click", e => {
    e.preventDefault();
    var id = e.currentTarget.dataset.id;
    var devouredStatus = e.currentTarget.dataset.devoured;
    $.ajax({
      url: `/api/falafel/${id}`,
      data: { id: id, devoured: devouredStatus },
      type: "PUT",
      dataType: "json"
    }).then(response => {
      console.log(response);
    });
  });
  $(".submit-button").on("click", e => {
    e.preventDefault();
    console.log("add falafel");
  });
});
