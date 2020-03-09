/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e279d3b17a157b9534942b74b3ae958c"
  },
  {
    "url": "assets/css/0.styles.d27a3ac0.css",
    "revision": "5533c86805e4cdfa5c99d472d58c2dbd"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.d9b1a6ce.js",
    "revision": "3164f376220fecacad544ca6010652ec"
  },
  {
    "url": "assets/js/10.2be540af.js",
    "revision": "0d2f7a791762b8d51cdabc5410b229c1"
  },
  {
    "url": "assets/js/11.27899527.js",
    "revision": "303adc22d72b5d11761f9259ae14f214"
  },
  {
    "url": "assets/js/12.fc5fe5af.js",
    "revision": "bc1724e9e7c7f70e8d153001ccd83ec1"
  },
  {
    "url": "assets/js/13.5a9906de.js",
    "revision": "a5cedcd44916c4b765e47ebe3f648cc1"
  },
  {
    "url": "assets/js/3.2edf0813.js",
    "revision": "d993530a6231c90b14d189be1d86c79c"
  },
  {
    "url": "assets/js/4.14981ac4.js",
    "revision": "a2c35305886f5dc930407e2e07038339"
  },
  {
    "url": "assets/js/5.bc5970c9.js",
    "revision": "2de60e36824f5c03e1c19d9b85173780"
  },
  {
    "url": "assets/js/6.c83a13c4.js",
    "revision": "b09776b5e957a3cbcd74ec882b373551"
  },
  {
    "url": "assets/js/7.c3fb7103.js",
    "revision": "5bbe2c48bec9f498584c3808c6a4daa6"
  },
  {
    "url": "assets/js/8.c9665e14.js",
    "revision": "d5512c91d67fa8afba79a15705f63624"
  },
  {
    "url": "assets/js/9.811045a3.js",
    "revision": "53ac194911531fd1d6a35c1a86e8de6b"
  },
  {
    "url": "assets/js/app.0cdbe671.js",
    "revision": "f5369efc78a58958a633de0e75270987"
  },
  {
    "url": "categories/index.html",
    "revision": "c173e99636393bb0bc420de664b17180"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "8b42211ee89318349f404720bf906fbd"
  },
  {
    "url": "images/bg.jpeg",
    "revision": "734aa3ef2a03397ed12975e5cb7e0272"
  },
  {
    "url": "index.html",
    "revision": "5c68dfbf8076163bce00d19ee7a60c38"
  },
  {
    "url": "tag/index.html",
    "revision": "2227c31340885d9677c74c540848695a"
  },
  {
    "url": "tags/Typescript/index.html",
    "revision": "dfc2ee7847ab6d55e6628f917b62c0ce"
  },
  {
    "url": "timeline/index.html",
    "revision": "400d072ded5d0f4d9fb6a6c875a9576d"
  },
  {
    "url": "views/typescript/learn.html",
    "revision": "cbba62d57c6f2557484383ac3db741d2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
