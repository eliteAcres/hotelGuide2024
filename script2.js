document.addEventListener("DOMContentLoaded", function () {
    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "home.html";
    });

    // Form button click event
    var formButton = document.getElementById("formButton");
    formButton.addEventListener("click", function () {
        // Replace 'YOUR_ZOHO_FORM_URL' with the actual URL of your Zoho Form
        window.open("https://forms.zohopublic.com/seaviewmanage/form/ServiceOrderForm/formperma/x1VK-1tJwsQDQPLb6WPdRkC7nQmYJno1Ap-38ZWgbzA", "_blank");
    });
});
