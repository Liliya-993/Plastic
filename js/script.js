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
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    if (isNaN(inputValue)) {
        document.getElementById('resultField').value = 'Некоректне число';
        return;
    }

    const result = inputValue * constant;

    // Прибираємо зайві нулі
    const formattedResult = result.toString();

    document.getElementById('resultField').value = `${formattedResult} кг`;
}
