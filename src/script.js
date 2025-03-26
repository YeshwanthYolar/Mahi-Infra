document.addEventListener("DOMContentLoaded", function() {
    function toggleDropdown(id) {
        var content = document.getElementById(id);
        var icon = document.getElementById("icon-" + id);

        if (content.classList.contains("active")) {
            content.classList.remove("active");
            icon.textContent = "+";
        } else {
            content.classList.add("active");
            icon.textContent = "-";
        }
    }

    window.toggleDropdown = toggleDropdown;
});
