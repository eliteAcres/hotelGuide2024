document.addEventListener("DOMContentLoaded", function () {
    var displayedImage = document.getElementById("displayedImage");
    var zoomLevel = 1;
    var maxZoom = 5;
    var minZoom = 0.5;

    var lastX = 0;
    var lastY = 0;
    var isDragging = false;

    // Variables for pinch gesture
    var initialDistance = 0;
    var initialZoom = 1;

    function zoomIn() {
        if (zoomLevel < maxZoom) {
            zoomLevel += 0.1;
            updateZoomAndTranslate();
        }
    }

    function zoomOut() {
        if (zoomLevel > minZoom) {
            zoomLevel -= 0.1;
            updateZoomAndTranslate();
        }
    }

    function updateZoomAndTranslate() {
        displayedImage.style.transform = `scale(${zoomLevel}) translate(${lastX}px, ${lastY}px)`;
    }

    function handlePinch(event) {
        if (event.touches.length >= 2) {
            var x1 = event.touches[0].clientX;
            var y1 = event.touches[0].clientY;
            var x2 = event.touches[1].clientX;
            var y2 = event.touches[1].clientY;
            var distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

            if (initialDistance === 0) {
                initialDistance = distance;
                initialZoom = zoomLevel;
            } else {
                var scaleFactor = distance / initialDistance;
                zoomLevel = initialZoom * scaleFactor;
                if (zoomLevel > maxZoom) {
                    zoomLevel = maxZoom;
                } else if (zoomLevel < minZoom) {
                    zoomLevel = minZoom;
                }
                updateZoomAndTranslate();
            }
        }
    }

    function startDragging(e) {
        isDragging = true;
        lastX = e.clientX - displayedImage.getBoundingClientRect().left - displayedImage.clientLeft;
        lastY = e.clientY - displayedImage.getBoundingClientRect().top - displayedImage.clientTop;
    }

    function stopDragging() {
        isDragging = false;
    }

    function dragImage(e) {
        if (isDragging) {
            var offsetX = e.clientX - displayedImage.getBoundingClientRect().left - displayedImage.clientLeft;
            var offsetY = e.clientY - displayedImage.getBoundingClientRect().top - displayedImage.clientTop;
            lastX += offsetX - lastX;
            lastY += offsetY - lastY;
            displayedImage.style.transform = `scale(${zoomLevel}) translate(${lastX}px, ${lastY}px)`;
        }
    }

    displayedImage.addEventListener("touchstart", startDragging);
    document.addEventListener("touchmove", dragImage);
    document.addEventListener("touchend", stopDragging);
    document.addEventListener("gesturechange", handlePinch);
});





// This JavaScript code defines functionality for zooming and panning an image on a webpage. Here's an explanation of each part of the code:

// Event Listener: The code starts by adding an event listener for the DOMContentLoaded event, which fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

// Initialization: Inside the event listener, it initializes variables such as displayedImage (which represents the image element to be manipulated), zoomLevel, maxZoom, and minZoom. These variables control the zoom level of the image and its limits.

// Dragging Variables: Additional variables lastX, lastY, and isDragging are initialized to keep track of the last position of the mouse or touch during dragging operations.

// Zoom Functions: Two functions zoomIn() and zoomOut() are defined to handle zooming in and out of the image. These functions adjust the zoomLevel variable and call updateZoomAndTranslate() to update the image's scale and position.

// Update Zoom and Translate: The updateZoomAndTranslate() function applies the current zoom level and translation to the image by setting its CSS transform property.

// Pinch Gesture Handling: The handlePinch() function handles pinch gestures for zooming on touch devices. It calculates the distance between two touch points and adjusts the zoom level accordingly.

// Dragging Functions: startDragging(), stopDragging(), and dragImage() functions handle mouse dragging events. They update the lastX and lastY variables to track the image's position during dragging and apply the translation accordingly.

// Event Listeners: Event listeners are added for touch events (touchstart, touchmove, touchend) and the gesturechange event, which is fired when a gesture (such as pinch) occurs on a touch-enabled device.

// This code allows any page that includes it to have zoom in and zoom out functionality for an image specified with the ID "displayedImage". By simply including this JavaScript file in the HTML of any page, the zoom and pan effects will be available for images with the specified ID.

