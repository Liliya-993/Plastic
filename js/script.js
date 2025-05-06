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
    ?.addEventListener("click", function () {
        // Перенаправляємо на іншу сторінку
        window.location.href = "Page-tabl.html";
    });

document
    .getElementById("redirectButton")
    ?.addEventListener("click", function () {
        // Перенаправляємо на іншу сторінку
        window.location.href = "test.html";
    });

function calculate() {
    const constant = 0.0018; // Стале число
    const inputValue = parseFloat(document.getElementById("inputValue").value);

    if (isNaN(inputValue)) {
        document.getElementById("resultField").value = "Некоректне число";
        return;
    }

    const result = inputValue * constant;
    const formattedResult = result.toString(); // Прибираємо зайві нулі
    document.getElementById("resultField").value = `${formattedResult} кг`;
}

function calculate() {
    const constant = 0.0018; // Стале число
    const inputValue = parseFloat(document.getElementById("inputValue").value);

    if (isNaN(inputValue)) {
        document.getElementById("resultField").value = "Некоректне число";
        return;
    }

    const result = inputValue * constant;
    const formattedResult = result.toString(); // Прибираємо зайві нулі
    document.getElementById("resultField").value = `${formattedResult} кг`;
}

// Функція для зміни поля
function switchField() {
    const fieldWrapper = document.querySelector(".search-form___wrap");
    const oldField = document.getElementById("inputValue");
    const newField = document.createElement("input");

    // Налаштування нового поля
    newField.type = "number";
    newField.id = "inputValue";
    newField.className = "search-form___field";
    newField.placeholder = "Введіть нове число (пластик)";

    // Замінюємо старе поле на нове
    oldField.replaceWith(newField);
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

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("test2");
    const firebaseConfig = {
        apiKey: "AIzaSyAcPRGRG97w5plkfImjUbz7ix2W1579ea4",
        authDomain: "ecolan-50b3c.firebaseapp.com",
        projectId: "ecolan-50b3c",
        storageBucket: "ecolan-50b3c.firebasestorage.app",
        messagingSenderId: "617217226913",
        appId: "1:617217226913:web:ded1fda17cf2387d8e18e0",
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    console.log("test");

    // Обробка реєстрації користувача
    document
        .getElementById("registerForm")
        ?.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert("Реєстрація успішна!");
                    console.log("Користувач:", userCredential.user);
                })
                .catch((error) => {
                    alert("Помилка: " + error.message);
                });
        });

    document
        .getElementById("loginForm")
        ?.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert("Вхід успішний!");
                    console.log(
                        "Авторизований користувач:",
                        userCredential.user
                    );
                    document.getElementById("loginError").textContent = "";
                })
                .catch((error) => {
                    document.getElementById("loginError").textContent =
                        "Помилка: " + error.message;
                });
        });
});
