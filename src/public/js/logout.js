$(document).ready(function () {
  $("#logout").click(function (e) {
    e.stopPropagation();
    tc = $(this);
    var cf = confirm("Are you sure!");
    if (cf == false) {
        e.preventDefault();
    }
  });
});
