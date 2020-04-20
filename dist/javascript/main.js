/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "javascript/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/ecmascript/main.js":
/*!***********************************!*\
  !*** ./assets/ecmascript/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Menu = __webpack_require__(/*! ./module/Menu */ "./assets/ecmascript/module/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _Submenu = __webpack_require__(/*! ./module/Submenu */ "./assets/ecmascript/module/Submenu.js");

var _Submenu2 = _interopRequireDefault(_Submenu);

var _DragAndDrop = __webpack_require__(/*! ./module/DragAndDrop */ "./assets/ecmascript/module/DragAndDrop.js");

var _DragAndDrop2 = _interopRequireDefault(_DragAndDrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js').then(function () {
            console.log('Service Worker Registered');
        });
    }

    (0, _DragAndDrop2.default)();

    document.addEventListener('click', function (e) {
        var el = e.target;

        if (el.classList.contains('btn-nav')) {
            (0, _Menu2.default)(el);
        }

        if (el.classList.contains('btn-wear')) {
            (0, _Submenu2.default)(el);
        }

        if (el.classList.contains('btn-item')) {
            var wear = el.getAttribute('data-target');
            console.log(wear);
            document.querySelector('.img-monster').classList.toggle(wear);
        }

        if (el.classList.contains('close-popup')) {
            document.querySelector('.pop-up').classList.remove('triggered');
        }

        if (el.classList.contains('btn-toy')) {
            document.querySelector(".btn-balle").classList.toggle('triggered');
        }
    });
})();

/***/ }),

/***/ "./assets/ecmascript/module/DragAndDrop.js":
/*!*************************************************!*\
  !*** ./assets/ecmascript/module/DragAndDrop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (el) {
    var draggableElems = document.querySelectorAll('.btn-food');

    var _loop = function _loop(i) {
        var draggableElem = draggableElems[i],
            draggie = new Draggabilly(draggableElem, {}),
            monster = document.querySelector('.img-monster'),
            target = draggableElem.getAttribute('data-target');

        draggie.on('dragMove', function (event, pointer, moveVector) {
            if (target == 'monstre') {
                monster.classList.add('happyMonstre');
            } else {
                monster.classList.add('sadMonstre');
            }

            document.querySelector("#trash-recycle").classList.add('triggered');
            document.querySelector("#trash-not-recycle").classList.add('triggered');
        });
        draggie.on('dragEnd', function (event, pointer) {
            var dropZoneQuery = "";

            switch (target) {
                case 'monstre':
                    dropZoneQuery = "#visage";
                    break;
                case 'recycle':
                    dropZoneQuery = "#trash-recycle";
                    break;
                case 'not-recycle':
                    dropZoneQuery = "#trash-not-recycle";
                    break;
            }

            var drop = document.querySelector(dropZoneQuery).getBoundingClientRect();

            if (target == 'monstre') {
                monster.classList.remove('happyMonstre');
            } else {
                monster.classList.remove('sadMonstre');
            }
            if (pointer.x > drop.left && pointer.x < drop.right && pointer.y > drop.top && pointer.y < drop.bottom) {
                draggableElem.style = "display:none;";

                if (target == 'monstre') {
                    monster.classList.add('zoom');
                    monster.style = "position:relative; z-index:50;";
                    setTimeout(function () {
                        monster.style = "";
                        document.querySelector('.video').style = "display:block;z-index:50;";
                        document.querySelector('video').play();
                    }, 300);
                    setTimeout(function () {
                        document.querySelector('.video').style = "display:none;";
                        monster.style = "position:relative; z-index:50;";
                        monster.classList.remove('zoom');
                        monster.style = "";
                    }, 3000);
                }

                if (target == 'recycle') {
                    document.querySelector('.flower').classList.add('triggered');
                }
            } else {
                draggableElem.style = "position: relative; touch-action: none;";

                var monsterPos = monster.getBoundingClientRect();

                if (target == "not-recycle" && pointer.x > monsterPos.left && pointer.x < monsterPos.right && pointer.y > monsterPos.top && pointer.y < monsterPos.bottom) {
                    document.querySelector('.pop-up').classList.add('triggered');
                }
            }
            document.querySelector("#trash-recycle").classList.remove('triggered');
            document.querySelector("#trash-not-recycle").classList.remove('triggered');
        });
    };

    for (var i = 0; i < draggableElems.length; i++) {
        _loop(i);
    }
};

/***/ }),

/***/ "./assets/ecmascript/module/Menu.js":
/*!******************************************!*\
  !*** ./assets/ecmascript/module/Menu.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (el) {
    var menuName = '.menu-' + el.getAttribute('data-menu'),
        menuTarget = document.querySelector(menuName),
        menuAll = document.querySelectorAll('.menu'),
        submenuAll = document.querySelectorAll('.submenu');
    console.log(menuName);
    menuAll.forEach(function (menu) {
        if (menu.classList.contains('triggered')) menu.classList.remove('triggered');
    });
    submenuAll.forEach(function (menu) {
        if (menu.classList.contains('triggered')) menu.classList.remove('triggered');
    });
    menuTarget.classList.add('triggered');
    if (document.querySelector('.btn-balle').classList.contains('triggered')) {
        document.querySelector('.btn-balle').classList.remove('triggered');
    }
};

/***/ }),

/***/ "./assets/ecmascript/module/Submenu.js":
/*!*********************************************!*\
  !*** ./assets/ecmascript/module/Submenu.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (el) {
    var menuName = '.submenu-' + el.getAttribute('data-target'),
        menuTarget = document.querySelector(menuName),
        menuAll = document.querySelectorAll('.submenu');
    console.log(menuName);
    menuAll.forEach(function (menu) {
        if (menu.classList.contains('triggered')) menu.classList.remove('triggered');
    });
    menuTarget.classList.add('triggered');
};

/***/ }),

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/main.scss */ "./assets/sass/main.scss");

var _main = __webpack_require__(/*! ./ecmascript/main */ "./assets/ecmascript/main.js");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./assets/sass/main.scss":
/*!*******************************!*\
  !*** ./assets/sass/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map