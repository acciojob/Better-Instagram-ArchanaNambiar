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
  const dragId = event.dataTransfer.getData("text");
  const dropId = event.target.id;

  // Swap the background images
  const dragElement = document.getElementById(dragId);
  const dropElement = document.getElementById(dropId);
  const tempImage = dragElement.style.backgroundImage;
  dragElement.style.backgroundImage = dropElement.style.backgroundImage;
  dropElement.style.backgroundImage = tempImage;
}

// Add event listeners to each div to enable drag and drop
function addDragDropListeners() {
  const imageDivs = document.getElementsByClassName("image");
  for (let i = 0; i < imageDivs.length; i++) {
    const div = imageDivs[i];
    div.addEventListener("dragstart", dragStart);
    div.addEventListener("dragover", dragOver);
    div.addEventListener("drop", drop);
  }
}

// Call the function to add drag and drop listeners when the page loads
window.addEventListener("load", addDragDropListeners);
