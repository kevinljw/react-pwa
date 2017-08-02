/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["asset-manifest.json","2879638a4876d089b46ed18cdad48a18"],["css/bootstrap.min.css","7833d3a0cf14f9894fb684b7e02a5bb4"],["css/countdown.css","117f4196d20a5e6a8663c0c6e8831261"],["css/main.css","99f6452c1878b2ad4af3c679c2cb6fbd"],["css/range.css","b26c2701a2875c365ac4a4f0e684d0d3"],["css/ready_demo.css","8f18bf836b779a1114d9079d393f1591"],["css/semantic.min.css","e7e5800ff076f5161961207a7278683b"],["css/spectrum.css","c4570cb2ee0a64de0fb186a50b5679ea"],["css/style.css","9c4030c5b6ed29de7b619988ce2ebdb2"],["css/themes/default/assets/fonts/icons.eot","674f50d287a8c48dc19ba404d20fe713"],["css/themes/default/assets/fonts/icons.otf","0b462f5cc07779cab3bef252c0271f2b"],["css/themes/default/assets/fonts/icons.svg","912ec66d7572ff821749319396470bde"],["css/themes/default/assets/fonts/icons.ttf","b06871f281fee6b241d60582ae9369b9"],["css/themes/default/assets/fonts/icons.woff","fee66e712a8a08eef5805a46892932ad"],["css/themes/default/assets/fonts/icons.woff2","af7ae505a9eed503f8b8e6982036873e"],["css/themes/default/assets/images/flags.png","9c74e172f87984c48ddf5c8108cabe67"],["css/video-js.css","54c03890d0ecaafd05db529e356855a6"],["favicon.ico","93ffb20d77327583892ca47f597b77aa"],["font/AudiType-ExtendedBold_03.ttf","25099cfafde34ea5e17c0353cd5c8d0e"],["font/AudiTypeV01-ExtendedNormal.otf","eb4a2d84573ff138917262c8d1675a20"],["images/Icon-App-57x57@1x.png","01a4b36b40a821ce563cddb15a02d420"],["images/Icon-App-57x57@2x.png","5b1c3549d9eb29c312f8da6959a69421"],["images/Icon-App-72x72@1x.png","f9b05f777ea7ddac3035165ad304e049"],["images/Q2_v1_靜態-04.png","4063350cc2e4d59e59ba25752edb1929"],["images/audiTest.jpg","2d6c1bd03151c1e6bc54479d39f74012"],["images/audi_logo-01-s.png","1efb443a5ad69d492a6fb03e932bcd1e"],["images/colorcube.png","e3a10066403355a34cfc72b47f13acdc"],["images/curtain.jpg","43bfab5563bbb86370c121cc19cd08b5"],["images/fish.jpg","507937911198c4dbae5e17e7e33f5659"],["images/mozilla.png","df6e0a06339bdc3669fa7b834f07be66"],["images/spiritcube.png","43f69eaaf3a6148e8e0088cbd5d72c6e"],["images/urbandecay.jpg","53930f0e2de46098bfdfe8807d032e9c"],["images/weather.jpg","8753972ec8c889882b41804af8334159"],["images/擷取.JPG","0724e1edd3ee846902096dc7374bc095"],["img/Q2_v1_靜態-01.png","94007f1c8ba217f7f175378213d3dd1a"],["img/Q2_v1_靜態-02.png","729b213c534299c449d3a98c9aa22d24"],["img/Q2_v1_靜態-03.png","ef1753201febb6fe8480d19be743e62a"],["img/Q2_v1_靜態-04.png","4063350cc2e4d59e59ba25752edb1929"],["img/btn_1.png","9cdb21facfe4f36e838b76833d870f15"],["img/btn_2.png","2a8b81e32545af5d6a1fba40ddff9ff4"],["img/btn_3.png","159d1061458d5635cc4335af1a20edff"],["img/btn_4.png","f1c8123e48310425164279f96a0ec8b0"],["img/btn_5.png","c16f6b9fd16ca57c589da36d996190ef"],["img/left.png","9efefde19665b37f54c8221b7ceedc53"],["img/logo-07.png","3b52cc4f8836e3cd9b1fcf9a56465013"],["img/qrcode_1.png","17f46d8a92c65638d45d5f60793ebc0c"],["img/right.png","031285f453c56ee99f77ea948d5dac0a"],["index.html","d6f064012d564f23f705a788cfc789a6"],["js/TweenMax.min.js","7216ae44f3332a593073cd31ef68f8bf"],["js/adapter-latest.js","8995c0b74e51bedfbcc2767dbee3e092"],["js/camera.js","acc32c8bf17afd81d8ba30dd4c26506c"],["js/effects/seriously.accumulator.js","f93ceb599430528948f4afb3865a29f4"],["js/effects/seriously.ascii.js","57c6e71d15ce49efd3d79d67efa4f40e"],["js/effects/seriously.bleach-bypass.js","a54cd21a22adc763141e5936d1d8e6dc"],["js/effects/seriously.blend.js","7299ecf2861a95828bd4941f291157a2"],["js/effects/seriously.blur.js","d63934987fdd814b59588686baf886ed"],["js/effects/seriously.brightness-contrast.js","f9b863aa0ceb490b1ec3a25deee83317"],["js/effects/seriously.channels.js","4334f60bec36859245ae90a50d3d6d78"],["js/effects/seriously.checkerboard.js","cd4f2f2d6b5a4e9ad10b620bdc933ec8"],["js/effects/seriously.chroma.js","d7774de0134edc821f13028f9e30859d"],["js/effects/seriously.color-select.js","e026e3a4062e427f1fcb6a3b87d93afd"],["js/effects/seriously.color.js","ab2c618ff5f60c46af13e1605a6b7a96"],["js/effects/seriously.colorcomplements.js","b038693a938e0bf4f7d2015b5278f3be"],["js/effects/seriously.colorcube.js","eef918af84cab0d0e1c29e4ea9cf7e2c"],["js/effects/seriously.crop.js","1683b646ccf032612b32c0b59c3a389f"],["js/effects/seriously.daltonize.js","d3f87c3259a12f30f78274246cf1b4a6"],["js/effects/seriously.directionblur.js","d6a1dcceb63bb6c86f9729879752c5e8"],["js/effects/seriously.displacement.js","cd1a4ee6551c3b1da972c3fa81ca5682"],["js/effects/seriously.dither.js","181541f1bafacbd3d8f291092b41f399"],["js/effects/seriously.edge.js","ea3552c5fcfa0ac4640e70036ef31712"],["js/effects/seriously.emboss.js","6c6ff852e33f6c8560941493f5de8b43"],["js/effects/seriously.exposure.js","729df766eecf14d430b6f15541167912"],["js/effects/seriously.expression.js","efd898dcbce78c3b24c45e9ac3a2d057"],["js/effects/seriously.fader.js","143ad6c3a36c0ebcb96b90e13a578cf5"],["js/effects/seriously.falsecolor.js","ca389311219867e9d05673a584a94a83"],["js/effects/seriously.filmgrain.js","081e1b7d2098ea92942592990565ee22"],["js/effects/seriously.freeze.js","c7a96c8192156292e3d9c80c9cf10914"],["js/effects/seriously.fxaa.js","54a3950930de29ace70fd71d49ef817d"],["js/effects/seriously.gradientwipe.js","ffbdaf3c6484fda86f1b2f90729b5063"],["js/effects/seriously.hex.js","f74834d85382edfb9ba8957c2bac8212"],["js/effects/seriously.highlights-shadows.js","2eff4f90b32071a4e60c6582eedbed23"],["js/effects/seriously.hue-saturation.js","6cde348b5e2eb149d2ce6d2b461f3212"],["js/effects/seriously.invert.js","12de34937d840a147c6bd815585e3c72"],["js/effects/seriously.kaleidoscope.js","8ab647ab69ace573806668d5cad9ad30"],["js/effects/seriously.layers.js","76ca60c4e12815d08dbb32e8623c4724"],["js/effects/seriously.linear-transfer.js","946780abbc74cad3f5f6c5e114269ab2"],["js/effects/seriously.lumakey.js","d3420c3435929807b5ca13958e197751"],["js/effects/seriously.lut.js","556fd43b3041b51fdfbfa30762e1790d"],["js/effects/seriously.mirror.js","0a0da90ab25785c70aad2cae51b3d1d9"],["js/effects/seriously.nightvision.js","8f11f56f853c5b926807f4c224cdbb6c"],["js/effects/seriously.noise.js","b91f820cf082526f744d752be095b464"],["js/effects/seriously.opticalflow.js","f12b9ba9a42e80eaf7670cdb2717e66a"],["js/effects/seriously.panorama.js","8b62944e03ae33a902e74613f081409b"],["js/effects/seriously.pixelate.js","dfdf3b83dbeccf9162b61f656f59cd32"],["js/effects/seriously.polar.js","b8cc2cb2e3d81a3ca6847e02428ddada"],["js/effects/seriously.repeat.js","9f73e793fd29b2d698d45c97ac818e59"],["js/effects/seriously.ripple.js","59279b7479c20c45ff8a56abb9b1b289"],["js/effects/seriously.scanlines.js","b9c676ae9ea98e1d28be9457093363da"],["js/effects/seriously.select.js","7aa862a54beb9cca6d7742b96f3e5cf9"],["js/effects/seriously.sepia.js","8796fb4c3bbba621721159d44d92abaa"],["js/effects/seriously.simplex.js","e126355ff9261afdeedee260c05a0da5"],["js/effects/seriously.sketch.js","1b148a7c497a48adb3af71bf33e77345"],["js/effects/seriously.split.js","5a4b6307d4263fc62d427aa7d5577db6"],["js/effects/seriously.temperature.js","69a69703864aaa12436ef75b5e8b251d"],["js/effects/seriously.throttle.js","1a5c9122650f711b1835dd5f9713298a"],["js/effects/seriously.tone.js","dcbb7387a8af87c724dbe01dff6a648f"],["js/effects/seriously.tvglitch.js","75b983c0cb8a6a525c5cc0e59ad86cc9"],["js/effects/seriously.vibrance.js","0e5761d3d79140b9e7274d8c691e24b3"],["js/effects/seriously.vignette.js","7cc50b46b75f9a1047b436a568271151"],["js/effects/seriously.whitebalance.js","dcf1904f02cd0cab19cb6151296480aa"],["js/gifshot.min.js","9d7800f98c7a63a0fe41abef112a1c52"],["js/jquery-1.9.1.js","cd43de1f19743b2ac64a83fb613490e5"],["js/range.js","080aa647b9c930017672743f37cca8cf"],["js/rapidapi.min.js","ca40e21a30d7c303909428500c3b051d"],["js/require.js","2b3bbe10644da6d8fcf8cfa40def64ea"],["js/script.js","d4ac454daad6bf6bc014b5ec6413e514"],["js/script.ori.js","cbaa351e8afcabd6a8c674b3234aa31b"],["js/semantic.min.js","327e1b1529e5ff348622f0e6b96f12f9"],["js/seriously 拷貝.js","da756468e45da0d4b9c981680833a968"],["js/seriously.js","e7f203766cff5e7126400232308423bc"],["js/spectrum.js","5f141b16047e7623b415b8bf9d8e0218"],["js/video.js","3c38df8abe947852825b0069f92a7614"],["manifest.json","a8e31d1d196e29922d188d9015e9cc9c"],["static/css/main.cacbacc7.css","214eac7d9453fa4dbe07c4ea75d9e557"],["static/js/main.7d564851.js","acb5c2154b29dc2d6501a24b1e9fc11a"],["static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["video/alpha_test.mp4","2ef403f74921efbaa69181d99606e003"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







