document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".accordion-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {

      const targetId = this.getAttribute("data-target");
      const panel = document.getElementById(targetId);
      const icon = this.querySelector(".accordion-icon");

      const isOpen = !panel.classList.contains("hidden");

      // Close all panels
      buttons.forEach(btn => {
        const id = btn.getAttribute("data-target");
        const p = document.getElementById(id);

        p.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");

        const ic = btn.querySelector(".accordion-icon");
        ic.classList.remove("rotate-180");
      });

      // Open the clicked one
      if (!isOpen) {
        panel.classList.remove("hidden");
        this.setAttribute("aria-expanded", "true");
        icon.classList.add("rotate-180");
      }

    });
  });

});