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

function calculate() {
    const constant = 0.0018; // Стале число
<<<<<<< HEAD
    const inputValue = parseFloat(document.getElementById("inputValue").value);

    if (isNaN(inputValue)) {
        document.getElementById("resultField").value = "Некоректне число";
=======
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    if (isNaN(inputValue)) {
        document.getElementById('resultField').value = 'Некоректне число';
>>>>>>> c16d0466b8a4ca2db204d90fd346e9d3723c3b35
        return;
    }

    const result = inputValue * constant;
<<<<<<< HEAD
    document.getElementById("resultField").value = `${result.toFixed(6)} кг`;
=======

    // Прибираємо зайві нулі
    const formattedResult = result.toString();

    document.getElementById('resultField').value = `${formattedResult} кг`;
>>>>>>> c16d0466b8a4ca2db204d90fd346e9d3723c3b35
}
