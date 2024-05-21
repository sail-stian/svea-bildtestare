document.getElementById("image-upload").addEventListener("change", function () {
  const file = this.files[0];
  const url = window.URL || window.webkitURL;
  const fileURL = url.createObjectURL(file);

  // render image
  document.getElementById("uploaded-image1").src = fileURL;
  // document.getElementById("uploaded-image2").src = fileURL;
  // document.getElementById("uploaded-image3").src = fileURL;
  // document.getElementById("uploaded-image4").src = fileURL;
});
