(function() {

  // We will scale the photo width to this.
  var width = 320;
  // The height will be computed based on the input stream.
  var height = 0;

  var streaming = false;

  var video = null;
  var canvas = null;
  var photo = null;
  var startbutton = null;

  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');

    /*The following line is executed when a user clicks on the
      "Capture Image" button.
      
      document.getElementById returns the element whose 'id'
      is 'startbutton'.*/
    startbutton = document.getElementById('startbutton');

    // Access the video stream from the webcam.
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
    // Upon success, stream video in a video tag.
    .then(function(stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function(err) {
      console.log("An error occurred: " + err);
    });

    video.addEventListener('canplay', function(ev) {
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);

        if (isNaN(height)) {
          height = width / (4 / 3);
        }

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    startbutton.addEventListener('click', function(ev) {
      takepicture();
      ev.preventDefault();
    }, false);

    clearphoto();
  }

  /*Collect the frames of the photo from the canvas and then
    convert it into a PNG format, so that it can be shown in
    the HTML page.*/
  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');

    photo.setAttribute('src', data);
  }

  /*Capture a frame from the video stream.*/
  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      /*toDataURL('image/png') returns a data URL containing a
        representation of the image in PNG format.*/
      var data = canvas.toDataURL('image/png');

      /*'src' is the name of the attribute whose value is to be set.
        'data' is a string containing the value to assign to the attribute.*/
      photo.setAttribute('src', data);
    } else {
      clearphoto();
    }
  }

  /*The following code will call the startup() function when
    the HTML page is loaded.*/
  window.addEventListener('load', startup, false);
})();