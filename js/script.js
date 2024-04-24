window.addEventListener("DOMContentLoaded", function() {
    function mask(event) {
        var matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
    };
    var input = document.querySelector("#phone");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);

    var buttonAlert = document.getElementById("buttonAlert");
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    buttonAlert.addEventListener("click", function() {
        if (nameInput.checkValidity() && phoneInput.checkValidity()) {
            alert("Заявка отправлена! В скором времени с вами свяжется менеджер!");
        }
        // else {
        //     alert("Пожалуйста, заполните все поля корректно.");
        // }
    });
    var form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
        nameInput.value = "";
        phoneInput.value = "";
    });
});