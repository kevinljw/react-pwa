    //'use strict';
    var DEFAULT_CHROMA_COLOR = 'rgb(0, 177, 64)';
//    var DEFAULT_CHROMA_COLOR = 'rgb(66, 195, 31)';
//    var DEFAULT_CHROMA_COLOR = 'rgb(210, 140, 67)';
//    var defaultimg ="url('images/beer1024.gif')";
    var defaultimg ="url('images/擷取.JPG')";
    var NUMBER_OF_FRAMES = 75;
    var now_frame = 0;
    var testContext;
    var encoder;
    var isRecording = false;
    var startRecordTime = -1;

    $(document).ready(function(){
//        $('#chroma-range-weight').range({
//            min: 0,
//            max: 1,
//            start: 1,
//            onChange: function(value) {
//              $('#display-3').html(value);
//            }
//          });
         var tl = new TimelineMax({
                  delay: 0.01,
                  repeatDelay: 0,
                  repeat: 0,
            });
        
        
        var $circleBorder = $('.countdown__icon__circle').get(0);
        var $countdown = $('.countdown');
        
        var $circleNumber = $('.countdown .countdown__number');

         var length = $circleBorder.getTotalLength();
        var counter = {
          var: 5
        };

        
        
        $('.dropdown')
          .dropdown({
            // you can use any ui transition
            transition: 'drop'
          });
//       
        $('#cam-shot').click(function() {
            $("#ready_demo").removeClass("hidden");
//            isRecording =true;
        });
        $("#ready_demo .demo__numbers-path").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
             $("#ready_demo").addClass("hidden");
           
              tl.set($countdown, {
                scale: 0,
              })
        
            tl.to($countdown, 0.4, {
                scale: 1,
                ease: Back.easeOut.config(1.4),
              }).to($circleBorder, 5, {
                strokeDashoffset: length,
                stroke: '#FB7593',
                ease: Power0.easeIn
              })
                .to($circleNumber, 5, {
                color: '#FB7593',
                ease: Power0.easeIn
              }, '-= 5').to(counter, 5, {
                var: 0,
                onUpdate: function() {
                  $('.countdown__number').html(Math.ceil(counter.var));
                },
                ease: Power0.easeNone
              }, '-= 5')

              .to($countdown, 0.4, {
                scale: 0,
                ease: Back.easeIn.config(1.4),
                onComplete: function() {
                  $('.countdown__number').html('5');
                     $countdown.addClass("hidden");
                    console.log("$countdown");
                }
              });
            
             tl.restart();
            isRecording =true;
            
            $countdown.removeClass("hidden");
        });
        
        
       
        

        

       
    });
     
//    $("#showPalette").spectrum({
//        color: DEFAULT_CHROMA_COLOR,
//        showInput: true,
//        className: "full-spectrum",
//        showInitial: true,
//        showPalette: true,
//        showSelectionPalette: true,
////        maxSelectionSize: 10,
//        preferredFormat: "rgb",
//        localStorageKey: "spectrum.demo",
//        move: function (color) {
////            console.log(color);
//        },
//        show: function () {
//
//        },
//        beforeShow: function () {
//
//        },
//        hide: function(){
//
//        },
//        change: function(color){
//            console.log(color);
//        },
//        palette: [
//            [DEFAULT_CHROMA_COLOR, "rgb(0,255,0)"]
//            
//        ]
//    });
	var video = document.getElementById('video'),
        video_bg = document.getElementById('video-bg'),
