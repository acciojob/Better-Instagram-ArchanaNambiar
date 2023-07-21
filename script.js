//your code here

 // Function to handle the drag start event
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

// Function to handle the drag over event
function dragOver(event) {
  event.preventDefault();
}

// Function to handle the drop event
function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const targetElement = event.target;

  if (targetElement.classList.contains("image")) {
    // Swap the background images by swapping their styles
    const draggedImgStyle = draggedElement.style.backgroundImage;
    const targetImgStyle = targetElement.style.backgroundImage;

    draggedElement.style.backgroundImage = targetImgStyle;
    targetElement.style.backgroundImage = draggedImgStyle;
  }
}

// Add event listeners to all draggable elements
const draggableElements = document.querySelectorAll(".image");
draggableElements.forEach((element) => {
  element.addEventListener("dragstart", dragStart);
  element.addEventListener("dragover", dragOver);
  element.addEventListener("drop", drop);
});

