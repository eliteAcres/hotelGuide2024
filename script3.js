document.addEventListener("DOMContentLoaded", function () {
    var button3 = document.getElementById("googleButton");

    button3.addEventListener("click", function () {
        window.open("https://www.google.com/travel/search?q=semporna%20seaview%20hotel&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4597339%2C4757164%2C4814050%2C4864715%2C4874190%2C4886480%2C4893075%2C4899568%2C4899570%2C4924070%2C4965990%2C4990494%2C72298667%2C72302247%2C72317059%2C72321071%2C72354388&hl=en-MY&gl=my&ssta=1&ts=CAESABpHCikSJzIlMHgzMjNmZmYwY2I4YzUzY2JmOjB4OGZhMGI2OWFhNmM4MjNlYhIaEhQKBwjnDxAKGAkSBwjnDxAKGAoYATICEAA&qs=CAEyFENnc0k2OGVndHFyVHJkQ1BBUkFCOAJCCQnrI8immragj0IJCesjyKaatqCP&ap=KigKEgmGEGSaf-oRQBGDhgVCi6ddQBISCUa3uZp76xFAEYOGZdmTp11AugEHcmV2aWV3cw&ictx=1&sa=X&ved=0CAAQ5JsGahcKEwjgkvy8ru-BAxUAAAAAHQAAAAAQDA", "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var button4 = document.getElementById("suggestButton");

    button4.addEventListener("click", function () {
        window.open("https://forms.office.com/r/QW32gJv71w", "_blank");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "home.html";
    });
});
