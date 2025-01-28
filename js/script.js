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
document
    .getElementById("redirectButton")
    .addEventListener("click", function () {
        // Перенаправляємо на іншу сторінку
        window.location.href = "test.html";
    });

function calculate() {
    const constant = 0.0018; // Стале число
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    if (isNaN(inputValue)) {
        document.getElementById('resultField').value = 'Некоректне число';
        return;
    }

    const result = inputValue / constant;
    const roundedResult = Math.round(result); // Округлюємо результат до цілого
    document.getElementById('resultField').value = `${roundedResult} кришечок`;
}

function check() {
    if (frm.q1[0].checked) {
        document.getElementById("v1").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v1").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p1").innerHTML =
        "<font color='green'>Правильна відповідь</font>";

    if (frm.q2[1].checked) {
        document.getElementById("v2").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v2").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p2").innerHTML =
        "<font color='green'>Правильна відповідь</font>";

    if (frm.q3[2].checked) {
        document.getElementById("v3").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v3").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p3").innerHTML =
        "<font color='green'>Правильна відповідь</font>";

    if (frm.q4[2].checked) {
        document.getElementById("v4").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v4").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p4").innerHTML =
        "<font color='green'>Правильна відповідь</font>";

    if (frm.q5[3].checked) {
        document.getElementById("v5").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v5").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p5").innerHTML =
        "<font color='green'>Правильна відповідь</font>";

    if (frm.q6[3].checked) {
        document.getElementById("v6").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v6").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p6").innerHTML =
        "<font color='green'>Правильна відповідь</font>";

    if (frm.q7[2].checked) {
        document.getElementById("v7").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v7").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p7").innerHTML =
        "<font color='green'>Правильна відповідь</font>";

    if (frm.q8[2].checked) {
        document.getElementById("v8").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v8").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p8").innerHTML =
        "<font color='green'>Правильна відповідь</font>";

    if (frm.q9[1].checked) {
        document.getElementById("v9").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v9").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p9").innerHTML =
        "<font color='green'>Правильна відповідь</font>";

    if (frm.q10[3].checked) {
        document.getElementById("v10").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v10").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p10").innerHTML =
        "<font color='green'>Правильна відповідь</font>";

    if (frm.q11[4].checked) {
        document.getElementById("v11").innerHTML =
            "<font color='green'>Правильно</font>";
    } else {
        document.getElementById("v11").innerHTML =
            "<font color='red'>Помилка</font>";
    }
    document.getElementById("p11").innerHTML =
        "<font color='green'>Правильна відповідь</font>";
}

function del() {
    document.getElementById("p1").innerHTML = "";
    document.getElementById("v1").innerHTML = "&nbsp";
    document.getElementById("p2").innerHTML = "";
    document.getElementById("v2").innerHTML = "&nbsp";
    document.getElementById("p3").innerHTML = "";
    document.getElementById("v3").innerHTML = "&nbsp";
    document.getElementById("p4").innerHTML = "";
    document.getElementById("v4").innerHTML = "&nbsp";
    document.getElementById("p5").innerHTML = "";
    document.getElementById("v5").innerHTML = "&nbsp";
    document.getElementById("p6").innerHTML = "";
    document.getElementById("v6").innerHTML = "&nbsp";
    document.getElementById("p7").innerHTML = "";
    document.getElementById("v7").innerHTML = "&nbsp";
    document.getElementById("p8").innerHTML = "";
    document.getElementById("v8").innerHTML = "&nbsp";
    document.getElementById("p9").innerHTML = "";
    document.getElementById("v9").innerHTML = "&nbsp";
    document.getElementById("p10").innerHTML = "";
    document.getElementById("v10").innerHTML = "&nbsp";
    document.getElementById("p11").innerHTML = "";
    document.getElementById("v11").innerHTML = "&nbsp";
}

function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
}