//        video_fg = document.getElementById('video-fg'),
		vjs,
		imagesWaiting = 0,
		imagesToLoad = {
			audiTest: 'jpg',
			beer1024: 'gif',
			urbandecay: 'jpg',
			curtain: 'jpg',
			colorcube: 'png',
			spiritcube: 'png'
		},
		images = {},
		imageCallbacks = [],
		scriptsLoaded = false,
		imagesLoaded = false;

	function loadImages(callback){
		var key;
//        console.log(imagesToLoad);
		function loadImage(name) {
			var image = document.createElement('img');
			images[name] = image;
			image.addEventListener('load', function() {
				delete imagesToLoad[name];
				imagesWaiting--;
//				while (!imagesWaiting && imageCallbacks.length) {
//					(imageCallbacks.shift())();
//				}
			});
			image.src = 'images/' + name + '.' + imagesToLoad[name];
			imagesToLoad[name] = false;
		}

//		if (callback) {
//			imageCallbacks.push(callback);
//		}

		for (key in imagesToLoad) {
			if (imagesToLoad[key]) {
				imagesWaiting++;
				loadImage(key);
                
			}
		}
        console.log(imagesToLoad);
	}

	function setUpVideo(Seriously){
        
//		if (!scriptsLoaded || !imagesLoaded) {
//			return;
//		}
        console.log("setUpVideo()");
        var seriously = new Seriously();
        var target = seriously.target('#canvas');
        var source = seriously.transform('reformat');

		source.source = video;
		source.mode = 'cover';
		source.width = target.width;
		source.height = target.height;
        
        var source_bg = seriously.transform('reformat');

		source_bg.source = video_bg;
		source_bg.mode = 'cover';
		source_bg.width = target.width;
		source_bg.height = target.height;
        
//        var source_fg = seriously.transform('reformat');
//
//		source_fg.source = video_fg;
//		source_fg.mode = 'cover';
//		source_fg.width = target.width;
//		source_fg.height = target.height;
        
        var canvas = document.getElementById('canvas');
//        canvas.style.backgroundImage = defaultimg;
//        var ctx = canvas.getContext('experimental-webgl');
        
        
		
        
//		var target = seriously.target(canvas);

		/* effects nodes */

		var chroma = seriously.effect('chroma');
//		chroma.weight = 1.32;
//		chroma.balance = 0;
//		chroma.screen = 'rgb(77, 239, 41)';
//		chroma.clipWhite = 0.85;
//		chroma.clipBlack = 0.5125;
//        
        chroma.weight = 1.0;  //0~1 default: 1
		chroma.balance = 0.7; //0~1 default: 1
        chroma.screen = DEFAULT_CHROMA_COLOR;
		chroma.clipWhite = 1.0; //0~1 default: 1
		chroma.clipBlack = 1.0; //0~1 default: 0

		chroma.source = source;

		//set up underwater effect
		var water = {
			blend_top: seriously.effect('blend'),
            blend_bottom: seriously.effect('blend'),
//			ripple: seriously.effect('ripple'),
            blackwhite: seriously.effect('hue-saturation'),
//			blue: seriously.effect('tone'),
            
		};

		water.blend_bottom.top = chroma;
		water.blend_bottom.bottom = source_bg;
        
        console.log(water.blend_bottom);

//        water.blend_top.top = source_fg;
//        water.blend_top.bottom = water.blend_bottom;
//        water.blackwhite.source = chroma;
//        water.blackwhite.saturation = -0.1;
//		water.blue.source = water.blackwhite;
        
//        water.blue.light = 'rgb(240, 240, 255)';
//		water.blue.dark = 'rgb(50, 50, 150)';
//		water.blue.toned = 0.3;
    

		var scenes = [
			{
				id: 'water',
				activate: function(output, inputName) {
					output[inputName || 'source'] = water.blend_bottom;//todo: blur
				},
				blend:water.blend_bottom
			},
			{
				id: 'raw',
				activate: function(output, inputName) {
					output[inputName || 'source'] = source;
				}
			}
		];

		var transition = seriously.effect('split');
		transition.fuzzy = 0.1;
		target.source = transition;

//		function animateInterval(callback, time, finished) {
//			var start = Date.now();
//			function runner() {
//				var diff = Date.now() - start;
//				if (diff < time) {
//					callback(diff);
//					setTimeout(runner, 4);
//				} else if (finished) {
//					finished();
//				}
//			}
//			runner();
//		}

		var activeScene = 0;
        function updateScene(key, value){
            chroma[key]=value;
            scenes[0].activate(target);
//            console.log("updateScene",chroma,key, value)
        }
        
//         chroma.weight = 1.0;  //0~1 default: 1
//		chroma.balance = 0.7; //0~1 default: 1
//        chroma.screen = DEFAULT_CHROMA_COLOR;
//		chroma.clipWhite = 1.0; //0~1 default: 1
//		chroma.clipBlack = 1.0; //0~1 default: 0
        $('#chroma-range-weight').range({
            min: 0,
            max: 2,
            start: 1,
            step: 0.05,
            onChange: function(value) {
              $('#display-weight').html(value);
              updateScene("weight", value);
            }
          });
        $('#chroma-range-balance').range({
            min: 0,
            max: 1,
            start: 1.0,
            step: 0.05,
            onChange: function(value) {
              $('#display-balance').html(value);
              updateScene("balance", value);
            }
          });
        $('#chroma-range-clipWhite').range({
            min: 0,
            max: 1,
            start: 0,
            step: 0.05,
            onChange: function(value) {
              $('#display-clipWhite').html(value);
              updateScene("clipWhite", value);
            }
          });
        $('#chroma-range-clipBlack').range({
            min: 0,
            max: 1,
            start: 1.0,
            step: 0.05,
            onChange: function(value) {
              $('#display-clipBlack').html(value);
              updateScene("clipBlack", value);
            }
          });
         $("#showPalette").spectrum({
            color: DEFAULT_CHROMA_COLOR,
            showInput: true,
            className: "full-spectrum",
            showInitial: true,
            showPalette: true,
            showSelectionPalette: true,
    //        maxSelectionSize: 10,
            preferredFormat: "rgb",
            localStorageKey: "spectrum.demo",
            move: function (color) {
    //            console.log(color);
                var bg_rgb_color = 'rgb('+Math.round(color._r)+','+Math.round(color._g)+','+Math.round(color._b)+')'
//                console.log(bg_rgb_color);
                updateScene("screen",bg_rgb_color);
            },
            show: function () {

            },
            beforeShow: function () {

            },
            hide: function(){

            },
            change: function(color){
                
                var bg_rgb_color = 'rgb('+Math.round(color._r)+','+Math.round(color._g)+','+Math.round(color._b)+')'
//                console.log(bg_rgb_color);
                updateScene(bg_rgb_color);
            },
            palette: [
                [DEFAULT_CHROMA_COLOR, "rgb(0,255,0)"]

            ]
        });
//		function activateScene(index){
//			function setButtons(tf) {
//				var i, max, buttons = document.querySelectorAll('#buttons button');
//				for (i = 0, max = buttons.length; i < max; i++) {
//					buttons.item(i).disabled = tf;
//				}
//			}

//			index = index % scenes.length;
//			if (index === activeScene) {
//				return;
//			}

//			var from = scenes[activeScene];
//			var to = scenes[index];
//			activeScene = index;
//
//			target.source = transition;
//			from.activate(transition, 'sourceA');
//			to.activate(transition, 'sourceB');
//			transition.split = 0;
//
//			setButtons(true);
//            
//            setTimeout(function () {
//				to.activate(target);
//				setButtons(false);
//			}, 500);
            
//			animateInterval(function (time) {
//				transition.split = time/ 500 + 0.1;
//			}, 500, function () {
//				to.activate(target);
//				setButtons(false);
//			});
//		}

		//set up buttons and transitions
//        (function() {
//			var buttons = document.querySelectorAll('#buttons button');
//			Array.prototype.forEach.call(buttons, function (button, i) {
//				button.addEventListener('click', function () {
//					activateScene(i);
//				});
//			});
//		}());

		scenes[0].activate(target);
        
        var dataURLArr = [];
        var lastTime = 0;
        var TOTAL_FRAME = 75;
        var TOTAL_SECS = 5;
        var SECS_PER_FRAME = TOTAL_SECS*1000/TOTAL_FRAME; //66.66666..7
        console.log("SECS_PER_FRAME",SECS_PER_FRAME);
		seriously.go(function (time) {
//            console.log(time);
            if(isRecording && now_frame<NUMBER_OF_FRAMES){
//                testContext = canvas.getContext('webgl');
                if(startRecordTime<0)startRecordTime = time;
                if((time-startRecordTime)/SECS_PER_FRAME>1){
                    now_frame++;
                    dataURLArr.push(canvas.toDataURL());
                    startRecordTime += SECS_PER_FRAME;
//                    console.log(time,startRecordTime);
                }
                
//                console.log(dataURL);
//                encoder.addFrame(readBuffer);
                
            }
            else if(now_frame==NUMBER_OF_FRAMES){
                now_frame++;
                isRecording = false;
                startRecordTime =-1;
                gifshot.createGIF({'gifWidth': 512,'gifHeight': 512,'images':dataURLArr, interval: SECS_PER_FRAME/100, numFrames: TOTAL_FRAME,'frameDuration': SECS_PER_FRAME/10}, function(obj) {
                    // callback object properties
                    // --------------------------
                    // image - Base 64 image
                    // cameraStream - The webRTC MediaStream object
                    // error - Boolean that determines if an error occurred
                    // errorCode - Helpful error label
                    // errorMsg - Helpful error message
                    // savedRenderingContexts - An array of canvas image data (will only be set if the saveRenderingContexts option was used)
                   if(!obj.error) {
                        var image = obj.image,
                        animatedImage = document.createElement('img');
                        animatedImage.src = image;
                        document.body.appendChild(animatedImage);
                    }
                });
//                encoder.finish();
//                encoder.download("download.gif");
            }
            
            
//            var delta = time - lastTime;
//			lastTime = time;
//			if (transition.split < 1) {
//				transition.split += delta / 500;
//			}
            
			//water.blur.radius = Math.abs(Math.sin(Date.now()/1000 + 1 )) * 3 ;
//			water.ripple.wave = Math.abs(Math.sin(Date.now()/1000 / 4));
//
//			water.ripple.distortion = Math.abs(Math.sin(Date.now()/1000 / 4.5)) * 2;
//			var c = Math.sin(Math.PI * video.currentTime / video.duration);

//			night.nightvision.timer = video.currentTime;
//			invasion.tv.time = Date.now();
		});
        
	}


	require.config({
		baseUrl: 'js/',
		paths: {
			'videojs': 'video'
		},
		shim: {
			'videojs': {
				exports: 'VideoJS'
			}
		}
	});

	require([
		'videojs',
		'seriously'
	], function (VideoJS, Seriously) {
		var msg = Seriously.incompatible(),
			id;
//		video.innerHTML = '<source src="http://seriouslyjs.com/video/wtf_greenscreen_sm.webm" type="video/webm" /><source src="http://seriouslyjs.com/video/wtf_greenscreen_sm.mp4" type="video/mp4" />';
//        video.innerHTML = '';
//		video.load();
//        vjs = VideoJS.setup('video');
		vjs = VideoJS('video',{
            width: 1080,
            height: 720
        });
//		vjs.width(1080);
//		vjs.height(720);
		if (msg) {
            
			if (msg === 'webgl') {
				id = 'error-webgl';
			} else {
				id = 'error-context';
			}
			document.getElementById(id).style.display = 'block';
			document.getElementById('buttons').style.display = 'none';
			document.getElementById('canvas').style.display = 'none';
			video.style.display = 'block';
//			video.style.height = '720px';
			return;
		}
        loadImages();

        require([
            'seriously',
            'effects/seriously.chroma',
            'effects/seriously.blend',
    //		'effects/seriously.ripple',
            'effects/seriously.tone',
            'effects/seriously.colorcube',
    //		'effects/seriously.nightvision',
    //		'effects/seriously.vignette',
            'effects/seriously.split',
    //		'effects/seriously.scanlines',
    //		'effects/seriously.sketch',
            'effects/seriously.color',
    //		'effects/seriously.tvglitch',
            'effects/seriously.hue-saturation'
        ], setUpVideo);
        });
    


//	loadImages(function () {
//		imagesLoaded = true;
//		setUpVideo();
//	});

