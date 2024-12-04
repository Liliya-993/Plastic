const swiper1 = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document
    .getElementById("redirectButton")
    .addEventListener("click", function () {
        // Перенаправляємо на іншу сторінку
        window.location.href = "Page-tabl.html";
    });

const inputNumber = index.html.getElementById("inputNumber");
const resultField = index.html.getElementById("resultField");

inputNumber.addEventListener("input", function () {
    const value = parseFloat(inputNumber.value);
    if (!isNaN(value)) {
        resultField.value = (value * 0.0018).toFixed(6); // Округляем до 6 знаков
    } else {
        resultField.value = ""; // Очистка поля результата, если введено не число
    }
});
