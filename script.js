document.addEventListener("DOMContentLoaded", function () {
    var buttonsData = [
        { label: "Emergency \n紧急情况", link: "images/emergencycall.png" },
        { label: "TV Channel \n电视频道", link: "images/tvchannel.png" },
        { label: "Earth Hour \n地球一小时", link: "images/earthhour.png" },
        { label: "Energy Saving \n节能", link: "images/energysaving.png" }
    ];

    var buttonsContainer = document.getElementById("buttons-container");

    buttonsData.forEach(function (buttonInfo) {
        var button = document.createElement("button");
        button.className = "button";
        button.innerText = buttonInfo.label;
        button.addEventListener("click", function () {
            // Store the clicked image link in localStorage for retrieval in page2.html
            localStorage.setItem("imageLink", buttonInfo.link);
            window.location.href = "page1-1.html";
        });
        buttonsContainer.appendChild(button);
    });

    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "home.html";
    });
});




// page1-1.html logic
document.addEventListener("DOMContentLoaded", function () {

    var displayedImage = document.getElementById("displayedImage");
    var zoomLevel = 1; // Initial zoom level
    var maxZoom = 3; // Maximum zoom level
    var minZoom = 0.5; // Minimum zoom level

    var offsetX = 0; // Variable to store X-coordinate of mouse pointer when dragging starts
    var offsetY = 0; // Variable to store Y-coordinate of mouse pointer when dragging starts
    var lastX = 0;
    var lastY = 0;
    var isDragging = false; // Flag to indicate whether dragging is in progress

    function zoomIn() {
        if (zoomLevel < maxZoom) {
            zoomLevel += 0.1; // Increase zoom level by a small increment
            updateZoomAndTranslate();
        }
    }

    function zoomOut() {
        if (zoomLevel > minZoom) {
            zoomLevel -= 0.1; // Decrease zoom level by a small increment
            updateZoomAndTranslate();
        }
    }

    function updateZoomAndTranslate() {
        displayedImage.style.transform = `scale(${zoomLevel}) translate(${offsetX}px, ${offsetY}px)`;
    }

    function startDragging(e) {
        isDragging = true;
        offsetX = e.clientX - lastX;
        offsetY = e.clientY - lastY;
    }

    function stopDragging() {
        isDragging = false;
    }


    function dragImage(e) {
        if (isDragging) {
            lastX = e.clientX - offsetX;
            lastY = e.clientY - offsetY;

            displayedImage.style.transform = `scale(${zoomLevel}) translate(${lastX}px, ${lastY}px)`;
        }
    }
    
    displayedImage.addEventListener("mousedown", startDragging);
    document.addEventListener("mousemove", dragImage);
    document.addEventListener("mouseup", stopDragging);




    // Function to navigate back to page1.html
    function goBack() {
        window.location.href = "page1.html";
    }

    // Attach event listeners to buttons
    //var zoomInButton = document.getElementById("zoomInButton");
    //var zoomOutButton = document.getElementById("zoomOutButton");
    var backButton = document.querySelector(".backButton");

    //zoomInButton.addEventListener("click", zoomIn);
    //zoomOutButton.addEventListener("click", zoomOut);
    backButton.addEventListener("click", goBack);
    //backButton.addEventListener("click", function () {
    //    window.location.href = "page1.html";
    //});


    displayedImage.addEventListener("mousedown", startDragging);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("mousemove", dragImage);






    // Retrieve the stored image link from localStorage
    var imageLink = localStorage.getItem("imageLink");

    // Set the displayed image source
    var displayedImage = document.getElementById("displayedImage");
    displayedImage.src = imageLink;


    // Initial zoom level
    //var zoomLevel = 1;

    // Zoom in function
    //function zoomIn() {
    //    zoomLevel *= 2; // Double the zoom level
    //    updateZoom();
    //}

    // Zoom out function
    //function zoomOut() {
    //    zoomLevel /= 2; // Halve the zoom level
    //    updateZoom();
    //}

    // Update the zoom level and apply the CSS transform property
    //function updateZoom() {
    //    displayedImage.style.transform = "scale(" + zoomLevel + ")";
    //}

    // Attach zoom functions to buttons with specific magnification factors
    //var zoomInButton = document.getElementById("zoomInButton");
    //zoomInButton.addEventListener("click", zoomIn);

    //var zoomOutButton = document.getElementById("zoomOutButton");
    //zoomOutButton.addEventListener("click", zoomOut);


    // Back button click event
    var backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function () {
        window.location.href = "page1.html";
    });
});




// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
