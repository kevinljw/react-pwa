//var pc = new cordova.plugins.iosrtc.RTCPeerConnection({
//  iceServers: []
//});
//
//cordova.plugins.iosrtc.getUserMedia(
//  // constraints
//  { audio: false, video: true },
//  // success callback
//  function (stream) {
//    console.log('got local MediaStream: ', stream);
//
//    pc.addStream(stream);
//  },
//  // failure callback
//  function (error) {
//    console.error('getUserMedia failed: ', error);
//  }
//);
//cordova.plugins.iosrtc.getUserMedia({
//  audio: false,
//  video: {
//    deviceId: 'com.apple.avfoundation.avcapturedevice.built-in_video:1',
//    width: {
//      min: 512,
//      max: 720
//    },
//    height: {
//      min: 512,
//      max: 720
//    }
//  }
//});


// Just for Cordova apps.
//document.addEventListener('deviceready', function () {
//  // Just for iOS devices.
//  if (window.device.platform === 'iOS') {
//    cordova.plugins.iosrtc.debug.enable('iosrtc*');
//    cordova.plugins.iosrtc.registerGlobals();
//      
//      window.updateVideos = function () {
//        console.debug("iOSRTCApp >>> update iosrtc videos");
//        // NOTE: hack, but needed due to CSS transitions and so on.
//        [0, 500, 1000, 1500].forEach(function (delay) {
//          setTimeout(function () {
//            cordova.plugins.iosrtc.refreshVideos();
//          }, delay);
//        });
//      };
//
//    // load adapter.js
////    var script = document.createElement("script");
////    script.type = "text/javascript";
////    script.src = "js/adapter-latest.js";
////    script.async = false;
////    document.getElementsByTagName("head")[0].appendChild(script);
//  }
  


var initCamera = function(videoId) {
  video = document.querySelector(videoId);


  var constraints = {
      audio: false,
      video: true
    };
    
    function handleSuccess(stream) {
      window.stream = stream; // make stream available to browser console
      video.srcObject = stream;
    }

    function handleError(error) {
      console.log('navigator.getUserMedia error: ', error);
    }

    navigator.mediaDevices.getUserMedia(constraints).
        then(handleSuccess).catch(handleError);
//  navigator.getMedia = ( navigator.getUserMedia || 
//                         navigator.webkitGetUserMedia ||
//                         navigator.mozGetUserMedia ||
//                         navigator.msGetUserMedia);
//  navigator.getMedia(
//    {
////      video: {
////            deviceId: 'com.apple.avfoundation.avcapturedevice.built-in_video:1',
////            width: {
////              min: 512
//////              max: 720
////            },
////            height: {
////              min: 512
//////              max: 1280
////            }
////      },
//      video: true,
//      audio: false 
//    },
//    function(stream) {
//      if (navigator.mozGetUserMedia) { 
//        video.mozSrcObject = stream;
//      } else {
//        var vendorURL = window.URL || window.webkitURL;
//        
//        video.src = vendorURL ? vendorURL.createObjectURL(stream) : stream;
//          console.log("video.src",video.src);
//      }
//      video.play();
//    },
//    function(err) {
//      console.log("An error occured! " + err);
//    }
//  );
//  return video;
};

initCamera('#video');

//});



