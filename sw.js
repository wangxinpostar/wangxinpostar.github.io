/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/02/Mysql/index.html","13c6ec134d52a3420f3187babe511334"],["/2023/09/03/Java语法面试题/index.html","a6b3280a4d9306f13d67c0cbe069dc29"],["/2023/09/03/Java面向对象面试题/index.html","71eae01c9f1a5ef1da3880288580a328"],["/2023/09/13/reggie/index.html","b8cbcfa0b252030769d63c9d7c0ab98c"],["/2023/09/26/黑马点评/index.html","cbb8a013b06dae3dd2706285d9ce830c"],["/404.html","4fb4aea86b1d987ed4ee86de5e2d5745"],["/CDN/APLayer.min.css","dd994a6d66290a8c4802505bb89eb684"],["/CDN/APlayer.min.js","7e4931f201ca0de9b1a3985137896a0e"],["/CDN/Meting.min.js","9ef1f5c05ba8f077d27e4fb0609a7d1d"],["/CDN/all.min.css","9902ee97ed7165521ea2a90c670879f0"],["/CDN/fancybox.min.css","694fcebc5c6758995226be966344ef7c"],["/CDN/fancybox.min.js","a822fc52af0362c3119b4f80bf83f928"],["/CDN/fireworks.min.js","c767029b9e1844d3b13b91de502a64c2"],["/CDN/gitalk.min.js","1a5eb604d7f2bf62fd46edea5af3dd9a"],["/CDN/instantpage.min.js","26fdb5fc7e964ce7cc9cdad9915e7e1b"],["/CDN/pace.min.js","d612e61e0331c4b37b7896ab9bdfb5cd"],["/CDN/pjax.min.js","dea25acf7225c8932ee262bbdf149b39"],["/CDN/share.min.css","2107e99b4b87650ec5e0329f6fc2788f"],["/CDN/typed.min.js","0521adc0d4c13f9a4d1997655f3d7d21"],["/CDN/webfonts/fa-brands-400.ttf","0fbfc862056bad982c93ba51460e31d9"],["/CDN/webfonts/fa-brands-400.woff2","a9afdb72826cde196ddf29eb8f9d0f8f"],["/CDN/webfonts/fa-regular-400.ttf","35307505c129ab1f9173f7917b50756f"],["/CDN/webfonts/fa-regular-400.woff2","f817938f131b0cabee81e59a96f9c2a6"],["/CDN/webfonts/fa-solid-900.ttf","ffc89d3ea2e2c3ba295689305f91ca78"],["/CDN/webfonts/fa-solid-900.woff2","297973a488f688271dd223d542ba2697"],["/CDN/webfonts/fa-v4compatibility.ttf","4bde6a62454b669bb0ce0448491a71d7"],["/CDN/webfonts/fa-v4compatibility.woff2","72d85419b5a3c5867b1903ef565f5a8d"],["/Gallery/1.jpg","b8ac13bd97c5a87b7b243c68d4c7771b"],["/Gallery/2.jpg","e0acc2c4fa6626bdccdc6a9e9b05938b"],["/Gallery/3.jpg","9c6b12a751a3f20f586d601fda8be8b5"],["/Gallery/4.jpg","9703d987ac24e58507b8fc3f1013f961"],["/Gallery/5.jpg","0c15daa109e3f0f154122e9f1e0b515e"],["/Gallery/6.jpg","0e674a60bc9e3902550cf17b7eef7f36"],["/Gallery/7.jpg","26bb579340196eaf8ae9252b9d82233e"],["/Gallery/8.jpg","52f5d730da80b535db533927af1f7c2c"],["/Gallery/R-C.gif","0ae9f1a7a31100a82b43f95077722ccf"],["/Gallery/assets/1805b72252e74ab7af85655e88b0f7a0.png","21dd7751f12b2b42a139b6d9e867cf4e"],["/Gallery/assets/20201229180349554.png","99f7ccfb0c2e5cd0da5ab19d66334c9b"],["/Gallery/assets/3cdf34b691ba4ccba8678e4fe153a724.png","35d482a581ff5ded2bf06ea618dfe8f3"],["/Gallery/assets/7c28b3c9c2cb47848da9ecdf630d41cd.png","d3080332f63d82c35ea8920565308236"],["/Gallery/assets/b9c54dc26288497ab23ff3832435c029.png","9dba5dab1aa7ee7ec5cb9d3f0555851c"],["/Gallery/assets/f1030e64d3524e408aace3195c529a5a.png","b5a261e4bc65e1a364b4620a32dc5006"],["/Gallery/assets/image-20230920092748413.png","9fa989fdd2434a8365b5f0450a03f8f5"],["/Gallery/assets/image-20230920143534250.png","dbe1ff7392fbfb36c1947e3567ab7c5d"],["/Gallery/assets/image-20230921084545997.png","663319888c690fcfa8790ea56c9dffa2"],["/Gallery/assets/image-20230921084712487.png","071e79160435831b5fe4a032775889e1"],["/Gallery/assets/klg5gq7i21.png","04e269d78d5abc24453057a34525dfbc"],["/Gallery/assets/屏幕截图 2023-09-02 143920.png","9a4f35b17d9d5315661b202a34a538e4"],["/Gallery/awards/2023数学建模校赛.jpg","be6f05b109c645d3d962d030f040ad1b"],["/Gallery/awards/CAIP国家三等奖.jpg","bd209774010460ed1738d1f7da5724d2"],["/Gallery/awards/index.html","930229140b53133327e23e691328b2dd"],["/Gallery/awards/全国大学生数学建模三等奖.jpg","f58f5b86a981abbac3c29c632aaa252c"],["/Gallery/awards/十三届蓝桥杯三等奖.jpg","d83036bc61fcca4b7492b507e14a2e35"],["/Gallery/awards/十四届蓝桥杯二等奖.jpg","ec118b018b9f4a65277be98cd60c51ed"],["/Gallery/awards/成都大学第一届程序设计竞赛暨集训队选拔赛二等.jpg","6806c4e770ff132d5da243cb2a7e1c59"],["/Gallery/img/1661133012@b6cce781ce2e88e668e9591c0f1163e4.png","c0d44964c194dfa58f2dd966c0368103"],["/Gallery/img/1661135892@a76e3b01eecba05f65b44ac1a753b550.png","1532cedc5b7bf2dafe7a7132e7e02654"],["/Gallery/img/index.html","822efe75c49ed932f3e4bacb51da50ce"],["/Gallery/img/klg5gq7i21.png","04e269d78d5abc24453057a34525dfbc"],["/Gallery/img/屏幕截图 2023-09-02 143920.png","9a4f35b17d9d5315661b202a34a538e4"],["/Gallery/index.html","5756ed28c41e4cc8e95572df8da5c45a"],["/archives/2023/09/index.html","b2bfff27f26a14fef22056685edc87af"],["/archives/2023/index.html","dc890a66f54f20662434a4953618ab80"],["/archives/index.html","12d61b42295deddb3633d5a14ce35adf"],["/categories/index.html","c443f3f8338d888987fb9fd1ba075393"],["/css/custom.css","87e6d6aac808bff9dc873919a9e3c936"],["/css/index.css","15f937925a304dbbc571691f3111f35c"],["/css/loading-bar.css","11512eb33019aa486d8a32ce37ab9fbb"],["/css/minimal.css","0b8ea769636d4d17259d55bf69398405"],["/css/mycss.css","856f7cd6581fe116d50acc046a468bf6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1c1581519ee431411f71f46d3b1e8da6"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","86c2f2151b82e07aa6633e4df563e73e"],["/music/index.html","c13c4e57ac3e1b4da31836c20cec20d0"],["/sw-register.js","ba32d4c59683cc341631a497caef86d2"],["/tags/Java语法面试题/index.html","13f027acf49dac1ffa599a19444d9d37"],["/tags/Java面向对象面试题/index.html","20ccb8b91b1840bf8a05212c0c4846d2"],["/tags/MySQL面试题/index.html","5ae50931fe9c8c953f2864fbfacb8f3d"],["/tags/index.html","9990da6cfda29c001c7cb03fb9817e0d"],["/tags/瑞吉外卖/index.html","0433ba3eee4a2d4268df3abe4771d493"],["/tags/黑马点评/index.html","98b8bbccfcc5c230066bb51426c069d3"]];
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
