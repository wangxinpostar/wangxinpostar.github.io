/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/02/Mysql/index.html","ac91e9db94c461c3ca66d66f2ee10d2b"],["/2023/09/03/Java语法面试题/index.html","45baeb3b843fbb5da4f4a5035d0aae8c"],["/2023/09/03/Java面向对象面试题/index.html","896a55a5e7c0cc0ac5b614b331cee2dd"],["/2023/09/13/reggie/index.html","8474aeaeff8397ba0fed1d16431ad3b0"],["/2023/09/26/黑马点评/index.html","79318025ff06be4d21fc7f0eaad22a37"],["/2023/12/07/2023-12-7/index.html","983c9ba1ebcb7a89be7ce68615a687f3"],["/404.html","f9e8a8d448fc47e560ed95ef8bdc3d63"],["/CDN/APLayer.min.css","8b11761c4f495fe28d505c008a8ba715"],["/CDN/APlayer.min.js","7e4931f201ca0de9b1a3985137896a0e"],["/CDN/Meting.min.js","9ef1f5c05ba8f077d27e4fb0609a7d1d"],["/CDN/Valine.min.js","27636d3dbc14977ab495635bd99d2ba4"],["/CDN/all.min.css","02f1d51f9dfce778c6484c82e48b9d99"],["/CDN/click_heart.min.js","931c0010efa30ae0318a093bd0b7bb6b"],["/CDN/fancybox.min.css","26c98aa341028bbc72b30d1df104dda3"],["/CDN/fancybox.min.js","abeb6d29c4b94bd37ce2a0560989a457"],["/CDN/fireworks.min.js","c767029b9e1844d3b13b91de502a64c2"],["/CDN/flickr_justified_gallery.js","89c14b7dda2ffc53f28e3c7d59b1715b"],["/CDN/gitalk.min.js","1a5eb604d7f2bf62fd46edea5af3dd9a"],["/CDN/instantpage.min.js","26fdb5fc7e964ce7cc9cdad9915e7e1b"],["/CDN/pace.min.js","d612e61e0331c4b37b7896ab9bdfb5cd"],["/CDN/pjax.min.js","dea25acf7225c8932ee262bbdf149b39"],["/CDN/share.min.css","f8b6b0ab37e1a9950c3d6f5bf94722a8"],["/CDN/snackbar.min.css","dde309ea14ef073b474ea92627eb9ba8"],["/CDN/snackbar.min.js","2f66ecb3d073b2a18c56c4051e050a1d"],["/CDN/social-share.min.js","d43a8bd60ecac91f8daf2dce22bf218b"],["/CDN/typed.min.js","0521adc0d4c13f9a4d1997655f3d7d21"],["/CDN/webfonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/CDN/webfonts/fa-brands-400.ttf","0fbfc862056bad982c93ba51460e31d9"],["/CDN/webfonts/fa-brands-400.woff2","a9afdb72826cde196ddf29eb8f9d0f8f"],["/CDN/webfonts/fa-regular-400.ttf","35307505c129ab1f9173f7917b50756f"],["/CDN/webfonts/fa-regular-400.woff2","f817938f131b0cabee81e59a96f9c2a6"],["/CDN/webfonts/fa-solid-900.ttf","ffc89d3ea2e2c3ba295689305f91ca78"],["/CDN/webfonts/fa-solid-900.woff2","297973a488f688271dd223d542ba2697"],["/CDN/webfonts/fa-v4compatibility.ttf","4bde6a62454b669bb0ce0448491a71d7"],["/CDN/webfonts/fa-v4compatibility.woff2","72d85419b5a3c5867b1903ef565f5a8d"],["/CDN/webfonts/qweather-icons.ttf","be524190a5e55a9e315fe873c0dcaf7f"],["/Gallery/IU2.jpg","a8f9c7a013c0eb4fd2c903808976207c"],["/Gallery/IU3.jpg","76bd2280ba05861766c50b884099893c"],["/Gallery/IU4.jpg","b8dfd981fdb9de3983b918bd5a34af85"],["/Gallery/IU5.jpg","13857bd12002802d98896566936f5d71"],["/Gallery/R-C.gif","0ae9f1a7a31100a82b43f95077722ccf"],["/Gallery/assets/1805b72252e74ab7af85655e88b0f7a0.png","21dd7751f12b2b42a139b6d9e867cf4e"],["/Gallery/assets/20201229180349554.png","99f7ccfb0c2e5cd0da5ab19d66334c9b"],["/Gallery/assets/3cdf34b691ba4ccba8678e4fe153a724.png","35d482a581ff5ded2bf06ea618dfe8f3"],["/Gallery/assets/7c28b3c9c2cb47848da9ecdf630d41cd.png","d3080332f63d82c35ea8920565308236"],["/Gallery/assets/b9c54dc26288497ab23ff3832435c029.png","9dba5dab1aa7ee7ec5cb9d3f0555851c"],["/Gallery/assets/f1030e64d3524e408aace3195c529a5a.png","b5a261e4bc65e1a364b4620a32dc5006"],["/Gallery/assets/image-20230920092748413.png","9fa989fdd2434a8365b5f0450a03f8f5"],["/Gallery/assets/image-20230920143534250.png","dbe1ff7392fbfb36c1947e3567ab7c5d"],["/Gallery/assets/image-20230921084545997.png","663319888c690fcfa8790ea56c9dffa2"],["/Gallery/assets/image-20230921084712487.png","071e79160435831b5fe4a032775889e1"],["/Gallery/assets/klg5gq7i21.png","04e269d78d5abc24453057a34525dfbc"],["/Gallery/assets/屏幕截图 2023-09-02 143920.png","9a4f35b17d9d5315661b202a34a538e4"],["/Gallery/awards/2023数学建模校赛.jpg","be6f05b109c645d3d962d030f040ad1b"],["/Gallery/awards/CAIP国家三等奖.jpg","bd209774010460ed1738d1f7da5724d2"],["/Gallery/awards/index.html","b24e176990b6d6e52f42849d6bf9885a"],["/Gallery/awards/全国大学生数学建模三等奖.jpg","f58f5b86a981abbac3c29c632aaa252c"],["/Gallery/awards/十三届蓝桥杯三等奖.jpg","d83036bc61fcca4b7492b507e14a2e35"],["/Gallery/awards/十九届百度之星铜奖.png","18c1c533430370b666c410275eac27a4"],["/Gallery/awards/十四届蓝桥杯二等奖.jpg","ec118b018b9f4a65277be98cd60c51ed"],["/Gallery/awards/成都大学第一届程序设计竞赛暨集训队选拔赛二等.jpg","6806c4e770ff132d5da243cb2a7e1c59"],["/Gallery/img/1661133012@b6cce781ce2e88e668e9591c0f1163e4.png","c0d44964c194dfa58f2dd966c0368103"],["/Gallery/img/1661135892@a76e3b01eecba05f65b44ac1a753b550.png","1532cedc5b7bf2dafe7a7132e7e02654"],["/Gallery/img/index.html","de1be8cd35f779aaf94c80e65553e505"],["/Gallery/img/klg5gq7i21.png","04e269d78d5abc24453057a34525dfbc"],["/Gallery/img/屏幕截图 2023-09-02 143920.png","9a4f35b17d9d5315661b202a34a538e4"],["/Gallery/index.html","0354c5def27e458c0999de3bd53ee498"],["/Gallery/iu.jpg","bf40f5448f6522e106a05a236c03ea58"],["/Gallery/preview.jpg","19d282b5421174a0cad768b400555320"],["/archives/2023/09/index.html","ab658ab8fe4966d8ecb7ed0abf2d3fca"],["/archives/2023/12/index.html","7164a6b2349ce8610aaad13c3b5d96ef"],["/archives/2023/index.html","98ab3d9d02c7abe503bcea10553a1ffb"],["/archives/index.html","c1448454c24cbbec680a01881bb809d2"],["/categories/index.html","b3d3d015ffe6d328c174ecafbf2c9367"],["/categories/学习/index.html","e3572a61f20c9d38d79ad2b3c4fd4451"],["/categories/日志/index.html","c226932a0880d319a620601f5245123a"],["/css/custom.css","c6e80008966de1830c0d2403f9547bd5"],["/css/index.css","33b291460a1b06f0c5d7aa97e196f5d8"],["/css/loading-bar.css","11512eb33019aa486d8a32ce37ab9fbb"],["/css/minimal.css","9823230445863518c497486a5c02d7b0"],["/css/mycss.css","661e2251ba03d27e600bddefe68ea047"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/fonts/qweather-icons.ttf","c93214f803a9acd38080935443665440"],["/fonts/qweather-icons.woff","3ce3a7daa830f408e624eadc97a6e5ff"],["/fonts/qweather-icons.woff2","2bdc8a2f5909ef62909f1b9260fe423d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/90543916.jpg","9e2952f2cba3f201f14e66e8db434719"],["/img/IU2.jpg","a8f9c7a013c0eb4fd2c903808976207c"],["/index.html","18a28bc79065428fb5f1db73a9ae60c5"],["/js/clock.js","024f5aa8eb41eaa08fd802537b5a4b8a"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","64f62f28d350156283e5fea58caefe67"],["/messageboard/index.html","827f95b31d1c84aa5ce6a6cd5efcb01d"],["/music/index.html","2360d6f7aa8c580405eb73079f94557f"],["/sw-register.js","4ca783523e87c6c1bba1c7b7c020ed53"],["/tags/index.html","81d4a3a39da1dc0fe4c8ab33789f3086"],["/tags/面试/index.html","9f057a60b53b90b93f5983dc67182c65"],["/tags/项目/index.html","d741770a556166a68ed5df8d12558887"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
