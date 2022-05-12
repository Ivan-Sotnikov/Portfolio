function password_visibility() {
  var input = document.getElementById("pass");

  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
    document.getElementById("visib-btn").innerHTML = "visibility_off";
  } else {
    input.setAttribute("type", "password");
    document.getElementById("visib-btn").innerHTML = "visibility";
  }
}
function spaceship_souz() {
  let souz = document.getElementById("spaceship");
  souz.addEventListener("click", show_modal);
  function show_modal() {
    let visibility = document.getElementById("modal_spaceship");
    let close = document.getElementById("modal_spaceship_close");
    visibility.setAttribute(
      "class",
      "modal-wrap modal-wrap_visible modal-wrap_style"
    );
    close.addEventListener("click", close_modal);
    function close_modal() {
      visibility.setAttribute(
        "class",
        "modal-wrap modal-wrap_hidden modal-wrap_style"
      );
      event.stopPropagation();
    }
  }
}
spaceship_souz();
