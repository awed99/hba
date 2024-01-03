module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_vendor_aos_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/vendor/aos/aos.css */ "./public/assets/vendor/aos/aos.css");
/* harmony import */ var _public_assets_vendor_aos_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_aos_aos_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/vendor/bootstrap/css/bootstrap.min.css */ "./public/assets/vendor/bootstrap/css/bootstrap.min.css");
/* harmony import */ var _public_assets_vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_vendor_bootstrap_icons_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/assets/vendor/bootstrap-icons/bootstrap-icons.css */ "./public/assets/vendor/bootstrap-icons/bootstrap-icons.css");
/* harmony import */ var _public_assets_vendor_bootstrap_icons_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_bootstrap_icons_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_vendor_boxicons_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/vendor/boxicons/css/boxicons.min.css */ "./public/assets/vendor/boxicons/css/boxicons.min.css");
/* harmony import */ var _public_assets_vendor_boxicons_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_boxicons_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_vendor_glightbox_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/vendor/glightbox/css/glightbox.min.css */ "./public/assets/vendor/glightbox/css/glightbox.min.css");
/* harmony import */ var _public_assets_vendor_glightbox_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_glightbox_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_assets_vendor_remixicon_remixicon_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/vendor/remixicon/remixicon.css */ "./public/assets/vendor/remixicon/remixicon.css");
/* harmony import */ var _public_assets_vendor_remixicon_remixicon_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_remixicon_remixicon_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_vendor_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/vendor/swiper/swiper-bundle.min.css */ "./public/assets/vendor/swiper/swiper-bundle.min.css");
/* harmony import */ var _public_assets_vendor_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/css/style.css */ "./public/assets/css/style.css");
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_assets_vendor_purecounter_purecounter_vanilla_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/assets/vendor/purecounter/purecounter_vanilla.js */ "./public/assets/vendor/purecounter/purecounter_vanilla.js");
/* harmony import */ var _public_assets_vendor_purecounter_purecounter_vanilla_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_purecounter_purecounter_vanilla_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_assets_vendor_glightbox_js_glightbox_min_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/assets/vendor/glightbox/js/glightbox.min.js */ "./public/assets/vendor/glightbox/js/glightbox.min.js");
/* harmony import */ var _public_assets_vendor_glightbox_js_glightbox_min_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_glightbox_js_glightbox_min_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_assets_vendor_swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/assets/vendor/swiper/swiper-bundle.min.js */ "./public/assets/vendor/swiper/swiper-bundle.min.js");
/* harmony import */ var _public_assets_vendor_swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/assets/vendor/isotope-layout/isotope.pkgd.min.js */ "./public/assets/vendor/isotope-layout/isotope.pkgd.min.js");
/* harmony import */ var _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\kerjaan\\dewa\\hba\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function App({
  Component,
  pageProps
}) {
  const {
    0: mounted,
    1: setMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  /**
   * Easy selector helper function
   */

  const select = (el, all = false) => {
    el = el.trim();

    if (all) {
      var _document;

      return [...((_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll(el))];
    } else {
      var _document2;

      return (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector(el);
    }
  };
  /**
   * Easy event listener function
   */


  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  /**
   * Easy on scroll event listener 
   */


  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  const initTerminal = async () => {
    // const PureCounter = async () => {
    //    await import('../public/assets/vendor/purecounter/purecounter_vanilla.js')
    // }
    const AOS = await __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../public/assets/vendor/aos/aos.js */ "./public/assets/vendor/aos/aos.js", 7));
    await __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ../public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js */ "./public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js", 7)); // const GLightbox = async () => {
    //    await import('../public/assets/vendor/glightbox/js/glightbox.min.js')
    // }
    // const Isotope =  async () => {
    //   await import('../public/assets/vendor/isotope-layout/isotope.pkgd.min.js')
    // }
    // const Swiper =  async () => {
    //   await import('../public/assets/vendor/swiper/swiper-bundle.min.js')
    // }

    await __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ../public/assets/vendor/php-email-form/validate.js */ "./public/assets/vendor/php-email-form/validate.js", 7));
    await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../public/assets/js/main.js */ "./public/assets/js/main.js", 7));
    let portfolioContainer = select('.portfolio-container');

    if (portfolioContainer) {
      let portfolioIsotope = new _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_14___default.a(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });
      let portfolioFilters = select('#portfolio-flters li', true);
      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');
        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh();
        });
      }, true);
    }
    /**
     * Initiate portfolio lightbox 
     */


    _public_assets_vendor_glightbox_js_glightbox_min_js__WEBPACK_IMPORTED_MODULE_12___default()({
      selector: '.portfolio-lightbox'
    });
    /**
     * Hero carousel indicators
     */

    let heroCarouselIndicators = select("#hero-carousel-indicators");
    let heroCarouselItems = select('#heroCarousel .carousel-item', true);
    heroCarouselItems.forEach((item, index) => {
      index === 0 ? heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" : heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>";
    });
    /**
     * Initiate glightbox 
     */

    _public_assets_vendor_glightbox_js_glightbox_min_js__WEBPACK_IMPORTED_MODULE_12___default()({
      selector: '.glightbox'
    });
    new _public_assets_vendor_swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_13___default.a('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
    new _public_assets_vendor_swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_13___default.a('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    _public_assets_vendor_purecounter_purecounter_vanilla_js__WEBPACK_IMPORTED_MODULE_11___default()(); // Add logic with `term`

    let preloader = select('#preloader');
    preloader === null || preloader === void 0 ? void 0 : preloader.remove();
  }; // useEffect(() => {
  //   // setTimeout(() => {
  //   //   initTerminal()
  //   // }, 100)
  //   if (mounted) {
  //     setTimeout(() => initTerminal(), 200)
  //   }
  // }, [mounted])


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => initTerminal(), 200);
  }); // console.log('pageProps: ', pageProps)
  // console.log('Component: ', Component)

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
    suppressHydrationWarning: true
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 195,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./public/assets/css/style.css":
/*!*************************************!*\
  !*** ./public/assets/css/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/vendor/aos/aos.css":
/*!******************************************!*\
  !*** ./public/assets/vendor/aos/aos.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/vendor/bootstrap-icons/bootstrap-icons.css":
/*!******************************************************************!*\
  !*** ./public/assets/vendor/bootstrap-icons/bootstrap-icons.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/vendor/bootstrap/css/bootstrap.min.css":
/*!**************************************************************!*\
  !*** ./public/assets/vendor/bootstrap/css/bootstrap.min.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/vendor/boxicons/css/boxicons.min.css":
/*!************************************************************!*\
  !*** ./public/assets/vendor/boxicons/css/boxicons.min.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/vendor/glightbox/css/glightbox.min.css":
/*!**************************************************************!*\
  !*** ./public/assets/vendor/glightbox/css/glightbox.min.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/vendor/glightbox/js/glightbox.min.js":
/*!************************************************************!*\
  !*** ./public/assets/vendor/glightbox/js/glightbox.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {}

/***/ }),

/***/ "./public/assets/vendor/isotope-layout/isotope.pkgd.min.js":
/*!*****************************************************************!*\
  !*** ./public/assets/vendor/isotope-layout/isotope.pkgd.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
if (false) {}

/***/ }),

/***/ "./public/assets/vendor/purecounter/purecounter_vanilla.js":
/*!*****************************************************************!*\
  !*** ./public/assets/vendor/purecounter/purecounter_vanilla.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * purecounter.js - A simple yet configurable native javascript counter which you can count on.
 * Author: Stig Rex
 * Version: 1.5.0
 * Url: https://github.com/srexi/purecounterjs
 * License: MIT
 */
if (typeof self !== "undefined") {
  !function (e, t) {
     true ? module.exports = t() : undefined;
  }(self, function () {
    return e = {
      638: function (e) {
        function t(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r, e;
        }

        function r(e) {
          return function (e) {
            if (Array.isArray(e)) return n(e);
          }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
          }(e) || function (e, t) {
            if (e) {
              if ("string" == typeof e) return n(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0;
            }
          }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }

        function n(e, t) {
          (null == t || t > e.length) && (t = e.length);

          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];

          return n;
        }

        function o(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = {};

          for (var n in e) if (t == {} || t.hasOwnProperty(n)) {
            var o = c(e[n]);
            r[n] = o, n.match(/duration|pulse/) && (r[n] = "boolean" != typeof o ? 1e3 * o : o);
          }

          return Object.assign({}, t, r);
        }

        function i(e, t) {
          var r = (t.end - t.start) / (t.duration / t.delay),
              n = "inc";
          t.start > t.end && (n = "dec", r *= -1);
          var o = c(t.start);
          e.innerHTML = u(o, t), !0 === t.once && e.setAttribute("data-purecounter-duration", 0);
          var i = setInterval(function () {
            var a = function (e, t) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "inc";
              return e = c(e), t = c(t), parseFloat("inc" === r ? e + t : e - t);
            }(o, r, n);

            e.innerHTML = u(a, t), ((o = a) >= t.end && "inc" == n || o <= t.end && "dec" == n) && (e.innerHTML = u(t.end, t), t.pulse && (e.setAttribute("data-purecounter-duration", 0), setTimeout(function () {
              e.setAttribute("data-purecounter-duration", t.duration / 1e3);
            }, t.pulse)), clearInterval(i));
          }, t.delay);
        }

        function a(e, t) {
          return Math.pow(e, t);
        }

        function u(e, t) {
          var r = {
            minimumFractionDigits: t.decimals,
            maximumFractionDigits: t.decimals
          },
              n = "string" == typeof t.formater ? t.formater : void 0;
          return e = function (e, t) {
            if (t.filesizing || t.currency) {
              e = Math.abs(Number(e));
              var r = 1e3,
                  n = t.currency && "string" == typeof t.currency ? t.currency : "",
                  o = t.decimals || 1,
                  i = ["", "K", "M", "B", "T"],
                  u = "";
              t.filesizing && (r = 1024, i = ["bytes", "KB", "MB", "GB", "TB"]);

              for (var c = 4; c >= 0; c--) if (0 === c && (u = "".concat(e.toFixed(o), " ").concat(i[c])), e >= a(r, c)) {
                u = "".concat((e / a(r, c)).toFixed(o), " ").concat(i[c]);
                break;
              }

              return n + u;
            }

            return parseFloat(e);
          }(e, t), function (e, t) {
            if (t.formater) {
              var r = t.separator ? "string" == typeof t.separator ? t.separator : "," : "";
              return "en-US" !== t.formater && !0 === t.separator ? e : (n = r, e.replace(/^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([\.,]?\d{0,2}?)$/gi, function (e, t, r, o, i) {
                var a = "",
                    u = "";

                if (void 0 !== t ? (a = t.replace(new RegExp(/,/gi, "gi"), n), u = ",") : void 0 !== r ? a = r.replace(new RegExp(/\./gi, "gi"), n) : void 0 !== o && (a = o.replace(new RegExp(/ /gi, "gi"), n)), void 0 !== i) {
                  var c = "," !== u && "," !== n ? "," : ".";
                  a += void 0 !== i ? i.replace(new RegExp(/\.|,/gi, "gi"), c) : "";
                }

                return a;
              }));
            }

            var n;
            return e;
          }(e = t.formater ? e.toLocaleString(n, r) : parseInt(e).toString(), t);
        }

        function c(e) {
          return /^[0-9]+\.[0-9]+$/.test(e) ? parseFloat(e) : /^[0-9]+$/.test(e) ? parseInt(e) : /^true|false/i.test(e) ? /^true/i.test(e) : e;
        }

        function f(e) {
          for (var t = e.offsetTop, r = e.offsetLeft, n = e.offsetWidth, o = e.offsetHeight; e.offsetParent;) t += (e = e.offsetParent).offsetTop, r += e.offsetLeft;

          return t >= window.pageYOffset && r >= window.pageXOffset && t + o <= window.pageYOffset + window.innerHeight && r + n <= window.pageXOffset + window.innerWidth;
        }

        function s() {
          return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
        }

        e.exports = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = {
            start: 0,
            end: 100,
            duration: 2e3,
            delay: 10,
            once: !0,
            pulse: !1,
            decimals: 0,
            legacy: !0,
            filesizing: !1,
            currency: !1,
            separator: !1,
            formater: "us-US",
            selector: ".purecounter"
          },
              a = o(e, n);

          function d() {
            var e = document.querySelectorAll(a.selector);
            if (0 !== e.length) if (s()) {
              var t = new IntersectionObserver(p.bind(this), {
                root: null,
                rootMargin: "20px",
                threshold: .5
              });
              e.forEach(function (e) {
                t.observe(e);
              });
            } else window.addEventListener && (l(e), window.addEventListener("scroll", function (t) {
              l(e);
            }, {
              passive: !0
            }));
          }

          function l(e) {
            e.forEach(function (e) {
              !0 === v(e).legacy && f(e) && p([e]);
            });
          }

          function p(e, t) {
            e.forEach(function (e) {
              var r = e.target || e,
                  n = v(r);
              if (n.duration <= 0) return r.innerHTML = u(n.end, n);

              if (!t && !f(e) || t && e.intersectionRatio < .5) {
                var o = n.start > n.end ? n.end : n.start;
                return r.innerHTML = u(o, n);
              }

              setTimeout(function () {
                return i(r, n);
              }, n.delay);
            });
          }

          function v(e) {
            var n = a,
                i = [].filter.call(e.attributes, function (e) {
              return /^data-purecounter-/.test(e.name);
            });
            return o(0 != i.length ? Object.assign.apply(Object, [{}].concat(r(i.map(function (e) {
              var r = e.name,
                  n = e.value;
              return t({}, r.replace("data-purecounter-", "").toLowerCase(), c(n));
            })))) : {}, n);
          }

          d();
        };
      }
    }, t = {}, r = function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var i = t[n] = {
        exports: {}
      };
      return e[n](i, i.exports, r), i.exports;
    }(638), r;
    var e, t, r;
  });
}

/***/ }),

/***/ "./public/assets/vendor/remixicon/remixicon.css":
/*!******************************************************!*\
  !*** ./public/assets/vendor/remixicon/remixicon.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/vendor/swiper/swiper-bundle.min.css":
/*!***********************************************************!*\
  !*** ./public/assets/vendor/swiper/swiper-bundle.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/vendor/swiper/swiper-bundle.min.js":
/*!**********************************************************!*\
  !*** ./public/assets/vendor/swiper/swiper-bundle.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 8.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 30, 2023
 */
if (typeof self !== "undefined") {
  !function (e, t) {
     true ? module.exports = t() : undefined;
  }(this, function () {
    "use strict";

    function e(e) {
      return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }

    function t(s, a) {
      void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach(i => {
        void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
      });
    }

    const s = {
      body: {},

      addEventListener() {},

      removeEventListener() {},

      activeElement: {
        blur() {},

        nodeName: ""
      },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({
        initEvent() {}

      }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},

        setAttribute() {},

        getElementsByTagName: () => []
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };

    function a() {
      const e = "undefined" != typeof document ? document : {};
      return t(e, s), e;
    }

    const i = {
      document: s,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState() {},

        pushState() {},

        go() {},

        back() {}

      },
      CustomEvent: function () {
        return this;
      },

      addEventListener() {},

      removeEventListener() {},

      getComputedStyle: () => ({
        getPropertyValue: () => ""
      }),

      Image() {},

      Date() {},

      screen: {},

      setTimeout() {},

      clearTimeout() {},

      matchMedia: () => ({}),
      requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),

      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      }

    };

    function r() {
      const e = false ? undefined : {};
      return t(e, i), e;
    }

    class n extends Array {
      constructor(e) {
        "number" == typeof e ? super(e) : (super(...(e || [])), function (e) {
          const t = e.__proto__;
          Object.defineProperty(e, "__proto__", {
            get: () => t,

            set(e) {
              t.__proto__ = e;
            }

          });
        }(this));
      }

    }

    function l(e) {
      void 0 === e && (e = []);
      const t = [];
      return e.forEach(e => {
        Array.isArray(e) ? t.push(...l(e)) : t.push(e);
      }), t;
    }

    function o(e, t) {
      return Array.prototype.filter.call(e, t);
    }

    function d(e, t) {
      const s = r(),
            i = a();
      let l = [];
      if (!t && e instanceof n) return e;
      if (!e) return new n(l);

      if ("string" == typeof e) {
        const s = e.trim();

        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = s;

          for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e]);
        } else l = function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
                a = t.querySelectorAll(e);

          for (let e = 0; e < a.length; e += 1) s.push(a[e]);

          return s;
        }(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) l.push(e);else if (Array.isArray(e)) {
        if (e instanceof n) return e;
        l = e;
      }

      return new n(function (e) {
        const t = [];

        for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);

        return t;
      }(l));
    }

    d.fn = n.prototype;
    const c = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

        const a = l(t.map(e => e.split(" ")));
        return this.forEach(e => {
          e.classList.add(...a);
        }), this;
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

        const a = l(t.map(e => e.split(" ")));
        return this.forEach(e => {
          e.classList.remove(...a);
        }), this;
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

        const a = l(t.map(e => e.split(" ")));
        return o(this, e => a.filter(t => e.classList.contains(t)).length > 0).length > 0;
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

        const a = l(t.map(e => e.split(" ")));
        this.forEach(e => {
          a.forEach(t => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

        for (let s = 0; s < this.length; s += 1) if (2 === arguments.length) this[s].setAttribute(e, t);else for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);

        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);

        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;

        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;

        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

        let [a, i, r, n] = t;

        function l(e) {
          const t = e.target;
          if (!t) return;
          const s = e.target.dom7EventData || [];
          if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s);else {
            const e = d(t).parents();

            for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s);
          }
        }

        function o(e) {
          const t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }

        "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
        const c = a.split(" ");
        let p;

        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i) for (p = 0; p < c.length; p += 1) {
            const e = c[p];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
              listener: r,
              proxyListener: l
            }), t.addEventListener(e, l, n);
          } else for (p = 0; p < c.length; p += 1) {
            const e = c[p];
            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
              listener: r,
              proxyListener: o
            }), t.addEventListener(e, o, n);
          }
        }

        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

        let [a, i, r, n] = t;
        "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
        const l = a.split(" ");

        for (let e = 0; e < l.length; e += 1) {
          const t = l[e];

          for (let e = 0; e < this.length; e += 1) {
            const s = this[e];
            let a;
            if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length) for (let e = a.length - 1; e >= 0; e -= 1) {
              const i = a[e];
              r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1));
            }
          }
        }

        return this;
      },
      trigger: function () {
        const e = r();

        for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];

        const i = s[0].split(" "),
              n = s[1];

        for (let t = 0; t < i.length; t += 1) {
          const a = i[t];

          for (let t = 0; t < this.length; t += 1) {
            const i = this[t];

            if (e.CustomEvent) {
              const t = new e.CustomEvent(a, {
                detail: n,
                bubbles: !0,
                cancelable: !0
              });
              i.dom7EventData = s.filter((e, t) => t > 0), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData;
            }
          }
        }

        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return e && t.on("transitionend", function s(a) {
          a.target === this && (e.call(this, a), t.off("transitionend", s));
        }), this;
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
          }

          return this[0].offsetWidth;
        }

        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
          }

          return this[0].offsetHeight;
        }

        return null;
      },
      styles: function () {
        const e = r();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = r(),
                t = a(),
                s = this[0],
                i = s.getBoundingClientRect(),
                n = t.body,
                l = s.clientTop || n.clientTop || 0,
                o = s.clientLeft || n.clientLeft || 0,
                d = s === e ? e.scrollY : s.scrollTop,
                c = s === e ? e.scrollX : s.scrollLeft;
          return {
            top: i.top + d - l,
            left: i.left + c - o
          };
        }

        return null;
      },
      css: function (e, t) {
        const s = r();
        let a;

        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (a = 0; a < this.length; a += 1) for (const t in e) this[a].style[t] = e[t];

            return this;
          }

          if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }

        if (2 === arguments.length && "string" == typeof e) {
          for (a = 0; a < this.length; a += 1) this[a].style[e] = t;

          return this;
        }

        return this;
      },
      each: function (e) {
        return e ? (this.forEach((t, s) => {
          e.apply(t, [t, s]);
        }), this) : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;

        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;

        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;

        return this;
      },
      is: function (e) {
        const t = r(),
              s = a(),
              i = this[0];
        let l, o;
        if (!i || void 0 === e) return !1;

        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);

          for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;

          return !1;
        }

        if (e === s) return i === s;
        if (e === t) return i === t;

        if (e.nodeType || e instanceof n) {
          for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) if (l[o] === i) return !0;

          return !1;
        }

        return !1;
      },
      index: function () {
        let e,
            t = this[0];

        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);

          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return d([]);

        if (e < 0) {
          const s = t + e;
          return d(s < 0 ? [] : [this[s]]);
        }

        return d([this[e]]);
      },
      append: function () {
        let e;
        const t = a();

        for (let s = 0; s < arguments.length; s += 1) {
          e = s < 0 || arguments.length <= s ? void 0 : arguments[s];

          for (let s = 0; s < this.length; s += 1) if ("string" == typeof e) {
            const a = t.createElement("div");

            for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild);
          } else if (e instanceof n) for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);else this[s].appendChild(e);
        }

        return this;
      },
      prepend: function (e) {
        const t = a();
        let s, i;

        for (s = 0; s < this.length; s += 1) if ("string" == typeof e) {
          const a = t.createElement("div");

          for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof n) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);else this[s].insertBefore(e, this[s].childNodes[0]);

        return this;
      },
      next: function (e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return d([]);

        for (; s.nextElementSibling;) {
          const a = s.nextElementSibling;
          e ? d(a).is(e) && t.push(a) : t.push(a), s = a;
        }

        return d(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([]);
        }

        return d([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return d([]);

        for (; s.previousElementSibling;) {
          const a = s.previousElementSibling;
          e ? d(a).is(e) && t.push(a) : t.push(a), s = a;
        }

        return d(t);
      },
      parent: function (e) {
        const t = [];

        for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));

        return d(t);
      },
      parents: function (e) {
        const t = [];

        for (let s = 0; s < this.length; s += 1) {
          let a = this[s].parentNode;

          for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
        }

        return d(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];

        for (let s = 0; s < this.length; s += 1) {
          const a = this[s].querySelectorAll(e);

          for (let e = 0; e < a.length; e += 1) t.push(a[e]);
        }

        return d(t);
      },
      children: function (e) {
        const t = [];

        for (let s = 0; s < this.length; s += 1) {
          const a = this[s].children;

          for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s]);
        }

        return d(t);
      },
      filter: function (e) {
        return d(o(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);

        return this;
      }
    };

    function p(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }

    function u() {
      return Date.now();
    }

    function h(e, t) {
      void 0 === t && (t = "x");
      const s = r();
      let a, i, n;

      const l = function (e) {
        const t = r();
        let s;
        return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
      }(e);

      return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
    }

    function m(e) {
      return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }

    function f(e) {
      return  false ? undefined : e && (1 === e.nodeType || 11 === e.nodeType);
    }

    function g() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];

      for (let s = 1; s < arguments.length; s += 1) {
        const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];

        if (null != a && !f(a)) {
          const s = Object.keys(Object(a)).filter(e => t.indexOf(e) < 0);

          for (let t = 0, i = s.length; t < i; t += 1) {
            const i = s[t],
                  r = Object.getOwnPropertyDescriptor(a, i);
            void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i]);
          }
        }
      }

      return e;
    }

    function v(e, t, s) {
      e.style.setProperty(t, s);
    }

    function w(e) {
      let {
        swiper: t,
        targetPosition: s,
        side: a
      } = e;
      const i = r(),
            n = -t.translate;
      let l,
          o = null;
      const d = t.params.speed;
      t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);

      const c = s > n ? "next" : "prev",
            p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
            u = () => {
        l = new Date().getTime(), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
              r = .5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
          [a]: c
        }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
            [a]: c
          });
        }), void i.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };

      u();
    }

    let b, x, y;

    function E() {
      return b || (b = function () {
        const e = r(),
              t = a();
        return {
          smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
          touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
          passiveListener: function () {
            let t = !1;

            try {
              const s = Object.defineProperty({}, "passive", {
                get() {
                  t = !0;
                }

              });
              e.addEventListener("testPassiveListener", null, s);
            } catch (e) {}

            return t;
          }(),
          gestures: "ongesturestart" in e
        };
      }()), b;
    }

    function C(e) {
      return void 0 === e && (e = {}), x || (x = function (e) {
        let {
          userAgent: t
        } = void 0 === e ? {} : e;
        const s = E(),
              a = r(),
              i = a.navigator.platform,
              n = t || a.navigator.userAgent,
              l = {
          ios: !1,
          android: !1
        },
              o = a.screen.width,
              d = a.screen.height,
              c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
        let p = n.match(/(iPad).*OS\s([\d_]+)/);
        const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              m = "Win32" === i;
        let f = "MacIntel" === i;
        return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l;
      }(e)), x;
    }

    function T() {
      return y || (y = function () {
        const e = r();
        return {
          isSafari: function () {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
          }(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
        };
      }()), y;
    }

    Object.keys(c).forEach(e => {
      Object.defineProperty(d.fn, e, {
        value: c[e],
        writable: !0
      });
    });
    var $ = {
      on(e, t, s) {
        const a = this;
        if (!a.eventsListeners || a.destroyed) return a;
        if ("function" != typeof t) return a;
        const i = s ? "unshift" : "push";
        return e.split(" ").forEach(e => {
          a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
        }), a;
      },

      once(e, t, s) {
        const a = this;
        if (!a.eventsListeners || a.destroyed) return a;
        if ("function" != typeof t) return a;

        function i() {
          a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;

          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];

          t.apply(a, r);
        }

        return i.__emitterProxy = t, a.on(e, i, s);
      },

      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const a = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
      },

      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },

      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(e => {
          void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i) => {
            (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
          });
        }), s) : s;
      },

      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, a;

        for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];

        "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
        return (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
          e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
            e.apply(a, [t, ...s]);
          }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
            e.apply(a, s);
          });
        }), e;
      }

    };
    var S = {
      updateSize: function () {
        const e = this;
        let t, s;
        const a = e.$el;
        t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
          width: t,
          height: s,
          size: e.isHorizontal() ? t : s
        }));
      },
      updateSlides: function () {
        const e = this;

        function t(t) {
          return e.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          }[t];
        }

        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }

        const a = e.params,
              {
          $wrapperEl: i,
          size: r,
          rtlTranslate: n,
          wrongRTL: l
        } = e,
              o = e.virtual && a.virtual.enabled,
              d = o ? e.virtual.slides.length : e.slides.length,
              c = i.children(`.${e.params.slideClass}`),
              p = o ? e.virtual.slides.length : c.length;
        let u = [];
        const h = [],
              m = [];
        let f = a.slidesOffsetBefore;
        "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
        let g = a.slidesOffsetAfter;
        "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
        const w = e.snapGrid.length,
              b = e.slidesGrid.length;
        let x = a.spaceBetween,
            y = -f,
            E = 0,
            C = 0;
        if (void 0 === r) return;
        "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
          marginLeft: "",
          marginBottom: "",
          marginTop: ""
        }) : c.css({
          marginRight: "",
          marginBottom: "",
          marginTop: ""
        }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const T = a.grid && a.grid.rows > 1 && e.grid;
        let $;
        T && e.grid.initSlides(p);
        const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(e => void 0 !== a.breakpoints[e].slidesPerView).length > 0;

        for (let i = 0; i < p; i += 1) {
          $ = 0;
          const n = c.eq(i);

          if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
            if ("auto" === a.slidesPerView) {
              S && (c[i].style[t("width")] = "");
              const r = getComputedStyle(n[0]),
                    l = n[0].style.transform,
                    o = n[0].style.webkitTransform;
              if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);else {
                const e = s(r, "width"),
                      t = s(r, "padding-left"),
                      a = s(r, "padding-right"),
                      i = s(r, "margin-left"),
                      l = s(r, "margin-right"),
                      o = r.getPropertyValue("box-sizing");
                if (o && "border-box" === o) $ = e + i + l;else {
                  const {
                    clientWidth: s,
                    offsetWidth: r
                  } = n[0];
                  $ = e + t + a + i + l + (r - s);
                }
              }
              l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($));
            } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);

            c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1;
          }
        }

        if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
          width: `${e.virtualSize + a.spaceBetween}px`
        }), a.setWrapperSize && i.css({
          [t("width")]: `${e.virtualSize + a.spaceBetween}px`
        }), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
          const t = [];

          for (let s = 0; s < u.length; s += 1) {
            let i = u[s];
            a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i);
          }

          u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
        }

        if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
          const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
            [s]: `${x}px`
          });
        }

        if (a.centeredSlides && a.centeredSlidesBounds) {
          let e = 0;
          m.forEach(t => {
            e += t + (a.spaceBetween ? a.spaceBetween : 0);
          }), e -= a.spaceBetween;
          const t = e - r;
          u = u.map(e => e < 0 ? -f : e > t ? t + g : e);
        }

        if (a.centerInsufficientSlides) {
          let e = 0;

          if (m.forEach(t => {
            e += t + (a.spaceBetween ? a.spaceBetween : 0);
          }), e -= a.spaceBetween, e < r) {
            const t = (r - e) / 2;
            u.forEach((e, s) => {
              u[s] = e - t;
            }), h.forEach((e, s) => {
              h[s] = e + t;
            });
          }
        }

        if (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: m
        }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
          v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
          const t = -e.snapGrid[0],
                s = -e.slidesGrid[0];
          e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + s);
        }

        if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
          const t = `${a.containerModifierClass}backface-hidden`,
                s = e.$el.hasClass(t);
          p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
              s = [],
              a = t.virtual && t.params.virtual.enabled;
        let i,
            r = 0;
        "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

        const n = e => a ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];

        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
          if (t.params.centeredSlides) (t.visibleSlides || d([])).each(e => {
            s.push(e);
          });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !a) break;
            s.push(n(e));
          }
        } else s.push(n(t.activeIndex));

        for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          r = e > r ? e : r;
        }

        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
              t = e.slides;

        for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = this && this.translate || 0);
        const t = this,
              s = t.params,
              {
          slides: a,
          rtlTranslate: i,
          snapGrid: r
        } = t;
        if (0 === a.length) return;
        void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
        let n = -e;
        i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

        for (let e = 0; e < a.length; e += 1) {
          const l = a[e];
          let o = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
          const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                p = -(n - o),
                u = p + t.slidesSizesGrid[e];
          (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c;
        }

        t.visibleSlides = d(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;

        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = t && t.translate && t.translate * s || 0;
        }

        const s = t.params,
              a = t.maxTranslate() - t.minTranslate();
        let {
          progress: i,
          isBeginning: r,
          isEnd: n
        } = t;
        const l = r,
              o = n;
        0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
          progress: i,
          isBeginning: r,
          isEnd: n
        }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
              {
          slides: t,
          params: s,
          $wrapperEl: a,
          activeIndex: i,
          realIndex: r
        } = e,
              n = e.virtual && s.virtual.enabled;
        let l;
        t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
        let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
        let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
              s = t.rtlTranslate ? t.translate : -t.translate,
              {
          slidesGrid: a,
          snapGrid: i,
          params: r,
          activeIndex: n,
          realIndex: l,
          snapIndex: o
        } = t;
        let d,
            c = e;

        if (void 0 === c) {
          for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);

          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }

        if (i.indexOf(s) >= 0) d = i.indexOf(s);else {
          const e = Math.min(r.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / r.slidesPerGroup);
        }
        if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
        const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
        Object.assign(t, {
          snapIndex: d,
          realIndex: p,
          previousIndex: n,
          activeIndex: c
        }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
              s = t.params,
              a = d(e).closest(`.${s.slideClass}`)[0];
        let i,
            r = !1;
        if (a) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === a) {
          r = !0, i = e;
          break;
        }
        if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
        t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
      }
    };
    var M = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: s,
          translate: a,
          $wrapperEl: i
        } = this;
        if (t.virtualTranslate) return s ? -a : a;
        if (t.cssMode) return a;
        let r = h(i[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
              {
          rtlTranslate: a,
          params: i,
          $wrapperEl: r,
          wrapperEl: n,
          progress: l
        } = s;
        let o,
            d = 0,
            c = 0;
        s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
        const p = s.maxTranslate() - s.minTranslate();
        o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, a, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
        const r = this,
              {
          params: n,
          wrapperEl: l
        } = r;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        const o = r.minTranslate(),
              d = r.maxTranslate();
        let c;

        if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
          const e = r.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;else {
            if (!r.support.smoothScroll) return w({
              swiper: r,
              targetPosition: -c,
              side: e ? "left" : "top"
            }), !0;
            l.scrollTo({
              [e ? "left" : "top"]: -c,
              behavior: "smooth"
            });
          }
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
      }
    };

    function P(e) {
      let {
        swiper: t,
        runCallbacks: s,
        direction: a,
        step: i
      } = e;
      const {
        activeIndex: r,
        previousIndex: n
      } = t;
      let l = a;

      if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
        if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
        t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
      }
    }

    var k = {
      slideTo: function (e, t, s, a, i) {
        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);

        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
          e = t;
        }

        const r = this;
        let n = e;
        n < 0 && (n = 0);
        const {
          params: l,
          snapGrid: o,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: h,
          enabled: m
        } = r;
        if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
        const f = Math.min(r.params.slidesPerGroupSkip, n);
        let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1);
        const v = -o[g];
        if (l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
                s = Math.floor(100 * d[e]),
                a = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e);
        }

        if (r.initialized && n !== p) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
          if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1;
        }

        let b;
        if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;

        if (l.cssMode) {
          const e = r.isHorizontal(),
                s = u ? v : -v;

          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(() => {
              r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
            });
          } else {
            if (!r.support.smoothScroll) return w({
              swiper: r,
              targetPosition: s,
              side: e ? "left" : "top"
            }), !0;
            h.scrollTo({
              [e ? "left" : "top"]: s,
              behavior: "smooth"
            });
          }

          return !0;
        }

        return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0;
      },
      slideToLoop: function (e, t, s, a) {
        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
          e = t;
        }

        const i = this;
        let r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const a = this,
              {
          animating: i,
          enabled: r,
          params: n
        } = a;
        if (!r) return a;
        let l = n.slidesPerGroup;
        "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
        const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;

        if (n.loop) {
          if (i && n.loopPreventsSlide) return !1;
          a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
        }

        return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const a = this,
              {
          params: i,
          animating: r,
          snapGrid: n,
          slidesGrid: l,
          rtlTranslate: o,
          enabled: d
        } = a;
        if (!d) return a;

        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
        }

        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        const p = c(o ? a.translate : -a.translate),
              u = n.map(e => c(e));
        let h = n[u.indexOf(p) - 1];

        if (void 0 === h && i.cssMode) {
          let e;
          n.forEach((t, s) => {
            p >= t && (e = s);
          }), void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
        }

        let m = 0;

        if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
          const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
          return a.slideTo(i, e, t, s);
        }

        return a.slideTo(m, e, t, s);
      },
      slideReset: function (e, t, s) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e, t, s, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
        const i = this;
        let r = i.activeIndex;
        const n = Math.min(i.params.slidesPerGroupSkip, r),
              l = n + Math.floor((r - n) / i.params.slidesPerGroup),
              o = i.rtlTranslate ? i.translate : -i.translate;

        if (o >= i.snapGrid[l]) {
          const e = i.snapGrid[l];
          o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[l - 1];
          o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
        }

        return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
      },
      slideToClickedSlide: function () {
        const e = this,
              {
          params: t,
          $wrapperEl: s
        } = e,
              a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
        let i,
            r = e.clickedIndex;

        if (t.loop) {
          if (e.animating) return;
          i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p(() => {
            e.slideTo(r);
          })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p(() => {
            e.slideTo(r);
          })) : e.slideTo(r);
        } else e.slideTo(r);
      }
    };
    var z = {
      loopCreate: function () {
        const e = this,
              t = a(),
              {
          params: s,
          $wrapperEl: i
        } = e,
              r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
        r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let n = r.children(`.${s.slideClass}`);

        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - n.length % s.slidesPerGroup;

          if (e !== s.slidesPerGroup) {
            for (let a = 0; a < e; a += 1) {
              const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
              r.append(e);
            }

            n = r.children(`.${s.slideClass}`);
          }
        }

        "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
        const l = [],
              o = [];
        n.each((e, t) => {
          d(e).attr("data-swiper-slide-index", t);
        });

        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / n.length) * n.length;
          o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0]);
        }

        for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));

        for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: a,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: n,
          rtlTranslate: l
        } = e;
        let o;
        e.allowSlidePrev = !0, e.allowSlideNext = !0;
        const d = -n[t] - e.getTranslate();

        if (t < a) {
          o = s.length - 3 * a + t, o += a;
          e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
        } else if (t >= s.length - a) {
          o = -s.length + t + a, o += a;
          e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
        }

        e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
      },
      loopDestroy: function () {
        const {
          $wrapperEl: e,
          params: t,
          slides: s
        } = this;
        e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index");
      }
    };

    function L(e) {
      const t = this,
            s = a(),
            i = r(),
            n = t.touchEventsData,
            {
        params: l,
        touches: o,
        enabled: c
      } = t;
      if (!c) return;
      if (t.animating && l.preventInteractionOnTransition) return;
      !t.animating && l.cssMode && l.loop && t.loopFix();
      let p = e;
      p.originalEvent && (p = p.originalEvent);
      let h = d(p.target);
      if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
      if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
      if (!n.isTouchEvent && "button" in p && p.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const m = !!l.noSwipingClass && "" !== l.noSwipingClass,
            f = e.composedPath ? e.composedPath() : e.path;
      m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
      const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            v = !(!p.target || !p.target.shadowRoot);
      if (l.noSwiping && (v ? function (e, t) {
        return void 0 === t && (t = this), function t(s) {
          if (!s || s === a() || s === r()) return null;
          s.assignedSlot && (s = s.assignedSlot);
          const i = s.closest(e);
          return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
        }(t);
      }(g, h[0]) : h.closest(g)[0])) return void (t.allowClick = !0);
      if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
      o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
      const w = o.currentX,
            b = o.currentY,
            x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;

      if (x && (w <= y || w >= i.innerWidth - y)) {
        if ("prevent" !== x) return;
        e.preventDefault();
      }

      if (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
      }), o.startX = w, o.startY = b, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
        let e = !0;
        h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
        const a = e && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault();
      }

      t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p);
    }

    function O(e) {
      const t = a(),
            s = this,
            i = s.touchEventsData,
            {
        params: r,
        touches: n,
        rtlTranslate: l,
        enabled: o
      } = s;
      if (!o) return;
      let c = e;
      if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
      if (i.isTouchEvent && "touchmove" !== c.type) return;
      const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            h = "touchmove" === c.type ? p.pageX : c.pageX,
            m = "touchmove" === c.type ? p.pageY : c.pageY;
      if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
      if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
        startX: h,
        startY: m,
        currentX: h,
        currentY: m
      }), i.touchStartTime = u()));
      if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
        if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
      } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
      if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
      if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
      n.currentX = h, n.currentY = m;
      const f = n.currentX - n.startX,
            g = n.currentY - n.startY;
      if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;

      if (void 0 === i.isScrolling) {
        let e;
        s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
      }

      if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
      if (!i.startMoving) return;
      s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
      let v = s.isHorizontal() ? f : g;
      n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
      let w = !0,
          b = r.resistanceRatio;

      if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
        if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
      }

      r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
    }

    function I(e) {
      const t = this,
            s = t.touchEventsData,
            {
        params: a,
        touches: i,
        rtlTranslate: r,
        slidesGrid: n,
        enabled: l
      } = t;
      if (!l) return;
      let o = e;
      if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
      a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
      const d = u(),
            c = d - s.touchStartTime;

      if (t.allowClick) {
        const e = o.path || o.composedPath && o.composedPath();
        t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
      }

      if (s.lastClickTime = u(), p(() => {
        t.destroyed || (t.allowClick = !0);
      }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
      let h;
      if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
      if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
        currentPos: h
      });
      let m = 0,
          f = t.slidesSizesGrid[0];

      for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
        const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2]);
      }

      let g = null,
          v = null;
      a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
      const w = (h - n[m]) / f,
            b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

      if (c > a.longSwipesMs) {
        if (!a.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m));
      } else {
        if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
      }
    }

    function A() {
      const e = this,
            {
        params: t,
        el: s
      } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const {
        allowSlideNext: a,
        allowSlidePrev: i,
        snapGrid: r
      } = e;
      e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }

    function D(e) {
      const t = this;
      t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }

    function G() {
      const e = this,
            {
        wrapperEl: t,
        rtlTranslate: s,
        enabled: a
      } = e;
      if (!a) return;
      let i;
      e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }

    let N = !1;

    function B() {}

    const H = (e, t) => {
      const s = a(),
            {
        params: i,
        touchEvents: r,
        el: n,
        wrapperEl: l,
        device: o,
        support: d
      } = e,
            c = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener",
            u = t;

      if (d.touch) {
        const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
          passive: !1,
          capture: c
        } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t);
      } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);

      (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0);
    };

    var X = {
      attachEvents: function () {
        const e = this,
              t = a(),
              {
          params: s,
          support: i
        } = e;
        e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on");
      },
      detachEvents: function () {
        H(this, "off");
      }
    };

    const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;

    var R = {
      addClasses: function () {
        const e = this,
              {
          classNames: t,
          params: s,
          rtl: a,
          $el: i,
          device: r,
          support: n
        } = e,
              l = function (e, t) {
          const s = [];
          return e.forEach(e => {
            "object" == typeof e ? Object.keys(e).forEach(a => {
              e[a] && s.push(t + a);
            }) : "string" == typeof e && s.push(t + e);
          }), s;
        }(["initialized", s.direction, {
          "pointer-events": !n.touch
        }, {
          "free-mode": e.params.freeMode && s.freeMode.enabled
        }, {
          autoheight: s.autoHeight
        }, {
          rtl: a
        }, {
          grid: s.grid && s.grid.rows > 1
        }, {
          "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
        }, {
          android: r.android
        }, {
          ios: r.ios
        }, {
          "css-mode": s.cssMode
        }, {
          centered: s.cssMode && s.centeredSlides
        }, {
          "watch-progress": s.watchSlidesProgress
        }], s.containerModifierClass);

        t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const {
          $el: e,
          classNames: t
        } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      }
    };
    var W = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    };

    function q(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const a = Object.keys(s)[0],
              i = s[a];
        "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
          auto: !0
        }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
          enabled: !0
        }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
          enabled: !1
        }), g(t, s)) : g(t, s)) : g(t, s);
      };
    }

    const j = {
      eventsEmitter: $,
      update: S,
      translate: M,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
                {
            params: a
          } = s;
          a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "Start"
          }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
                {
            params: a
          } = s;
          s.animating = !1, a.cssMode || (s.setTransition(0), P({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "End"
          }));
        }
      },
      slide: k,
      loop: z,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
          const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab";
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
        }
      },
      events: X,
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
                {
            activeIndex: t,
            initialized: s,
            loopedSlides: a = 0,
            params: i,
            $el: r
          } = e,
                n = i.breakpoints;
          if (!n || n && 0 === Object.keys(n).length) return;
          const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
          if (!l || e.currentBreakpoint === l) return;
          const o = (l in n ? n[l] : void 0) || e.originalParams,
                d = Y(e, i),
                c = Y(e, o),
                p = i.enabled;
          d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
            const s = i[t] && i[t].enabled,
                  a = o[t] && o[t].enabled;
            s && !a && e[t].disable(), !s && a && e[t].enable();
          });
          const u = o.direction && o.direction !== i.direction,
                h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
          u && s && e.changeDirection(), g(e.params, o);
          const m = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
        },
        getBreakpoint: function (e, t, s) {
          if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
          let a = !1;
          const i = r(),
                n = "window" === t ? i.innerHeight : s.clientHeight,
                l = Object.keys(e).map(e => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return {
                value: n * t,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));

          for (let e = 0; e < l.length; e += 1) {
            const {
              point: r,
              value: n
            } = l[e];
            "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r);
          }

          return a || "max";
        }
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
                {
            isLocked: t,
            params: s
          } = e,
                {
            slidesOffsetBefore: a
          } = s;

          if (a) {
            const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;

          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        }
      },
      classes: R,
      images: {
        loadImage: function (e, t, s, a, i, n) {
          const l = r();
          let o;

          function c() {
            n && n();
          }

          d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image(), o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
        },
        preloadImages: function () {
          const e = this;

          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }

          e.imagesToLoad = e.$el.find("img");

          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const a = e.imagesToLoad[s];
            e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
          _ = {};

    class V {
      constructor() {
        let e, t;

        for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];

        if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
          const e = [];
          return d(t.el).each(s => {
            const a = g({}, t, {
              el: s
            });
            e.push(new V(a));
          }), e;
        }

        const r = this;
        r.__swiper__ = !0, r.support = E(), r.device = C({
          userAgent: t.userAgent
        }), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const n = {};
        r.modules.forEach(e => {
          e({
            swiper: r,
            extendParams: q(t, n),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r)
          });
        });
        const l = g({}, W, n);
        return r.params = g({}, l, _, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach(e => {
          r.on(e, r.params.on[e]);
        }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
          enabled: r.params.enabled,
          el: e,
          classNames: [],
          slides: d(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === r.params.direction,
          isVertical: () => "vertical" === r.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                  t = ["pointerdown", "pointermove", "pointerup"];
            return r.touchEventsTouch = {
              start: e[0],
              move: e[1],
              end: e[2],
              cancel: e[3]
            }, r.touchEventsDesktop = {
              start: t[0],
              move: t[1],
              end: t[2]
            }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: u(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), r.emit("_swiper"), r.params.init && r.init(), r;
      }

      enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }

      disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }

      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const a = s.minTranslate(),
              i = (s.maxTranslate() - a) * e + a;
        s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }

      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
        e.emit("_containerClasses", t.join(" "));
      }

      getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ");
      }

      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each(s => {
          const a = e.getSlideClasses(s);
          t.push({
            slideEl: s,
            classNames: a
          }), e.emit("_slideClass", s, a);
        }), e.emit("_slideClasses", t);
      }

      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: a,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: n,
          activeIndex: l
        } = this;
        let o = 1;

        if (s.centeredSlides) {
          let e,
              t = a[l].swiperSlideSize;

          for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));

          for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
        } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        } else for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }

        return o;
      }

      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {
          snapGrid: t,
          params: s
        } = e;

        function a() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        let i;
        s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
              a = s.params.direction;
        return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each(t => {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
      }

      changeLanguageDirection(e) {
        const t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
      }

      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = d(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;

        const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;

        let r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = d(e.shadowRoot.querySelector(i()));
            return t.children = e => s.children(e), t;
          }

          return s.children ? s.children(i()) : d(s).children(i());
        })();

        if (0 === r.length && t.params.createElements) {
          const e = a().createElement("div");
          r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each(e => {
            r.append(e);
          });
        }

        return Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display")
        }), !0;
      }

      init(e) {
        const t = this;
        if (t.initialized) return t;
        return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }

      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
              {
          params: a,
          $el: i,
          $wrapperEl: r,
          slides: n
        } = s;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, function (e) {
          const t = e;
          Object.keys(t).forEach(e => {
            try {
              t[e] = null;
            } catch (e) {}

            try {
              delete t[e];
            } catch (e) {}
          });
        }(s)), s.destroyed = !0), null;
      }

      static extendDefaults(e) {
        g(_, e);
      }

      static get extendedDefaults() {
        return _;
      }

      static get defaults() {
        return W;
      }

      static installModule(e) {
        V.prototype.__modules__ || (V.prototype.__modules__ = []);
        const t = V.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }

      static use(e) {
        return Array.isArray(e) ? (e.forEach(e => V.installModule(e)), V) : (V.installModule(e), V);
      }

    }

    function F(e, t, s, i) {
      const r = a();
      return e.params.createElements && Object.keys(i).forEach(a => {
        if (!s[a] && !0 === s.auto) {
          let n = e.$el.children(`.${i[a]}`)[0];
          n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n;
        }
      }), s;
    }

    function U(e) {
      return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
    }

    function K(e) {
      const t = this,
            {
        $wrapperEl: s,
        params: a
      } = t;
      if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);else s.append(e);
      a.loop && t.loopCreate(), a.observer || t.update();
    }

    function Z(e) {
      const t = this,
            {
        params: s,
        $wrapperEl: a,
        activeIndex: i
      } = t;
      s.loop && t.loopDestroy();
      let r = i + 1;

      if ("object" == typeof e && "length" in e) {
        for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);

        r = i + e.length;
      } else a.prepend(e);

      s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
    }

    function Q(e, t) {
      const s = this,
            {
        $wrapperEl: a,
        params: i,
        activeIndex: r
      } = s;
      let n = r;
      i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
      const l = s.slides.length;
      if (e <= 0) return void s.prependSlide(t);
      if (e >= l) return void s.appendSlide(t);
      let o = n > e ? n + 1 : n;
      const d = [];

      for (let t = l - 1; t >= e; t -= 1) {
        const e = s.slides.eq(t);
        e.remove(), d.unshift(e);
      }

      if ("object" == typeof t && "length" in t) {
        for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);

        o = n > e ? n + t.length : n;
      } else a.append(t);

      for (let e = 0; e < d.length; e += 1) a.append(d[e]);

      i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    }

    function J(e) {
      const t = this,
            {
        params: s,
        $wrapperEl: a,
        activeIndex: i
      } = t;
      let r = i;
      s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
      let n,
          l = r;

      if ("object" == typeof e && "length" in e) {
        for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);

        l = Math.max(l, 0);
      } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);

      s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
    }

    function ee() {
      const e = this,
            t = [];

      for (let s = 0; s < e.slides.length; s += 1) t.push(s);

      e.removeSlide(t);
    }

    function te(e) {
      const {
        effect: t,
        swiper: s,
        on: a,
        setTranslate: i,
        setTransition: r,
        overwriteParams: n,
        perspective: l,
        recreateShadows: o,
        getEffectParams: d
      } = e;
      let c;
      a("beforeInit", () => {
        if (s.params.effect !== t) return;
        s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
        const e = n ? n() : {};
        Object.assign(s.params, e), Object.assign(s.originalParams, e);
      }), a("setTranslate", () => {
        s.params.effect === t && i();
      }), a("setTransition", (e, a) => {
        s.params.effect === t && r(a);
      }), a("transitionEnd", () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          s.slides.each(e => {
            s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
          }), o();
        }
      }), a("virtualUpdate", () => {
        s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(() => {
          c && s.slides && s.slides.length && (i(), c = !1);
        }));
      });
    }

    function se(e, t) {
      return e.transformEl ? t.find(e.transformEl).css({
        "backface-visibility": "hidden",
        "-webkit-backface-visibility": "hidden"
      }) : t;
    }

    function ae(e) {
      let {
        swiper: t,
        duration: s,
        transformEl: a,
        allSlides: i
      } = e;
      const {
        slides: r,
        activeIndex: n,
        $wrapperEl: l
      } = t;

      if (t.params.virtualTranslate && 0 !== s) {
        let e,
            s = !1;
        e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd(() => {
          if (s) return;
          if (!t || t.destroyed) return;
          s = !0, t.animating = !1;
          const e = ["webkitTransitionEnd", "transitionend"];

          for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
        });
      }
    }

    function ie(e, t, s) {
      const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
            i = e.transformEl ? t.find(e.transformEl) : t;
      let r = i.children(`.${a}`);
      return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r;
    }

    Object.keys(j).forEach(e => {
      Object.keys(j[e]).forEach(t => {
        V.prototype[t] = j[e][t];
      });
    }), V.use([function (e) {
      let {
        swiper: t,
        on: s,
        emit: a
      } = e;
      const i = r();
      let n = null,
          l = null;

      const o = () => {
        t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
      },
            d = () => {
        t && !t.destroyed && t.initialized && a("orientationchange");
      };

      s("init", () => {
        t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver(e => {
          l = i.requestAnimationFrame(() => {
            const {
              width: s,
              height: a
            } = t;
            let i = s,
                r = a;
            e.forEach(e => {
              let {
                contentBoxSize: s,
                contentRect: a,
                target: n
              } = e;
              n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
            }), i === s && r === a || o();
          });
        }), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
      }), s("destroy", () => {
        l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a,
        emit: i
      } = e;

      const n = [],
            l = r(),
            o = function (e, t) {
        void 0 === t && (t = {});
        const s = new (l.MutationObserver || l.WebkitMutationObserver)(e => {
          if (1 === e.length) return void i("observerUpdate", e[0]);

          const t = function () {
            i("observerUpdate", e[0]);
          };

          l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
        });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), n.push(s);
      };

      s({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      }), a("init", () => {
        if (t.params.observer) {
          if (t.params.observeParents) {
            const e = t.$el.parents();

            for (let t = 0; t < e.length; t += 1) o(e[t]);
          }

          o(t.$el[0], {
            childList: t.params.observeSlideChildren
          }), o(t.$wrapperEl[0], {
            attributes: !1
          });
        }
      }), a("destroy", () => {
        n.forEach(e => {
          e.disconnect();
        }), n.splice(0, n.length);
      });
    }]);
    const re = [function (e) {
      let t,
          {
        swiper: s,
        extendParams: a,
        on: i,
        emit: r
      } = e;

      function n(e, t) {
        const a = s.params.virtual;
        if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
        return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i;
      }

      function l(e) {
        const {
          slidesPerView: t,
          slidesPerGroup: a,
          centeredSlides: i
        } = s.params,
              {
          addSlidesBefore: l,
          addSlidesAfter: o
        } = s.params.virtual,
              {
          from: d,
          to: c,
          slides: p,
          slidesGrid: u,
          offset: h
        } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const m = s.activeIndex || 0;
        let f, g, v;
        f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
        const w = Math.max((m || 0) - v, 0),
              b = Math.min((m || 0) + g, p.length - 1),
              x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

        function y() {
          s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate");
        }

        if (Object.assign(s.virtual, {
          from: w,
          to: b,
          offset: x,
          slidesGrid: s.slidesGrid
        }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r("virtualUpdate");
        if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
          offset: x,
          from: w,
          to: b,
          slides: function () {
            const e = [];

            for (let t = w; t <= b; t += 1) e.push(p[t]);

            return e;
          }()
        }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
        const E = [],
              C = [];
        if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for (let e = d; e <= c; e += 1) (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();

        for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));

        C.forEach(e => {
          s.$wrapperEl.append(n(p[e], e));
        }), E.sort((e, t) => t - e).forEach(e => {
          s.$wrapperEl.prepend(n(p[e], e));
        }), s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y();
      }

      a({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      }), s.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: []
      }, i("beforeInit", () => {
        s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l());
      }), i("setTranslate", () => {
        s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
          l();
        }, 100)) : l());
      }), i("init update resize", () => {
        s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
      }), Object.assign(s.virtual, {
        appendSlide: function (e) {
          if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);
          l(!0);
        },
        prependSlide: function (e) {
          const t = s.activeIndex;
          let a = t + 1,
              i = 1;

          if (Array.isArray(e)) {
            for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);

            a = t + e.length, i = e.length;
          } else s.virtual.slides.unshift(e);

          if (s.params.virtual.cache) {
            const e = s.virtual.cache,
                  t = {};
            Object.keys(e).forEach(s => {
              const a = e[s],
                    r = a.attr("data-swiper-slide-index");
              r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a;
            }), s.virtual.cache = t;
          }

          l(!0), s.slideTo(a, 0);
        },
        removeSlide: function (e) {
          if (null == e) return;
          let t = s.activeIndex;
          if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0);else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
          l(!0), s.slideTo(t, 0);
        },
        removeAllSlides: function () {
          s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0);
        },
        update: l
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: i,
        emit: n
      } = e;
      const l = a(),
            o = r();

      function c(e) {
        if (!t.enabled) return;
        const {
          rtlTranslate: s
        } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const i = a.keyCode || a.charCode,
              r = t.params.keyboard.pageUpDown,
              d = r && 33 === i,
              c = r && 34 === i,
              p = 37 === i,
              u = 39 === i,
              h = 38 === i,
              m = 40 === i;
        if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;

        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
          if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
            let e = !1;
            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
            const a = t.$el,
                  i = a[0].clientWidth,
                  r = a[0].clientHeight,
                  n = o.innerWidth,
                  l = o.innerHeight,
                  d = t.$el.offset();
            s && (d.left -= t.$el[0].scrollLeft);
            const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];

            for (let t = 0; t < c.length; t += 1) {
              const s = c[t];

              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }

            if (!e) return;
          }

          t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i);
        }
      }

      function p() {
        t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0);
      }

      function u() {
        t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1);
      }

      t.keyboard = {
        enabled: !1
      }, s({
        keyboard: {
          enabled: !1,
          onlyInViewport: !0,
          pageUpDown: !0
        }
      }), i("init", () => {
        t.params.keyboard.enabled && p();
      }), i("destroy", () => {
        t.keyboard.enabled && u();
      }), Object.assign(t.keyboard, {
        enable: p,
        disable: u
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a,
        emit: i
      } = e;
      const n = r();
      let l;
      s({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null
        }
      }), t.mousewheel = {
        enabled: !1
      };
      let o,
          c = u();
      const h = [];

      function m() {
        t.enabled && (t.mouseEntered = !0);
      }

      function f() {
        t.enabled && (t.mouseEntered = !1);
      }

      function g(e) {
        return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = new n.Date().getTime(), !1));
      }

      function v(e) {
        let s = e,
            a = !0;
        if (!t.enabled) return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let n = t.$el;
        if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
        s.originalEvent && (s = s.originalEvent);
        let c = 0;

        const m = t.rtlTranslate ? -1 : 1,
              f = function (e) {
          let t = 0,
              s = 0,
              a = 0,
              i = 0;
          return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
            spinX: t,
            spinY: s,
            pixelX: a,
            pixelY: i
          };
        }(s);

        if (r.forceToAxis) {
          if (t.isHorizontal()) {
            if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
            c = -f.pixelX * m;
          } else {
            if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
            c = -f.pixelY;
          }
        } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
        if (0 === c) return !0;
        r.invert && (c = -c);
        let v = t.getTranslate() + c * r.sensitivity;

        if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
          const e = {
            time: u(),
            delta: Math.abs(c),
            direction: Math.sign(c)
          },
                a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;

          if (!a) {
            o = void 0, t.params.loop && t.loopFix();
            let n = t.getTranslate() + c * r.sensitivity;
            const d = t.isBeginning,
                  u = t.isEnd;

            if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
              clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
              const s = h.length ? h[h.length - 1] : void 0,
                    a = h[0];
              if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0);else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                const s = c > 0 ? .8 : .2;
                o = e, h.splice(0), l = p(() => {
                  t.slideToClosest(t.params.speed, !0, void 0, s);
                }, 0);
              }
              l || (l = p(() => {
                o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
              }, 500));
            }

            if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return !0;
          }
        } else {
          const s = {
            time: u(),
            delta: Math.abs(c),
            direction: Math.sign(c),
            raw: e
          };
          h.length >= 2 && h.shift();
          const a = h.length ? h[h.length - 1] : void 0;
          if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function (e) {
            const s = t.params.mousewheel;

            if (e.direction < 0) {
              if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
            } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;

            return !1;
          }(s)) return !0;
        }

        return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
      }

      function w(e) {
        let s = t.$el;
        "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v);
      }

      function b() {
        return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0);
      }

      function x() {
        return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0);
      }

      a("init", () => {
        !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b();
      }), a("destroy", () => {
        t.params.cssMode && b(), t.mousewheel.enabled && x();
      }), Object.assign(t.mousewheel, {
        enable: b,
        disable: x
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a,
        emit: i
      } = e;

      function r(e) {
        let s;
        return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
      }

      function n(e, s) {
        const a = t.params.navigation;
        e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
      }

      function l() {
        if (t.params.loop) return;
        const {
          $nextEl: e,
          $prevEl: s
        } = t.navigation;
        n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
      }

      function o(e) {
        e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
      }

      function c(e) {
        e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
      }

      function p() {
        const e = t.params.navigation;
        if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev"
        }), !e.nextEl && !e.prevEl) return;
        const s = r(e.nextEl),
              a = r(e.prevEl);
        s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
          $nextEl: s,
          nextEl: s && s[0],
          $prevEl: a,
          prevEl: a && a[0]
        }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
      }

      function u() {
        const {
          $nextEl: e,
          $prevEl: s
        } = t.navigation;
        e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
      }

      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled"
        }
      }), t.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
      }, a("init", () => {
        !1 === t.params.navigation.enabled ? h() : (p(), l());
      }), a("toEdge fromEdge lock unlock", () => {
        l();
      }), a("destroy", () => {
        u();
      }), a("enable disable", () => {
        const {
          $nextEl: e,
          $prevEl: s
        } = t.navigation;
        e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
      }), a("click", (e, s) => {
        const {
          $nextEl: a,
          $prevEl: r
        } = t.navigation,
              n = s.target;

        if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
          if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
          let e;
          a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass);
        }
      });

      const h = () => {
        t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
      };

      Object.assign(t.navigation, {
        enable: () => {
          t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l();
        },
        disable: h,
        update: l,
        init: p,
        destroy: u
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a,
        emit: i
      } = e;
      const r = "swiper-pagination";
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: e => e,
          formatFractionTotal: e => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`
        }
      }), t.pagination = {
        el: null,
        $el: null,
        bullets: []
      };
      let l = 0;

      function o() {
        return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
      }

      function c(e, s) {
        const {
          bulletActiveClass: a
        } = t.params.pagination;
        e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
      }

      function p() {
        const e = t.rtl,
              s = t.params.pagination;
        if (o()) return;
        const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
              r = t.pagination.$el;
        let p;
        const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

        if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
          const a = t.pagination.bullets;
          let i, o, u;
          if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${s.bulletActiveClass}${e}`).join(" ")), r.length > 1) a.each(e => {
            const t = d(e),
                  a = t.index();
            a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"));
          });else {
            const e = a.eq(p),
                  r = e.index();

            if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
              const e = a.eq(i),
                    n = a.eq(o);

              for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);

              if (t.params.loop) {
                if (r >= a.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);

                  a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                } else c(e, "prev"), c(n, "next");
              } else c(e, "prev"), c(n, "next");
            }
          }

          if (s.dynamicBullets) {
            const i = Math.min(a.length, s.dynamicMainBullets + 4),
                  r = (n * i - n) / 2 - u * n,
                  l = e ? "right" : "left";
            a.css(t.isHorizontal() ? l : "top", `${r}px`);
          }
        }

        if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
          let e;
          e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
          const a = (p + 1) / u;
          let i = 1,
              n = 1;
          "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed);
        }

        "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }

      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
              a = t.pagination.$el;
        let r = "";

        if ("bullets" === e.type) {
          let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);

          for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;

          a.html(r), t.pagination.bullets = a.find(U(e.bulletClass));
        }

        "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
      }

      function h() {
        t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
          el: "swiper-pagination"
        });
        const e = t.params.pagination;
        if (!e.el) return;
        let s = d(e.el);
        0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter(e => d(e).parents(".swiper")[0] === t.el))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), function (e) {
          e.preventDefault();
          let s = d(this).index() * t.params.slidesPerGroup;
          t.params.loop && (s += t.loopedSlides), t.slideTo(s);
        }), Object.assign(t.pagination, {
          $el: s,
          el: s[0]
        }), t.enabled || s.addClass(e.lockClass));
      }

      function m() {
        const e = t.params.pagination;
        if (o()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass));
      }

      a("init", () => {
        !1 === t.params.pagination.enabled ? f() : (h(), u(), p());
      }), a("activeIndexChange", () => {
        (t.params.loop || void 0 === t.snapIndex) && p();
      }), a("snapIndexChange", () => {
        t.params.loop || p();
      }), a("slidesLengthChange", () => {
        t.params.loop && (u(), p());
      }), a("snapGridLengthChange", () => {
        t.params.loop || (u(), p());
      }), a("destroy", () => {
        m();
      }), a("enable disable", () => {
        const {
          $el: e
        } = t.pagination;
        e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
      }), a("lock unlock", () => {
        p();
      }), a("click", (e, s) => {
        const a = s.target,
              {
          $el: r
        } = t.pagination;

        if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
          if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
          const e = r.hasClass(t.params.pagination.hiddenClass);
          i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass);
        }
      });

      const f = () => {
        t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m();
      };

      Object.assign(t.pagination, {
        enable: () => {
          t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p();
        },
        disable: f,
        render: u,
        update: p,
        init: h,
        destroy: m
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: i,
        emit: r
      } = e;
      const n = a();
      let l,
          o,
          c,
          u,
          h = !1,
          m = null,
          f = null;

      function g() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const {
          scrollbar: e,
          rtlTranslate: s,
          progress: a
        } = t,
              {
          $dragEl: i,
          $el: r
        } = e,
              n = t.params.scrollbar;
        let l = o,
            d = (c - o) * a;
        s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout(() => {
          r[0].style.opacity = 0, r.transition(400);
        }, 1e3));
      }

      function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const {
          scrollbar: e
        } = t,
              {
          $dragEl: s,
          $el: a
        } = e;
        s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
      }

      function w(e) {
        return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
      }

      function b(e) {
        const {
          scrollbar: s,
          rtlTranslate: a
        } = t,
              {
          $el: i
        } = s;
        let r;
        r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
      }

      function x(e) {
        const s = t.params.scrollbar,
              {
          scrollbar: a,
          $wrapperEl: i
        } = t,
              {
          $el: n,
          $dragEl: o
        } = a;
        h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e);
      }

      function y(e) {
        const {
          scrollbar: s,
          $wrapperEl: a
        } = t,
              {
          $el: i,
          $dragEl: n
        } = s;
        h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e));
      }

      function E(e) {
        const s = t.params.scrollbar,
              {
          scrollbar: a,
          $wrapperEl: i
        } = t,
              {
          $el: n
        } = a;
        h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p(() => {
          n.css("opacity", 0), n.transition(400);
        }, 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
      }

      function C(e) {
        const {
          scrollbar: s,
          touchEventsTouch: a,
          touchEventsDesktop: i,
          params: r,
          support: l
        } = t,
              o = s.$el;
        if (!o) return;
        const d = o[0],
              c = !(!l.passiveListener || !r.passiveListeners) && {
          passive: !1,
          capture: !1
        },
              p = !(!l.passiveListener || !r.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        if (!d) return;
        const u = "on" === e ? "addEventListener" : "removeEventListener";
        l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p));
      }

      function T() {
        const {
          scrollbar: e,
          $el: s
        } = t;
        t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
          el: "swiper-scrollbar"
        });
        const a = t.params.scrollbar;
        if (!a.el) return;
        let i = d(a.el);
        t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
        let r = i.find(`.${t.params.scrollbar.dragClass}`);
        0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, {
          $el: i,
          el: i[0],
          $dragEl: r,
          dragEl: r[0]
        }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
      }

      function $() {
        const e = t.params.scrollbar,
              s = t.scrollbar.$el;
        s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off");
      }

      s({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical"
        }
      }), t.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
      }, i("init", () => {
        !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g());
      }), i("update resize observerUpdate lock unlock", () => {
        v();
      }), i("setTranslate", () => {
        g();
      }), i("setTransition", (e, s) => {
        !function (e) {
          t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
        }(s);
      }), i("enable disable", () => {
        const {
          $el: e
        } = t.scrollbar;
        e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
      }), i("destroy", () => {
        $();
      });

      const S = () => {
        t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $();
      };

      Object.assign(t.scrollbar, {
        enable: () => {
          t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g();
        },
        disable: S,
        updateSize: v,
        setTranslate: g,
        init: T,
        destroy: $
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;
      s({
        parallax: {
          enabled: !1
        }
      });

      const i = (e, s) => {
        const {
          rtl: a
        } = t,
              i = d(e),
              r = a ? -1 : 1,
              n = i.attr("data-swiper-parallax") || "0";
        let l = i.attr("data-swiper-parallax-x"),
            o = i.attr("data-swiper-parallax-y");
        const c = i.attr("data-swiper-parallax-scale"),
              p = i.attr("data-swiper-parallax-opacity");

        if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
          const e = p - (p - 1) * (1 - Math.abs(s));
          i[0].style.opacity = e;
        }

        if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);else {
          const e = c - (c - 1) * (1 - Math.abs(s));
          i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
        }
      },
            r = () => {
        const {
          $el: e,
          slides: s,
          progress: a,
          snapGrid: r
        } = t;
        e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
          i(e, a);
        }), s.each((e, s) => {
          let n = e.progress;
          t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
            i(e, n);
          });
        });
      };

      a("beforeInit", () => {
        t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
      }), a("init", () => {
        t.params.parallax.enabled && r();
      }), a("setTranslate", () => {
        t.params.parallax.enabled && r();
      }), a("setTransition", (e, s) => {
        t.params.parallax.enabled && function (e) {
          void 0 === e && (e = t.params.speed);
          const {
            $el: s
          } = t;
          s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t => {
            const s = d(t);
            let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (a = 0), s.transition(a);
          });
        }(s);
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a,
        emit: i
      } = e;
      const n = r();
      s({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      }), t.zoom = {
        enabled: !1
      };
      let l,
          o,
          c,
          p = 1,
          u = !1;
      const m = {
        $slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        $imageEl: void 0,
        $imageWrapEl: void 0,
        maxRatio: 3
      },
            f = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
      },
            g = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
      };
      let v = 1;

      function w(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX,
              s = e.targetTouches[0].pageY,
              a = e.targetTouches[1].pageX,
              i = e.targetTouches[1].pageY;
        return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
      }

      function b(e) {
        const s = t.support,
              a = t.params.zoom;

        if (o = !1, c = !1, !s.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          o = !0, m.scaleStart = w(e);
        }

        m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0;
      }

      function x(e) {
        const s = t.support,
              a = t.params.zoom,
              i = t.zoom;

        if (!s.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          c = !0, m.scaleMove = w(e);
        }

        m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e);
      }

      function y(e) {
        const s = t.device,
              a = t.support,
              i = t.params.zoom,
              r = t.zoom;

        if (!a.gestures) {
          if (!o || !c) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
          o = !1, c = !1;
        }

        m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0));
      }

      function E(e) {
        const s = t.zoom;
        if (!m.$imageEl || 0 === m.$imageEl.length) return;
        if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
        f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
        const a = f.width * s.scale,
              i = f.height * s.scale;

        if (!(a < m.slideWidth && i < m.slideHeight)) {
          if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
            if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
            if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1);
          }

          e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
        }
      }

      function C() {
        const e = t.zoom;
        m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0);
      }

      function T(e) {
        const s = t.zoom,
              a = t.params.zoom;
        if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
        let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
        t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
      }

      function $() {
        const e = t.zoom,
              s = t.params.zoom;
        m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = void 0);
      }

      function S(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? $() : T(e);
      }

      function M() {
        const e = t.support;
        return {
          passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
            passive: !0,
            capture: !1
          },
          activeListenerWithCapture: !e.passiveListener || {
            passive: !1,
            capture: !0
          }
        };
      }

      function P() {
        return `.${t.params.slideClass}`;
      }

      function k(e) {
        const {
          passiveListener: s
        } = M(),
              a = P();
        t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s);
      }

      function z() {
        l || (l = !0, k("on"));
      }

      function L() {
        l && (l = !1, k("off"));
      }

      function O() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const s = t.support,
              {
          passiveListener: a,
          activeListenerWithCapture: i
        } = M(),
              r = P();
        s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i);
      }

      function I() {
        const e = t.zoom;
        if (!e.enabled) return;
        const s = t.support;
        e.enabled = !1;
        const {
          passiveListener: a,
          activeListenerWithCapture: i
        } = M(),
              r = P();
        s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i);
      }

      Object.defineProperty(t.zoom, "scale", {
        get: () => v,

        set(e) {
          if (v !== e) {
            const t = m.$imageEl ? m.$imageEl[0] : void 0,
                  s = m.$slideEl ? m.$slideEl[0] : void 0;
            i("zoomChange", e, t, s);
          }

          v = e;
        }

      }), a("init", () => {
        t.params.zoom.enabled && O();
      }), a("destroy", () => {
        I();
      }), a("touchStart", (e, s) => {
        t.zoom.enabled && function (e) {
          const s = t.device;
          m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
        }(s);
      }), a("touchEnd", (e, s) => {
        t.zoom.enabled && function () {
          const e = t.zoom;
          if (!m.$imageEl || 0 === m.$imageEl.length) return;
          if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
          f.isTouched = !1, f.isMoved = !1;
          let s = 300,
              a = 300;
          const i = g.x * s,
                r = f.currentX + i,
                n = g.y * a,
                l = f.currentY + n;
          0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
          const o = Math.max(s, a);
          f.currentX = r, f.currentY = l;
          const d = f.width * e.scale,
                c = f.height * e.scale;
          f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
        }();
      }), a("doubleTap", (e, s) => {
        !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s);
      }), a("transitionEnd", () => {
        t.zoom.enabled && t.params.zoom.enabled && C();
      }), a("slideChange", () => {
        t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
      }), Object.assign(t.zoom, {
        enable: O,
        disable: I,
        in: T,
        out: $,
        toggle: S
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a,
        emit: i
      } = e;
      s({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      }), t.lazy = {};
      let n = !1,
          l = !1;

      function o(e, s) {
        void 0 === s && (s = !0);
        const a = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
              n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
        !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each(e => {
          const n = d(e);
          n.addClass(a.loadingClass);
          const l = n.attr("data-background"),
                c = n.attr("data-src"),
                p = n.attr("data-srcset"),
                u = n.attr("data-sizes"),
                h = n.parent("picture");
          t.loadImage(n[0], c || l, p, u, !1, () => {
            if (null != t && t && (!t || t.params) && !t.destroyed) {
              if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each(e => {
                const t = d(e);
                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
              }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                const e = r.attr("data-swiper-slide-index");

                if (r.hasClass(t.params.slideDuplicateClass)) {
                  o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1);
                } else {
                  o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1);
                }
              }

              i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight();
            }
          }), i("lazyImageLoad", r[0], n[0]);
        });
      }

      function c() {
        const {
          $wrapperEl: e,
          params: s,
          slides: a,
          activeIndex: i
        } = t,
              r = t.virtual && s.virtual.enabled,
              n = s.lazy;
        let c = s.slidesPerView;

        function p(t) {
          if (r) {
            if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0;
          } else if (a[t]) return !0;

          return !1;
        }

        function u(e) {
          return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
        }

        if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each(e => {
          o(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
        });else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e);else o(i);
        if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
          const e = n.loadPrevNextAmount,
                t = Math.ceil(c),
                s = Math.min(i + t + Math.max(e, t), a.length),
                r = Math.max(i - Math.max(t, e), 0);

          for (let e = i + t; e < s; e += 1) p(e) && o(e);

          for (let e = r; e < i; e += 1) p(e) && o(e);
        } else {
          const t = e.children(`.${s.slideNextClass}`);
          t.length > 0 && o(u(t));
          const a = e.children(`.${s.slidePrevClass}`);
          a.length > 0 && o(u(a));
        }
      }

      function p() {
        const e = r();
        if (!t || t.destroyed) return;
        const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
              a = s[0] === e,
              i = a ? e.innerWidth : s[0].offsetWidth,
              l = a ? e.innerHeight : s[0].offsetHeight,
              o = t.$el.offset(),
              {
          rtlTranslate: u
        } = t;
        let h = !1;
        u && (o.left -= t.$el[0].scrollLeft);
        const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];

        for (let e = 0; e < m.length; e += 1) {
          const t = m[e];

          if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
            if (0 === t[0] && 0 === t[1]) continue;
            h = !0;
          }
        }

        const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f));
      }

      a("beforeInit", () => {
        t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
      }), a("init", () => {
        t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
      }), a("scroll", () => {
        t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c();
      }), a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
        t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
      }), a("transitionStart", () => {
        t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c());
      }), a("transitionEnd", () => {
        t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c());
      }), a("slideChange", () => {
        const {
          lazy: e,
          cssMode: s,
          watchSlidesProgress: a,
          touchReleaseOnEdges: i,
          resistanceRatio: r
        } = t.params;
        e.enabled && (s || a && (i || 0 === r)) && c();
      }), a("destroy", () => {
        t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass);
      }), Object.assign(t.lazy, {
        load: c,
        loadInSlide: o
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;

      function i(e, t) {
        const s = function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;

            return e;
          };
        }();

        let a, i;
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
        }, this;
      }

      function r() {
        t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
      }

      s({
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      }), t.controller = {
        control: void 0
      }, a("beforeInit", () => {
        t.controller.control = t.params.controller.control;
      }), a("update", () => {
        r();
      }), a("resize", () => {
        r();
      }), a("observerUpdate", () => {
        r();
      }), a("setTranslate", (e, s, a) => {
        t.controller.control && t.controller.setTranslate(s, a);
      }), a("setTransition", (e, s, a) => {
        t.controller.control && t.controller.setTransition(s, a);
      }), Object.assign(t.controller, {
        setTranslate: function (e, s) {
          const a = t.controller.control;
          let r, n;
          const l = t.constructor;

          function o(e) {
            const s = t.rtlTranslate ? -t.translate : t.translate;
            "slide" === t.params.controller.by && (!function (e) {
              t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid));
            }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
          }

          if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);else a instanceof l && s !== a && o(a);
        },
        setTransition: function (e, s) {
          const a = t.constructor,
                i = t.controller.control;
          let r;

          function n(s) {
            s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p(() => {
              s.updateAutoHeight();
            }), s.$wrapperEl.transitionEnd(() => {
              i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd());
            }));
          }

          if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);else i instanceof a && s !== i && n(i);
        }
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;
      s({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null
        }
      }), t.a11y = {
        clicked: !1
      };
      let i = null;

      function r(e) {
        const t = i;
        0 !== t.length && (t.html(""), t.html(e));
      }

      function n(e) {
        e.attr("tabIndex", "0");
      }

      function l(e) {
        e.attr("tabIndex", "-1");
      }

      function o(e, t) {
        e.attr("role", t);
      }

      function c(e, t) {
        e.attr("aria-roledescription", t);
      }

      function p(e, t) {
        e.attr("aria-label", t);
      }

      function u(e) {
        e.attr("aria-disabled", !0);
      }

      function h(e) {
        e.attr("aria-disabled", !1);
      }

      function m(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
              a = d(e.target);
        t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click();
      }

      function f() {
        return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
      }

      function g() {
        return f() && t.params.pagination.clickable;
      }

      const v = (e, t, s) => {
        n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), function (e, t) {
          e.attr("aria-controls", t);
        }(e, t);
      },
            w = () => {
        t.a11y.clicked = !0;
      },
            b = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            t.destroyed || (t.a11y.clicked = !1);
          });
        });
      },
            x = e => {
        if (t.a11y.clicked) return;
        const s = e.target.closest(`.${t.params.slideClass}`);
        if (!s || !t.slides.includes(s)) return;
        const a = t.slides.indexOf(s) === t.activeIndex,
              i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
        a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0));
      },
            y = () => {
        const e = t.params.a11y;
        e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole);
        const s = t.params.loop ? t.slides.filter(e => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
        e.slideLabelMessage && t.slides.each((a, i) => {
          const r = d(a),
                n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
          p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s));
        });
      },
            E = () => {
        const e = t.params.a11y;
        t.$el.append(i);
        const s = t.$el;
        e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
        const a = t.$wrapperEl,
              r = e.id || a.attr("id") || `swiper-wrapper-${(n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))}`;
        var n;
        const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
        var o;
        let d, u;
        o = r, a.attr("id", o), function (e, t) {
          e.attr("aria-live", t);
        }(a, l), y(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", x, !0), t.$el.on("pointerdown", w, !0), t.$el.on("pointerup", b, !0);
      };

      a("beforeInit", () => {
        i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
      }), a("afterInit", () => {
        t.params.a11y.enabled && E();
      }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
        t.params.a11y.enabled && y();
      }), a("fromEdge toEdge afterInit lock unlock", () => {
        t.params.a11y.enabled && function () {
          if (t.params.loop || t.params.rewind || !t.navigation) return;
          const {
            $nextEl: e,
            $prevEl: s
          } = t.navigation;
          s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
        }();
      }), a("paginationUpdate", () => {
        t.params.a11y.enabled && function () {
          const e = t.params.a11y;
          f() && t.pagination.bullets.each(s => {
            const a = d(s);
            t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current");
          });
        }();
      }), a("destroy", () => {
        t.params.a11y.enabled && function () {
          let e, s;
          i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", x, !0), t.$el.off("pointerdown", w, !0), t.$el.off("pointerup", b, !0);
        }();
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;
      s({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1
        }
      });
      let i = !1,
          n = {};

      const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
        const t = r();
        let s;
        s = e ? new URL(e) : t.location;
        const a = s.pathname.slice(1).split("/").filter(e => "" !== e),
              i = a.length;
        return {
          key: a[i - 2],
          value: a[i - 1]
        };
      },
            d = (e, s) => {
        const a = r();
        if (!i || !t.params.history.enabled) return;
        let n;
        n = t.params.url ? new URL(t.params.url) : a.location;
        const o = t.slides.eq(s);
        let d = l(o.attr("data-history"));

        if (t.params.history.root.length > 0) {
          let s = t.params.history.root;
          "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}`;
        } else n.pathname.includes(e) || (d = `${e}/${d}`);

        t.params.history.keepQuery && (d += n.search);
        const c = a.history.state;
        c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
          value: d
        }, null, d) : a.history.pushState({
          value: d
        }, null, d));
      },
            c = (e, s, a) => {
        if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) {
          const r = t.slides.eq(i);

          if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
            const s = r.index();
            t.slideTo(s, e, a);
          }
        } else t.slideTo(0, e, a);
      },
            p = () => {
        n = o(t.params.url), c(t.params.speed, n.value, !1);
      };

      a("init", () => {
        t.params.history.enabled && (() => {
          const e = r();

          if (t.params.history) {
            if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
            i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p));
          }
        })();
      }), a("destroy", () => {
        t.params.history.enabled && (() => {
          const e = r();
          t.params.history.replaceState || e.removeEventListener("popstate", p);
        })();
      }), a("transitionEnd _freeModeNoMomentumRelease", () => {
        i && d(t.params.history.key, t.activeIndex);
      }), a("slideChange", () => {
        i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        emit: i,
        on: n
      } = e,
          l = !1;
      const o = a(),
            c = r();
      s({
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      });

      const p = () => {
        i("hashChange");
        const e = o.location.hash.replace("#", "");

        if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
          const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
          if (void 0 === s) return;
          t.slideTo(s);
        }
      },
            u = () => {
        if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet");else {
          const e = t.slides.eq(t.activeIndex),
                s = e.attr("data-hash") || e.attr("data-history");
          o.location.hash = s || "", i("hashSet");
        }
      };

      n("init", () => {
        t.params.hashNavigation.enabled && (() => {
          if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
          l = !0;
          const e = o.location.hash.replace("#", "");

          if (e) {
            const s = 0;

            for (let a = 0, i = t.slides.length; a < i; a += 1) {
              const i = t.slides.eq(a);

              if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                const e = i.index();
                t.slideTo(e, s, t.params.runCallbacksOnInit, !0);
              }
            }
          }

          t.params.hashNavigation.watchState && d(c).on("hashchange", p);
        })();
      }), n("destroy", () => {
        t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p);
      }), n("transitionEnd _freeModeNoMomentumRelease", () => {
        l && u();
      }), n("slideChange", () => {
        l && t.params.cssMode && u();
      });
    }, function (e) {
      let t,
          {
        swiper: s,
        extendParams: i,
        on: r,
        emit: n
      } = e;

      function l() {
        if (!s.size) return s.autoplay.running = !1, void (s.autoplay.paused = !1);
        const e = s.slides.eq(s.activeIndex);
        let a = s.params.autoplay.delay;
        e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p(() => {
          let e;
          s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l();
        }, a);
      }

      function o() {
        return void 0 === t && !s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0);
      }

      function d() {
        return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0);
      }

      function c(e) {
        s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
          s.$wrapperEl[0].addEventListener(e, h);
        }) : (s.autoplay.paused = !1, l())));
      }

      function u() {
        const e = a();
        "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1);
      }

      function h(e) {
        s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
          s.$wrapperEl[0].removeEventListener(e, h);
        }), s.autoplay.paused = !1, s.autoplay.running ? l() : d());
      }

      function m() {
        s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(e => {
          s.$wrapperEl[0].removeEventListener(e, h);
        });
      }

      function f() {
        s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l());
      }

      s.autoplay = {
        running: !1,
        paused: !1
      }, i({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1
        }
      }), r("init", () => {
        if (s.params.autoplay.enabled) {
          o();
          a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
        }
      }), r("beforeTransitionStart", (e, t, a) => {
        s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d());
      }), r("sliderFirstMove", () => {
        s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c());
      }), r("touchEnd", () => {
        s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l();
      }), r("destroy", () => {
        s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
        a().removeEventListener("visibilitychange", u);
      }), Object.assign(s.autoplay, {
        pause: c,
        run: l,
        start: o,
        stop: d
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs"
        }
      });
      let i = !1,
          r = !1;

      function n() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
              a = e.clickedSlide;
        if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let i;

        if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
          let e = t.activeIndex;
          t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
          const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
          i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s;
        }

        t.slideTo(i);
      }

      function l() {
        const {
          thumbs: e
        } = t.params;
        if (i) return !1;
        i = !0;
        const s = t.constructor;
        if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), Object.assign(t.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        });else if (m(e.swiper)) {
          const a = Object.assign({}, e.swiper);
          Object.assign(a, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), t.thumbs.swiper = new s(a), r = !0;
        }
        return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0;
      }

      function o(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
        let i = 1;
        const r = t.params.thumbs.slideThumbActiveClass;
        if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r);else for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
        const n = t.params.thumbs.autoScrollOffset,
              l = n && !s.params.loop;

        if (t.realIndex !== s.realIndex || l) {
          let i,
              r,
              o = s.activeIndex;

          if (s.params.loop) {
            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
            const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                  a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
            i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev";
          } else i = t.realIndex, r = i > t.previousIndex ? "next" : "prev";

          l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0));
        }
      }

      t.thumbs = {
        swiper: null
      }, a("beforeInit", () => {
        const {
          thumbs: e
        } = t.params;
        e && e.swiper && (l(), o(!0));
      }), a("slideChange update resize observerUpdate", () => {
        o();
      }), a("setTransition", (e, s) => {
        const a = t.thumbs.swiper;
        a && !a.destroyed && a.setTransition(s);
      }), a("beforeDestroy", () => {
        const e = t.thumbs.swiper;
        e && !e.destroyed && r && e.destroy();
      }), Object.assign(t.thumbs, {
        init: l,
        update: o
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        emit: a,
        once: i
      } = e;
      s({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: .02
        }
      }), Object.assign(t, {
        freeMode: {
          onTouchStart: function () {
            const e = t.getTranslate();
            t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
              currentPos: t.rtl ? t.translate : -t.translate
            });
          },
          onTouchMove: function () {
            const {
              touchEventsData: e,
              touches: s
            } = t;
            0 === e.velocities.length && e.velocities.push({
              position: s[t.isHorizontal() ? "startX" : "startY"],
              time: e.touchStartTime
            }), e.velocities.push({
              position: s[t.isHorizontal() ? "currentX" : "currentY"],
              time: u()
            });
          },
          onTouchEnd: function (e) {
            let {
              currentPos: s
            } = e;
            const {
              params: r,
              $wrapperEl: n,
              rtlTranslate: l,
              snapGrid: o,
              touchEventsData: d
            } = t,
                  c = u() - d.touchStartTime;
            if (s < -t.minTranslate()) t.slideTo(t.activeIndex);else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);else {
              if (r.freeMode.momentum) {
                if (d.velocities.length > 1) {
                  const e = d.velocities.pop(),
                        s = d.velocities.pop(),
                        a = e.position - s.position,
                        i = e.time - s.time;
                  t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0);
                } else t.velocity = 0;

                t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                let e = 1e3 * r.freeMode.momentumRatio;
                const s = t.velocity * e;
                let c = t.translate + s;
                l && (c = -c);
                let p,
                    h = !1;
                const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                let f;
                if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);else if (r.freeMode.sticky) {
                  let e;

                  for (let t = 0; t < o.length; t += 1) if (o[t] > -c) {
                    e = t;
                    break;
                  }

                  c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c;
                }

                if (f && i("transitionEnd", () => {
                  t.loopFix();
                }), 0 !== t.velocity) {
                  if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) {
                    const s = Math.abs((l ? -c : c) - t.translate),
                          a = t.slidesSizesGrid[t.activeIndex];
                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed;
                  }
                } else if (r.freeMode.sticky) return void t.slideToClosest();

                r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(() => {
                  t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(() => {
                    t.setTranslate(p), n.transitionEnd(() => {
                      t && !t.destroyed && t.transitionEnd();
                    });
                  }, 0));
                })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(() => {
                  t && !t.destroyed && t.transitionEnd();
                }))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses();
              } else {
                if (r.freeMode.sticky) return void t.slideToClosest();
                r.freeMode && a("_freeModeNoMomentumRelease");
              }

              (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
            }
          }
        }
      });
    }, function (e) {
      let t,
          s,
          a,
          {
        swiper: i,
        extendParams: r
      } = e;
      r({
        grid: {
          rows: 1,
          fill: "column"
        }
      }), i.grid = {
        initSlides: e => {
          const {
            slidesPerView: r
          } = i.params,
                {
            rows: n,
            fill: l
          } = i.params.grid;
          s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n));
        },
        updateSlide: (e, r, n, l) => {
          const {
            slidesPerGroup: o,
            spaceBetween: d
          } = i.params,
                {
            rows: c,
            fill: p
          } = i.params.grid;
          let u, h, m;

          if ("row" === p && o > 1) {
            const s = Math.floor(e / (o * c)),
                  a = e - c * o * s,
                  i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
            m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({
              "-webkit-order": u,
              order: u
            });
          } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);

          r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
        },
        updateWrapperSize: (e, s, a) => {
          const {
            spaceBetween: r,
            centeredSlides: n,
            roundLengths: l
          } = i.params,
                {
            rows: o
          } = i.params.grid;

          if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css({
            [a("width")]: `${i.virtualSize + r}px`
          }), n) {
            s.splice(0, s.length);
            const e = [];

            for (let t = 0; t < s.length; t += 1) {
              let a = s[t];
              l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a);
            }

            s.push(...e);
          }
        }
      };
    }, function (e) {
      let {
        swiper: t
      } = e;
      Object.assign(t, {
        appendSlide: K.bind(t),
        prependSlide: Z.bind(t),
        addSlide: Q.bind(t),
        removeSlide: J.bind(t),
        removeAllSlides: ee.bind(t)
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;
      s({
        fadeEffect: {
          crossFade: !1,
          transformEl: null
        }
      }), te({
        effect: "fade",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
            slides: e
          } = t,
                s = t.params.fadeEffect;

          for (let a = 0; a < e.length; a += 1) {
            const e = t.slides.eq(a);
            let i = -e[0].swiperSlideOffset;
            t.params.virtualTranslate || (i -= t.translate);
            let r = 0;
            t.isHorizontal() || (r = i, i = 0);
            const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
            se(s, e).css({
              opacity: n
            }).transform(`translate3d(${i}px, ${r}px, 0px)`);
          }
        },
        setTransition: e => {
          const {
            transformEl: s
          } = t.params.fadeEffect;
          (s ? t.slides.find(s) : t.slides).transition(e), ae({
            swiper: t,
            duration: e,
            transformEl: s,
            allSlides: !0
          });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode
        })
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;
      s({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      });

      const i = (e, t, s) => {
        let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
            i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
        0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`), e.append(a)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0));
      };

      te({
        effect: "cube",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
            $el: e,
            $wrapperEl: s,
            slides: a,
            width: r,
            height: n,
            rtlTranslate: l,
            size: o,
            browser: c
          } = t,
                p = t.params.cubeEffect,
                u = t.isHorizontal(),
                h = t.virtual && t.params.virtual.enabled;
          let m,
              f = 0;
          p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({
            height: `${r}px`
          })) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));

          for (let e = 0; e < a.length; e += 1) {
            const t = a.eq(e);
            let s = e;
            h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
            let r = 90 * s,
                n = Math.floor(r / 360);
            l && (r = -r, n = Math.floor(-r / 360));
            const d = Math.max(Math.min(t[0].progress, 1), -1);
            let c = 0,
                m = 0,
                g = 0;
            s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0);
            const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
            d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u);
          }

          if (s.css({
            "-webkit-transform-origin": `50% 50% -${o / 2}px`,
            "transform-origin": `50% 50% -${o / 2}px`
          }), p.shadow) if (u) m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else {
            const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                  t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                  s = p.shadowScale,
                  a = p.shadowScale / t,
                  i = p.shadowOffset;
            m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`);
          }
          const g = c.isSafari || c.isWebView ? -o / 2 : 0;
          s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`);
        },
        setTransition: e => {
          const {
            $el: s,
            slides: a
          } = t;
          a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.each(t => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            i(d(t), s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0
        })
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;
      s({
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0,
          transformEl: null
        }
      });

      const i = (e, s, a) => {
        let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
            r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
        0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0));
      };

      te({
        effect: "flip",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
            slides: e,
            rtlTranslate: s
          } = t,
                a = t.params.flipEffect;

          for (let r = 0; r < e.length; r += 1) {
            const n = e.eq(r);
            let l = n[0].progress;
            t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
            const o = n[0].swiperSlideOffset;
            let d = -180 * l,
                c = 0,
                p = t.params.cssMode ? -o - t.translate : -o,
                u = 0;
            t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a);
            const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
            se(a, n).transform(h);
          }
        },
        setTransition: e => {
          const {
            transformEl: s
          } = t.params.flipEffect;
          (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
            swiper: t,
            duration: e,
            transformEl: s
          });
        },
        recreateShadows: () => {
          const e = t.params.flipEffect;
          t.slides.each(s => {
            const a = d(s);
            let r = a[0].progress;
            t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e);
          });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode
        })
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;
      s({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
          transformEl: null
        }
      }), te({
        effect: "coverflow",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
            width: e,
            height: s,
            slides: a,
            slidesSizesGrid: i
          } = t,
                r = t.params.coverflowEffect,
                n = t.isHorizontal(),
                l = t.translate,
                o = n ? e / 2 - l : s / 2 - l,
                d = n ? r.rotate : -r.rotate,
                c = r.depth;

          for (let e = 0, t = a.length; e < t; e += 1) {
            const t = a.eq(e),
                  s = i[e],
                  l = (o - t[0].swiperSlideOffset - s / 2) / s,
                  p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
            let u = n ? d * p : 0,
                h = n ? 0 : d * p,
                m = -c * Math.abs(p),
                f = r.stretch;
            "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
            let g = n ? 0 : f * p,
                v = n ? f * p : 0,
                w = 1 - (1 - r.scale) * Math.abs(p);
            Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0);
            const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;

            if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
              let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                  s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
              0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0);
            }
          }
        },
        setTransition: e => {
          const {
            transformEl: s
          } = t.params.coverflowEffect;
          (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0
        })
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;
      s({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          }
        }
      });

      const i = e => "string" == typeof e ? e : `${e}px`;

      te({
        effect: "creative",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
            slides: e,
            $wrapperEl: s,
            slidesSizesGrid: a
          } = t,
                r = t.params.creativeEffect,
                {
            progressMultiplier: n
          } = r,
                l = t.params.centeredSlides;

          if (l) {
            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.transform(`translateX(calc(50% - ${e}px))`);
          }

          for (let s = 0; s < e.length; s += 1) {
            const a = e.eq(s),
                  o = a[0].progress,
                  d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
            let c = d;
            l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
            const p = a[0].swiperSlideOffset,
                  u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                  h = [0, 0, 0];
            let m = !1;
            t.isHorizontal() || (u[1] = u[0], u[0] = 0);
            let f = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1
            };
            d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach((e, t) => {
              u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`;
            }), h.forEach((e, t) => {
              h[t] = f.rotate[t] * Math.abs(d * n);
            }), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
            const g = u.join(", "),
                  v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                  w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`,
                  b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                  x = `translate3d(${g}) ${v} ${w}`;

            if (m && f.shadow || !m) {
              let e = a.children(".swiper-slide-shadow");

              if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }

            const y = se(r, a);
            y.transform(x).css({
              opacity: b
            }), f.origin && y.css("transform-origin", f.origin);
          }
        },
        setTransition: e => {
          const {
            transformEl: s
          } = t.params.creativeEffect;
          (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
            swiper: t,
            duration: e,
            transformEl: s,
            allSlides: !0
          });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode
        })
      });
    }, function (e) {
      let {
        swiper: t,
        extendParams: s,
        on: a
      } = e;
      s({
        cardsEffect: {
          slideShadows: !0,
          transformEl: null,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8
        }
      }), te({
        effect: "cards",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
            slides: e,
            activeIndex: s
          } = t,
                a = t.params.cardsEffect,
                {
            startTranslate: i,
            isTouched: r
          } = t.touchEventsData,
                n = t.translate;

          for (let l = 0; l < e.length; l += 1) {
            const o = e.eq(l),
                  d = o[0].progress,
                  c = Math.min(Math.max(d, -4), 4);
            let p = o[0].swiperSlideOffset;
            t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
            let u = t.params.cssMode ? -p - t.translate : -p,
                h = 0;
            const m = -100 * Math.abs(c);
            let f = 1,
                g = -a.perSlideRotate * c,
                v = a.perSlideOffset - .75 * Math.abs(c);
            const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                  b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
                  x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;

            if (b || x) {
              const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
              g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%";
            }

            if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
              const e = h;
              h = u, u = e;
            }

            const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
                  E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;

            if (a.slideShadows) {
              let e = o.find(".swiper-slide-shadow");
              0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1));
            }

            o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
            se(a, o).transform(E);
          }
        },
        setTransition: e => {
          const {
            transformEl: s
          } = t.params.cardsEffect;
          (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
            swiper: t,
            duration: e,
            transformEl: s
          });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode
        })
      });
    }];
    return V.use(re), V;
  });
}

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9nbGlnaHRib3gvanMvZ2xpZ2h0Ym94Lm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9pc290b3BlLWxheW91dC9pc290b3BlLnBrZ2QubWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3NyLXdpbmRvdy9zc3Itd2luZG93LmVzbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlU3RhdGUiLCJzZWxlY3QiLCJlbCIsImFsbCIsInRyaW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwib24iLCJ0eXBlIiwibGlzdGVuZXIiLCJzZWxlY3RFbCIsImZvckVhY2giLCJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uc2Nyb2xsIiwiaW5pdFRlcm1pbmFsIiwiQU9TIiwicG9ydGZvbGlvQ29udGFpbmVyIiwicG9ydGZvbGlvSXNvdG9wZSIsIklzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJwb3J0Zm9saW9GaWx0ZXJzIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhcnJhbmdlIiwiZmlsdGVyIiwiZ2V0QXR0cmlidXRlIiwicmVmcmVzaCIsIkdMaWdodGJveCIsInNlbGVjdG9yIiwiaGVyb0Nhcm91c2VsSW5kaWNhdG9ycyIsImhlcm9DYXJvdXNlbEl0ZW1zIiwiaXRlbSIsImluZGV4IiwiaW5uZXJIVE1MIiwiU3dpcGVyIiwic3BlZWQiLCJsb29wIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwic2xpZGVzUGVyVmlldyIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJpbml0IiwiZHVyYXRpb24iLCJlYXNpbmciLCJvbmNlIiwibWlycm9yIiwiUHVyZUNvdW50ZXIiLCJwcmVsb2FkZXIiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL19hcHBcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9fbmV4dC9cIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vc2hhcmVkL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldDxzdHJpbmc+KClcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydjdXN0b20nLCBjdXN0b21Mb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIFBsYWNlaG9sZGVyVmFsdWUgPSAnYmx1cicgfCAnZW1wdHknXG5cbnR5cGUgT25Mb2FkaW5nQ29tcGxldGUgPSAocmVzdWx0OiB7XG4gIG5hdHVyYWxXaWR0aDogbnVtYmVyXG4gIG5hdHVyYWxIZWlnaHQ6IG51bWJlclxufSkgPT4gdm9pZFxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmludGVyZmFjZSBTdGF0aWNSZXF1aXJlIHtcbiAgZGVmYXVsdDogU3RhdGljSW1hZ2VEYXRhXG59XG5cbnR5cGUgU3RhdGljSW1wb3J0ID0gU3RhdGljUmVxdWlyZSB8IFN0YXRpY0ltYWdlRGF0YVxuXG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoXG4gIHNyYzogU3RhdGljUmVxdWlyZSB8IFN0YXRpY0ltYWdlRGF0YVxuKTogc3JjIGlzIFN0YXRpY1JlcXVpcmUge1xuICByZXR1cm4gKHNyYyBhcyBTdGF0aWNSZXF1aXJlKS5kZWZhdWx0ICE9PSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoXG4gIHNyYzogU3RhdGljUmVxdWlyZSB8IFN0YXRpY0ltYWdlRGF0YVxuKTogc3JjIGlzIFN0YXRpY0ltYWdlRGF0YSB7XG4gIHJldHVybiAoc3JjIGFzIFN0YXRpY0ltYWdlRGF0YSkuc3JjICE9PSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjOiBzdHJpbmcgfCBTdGF0aWNJbXBvcnQpOiBzcmMgaXMgU3RhdGljSW1wb3J0IHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJlxuICAgIChpc1N0YXRpY1JlcXVpcmUoc3JjIGFzIFN0YXRpY0ltcG9ydCkgfHxcbiAgICAgIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyBhcyBTdGF0aWNJbXBvcnQpKVxuICApXG59XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZyB8IFN0YXRpY0ltcG9ydFxuICB3aWR0aD86IG51bWJlciB8IHN0cmluZ1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmdcbiAgbGF5b3V0PzogTGF5b3V0VmFsdWVcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICBsYXp5Qm91bmRhcnk/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBQbGFjZWhvbGRlclZhbHVlXG4gIGJsdXJEYXRhVVJMPzogc3RyaW5nXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG4gIG9uTG9hZGluZ0NvbXBsZXRlPzogT25Mb2FkaW5nQ29tcGxldGVcbn1cblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9IChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZ1xuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdXG4gICAgZm9yIChsZXQgbWF0Y2g7IChtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKSk7IG1hdGNoKSB7XG4gICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpXG4gICAgfVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhcbiAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbCxcbiAgc3JjOiBzdHJpbmcsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlclZhbHVlLFxuICBvbkxvYWRpbmdDb21wbGV0ZT86IE9uTG9hZGluZ0NvbXBsZXRlXG4pIHtcbiAgaWYgKCFpbWcpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBoYW5kbGVMb2FkID0gKCkgPT4ge1xuICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIHAuY2F0Y2goKCkgPT4ge30pLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSdcbiAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSdcbiAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnXG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpXG4gICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0IH0gPSBpbWdcbiAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7IG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGltZy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpXG4gICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgaGFuZGxlTG9hZCgpXG4gIH0gZWxzZSB7XG4gICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGxhenlCb3VuZGFyeSA9ICcyMDBweCcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgb25Mb2FkaW5nQ29tcGxldGUsXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgcGxhY2Vob2xkZXIgPSAnZW1wdHknLFxuICBibHVyRGF0YVVSTCxcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGxldCBzdGF0aWNTcmMgPSAnJ1xuICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmNcblxuICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgc3RhdGljSW1hZ2VEYXRhXG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTFxuICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmNcbiAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHRcbiAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoXG4gICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHN0YXRpY0ltYWdlRGF0YVxuICAgICAgICAgICl9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChcbiAgICAgICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSkgfHxcbiAgICAgICh0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbJ2pwZWcnLCAncG5nJywgJ3dlYnAnXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbihcbiAgICAgICAgICAgICAgJywnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gXG4gICAgICApXG4gICAgfVxuICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMFxuICAgIGlmIChcbiAgICAgICF1bm9wdGltaXplZCAmJlxuICAgICAgIWxvYWRlcih7IHNyYywgd2lkdGg6IHJhbmQsIHF1YWxpdHk6IDc1IH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSlcbiAgICApIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgK1xuICAgICAgICAgIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGNvbnN0IGJsdXJTdHlsZSA9XG4gICAgcGxhY2Vob2xkZXIgPT09ICdibHVyJ1xuICAgICAgPyB7XG4gICAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJScsXG4gICAgICAgIH1cbiAgICAgIDoge31cbiAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgbGV0IHNyY1N0cmluZzogc3RyaW5nID0gc3JjXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBkYXRhLW5pbWc9e2xheW91dH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17KGltZykgPT4ge1xuICAgICAgICAgIHNldFJlZihpbWcpXG4gICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IC4uLmltZ1N0eWxlLCAuLi5ibHVyU3R5bGUgfX1cbiAgICAgIC8+XG4gICAgICA8bm9zY3JpcHQ+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICBkYXRhLW5pbWc9e2xheW91dH1cbiAgICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZyB8fCAnbGF6eSd9XG4gICAgICAgIC8+XG4gICAgICA8L25vc2NyaXB0PlxuXG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKVxuICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zXG5cbiAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0JylcbiAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpXG4gIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSlcblxuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpXG4gIH1cblxuICByZXR1cm4gdXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICtcbiAgICAgIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgXG4gIClcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykpIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSkgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9hb3MvYW9zLmNzcydcclxuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1pY29ucy9ib290c3RyYXAtaWNvbnMuY3NzJ1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL2JveGljb25zL2Nzcy9ib3hpY29ucy5taW4uY3NzJ1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL2dsaWdodGJveC9jc3MvZ2xpZ2h0Ym94Lm1pbi5jc3MnXHJcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3IvcmVtaXhpY29uL3JlbWl4aWNvbi5jc3MnXHJcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3Ivc3dpcGVyL3N3aXBlci1idW5kbGUubWluLmNzcydcclxuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MnXHJcblxyXG5pbXBvcnQgUHVyZUNvdW50ZXIgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3IvcHVyZWNvdW50ZXIvcHVyZWNvdW50ZXJfdmFuaWxsYS5qcydcclxuaW1wb3J0IEdMaWdodGJveCBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9nbGlnaHRib3gvanMvZ2xpZ2h0Ym94Lm1pbi5qcydcclxuaW1wb3J0IFN3aXBlciBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9zd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uanMnXHJcbmltcG9ydCBJc290b3BlIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL2lzb3RvcGUtbGF5b3V0L2lzb3RvcGUucGtnZC5taW4uanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiBFYXN5IHNlbGVjdG9yIGhlbHBlciBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdCBzZWxlY3QgPSAoZWwsIGFsbCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIGVsID0gZWwudHJpbSgpXHJcbiAgICAgIGlmIChhbGwpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmRvY3VtZW50Py5xdWVyeVNlbGVjdG9yQWxsKGVsKV1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICogRWFzeSBldmVudCBsaXN0ZW5lciBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdCBvbiA9ICh0eXBlLCBlbCwgbGlzdGVuZXIsIGFsbCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIGxldCBzZWxlY3RFbCA9IHNlbGVjdChlbCwgYWxsKVxyXG4gICAgICBpZiAoc2VsZWN0RWwpIHtcclxuICAgICAgICBpZiAoYWxsKSB7XHJcbiAgICAgICAgICBzZWxlY3RFbC5mb3JFYWNoKGUgPT4gZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VsZWN0RWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICogRWFzeSBvbiBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG9uc2Nyb2xsID0gKGVsLCBsaXN0ZW5lcikgPT4ge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsaXN0ZW5lcilcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGluaXRUZXJtaW5hbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjb25zdCBQdXJlQ291bnRlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyAgICBhd2FpdCBpbXBvcnQoJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL3B1cmVjb3VudGVyL3B1cmVjb3VudGVyX3ZhbmlsbGEuanMnKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBjb25zdCBBT1MgPSBhd2FpdCBpbXBvcnQoJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL2Fvcy9hb3MuanMnKVxyXG4gICAgICAgIGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzJylcclxuICAgICAgICAvLyBjb25zdCBHTGlnaHRib3ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgYXdhaXQgaW1wb3J0KCcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9nbGlnaHRib3gvanMvZ2xpZ2h0Ym94Lm1pbi5qcycpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnN0IElzb3RvcGUgPSAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgYXdhaXQgaW1wb3J0KCcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9pc290b3BlLWxheW91dC9pc290b3BlLnBrZ2QubWluLmpzJylcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc3QgU3dpcGVyID0gIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyAgIGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3Ivc3dpcGVyL3N3aXBlci1idW5kbGUubWluLmpzJylcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgYXdhaXQgaW1wb3J0KCcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9waHAtZW1haWwtZm9ybS92YWxpZGF0ZS5qcycpXHJcblxyXG4gICAgICAgIGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy9qcy9tYWluLmpzJylcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgbGV0IHBvcnRmb2xpb0NvbnRhaW5lciA9IHNlbGVjdCgnLnBvcnRmb2xpby1jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgICBpZiAocG9ydGZvbGlvQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3J0Zm9saW9Jc290b3BlID0gbmV3IElzb3RvcGUocG9ydGZvbGlvQ29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnBvcnRmb2xpby1pdGVtJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwb3J0Zm9saW9GaWx0ZXJzID0gc2VsZWN0KCcjcG9ydGZvbGlvLWZsdGVycyBsaScsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgb24oJ2NsaWNrJywgJyNwb3J0Zm9saW8tZmx0ZXJzIGxpJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBwb3J0Zm9saW9GaWx0ZXJzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlci1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgcG9ydGZvbGlvSXNvdG9wZS5hcnJhbmdlKHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJylcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBwb3J0Zm9saW9Jc290b3BlLm9uKCdhcnJhbmdlQ29tcGxldGUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIEFPUy5yZWZyZXNoKClcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogSW5pdGlhdGUgcG9ydGZvbGlvIGxpZ2h0Ym94IFxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBHTGlnaHRib3goe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJy5wb3J0Zm9saW8tbGlnaHRib3gnXHJcbiAgICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBcclxuICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIZXJvIGNhcm91c2VsIGluZGljYXRvcnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgaGVyb0Nhcm91c2VsSW5kaWNhdG9ycyA9IHNlbGVjdChcIiNoZXJvLWNhcm91c2VsLWluZGljYXRvcnNcIilcclxuICAgICAgICBsZXQgaGVyb0Nhcm91c2VsSXRlbXMgPSBzZWxlY3QoJyNoZXJvQ2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0nLCB0cnVlKVxyXG4gIFxyXG4gICAgICAgIGhlcm9DYXJvdXNlbEl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAoaW5kZXggPT09IDApID9cclxuICAgICAgICAgIGhlcm9DYXJvdXNlbEluZGljYXRvcnMuaW5uZXJIVE1MICs9IFwiPGxpIGRhdGEtYnMtdGFyZ2V0PScjaGVyb0Nhcm91c2VsJyBkYXRhLWJzLXNsaWRlLXRvPSdcIiArIGluZGV4ICsgXCInIGNsYXNzPSdhY3RpdmUnPjwvbGk+XCI6XHJcbiAgICAgICAgICAgIGhlcm9DYXJvdXNlbEluZGljYXRvcnMuaW5uZXJIVE1MICs9IFwiPGxpIGRhdGEtYnMtdGFyZ2V0PScjaGVyb0Nhcm91c2VsJyBkYXRhLWJzLXNsaWRlLXRvPSdcIiArIGluZGV4ICsgXCInPjwvbGk+XCJcclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBcclxuICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbml0aWF0ZSBnbGlnaHRib3ggXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgR0xpZ2h0Ym94KHtcclxuICAgICAgICAgIHNlbGVjdG9yOiAnLmdsaWdodGJveCdcclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBuZXcgU3dpcGVyKCcudGVzdGltb25pYWxzLXNsaWRlcicsIHtcclxuICAgICAgICAgIHNwZWVkOiA2MDAsXHJcbiAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDUwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5ldyBTd2lwZXIoJy5wb3J0Zm9saW8tZGV0YWlscy1zbGlkZXInLCB7XHJcbiAgICAgICAgICBzcGVlZDogNDAwLFxyXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBcclxuICAgICAgICBBT1MuaW5pdCh7XHJcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgIGVhc2luZzogXCJlYXNlLWluLW91dFwiLFxyXG4gICAgICAgICAgb25jZTogdHJ1ZSxcclxuICAgICAgICAgIG1pcnJvcjogZmFsc2VcclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBQdXJlQ291bnRlcigpO1xyXG4gICAgICAgIC8vIEFkZCBsb2dpYyB3aXRoIGB0ZXJtYFxyXG4gIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwcmVsb2FkZXIgPSBzZWxlY3QoJyNwcmVsb2FkZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBwcmVsb2FkZXI/LnJlbW92ZSgpXHJcblxyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIC8vICAgaW5pdFRlcm1pbmFsKClcclxuICAgIC8vICAgLy8gfSwgMTAwKVxyXG4gICAgLy8gICBpZiAobW91bnRlZCkge1xyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gaW5pdFRlcm1pbmFsKCksIDIwMClcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSwgW21vdW50ZWRdKVxyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBpbml0VGVybWluYWwoKSwgMjAwKVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygncGFnZVByb3BzOiAnLCBwYWdlUHJvcHMpXHJcbiAgICAvLyBjb25zb2xlLmxvZygnQ29tcG9uZW50OiAnLCBDb21wb25lbnQpXHJcblxyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHN1cHByZXNzSHlkcmF0aW9uV2FybmluZz17dHJ1ZX0gLz5cclxufVxyXG4iLCJpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgXHJcbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPWV8fHNlbGYpLkdMaWdodGJveD10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0KXtyZXR1cm4oZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkodCl9ZnVuY3Rpb24gdChlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gaShlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgbj10W2ldO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19ZnVuY3Rpb24gbihlLHQsbil7cmV0dXJuIHQmJmkoZS5wcm90b3R5cGUsdCksbiYmaShlLG4pLGV9dmFyIHM9RGF0ZS5ub3coKTtmdW5jdGlvbiBsKCl7dmFyIGU9e30sdD0hMCxpPTAsbj1hcmd1bWVudHMubGVuZ3RoO1wiW29iamVjdCBCb29sZWFuXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50c1swXSkmJih0PWFyZ3VtZW50c1swXSxpKyspO2Zvcih2YXIgcz1mdW5jdGlvbihpKXtmb3IodmFyIG4gaW4gaSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaSxuKSYmKHQmJlwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaVtuXSk/ZVtuXT1sKCEwLGVbbl0saVtuXSk6ZVtuXT1pW25dKX07aTxuO2krKyl7dmFyIG89YXJndW1lbnRzW2ldO3Mobyl9cmV0dXJuIGV9ZnVuY3Rpb24gbyhlLHQpe2lmKChrKGUpfHxlPT09d2luZG93fHxlPT09ZG9jdW1lbnQpJiYoZT1bZV0pLEEoZSl8fEwoZSl8fChlPVtlXSksMCE9UChlKSlpZihBKGUpJiYhTChlKSlmb3IodmFyIGk9ZS5sZW5ndGgsbj0wO248aSYmITEhPT10LmNhbGwoZVtuXSxlW25dLG4sZSk7bisrKTtlbHNlIGlmKEwoZSkpZm9yKHZhciBzIGluIGUpaWYoTyhlLHMpJiYhMT09PXQuY2FsbChlW3NdLGVbc10scyxlKSlicmVha31mdW5jdGlvbiByKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwsbj1lW3NdPWVbc118fFtdLGw9e2FsbDpuLGV2dDpudWxsLGZvdW5kOm51bGx9O3JldHVybiB0JiZpJiZQKG4pPjAmJm8obiwoZnVuY3Rpb24oZSxuKXtpZihlLmV2ZW50TmFtZT09dCYmZS5mbi50b1N0cmluZygpPT1pLnRvU3RyaW5nKCkpcmV0dXJuIGwuZm91bmQ9ITAsbC5ldnQ9biwhMX0pKSxsfWZ1bmN0aW9uIGEoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LGk9dC5vbkVsZW1lbnQsbj10LndpdGhDYWxsYmFjayxzPXQuYXZvaWREdXBsaWNhdGUsbD12b2lkIDA9PT1zfHxzLGE9dC5vbmNlLGg9dm9pZCAwIT09YSYmYSxkPXQudXNlQ2FwdHVyZSxjPXZvaWQgMCE9PWQmJmQsdT1hcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMCxnPWl8fFtdO2Z1bmN0aW9uIHYoZSl7VChuKSYmbi5jYWxsKHUsZSx0aGlzKSxoJiZ2LmRlc3Ryb3koKX1yZXR1cm4gQyhnKSYmKGc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChnKSksdi5kZXN0cm95PWZ1bmN0aW9uKCl7byhnLChmdW5jdGlvbih0KXt2YXIgaT1yKHQsZSx2KTtpLmZvdW5kJiZpLmFsbC5zcGxpY2UoaS5ldnQsMSksdC5yZW1vdmVFdmVudExpc3RlbmVyJiZ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx2LGMpfSkpfSxvKGcsKGZ1bmN0aW9uKHQpe3ZhciBpPXIodCxlLHYpOyh0LmFkZEV2ZW50TGlzdGVuZXImJmwmJiFpLmZvdW5kfHwhbCkmJih0LmFkZEV2ZW50TGlzdGVuZXIoZSx2LGMpLGkuYWxsLnB1c2goe2V2ZW50TmFtZTplLGZuOnZ9KSl9KSksdn1mdW5jdGlvbiBoKGUsdCl7byh0LnNwbGl0KFwiIFwiKSwoZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0KX0pKX1mdW5jdGlvbiBkKGUsdCl7byh0LnNwbGl0KFwiIFwiKSwoZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LnJlbW92ZSh0KX0pKX1mdW5jdGlvbiBjKGUsdCl7cmV0dXJuIGUuY2xhc3NMaXN0LmNvbnRhaW5zKHQpfWZ1bmN0aW9uIHUoZSx0KXtmb3IoO2UhPT1kb2N1bWVudC5ib2R5Oyl7aWYoIShlPWUucGFyZW50RWxlbWVudCkpcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZS5tYXRjaGVzP2UubWF0Y2hlcyh0KTplLm1zTWF0Y2hlc1NlbGVjdG9yKHQpKXJldHVybiBlfX1mdW5jdGlvbiBnKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcIlwiLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtpZighZXx8XCJcIj09PXQpcmV0dXJuITE7aWYoXCJub25lXCI9PT10KXJldHVybiBUKGkpJiZpKCksITE7dmFyIG49eCgpLHM9dC5zcGxpdChcIiBcIik7byhzLChmdW5jdGlvbih0KXtoKGUsXCJnXCIrdCl9KSksYShuLHtvbkVsZW1lbnQ6ZSxhdm9pZER1cGxpY2F0ZTohMSxvbmNlOiEwLHdpdGhDYWxsYmFjazpmdW5jdGlvbihlLHQpe28ocywoZnVuY3Rpb24oZSl7ZCh0LFwiZ1wiK2UpfSkpLFQoaSkmJmkoKX19KX1mdW5jdGlvbiB2KGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcIlwiO2lmKFwiXCI9PT10KXJldHVybiBlLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cIlwiLGUuc3R5bGUuTW96VHJhbnNmb3JtPVwiXCIsZS5zdHlsZS5tc1RyYW5zZm9ybT1cIlwiLGUuc3R5bGUuT1RyYW5zZm9ybT1cIlwiLGUuc3R5bGUudHJhbnNmb3JtPVwiXCIsITE7ZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm09dCxlLnN0eWxlLk1velRyYW5zZm9ybT10LGUuc3R5bGUubXNUcmFuc2Zvcm09dCxlLnN0eWxlLk9UcmFuc2Zvcm09dCxlLnN0eWxlLnRyYW5zZm9ybT10fWZ1bmN0aW9uIGYoZSl7ZS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIn1mdW5jdGlvbiBwKGUpe2Uuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn1mdW5jdGlvbiBtKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKGkuaW5uZXJIVE1MPWU7aS5maXJzdENoaWxkOyl0LmFwcGVuZENoaWxkKGkuZmlyc3RDaGlsZCk7cmV0dXJuIHR9ZnVuY3Rpb24geSgpe3JldHVybnt3aWR0aDp3aW5kb3cuaW5uZXJXaWR0aHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRofHxkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLGhlaWdodDp3aW5kb3cuaW5uZXJIZWlnaHR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHR8fGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0fX1mdW5jdGlvbiB4KCl7dmFyIGUsdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmFrZWVsZW1lbnRcIiksaT17YW5pbWF0aW9uOlwiYW5pbWF0aW9uZW5kXCIsT0FuaW1hdGlvbjpcIm9BbmltYXRpb25FbmRcIixNb3pBbmltYXRpb246XCJhbmltYXRpb25lbmRcIixXZWJraXRBbmltYXRpb246XCJ3ZWJraXRBbmltYXRpb25FbmRcIn07Zm9yKGUgaW4gaSlpZih2b2lkIDAhPT10LnN0eWxlW2VdKXJldHVybiBpW2VdfWZ1bmN0aW9uIGIoZSx0LGksbil7aWYoZSgpKXQoKTtlbHNle3ZhciBzO2l8fChpPTEwMCk7dmFyIGw9c2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKCl7ZSgpJiYoY2xlYXJJbnRlcnZhbChsKSxzJiZjbGVhclRpbWVvdXQocyksdCgpKX0pLGkpO24mJihzPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChsKX0pLG4pKX19ZnVuY3Rpb24gUyhlLHQsaSl7aWYoSShlKSljb25zb2xlLmVycm9yKFwiSW5qZWN0IGFzc2V0cyBlcnJvclwiKTtlbHNlIGlmKFQodCkmJihpPXQsdD0hMSksQyh0KSYmdCBpbiB3aW5kb3cpVChpKSYmaSgpO2Vsc2V7dmFyIG47aWYoLTEhPT1lLmluZGV4T2YoXCIuY3NzXCIpKXtpZigobj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW2hyZWY9XCInK2UrJ1wiXScpKSYmbi5sZW5ndGg+MClyZXR1cm4gdm9pZChUKGkpJiZpKCkpO3ZhciBzPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSxsPXMucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyksbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtyZXR1cm4gby5yZWw9XCJzdHlsZXNoZWV0XCIsby50eXBlPVwidGV4dC9jc3NcIixvLmhyZWY9ZSxvLm1lZGlhPVwiYWxsXCIsbD9zLmluc2VydEJlZm9yZShvLGxbMF0pOnMuYXBwZW5kQ2hpbGQobyksdm9pZChUKGkpJiZpKCkpfWlmKChuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtzcmM9XCInK2UrJ1wiXScpKSYmbi5sZW5ndGg+MCl7aWYoVChpKSl7aWYoQyh0KSlyZXR1cm4gYigoZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09d2luZG93W3RdfSksKGZ1bmN0aW9uKCl7aSgpfSkpLCExO2koKX19ZWxzZXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3IudHlwZT1cInRleHQvamF2YXNjcmlwdFwiLHIuc3JjPWUsci5vbmxvYWQ9ZnVuY3Rpb24oKXtpZihUKGkpKXtpZihDKHQpKXJldHVybiBiKChmdW5jdGlvbigpe3JldHVybiB2b2lkIDAhPT13aW5kb3dbdF19KSwoZnVuY3Rpb24oKXtpKCl9KSksITE7aSgpfX0sZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyKX19fWZ1bmN0aW9uIHcoKXtyZXR1cm5cIm5hdmlnYXRvclwiaW4gd2luZG93JiZ3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWQpfChpUGhvbmUpfChpUG9kKXwoQW5kcm9pZCl8KFBsYXlCb29rKXwoQkIxMCl8KEJsYWNrQmVycnkpfChPcGVyYSBNaW5pKXwoSUVNb2JpbGUpfCh3ZWJPUyl8KE1lZUdvKS9pKX1mdW5jdGlvbiBUKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV9ZnVuY3Rpb24gQyhlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZX1mdW5jdGlvbiBrKGUpe3JldHVybiEoIWV8fCFlLm5vZGVUeXBlfHwxIT1lLm5vZGVUeXBlKX1mdW5jdGlvbiBFKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpfWZ1bmN0aW9uIEEoZSl7cmV0dXJuIGUmJmUubGVuZ3RoJiZpc0Zpbml0ZShlLmxlbmd0aCl9ZnVuY3Rpb24gTCh0KXtyZXR1cm5cIm9iamVjdFwiPT09ZSh0KSYmbnVsbCE9dCYmIVQodCkmJiFFKHQpfWZ1bmN0aW9uIEkoZSl7cmV0dXJuIG51bGw9PWV9ZnVuY3Rpb24gTyhlLHQpe3JldHVybiBudWxsIT09ZSYmaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfWZ1bmN0aW9uIFAoZSl7aWYoTChlKSl7aWYoZS5rZXlzKXJldHVybiBlLmtleXMoKS5sZW5ndGg7dmFyIHQ9MDtmb3IodmFyIGkgaW4gZSlPKGUsaSkmJnQrKztyZXR1cm4gdH1yZXR1cm4gZS5sZW5ndGh9ZnVuY3Rpb24gTShlKXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdChlKSkmJmlzRmluaXRlKGUpfWZ1bmN0aW9uIHooKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06LTEsdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdidG5bZGF0YS10YWJvcmRlcl06bm90KC5kaXNhYmxlZClcIik7aWYoIXQubGVuZ3RoKXJldHVybiExO2lmKDE9PXQubGVuZ3RoKXJldHVybiB0WzBdO1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1wYXJzZUludChlKSk7dmFyIGk9W107byh0LChmdW5jdGlvbihlKXtpLnB1c2goZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYm9yZGVyXCIpKX0pKTt2YXIgbj1NYXRoLm1heC5hcHBseShNYXRoLGkubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gcGFyc2VJbnQoZSl9KSkpLHM9ZTwwPzE6ZSsxO3M+biYmKHM9XCIxXCIpO3ZhciBsPWkuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZT49cGFyc2VJbnQocyl9KSkscj1sLnNvcnQoKVswXTtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdidG5bZGF0YS10YWJvcmRlcj1cIicuY29uY2F0KHIsJ1wiXScpKX1mdW5jdGlvbiBYKGUpe2lmKGUuZXZlbnRzLmhhc093blByb3BlcnR5KFwia2V5Ym9hcmRcIikpcmV0dXJuITE7ZS5ldmVudHMua2V5Ym9hcmQ9YShcImtleWRvd25cIix7b25FbGVtZW50OndpbmRvdyx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24odCxpKXt2YXIgbj0odD10fHx3aW5kb3cuZXZlbnQpLmtleUNvZGU7aWYoOT09bil7dmFyIHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYnRuLmZvY3VzZWRcIik7aWYoIXMpe3ZhciBsPSEoIWRvY3VtZW50LmFjdGl2ZUVsZW1lbnR8fCFkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lKSYmZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO2lmKFwiaW5wdXRcIj09bHx8XCJ0ZXh0YXJlYVwiPT1sfHxcImJ1dHRvblwiPT1sKXJldHVybn10LnByZXZlbnREZWZhdWx0KCk7dmFyIG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYnRuW2RhdGEtdGFib3JkZXJdXCIpO2lmKCFvfHxvLmxlbmd0aDw9MClyZXR1cm47aWYoIXMpe3ZhciByPXooKTtyZXR1cm4gdm9pZChyJiYoci5mb2N1cygpLGgocixcImZvY3VzZWRcIikpKX12YXIgYT16KHMuZ2V0QXR0cmlidXRlKFwiZGF0YS10YWJvcmRlclwiKSk7ZChzLFwiZm9jdXNlZFwiKSxhJiYoYS5mb2N1cygpLGgoYSxcImZvY3VzZWRcIikpfTM5PT1uJiZlLm5leHRTbGlkZSgpLDM3PT1uJiZlLnByZXZTbGlkZSgpLDI3PT1uJiZlLmNsb3NlKCl9fSl9ZnVuY3Rpb24gWShlKXtyZXR1cm4gTWF0aC5zcXJ0KGUueCplLngrZS55KmUueSl9ZnVuY3Rpb24gcShlLHQpe3ZhciBpPWZ1bmN0aW9uKGUsdCl7dmFyIGk9WShlKSpZKHQpO2lmKDA9PT1pKXJldHVybiAwO3ZhciBuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUueCp0LngrZS55KnQueX0oZSx0KS9pO3JldHVybiBuPjEmJihuPTEpLE1hdGguYWNvcyhuKX0oZSx0KTtyZXR1cm4gZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS54KnQueS10LngqZS55fShlLHQpPjAmJihpKj0tMSksMTgwKmkvTWF0aC5QSX12YXIgTj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoaSl7dCh0aGlzLGUpLHRoaXMuaGFuZGxlcnM9W10sdGhpcy5lbD1pfXJldHVybiBuKGUsW3trZXk6XCJhZGRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZXJzLnB1c2goZSl9fSx7a2V5OlwiZGVsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZXx8KHRoaXMuaGFuZGxlcnM9W10pO2Zvcih2YXIgdD10aGlzLmhhbmRsZXJzLmxlbmd0aDt0Pj0wO3QtLSl0aGlzLmhhbmRsZXJzW3RdPT09ZSYmdGhpcy5oYW5kbGVycy5zcGxpY2UodCwxKX19LHtrZXk6XCJkaXNwYXRjaFwiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPTAsdD10aGlzLmhhbmRsZXJzLmxlbmd0aDtlPHQ7ZSsrKXt2YXIgaT10aGlzLmhhbmRsZXJzW2VdO1wiZnVuY3Rpb25cIj09dHlwZW9mIGkmJmkuYXBwbHkodGhpcy5lbCxhcmd1bWVudHMpfX19XSksZX0oKTtmdW5jdGlvbiBEKGUsdCl7dmFyIGk9bmV3IE4oZSk7cmV0dXJuIGkuYWRkKHQpLGl9dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGksbil7dCh0aGlzLGUpLHRoaXMuZWxlbWVudD1cInN0cmluZ1wiPT10eXBlb2YgaT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGkpOmksdGhpcy5zdGFydD10aGlzLnN0YXJ0LmJpbmQodGhpcyksdGhpcy5tb3ZlPXRoaXMubW92ZS5iaW5kKHRoaXMpLHRoaXMuZW5kPXRoaXMuZW5kLmJpbmQodGhpcyksdGhpcy5jYW5jZWw9dGhpcy5jYW5jZWwuYmluZCh0aGlzKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnN0YXJ0LCExKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMubW92ZSwhMSksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMuZW5kLCExKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsdGhpcy5jYW5jZWwsITEpLHRoaXMucHJlVj17eDpudWxsLHk6bnVsbH0sdGhpcy5waW5jaFN0YXJ0TGVuPW51bGwsdGhpcy56b29tPTEsdGhpcy5pc0RvdWJsZVRhcD0hMTt2YXIgcz1mdW5jdGlvbigpe307dGhpcy5yb3RhdGU9RCh0aGlzLmVsZW1lbnQsbi5yb3RhdGV8fHMpLHRoaXMudG91Y2hTdGFydD1EKHRoaXMuZWxlbWVudCxuLnRvdWNoU3RhcnR8fHMpLHRoaXMubXVsdGlwb2ludFN0YXJ0PUQodGhpcy5lbGVtZW50LG4ubXVsdGlwb2ludFN0YXJ0fHxzKSx0aGlzLm11bHRpcG9pbnRFbmQ9RCh0aGlzLmVsZW1lbnQsbi5tdWx0aXBvaW50RW5kfHxzKSx0aGlzLnBpbmNoPUQodGhpcy5lbGVtZW50LG4ucGluY2h8fHMpLHRoaXMuc3dpcGU9RCh0aGlzLmVsZW1lbnQsbi5zd2lwZXx8cyksdGhpcy50YXA9RCh0aGlzLmVsZW1lbnQsbi50YXB8fHMpLHRoaXMuZG91YmxlVGFwPUQodGhpcy5lbGVtZW50LG4uZG91YmxlVGFwfHxzKSx0aGlzLmxvbmdUYXA9RCh0aGlzLmVsZW1lbnQsbi5sb25nVGFwfHxzKSx0aGlzLnNpbmdsZVRhcD1EKHRoaXMuZWxlbWVudCxuLnNpbmdsZVRhcHx8cyksdGhpcy5wcmVzc01vdmU9RCh0aGlzLmVsZW1lbnQsbi5wcmVzc01vdmV8fHMpLHRoaXMudHdvRmluZ2VyUHJlc3NNb3ZlPUQodGhpcy5lbGVtZW50LG4udHdvRmluZ2VyUHJlc3NNb3ZlfHxzKSx0aGlzLnRvdWNoTW92ZT1EKHRoaXMuZWxlbWVudCxuLnRvdWNoTW92ZXx8cyksdGhpcy50b3VjaEVuZD1EKHRoaXMuZWxlbWVudCxuLnRvdWNoRW5kfHxzKSx0aGlzLnRvdWNoQ2FuY2VsPUQodGhpcy5lbGVtZW50LG4udG91Y2hDYW5jZWx8fHMpLHRoaXMudHJhbnNsYXRlQ29udGFpbmVyPXRoaXMuZWxlbWVudCx0aGlzLl9jYW5jZWxBbGxIYW5kbGVyPXRoaXMuY2FuY2VsQWxsLmJpbmQodGhpcyksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLl9jYW5jZWxBbGxIYW5kbGVyKSx0aGlzLmRlbHRhPW51bGwsdGhpcy5sYXN0PW51bGwsdGhpcy5ub3c9bnVsbCx0aGlzLnRhcFRpbWVvdXQ9bnVsbCx0aGlzLnNpbmdsZVRhcFRpbWVvdXQ9bnVsbCx0aGlzLmxvbmdUYXBUaW1lb3V0PW51bGwsdGhpcy5zd2lwZVRpbWVvdXQ9bnVsbCx0aGlzLngxPXRoaXMueDI9dGhpcy55MT10aGlzLnkyPW51bGwsdGhpcy5wcmVUYXBQb3NpdGlvbj17eDpudWxsLHk6bnVsbH19cmV0dXJuIG4oZSxbe2tleTpcInN0YXJ0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS50b3VjaGVzKXtpZihlLnRhcmdldCYmZS50YXJnZXQubm9kZU5hbWUmJltcImFcIixcImJ1dHRvblwiLFwiaW5wdXRcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKT49MCljb25zb2xlLmxvZyhcImlnbm9yZSBkcmFnIGZvciB0aGlzIHRvdWNoZWQgZWxlbWVudFwiLGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpO2Vsc2V7dGhpcy5ub3c9RGF0ZS5ub3coKSx0aGlzLngxPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLnkxPWUudG91Y2hlc1swXS5wYWdlWSx0aGlzLmRlbHRhPXRoaXMubm93LSh0aGlzLmxhc3R8fHRoaXMubm93KSx0aGlzLnRvdWNoU3RhcnQuZGlzcGF0Y2goZSx0aGlzLmVsZW1lbnQpLG51bGwhPT10aGlzLnByZVRhcFBvc2l0aW9uLngmJih0aGlzLmlzRG91YmxlVGFwPXRoaXMuZGVsdGE+MCYmdGhpcy5kZWx0YTw9MjUwJiZNYXRoLmFicyh0aGlzLnByZVRhcFBvc2l0aW9uLngtdGhpcy54MSk8MzAmJk1hdGguYWJzKHRoaXMucHJlVGFwUG9zaXRpb24ueS10aGlzLnkxKTwzMCx0aGlzLmlzRG91YmxlVGFwJiZjbGVhclRpbWVvdXQodGhpcy5zaW5nbGVUYXBUaW1lb3V0KSksdGhpcy5wcmVUYXBQb3NpdGlvbi54PXRoaXMueDEsdGhpcy5wcmVUYXBQb3NpdGlvbi55PXRoaXMueTEsdGhpcy5sYXN0PXRoaXMubm93O3ZhciB0PXRoaXMucHJlVjtpZihlLnRvdWNoZXMubGVuZ3RoPjEpe3RoaXMuX2NhbmNlbExvbmdUYXAoKSx0aGlzLl9jYW5jZWxTaW5nbGVUYXAoKTt2YXIgaT17eDplLnRvdWNoZXNbMV0ucGFnZVgtdGhpcy54MSx5OmUudG91Y2hlc1sxXS5wYWdlWS10aGlzLnkxfTt0Lng9aS54LHQueT1pLnksdGhpcy5waW5jaFN0YXJ0TGVuPVkodCksdGhpcy5tdWx0aXBvaW50U3RhcnQuZGlzcGF0Y2goZSx0aGlzLmVsZW1lbnQpfXRoaXMuX3ByZXZlbnRUYXA9ITEsdGhpcy5sb25nVGFwVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhpcy5sb25nVGFwLmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KSx0aGlzLl9wcmV2ZW50VGFwPSEwfS5iaW5kKHRoaXMpLDc1MCl9fX19LHtrZXk6XCJtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS50b3VjaGVzKXt2YXIgdD10aGlzLnByZVYsaT1lLnRvdWNoZXMubGVuZ3RoLG49ZS50b3VjaGVzWzBdLnBhZ2VYLHM9ZS50b3VjaGVzWzBdLnBhZ2VZO2lmKHRoaXMuaXNEb3VibGVUYXA9ITEsaT4xKXt2YXIgbD1lLnRvdWNoZXNbMV0ucGFnZVgsbz1lLnRvdWNoZXNbMV0ucGFnZVkscj17eDplLnRvdWNoZXNbMV0ucGFnZVgtbix5OmUudG91Y2hlc1sxXS5wYWdlWS1zfTtudWxsIT09dC54JiYodGhpcy5waW5jaFN0YXJ0TGVuPjAmJihlLnpvb209WShyKS90aGlzLnBpbmNoU3RhcnRMZW4sdGhpcy5waW5jaC5kaXNwYXRjaChlLHRoaXMuZWxlbWVudCkpLGUuYW5nbGU9cShyLHQpLHRoaXMucm90YXRlLmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KSksdC54PXIueCx0Lnk9ci55LG51bGwhPT10aGlzLngyJiZudWxsIT09dGhpcy5zeDI/KGUuZGVsdGFYPShuLXRoaXMueDIrbC10aGlzLnN4MikvMixlLmRlbHRhWT0ocy10aGlzLnkyK28tdGhpcy5zeTIpLzIpOihlLmRlbHRhWD0wLGUuZGVsdGFZPTApLHRoaXMudHdvRmluZ2VyUHJlc3NNb3ZlLmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KSx0aGlzLnN4Mj1sLHRoaXMuc3kyPW99ZWxzZXtpZihudWxsIT09dGhpcy54Mil7ZS5kZWx0YVg9bi10aGlzLngyLGUuZGVsdGFZPXMtdGhpcy55Mjt2YXIgYT1NYXRoLmFicyh0aGlzLngxLXRoaXMueDIpLGg9TWF0aC5hYnModGhpcy55MS10aGlzLnkyKTsoYT4xMHx8aD4xMCkmJih0aGlzLl9wcmV2ZW50VGFwPSEwKX1lbHNlIGUuZGVsdGFYPTAsZS5kZWx0YVk9MDt0aGlzLnByZXNzTW92ZS5kaXNwYXRjaChlLHRoaXMuZWxlbWVudCl9dGhpcy50b3VjaE1vdmUuZGlzcGF0Y2goZSx0aGlzLmVsZW1lbnQpLHRoaXMuX2NhbmNlbExvbmdUYXAoKSx0aGlzLngyPW4sdGhpcy55Mj1zLGk+MSYmZS5wcmV2ZW50RGVmYXVsdCgpfX19LHtrZXk6XCJlbmRcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLmNoYW5nZWRUb3VjaGVzKXt0aGlzLl9jYW5jZWxMb25nVGFwKCk7dmFyIHQ9dGhpcztlLnRvdWNoZXMubGVuZ3RoPDImJih0aGlzLm11bHRpcG9pbnRFbmQuZGlzcGF0Y2goZSx0aGlzLmVsZW1lbnQpLHRoaXMuc3gyPXRoaXMuc3kyPW51bGwpLHRoaXMueDImJk1hdGguYWJzKHRoaXMueDEtdGhpcy54Mik+MzB8fHRoaXMueTImJk1hdGguYWJzKHRoaXMueTEtdGhpcy55Mik+MzA/KGUuZGlyZWN0aW9uPXRoaXMuX3N3aXBlRGlyZWN0aW9uKHRoaXMueDEsdGhpcy54Mix0aGlzLnkxLHRoaXMueTIpLHRoaXMuc3dpcGVUaW1lb3V0PXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dC5zd2lwZS5kaXNwYXRjaChlLHQuZWxlbWVudCl9KSwwKSk6KHRoaXMudGFwVGltZW91dD1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuX3ByZXZlbnRUYXB8fHQudGFwLmRpc3BhdGNoKGUsdC5lbGVtZW50KSx0LmlzRG91YmxlVGFwJiYodC5kb3VibGVUYXAuZGlzcGF0Y2goZSx0LmVsZW1lbnQpLHQuaXNEb3VibGVUYXA9ITEpfSksMCksdC5pc0RvdWJsZVRhcHx8KHQuc2luZ2xlVGFwVGltZW91dD1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3Quc2luZ2xlVGFwLmRpc3BhdGNoKGUsdC5lbGVtZW50KX0pLDI1MCkpKSx0aGlzLnRvdWNoRW5kLmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KSx0aGlzLnByZVYueD0wLHRoaXMucHJlVi55PTAsdGhpcy56b29tPTEsdGhpcy5waW5jaFN0YXJ0TGVuPW51bGwsdGhpcy54MT10aGlzLngyPXRoaXMueTE9dGhpcy55Mj1udWxsfX19LHtrZXk6XCJjYW5jZWxBbGxcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX3ByZXZlbnRUYXA9ITAsY2xlYXJUaW1lb3V0KHRoaXMuc2luZ2xlVGFwVGltZW91dCksY2xlYXJUaW1lb3V0KHRoaXMudGFwVGltZW91dCksY2xlYXJUaW1lb3V0KHRoaXMubG9uZ1RhcFRpbWVvdXQpLGNsZWFyVGltZW91dCh0aGlzLnN3aXBlVGltZW91dCl9fSx7a2V5OlwiY2FuY2VsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jYW5jZWxBbGwoKSx0aGlzLnRvdWNoQ2FuY2VsLmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KX19LHtrZXk6XCJfY2FuY2VsTG9uZ1RhcFwiLHZhbHVlOmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMubG9uZ1RhcFRpbWVvdXQpfX0se2tleTpcIl9jYW5jZWxTaW5nbGVUYXBcIix2YWx1ZTpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnNpbmdsZVRhcFRpbWVvdXQpfX0se2tleTpcIl9zd2lwZURpcmVjdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxpLG4pe3JldHVybiBNYXRoLmFicyhlLXQpPj1NYXRoLmFicyhpLW4pP2UtdD4wP1wiTGVmdFwiOlwiUmlnaHRcIjppLW4+MD9cIlVwXCI6XCJEb3duXCJ9fSx7a2V5Olwib25cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXNbZV0mJnRoaXNbZV0uYWRkKHQpfX0se2tleTpcIm9mZlwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpc1tlXSYmdGhpc1tlXS5kZWwodCl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2luZ2xlVGFwVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMuc2luZ2xlVGFwVGltZW91dCksdGhpcy50YXBUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy50YXBUaW1lb3V0KSx0aGlzLmxvbmdUYXBUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy5sb25nVGFwVGltZW91dCksdGhpcy5zd2lwZVRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLnN3aXBlVGltZW91dCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5zdGFydCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLm1vdmUpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLmVuZCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLHRoaXMuY2FuY2VsKSx0aGlzLnJvdGF0ZS5kZWwoKSx0aGlzLnRvdWNoU3RhcnQuZGVsKCksdGhpcy5tdWx0aXBvaW50U3RhcnQuZGVsKCksdGhpcy5tdWx0aXBvaW50RW5kLmRlbCgpLHRoaXMucGluY2guZGVsKCksdGhpcy5zd2lwZS5kZWwoKSx0aGlzLnRhcC5kZWwoKSx0aGlzLmRvdWJsZVRhcC5kZWwoKSx0aGlzLmxvbmdUYXAuZGVsKCksdGhpcy5zaW5nbGVUYXAuZGVsKCksdGhpcy5wcmVzc01vdmUuZGVsKCksdGhpcy50d29GaW5nZXJQcmVzc01vdmUuZGVsKCksdGhpcy50b3VjaE1vdmUuZGVsKCksdGhpcy50b3VjaEVuZC5kZWwoKSx0aGlzLnRvdWNoQ2FuY2VsLmRlbCgpLHRoaXMucHJlVj10aGlzLnBpbmNoU3RhcnRMZW49dGhpcy56b29tPXRoaXMuaXNEb3VibGVUYXA9dGhpcy5kZWx0YT10aGlzLmxhc3Q9dGhpcy5ub3c9dGhpcy50YXBUaW1lb3V0PXRoaXMuc2luZ2xlVGFwVGltZW91dD10aGlzLmxvbmdUYXBUaW1lb3V0PXRoaXMuc3dpcGVUaW1lb3V0PXRoaXMueDE9dGhpcy54Mj10aGlzLnkxPXRoaXMueTI9dGhpcy5wcmVUYXBQb3NpdGlvbj10aGlzLnJvdGF0ZT10aGlzLnRvdWNoU3RhcnQ9dGhpcy5tdWx0aXBvaW50U3RhcnQ9dGhpcy5tdWx0aXBvaW50RW5kPXRoaXMucGluY2g9dGhpcy5zd2lwZT10aGlzLnRhcD10aGlzLmRvdWJsZVRhcD10aGlzLmxvbmdUYXA9dGhpcy5zaW5nbGVUYXA9dGhpcy5wcmVzc01vdmU9dGhpcy50b3VjaE1vdmU9dGhpcy50b3VjaEVuZD10aGlzLnRvdWNoQ2FuY2VsPXRoaXMudHdvRmluZ2VyUHJlc3NNb3ZlPW51bGwsd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLl9jYW5jZWxBbGxIYW5kbGVyKSxudWxsfX1dKSxlfSgpO2Z1bmN0aW9uIFcoZSl7dmFyIHQ9ZnVuY3Rpb24oKXt2YXIgZSx0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKSxpPXt0cmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLE9UcmFuc2l0aW9uOlwib1RyYW5zaXRpb25FbmRcIixNb3pUcmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLFdlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9O2ZvcihlIGluIGkpaWYodm9pZCAwIT09dC5zdHlsZVtlXSlyZXR1cm4gaVtlXX0oKSxpPXdpbmRvdy5pbm5lcldpZHRofHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGh8fGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsbj1jKGUsXCJnc2xpZGUtbWVkaWFcIik/ZTplLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLHM9dShuLFwiLmdpbm5lci1jb250YWluZXJcIiksbD1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWRlc2NyaXB0aW9uXCIpO2k+NzY5JiYobj1zKSxoKG4sXCJncmVzZXRcIiksdihuLFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIiksYSh0LHtvbkVsZW1lbnQ6bixvbmNlOiEwLHdpdGhDYWxsYmFjazpmdW5jdGlvbihlLHQpe2QobixcImdyZXNldFwiKX19KSxuLnN0eWxlLm9wYWNpdHk9XCJcIixsJiYobC5zdHlsZS5vcGFjaXR5PVwiXCIpfWZ1bmN0aW9uIEIoZSl7aWYoZS5ldmVudHMuaGFzT3duUHJvcGVydHkoXCJ0b3VjaFwiKSlyZXR1cm4hMTt2YXIgdCxpLG4scz15KCksbD1zLndpZHRoLG89cy5oZWlnaHQscj0hMSxhPW51bGwsZz1udWxsLGY9bnVsbCxwPSExLG09MSx4PTEsYj0hMSxTPSExLHc9bnVsbCxUPW51bGwsQz1udWxsLGs9bnVsbCxFPTAsQT0wLEw9ITEsST0hMSxPPXt9LFA9e30sTT0wLHo9MCxYPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xpZ2h0Ym94LXNsaWRlclwiKSxZPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ292ZXJsYXlcIikscT1uZXcgXyhYLHt0b3VjaFN0YXJ0OmZ1bmN0aW9uKHQpe2lmKHI9ITAsKGModC50YXJnZXRUb3VjaGVzWzBdLnRhcmdldCxcImdpbm5lci1jb250YWluZXJcIil8fHUodC50YXJnZXRUb3VjaGVzWzBdLnRhcmdldCxcIi5nc2xpZGUtZGVzY1wiKXx8XCJhXCI9PXQudGFyZ2V0VG91Y2hlc1swXS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkmJihyPSExKSx1KHQudGFyZ2V0VG91Y2hlc1swXS50YXJnZXQsXCIuZ3NsaWRlLWlubGluZVwiKSYmIWModC50YXJnZXRUb3VjaGVzWzBdLnRhcmdldC5wYXJlbnROb2RlLFwiZ3NsaWRlLWlubGluZVwiKSYmKHI9ITEpLHIpe2lmKFA9dC50YXJnZXRUb3VjaGVzWzBdLE8ucGFnZVg9dC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLE8ucGFnZVk9dC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZLE09dC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsej10LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSxhPWUuYWN0aXZlU2xpZGUsZz1hLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLG49YS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1pbmxpbmVcIiksZj1udWxsLGMoZyxcImdzbGlkZS1pbWFnZVwiKSYmKGY9Zy5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpKSwod2luZG93LmlubmVyV2lkdGh8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aHx8ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk+NzY5JiYoZz1hLnF1ZXJ5U2VsZWN0b3IoXCIuZ2lubmVyLWNvbnRhaW5lclwiKSksZChZLFwiZ3Jlc2V0XCIpLHQucGFnZVg+MjAmJnQucGFnZVg8d2luZG93LmlubmVyV2lkdGgtMjApcmV0dXJuO3QucHJldmVudERlZmF1bHQoKX19LHRvdWNoTW92ZTpmdW5jdGlvbihzKXtpZihyJiYoUD1zLnRhcmdldFRvdWNoZXNbMF0sIWImJiFTKSl7aWYobiYmbi5vZmZzZXRIZWlnaHQ+byl7dmFyIGE9Ty5wYWdlWC1QLnBhZ2VYO2lmKE1hdGguYWJzKGEpPD0xMylyZXR1cm4hMX1wPSEwO3ZhciBoLGQ9cy50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsYz1zLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSx1PU0tZCxtPXotYztpZihNYXRoLmFicyh1KT5NYXRoLmFicyhtKT8oTD0hMSxJPSEwKTooST0hMSxMPSEwKSx0PVAucGFnZVgtTy5wYWdlWCxFPTEwMCp0L2wsaT1QLnBhZ2VZLU8ucGFnZVksQT0xMDAqaS9vLEwmJmYmJihoPTEtTWF0aC5hYnMoaSkvbyxZLnN0eWxlLm9wYWNpdHk9aCxlLnNldHRpbmdzLnRvdWNoRm9sbG93QXhpcyYmKEU9MCkpLEkmJihoPTEtTWF0aC5hYnModCkvbCxnLnN0eWxlLm9wYWNpdHk9aCxlLnNldHRpbmdzLnRvdWNoRm9sbG93QXhpcyYmKEE9MCkpLCFmKXJldHVybiB2KGcsXCJ0cmFuc2xhdGUzZChcIi5jb25jYXQoRSxcIiUsIDAsIDApXCIpKTt2KGcsXCJ0cmFuc2xhdGUzZChcIi5jb25jYXQoRSxcIiUsIFwiKS5jb25jYXQoQSxcIiUsIDApXCIpKX19LHRvdWNoRW5kOmZ1bmN0aW9uKCl7aWYocil7aWYocD0hMSxTfHxiKXJldHVybiBDPXcsdm9pZChrPVQpO3ZhciB0PU1hdGguYWJzKHBhcnNlSW50KEEpKSxpPU1hdGguYWJzKHBhcnNlSW50KEUpKTtpZighKHQ+MjkmJmYpKXJldHVybiB0PDI5JiZpPDI1PyhoKFksXCJncmVzZXRcIiksWS5zdHlsZS5vcGFjaXR5PTEsVyhnKSk6dm9pZCAwO2UuY2xvc2UoKX19LG11bHRpcG9pbnRFbmQ6ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe2I9ITF9KSw1MCl9LG11bHRpcG9pbnRTdGFydDpmdW5jdGlvbigpe2I9ITAsbT14fHwxfSxwaW5jaDpmdW5jdGlvbihlKXtpZighZnx8cClyZXR1cm4hMTtiPSEwLGYuc2NhbGVYPWYuc2NhbGVZPW0qZS56b29tO3ZhciB0PW0qZS56b29tO2lmKFM9ITAsdDw9MSlyZXR1cm4gUz0hMSx0PTEsaz1udWxsLEM9bnVsbCx3PW51bGwsVD1udWxsLHZvaWQgZi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiXCIpO3Q+NC41JiYodD00LjUpLGYuc3R5bGUudHJhbnNmb3JtPVwic2NhbGUzZChcIi5jb25jYXQodCxcIiwgXCIpLmNvbmNhdCh0LFwiLCAxKVwiKSx4PXR9LHByZXNzTW92ZTpmdW5jdGlvbihlKXtpZihTJiYhYil7dmFyIHQ9UC5wYWdlWC1PLnBhZ2VYLGk9UC5wYWdlWS1PLnBhZ2VZO0MmJih0Kz1DKSxrJiYoaSs9ayksdz10LFQ9aTt2YXIgbj1cInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCh0LFwicHgsIFwiKS5jb25jYXQoaSxcInB4LCAwKVwiKTt4JiYobis9XCIgc2NhbGUzZChcIi5jb25jYXQoeCxcIiwgXCIpLmNvbmNhdCh4LFwiLCAxKVwiKSksdihmLG4pfX0sc3dpcGU6ZnVuY3Rpb24odCl7aWYoIVMpaWYoYiliPSExO2Vsc2V7aWYoXCJMZWZ0XCI9PXQuZGlyZWN0aW9uKXtpZihlLmluZGV4PT1lLmVsZW1lbnRzLmxlbmd0aC0xKXJldHVybiBXKGcpO2UubmV4dFNsaWRlKCl9aWYoXCJSaWdodFwiPT10LmRpcmVjdGlvbil7aWYoMD09ZS5pbmRleClyZXR1cm4gVyhnKTtlLnByZXZTbGlkZSgpfX19fSk7ZS5ldmVudHMudG91Y2g9cX12YXIgSD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoaSxuKXt2YXIgcz10aGlzLGw9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7aWYodCh0aGlzLGUpLHRoaXMuaW1nPWksdGhpcy5zbGlkZT1uLHRoaXMub25jbG9zZT1sLHRoaXMuaW1nLnNldFpvb21FdmVudHMpcmV0dXJuITE7dGhpcy5hY3RpdmU9ITEsdGhpcy56b29tZWRJbj0hMSx0aGlzLmRyYWdnaW5nPSExLHRoaXMuY3VycmVudFg9bnVsbCx0aGlzLmN1cnJlbnRZPW51bGwsdGhpcy5pbml0aWFsWD1udWxsLHRoaXMuaW5pdGlhbFk9bnVsbCx0aGlzLnhPZmZzZXQ9MCx0aGlzLnlPZmZzZXQ9MCx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsKGZ1bmN0aW9uKGUpe3JldHVybiBzLmRyYWdTdGFydChlKX0pLCExKSx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLChmdW5jdGlvbihlKXtyZXR1cm4gcy5kcmFnRW5kKGUpfSksITEpLHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwoZnVuY3Rpb24oZSl7cmV0dXJuIHMuZHJhZyhlKX0pLCExKSx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZnVuY3Rpb24oZSl7cmV0dXJuIHMuc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJhZ2dpbmctbmF2XCIpPyhzLnpvb21PdXQoKSwhMSk6cy56b29tZWRJbj92b2lkKHMuem9vbWVkSW4mJiFzLmRyYWdnaW5nJiZzLnpvb21PdXQoKSk6cy56b29tSW4oKX0pLCExKSx0aGlzLmltZy5zZXRab29tRXZlbnRzPSEwfXJldHVybiBuKGUsW3trZXk6XCJ6b29tSW5cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMud2lkb3dXaWR0aCgpO2lmKCEodGhpcy56b29tZWRJbnx8ZTw9NzY4KSl7dmFyIHQ9dGhpcy5pbWc7aWYodC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlXCIsdC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSksdC5zdHlsZS5tYXhXaWR0aD10Lm5hdHVyYWxXaWR0aCtcInB4XCIsdC5zdHlsZS5tYXhIZWlnaHQ9dC5uYXR1cmFsSGVpZ2h0K1wicHhcIix0Lm5hdHVyYWxXaWR0aD5lKXt2YXIgaT1lLzItdC5uYXR1cmFsV2lkdGgvMjt0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLmltZy5wYXJlbnROb2RlLGksMCl9dGhpcy5zbGlkZS5jbGFzc0xpc3QuYWRkKFwiem9vbWVkXCIpLHRoaXMuem9vbWVkSW49ITB9fX0se2tleTpcInpvb21PdXRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaW1nLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIlwiKSx0aGlzLmltZy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLHRoaXMuaW1nLmdldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVcIikpLHRoaXMuc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcInpvb21lZFwiKSx0aGlzLnpvb21lZEluPSExLHRoaXMuY3VycmVudFg9bnVsbCx0aGlzLmN1cnJlbnRZPW51bGwsdGhpcy5pbml0aWFsWD1udWxsLHRoaXMuaW5pdGlhbFk9bnVsbCx0aGlzLnhPZmZzZXQ9MCx0aGlzLnlPZmZzZXQ9MCx0aGlzLm9uY2xvc2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub25jbG9zZSYmdGhpcy5vbmNsb3NlKCl9fSx7a2V5OlwiZHJhZ1N0YXJ0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuem9vbWVkSW4/KFwidG91Y2hzdGFydFwiPT09ZS50eXBlPyh0aGlzLmluaXRpYWxYPWUudG91Y2hlc1swXS5jbGllbnRYLXRoaXMueE9mZnNldCx0aGlzLmluaXRpYWxZPWUudG91Y2hlc1swXS5jbGllbnRZLXRoaXMueU9mZnNldCk6KHRoaXMuaW5pdGlhbFg9ZS5jbGllbnRYLXRoaXMueE9mZnNldCx0aGlzLmluaXRpYWxZPWUuY2xpZW50WS10aGlzLnlPZmZzZXQpLGUudGFyZ2V0PT09dGhpcy5pbWcmJih0aGlzLmFjdGl2ZT0hMCx0aGlzLmltZy5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIikpKTp0aGlzLmFjdGl2ZT0hMX19LHtrZXk6XCJkcmFnRW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztlLnByZXZlbnREZWZhdWx0KCksdGhpcy5pbml0aWFsWD10aGlzLmN1cnJlbnRYLHRoaXMuaW5pdGlhbFk9dGhpcy5jdXJyZW50WSx0aGlzLmFjdGl2ZT0hMSxzZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuZHJhZ2dpbmc9ITEsdC5pbWcuaXNEcmFnZ2luZz0hMSx0LmltZy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIil9KSwxMDApfX0se2tleTpcImRyYWdcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmFjdGl2ZSYmKGUucHJldmVudERlZmF1bHQoKSxcInRvdWNobW92ZVwiPT09ZS50eXBlPyh0aGlzLmN1cnJlbnRYPWUudG91Y2hlc1swXS5jbGllbnRYLXRoaXMuaW5pdGlhbFgsdGhpcy5jdXJyZW50WT1lLnRvdWNoZXNbMF0uY2xpZW50WS10aGlzLmluaXRpYWxZKToodGhpcy5jdXJyZW50WD1lLmNsaWVudFgtdGhpcy5pbml0aWFsWCx0aGlzLmN1cnJlbnRZPWUuY2xpZW50WS10aGlzLmluaXRpYWxZKSx0aGlzLnhPZmZzZXQ9dGhpcy5jdXJyZW50WCx0aGlzLnlPZmZzZXQ9dGhpcy5jdXJyZW50WSx0aGlzLmltZy5pc0RyYWdnaW5nPSEwLHRoaXMuZHJhZ2dpbmc9ITAsdGhpcy5zZXRUcmFuc2xhdGUodGhpcy5pbWcsdGhpcy5jdXJyZW50WCx0aGlzLmN1cnJlbnRZKSl9fSx7a2V5Olwib25Nb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy56b29tZWRJbil7dmFyIHQ9ZS5jbGllbnRYLXRoaXMuaW1nLm5hdHVyYWxXaWR0aC8yLGk9ZS5jbGllbnRZLXRoaXMuaW1nLm5hdHVyYWxIZWlnaHQvMjt0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLmltZyx0LGkpfX19LHtrZXk6XCJzZXRUcmFuc2xhdGVcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7ZS5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIit0K1wicHgsIFwiK2krXCJweCwgMClcIn19LHtrZXk6XCJ3aWRvd1dpZHRoXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmlubmVyV2lkdGh8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aHx8ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aH19XSksZX0oKSxWPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ZhciBpPXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dCh0aGlzLGUpO3ZhciBzPW4uZHJhZ0VsLGw9bi50b2xlcmFuY2VYLG89dm9pZCAwPT09bD80MDpsLHI9bi50b2xlcmFuY2VZLGE9dm9pZCAwPT09cj82NTpyLGg9bi5zbGlkZSxkPXZvaWQgMD09PWg/bnVsbDpoLGM9bi5pbnN0YW5jZSx1PXZvaWQgMD09PWM/bnVsbDpjO3RoaXMuZWw9cyx0aGlzLmFjdGl2ZT0hMSx0aGlzLmRyYWdnaW5nPSExLHRoaXMuY3VycmVudFg9bnVsbCx0aGlzLmN1cnJlbnRZPW51bGwsdGhpcy5pbml0aWFsWD1udWxsLHRoaXMuaW5pdGlhbFk9bnVsbCx0aGlzLnhPZmZzZXQ9MCx0aGlzLnlPZmZzZXQ9MCx0aGlzLmRpcmVjdGlvbj1udWxsLHRoaXMubGFzdERpcmVjdGlvbj1udWxsLHRoaXMudG9sZXJhbmNlWD1vLHRoaXMudG9sZXJhbmNlWT1hLHRoaXMudG9sZXJhbmNlUmVhY2hlZD0hMSx0aGlzLmRyYWdDb250YWluZXI9dGhpcy5lbCx0aGlzLnNsaWRlPWQsdGhpcy5pbnN0YW5jZT11LHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLChmdW5jdGlvbihlKXtyZXR1cm4gaS5kcmFnU3RhcnQoZSl9KSwhMSksdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLChmdW5jdGlvbihlKXtyZXR1cm4gaS5kcmFnRW5kKGUpfSksITEpLHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLChmdW5jdGlvbihlKXtyZXR1cm4gaS5kcmFnKGUpfSksITEpfXJldHVybiBuKGUsW3trZXk6XCJkcmFnU3RhcnRcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLnNsaWRlLmNsYXNzTGlzdC5jb250YWlucyhcInpvb21lZFwiKSl0aGlzLmFjdGl2ZT0hMTtlbHNle1widG91Y2hzdGFydFwiPT09ZS50eXBlPyh0aGlzLmluaXRpYWxYPWUudG91Y2hlc1swXS5jbGllbnRYLXRoaXMueE9mZnNldCx0aGlzLmluaXRpYWxZPWUudG91Y2hlc1swXS5jbGllbnRZLXRoaXMueU9mZnNldCk6KHRoaXMuaW5pdGlhbFg9ZS5jbGllbnRYLXRoaXMueE9mZnNldCx0aGlzLmluaXRpYWxZPWUuY2xpZW50WS10aGlzLnlPZmZzZXQpO3ZhciB0PWUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7ZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm9kcmFnXCIpfHx1KGUudGFyZ2V0LFwiLm5vZHJhZ1wiKXx8LTEhPT1bXCJpbnB1dFwiLFwic2VsZWN0XCIsXCJ0ZXh0YXJlYVwiLFwiYnV0dG9uXCIsXCJhXCJdLmluZGV4T2YodCk/dGhpcy5hY3RpdmU9ITE6KGUucHJldmVudERlZmF1bHQoKSwoZS50YXJnZXQ9PT10aGlzLmVsfHxcImltZ1wiIT09dCYmdShlLnRhcmdldCxcIi5nc2xpZGUtaW5saW5lXCIpKSYmKHRoaXMuYWN0aXZlPSEwLHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcImRyYWdnaW5nXCIpLHRoaXMuZHJhZ0NvbnRhaW5lcj11KGUudGFyZ2V0LFwiLmdpbm5lci1jb250YWluZXJcIikpKX19fSx7a2V5OlwiZHJhZ0VuZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7ZSYmZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuaW5pdGlhbFg9MCx0aGlzLmluaXRpYWxZPTAsdGhpcy5jdXJyZW50WD1udWxsLHRoaXMuY3VycmVudFk9bnVsbCx0aGlzLmluaXRpYWxYPW51bGwsdGhpcy5pbml0aWFsWT1udWxsLHRoaXMueE9mZnNldD0wLHRoaXMueU9mZnNldD0wLHRoaXMuYWN0aXZlPSExLHRoaXMuZG9TbGlkZUNoYW5nZSYmKHRoaXMuaW5zdGFuY2UucHJldmVudE91dHNpZGVDbGljaz0hMCxcInJpZ2h0XCI9PXRoaXMuZG9TbGlkZUNoYW5nZSYmdGhpcy5pbnN0YW5jZS5wcmV2U2xpZGUoKSxcImxlZnRcIj09dGhpcy5kb1NsaWRlQ2hhbmdlJiZ0aGlzLmluc3RhbmNlLm5leHRTbGlkZSgpKSx0aGlzLmRvU2xpZGVDbG9zZSYmdGhpcy5pbnN0YW5jZS5jbG9zZSgpLHRoaXMudG9sZXJhbmNlUmVhY2hlZHx8dGhpcy5zZXRUcmFuc2xhdGUodGhpcy5kcmFnQ29udGFpbmVyLDAsMCwhMCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXt0Lmluc3RhbmNlLnByZXZlbnRPdXRzaWRlQ2xpY2s9ITEsdC50b2xlcmFuY2VSZWFjaGVkPSExLHQubGFzdERpcmVjdGlvbj1udWxsLHQuZHJhZ2dpbmc9ITEsdC5lbC5pc0RyYWdnaW5nPSExLHQuZWwuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpLHQuc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nLW5hdlwiKSx0LmRyYWdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtPVwiXCIsdC5kcmFnQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb249XCJcIn0pLDEwMCl9fSx7a2V5OlwiZHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHRoaXMuYWN0aXZlKXtlLnByZXZlbnREZWZhdWx0KCksdGhpcy5zbGlkZS5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmctbmF2XCIpLFwidG91Y2htb3ZlXCI9PT1lLnR5cGU/KHRoaXMuY3VycmVudFg9ZS50b3VjaGVzWzBdLmNsaWVudFgtdGhpcy5pbml0aWFsWCx0aGlzLmN1cnJlbnRZPWUudG91Y2hlc1swXS5jbGllbnRZLXRoaXMuaW5pdGlhbFkpOih0aGlzLmN1cnJlbnRYPWUuY2xpZW50WC10aGlzLmluaXRpYWxYLHRoaXMuY3VycmVudFk9ZS5jbGllbnRZLXRoaXMuaW5pdGlhbFkpLHRoaXMueE9mZnNldD10aGlzLmN1cnJlbnRYLHRoaXMueU9mZnNldD10aGlzLmN1cnJlbnRZLHRoaXMuZWwuaXNEcmFnZ2luZz0hMCx0aGlzLmRyYWdnaW5nPSEwLHRoaXMuZG9TbGlkZUNoYW5nZT0hMSx0aGlzLmRvU2xpZGVDbG9zZT0hMTt2YXIgdD1NYXRoLmFicyh0aGlzLmN1cnJlbnRYKSxpPU1hdGguYWJzKHRoaXMuY3VycmVudFkpO2lmKHQ+MCYmdD49TWF0aC5hYnModGhpcy5jdXJyZW50WSkmJighdGhpcy5sYXN0RGlyZWN0aW9ufHxcInhcIj09dGhpcy5sYXN0RGlyZWN0aW9uKSl7dGhpcy55T2Zmc2V0PTAsdGhpcy5sYXN0RGlyZWN0aW9uPVwieFwiLHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMuZHJhZ0NvbnRhaW5lcix0aGlzLmN1cnJlbnRYLDApO3ZhciBuPXRoaXMuc2hvdWxkQ2hhbmdlKCk7aWYoIXRoaXMuaW5zdGFuY2Uuc2V0dGluZ3MuZHJhZ0F1dG9TbmFwJiZuJiYodGhpcy5kb1NsaWRlQ2hhbmdlPW4pLHRoaXMuaW5zdGFuY2Uuc2V0dGluZ3MuZHJhZ0F1dG9TbmFwJiZuKXJldHVybiB0aGlzLmluc3RhbmNlLnByZXZlbnRPdXRzaWRlQ2xpY2s9ITAsdGhpcy50b2xlcmFuY2VSZWFjaGVkPSEwLHRoaXMuYWN0aXZlPSExLHRoaXMuaW5zdGFuY2UucHJldmVudE91dHNpZGVDbGljaz0hMCx0aGlzLmRyYWdFbmQobnVsbCksXCJyaWdodFwiPT1uJiZ0aGlzLmluc3RhbmNlLnByZXZTbGlkZSgpLHZvaWQoXCJsZWZ0XCI9PW4mJnRoaXMuaW5zdGFuY2UubmV4dFNsaWRlKCkpfWlmKHRoaXMudG9sZXJhbmNlWT4wJiZpPjAmJmk+PXQmJighdGhpcy5sYXN0RGlyZWN0aW9ufHxcInlcIj09dGhpcy5sYXN0RGlyZWN0aW9uKSl7dGhpcy54T2Zmc2V0PTAsdGhpcy5sYXN0RGlyZWN0aW9uPVwieVwiLHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMuZHJhZ0NvbnRhaW5lciwwLHRoaXMuY3VycmVudFkpO3ZhciBzPXRoaXMuc2hvdWxkQ2xvc2UoKTtyZXR1cm4hdGhpcy5pbnN0YW5jZS5zZXR0aW5ncy5kcmFnQXV0b1NuYXAmJnMmJih0aGlzLmRvU2xpZGVDbG9zZT0hMCksdm9pZCh0aGlzLmluc3RhbmNlLnNldHRpbmdzLmRyYWdBdXRvU25hcCYmcyYmdGhpcy5pbnN0YW5jZS5jbG9zZSgpKX19fX0se2tleTpcInNob3VsZENoYW5nZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9ITE7aWYoTWF0aC5hYnModGhpcy5jdXJyZW50WCk+PXRoaXMudG9sZXJhbmNlWCl7dmFyIHQ9dGhpcy5jdXJyZW50WD4wP1wicmlnaHRcIjpcImxlZnRcIjsoXCJsZWZ0XCI9PXQmJnRoaXMuc2xpZGUhPT10aGlzLnNsaWRlLnBhcmVudE5vZGUubGFzdENoaWxkfHxcInJpZ2h0XCI9PXQmJnRoaXMuc2xpZGUhPT10aGlzLnNsaWRlLnBhcmVudE5vZGUuZmlyc3RDaGlsZCkmJihlPXQpfXJldHVybiBlfX0se2tleTpcInNob3VsZENsb3NlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT0hMTtyZXR1cm4gTWF0aC5hYnModGhpcy5jdXJyZW50WSk+PXRoaXMudG9sZXJhbmNlWSYmKGU9ITApLGV9fSx7a2V5Olwic2V0VHJhbnNsYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdJiZhcmd1bWVudHNbM107ZS5zdHlsZS50cmFuc2l0aW9uPW4/XCJhbGwgLjJzIGVhc2VcIjpcIlwiLGUuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHQsXCJweCwgXCIpLmNvbmNhdChpLFwicHgsIDApXCIpfX1dKSxlfSgpO2Z1bmN0aW9uIGooZSx0LGksbil7dmFyIHM9ZS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxsPW5ldyBJbWFnZSxvPVwiZ1NsaWRlVGl0bGVfXCIraSxyPVwiZ1NsaWRlRGVzY19cIitpO2wuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoZnVuY3Rpb24oKXtUKG4pJiZuKCl9KSwhMSksbC5zcmM9dC5ocmVmLFwiXCIhPXQuc2l6ZXMmJlwiXCIhPXQuc3Jjc2V0JiYobC5zaXplcz10LnNpemVzLGwuc3Jjc2V0PXQuc3Jjc2V0KSxsLmFsdD1cIlwiLEkodC5hbHQpfHxcIlwiPT09dC5hbHR8fChsLmFsdD10LmFsdCksXCJcIiE9PXQudGl0bGUmJmwuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsbyksXCJcIiE9PXQuZGVzY3JpcHRpb24mJmwuc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiLHIpLHQuaGFzT3duUHJvcGVydHkoXCJfaGFzQ3VzdG9tV2lkdGhcIikmJnQuX2hhc0N1c3RvbVdpZHRoJiYobC5zdHlsZS53aWR0aD10LndpZHRoKSx0Lmhhc093blByb3BlcnR5KFwiX2hhc0N1c3RvbUhlaWdodFwiKSYmdC5faGFzQ3VzdG9tSGVpZ2h0JiYobC5zdHlsZS5oZWlnaHQ9dC5oZWlnaHQpLHMuaW5zZXJ0QmVmb3JlKGwscy5maXJzdENoaWxkKX1mdW5jdGlvbiBGKGUsdCxpLG4pe3ZhciBzPXRoaXMsbD1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ2lubmVyLWNvbnRhaW5lclwiKSxvPVwiZ3ZpZGVvXCIraSxyPWUucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIiksYT10aGlzLmdldEFsbFBsYXllcnMoKTtoKGwsXCJndmlkZW8tY29udGFpbmVyXCIpLHIuaW5zZXJ0QmVmb3JlKG0oJzxkaXYgY2xhc3M9XCJndmlkZW8td3JhcHBlclwiPjwvZGl2PicpLHIuZmlyc3RDaGlsZCk7dmFyIGQ9ZS5xdWVyeVNlbGVjdG9yKFwiLmd2aWRlby13cmFwcGVyXCIpO1ModGhpcy5zZXR0aW5ncy5wbHlyLmNzcyxcIlBseXJcIik7dmFyIGM9dC5ocmVmLHU9bnVsbD09dD92b2lkIDA6dC52aWRlb1Byb3ZpZGVyLGc9ITE7ci5zdHlsZS5tYXhXaWR0aD10LndpZHRoLFModGhpcy5zZXR0aW5ncy5wbHlyLmpzLFwiUGx5clwiLChmdW5jdGlvbigpe2lmKCF1JiZjLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhbMC05XSopLykmJih1PVwidmltZW9cIiksIXUmJihjLm1hdGNoKC8oeW91dHViZVxcLmNvbXx5b3V0dWJlLW5vY29va2llXFwuY29tKVxcL3dhdGNoXFw/dj0oW2EtekEtWjAtOVxcLV9dKykvKXx8Yy5tYXRjaCgveW91dHVcXC5iZVxcLyhbYS16QS1aMC05XFwtX10rKS8pfHxjLm1hdGNoKC8oeW91dHViZVxcLmNvbXx5b3V0dWJlLW5vY29va2llXFwuY29tKVxcL2VtYmVkXFwvKFthLXpBLVowLTlcXC1fXSspLykpJiYodT1cInlvdXR1YmVcIiksXCJsb2NhbFwiPT09dXx8IXUpe3U9XCJsb2NhbFwiO3ZhciBsPSc8dmlkZW8gaWQ9XCInK28rJ1wiICc7bCs9J3N0eWxlPVwiYmFja2dyb3VuZDojMDAwOyBtYXgtd2lkdGg6ICcuY29uY2F0KHQud2lkdGgsJztcIiAnKSxsKz0ncHJlbG9hZD1cIm1ldGFkYXRhXCIgJyxsKz0neC13ZWJraXQtYWlycGxheT1cImFsbG93XCIgJyxsKz1cInBsYXlzaW5saW5lIFwiLGwrPVwiY29udHJvbHMgXCIsbCs9J2NsYXNzPVwiZ3ZpZGVvLWxvY2FsXCI+JyxsKz0nPHNvdXJjZSBzcmM9XCInLmNvbmNhdChjLCdcIj4nKSxnPW0obCs9XCI8L3ZpZGVvPlwiKX12YXIgcj1nfHxtKCc8ZGl2IGlkPVwiJy5jb25jYXQobywnXCIgZGF0YS1wbHlyLXByb3ZpZGVyPVwiJykuY29uY2F0KHUsJ1wiIGRhdGEtcGx5ci1lbWJlZC1pZD1cIicpLmNvbmNhdChjLCdcIj48L2Rpdj4nKSk7aChkLFwiXCIuY29uY2F0KHUsXCItdmlkZW8gZ3ZpZGVvXCIpKSxkLmFwcGVuZENoaWxkKHIpLGQuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLG8pLGQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLGkpO3ZhciB2PU8ocy5zZXR0aW5ncy5wbHlyLFwiY29uZmlnXCIpP3Muc2V0dGluZ3MucGx5ci5jb25maWc6e30sZj1uZXcgUGx5cihcIiNcIitvLHYpO2Yub24oXCJyZWFkeVwiLChmdW5jdGlvbihlKXthW29dPWUuZGV0YWlsLnBseXIsVChuKSYmbigpfSkpLGIoKGZ1bmN0aW9uKCl7cmV0dXJuIGUucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKSYmXCJ0cnVlXCI9PWUucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKS5kYXRhc2V0LnJlYWR5fSksKGZ1bmN0aW9uKCl7cy5yZXNpemUoZSl9KSksZi5vbihcImVudGVyZnVsbHNjcmVlblwiLFIpLGYub24oXCJleGl0ZnVsbHNjcmVlblwiLFIpfSkpfWZ1bmN0aW9uIFIoZSl7dmFyIHQ9dShlLnRhcmdldCxcIi5nc2xpZGUtbWVkaWFcIik7XCJlbnRlcmZ1bGxzY3JlZW5cIj09PWUudHlwZSYmaCh0LFwiZnVsbHNjcmVlblwiKSxcImV4aXRmdWxsc2NyZWVuXCI9PT1lLnR5cGUmJmQodCxcImZ1bGxzY3JlZW5cIil9ZnVuY3Rpb24gRyhlLHQsaSxuKXt2YXIgcyxsPXRoaXMsbz1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLHI9ISghTyh0LFwiaHJlZlwiKXx8IXQuaHJlZikmJnQuaHJlZi5zcGxpdChcIiNcIikucG9wKCkudHJpbSgpLGQ9ISghTyh0LFwiY29udGVudFwiKXx8IXQuY29udGVudCkmJnQuY29udGVudDtpZihkJiYoQyhkKSYmKHM9bSgnPGRpdiBjbGFzcz1cImdpbmxpbmVkLWNvbnRlbnRcIj4nLmNvbmNhdChkLFwiPC9kaXY+XCIpKSksayhkKSkpe1wibm9uZVwiPT1kLnN0eWxlLmRpc3BsYXkmJihkLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2MuY2xhc3NOYW1lPVwiZ2lubGluZWQtY29udGVudFwiLGMuYXBwZW5kQ2hpbGQoZCkscz1jfWlmKHIpe3ZhciB1PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHIpO2lmKCF1KXJldHVybiExO3ZhciBnPXUuY2xvbmVOb2RlKCEwKTtnLnN0eWxlLmhlaWdodD10LmhlaWdodCxnLnN0eWxlLm1heFdpZHRoPXQud2lkdGgsaChnLFwiZ2lubGluZWQtY29udGVudFwiKSxzPWd9aWYoIXMpcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gYXBwZW5kIGlubGluZSBzbGlkZSBjb250ZW50XCIsdCksITE7by5zdHlsZS5oZWlnaHQ9dC5oZWlnaHQsby5zdHlsZS53aWR0aD10LndpZHRoLG8uYXBwZW5kQ2hpbGQocyksdGhpcy5ldmVudHNbXCJpbmxpbmVjbG9zZVwiK3JdPWEoXCJjbGlja1wiLHtvbkVsZW1lbnQ6by5xdWVyeVNlbGVjdG9yQWxsKFwiLmd0cmlnZ2VyLWNsb3NlXCIpLHdpdGhDYWxsYmFjazpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksbC5jbG9zZSgpfX0pLFQobikmJm4oKX1mdW5jdGlvbiBaKGUsdCxpLG4pe3ZhciBzPWUucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIiksbD1mdW5jdGlvbihlKXt2YXIgdD1lLnVybCxpPWUuYWxsb3csbj1lLmNhbGxiYWNrLHM9ZS5hcHBlbmRUbyxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7cmV0dXJuIGwuY2xhc3NOYW1lPVwidmltZW8tdmlkZW8gZ3ZpZGVvXCIsbC5zcmM9dCxsLnN0eWxlLndpZHRoPVwiMTAwJVwiLGwuc3R5bGUuaGVpZ2h0PVwiMTAwJVwiLGkmJmwuc2V0QXR0cmlidXRlKFwiYWxsb3dcIixpKSxsLm9ubG9hZD1mdW5jdGlvbigpe2wub25sb2FkPW51bGwsaChsLFwibm9kZS1yZWFkeVwiKSxUKG4pJiZuKCl9LHMmJnMuYXBwZW5kQ2hpbGQobCksbH0oe3VybDp0LmhyZWYsY2FsbGJhY2s6bn0pO3MucGFyZW50Tm9kZS5zdHlsZS5tYXhXaWR0aD10LndpZHRoLHMucGFyZW50Tm9kZS5zdHlsZS5oZWlnaHQ9dC5oZWlnaHQscy5hcHBlbmRDaGlsZChsKX12YXIgVT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt2YXIgaT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dCh0aGlzLGUpLHRoaXMuZGVmYXVsdHM9e2hyZWY6XCJcIixzaXplczpcIlwiLHNyY3NldDpcIlwiLHRpdGxlOlwiXCIsdHlwZTpcIlwiLHZpZGVvUHJvdmlkZXI6XCJcIixkZXNjcmlwdGlvbjpcIlwiLGFsdDpcIlwiLGRlc2NQb3NpdGlvbjpcImJvdHRvbVwiLGVmZmVjdDpcIlwiLHdpZHRoOlwiXCIsaGVpZ2h0OlwiXCIsY29udGVudDohMSx6b29tYWJsZTohMCxkcmFnZ2FibGU6ITB9LEwoaSkmJih0aGlzLmRlZmF1bHRzPWwodGhpcy5kZWZhdWx0cyxpKSl9cmV0dXJuIG4oZSxbe2tleTpcInNvdXJjZVR5cGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lO2lmKG51bGwhPT0oZT1lLnRvTG93ZXJDYXNlKCkpLm1hdGNoKC9cXC4oanBlZ3xqcGd8anBlfGdpZnxwbmd8YXBufHdlYnB8YXZpZnxzdmcpLykpcmV0dXJuXCJpbWFnZVwiO2lmKGUubWF0Y2goLyh5b3V0dWJlXFwuY29tfHlvdXR1YmUtbm9jb29raWVcXC5jb20pXFwvd2F0Y2hcXD92PShbYS16QS1aMC05XFwtX10rKS8pfHxlLm1hdGNoKC95b3V0dVxcLmJlXFwvKFthLXpBLVowLTlcXC1fXSspLyl8fGUubWF0Y2goLyh5b3V0dWJlXFwuY29tfHlvdXR1YmUtbm9jb29raWVcXC5jb20pXFwvZW1iZWRcXC8oW2EtekEtWjAtOVxcLV9dKykvKSlyZXR1cm5cInZpZGVvXCI7aWYoZS5tYXRjaCgvdmltZW9cXC5jb21cXC8oWzAtOV0qKS8pKXJldHVyblwidmlkZW9cIjtpZihudWxsIT09ZS5tYXRjaCgvXFwuKG1wNHxvZ2d8d2VibXxtb3YpLykpcmV0dXJuXCJ2aWRlb1wiO2lmKG51bGwhPT1lLm1hdGNoKC9cXC4obXAzfHdhdnx3bWF8YWFjfG9nZykvKSlyZXR1cm5cImF1ZGlvXCI7aWYoZS5pbmRleE9mKFwiI1wiKT4tMSYmXCJcIiE9PXQuc3BsaXQoXCIjXCIpLnBvcCgpLnRyaW0oKSlyZXR1cm5cImlubGluZVwiO3JldHVybiBlLmluZGV4T2YoXCJnb2FqYXg9dHJ1ZVwiKT4tMT9cImFqYXhcIjpcImV4dGVybmFsXCJ9fSx7a2V5OlwicGFyc2VDb25maWdcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMsbj1sKHtkZXNjUG9zaXRpb246dC5kZXNjUG9zaXRpb259LHRoaXMuZGVmYXVsdHMpO2lmKEwoZSkmJiFrKGUpKXtPKGUsXCJ0eXBlXCIpfHwoTyhlLFwiY29udGVudFwiKSYmZS5jb250ZW50P2UudHlwZT1cImlubGluZVwiOk8oZSxcImhyZWZcIikmJihlLnR5cGU9dGhpcy5zb3VyY2VUeXBlKGUuaHJlZikpKTt2YXIgcz1sKG4sZSk7cmV0dXJuIHRoaXMuc2V0U2l6ZShzLHQpLHN9dmFyIHI9XCJcIixhPWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1nbGlnaHRib3hcIiksaD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYoXCJhXCI9PT1oJiYocj1lLmhyZWYpLFwiaW1nXCI9PT1oJiYocj1lLnNyYyxuLmFsdD1lLmFsdCksbi5ocmVmPXIsbyhuLChmdW5jdGlvbihzLGwpe08odCxsKSYmXCJ3aWR0aFwiIT09bCYmKG5bbF09dFtsXSk7dmFyIG89ZS5kYXRhc2V0W2xdO0kobyl8fChuW2xdPWkuc2FuaXRpemVWYWx1ZShvKSl9KSksbi5jb250ZW50JiYobi50eXBlPVwiaW5saW5lXCIpLCFuLnR5cGUmJnImJihuLnR5cGU9dGhpcy5zb3VyY2VUeXBlKHIpKSxJKGEpKXtpZighbi50aXRsZSYmXCJhXCI9PWgpe3ZhciBkPWUudGl0bGU7SShkKXx8XCJcIj09PWR8fChuLnRpdGxlPWQpfWlmKCFuLnRpdGxlJiZcImltZ1wiPT1oKXt2YXIgYz1lLmFsdDtJKGMpfHxcIlwiPT09Y3x8KG4udGl0bGU9Yyl9fWVsc2V7dmFyIHU9W107byhuLChmdW5jdGlvbihlLHQpe3UucHVzaChcIjtcXFxccz9cIit0KX0pKSx1PXUuam9pbihcIlxcXFxzPzp8XCIpLFwiXCIhPT1hLnRyaW0oKSYmbyhuLChmdW5jdGlvbihlLHQpe3ZhciBzPWEsbD1uZXcgUmVnRXhwKFwicz9cIit0K1wicz86cz8oLio/KShcIit1K1wicz86fCQpXCIpLG89cy5tYXRjaChsKTtpZihvJiZvLmxlbmd0aCYmb1sxXSl7dmFyIHI9b1sxXS50cmltKCkucmVwbGFjZSgvO1xccyokLyxcIlwiKTtuW3RdPWkuc2FuaXRpemVWYWx1ZShyKX19KSl9aWYobi5kZXNjcmlwdGlvbiYmXCIuXCI9PT1uLmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLDEpKXt2YXIgZzt0cnl7Zz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG4uZGVzY3JpcHRpb24pLmlubmVySFRNTH1jYXRjaChlKXtpZighKGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24pKXRocm93IGV9ZyYmKG4uZGVzY3JpcHRpb249Zyl9aWYoIW4uZGVzY3JpcHRpb24pe3ZhciB2PWUucXVlcnlTZWxlY3RvcihcIi5nbGlnaHRib3gtZGVzY1wiKTt2JiYobi5kZXNjcmlwdGlvbj12LmlubmVySFRNTCl9cmV0dXJuIHRoaXMuc2V0U2l6ZShuLHQsZSksdGhpcy5zbGlkZUNvbmZpZz1uLG59fSx7a2V5Olwic2V0U2l6ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwsbj1cInZpZGVvXCI9PWUudHlwZT90aGlzLmNoZWNrU2l6ZSh0LnZpZGVvc1dpZHRoKTp0aGlzLmNoZWNrU2l6ZSh0LndpZHRoKSxzPXRoaXMuY2hlY2tTaXplKHQuaGVpZ2h0KTtyZXR1cm4gZS53aWR0aD1PKGUsXCJ3aWR0aFwiKSYmXCJcIiE9PWUud2lkdGg/dGhpcy5jaGVja1NpemUoZS53aWR0aCk6bixlLmhlaWdodD1PKGUsXCJoZWlnaHRcIikmJlwiXCIhPT1lLmhlaWdodD90aGlzLmNoZWNrU2l6ZShlLmhlaWdodCk6cyxpJiZcImltYWdlXCI9PWUudHlwZSYmKGUuX2hhc0N1c3RvbVdpZHRoPSEhaS5kYXRhc2V0LndpZHRoLGUuX2hhc0N1c3RvbUhlaWdodD0hIWkuZGF0YXNldC5oZWlnaHQpLGV9fSx7a2V5OlwiY2hlY2tTaXplXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIE0oZSk/XCJcIi5jb25jYXQoZSxcInB4XCIpOmV9fSx7a2V5Olwic2FuaXRpemVWYWx1ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVyblwidHJ1ZVwiIT09ZSYmXCJmYWxzZVwiIT09ZT9lOlwidHJ1ZVwiPT09ZX19XSksZX0oKSwkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShpLG4scyl7dCh0aGlzLGUpLHRoaXMuZWxlbWVudD1pLHRoaXMuaW5zdGFuY2U9bix0aGlzLmluZGV4PXN9cmV0dXJuIG4oZSxbe2tleTpcInNldENvbnRlbnRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbCxpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV07aWYoYyh0LFwibG9hZGVkXCIpKXJldHVybiExO3ZhciBuPXRoaXMuaW5zdGFuY2Uuc2V0dGluZ3Mscz10aGlzLnNsaWRlQ29uZmlnLGw9dygpO1Qobi5iZWZvcmVTbGlkZUxvYWQpJiZuLmJlZm9yZVNsaWRlTG9hZCh7aW5kZXg6dGhpcy5pbmRleCxzbGlkZTp0LHBsYXllcjohMX0pO3ZhciBvPXMudHlwZSxyPXMuZGVzY1Bvc2l0aW9uLGE9dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxkPXQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtdGl0bGVcIiksdT10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWRlc2NcIiksZz10LnF1ZXJ5U2VsZWN0b3IoXCIuZ2Rlc2MtaW5uZXJcIiksdj1pLGY9XCJnU2xpZGVUaXRsZV9cIit0aGlzLmluZGV4LHA9XCJnU2xpZGVEZXNjX1wiK3RoaXMuaW5kZXg7aWYoVChuLmFmdGVyU2xpZGVMb2FkKSYmKHY9ZnVuY3Rpb24oKXtUKGkpJiZpKCksbi5hZnRlclNsaWRlTG9hZCh7aW5kZXg6ZS5pbmRleCxzbGlkZTp0LHBsYXllcjplLmluc3RhbmNlLmdldFNsaWRlUGxheWVySW5zdGFuY2UoZS5pbmRleCl9KX0pLFwiXCI9PXMudGl0bGUmJlwiXCI9PXMuZGVzY3JpcHRpb24/ZyYmZy5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZy5wYXJlbnROb2RlKTooZCYmXCJcIiE9PXMudGl0bGU/KGQuaWQ9ZixkLmlubmVySFRNTD1zLnRpdGxlKTpkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksdSYmXCJcIiE9PXMuZGVzY3JpcHRpb24/KHUuaWQ9cCxsJiZuLm1vcmVMZW5ndGg+MD8ocy5zbWFsbERlc2NyaXB0aW9uPXRoaXMuc2xpZGVTaG9ydERlc2Mocy5kZXNjcmlwdGlvbixuLm1vcmVMZW5ndGgsbi5tb3JlVGV4dCksdS5pbm5lckhUTUw9cy5zbWFsbERlc2NyaXB0aW9uLHRoaXMuZGVzY3JpcHRpb25FdmVudHModSxzKSk6dS5pbm5lckhUTUw9cy5kZXNjcmlwdGlvbik6dS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHUpLGgoYS5wYXJlbnROb2RlLFwiZGVzYy1cIi5jb25jYXQocikpLGgoZy5wYXJlbnROb2RlLFwiZGVzY3JpcHRpb24tXCIuY29uY2F0KHIpKSksaChhLFwiZ3NsaWRlLVwiLmNvbmNhdChvKSksaCh0LFwibG9hZGVkXCIpLFwidmlkZW9cIiE9PW8pe2lmKFwiZXh0ZXJuYWxcIiE9PW8pcmV0dXJuXCJpbmxpbmVcIj09PW8/KEcuYXBwbHkodGhpcy5pbnN0YW5jZSxbdCxzLHRoaXMuaW5kZXgsdl0pLHZvaWQocy5kcmFnZ2FibGUmJm5ldyBWKHtkcmFnRWw6dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1pbmxpbmVcIiksdG9sZXJhbmNlWDpuLmRyYWdUb2xlcmFuY2VYLHRvbGVyYW5jZVk6bi5kcmFnVG9sZXJhbmNlWSxzbGlkZTp0LGluc3RhbmNlOnRoaXMuaW5zdGFuY2V9KSkpOnZvaWQoXCJpbWFnZVwiIT09bz9UKHYpJiZ2KCk6aih0LHMsdGhpcy5pbmRleCwoZnVuY3Rpb24oKXt2YXIgaT10LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7cy5kcmFnZ2FibGUmJm5ldyBWKHtkcmFnRWw6aSx0b2xlcmFuY2VYOm4uZHJhZ1RvbGVyYW5jZVgsdG9sZXJhbmNlWTpuLmRyYWdUb2xlcmFuY2VZLHNsaWRlOnQsaW5zdGFuY2U6ZS5pbnN0YW5jZX0pLHMuem9vbWFibGUmJmkubmF0dXJhbFdpZHRoPmkub2Zmc2V0V2lkdGgmJihoKGksXCJ6b29tYWJsZVwiKSxuZXcgSChpLHQsKGZ1bmN0aW9uKCl7ZS5pbnN0YW5jZS5yZXNpemUoKX0pKSksVCh2KSYmdigpfSkpKTtaLmFwcGx5KHRoaXMsW3Qscyx0aGlzLmluZGV4LHZdKX1lbHNlIEYuYXBwbHkodGhpcy5pbnN0YW5jZSxbdCxzLHRoaXMuaW5kZXgsdl0pfX0se2tleTpcInNsaWRlU2hvcnREZXNjXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjUwLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bi5pbm5lckhUTUw9ZTt2YXIgcz1uLmlubmVyVGV4dCxsPWk7aWYoKGU9cy50cmltKCkpLmxlbmd0aDw9dClyZXR1cm4gZTt2YXIgbz1lLnN1YnN0cigwLHQtMSk7cmV0dXJuIGw/KG49bnVsbCxvKycuLi4gPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRlc2MtbW9yZVwiPicraStcIjwvYT5cIik6b319LHtrZXk6XCJkZXNjcmlwdGlvbkV2ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcyxuPWUucXVlcnlTZWxlY3RvcihcIi5kZXNjLW1vcmVcIik7aWYoIW4pcmV0dXJuITE7YShcImNsaWNrXCIse29uRWxlbWVudDpuLHdpdGhDYWxsYmFjazpmdW5jdGlvbihlLG4pe2UucHJldmVudERlZmF1bHQoKTt2YXIgcz1kb2N1bWVudC5ib2R5LGw9dShuLFwiLmdzbGlkZS1kZXNjXCIpO2lmKCFsKXJldHVybiExO2wuaW5uZXJIVE1MPXQuZGVzY3JpcHRpb24saChzLFwiZ2Rlc2Mtb3BlblwiKTt2YXIgbz1hKFwiY2xpY2tcIix7b25FbGVtZW50OltzLHUobCxcIi5nc2xpZGUtZGVzY3JpcHRpb25cIildLHdpdGhDYWxsYmFjazpmdW5jdGlvbihlLG4pe1wiYVwiIT09ZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmKGQocyxcImdkZXNjLW9wZW5cIiksaChzLFwiZ2Rlc2MtY2xvc2VkXCIpLGwuaW5uZXJIVE1MPXQuc21hbGxEZXNjcmlwdGlvbixpLmRlc2NyaXB0aW9uRXZlbnRzKGwsdCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXtkKHMsXCJnZGVzYy1jbG9zZWRcIil9KSw0MDApLG8uZGVzdHJveSgpKX19KX19KX19LHtrZXk6XCJjcmVhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBtKHRoaXMuaW5zdGFuY2Uuc2V0dGluZ3Muc2xpZGVIVE1MKX19LHtrZXk6XCJnZXRDb25maWdcIix2YWx1ZTpmdW5jdGlvbigpe2sodGhpcy5lbGVtZW50KXx8dGhpcy5lbGVtZW50Lmhhc093blByb3BlcnR5KFwiZHJhZ2dhYmxlXCIpfHwodGhpcy5lbGVtZW50LmRyYWdnYWJsZT10aGlzLmluc3RhbmNlLnNldHRpbmdzLmRyYWdnYWJsZSk7dmFyIGU9bmV3IFUodGhpcy5pbnN0YW5jZS5zZXR0aW5ncy5zbGlkZUV4dHJhQXR0cmlidXRlcyk7cmV0dXJuIHRoaXMuc2xpZGVDb25maWc9ZS5wYXJzZUNvbmZpZyh0aGlzLmVsZW1lbnQsdGhpcy5pbnN0YW5jZS5zZXR0aW5ncyksdGhpcy5zbGlkZUNvbmZpZ319XSksZX0oKSxKPXcoKSxLPW51bGwhPT13KCl8fHZvaWQgMCE9PWRvY3VtZW50LmNyZWF0ZVRvdWNofHxcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHxcIm9ubXNnZXN0dXJlY2hhbmdlXCJpbiB3aW5kb3d8fG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzLFE9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLGVlPXtzZWxlY3RvcjpcIi5nbGlnaHRib3hcIixlbGVtZW50czpudWxsLHNraW46XCJjbGVhblwiLHRoZW1lOlwiY2xlYW5cIixjbG9zZUJ1dHRvbjohMCxzdGFydEF0Om51bGwsYXV0b3BsYXlWaWRlb3M6ITAsYXV0b2ZvY3VzVmlkZW9zOiEwLGRlc2NQb3NpdGlvbjpcImJvdHRvbVwiLHdpZHRoOlwiOTAwcHhcIixoZWlnaHQ6XCI1MDZweFwiLHZpZGVvc1dpZHRoOlwiOTYwcHhcIixiZWZvcmVTbGlkZUNoYW5nZTpudWxsLGFmdGVyU2xpZGVDaGFuZ2U6bnVsbCxiZWZvcmVTbGlkZUxvYWQ6bnVsbCxhZnRlclNsaWRlTG9hZDpudWxsLHNsaWRlSW5zZXJ0ZWQ6bnVsbCxzbGlkZVJlbW92ZWQ6bnVsbCxzbGlkZUV4dHJhQXR0cmlidXRlczpudWxsLG9uT3BlbjpudWxsLG9uQ2xvc2U6bnVsbCxsb29wOiExLHpvb21hYmxlOiEwLGRyYWdnYWJsZTohMCxkcmFnQXV0b1NuYXA6ITEsZHJhZ1RvbGVyYW5jZVg6NDAsZHJhZ1RvbGVyYW5jZVk6NjUscHJlbG9hZDohMCxvbmVTbGlkZVBlck9wZW46ITEsdG91Y2hOYXZpZ2F0aW9uOiEwLHRvdWNoRm9sbG93QXhpczohMCxrZXlib2FyZE5hdmlnYXRpb246ITAsY2xvc2VPbk91dHNpZGVDbGljazohMCxwbHVnaW5zOiExLHBseXI6e2NzczpcImh0dHBzOi8vY2RuLnBseXIuaW8vMy42LjEyL3BseXIuY3NzXCIsanM6XCJodHRwczovL2Nkbi5wbHlyLmlvLzMuNi4xMi9wbHlyLmpzXCIsY29uZmlnOntyYXRpbzpcIjE2OjlcIixmdWxsc2NyZWVuOntlbmFibGVkOiEwLGlvc05hdGl2ZTohMH0seW91dHViZTp7bm9Db29raWU6ITAscmVsOjAsc2hvd2luZm86MCxpdl9sb2FkX3BvbGljeTozfSx2aW1lbzp7YnlsaW5lOiExLHBvcnRyYWl0OiExLHRpdGxlOiExLHRyYW5zcGFyZW50OiExfX19LG9wZW5FZmZlY3Q6XCJ6b29tXCIsY2xvc2VFZmZlY3Q6XCJ6b29tXCIsc2xpZGVFZmZlY3Q6XCJzbGlkZVwiLG1vcmVUZXh0OlwiU2VlIG1vcmVcIixtb3JlTGVuZ3RoOjYwLGNzc0VmZWN0czp7ZmFkZTp7aW46XCJmYWRlSW5cIixvdXQ6XCJmYWRlT3V0XCJ9LHpvb206e2luOlwiem9vbUluXCIsb3V0Olwiem9vbU91dFwifSxzbGlkZTp7aW46XCJzbGlkZUluUmlnaHRcIixvdXQ6XCJzbGlkZU91dExlZnRcIn0sc2xpZGVCYWNrOntpbjpcInNsaWRlSW5MZWZ0XCIsb3V0Olwic2xpZGVPdXRSaWdodFwifSxub25lOntpbjpcIm5vbmVcIixvdXQ6XCJub25lXCJ9fSxzdmc6e2Nsb3NlOic8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGc+PGc+PHBhdGggZD1cIk01MDUuOTQzLDYuMDU4Yy04LjA3Ny04LjA3Ny0yMS4xNzItOC4wNzctMjkuMjQ5LDBMNi4wNTgsNDc2LjY5M2MtOC4wNzcsOC4wNzctOC4wNzcsMjEuMTcyLDAsMjkuMjQ5QzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNkM1MTQuMDE5LDI3LjIzLDUxNC4wMTksMTQuMTM1LDUwNS45NDMsNi4wNTh6XCIvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cIk01MDUuOTQyLDQ3Ni42OTRMMzUuMzA2LDYuMDU5Yy04LjA3Ni04LjA3Ny0yMS4xNzItOC4wNzctMjkuMjQ4LDBjLTguMDc3LDguMDc2LTguMDc3LDIxLjE3MSwwLDI5LjI0OGw0NzAuNjM2LDQ3MC42MzZjNC4wMzgsNC4wMzksOS4zMzIsNi4wNTgsMTQuNjI1LDYuMDU4YzUuMjkzLDAsMTAuNTg3LTIuMDE5LDE0LjYyNC02LjA1N0M1MTQuMDE4LDQ5Ny44NjYsNTE0LjAxOCw0ODQuNzcxLDUwNS45NDIsNDc2LjY5NHpcIi8+PC9nPjwvZz48L3N2Zz4nLG5leHQ6JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0NzcuMTc1IDQ3Ny4xNzVcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPiA8Zz48cGF0aCBkPVwiTTM2MC43MzEsMjI5LjA3NWwtMjI1LjEtMjI1LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwcy01LjMsMTMuOCwwLDE5LjFsMjE1LjUsMjE1LjVsLTIxNS41LDIxNS41Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0YzMuNCwwLDYuOS0xLjMsOS41LTRsMjI1LjEtMjI1LjFDMzY1LjkzMSwyNDIuODc1LDM2NS45MzEsMjM0LjI3NSwzNjAuNzMxLDIyOS4wNzV6XCIvPjwvZz48L3N2Zz4nLHByZXY6JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0NzcuMTc1IDQ3Ny4xNzVcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxnPjxwYXRoIGQ9XCJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjVjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXpcIi8+PC9nPjwvc3ZnPid9LHNsaWRlSFRNTDonPGRpdiBjbGFzcz1cImdzbGlkZVwiPlxcbiAgICA8ZGl2IGNsYXNzPVwiZ3NsaWRlLWlubmVyLWNvbnRlbnRcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnaW5uZXItY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdzbGlkZS1tZWRpYVwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnc2xpZGUtZGVzY3JpcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdkZXNjLWlubmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJnc2xpZGUtdGl0bGVcIj48L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdzbGlkZS1kZXNjXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PicsbGlnaHRib3hIVE1MOic8ZGl2IGlkPVwiZ2xpZ2h0Ym94LWJvZHlcIiBjbGFzcz1cImdsaWdodGJveC1jb250YWluZXJcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIj5cXG4gICAgPGRpdiBjbGFzcz1cImdsb2FkZXIgdmlzaWJsZVwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiZ292ZXJsYXlcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cImdjb250YWluZXJcIj5cXG4gICAgPGRpdiBpZD1cImdsaWdodGJveC1zbGlkZXJcIiBjbGFzcz1cImdzbGlkZXJcIj48L2Rpdj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cImdjbG9zZSBnYnRuXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgZGF0YS10YWJvcmRlcj1cIjNcIj57Y2xvc2VTVkd9PC9idXR0b24+XFxuICAgIDxidXR0b24gY2xhc3M9XCJncHJldiBnYnRuXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgZGF0YS10YWJvcmRlcj1cIjJcIj57cHJldlNWR308L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cImduZXh0IGdidG5cIiBhcmlhLWxhYmVsPVwiTmV4dFwiIGRhdGEtdGFib3JkZXI9XCIxXCI+e25leHRTVkd9PC9idXR0b24+XFxuPC9kaXY+XFxuPC9kaXY+J30sdGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGk9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3QodGhpcyxlKSx0aGlzLmN1c3RvbU9wdGlvbnM9aSx0aGlzLnNldHRpbmdzPWwoZWUsaSksdGhpcy5lZmZlY3RzQ2xhc3Nlcz10aGlzLmdldEFuaW1hdGlvbkNsYXNzZXMoKSx0aGlzLnZpZGVvUGxheWVycz17fSx0aGlzLmFwaUV2ZW50cz1bXSx0aGlzLmZ1bGxFbGVtZW50c0xpc3Q9ITF9cmV0dXJuIG4oZSxbe2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLmdldFNlbGVjdG9yKCk7dCYmKHRoaXMuYmFzZUV2ZW50cz1hKFwiY2xpY2tcIix7b25FbGVtZW50OnQsd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsaSl7dC5wcmV2ZW50RGVmYXVsdCgpLGUub3BlbihpKX19KSksdGhpcy5lbGVtZW50cz10aGlzLmdldEVsZW1lbnRzKCl9fSx7a2V5Olwib3BlblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGwsdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06bnVsbDtpZigwPT09dGhpcy5lbGVtZW50cy5sZW5ndGgpcmV0dXJuITE7dGhpcy5hY3RpdmVTbGlkZT1udWxsLHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXg9bnVsbCx0aGlzLnByZXZBY3RpdmVTbGlkZT1udWxsO3ZhciBpPU0odCk/dDp0aGlzLnNldHRpbmdzLnN0YXJ0QXQ7aWYoayhlKSl7dmFyIG49ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdhbGxlcnlcIik7biYmKHRoaXMuZnVsbEVsZW1lbnRzTGlzdD10aGlzLmVsZW1lbnRzLHRoaXMuZWxlbWVudHM9dGhpcy5nZXRHYWxsZXJ5RWxlbWVudHModGhpcy5lbGVtZW50cyxuKSksSShpKSYmKGk9dGhpcy5nZXRFbGVtZW50SW5kZXgoZSkpPDAmJihpPTApfU0oaSl8fChpPTApLHRoaXMuYnVpbGQoKSxnKHRoaXMub3ZlcmxheSxcIm5vbmVcIj09PXRoaXMuc2V0dGluZ3Mub3BlbkVmZmVjdD9cIm5vbmVcIjp0aGlzLnNldHRpbmdzLmNzc0VmZWN0cy5mYWRlLmluKTt2YXIgcz1kb2N1bWVudC5ib2R5LGw9d2luZG93LmlubmVyV2lkdGgtZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO2lmKGw+MCl7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO28udHlwZT1cInRleHQvY3NzXCIsby5jbGFzc05hbWU9XCJnY3NzLXN0eWxlc1wiLG8uaW5uZXJUZXh0PVwiLmdzY3JvbGxiYXItZml4ZXIge21hcmdpbi1yaWdodDogXCIuY29uY2F0KGwsXCJweH1cIiksZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChvKSxoKHMsXCJnc2Nyb2xsYmFyLWZpeGVyXCIpfWgocyxcImdsaWdodGJveC1vcGVuXCIpLGgoUSxcImdsaWdodGJveC1vcGVuXCIpLEomJihoKGRvY3VtZW50LmJvZHksXCJnbGlnaHRib3gtbW9iaWxlXCIpLHRoaXMuc2V0dGluZ3Muc2xpZGVFZmZlY3Q9XCJzbGlkZVwiKSx0aGlzLnNob3dTbGlkZShpLCEwKSwxPT09dGhpcy5lbGVtZW50cy5sZW5ndGg/KGgodGhpcy5wcmV2QnV0dG9uLFwiZ2xpZ2h0Ym94LWJ1dHRvbi1oaWRkZW5cIiksaCh0aGlzLm5leHRCdXR0b24sXCJnbGlnaHRib3gtYnV0dG9uLWhpZGRlblwiKSk6KGQodGhpcy5wcmV2QnV0dG9uLFwiZ2xpZ2h0Ym94LWJ1dHRvbi1oaWRkZW5cIiksZCh0aGlzLm5leHRCdXR0b24sXCJnbGlnaHRib3gtYnV0dG9uLWhpZGRlblwiKSksdGhpcy5saWdodGJveE9wZW49ITAsdGhpcy50cmlnZ2VyKFwib3BlblwiKSxUKHRoaXMuc2V0dGluZ3Mub25PcGVuKSYmdGhpcy5zZXR0aW5ncy5vbk9wZW4oKSxLJiZ0aGlzLnNldHRpbmdzLnRvdWNoTmF2aWdhdGlvbiYmQih0aGlzKSx0aGlzLnNldHRpbmdzLmtleWJvYXJkTmF2aWdhdGlvbiYmWCh0aGlzKX19LHtrZXk6XCJvcGVuQXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTowO3RoaXMub3BlbihudWxsLGUpfX0se2tleTpcInNob3dTbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTowLGk9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTtmKHRoaXMubG9hZGVyKSx0aGlzLmluZGV4PXBhcnNlSW50KHQpO3ZhciBuPXRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudFwiKTtuJiZkKG4sXCJjdXJyZW50XCIpLHRoaXMuc2xpZGVBbmltYXRlT3V0KCk7dmFyIHM9dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbdF07aWYoYyhzLFwibG9hZGVkXCIpKXRoaXMuc2xpZGVBbmltYXRlSW4ocyxpKSxwKHRoaXMubG9hZGVyKTtlbHNle2YodGhpcy5sb2FkZXIpO3ZhciBsPXRoaXMuZWxlbWVudHNbdF0sbz17aW5kZXg6dGhpcy5pbmRleCxzbGlkZTpzLHNsaWRlTm9kZTpzLHNsaWRlQ29uZmlnOmwuc2xpZGVDb25maWcsc2xpZGVJbmRleDp0aGlzLmluZGV4LHRyaWdnZXI6bC5ub2RlLHBsYXllcjpudWxsfTt0aGlzLnRyaWdnZXIoXCJzbGlkZV9iZWZvcmVfbG9hZFwiLG8pLGwuaW5zdGFuY2Uuc2V0Q29udGVudChzLChmdW5jdGlvbigpe3AoZS5sb2FkZXIpLGUucmVzaXplKCksZS5zbGlkZUFuaW1hdGVJbihzLGkpLGUudHJpZ2dlcihcInNsaWRlX2FmdGVyX2xvYWRcIixvKX0pKX10aGlzLnNsaWRlRGVzY3JpcHRpb249cy5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1kZXNjcmlwdGlvblwiKSx0aGlzLnNsaWRlRGVzY3JpcHRpb25Db250YWluZWQ9dGhpcy5zbGlkZURlc2NyaXB0aW9uJiZjKHRoaXMuc2xpZGVEZXNjcmlwdGlvbi5wYXJlbnROb2RlLFwiZ3NsaWRlLW1lZGlhXCIpLHRoaXMuc2V0dGluZ3MucHJlbG9hZCYmKHRoaXMucHJlbG9hZFNsaWRlKHQrMSksdGhpcy5wcmVsb2FkU2xpZGUodC0xKSksdGhpcy51cGRhdGVOYXZpZ2F0aW9uQ2xhc3NlcygpLHRoaXMuYWN0aXZlU2xpZGU9c319LHtrZXk6XCJwcmVsb2FkU2xpZGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKGU8MHx8ZT50aGlzLmVsZW1lbnRzLmxlbmd0aC0xKXJldHVybiExO2lmKEkodGhpcy5lbGVtZW50c1tlXSkpcmV0dXJuITE7dmFyIGk9dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbZV07aWYoYyhpLFwibG9hZGVkXCIpKXJldHVybiExO3ZhciBuPXRoaXMuZWxlbWVudHNbZV0scz1uLnR5cGUsbD17aW5kZXg6ZSxzbGlkZTppLHNsaWRlTm9kZTppLHNsaWRlQ29uZmlnOm4uc2xpZGVDb25maWcsc2xpZGVJbmRleDplLHRyaWdnZXI6bi5ub2RlLHBsYXllcjpudWxsfTt0aGlzLnRyaWdnZXIoXCJzbGlkZV9iZWZvcmVfbG9hZFwiLGwpLFwidmlkZW9cIj09PXN8fFwiZXh0ZXJuYWxcIj09PXM/c2V0VGltZW91dCgoZnVuY3Rpb24oKXtuLmluc3RhbmNlLnNldENvbnRlbnQoaSwoZnVuY3Rpb24oKXt0LnRyaWdnZXIoXCJzbGlkZV9hZnRlcl9sb2FkXCIsbCl9KSl9KSwyMDApOm4uaW5zdGFuY2Uuc2V0Q29udGVudChpLChmdW5jdGlvbigpe3QudHJpZ2dlcihcInNsaWRlX2FmdGVyX2xvYWRcIixsKX0pKX19LHtrZXk6XCJwcmV2U2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZ29Ub1NsaWRlKHRoaXMuaW5kZXgtMSl9fSx7a2V5OlwibmV4dFNsaWRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmdvVG9TbGlkZSh0aGlzLmluZGV4KzEpfX0se2tleTpcImdvVG9TbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtpZih0aGlzLnByZXZBY3RpdmVTbGlkZT10aGlzLmFjdGl2ZVNsaWRlLHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXg9dGhpcy5pbmRleCwhdGhpcy5sb29wKCkmJihlPDB8fGU+dGhpcy5lbGVtZW50cy5sZW5ndGgtMSkpcmV0dXJuITE7ZTwwP2U9dGhpcy5lbGVtZW50cy5sZW5ndGgtMTplPj10aGlzLmVsZW1lbnRzLmxlbmd0aCYmKGU9MCksdGhpcy5zaG93U2xpZGUoZSl9fSx7a2V5OlwiaW5zZXJ0U2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSx0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTotMTt0PDAmJih0PXRoaXMuZWxlbWVudHMubGVuZ3RoKTt2YXIgaT1uZXcgJChlLHRoaXMsdCksbj1pLmdldENvbmZpZygpLHM9bCh7fSxuKSxvPWkuY3JlYXRlKCkscj10aGlzLmVsZW1lbnRzLmxlbmd0aC0xO3MuaW5kZXg9dCxzLm5vZGU9ITEscy5pbnN0YW5jZT1pLHMuc2xpZGVDb25maWc9bix0aGlzLmVsZW1lbnRzLnNwbGljZSh0LDAscyk7dmFyIGE9bnVsbCxoPW51bGw7aWYodGhpcy5zbGlkZXNDb250YWluZXIpe2lmKHQ+cil0aGlzLnNsaWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvKTtlbHNle3ZhciBkPXRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3NsaWRlXCIpW3RdO3RoaXMuc2xpZGVzQ29udGFpbmVyLmluc2VydEJlZm9yZShvLGQpfSh0aGlzLnNldHRpbmdzLnByZWxvYWQmJjA9PXRoaXMuaW5kZXgmJjA9PXR8fHRoaXMuaW5kZXgtMT09dHx8dGhpcy5pbmRleCsxPT10KSYmdGhpcy5wcmVsb2FkU2xpZGUodCksMD09PXRoaXMuaW5kZXgmJjA9PT10JiYodGhpcy5pbmRleD0xKSx0aGlzLnVwZGF0ZU5hdmlnYXRpb25DbGFzc2VzKCksYT10aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmdzbGlkZVwiKVt0XSxoPXRoaXMuZ2V0U2xpZGVQbGF5ZXJJbnN0YW5jZSh0KSxzLnNsaWRlTm9kZT1hfXRoaXMudHJpZ2dlcihcInNsaWRlX2luc2VydGVkXCIse2luZGV4OnQsc2xpZGU6YSxzbGlkZU5vZGU6YSxzbGlkZUNvbmZpZzpuLHNsaWRlSW5kZXg6dCx0cmlnZ2VyOm51bGwscGxheWVyOmh9KSxUKHRoaXMuc2V0dGluZ3Muc2xpZGVJbnNlcnRlZCkmJnRoaXMuc2V0dGluZ3Muc2xpZGVJbnNlcnRlZCh7aW5kZXg6dCxzbGlkZTphLHBsYXllcjpofSl9fSx7a2V5OlwicmVtb3ZlU2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTotMTtpZihlPDB8fGU+dGhpcy5lbGVtZW50cy5sZW5ndGgtMSlyZXR1cm4hMTt2YXIgdD10aGlzLnNsaWRlc0NvbnRhaW5lciYmdGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbZV07dCYmKHRoaXMuZ2V0QWN0aXZlU2xpZGVJbmRleCgpPT1lJiYoZT09dGhpcy5lbGVtZW50cy5sZW5ndGgtMT90aGlzLnByZXZTbGlkZSgpOnRoaXMubmV4dFNsaWRlKCkpLHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSksdGhpcy5lbGVtZW50cy5zcGxpY2UoZSwxKSx0aGlzLnRyaWdnZXIoXCJzbGlkZV9yZW1vdmVkXCIsZSksVCh0aGlzLnNldHRpbmdzLnNsaWRlUmVtb3ZlZCkmJnRoaXMuc2V0dGluZ3Muc2xpZGVSZW1vdmVkKGUpfX0se2tleTpcInNsaWRlQW5pbWF0ZUluXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLG49ZS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxzPWUucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtZGVzY3JpcHRpb25cIiksbD17aW5kZXg6dGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleCxzbGlkZTp0aGlzLnByZXZBY3RpdmVTbGlkZSxzbGlkZU5vZGU6dGhpcy5wcmV2QWN0aXZlU2xpZGUsc2xpZGVJbmRleDp0aGlzLnByZXZBY3RpdmVTbGlkZSxzbGlkZUNvbmZpZzpJKHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXgpP251bGw6dGhpcy5lbGVtZW50c1t0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4XS5zbGlkZUNvbmZpZyx0cmlnZ2VyOkkodGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleCk/bnVsbDp0aGlzLmVsZW1lbnRzW3RoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXhdLm5vZGUscGxheWVyOnRoaXMuZ2V0U2xpZGVQbGF5ZXJJbnN0YW5jZSh0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4KX0sbz17aW5kZXg6dGhpcy5pbmRleCxzbGlkZTp0aGlzLmFjdGl2ZVNsaWRlLHNsaWRlTm9kZTp0aGlzLmFjdGl2ZVNsaWRlLHNsaWRlQ29uZmlnOnRoaXMuZWxlbWVudHNbdGhpcy5pbmRleF0uc2xpZGVDb25maWcsc2xpZGVJbmRleDp0aGlzLmluZGV4LHRyaWdnZXI6dGhpcy5lbGVtZW50c1t0aGlzLmluZGV4XS5ub2RlLHBsYXllcjp0aGlzLmdldFNsaWRlUGxheWVySW5zdGFuY2UodGhpcy5pbmRleCl9O2lmKG4ub2Zmc2V0V2lkdGg+MCYmcyYmKHAocykscy5zdHlsZS5kaXNwbGF5PVwiXCIpLGQoZSx0aGlzLmVmZmVjdHNDbGFzc2VzKSx0KWcoZSx0aGlzLnNldHRpbmdzLmNzc0VmZWN0c1t0aGlzLnNldHRpbmdzLm9wZW5FZmZlY3RdLmluLChmdW5jdGlvbigpe2kuc2V0dGluZ3MuYXV0b3BsYXlWaWRlb3MmJmkuc2xpZGVQbGF5ZXJQbGF5KGUpLGkudHJpZ2dlcihcInNsaWRlX2NoYW5nZWRcIix7cHJldjpsLGN1cnJlbnQ6b30pLFQoaS5zZXR0aW5ncy5hZnRlclNsaWRlQ2hhbmdlKSYmaS5zZXR0aW5ncy5hZnRlclNsaWRlQ2hhbmdlLmFwcGx5KGksW2wsb10pfSkpO2Vsc2V7dmFyIHI9dGhpcy5zZXR0aW5ncy5zbGlkZUVmZmVjdCxhPVwibm9uZVwiIT09cj90aGlzLnNldHRpbmdzLmNzc0VmZWN0c1tyXS5pbjpyO3RoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXg+dGhpcy5pbmRleCYmXCJzbGlkZVwiPT10aGlzLnNldHRpbmdzLnNsaWRlRWZmZWN0JiYoYT10aGlzLnNldHRpbmdzLmNzc0VmZWN0cy5zbGlkZUJhY2suaW4pLGcoZSxhLChmdW5jdGlvbigpe2kuc2V0dGluZ3MuYXV0b3BsYXlWaWRlb3MmJmkuc2xpZGVQbGF5ZXJQbGF5KGUpLGkudHJpZ2dlcihcInNsaWRlX2NoYW5nZWRcIix7cHJldjpsLGN1cnJlbnQ6b30pLFQoaS5zZXR0aW5ncy5hZnRlclNsaWRlQ2hhbmdlKSYmaS5zZXR0aW5ncy5hZnRlclNsaWRlQ2hhbmdlLmFwcGx5KGksW2wsb10pfSkpfXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7aS5yZXNpemUoZSl9KSwxMDApLGgoZSxcImN1cnJlbnRcIil9fSx7a2V5Olwic2xpZGVBbmltYXRlT3V0XCIsdmFsdWU6ZnVuY3Rpb24oKXtpZighdGhpcy5wcmV2QWN0aXZlU2xpZGUpcmV0dXJuITE7dmFyIGU9dGhpcy5wcmV2QWN0aXZlU2xpZGU7ZChlLHRoaXMuZWZmZWN0c0NsYXNzZXMpLGgoZSxcInByZXZcIik7dmFyIHQ9dGhpcy5zZXR0aW5ncy5zbGlkZUVmZmVjdCxpPVwibm9uZVwiIT09dD90aGlzLnNldHRpbmdzLmNzc0VmZWN0c1t0XS5vdXQ6dDt0aGlzLnNsaWRlUGxheWVyUGF1c2UoZSksdGhpcy50cmlnZ2VyKFwic2xpZGVfYmVmb3JlX2NoYW5nZVwiLHtwcmV2OntpbmRleDp0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4LHNsaWRlOnRoaXMucHJldkFjdGl2ZVNsaWRlLHNsaWRlTm9kZTp0aGlzLnByZXZBY3RpdmVTbGlkZSxzbGlkZUluZGV4OnRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXgsc2xpZGVDb25maWc6SSh0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4KT9udWxsOnRoaXMuZWxlbWVudHNbdGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleF0uc2xpZGVDb25maWcsdHJpZ2dlcjpJKHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXgpP251bGw6dGhpcy5lbGVtZW50c1t0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4XS5ub2RlLHBsYXllcjp0aGlzLmdldFNsaWRlUGxheWVySW5zdGFuY2UodGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleCl9LGN1cnJlbnQ6e2luZGV4OnRoaXMuaW5kZXgsc2xpZGU6dGhpcy5hY3RpdmVTbGlkZSxzbGlkZU5vZGU6dGhpcy5hY3RpdmVTbGlkZSxzbGlkZUluZGV4OnRoaXMuaW5kZXgsc2xpZGVDb25maWc6dGhpcy5lbGVtZW50c1t0aGlzLmluZGV4XS5zbGlkZUNvbmZpZyx0cmlnZ2VyOnRoaXMuZWxlbWVudHNbdGhpcy5pbmRleF0ubm9kZSxwbGF5ZXI6dGhpcy5nZXRTbGlkZVBsYXllckluc3RhbmNlKHRoaXMuaW5kZXgpfX0pLFQodGhpcy5zZXR0aW5ncy5iZWZvcmVTbGlkZUNoYW5nZSkmJnRoaXMuc2V0dGluZ3MuYmVmb3JlU2xpZGVDaGFuZ2UuYXBwbHkodGhpcyxbe2luZGV4OnRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXgsc2xpZGU6dGhpcy5wcmV2QWN0aXZlU2xpZGUscGxheWVyOnRoaXMuZ2V0U2xpZGVQbGF5ZXJJbnN0YW5jZSh0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4KX0se2luZGV4OnRoaXMuaW5kZXgsc2xpZGU6dGhpcy5hY3RpdmVTbGlkZSxwbGF5ZXI6dGhpcy5nZXRTbGlkZVBsYXllckluc3RhbmNlKHRoaXMuaW5kZXgpfV0pLHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXg+dGhpcy5pbmRleCYmXCJzbGlkZVwiPT10aGlzLnNldHRpbmdzLnNsaWRlRWZmZWN0JiYoaT10aGlzLnNldHRpbmdzLmNzc0VmZWN0cy5zbGlkZUJhY2sub3V0KSxnKGUsaSwoZnVuY3Rpb24oKXt2YXIgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ2lubmVyLWNvbnRhaW5lclwiKSxpPWUucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIiksbj1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWRlc2NyaXB0aW9uXCIpO3Quc3R5bGUudHJhbnNmb3JtPVwiXCIsaS5zdHlsZS50cmFuc2Zvcm09XCJcIixkKGksXCJncmVzZXRcIiksaS5zdHlsZS5vcGFjaXR5PVwiXCIsbiYmKG4uc3R5bGUub3BhY2l0eT1cIlwiKSxkKGUsXCJwcmV2XCIpfSkpfX0se2tleTpcImdldEFsbFBsYXllcnNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZpZGVvUGxheWVyc319LHtrZXk6XCJnZXRTbGlkZVBsYXllckluc3RhbmNlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJndmlkZW9cIitlLGk9dGhpcy5nZXRBbGxQbGF5ZXJzKCk7cmV0dXJuISghTyhpLHQpfHwhaVt0XSkmJmlbdF19fSx7a2V5Olwic3RvcFNsaWRlVmlkZW9cIix2YWx1ZTpmdW5jdGlvbihlKXtpZihrKGUpKXt2YXIgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3ZpZGVvLXdyYXBwZXJcIik7dCYmKGU9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKX1jb25zb2xlLmxvZyhcInN0b3BTbGlkZVZpZGVvIGlzIGRlcHJlY2F0ZWQsIHVzZSBzbGlkZVBsYXllclBhdXNlXCIpO3ZhciBpPXRoaXMuZ2V0U2xpZGVQbGF5ZXJJbnN0YW5jZShlKTtpJiZpLnBsYXlpbmcmJmkucGF1c2UoKX19LHtrZXk6XCJzbGlkZVBsYXllclBhdXNlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoayhlKSl7dmFyIHQ9ZS5xdWVyeVNlbGVjdG9yKFwiLmd2aWRlby13cmFwcGVyXCIpO3QmJihlPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSl9dmFyIGk9dGhpcy5nZXRTbGlkZVBsYXllckluc3RhbmNlKGUpO2kmJmkucGxheWluZyYmaS5wYXVzZSgpfX0se2tleTpcInBsYXlTbGlkZVZpZGVvXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoayhlKSl7dmFyIHQ9ZS5xdWVyeVNlbGVjdG9yKFwiLmd2aWRlby13cmFwcGVyXCIpO3QmJihlPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSl9Y29uc29sZS5sb2coXCJwbGF5U2xpZGVWaWRlbyBpcyBkZXByZWNhdGVkLCB1c2Ugc2xpZGVQbGF5ZXJQbGF5XCIpO3ZhciBpPXRoaXMuZ2V0U2xpZGVQbGF5ZXJJbnN0YW5jZShlKTtpJiYhaS5wbGF5aW5nJiZpLnBsYXkoKX19LHtrZXk6XCJzbGlkZVBsYXllclBsYXlcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdDtpZighSnx8bnVsbCE9PSh0PXRoaXMuc2V0dGluZ3MucGx5ci5jb25maWcpJiZ2b2lkIDAhPT10JiZ0Lm11dGVkKXtpZihrKGUpKXt2YXIgaT1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3ZpZGVvLXdyYXBwZXJcIik7aSYmKGU9aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKX12YXIgbj10aGlzLmdldFNsaWRlUGxheWVySW5zdGFuY2UoZSk7biYmIW4ucGxheWluZyYmKG4ucGxheSgpLHRoaXMuc2V0dGluZ3MuYXV0b2ZvY3VzVmlkZW9zJiZuLmVsZW1lbnRzLmNvbnRhaW5lci5mb2N1cygpKX19fSx7a2V5Olwic2V0RWxlbWVudHNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3RoaXMuc2V0dGluZ3MuZWxlbWVudHM9ITE7dmFyIGk9W107ZSYmZS5sZW5ndGgmJm8oZSwoZnVuY3Rpb24oZSxuKXt2YXIgcz1uZXcgJChlLHQsbiksbz1zLmdldENvbmZpZygpLHI9bCh7fSxvKTtyLnNsaWRlQ29uZmlnPW8sci5pbnN0YW5jZT1zLHIuaW5kZXg9bixpLnB1c2gocil9KSksdGhpcy5lbGVtZW50cz1pLHRoaXMubGlnaHRib3hPcGVuJiYodGhpcy5zbGlkZXNDb250YWluZXIuaW5uZXJIVE1MPVwiXCIsdGhpcy5lbGVtZW50cy5sZW5ndGgmJihvKHRoaXMuZWxlbWVudHMsKGZ1bmN0aW9uKCl7dmFyIGU9bSh0LnNldHRpbmdzLnNsaWRlSFRNTCk7dC5zbGlkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZSl9KSksdGhpcy5zaG93U2xpZGUoMCwhMCkpKX19LHtrZXk6XCJnZXRFbGVtZW50SW5kZXhcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD0hMTtyZXR1cm4gbyh0aGlzLmVsZW1lbnRzLChmdW5jdGlvbihpLG4pe2lmKE8oaSxcIm5vZGVcIikmJmkubm9kZT09ZSlyZXR1cm4gdD1uLCEwfSkpLHR9fSx7a2V5OlwiZ2V0RWxlbWVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1bXTt0aGlzLmVsZW1lbnRzPXRoaXMuZWxlbWVudHM/dGhpcy5lbGVtZW50czpbXSwhSSh0aGlzLnNldHRpbmdzLmVsZW1lbnRzKSYmRSh0aGlzLnNldHRpbmdzLmVsZW1lbnRzKSYmdGhpcy5zZXR0aW5ncy5lbGVtZW50cy5sZW5ndGgmJm8odGhpcy5zZXR0aW5ncy5lbGVtZW50cywoZnVuY3Rpb24oaSxuKXt2YXIgcz1uZXcgJChpLGUsbiksbz1zLmdldENvbmZpZygpLHI9bCh7fSxvKTtyLm5vZGU9ITEsci5pbmRleD1uLHIuaW5zdGFuY2U9cyxyLnNsaWRlQ29uZmlnPW8sdC5wdXNoKHIpfSkpO3ZhciBpPSExO3JldHVybiB0aGlzLmdldFNlbGVjdG9yKCkmJihpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRTZWxlY3RvcigpKSksaT8obyhpLChmdW5jdGlvbihpLG4pe3ZhciBzPW5ldyAkKGksZSxuKSxvPXMuZ2V0Q29uZmlnKCkscj1sKHt9LG8pO3Iubm9kZT1pLHIuaW5kZXg9bixyLmluc3RhbmNlPXMsci5zbGlkZUNvbmZpZz1vLHIuZ2FsbGVyeT1pLmdldEF0dHJpYnV0ZShcImRhdGEtZ2FsbGVyeVwiKSx0LnB1c2gocil9KSksdCk6dH19LHtrZXk6XCJnZXRHYWxsZXJ5RWxlbWVudHNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiBlLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2FsbGVyeT09dH0pKX19LHtrZXk6XCJnZXRTZWxlY3RvclwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuc2V0dGluZ3MuZWxlbWVudHMmJih0aGlzLnNldHRpbmdzLnNlbGVjdG9yJiZcImRhdGEtXCI9PXRoaXMuc2V0dGluZ3Muc2VsZWN0b3Iuc3Vic3RyaW5nKDAsNSk/XCIqW1wiLmNvbmNhdCh0aGlzLnNldHRpbmdzLnNlbGVjdG9yLFwiXVwiKTp0aGlzLnNldHRpbmdzLnNlbGVjdG9yKX19LHtrZXk6XCJnZXRBY3RpdmVTbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3NsaWRlXCIpW3RoaXMuaW5kZXhdfX0se2tleTpcImdldEFjdGl2ZVNsaWRlSW5kZXhcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluZGV4fX0se2tleTpcImdldEFuaW1hdGlvbkNsYXNzZXNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPVtdO2Zvcih2YXIgdCBpbiB0aGlzLnNldHRpbmdzLmNzc0VmZWN0cylpZih0aGlzLnNldHRpbmdzLmNzc0VmZWN0cy5oYXNPd25Qcm9wZXJ0eSh0KSl7dmFyIGk9dGhpcy5zZXR0aW5ncy5jc3NFZmVjdHNbdF07ZS5wdXNoKFwiZ1wiLmNvbmNhdChpLmluKSksZS5wdXNoKFwiZ1wiLmNvbmNhdChpLm91dCkpfXJldHVybiBlLmpvaW4oXCIgXCIpfX0se2tleTpcImJ1aWxkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKHRoaXMuYnVpbHQpcmV0dXJuITE7dmFyIHQ9ZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzLGk9W107byh0LChmdW5jdGlvbihlKXtlLnBhcmVudE5vZGU9PWRvY3VtZW50LmJvZHkmJlwiI1wiIT09ZS5ub2RlTmFtZS5jaGFyQXQoMCkmJmUuaGFzQXR0cmlidXRlJiYhZS5oYXNBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSYmKGkucHVzaChlKSxlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKX0pKTt2YXIgbj1PKHRoaXMuc2V0dGluZ3Muc3ZnLFwibmV4dFwiKT90aGlzLnNldHRpbmdzLnN2Zy5uZXh0OlwiXCIscz1PKHRoaXMuc2V0dGluZ3Muc3ZnLFwicHJldlwiKT90aGlzLnNldHRpbmdzLnN2Zy5wcmV2OlwiXCIsbD1PKHRoaXMuc2V0dGluZ3Muc3ZnLFwiY2xvc2VcIik/dGhpcy5zZXR0aW5ncy5zdmcuY2xvc2U6XCJcIixyPXRoaXMuc2V0dGluZ3MubGlnaHRib3hIVE1MO3I9bShyPShyPShyPXIucmVwbGFjZSgve25leHRTVkd9L2csbikpLnJlcGxhY2UoL3twcmV2U1ZHfS9nLHMpKS5yZXBsYWNlKC97Y2xvc2VTVkd9L2csbCkpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocik7dmFyIGQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbGlnaHRib3gtYm9keVwiKTt0aGlzLm1vZGFsPWQ7dmFyIGc9ZC5xdWVyeVNlbGVjdG9yKFwiLmdjbG9zZVwiKTt0aGlzLnByZXZCdXR0b249ZC5xdWVyeVNlbGVjdG9yKFwiLmdwcmV2XCIpLHRoaXMubmV4dEJ1dHRvbj1kLnF1ZXJ5U2VsZWN0b3IoXCIuZ25leHRcIiksdGhpcy5vdmVybGF5PWQucXVlcnlTZWxlY3RvcihcIi5nb3ZlcmxheVwiKSx0aGlzLmxvYWRlcj1kLnF1ZXJ5U2VsZWN0b3IoXCIuZ2xvYWRlclwiKSx0aGlzLnNsaWRlc0NvbnRhaW5lcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsaWdodGJveC1zbGlkZXJcIiksdGhpcy5ib2R5SGlkZGVuQ2hpbGRFbG1zPWksdGhpcy5ldmVudHM9e30saCh0aGlzLm1vZGFsLFwiZ2xpZ2h0Ym94LVwiK3RoaXMuc2V0dGluZ3Muc2tpbiksdGhpcy5zZXR0aW5ncy5jbG9zZUJ1dHRvbiYmZyYmKHRoaXMuZXZlbnRzLmNsb3NlPWEoXCJjbGlja1wiLHtvbkVsZW1lbnQ6Zyx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24odCxpKXt0LnByZXZlbnREZWZhdWx0KCksZS5jbG9zZSgpfX0pKSxnJiYhdGhpcy5zZXR0aW5ncy5jbG9zZUJ1dHRvbiYmZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGcpLHRoaXMubmV4dEJ1dHRvbiYmKHRoaXMuZXZlbnRzLm5leHQ9YShcImNsaWNrXCIse29uRWxlbWVudDp0aGlzLm5leHRCdXR0b24sd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsaSl7dC5wcmV2ZW50RGVmYXVsdCgpLGUubmV4dFNsaWRlKCl9fSkpLHRoaXMucHJldkJ1dHRvbiYmKHRoaXMuZXZlbnRzLnByZXY9YShcImNsaWNrXCIse29uRWxlbWVudDp0aGlzLnByZXZCdXR0b24sd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsaSl7dC5wcmV2ZW50RGVmYXVsdCgpLGUucHJldlNsaWRlKCl9fSkpLHRoaXMuc2V0dGluZ3MuY2xvc2VPbk91dHNpZGVDbGljayYmKHRoaXMuZXZlbnRzLm91dENsb3NlPWEoXCJjbGlja1wiLHtvbkVsZW1lbnQ6ZCx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24odCxpKXtlLnByZXZlbnRPdXRzaWRlQ2xpY2t8fGMoZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC1tb2JpbGVcIil8fHUodC50YXJnZXQsXCIuZ2lubmVyLWNvbnRhaW5lclwiKXx8dSh0LnRhcmdldCxcIi5nYnRuXCIpfHxjKHQudGFyZ2V0LFwiZ25leHRcIil8fGModC50YXJnZXQsXCJncHJldlwiKXx8ZS5jbG9zZSgpfX0pKSxvKHRoaXMuZWxlbWVudHMsKGZ1bmN0aW9uKHQsaSl7ZS5zbGlkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQodC5pbnN0YW5jZS5jcmVhdGUoKSksdC5zbGlkZU5vZGU9ZS5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbaV19KSksSyYmaChkb2N1bWVudC5ib2R5LFwiZ2xpZ2h0Ym94LXRvdWNoXCIpLHRoaXMuZXZlbnRzLnJlc2l6ZT1hKFwicmVzaXplXCIse29uRWxlbWVudDp3aW5kb3csd2l0aENhbGxiYWNrOmZ1bmN0aW9uKCl7ZS5yZXNpemUoKX19KSx0aGlzLmJ1aWx0PSEwfX0se2tleTpcInJlc2l6ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGw7aWYoKGU9ZXx8dGhpcy5hY3RpdmVTbGlkZSkmJiFjKGUsXCJ6b29tZWRcIikpe3ZhciB0PXkoKSxpPWUucXVlcnlTZWxlY3RvcihcIi5ndmlkZW8td3JhcHBlclwiKSxuPWUucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtaW1hZ2VcIikscz10aGlzLnNsaWRlRGVzY3JpcHRpb24sbD10LndpZHRoLG89dC5oZWlnaHQ7aWYobDw9NzY4P2goZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC1tb2JpbGVcIik6ZChkb2N1bWVudC5ib2R5LFwiZ2xpZ2h0Ym94LW1vYmlsZVwiKSxpfHxuKXt2YXIgcj0hMTtpZihzJiYoYyhzLFwiZGVzY3JpcHRpb24tYm90dG9tXCIpfHxjKHMsXCJkZXNjcmlwdGlvbi10b3BcIikpJiYhYyhzLFwiZ2Fic29sdXRlXCIpJiYocj0hMCksbilpZihsPD03Njgpbi5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO2Vsc2UgaWYocil7dmFyIGE9cy5vZmZzZXRIZWlnaHQsdT1uLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7dS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwibWF4LWhlaWdodDogY2FsYygxMDB2aCAtIFwiLmNvbmNhdChhLFwicHgpXCIpKSxzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJtYXgtd2lkdGg6IFwiLmNvbmNhdCh1Lm9mZnNldFdpZHRoLFwicHg7XCIpKX1pZihpKXt2YXIgZz1PKHRoaXMuc2V0dGluZ3MucGx5ci5jb25maWcsXCJyYXRpb1wiKT90aGlzLnNldHRpbmdzLnBseXIuY29uZmlnLnJhdGlvOlwiXCI7aWYoIWcpe3ZhciB2PWkuY2xpZW50V2lkdGgsZj1pLmNsaWVudEhlaWdodCxwPXYvZjtnPVwiXCIuY29uY2F0KHYvcCxcIjpcIikuY29uY2F0KGYvcCl9dmFyIG09Zy5zcGxpdChcIjpcIikseD10aGlzLnNldHRpbmdzLnZpZGVvc1dpZHRoLGI9dGhpcy5zZXR0aW5ncy52aWRlb3NXaWR0aCxTPShiPU0oeCl8fC0xIT09eC5pbmRleE9mKFwicHhcIik/cGFyc2VJbnQoeCk6LTEhPT14LmluZGV4T2YoXCJ2d1wiKT9sKnBhcnNlSW50KHgpLzEwMDotMSE9PXguaW5kZXhPZihcInZoXCIpP28qcGFyc2VJbnQoeCkvMTAwOi0xIT09eC5pbmRleE9mKFwiJVwiKT9sKnBhcnNlSW50KHgpLzEwMDpwYXJzZUludChpLmNsaWVudFdpZHRoKSkvKHBhcnNlSW50KG1bMF0pL3BhcnNlSW50KG1bMV0pKTtpZihTPU1hdGguZmxvb3IoUyksciYmKG8tPXMub2Zmc2V0SGVpZ2h0KSxiPmx8fFM+b3x8bzxTJiZsPmIpe3ZhciB3PWkub2Zmc2V0V2lkdGgsVD1pLm9mZnNldEhlaWdodCxDPW8vVCxrPXt3aWR0aDp3KkMsaGVpZ2h0OlQqQ307aS5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJtYXgtd2lkdGg6IFwiLmNvbmNhdChrLndpZHRoLFwicHhcIikpLHImJnMuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIm1heC13aWR0aDogXCIuY29uY2F0KGsud2lkdGgsXCJweDtcIikpfWVsc2UgaS5wYXJlbnROb2RlLnN0eWxlLm1heFdpZHRoPVwiXCIuY29uY2F0KHgpLHImJnMuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIm1heC13aWR0aDogXCIuY29uY2F0KHgsXCI7XCIpKX19fX19LHtrZXk6XCJyZWxvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaW5pdCgpfX0se2tleTpcInVwZGF0ZU5hdmlnYXRpb25DbGFzc2VzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxvb3AoKTtkKHRoaXMubmV4dEJ1dHRvbixcImRpc2FibGVkXCIpLGQodGhpcy5wcmV2QnV0dG9uLFwiZGlzYWJsZWRcIiksMD09dGhpcy5pbmRleCYmdGhpcy5lbGVtZW50cy5sZW5ndGgtMT09MD8oaCh0aGlzLnByZXZCdXR0b24sXCJkaXNhYmxlZFwiKSxoKHRoaXMubmV4dEJ1dHRvbixcImRpc2FibGVkXCIpKTowIT09dGhpcy5pbmRleHx8ZT90aGlzLmluZGV4IT09dGhpcy5lbGVtZW50cy5sZW5ndGgtMXx8ZXx8aCh0aGlzLm5leHRCdXR0b24sXCJkaXNhYmxlZFwiKTpoKHRoaXMucHJldkJ1dHRvbixcImRpc2FibGVkXCIpfX0se2tleTpcImxvb3BcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPU8odGhpcy5zZXR0aW5ncyxcImxvb3BBdEVuZFwiKT90aGlzLnNldHRpbmdzLmxvb3BBdEVuZDpudWxsO3JldHVybiBlPU8odGhpcy5zZXR0aW5ncyxcImxvb3BcIik/dGhpcy5zZXR0aW5ncy5sb29wOmUsZX19LHtrZXk6XCJjbG9zZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZighdGhpcy5saWdodGJveE9wZW4pe2lmKHRoaXMuZXZlbnRzKXtmb3IodmFyIHQgaW4gdGhpcy5ldmVudHMpdGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkodCkmJnRoaXMuZXZlbnRzW3RdLmRlc3Ryb3koKTt0aGlzLmV2ZW50cz1udWxsfXJldHVybiExfWlmKHRoaXMuY2xvc2luZylyZXR1cm4hMTt0aGlzLmNsb3Npbmc9ITAsdGhpcy5zbGlkZVBsYXllclBhdXNlKHRoaXMuYWN0aXZlU2xpZGUpLHRoaXMuZnVsbEVsZW1lbnRzTGlzdCYmKHRoaXMuZWxlbWVudHM9dGhpcy5mdWxsRWxlbWVudHNMaXN0KSx0aGlzLmJvZHlIaWRkZW5DaGlsZEVsbXMubGVuZ3RoJiZvKHRoaXMuYm9keUhpZGRlbkNoaWxkRWxtcywoZnVuY3Rpb24oZSl7ZS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKX0pKSxoKHRoaXMubW9kYWwsXCJnbGlnaHRib3gtY2xvc2luZ1wiKSxnKHRoaXMub3ZlcmxheSxcIm5vbmVcIj09dGhpcy5zZXR0aW5ncy5vcGVuRWZmZWN0P1wibm9uZVwiOnRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzLmZhZGUub3V0KSxnKHRoaXMuYWN0aXZlU2xpZGUsdGhpcy5zZXR0aW5ncy5jc3NFZmVjdHNbdGhpcy5zZXR0aW5ncy5jbG9zZUVmZmVjdF0ub3V0LChmdW5jdGlvbigpe2lmKGUuYWN0aXZlU2xpZGU9bnVsbCxlLnByZXZBY3RpdmVTbGlkZUluZGV4PW51bGwsZS5wcmV2QWN0aXZlU2xpZGU9bnVsbCxlLmJ1aWx0PSExLGUuZXZlbnRzKXtmb3IodmFyIHQgaW4gZS5ldmVudHMpZS5ldmVudHMuaGFzT3duUHJvcGVydHkodCkmJmUuZXZlbnRzW3RdLmRlc3Ryb3koKTtlLmV2ZW50cz1udWxsfXZhciBpPWRvY3VtZW50LmJvZHk7ZChRLFwiZ2xpZ2h0Ym94LW9wZW5cIiksZChpLFwiZ2xpZ2h0Ym94LW9wZW4gdG91Y2hpbmcgZ2Rlc2Mtb3BlbiBnbGlnaHRib3gtdG91Y2ggZ2xpZ2h0Ym94LW1vYmlsZSBnc2Nyb2xsYmFyLWZpeGVyXCIpLGUubW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlLm1vZGFsKSxlLnRyaWdnZXIoXCJjbG9zZVwiKSxUKGUuc2V0dGluZ3Mub25DbG9zZSkmJmUuc2V0dGluZ3Mub25DbG9zZSgpO3ZhciBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2Nzcy1zdHlsZXNcIik7biYmbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pLGUubGlnaHRib3hPcGVuPSExLGUuY2xvc2luZz1udWxsfSkpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuY2xvc2UoKSx0aGlzLmNsZWFyQWxsRXZlbnRzKCksdGhpcy5iYXNlRXZlbnRzJiZ0aGlzLmJhc2VFdmVudHMuZGVzdHJveSgpfX0se2tleTpcIm9uXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgaT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO2lmKCFlfHwhVCh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXZlbnQgbmFtZSBhbmQgY2FsbGJhY2sgbXVzdCBiZSBkZWZpbmVkXCIpO3RoaXMuYXBpRXZlbnRzLnB1c2goe2V2dDplLG9uY2U6aSxjYWxsYmFjazp0fSl9fSx7a2V5Olwib25jZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5vbihlLHQsITApfX0se2tleTpcInRyaWdnZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm51bGwsbj1bXTtvKHRoaXMuYXBpRXZlbnRzLChmdW5jdGlvbih0LHMpe3ZhciBsPXQuZXZ0LG89dC5vbmNlLHI9dC5jYWxsYmFjaztsPT1lJiYocihpKSxvJiZuLnB1c2gocykpfSkpLG4ubGVuZ3RoJiZvKG4sKGZ1bmN0aW9uKGUpe3JldHVybiB0LmFwaUV2ZW50cy5zcGxpY2UoZSwxKX0pKX19LHtrZXk6XCJjbGVhckFsbEV2ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hcGlFdmVudHMuc3BsaWNlKDAsdGhpcy5hcGlFdmVudHMubGVuZ3RoKX19LHtrZXk6XCJ2ZXJzaW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cIjMuMS4wXCJ9fV0pLGV9KCk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9bmV3IHRlKGUpO3JldHVybiB0LmluaXQoKSx0fX0pKTtcclxuXHJcbn0iLCIvKiFcclxuICogSXNvdG9wZSBQQUNLQUdFRCB2My4wLjZcclxuICpcclxuICogTGljZW5zZWQgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZVxyXG4gKiBvciBJc290b3BlIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcclxuICpcclxuICogaHR0cHM6Ly9pc290b3BlLm1ldGFmaXp6eS5jb1xyXG4gKiBDb3B5cmlnaHQgMjAxMC0yMDE4IE1ldGFmaXp6eVxyXG4gKi9cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIFxyXG4hZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwianF1ZXJ5LWJyaWRnZXQvanF1ZXJ5LWJyaWRnZXRcIixbXCJqcXVlcnlcIl0sZnVuY3Rpb24oaSl7cmV0dXJuIGUodCxpKX0pOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUodCxyZXF1aXJlKFwianF1ZXJ5XCIpKTp0LmpRdWVyeUJyaWRnZXQ9ZSh0LHQualF1ZXJ5KX0od2luZG93LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaShpLHMsYSl7ZnVuY3Rpb24gdSh0LGUsbyl7dmFyIG4scz1cIiQoKS5cIitpKycoXCInK2UrJ1wiKSc7cmV0dXJuIHQuZWFjaChmdW5jdGlvbih0LHUpe3ZhciBoPWEuZGF0YSh1LGkpO2lmKCFoKXJldHVybiB2b2lkIHIoaStcIiBub3QgaW5pdGlhbGl6ZWQuIENhbm5vdCBjYWxsIG1ldGhvZHMsIGkuZS4gXCIrcyk7dmFyIGQ9aFtlXTtpZighZHx8XCJfXCI9PWUuY2hhckF0KDApKXJldHVybiB2b2lkIHIocytcIiBpcyBub3QgYSB2YWxpZCBtZXRob2RcIik7dmFyIGw9ZC5hcHBseShoLG8pO249dm9pZCAwPT09bj9sOm59KSx2b2lkIDAhPT1uP246dH1mdW5jdGlvbiBoKHQsZSl7dC5lYWNoKGZ1bmN0aW9uKHQsbyl7dmFyIG49YS5kYXRhKG8saSk7bj8obi5vcHRpb24oZSksbi5faW5pdCgpKToobj1uZXcgcyhvLGUpLGEuZGF0YShvLGksbikpfSl9YT1hfHxlfHx0LmpRdWVyeSxhJiYocy5wcm90b3R5cGUub3B0aW9ufHwocy5wcm90b3R5cGUub3B0aW9uPWZ1bmN0aW9uKHQpe2EuaXNQbGFpbk9iamVjdCh0KSYmKHRoaXMub3B0aW9ucz1hLmV4dGVuZCghMCx0aGlzLm9wdGlvbnMsdCkpfSksYS5mbltpXT1mdW5jdGlvbih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIGU9bi5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm4gdSh0aGlzLHQsZSl9cmV0dXJuIGgodGhpcyx0KSx0aGlzfSxvKGEpKX1mdW5jdGlvbiBvKHQpeyF0fHx0JiZ0LmJyaWRnZXR8fCh0LmJyaWRnZXQ9aSl9dmFyIG49QXJyYXkucHJvdG90eXBlLnNsaWNlLHM9dC5jb25zb2xlLHI9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHM/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKHQpe3MuZXJyb3IodCl9O3JldHVybiBvKGV8fHQualF1ZXJ5KSxpfSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZXYtZW1pdHRlci9ldi1lbWl0dGVyXCIsZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSgpOnQuRXZFbWl0dGVyPWUoKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9dmFyIGU9dC5wcm90b3R5cGU7cmV0dXJuIGUub249ZnVuY3Rpb24odCxlKXtpZih0JiZlKXt2YXIgaT10aGlzLl9ldmVudHM9dGhpcy5fZXZlbnRzfHx7fSxvPWlbdF09aVt0XXx8W107cmV0dXJuIG8uaW5kZXhPZihlKT09LTEmJm8ucHVzaChlKSx0aGlzfX0sZS5vbmNlPWZ1bmN0aW9uKHQsZSl7aWYodCYmZSl7dGhpcy5vbih0LGUpO3ZhciBpPXRoaXMuX29uY2VFdmVudHM9dGhpcy5fb25jZUV2ZW50c3x8e30sbz1pW3RdPWlbdF18fHt9O3JldHVybiBvW2VdPSEwLHRoaXN9fSxlLm9mZj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuX2V2ZW50cyYmdGhpcy5fZXZlbnRzW3RdO2lmKGkmJmkubGVuZ3RoKXt2YXIgbz1pLmluZGV4T2YoZSk7cmV0dXJuIG8hPS0xJiZpLnNwbGljZShvLDEpLHRoaXN9fSxlLmVtaXRFdmVudD1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuX2V2ZW50cyYmdGhpcy5fZXZlbnRzW3RdO2lmKGkmJmkubGVuZ3RoKXtpPWkuc2xpY2UoMCksZT1lfHxbXTtmb3IodmFyIG89dGhpcy5fb25jZUV2ZW50cyYmdGhpcy5fb25jZUV2ZW50c1t0XSxuPTA7bjxpLmxlbmd0aDtuKyspe3ZhciBzPWlbbl0scj1vJiZvW3NdO3ImJih0aGlzLm9mZih0LHMpLGRlbGV0ZSBvW3NdKSxzLmFwcGx5KHRoaXMsZSl9cmV0dXJuIHRoaXN9fSxlLmFsbE9mZj1mdW5jdGlvbigpe2RlbGV0ZSB0aGlzLl9ldmVudHMsZGVsZXRlIHRoaXMuX29uY2VFdmVudHN9LHR9KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUoKTp0LmdldFNpemU9ZSgpfSh3aW5kb3csZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3ZhciBlPXBhcnNlRmxvYXQodCksaT10LmluZGV4T2YoXCIlXCIpPT0tMSYmIWlzTmFOKGUpO3JldHVybiBpJiZlfWZ1bmN0aW9uIGUoKXt9ZnVuY3Rpb24gaSgpe2Zvcih2YXIgdD17d2lkdGg6MCxoZWlnaHQ6MCxpbm5lcldpZHRoOjAsaW5uZXJIZWlnaHQ6MCxvdXRlcldpZHRoOjAsb3V0ZXJIZWlnaHQ6MH0sZT0wO2U8aDtlKyspe3ZhciBpPXVbZV07dFtpXT0wfXJldHVybiB0fWZ1bmN0aW9uIG8odCl7dmFyIGU9Z2V0Q29tcHV0ZWRTdHlsZSh0KTtyZXR1cm4gZXx8YShcIlN0eWxlIHJldHVybmVkIFwiK2UrXCIuIEFyZSB5b3UgcnVubmluZyB0aGlzIGNvZGUgaW4gYSBoaWRkZW4gaWZyYW1lIG9uIEZpcmVmb3g/IFNlZSBodHRwczovL2JpdC5seS9nZXRzaXplYnVnMVwiKSxlfWZ1bmN0aW9uIG4oKXtpZighZCl7ZD0hMDt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Uuc3R5bGUud2lkdGg9XCIyMDBweFwiLGUuc3R5bGUucGFkZGluZz1cIjFweCAycHggM3B4IDRweFwiLGUuc3R5bGUuYm9yZGVyU3R5bGU9XCJzb2xpZFwiLGUuc3R5bGUuYm9yZGVyV2lkdGg9XCIxcHggMnB4IDNweCA0cHhcIixlLnN0eWxlLmJveFNpemluZz1cImJvcmRlci1ib3hcIjt2YXIgaT1kb2N1bWVudC5ib2R5fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7aS5hcHBlbmRDaGlsZChlKTt2YXIgbj1vKGUpO3I9MjAwPT1NYXRoLnJvdW5kKHQobi53aWR0aCkpLHMuaXNCb3hTaXplT3V0ZXI9cixpLnJlbW92ZUNoaWxkKGUpfX1mdW5jdGlvbiBzKGUpe2lmKG4oKSxcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKSksZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUubm9kZVR5cGUpe3ZhciBzPW8oZSk7aWYoXCJub25lXCI9PXMuZGlzcGxheSlyZXR1cm4gaSgpO3ZhciBhPXt9O2Eud2lkdGg9ZS5vZmZzZXRXaWR0aCxhLmhlaWdodD1lLm9mZnNldEhlaWdodDtmb3IodmFyIGQ9YS5pc0JvcmRlckJveD1cImJvcmRlci1ib3hcIj09cy5ib3hTaXppbmcsbD0wO2w8aDtsKyspe3ZhciBmPXVbbF0sYz1zW2ZdLG09cGFyc2VGbG9hdChjKTthW2ZdPWlzTmFOKG0pPzA6bX12YXIgcD1hLnBhZGRpbmdMZWZ0K2EucGFkZGluZ1JpZ2h0LHk9YS5wYWRkaW5nVG9wK2EucGFkZGluZ0JvdHRvbSxnPWEubWFyZ2luTGVmdCthLm1hcmdpblJpZ2h0LHY9YS5tYXJnaW5Ub3ArYS5tYXJnaW5Cb3R0b20sXz1hLmJvcmRlckxlZnRXaWR0aCthLmJvcmRlclJpZ2h0V2lkdGgsej1hLmJvcmRlclRvcFdpZHRoK2EuYm9yZGVyQm90dG9tV2lkdGgsST1kJiZyLHg9dChzLndpZHRoKTt4IT09ITEmJihhLndpZHRoPXgrKEk/MDpwK18pKTt2YXIgUz10KHMuaGVpZ2h0KTtyZXR1cm4gUyE9PSExJiYoYS5oZWlnaHQ9UysoST8wOnkreikpLGEuaW5uZXJXaWR0aD1hLndpZHRoLShwK18pLGEuaW5uZXJIZWlnaHQ9YS5oZWlnaHQtKHkreiksYS5vdXRlcldpZHRoPWEud2lkdGgrZyxhLm91dGVySGVpZ2h0PWEuaGVpZ2h0K3YsYX19dmFyIHIsYT1cInVuZGVmaW5lZFwiPT10eXBlb2YgY29uc29sZT9lOmZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IodCl9LHU9W1wicGFkZGluZ0xlZnRcIixcInBhZGRpbmdSaWdodFwiLFwicGFkZGluZ1RvcFwiLFwicGFkZGluZ0JvdHRvbVwiLFwibWFyZ2luTGVmdFwiLFwibWFyZ2luUmlnaHRcIixcIm1hcmdpblRvcFwiLFwibWFyZ2luQm90dG9tXCIsXCJib3JkZXJMZWZ0V2lkdGhcIixcImJvcmRlclJpZ2h0V2lkdGhcIixcImJvcmRlclRvcFdpZHRoXCIsXCJib3JkZXJCb3R0b21XaWR0aFwiXSxoPXUubGVuZ3RoLGQ9ITE7cmV0dXJuIHN9KSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3JcIixlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKCk6dC5tYXRjaGVzU2VsZWN0b3I9ZSgpfSh3aW5kb3csZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1mdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZTtpZih0Lm1hdGNoZXMpcmV0dXJuXCJtYXRjaGVzXCI7aWYodC5tYXRjaGVzU2VsZWN0b3IpcmV0dXJuXCJtYXRjaGVzU2VsZWN0b3JcIjtmb3IodmFyIGU9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdLGk9MDtpPGUubGVuZ3RoO2krKyl7dmFyIG89ZVtpXSxuPW8rXCJNYXRjaGVzU2VsZWN0b3JcIjtpZih0W25dKXJldHVybiBufX0oKTtyZXR1cm4gZnVuY3Rpb24oZSxpKXtyZXR1cm4gZVt0XShpKX19KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJmaXp6eS11aS11dGlscy91dGlsc1wiLFtcImRlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3RvclwiXSxmdW5jdGlvbihpKXtyZXR1cm4gZSh0LGkpfSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSh0LHJlcXVpcmUoXCJkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yXCIpKTp0LmZpenp5VUlVdGlscz1lKHQsdC5tYXRjaGVzU2VsZWN0b3IpfSh3aW5kb3csZnVuY3Rpb24odCxlKXt2YXIgaT17fTtpLmV4dGVuZD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaSBpbiBlKXRbaV09ZVtpXTtyZXR1cm4gdH0saS5tb2R1bG89ZnVuY3Rpb24odCxlKXtyZXR1cm4odCVlK2UpJWV9O3ZhciBvPUFycmF5LnByb3RvdHlwZS5zbGljZTtpLm1ha2VBcnJheT1mdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0O2lmKG51bGw9PT10fHx2b2lkIDA9PT10KXJldHVybltdO3ZhciBlPVwib2JqZWN0XCI9PXR5cGVvZiB0JiZcIm51bWJlclwiPT10eXBlb2YgdC5sZW5ndGg7cmV0dXJuIGU/by5jYWxsKHQpOlt0XX0saS5yZW1vdmVGcm9tPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dC5pbmRleE9mKGUpO2khPS0xJiZ0LnNwbGljZShpLDEpfSxpLmdldFBhcmVudD1mdW5jdGlvbih0LGkpe2Zvcig7dC5wYXJlbnROb2RlJiZ0IT1kb2N1bWVudC5ib2R5OylpZih0PXQucGFyZW50Tm9kZSxlKHQsaSkpcmV0dXJuIHR9LGkuZ2V0UXVlcnlFbGVtZW50PWZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCk6dH0saS5oYW5kbGVFdmVudD1mdW5jdGlvbih0KXt2YXIgZT1cIm9uXCIrdC50eXBlO3RoaXNbZV0mJnRoaXNbZV0odCl9LGkuZmlsdGVyRmluZEVsZW1lbnRzPWZ1bmN0aW9uKHQsbyl7dD1pLm1ha2VBcnJheSh0KTt2YXIgbj1bXTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7aWYoIW8pcmV0dXJuIHZvaWQgbi5wdXNoKHQpO2UodCxvKSYmbi5wdXNoKHQpO2Zvcih2YXIgaT10LnF1ZXJ5U2VsZWN0b3JBbGwobykscz0wO3M8aS5sZW5ndGg7cysrKW4ucHVzaChpW3NdKX19KSxufSxpLmRlYm91bmNlTWV0aG9kPWZ1bmN0aW9uKHQsZSxpKXtpPWl8fDEwMDt2YXIgbz10LnByb3RvdHlwZVtlXSxuPWUrXCJUaW1lb3V0XCI7dC5wcm90b3R5cGVbZV09ZnVuY3Rpb24oKXt2YXIgdD10aGlzW25dO2NsZWFyVGltZW91dCh0KTt2YXIgZT1hcmd1bWVudHMscz10aGlzO3RoaXNbbl09c2V0VGltZW91dChmdW5jdGlvbigpe28uYXBwbHkocyxlKSxkZWxldGUgc1tuXX0saSl9fSxpLmRvY1JlYWR5PWZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LnJlYWR5U3RhdGU7XCJjb21wbGV0ZVwiPT1lfHxcImludGVyYWN0aXZlXCI9PWU/c2V0VGltZW91dCh0KTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLHQpfSxpLnRvRGFzaGVkPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoLyguKShbQS1aXSkvZyxmdW5jdGlvbih0LGUsaSl7cmV0dXJuIGUrXCItXCIraX0pLnRvTG93ZXJDYXNlKCl9O3ZhciBuPXQuY29uc29sZTtyZXR1cm4gaS5odG1sSW5pdD1mdW5jdGlvbihlLG8pe2kuZG9jUmVhZHkoZnVuY3Rpb24oKXt2YXIgcz1pLnRvRGFzaGVkKG8pLHI9XCJkYXRhLVwiK3MsYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiK3IrXCJdXCIpLHU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1cIitzKSxoPWkubWFrZUFycmF5KGEpLmNvbmNhdChpLm1ha2VBcnJheSh1KSksZD1yK1wiLW9wdGlvbnNcIixsPXQualF1ZXJ5O2guZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgaSxzPXQuZ2V0QXR0cmlidXRlKHIpfHx0LmdldEF0dHJpYnV0ZShkKTt0cnl7aT1zJiZKU09OLnBhcnNlKHMpfWNhdGNoKGEpe3JldHVybiB2b2lkKG4mJm4uZXJyb3IoXCJFcnJvciBwYXJzaW5nIFwiK3IrXCIgb24gXCIrdC5jbGFzc05hbWUrXCI6IFwiK2EpKX12YXIgdT1uZXcgZSh0LGkpO2wmJmwuZGF0YSh0LG8sdSl9KX0pfSxpfSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwib3V0bGF5ZXIvaXRlbVwiLFtcImV2LWVtaXR0ZXIvZXYtZW1pdHRlclwiLFwiZ2V0LXNpemUvZ2V0LXNpemVcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwiZXYtZW1pdHRlclwiKSxyZXF1aXJlKFwiZ2V0LXNpemVcIikpOih0Lk91dGxheWVyPXt9LHQuT3V0bGF5ZXIuSXRlbT1lKHQuRXZFbWl0dGVyLHQuZ2V0U2l6ZSkpfSh3aW5kb3csZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKHQpe2Zvcih2YXIgZSBpbiB0KXJldHVybiExO3JldHVybiBlPW51bGwsITB9ZnVuY3Rpb24gbyh0LGUpe3QmJih0aGlzLmVsZW1lbnQ9dCx0aGlzLmxheW91dD1lLHRoaXMucG9zaXRpb249e3g6MCx5OjB9LHRoaXMuX2NyZWF0ZSgpKX1mdW5jdGlvbiBuKHQpe3JldHVybiB0LnJlcGxhY2UoLyhbQS1aXSkvZyxmdW5jdGlvbih0KXtyZXR1cm5cIi1cIit0LnRvTG93ZXJDYXNlKCl9KX12YXIgcz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUscj1cInN0cmluZ1wiPT10eXBlb2Ygcy50cmFuc2l0aW9uP1widHJhbnNpdGlvblwiOlwiV2Via2l0VHJhbnNpdGlvblwiLGE9XCJzdHJpbmdcIj09dHlwZW9mIHMudHJhbnNmb3JtP1widHJhbnNmb3JtXCI6XCJXZWJraXRUcmFuc2Zvcm1cIix1PXtXZWJraXRUcmFuc2l0aW9uOlwid2Via2l0VHJhbnNpdGlvbkVuZFwiLHRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCJ9W3JdLGg9e3RyYW5zZm9ybTphLHRyYW5zaXRpb246cix0cmFuc2l0aW9uRHVyYXRpb246citcIkR1cmF0aW9uXCIsdHJhbnNpdGlvblByb3BlcnR5OnIrXCJQcm9wZXJ0eVwiLHRyYW5zaXRpb25EZWxheTpyK1wiRGVsYXlcIn0sZD1vLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQucHJvdG90eXBlKTtkLmNvbnN0cnVjdG9yPW8sZC5fY3JlYXRlPWZ1bmN0aW9uKCl7dGhpcy5fdHJhbnNuPXtpbmdQcm9wZXJ0aWVzOnt9LGNsZWFuOnt9LG9uRW5kOnt9fSx0aGlzLmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwifSl9LGQuaGFuZGxlRXZlbnQ9ZnVuY3Rpb24odCl7dmFyIGU9XCJvblwiK3QudHlwZTt0aGlzW2VdJiZ0aGlzW2VdKHQpfSxkLmdldFNpemU9ZnVuY3Rpb24oKXt0aGlzLnNpemU9ZSh0aGlzLmVsZW1lbnQpfSxkLmNzcz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmVsZW1lbnQuc3R5bGU7Zm9yKHZhciBpIGluIHQpe3ZhciBvPWhbaV18fGk7ZVtvXT10W2ldfX0sZC5nZXRQb3NpdGlvbj1mdW5jdGlvbigpe3ZhciB0PWdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KSxlPXRoaXMubGF5b3V0Ll9nZXRPcHRpb24oXCJvcmlnaW5MZWZ0XCIpLGk9dGhpcy5sYXlvdXQuX2dldE9wdGlvbihcIm9yaWdpblRvcFwiKSxvPXRbZT9cImxlZnRcIjpcInJpZ2h0XCJdLG49dFtpP1widG9wXCI6XCJib3R0b21cIl0scz1wYXJzZUZsb2F0KG8pLHI9cGFyc2VGbG9hdChuKSxhPXRoaXMubGF5b3V0LnNpemU7by5pbmRleE9mKFwiJVwiKSE9LTEmJihzPXMvMTAwKmEud2lkdGgpLG4uaW5kZXhPZihcIiVcIikhPS0xJiYocj1yLzEwMCphLmhlaWdodCkscz1pc05hTihzKT8wOnMscj1pc05hTihyKT8wOnIscy09ZT9hLnBhZGRpbmdMZWZ0OmEucGFkZGluZ1JpZ2h0LHItPWk/YS5wYWRkaW5nVG9wOmEucGFkZGluZ0JvdHRvbSx0aGlzLnBvc2l0aW9uLng9cyx0aGlzLnBvc2l0aW9uLnk9cn0sZC5sYXlvdXRQb3NpdGlvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMubGF5b3V0LnNpemUsZT17fSxpPXRoaXMubGF5b3V0Ll9nZXRPcHRpb24oXCJvcmlnaW5MZWZ0XCIpLG89dGhpcy5sYXlvdXQuX2dldE9wdGlvbihcIm9yaWdpblRvcFwiKSxuPWk/XCJwYWRkaW5nTGVmdFwiOlwicGFkZGluZ1JpZ2h0XCIscz1pP1wibGVmdFwiOlwicmlnaHRcIixyPWk/XCJyaWdodFwiOlwibGVmdFwiLGE9dGhpcy5wb3NpdGlvbi54K3Rbbl07ZVtzXT10aGlzLmdldFhWYWx1ZShhKSxlW3JdPVwiXCI7dmFyIHU9bz9cInBhZGRpbmdUb3BcIjpcInBhZGRpbmdCb3R0b21cIixoPW8/XCJ0b3BcIjpcImJvdHRvbVwiLGQ9bz9cImJvdHRvbVwiOlwidG9wXCIsbD10aGlzLnBvc2l0aW9uLnkrdFt1XTtlW2hdPXRoaXMuZ2V0WVZhbHVlKGwpLGVbZF09XCJcIix0aGlzLmNzcyhlKSx0aGlzLmVtaXRFdmVudChcImxheW91dFwiLFt0aGlzXSl9LGQuZ2V0WFZhbHVlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMubGF5b3V0Ll9nZXRPcHRpb24oXCJob3Jpem9udGFsXCIpO3JldHVybiB0aGlzLmxheW91dC5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiYmIWU/dC90aGlzLmxheW91dC5zaXplLndpZHRoKjEwMCtcIiVcIjp0K1wicHhcIn0sZC5nZXRZVmFsdWU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5sYXlvdXQuX2dldE9wdGlvbihcImhvcml6b250YWxcIik7cmV0dXJuIHRoaXMubGF5b3V0Lm9wdGlvbnMucGVyY2VudFBvc2l0aW9uJiZlP3QvdGhpcy5sYXlvdXQuc2l6ZS5oZWlnaHQqMTAwK1wiJVwiOnQrXCJweFwifSxkLl90cmFuc2l0aW9uVG89ZnVuY3Rpb24odCxlKXt0aGlzLmdldFBvc2l0aW9uKCk7dmFyIGk9dGhpcy5wb3NpdGlvbi54LG89dGhpcy5wb3NpdGlvbi55LG49dD09dGhpcy5wb3NpdGlvbi54JiZlPT10aGlzLnBvc2l0aW9uLnk7aWYodGhpcy5zZXRQb3NpdGlvbih0LGUpLG4mJiF0aGlzLmlzVHJhbnNpdGlvbmluZylyZXR1cm4gdm9pZCB0aGlzLmxheW91dFBvc2l0aW9uKCk7dmFyIHM9dC1pLHI9ZS1vLGE9e307YS50cmFuc2Zvcm09dGhpcy5nZXRUcmFuc2xhdGUocyxyKSx0aGlzLnRyYW5zaXRpb24oe3RvOmEsb25UcmFuc2l0aW9uRW5kOnt0cmFuc2Zvcm06dGhpcy5sYXlvdXRQb3NpdGlvbn0saXNDbGVhbmluZzohMH0pfSxkLmdldFRyYW5zbGF0ZT1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMubGF5b3V0Ll9nZXRPcHRpb24oXCJvcmlnaW5MZWZ0XCIpLG89dGhpcy5sYXlvdXQuX2dldE9wdGlvbihcIm9yaWdpblRvcFwiKTtyZXR1cm4gdD1pP3Q6LXQsZT1vP2U6LWUsXCJ0cmFuc2xhdGUzZChcIit0K1wicHgsIFwiK2UrXCJweCwgMClcIn0sZC5nb1RvPWZ1bmN0aW9uKHQsZSl7dGhpcy5zZXRQb3NpdGlvbih0LGUpLHRoaXMubGF5b3V0UG9zaXRpb24oKX0sZC5tb3ZlVG89ZC5fdHJhbnNpdGlvblRvLGQuc2V0UG9zaXRpb249ZnVuY3Rpb24odCxlKXt0aGlzLnBvc2l0aW9uLng9cGFyc2VGbG9hdCh0KSx0aGlzLnBvc2l0aW9uLnk9cGFyc2VGbG9hdChlKX0sZC5fbm9uVHJhbnNpdGlvbj1mdW5jdGlvbih0KXt0aGlzLmNzcyh0LnRvKSx0LmlzQ2xlYW5pbmcmJnRoaXMuX3JlbW92ZVN0eWxlcyh0LnRvKTtmb3IodmFyIGUgaW4gdC5vblRyYW5zaXRpb25FbmQpdC5vblRyYW5zaXRpb25FbmRbZV0uY2FsbCh0aGlzKX0sZC50cmFuc2l0aW9uPWZ1bmN0aW9uKHQpe2lmKCFwYXJzZUZsb2F0KHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uKSlyZXR1cm4gdm9pZCB0aGlzLl9ub25UcmFuc2l0aW9uKHQpO3ZhciBlPXRoaXMuX3RyYW5zbjtmb3IodmFyIGkgaW4gdC5vblRyYW5zaXRpb25FbmQpZS5vbkVuZFtpXT10Lm9uVHJhbnNpdGlvbkVuZFtpXTtmb3IoaSBpbiB0LnRvKWUuaW5nUHJvcGVydGllc1tpXT0hMCx0LmlzQ2xlYW5pbmcmJihlLmNsZWFuW2ldPSEwKTtpZih0LmZyb20pe3RoaXMuY3NzKHQuZnJvbSk7dmFyIG89dGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtvPW51bGx9dGhpcy5lbmFibGVUcmFuc2l0aW9uKHQudG8pLHRoaXMuY3NzKHQudG8pLHRoaXMuaXNUcmFuc2l0aW9uaW5nPSEwfTt2YXIgbD1cIm9wYWNpdHksXCIrbihhKTtkLmVuYWJsZVRyYW5zaXRpb249ZnVuY3Rpb24oKXtpZighdGhpcy5pc1RyYW5zaXRpb25pbmcpe3ZhciB0PXRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uO3Q9XCJudW1iZXJcIj09dHlwZW9mIHQ/dCtcIm1zXCI6dCx0aGlzLmNzcyh7dHJhbnNpdGlvblByb3BlcnR5OmwsdHJhbnNpdGlvbkR1cmF0aW9uOnQsdHJhbnNpdGlvbkRlbGF5OnRoaXMuc3RhZ2dlckRlbGF5fHwwfSksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodSx0aGlzLCExKX19LGQub253ZWJraXRUcmFuc2l0aW9uRW5kPWZ1bmN0aW9uKHQpe3RoaXMub250cmFuc2l0aW9uZW5kKHQpfSxkLm9ub3RyYW5zaXRpb25lbmQ9ZnVuY3Rpb24odCl7dGhpcy5vbnRyYW5zaXRpb25lbmQodCl9O3ZhciBmPXtcIi13ZWJraXQtdHJhbnNmb3JtXCI6XCJ0cmFuc2Zvcm1cIn07ZC5vbnRyYW5zaXRpb25lbmQ9ZnVuY3Rpb24odCl7aWYodC50YXJnZXQ9PT10aGlzLmVsZW1lbnQpe3ZhciBlPXRoaXMuX3RyYW5zbixvPWZbdC5wcm9wZXJ0eU5hbWVdfHx0LnByb3BlcnR5TmFtZTtpZihkZWxldGUgZS5pbmdQcm9wZXJ0aWVzW29dLGkoZS5pbmdQcm9wZXJ0aWVzKSYmdGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpLG8gaW4gZS5jbGVhbiYmKHRoaXMuZWxlbWVudC5zdHlsZVt0LnByb3BlcnR5TmFtZV09XCJcIixkZWxldGUgZS5jbGVhbltvXSksbyBpbiBlLm9uRW5kKXt2YXIgbj1lLm9uRW5kW29dO24uY2FsbCh0aGlzKSxkZWxldGUgZS5vbkVuZFtvXX10aGlzLmVtaXRFdmVudChcInRyYW5zaXRpb25FbmRcIixbdGhpc10pfX0sZC5kaXNhYmxlVHJhbnNpdGlvbj1mdW5jdGlvbigpe3RoaXMucmVtb3ZlVHJhbnNpdGlvblN0eWxlcygpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHUsdGhpcywhMSksdGhpcy5pc1RyYW5zaXRpb25pbmc9ITF9LGQuX3JlbW92ZVN0eWxlcz1mdW5jdGlvbih0KXt2YXIgZT17fTtmb3IodmFyIGkgaW4gdCllW2ldPVwiXCI7dGhpcy5jc3MoZSl9O3ZhciBjPXt0cmFuc2l0aW9uUHJvcGVydHk6XCJcIix0cmFuc2l0aW9uRHVyYXRpb246XCJcIix0cmFuc2l0aW9uRGVsYXk6XCJcIn07cmV0dXJuIGQucmVtb3ZlVHJhbnNpdGlvblN0eWxlcz1mdW5jdGlvbigpe3RoaXMuY3NzKGMpfSxkLnN0YWdnZXI9ZnVuY3Rpb24odCl7dD1pc05hTih0KT8wOnQsdGhpcy5zdGFnZ2VyRGVsYXk9dCtcIm1zXCJ9LGQucmVtb3ZlRWxlbT1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCksdGhpcy5jc3Moe2Rpc3BsYXk6XCJcIn0pLHRoaXMuZW1pdEV2ZW50KFwicmVtb3ZlXCIsW3RoaXNdKX0sZC5yZW1vdmU9ZnVuY3Rpb24oKXtyZXR1cm4gciYmcGFyc2VGbG9hdCh0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbik/KHRoaXMub25jZShcInRyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe3RoaXMucmVtb3ZlRWxlbSgpfSksdm9pZCB0aGlzLmhpZGUoKSk6dm9pZCB0aGlzLnJlbW92ZUVsZW0oKX0sZC5yZXZlYWw9ZnVuY3Rpb24oKXtkZWxldGUgdGhpcy5pc0hpZGRlbix0aGlzLmNzcyh7ZGlzcGxheTpcIlwifSk7dmFyIHQ9dGhpcy5sYXlvdXQub3B0aW9ucyxlPXt9LGk9dGhpcy5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5KFwidmlzaWJsZVN0eWxlXCIpO2VbaV09dGhpcy5vblJldmVhbFRyYW5zaXRpb25FbmQsdGhpcy50cmFuc2l0aW9uKHtmcm9tOnQuaGlkZGVuU3R5bGUsdG86dC52aXNpYmxlU3R5bGUsaXNDbGVhbmluZzohMCxvblRyYW5zaXRpb25FbmQ6ZX0pfSxkLm9uUmV2ZWFsVHJhbnNpdGlvbkVuZD1mdW5jdGlvbigpe3RoaXMuaXNIaWRkZW58fHRoaXMuZW1pdEV2ZW50KFwicmV2ZWFsXCIpfSxkLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHk9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5sYXlvdXQub3B0aW9uc1t0XTtpZihlLm9wYWNpdHkpcmV0dXJuXCJvcGFjaXR5XCI7Zm9yKHZhciBpIGluIGUpcmV0dXJuIGl9LGQuaGlkZT1mdW5jdGlvbigpe3RoaXMuaXNIaWRkZW49ITAsdGhpcy5jc3Moe2Rpc3BsYXk6XCJcIn0pO3ZhciB0PXRoaXMubGF5b3V0Lm9wdGlvbnMsZT17fSxpPXRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eShcImhpZGRlblN0eWxlXCIpO2VbaV09dGhpcy5vbkhpZGVUcmFuc2l0aW9uRW5kLHRoaXMudHJhbnNpdGlvbih7ZnJvbTp0LnZpc2libGVTdHlsZSx0bzp0LmhpZGRlblN0eWxlLGlzQ2xlYW5pbmc6ITAsb25UcmFuc2l0aW9uRW5kOmV9KX0sZC5vbkhpZGVUcmFuc2l0aW9uRW5kPWZ1bmN0aW9uKCl7dGhpcy5pc0hpZGRlbiYmKHRoaXMuY3NzKHtkaXNwbGF5Olwibm9uZVwifSksdGhpcy5lbWl0RXZlbnQoXCJoaWRlXCIpKX0sZC5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5jc3Moe3Bvc2l0aW9uOlwiXCIsbGVmdDpcIlwiLHJpZ2h0OlwiXCIsdG9wOlwiXCIsYm90dG9tOlwiXCIsdHJhbnNpdGlvbjpcIlwiLHRyYW5zZm9ybTpcIlwifSl9LG99KSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJvdXRsYXllci9vdXRsYXllclwiLFtcImV2LWVtaXR0ZXIvZXYtZW1pdHRlclwiLFwiZ2V0LXNpemUvZ2V0LXNpemVcIixcImZpenp5LXVpLXV0aWxzL3V0aWxzXCIsXCIuL2l0ZW1cIl0sZnVuY3Rpb24oaSxvLG4scyl7cmV0dXJuIGUodCxpLG8sbixzKX0pOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUodCxyZXF1aXJlKFwiZXYtZW1pdHRlclwiKSxyZXF1aXJlKFwiZ2V0LXNpemVcIikscmVxdWlyZShcImZpenp5LXVpLXV0aWxzXCIpLHJlcXVpcmUoXCIuL2l0ZW1cIikpOnQuT3V0bGF5ZXI9ZSh0LHQuRXZFbWl0dGVyLHQuZ2V0U2l6ZSx0LmZpenp5VUlVdGlscyx0Lk91dGxheWVyLkl0ZW0pfSh3aW5kb3csZnVuY3Rpb24odCxlLGksbyxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKHQsZSl7dmFyIGk9by5nZXRRdWVyeUVsZW1lbnQodCk7aWYoIWkpcmV0dXJuIHZvaWQodSYmdS5lcnJvcihcIkJhZCBlbGVtZW50IGZvciBcIit0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZStcIjogXCIrKGl8fHQpKSk7dGhpcy5lbGVtZW50PWksaCYmKHRoaXMuJGVsZW1lbnQ9aCh0aGlzLmVsZW1lbnQpKSx0aGlzLm9wdGlvbnM9by5leHRlbmQoe30sdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0cyksdGhpcy5vcHRpb24oZSk7dmFyIG49KytsO3RoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ9bixmW25dPXRoaXMsdGhpcy5fY3JlYXRlKCk7dmFyIHM9dGhpcy5fZ2V0T3B0aW9uKFwiaW5pdExheW91dFwiKTtzJiZ0aGlzLmxheW91dCgpfWZ1bmN0aW9uIHIodCl7ZnVuY3Rpb24gZSgpe3QuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQucHJvdG90eXBlKSxlLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1lLGV9ZnVuY3Rpb24gYSh0KXtpZihcIm51bWJlclwiPT10eXBlb2YgdClyZXR1cm4gdDt2YXIgZT10Lm1hdGNoKC8oXlxcZCpcXC4/XFxkKikoXFx3KikvKSxpPWUmJmVbMV0sbz1lJiZlWzJdO2lmKCFpLmxlbmd0aClyZXR1cm4gMDtpPXBhcnNlRmxvYXQoaSk7dmFyIG49bVtvXXx8MTtyZXR1cm4gaSpufXZhciB1PXQuY29uc29sZSxoPXQualF1ZXJ5LGQ9ZnVuY3Rpb24oKXt9LGw9MCxmPXt9O3MubmFtZXNwYWNlPVwib3V0bGF5ZXJcIixzLkl0ZW09bixzLmRlZmF1bHRzPXtjb250YWluZXJTdHlsZTp7cG9zaXRpb246XCJyZWxhdGl2ZVwifSxpbml0TGF5b3V0OiEwLG9yaWdpbkxlZnQ6ITAsb3JpZ2luVG9wOiEwLHJlc2l6ZTohMCxyZXNpemVDb250YWluZXI6ITAsdHJhbnNpdGlvbkR1cmF0aW9uOlwiMC40c1wiLGhpZGRlblN0eWxlOntvcGFjaXR5OjAsdHJhbnNmb3JtOlwic2NhbGUoMC4wMDEpXCJ9LHZpc2libGVTdHlsZTp7b3BhY2l0eToxLHRyYW5zZm9ybTpcInNjYWxlKDEpXCJ9fTt2YXIgYz1zLnByb3RvdHlwZTtvLmV4dGVuZChjLGUucHJvdG90eXBlKSxjLm9wdGlvbj1mdW5jdGlvbih0KXtvLmV4dGVuZCh0aGlzLm9wdGlvbnMsdCl9LGMuX2dldE9wdGlvbj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmNvbnN0cnVjdG9yLmNvbXBhdE9wdGlvbnNbdF07cmV0dXJuIGUmJnZvaWQgMCE9PXRoaXMub3B0aW9uc1tlXT90aGlzLm9wdGlvbnNbZV06dGhpcy5vcHRpb25zW3RdfSxzLmNvbXBhdE9wdGlvbnM9e2luaXRMYXlvdXQ6XCJpc0luaXRMYXlvdXRcIixob3Jpem9udGFsOlwiaXNIb3Jpem9udGFsXCIsbGF5b3V0SW5zdGFudDpcImlzTGF5b3V0SW5zdGFudFwiLG9yaWdpbkxlZnQ6XCJpc09yaWdpbkxlZnRcIixvcmlnaW5Ub3A6XCJpc09yaWdpblRvcFwiLHJlc2l6ZTpcImlzUmVzaXplQm91bmRcIixyZXNpemVDb250YWluZXI6XCJpc1Jlc2l6aW5nQ29udGFpbmVyXCJ9LGMuX2NyZWF0ZT1mdW5jdGlvbigpe3RoaXMucmVsb2FkSXRlbXMoKSx0aGlzLnN0YW1wcz1bXSx0aGlzLnN0YW1wKHRoaXMub3B0aW9ucy5zdGFtcCksby5leHRlbmQodGhpcy5lbGVtZW50LnN0eWxlLHRoaXMub3B0aW9ucy5jb250YWluZXJTdHlsZSk7dmFyIHQ9dGhpcy5fZ2V0T3B0aW9uKFwicmVzaXplXCIpO3QmJnRoaXMuYmluZFJlc2l6ZSgpfSxjLnJlbG9hZEl0ZW1zPWZ1bmN0aW9uKCl7dGhpcy5pdGVtcz10aGlzLl9pdGVtaXplKHRoaXMuZWxlbWVudC5jaGlsZHJlbil9LGMuX2l0ZW1pemU9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMuX2ZpbHRlckZpbmRJdGVtRWxlbWVudHModCksaT10aGlzLmNvbnN0cnVjdG9yLkl0ZW0sbz1bXSxuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBzPWVbbl0scj1uZXcgaShzLHRoaXMpO28ucHVzaChyKX1yZXR1cm4gb30sYy5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cz1mdW5jdGlvbih0KXtyZXR1cm4gby5maWx0ZXJGaW5kRWxlbWVudHModCx0aGlzLm9wdGlvbnMuaXRlbVNlbGVjdG9yKX0sYy5nZXRJdGVtRWxlbWVudHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVtcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQuZWxlbWVudH0pfSxjLmxheW91dD1mdW5jdGlvbigpe3RoaXMuX3Jlc2V0TGF5b3V0KCksdGhpcy5fbWFuYWdlU3RhbXBzKCk7dmFyIHQ9dGhpcy5fZ2V0T3B0aW9uKFwibGF5b3V0SW5zdGFudFwiKSxlPXZvaWQgMCE9PXQ/dDohdGhpcy5faXNMYXlvdXRJbml0ZWQ7dGhpcy5sYXlvdXRJdGVtcyh0aGlzLml0ZW1zLGUpLHRoaXMuX2lzTGF5b3V0SW5pdGVkPSEwfSxjLl9pbml0PWMubGF5b3V0LGMuX3Jlc2V0TGF5b3V0PWZ1bmN0aW9uKCl7dGhpcy5nZXRTaXplKCl9LGMuZ2V0U2l6ZT1mdW5jdGlvbigpe3RoaXMuc2l6ZT1pKHRoaXMuZWxlbWVudCl9LGMuX2dldE1lYXN1cmVtZW50PWZ1bmN0aW9uKHQsZSl7dmFyIG8sbj10aGlzLm9wdGlvbnNbdF07bj8oXCJzdHJpbmdcIj09dHlwZW9mIG4/bz10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihuKTpuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJihvPW4pLHRoaXNbdF09bz9pKG8pW2VdOm4pOnRoaXNbdF09MH0sYy5sYXlvdXRJdGVtcz1mdW5jdGlvbih0LGUpe3Q9dGhpcy5fZ2V0SXRlbXNGb3JMYXlvdXQodCksdGhpcy5fbGF5b3V0SXRlbXModCxlKSx0aGlzLl9wb3N0TGF5b3V0KCl9LGMuX2dldEl0ZW1zRm9yTGF5b3V0PWZ1bmN0aW9uKHQpe3JldHVybiB0LmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4hdC5pc0lnbm9yZWR9KX0sYy5fbGF5b3V0SXRlbXM9ZnVuY3Rpb24odCxlKXtpZih0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKFwibGF5b3V0XCIsdCksdCYmdC5sZW5ndGgpe3ZhciBpPVtdO3QuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgbz10aGlzLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24odCk7by5pdGVtPXQsby5pc0luc3RhbnQ9ZXx8dC5pc0xheW91dEluc3RhbnQsaS5wdXNoKG8pfSx0aGlzKSx0aGlzLl9wcm9jZXNzTGF5b3V0UXVldWUoaSl9fSxjLl9nZXRJdGVtTGF5b3V0UG9zaXRpb249ZnVuY3Rpb24oKXtyZXR1cm57eDowLHk6MH19LGMuX3Byb2Nlc3NMYXlvdXRRdWV1ZT1mdW5jdGlvbih0KXt0aGlzLnVwZGF0ZVN0YWdnZXIoKSx0LmZvckVhY2goZnVuY3Rpb24odCxlKXt0aGlzLl9wb3NpdGlvbkl0ZW0odC5pdGVtLHQueCx0LnksdC5pc0luc3RhbnQsZSl9LHRoaXMpfSxjLnVwZGF0ZVN0YWdnZXI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMuc3RhZ2dlcjtyZXR1cm4gbnVsbD09PXR8fHZvaWQgMD09PXQ/dm9pZCh0aGlzLnN0YWdnZXI9MCk6KHRoaXMuc3RhZ2dlcj1hKHQpLHRoaXMuc3RhZ2dlcil9LGMuX3Bvc2l0aW9uSXRlbT1mdW5jdGlvbih0LGUsaSxvLG4pe28/dC5nb1RvKGUsaSk6KHQuc3RhZ2dlcihuKnRoaXMuc3RhZ2dlciksdC5tb3ZlVG8oZSxpKSl9LGMuX3Bvc3RMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLnJlc2l6ZUNvbnRhaW5lcigpfSxjLnJlc2l6ZUNvbnRhaW5lcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2dldE9wdGlvbihcInJlc2l6ZUNvbnRhaW5lclwiKTtpZih0KXt2YXIgZT10aGlzLl9nZXRDb250YWluZXJTaXplKCk7ZSYmKHRoaXMuX3NldENvbnRhaW5lck1lYXN1cmUoZS53aWR0aCwhMCksdGhpcy5fc2V0Q29udGFpbmVyTWVhc3VyZShlLmhlaWdodCwhMSkpfX0sYy5fZ2V0Q29udGFpbmVyU2l6ZT1kLGMuX3NldENvbnRhaW5lck1lYXN1cmU9ZnVuY3Rpb24odCxlKXtpZih2b2lkIDAhPT10KXt2YXIgaT10aGlzLnNpemU7aS5pc0JvcmRlckJveCYmKHQrPWU/aS5wYWRkaW5nTGVmdCtpLnBhZGRpbmdSaWdodCtpLmJvcmRlckxlZnRXaWR0aCtpLmJvcmRlclJpZ2h0V2lkdGg6aS5wYWRkaW5nQm90dG9tK2kucGFkZGluZ1RvcCtpLmJvcmRlclRvcFdpZHRoK2kuYm9yZGVyQm90dG9tV2lkdGgpLHQ9TWF0aC5tYXgodCwwKSx0aGlzLmVsZW1lbnQuc3R5bGVbZT9cIndpZHRoXCI6XCJoZWlnaHRcIl09dCtcInB4XCJ9fSxjLl9lbWl0Q29tcGxldGVPbkl0ZW1zPWZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gaSgpe24uZGlzcGF0Y2hFdmVudCh0K1wiQ29tcGxldGVcIixudWxsLFtlXSl9ZnVuY3Rpb24gbygpe3IrKyxyPT1zJiZpKCl9dmFyIG49dGhpcyxzPWUubGVuZ3RoO2lmKCFlfHwhcylyZXR1cm4gdm9pZCBpKCk7dmFyIHI9MDtlLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5vbmNlKHQsbyl9KX0sYy5kaXNwYXRjaEV2ZW50PWZ1bmN0aW9uKHQsZSxpKXt2YXIgbz1lP1tlXS5jb25jYXQoaSk6aTtpZih0aGlzLmVtaXRFdmVudCh0LG8pLGgpaWYodGhpcy4kZWxlbWVudD10aGlzLiRlbGVtZW50fHxoKHRoaXMuZWxlbWVudCksZSl7dmFyIG49aC5FdmVudChlKTtuLnR5cGU9dCx0aGlzLiRlbGVtZW50LnRyaWdnZXIobixpKX1lbHNlIHRoaXMuJGVsZW1lbnQudHJpZ2dlcih0LGkpfSxjLmlnbm9yZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldEl0ZW0odCk7ZSYmKGUuaXNJZ25vcmVkPSEwKX0sYy51bmlnbm9yZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldEl0ZW0odCk7ZSYmZGVsZXRlIGUuaXNJZ25vcmVkfSxjLnN0YW1wPWZ1bmN0aW9uKHQpe3Q9dGhpcy5fZmluZCh0KSx0JiYodGhpcy5zdGFtcHM9dGhpcy5zdGFtcHMuY29uY2F0KHQpLHQuZm9yRWFjaCh0aGlzLmlnbm9yZSx0aGlzKSl9LGMudW5zdGFtcD1mdW5jdGlvbih0KXt0PXRoaXMuX2ZpbmQodCksdCYmdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe28ucmVtb3ZlRnJvbSh0aGlzLnN0YW1wcyx0KSx0aGlzLnVuaWdub3JlKHQpfSx0aGlzKX0sYy5fZmluZD1mdW5jdGlvbih0KXtpZih0KXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0KSksdD1vLm1ha2VBcnJheSh0KX0sYy5fbWFuYWdlU3RhbXBzPWZ1bmN0aW9uKCl7dGhpcy5zdGFtcHMmJnRoaXMuc3RhbXBzLmxlbmd0aCYmKHRoaXMuX2dldEJvdW5kaW5nUmVjdCgpLHRoaXMuc3RhbXBzLmZvckVhY2godGhpcy5fbWFuYWdlU3RhbXAsdGhpcykpfSxjLl9nZXRCb3VuZGluZ1JlY3Q9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZT10aGlzLnNpemU7dGhpcy5fYm91bmRpbmdSZWN0PXtsZWZ0OnQubGVmdCtlLnBhZGRpbmdMZWZ0K2UuYm9yZGVyTGVmdFdpZHRoLHRvcDp0LnRvcCtlLnBhZGRpbmdUb3ArZS5ib3JkZXJUb3BXaWR0aCxyaWdodDp0LnJpZ2h0LShlLnBhZGRpbmdSaWdodCtlLmJvcmRlclJpZ2h0V2lkdGgpLGJvdHRvbTp0LmJvdHRvbS0oZS5wYWRkaW5nQm90dG9tK2UuYm9yZGVyQm90dG9tV2lkdGgpfX0sYy5fbWFuYWdlU3RhbXA9ZCxjLl9nZXRFbGVtZW50T2Zmc2V0PWZ1bmN0aW9uKHQpe3ZhciBlPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbz10aGlzLl9ib3VuZGluZ1JlY3Qsbj1pKHQpLHM9e2xlZnQ6ZS5sZWZ0LW8ubGVmdC1uLm1hcmdpbkxlZnQsdG9wOmUudG9wLW8udG9wLW4ubWFyZ2luVG9wLHJpZ2h0Om8ucmlnaHQtZS5yaWdodC1uLm1hcmdpblJpZ2h0LGJvdHRvbTpvLmJvdHRvbS1lLmJvdHRvbS1uLm1hcmdpbkJvdHRvbX07cmV0dXJuIHN9LGMuaGFuZGxlRXZlbnQ9by5oYW5kbGVFdmVudCxjLmJpbmRSZXNpemU9ZnVuY3Rpb24oKXt0LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzKSx0aGlzLmlzUmVzaXplQm91bmQ9ITB9LGMudW5iaW5kUmVzaXplPWZ1bmN0aW9uKCl7dC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcyksdGhpcy5pc1Jlc2l6ZUJvdW5kPSExfSxjLm9ucmVzaXplPWZ1bmN0aW9uKCl7dGhpcy5yZXNpemUoKX0sby5kZWJvdW5jZU1ldGhvZChzLFwib25yZXNpemVcIiwxMDApLGMucmVzaXplPWZ1bmN0aW9uKCl7dGhpcy5pc1Jlc2l6ZUJvdW5kJiZ0aGlzLm5lZWRzUmVzaXplTGF5b3V0KCkmJnRoaXMubGF5b3V0KCl9LGMubmVlZHNSZXNpemVMYXlvdXQ9ZnVuY3Rpb24oKXt2YXIgdD1pKHRoaXMuZWxlbWVudCksZT10aGlzLnNpemUmJnQ7cmV0dXJuIGUmJnQuaW5uZXJXaWR0aCE9PXRoaXMuc2l6ZS5pbm5lcldpZHRofSxjLmFkZEl0ZW1zPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2l0ZW1pemUodCk7cmV0dXJuIGUubGVuZ3RoJiYodGhpcy5pdGVtcz10aGlzLml0ZW1zLmNvbmNhdChlKSksZX0sYy5hcHBlbmRlZD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmFkZEl0ZW1zKHQpO2UubGVuZ3RoJiYodGhpcy5sYXlvdXRJdGVtcyhlLCEwKSx0aGlzLnJldmVhbChlKSl9LGMucHJlcGVuZGVkPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2l0ZW1pemUodCk7aWYoZS5sZW5ndGgpe3ZhciBpPXRoaXMuaXRlbXMuc2xpY2UoMCk7dGhpcy5pdGVtcz1lLmNvbmNhdChpKSx0aGlzLl9yZXNldExheW91dCgpLHRoaXMuX21hbmFnZVN0YW1wcygpLHRoaXMubGF5b3V0SXRlbXMoZSwhMCksdGhpcy5yZXZlYWwoZSksdGhpcy5sYXlvdXRJdGVtcyhpKX19LGMucmV2ZWFsPWZ1bmN0aW9uKHQpe2lmKHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoXCJyZXZlYWxcIix0KSx0JiZ0Lmxlbmd0aCl7dmFyIGU9dGhpcy51cGRhdGVTdGFnZ2VyKCk7dC5mb3JFYWNoKGZ1bmN0aW9uKHQsaSl7dC5zdGFnZ2VyKGkqZSksdC5yZXZlYWwoKX0pfX0sYy5oaWRlPWZ1bmN0aW9uKHQpe2lmKHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoXCJoaWRlXCIsdCksdCYmdC5sZW5ndGgpe3ZhciBlPXRoaXMudXBkYXRlU3RhZ2dlcigpO3QuZm9yRWFjaChmdW5jdGlvbih0LGkpe3Quc3RhZ2dlcihpKmUpLHQuaGlkZSgpfSl9fSxjLnJldmVhbEl0ZW1FbGVtZW50cz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldEl0ZW1zKHQpO3RoaXMucmV2ZWFsKGUpfSxjLmhpZGVJdGVtRWxlbWVudHM9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRJdGVtcyh0KTt0aGlzLmhpZGUoZSl9LGMuZ2V0SXRlbT1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMuaXRlbXMubGVuZ3RoO2UrKyl7dmFyIGk9dGhpcy5pdGVtc1tlXTtpZihpLmVsZW1lbnQ9PXQpcmV0dXJuIGl9fSxjLmdldEl0ZW1zPWZ1bmN0aW9uKHQpe3Q9by5tYWtlQXJyYXkodCk7dmFyIGU9W107cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgaT10aGlzLmdldEl0ZW0odCk7aSYmZS5wdXNoKGkpfSx0aGlzKSxlfSxjLnJlbW92ZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldEl0ZW1zKHQpO3RoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoXCJyZW1vdmVcIixlKSxlJiZlLmxlbmd0aCYmZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QucmVtb3ZlKCksby5yZW1vdmVGcm9tKHRoaXMuaXRlbXMsdCl9LHRoaXMpfSxjLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmVsZW1lbnQuc3R5bGU7dC5oZWlnaHQ9XCJcIix0LnBvc2l0aW9uPVwiXCIsdC53aWR0aD1cIlwiLHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbih0KXt0LmRlc3Ryb3koKX0pLHRoaXMudW5iaW5kUmVzaXplKCk7dmFyIGU9dGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRDtkZWxldGUgZltlXSxkZWxldGUgdGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRCxoJiZoLnJlbW92ZURhdGEodGhpcy5lbGVtZW50LHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlKX0scy5kYXRhPWZ1bmN0aW9uKHQpe3Q9by5nZXRRdWVyeUVsZW1lbnQodCk7dmFyIGU9dCYmdC5vdXRsYXllckdVSUQ7cmV0dXJuIGUmJmZbZV19LHMuY3JlYXRlPWZ1bmN0aW9uKHQsZSl7dmFyIGk9cihzKTtyZXR1cm4gaS5kZWZhdWx0cz1vLmV4dGVuZCh7fSxzLmRlZmF1bHRzKSxvLmV4dGVuZChpLmRlZmF1bHRzLGUpLGkuY29tcGF0T3B0aW9ucz1vLmV4dGVuZCh7fSxzLmNvbXBhdE9wdGlvbnMpLGkubmFtZXNwYWNlPXQsaS5kYXRhPXMuZGF0YSxpLkl0ZW09cihuKSxvLmh0bWxJbml0KGksdCksaCYmaC5icmlkZ2V0JiZoLmJyaWRnZXQodCxpKSxpfTt2YXIgbT17bXM6MSxzOjFlM307cmV0dXJuIHMuSXRlbT1uLHN9KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJpc290b3BlLWxheW91dC9qcy9pdGVtXCIsW1wib3V0bGF5ZXIvb3V0bGF5ZXJcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwib3V0bGF5ZXJcIikpOih0Lklzb3RvcGU9dC5Jc290b3BlfHx7fSx0Lklzb3RvcGUuSXRlbT1lKHQuT3V0bGF5ZXIpKX0od2luZG93LGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoKXt0Lkl0ZW0uYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBpPWUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodC5JdGVtLnByb3RvdHlwZSksbz1pLl9jcmVhdGU7aS5fY3JlYXRlPWZ1bmN0aW9uKCl7dGhpcy5pZD10aGlzLmxheW91dC5pdGVtR1VJRCsrLG8uY2FsbCh0aGlzKSx0aGlzLnNvcnREYXRhPXt9fSxpLnVwZGF0ZVNvcnREYXRhPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaXNJZ25vcmVkKXt0aGlzLnNvcnREYXRhLmlkPXRoaXMuaWQsdGhpcy5zb3J0RGF0YVtcIm9yaWdpbmFsLW9yZGVyXCJdPXRoaXMuaWQsdGhpcy5zb3J0RGF0YS5yYW5kb209TWF0aC5yYW5kb20oKTt2YXIgdD10aGlzLmxheW91dC5vcHRpb25zLmdldFNvcnREYXRhLGU9dGhpcy5sYXlvdXQuX3NvcnRlcnM7Zm9yKHZhciBpIGluIHQpe3ZhciBvPWVbaV07dGhpcy5zb3J0RGF0YVtpXT1vKHRoaXMuZWxlbWVudCx0aGlzKX19fTt2YXIgbj1pLmRlc3Ryb3k7cmV0dXJuIGkuZGVzdHJveT1mdW5jdGlvbigpe24uYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuY3NzKHtkaXNwbGF5OlwiXCJ9KX0sZX0pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2RlXCIsW1wiZ2V0LXNpemUvZ2V0LXNpemVcIixcIm91dGxheWVyL291dGxheWVyXCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcImdldC1zaXplXCIpLHJlcXVpcmUoXCJvdXRsYXllclwiKSk6KHQuSXNvdG9wZT10Lklzb3RvcGV8fHt9LHQuSXNvdG9wZS5MYXlvdXRNb2RlPWUodC5nZXRTaXplLHQuT3V0bGF5ZXIpKX0od2luZG93LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaSh0KXt0aGlzLmlzb3RvcGU9dCx0JiYodGhpcy5vcHRpb25zPXQub3B0aW9uc1t0aGlzLm5hbWVzcGFjZV0sdGhpcy5lbGVtZW50PXQuZWxlbWVudCx0aGlzLml0ZW1zPXQuZmlsdGVyZWRJdGVtcyx0aGlzLnNpemU9dC5zaXplKX12YXIgbz1pLnByb3RvdHlwZSxuPVtcIl9yZXNldExheW91dFwiLFwiX2dldEl0ZW1MYXlvdXRQb3NpdGlvblwiLFwiX21hbmFnZVN0YW1wXCIsXCJfZ2V0Q29udGFpbmVyU2l6ZVwiLFwiX2dldEVsZW1lbnRPZmZzZXRcIixcIm5lZWRzUmVzaXplTGF5b3V0XCIsXCJfZ2V0T3B0aW9uXCJdO3JldHVybiBuLmZvckVhY2goZnVuY3Rpb24odCl7b1t0XT1mdW5jdGlvbigpe3JldHVybiBlLnByb3RvdHlwZVt0XS5hcHBseSh0aGlzLmlzb3RvcGUsYXJndW1lbnRzKX19KSxvLm5lZWRzVmVydGljYWxSZXNpemVMYXlvdXQ9ZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMuaXNvdG9wZS5lbGVtZW50KSxpPXRoaXMuaXNvdG9wZS5zaXplJiZlO3JldHVybiBpJiZlLmlubmVySGVpZ2h0IT10aGlzLmlzb3RvcGUuc2l6ZS5pbm5lckhlaWdodH0sby5fZ2V0TWVhc3VyZW1lbnQ9ZnVuY3Rpb24oKXt0aGlzLmlzb3RvcGUuX2dldE1lYXN1cmVtZW50LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sby5nZXRDb2x1bW5XaWR0aD1mdW5jdGlvbigpe3RoaXMuZ2V0U2VnbWVudFNpemUoXCJjb2x1bW5cIixcIldpZHRoXCIpfSxvLmdldFJvd0hlaWdodD1mdW5jdGlvbigpe3RoaXMuZ2V0U2VnbWVudFNpemUoXCJyb3dcIixcIkhlaWdodFwiKX0sby5nZXRTZWdtZW50U2l6ZT1mdW5jdGlvbih0LGUpe3ZhciBpPXQrZSxvPVwib3V0ZXJcIitlO2lmKHRoaXMuX2dldE1lYXN1cmVtZW50KGksbyksIXRoaXNbaV0pe3ZhciBuPXRoaXMuZ2V0Rmlyc3RJdGVtU2l6ZSgpO3RoaXNbaV09biYmbltvXXx8dGhpcy5pc290b3BlLnNpemVbXCJpbm5lclwiK2VdfX0sby5nZXRGaXJzdEl0ZW1TaXplPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5pc290b3BlLmZpbHRlcmVkSXRlbXNbMF07cmV0dXJuIGUmJmUuZWxlbWVudCYmdChlLmVsZW1lbnQpfSxvLmxheW91dD1mdW5jdGlvbigpe3RoaXMuaXNvdG9wZS5sYXlvdXQuYXBwbHkodGhpcy5pc290b3BlLGFyZ3VtZW50cyl9LG8uZ2V0U2l6ZT1mdW5jdGlvbigpe3RoaXMuaXNvdG9wZS5nZXRTaXplKCksdGhpcy5zaXplPXRoaXMuaXNvdG9wZS5zaXplfSxpLm1vZGVzPXt9LGkuY3JlYXRlPWZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe2kuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBuLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKG8pLG4ucHJvdG90eXBlLmNvbnN0cnVjdG9yPW4sZSYmKG4ub3B0aW9ucz1lKSxuLnByb3RvdHlwZS5uYW1lc3BhY2U9dCxpLm1vZGVzW3RdPW4sbn0saX0pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIm1hc29ucnktbGF5b3V0L21hc29ucnlcIixbXCJvdXRsYXllci9vdXRsYXllclwiLFwiZ2V0LXNpemUvZ2V0LXNpemVcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwib3V0bGF5ZXJcIikscmVxdWlyZShcImdldC1zaXplXCIpKTp0Lk1hc29ucnk9ZSh0Lk91dGxheWVyLHQuZ2V0U2l6ZSl9KHdpbmRvdyxmdW5jdGlvbih0LGUpe3ZhciBpPXQuY3JlYXRlKFwibWFzb25yeVwiKTtpLmNvbXBhdE9wdGlvbnMuZml0V2lkdGg9XCJpc0ZpdFdpZHRoXCI7dmFyIG89aS5wcm90b3R5cGU7cmV0dXJuIG8uX3Jlc2V0TGF5b3V0PWZ1bmN0aW9uKCl7dGhpcy5nZXRTaXplKCksdGhpcy5fZ2V0TWVhc3VyZW1lbnQoXCJjb2x1bW5XaWR0aFwiLFwib3V0ZXJXaWR0aFwiKSx0aGlzLl9nZXRNZWFzdXJlbWVudChcImd1dHRlclwiLFwib3V0ZXJXaWR0aFwiKSx0aGlzLm1lYXN1cmVDb2x1bW5zKCksdGhpcy5jb2xZcz1bXTtmb3IodmFyIHQ9MDt0PHRoaXMuY29sczt0KyspdGhpcy5jb2xZcy5wdXNoKDApO3RoaXMubWF4WT0wLHRoaXMuaG9yaXpvbnRhbENvbEluZGV4PTB9LG8ubWVhc3VyZUNvbHVtbnM9ZnVuY3Rpb24oKXtpZih0aGlzLmdldENvbnRhaW5lcldpZHRoKCksIXRoaXMuY29sdW1uV2lkdGgpe3ZhciB0PXRoaXMuaXRlbXNbMF0saT10JiZ0LmVsZW1lbnQ7dGhpcy5jb2x1bW5XaWR0aD1pJiZlKGkpLm91dGVyV2lkdGh8fHRoaXMuY29udGFpbmVyV2lkdGh9dmFyIG89dGhpcy5jb2x1bW5XaWR0aCs9dGhpcy5ndXR0ZXIsbj10aGlzLmNvbnRhaW5lcldpZHRoK3RoaXMuZ3V0dGVyLHM9bi9vLHI9by1uJW8sYT1yJiZyPDE/XCJyb3VuZFwiOlwiZmxvb3JcIjtzPU1hdGhbYV0ocyksdGhpcy5jb2xzPU1hdGgubWF4KHMsMSl9LG8uZ2V0Q29udGFpbmVyV2lkdGg9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9nZXRPcHRpb24oXCJmaXRXaWR0aFwiKSxpPXQ/dGhpcy5lbGVtZW50LnBhcmVudE5vZGU6dGhpcy5lbGVtZW50LG89ZShpKTt0aGlzLmNvbnRhaW5lcldpZHRoPW8mJm8uaW5uZXJXaWR0aH0sby5fZ2V0SXRlbUxheW91dFBvc2l0aW9uPWZ1bmN0aW9uKHQpe3QuZ2V0U2l6ZSgpO3ZhciBlPXQuc2l6ZS5vdXRlcldpZHRoJXRoaXMuY29sdW1uV2lkdGgsaT1lJiZlPDE/XCJyb3VuZFwiOlwiY2VpbFwiLG89TWF0aFtpXSh0LnNpemUub3V0ZXJXaWR0aC90aGlzLmNvbHVtbldpZHRoKTtvPU1hdGgubWluKG8sdGhpcy5jb2xzKTtmb3IodmFyIG49dGhpcy5vcHRpb25zLmhvcml6b250YWxPcmRlcj9cIl9nZXRIb3Jpem9udGFsQ29sUG9zaXRpb25cIjpcIl9nZXRUb3BDb2xQb3NpdGlvblwiLHM9dGhpc1tuXShvLHQpLHI9e3g6dGhpcy5jb2x1bW5XaWR0aCpzLmNvbCx5OnMueX0sYT1zLnkrdC5zaXplLm91dGVySGVpZ2h0LHU9bytzLmNvbCxoPXMuY29sO2g8dTtoKyspdGhpcy5jb2xZc1toXT1hO3JldHVybiByfSxvLl9nZXRUb3BDb2xQb3NpdGlvbj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9nZXRUb3BDb2xHcm91cCh0KSxpPU1hdGgubWluLmFwcGx5KE1hdGgsZSk7cmV0dXJue2NvbDplLmluZGV4T2YoaSkseTppfX0sby5fZ2V0VG9wQ29sR3JvdXA9ZnVuY3Rpb24odCl7aWYodDwyKXJldHVybiB0aGlzLmNvbFlzO2Zvcih2YXIgZT1bXSxpPXRoaXMuY29scysxLXQsbz0wO288aTtvKyspZVtvXT10aGlzLl9nZXRDb2xHcm91cFkobyx0KTtyZXR1cm4gZX0sby5fZ2V0Q29sR3JvdXBZPWZ1bmN0aW9uKHQsZSl7aWYoZTwyKXJldHVybiB0aGlzLmNvbFlzW3RdO3ZhciBpPXRoaXMuY29sWXMuc2xpY2UodCx0K2UpO3JldHVybiBNYXRoLm1heC5hcHBseShNYXRoLGkpfSxvLl9nZXRIb3Jpem9udGFsQ29sUG9zaXRpb249ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmhvcml6b250YWxDb2xJbmRleCV0aGlzLmNvbHMsbz10PjEmJmkrdD50aGlzLmNvbHM7aT1vPzA6aTt2YXIgbj1lLnNpemUub3V0ZXJXaWR0aCYmZS5zaXplLm91dGVySGVpZ2h0O3JldHVybiB0aGlzLmhvcml6b250YWxDb2xJbmRleD1uP2krdDp0aGlzLmhvcml6b250YWxDb2xJbmRleCx7Y29sOmkseTp0aGlzLl9nZXRDb2xHcm91cFkoaSx0KX19LG8uX21hbmFnZVN0YW1wPWZ1bmN0aW9uKHQpe3ZhciBpPWUodCksbz10aGlzLl9nZXRFbGVtZW50T2Zmc2V0KHQpLG49dGhpcy5fZ2V0T3B0aW9uKFwib3JpZ2luTGVmdFwiKSxzPW4/by5sZWZ0Om8ucmlnaHQscj1zK2kub3V0ZXJXaWR0aCxhPU1hdGguZmxvb3Iocy90aGlzLmNvbHVtbldpZHRoKTthPU1hdGgubWF4KDAsYSk7dmFyIHU9TWF0aC5mbG9vcihyL3RoaXMuY29sdW1uV2lkdGgpO3UtPXIldGhpcy5jb2x1bW5XaWR0aD8wOjEsdT1NYXRoLm1pbih0aGlzLmNvbHMtMSx1KTtmb3IodmFyIGg9dGhpcy5fZ2V0T3B0aW9uKFwib3JpZ2luVG9wXCIpLGQ9KGg/by50b3A6by5ib3R0b20pK2kub3V0ZXJIZWlnaHQsbD1hO2w8PXU7bCsrKXRoaXMuY29sWXNbbF09TWF0aC5tYXgoZCx0aGlzLmNvbFlzW2xdKX0sby5fZ2V0Q29udGFpbmVyU2l6ZT1mdW5jdGlvbigpe3RoaXMubWF4WT1NYXRoLm1heC5hcHBseShNYXRoLHRoaXMuY29sWXMpO3ZhciB0PXtoZWlnaHQ6dGhpcy5tYXhZfTtyZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKFwiZml0V2lkdGhcIikmJih0LndpZHRoPXRoaXMuX2dldENvbnRhaW5lckZpdFdpZHRoKCkpLHR9LG8uX2dldENvbnRhaW5lckZpdFdpZHRoPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTAsZT10aGlzLmNvbHM7LS1lJiYwPT09dGhpcy5jb2xZc1tlXTspdCsrO3JldHVybih0aGlzLmNvbHMtdCkqdGhpcy5jb2x1bW5XaWR0aC10aGlzLmd1dHRlcn0sby5uZWVkc1Jlc2l6ZUxheW91dD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuY29udGFpbmVyV2lkdGg7cmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKSx0IT10aGlzLmNvbnRhaW5lcldpZHRofSxpfSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVzL21hc29ucnlcIixbXCIuLi9sYXlvdXQtbW9kZVwiLFwibWFzb25yeS1sYXlvdXQvbWFzb25yeVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCIuLi9sYXlvdXQtbW9kZVwiKSxyZXF1aXJlKFwibWFzb25yeS1sYXlvdXRcIikpOmUodC5Jc290b3BlLkxheW91dE1vZGUsdC5NYXNvbnJ5KX0od2luZG93LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dC5jcmVhdGUoXCJtYXNvbnJ5XCIpLG89aS5wcm90b3R5cGUsbj17X2dldEVsZW1lbnRPZmZzZXQ6ITAsbGF5b3V0OiEwLF9nZXRNZWFzdXJlbWVudDohMH07Zm9yKHZhciBzIGluIGUucHJvdG90eXBlKW5bc118fChvW3NdPWUucHJvdG90eXBlW3NdKTt2YXIgcj1vLm1lYXN1cmVDb2x1bW5zO28ubWVhc3VyZUNvbHVtbnM9ZnVuY3Rpb24oKXt0aGlzLml0ZW1zPXRoaXMuaXNvdG9wZS5maWx0ZXJlZEl0ZW1zLHIuY2FsbCh0aGlzKX07dmFyIGE9by5fZ2V0T3B0aW9uO3JldHVybiBvLl9nZXRPcHRpb249ZnVuY3Rpb24odCl7cmV0dXJuXCJmaXRXaWR0aFwiPT10P3ZvaWQgMCE9PXRoaXMub3B0aW9ucy5pc0ZpdFdpZHRoP3RoaXMub3B0aW9ucy5pc0ZpdFdpZHRoOnRoaXMub3B0aW9ucy5maXRXaWR0aDphLmFwcGx5KHRoaXMuaXNvdG9wZSxhcmd1bWVudHMpfSxpfSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVzL2ZpdC1yb3dzXCIsW1wiLi4vbGF5b3V0LW1vZGVcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwiLi4vbGF5b3V0LW1vZGVcIikpOmUodC5Jc290b3BlLkxheW91dE1vZGUpfSh3aW5kb3csZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9dC5jcmVhdGUoXCJmaXRSb3dzXCIpLGk9ZS5wcm90b3R5cGU7cmV0dXJuIGkuX3Jlc2V0TGF5b3V0PWZ1bmN0aW9uKCl7dGhpcy54PTAsdGhpcy55PTAsdGhpcy5tYXhZPTAsdGhpcy5fZ2V0TWVhc3VyZW1lbnQoXCJndXR0ZXJcIixcIm91dGVyV2lkdGhcIil9LGkuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbih0KXt0LmdldFNpemUoKTt2YXIgZT10LnNpemUub3V0ZXJXaWR0aCt0aGlzLmd1dHRlcixpPXRoaXMuaXNvdG9wZS5zaXplLmlubmVyV2lkdGgrdGhpcy5ndXR0ZXI7MCE9PXRoaXMueCYmZSt0aGlzLng+aSYmKHRoaXMueD0wLHRoaXMueT10aGlzLm1heFkpO3ZhciBvPXt4OnRoaXMueCx5OnRoaXMueX07cmV0dXJuIHRoaXMubWF4WT1NYXRoLm1heCh0aGlzLm1heFksdGhpcy55K3Quc2l6ZS5vdXRlckhlaWdodCksdGhpcy54Kz1lLG99LGkuX2dldENvbnRhaW5lclNpemU9ZnVuY3Rpb24oKXtyZXR1cm57aGVpZ2h0OnRoaXMubWF4WX19LGV9KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWxcIixbXCIuLi9sYXlvdXQtbW9kZVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCIuLi9sYXlvdXQtbW9kZVwiKSk6ZSh0Lklzb3RvcGUuTGF5b3V0TW9kZSl9KHdpbmRvdyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjt2YXIgZT10LmNyZWF0ZShcInZlcnRpY2FsXCIse2hvcml6b250YWxBbGlnbm1lbnQ6MH0pLGk9ZS5wcm90b3R5cGU7cmV0dXJuIGkuX3Jlc2V0TGF5b3V0PWZ1bmN0aW9uKCl7dGhpcy55PTB9LGkuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbih0KXt0LmdldFNpemUoKTt2YXIgZT0odGhpcy5pc290b3BlLnNpemUuaW5uZXJXaWR0aC10LnNpemUub3V0ZXJXaWR0aCkqdGhpcy5vcHRpb25zLmhvcml6b250YWxBbGlnbm1lbnQsaT10aGlzLnk7cmV0dXJuIHRoaXMueSs9dC5zaXplLm91dGVySGVpZ2h0LHt4OmUseTppfX0saS5fZ2V0Q29udGFpbmVyU2l6ZT1mdW5jdGlvbigpe3JldHVybntoZWlnaHQ6dGhpcy55fX0sZX0pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJvdXRsYXllci9vdXRsYXllclwiLFwiZ2V0LXNpemUvZ2V0LXNpemVcIixcImRlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3RvclwiLFwiZml6enktdWktdXRpbHMvdXRpbHNcIixcImlzb3RvcGUtbGF5b3V0L2pzL2l0ZW1cIixcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2RlXCIsXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvbWFzb25yeVwiLFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVzL2ZpdC1yb3dzXCIsXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWxcIl0sZnVuY3Rpb24oaSxvLG4scyxyLGEpe3JldHVybiBlKHQsaSxvLG4scyxyLGEpfSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSh0LHJlcXVpcmUoXCJvdXRsYXllclwiKSxyZXF1aXJlKFwiZ2V0LXNpemVcIikscmVxdWlyZShcImRlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3JcIikscmVxdWlyZShcImZpenp5LXVpLXV0aWxzXCIpLHJlcXVpcmUoXCJpc290b3BlLWxheW91dC9qcy9pdGVtXCIpLHJlcXVpcmUoXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZVwiKSxyZXF1aXJlKFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVzL21hc29ucnlcIikscmVxdWlyZShcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy9maXQtcm93c1wiKSxyZXF1aXJlKFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVzL3ZlcnRpY2FsXCIpKTp0Lklzb3RvcGU9ZSh0LHQuT3V0bGF5ZXIsdC5nZXRTaXplLHQubWF0Y2hlc1NlbGVjdG9yLHQuZml6enlVSVV0aWxzLHQuSXNvdG9wZS5JdGVtLHQuSXNvdG9wZS5MYXlvdXRNb2RlKX0od2luZG93LGZ1bmN0aW9uKHQsZSxpLG8sbixzLHIpe2Z1bmN0aW9uIGEodCxlKXtyZXR1cm4gZnVuY3Rpb24oaSxvKXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHM9dFtuXSxyPWkuc29ydERhdGFbc10sYT1vLnNvcnREYXRhW3NdO2lmKHI+YXx8cjxhKXt2YXIgdT12b2lkIDAhPT1lW3NdP2Vbc106ZSxoPXU/MTotMTtyZXR1cm4ocj5hPzE6LTEpKmh9fXJldHVybiAwfX12YXIgdT10LmpRdWVyeSxoPVN0cmluZy5wcm90b3R5cGUudHJpbT9mdW5jdGlvbih0KXtyZXR1cm4gdC50cmltKCl9OmZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIil9LGQ9ZS5jcmVhdGUoXCJpc290b3BlXCIse2xheW91dE1vZGU6XCJtYXNvbnJ5XCIsaXNKUXVlcnlGaWx0ZXJpbmc6ITAsc29ydEFzY2VuZGluZzohMH0pO2QuSXRlbT1zLGQuTGF5b3V0TW9kZT1yO3ZhciBsPWQucHJvdG90eXBlO2wuX2NyZWF0ZT1mdW5jdGlvbigpe3RoaXMuaXRlbUdVSUQ9MCx0aGlzLl9zb3J0ZXJzPXt9LHRoaXMuX2dldFNvcnRlcnMoKSxlLnByb3RvdHlwZS5fY3JlYXRlLmNhbGwodGhpcyksdGhpcy5tb2Rlcz17fSx0aGlzLmZpbHRlcmVkSXRlbXM9dGhpcy5pdGVtcyx0aGlzLnNvcnRIaXN0b3J5PVtcIm9yaWdpbmFsLW9yZGVyXCJdO2Zvcih2YXIgdCBpbiByLm1vZGVzKXRoaXMuX2luaXRMYXlvdXRNb2RlKHQpfSxsLnJlbG9hZEl0ZW1zPWZ1bmN0aW9uKCl7dGhpcy5pdGVtR1VJRD0wLGUucHJvdG90eXBlLnJlbG9hZEl0ZW1zLmNhbGwodGhpcyl9LGwuX2l0ZW1pemU9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9ZS5wcm90b3R5cGUuX2l0ZW1pemUuYXBwbHkodGhpcyxhcmd1bWVudHMpLGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIG89dFtpXTtvLmlkPXRoaXMuaXRlbUdVSUQrK31yZXR1cm4gdGhpcy5fdXBkYXRlSXRlbXNTb3J0RGF0YSh0KSx0fSxsLl9pbml0TGF5b3V0TW9kZT1mdW5jdGlvbih0KXt2YXIgZT1yLm1vZGVzW3RdLGk9dGhpcy5vcHRpb25zW3RdfHx7fTt0aGlzLm9wdGlvbnNbdF09ZS5vcHRpb25zP24uZXh0ZW5kKGUub3B0aW9ucyxpKTppLHRoaXMubW9kZXNbdF09bmV3IGUodGhpcyl9LGwubGF5b3V0PWZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuX2lzTGF5b3V0SW5pdGVkJiZ0aGlzLl9nZXRPcHRpb24oXCJpbml0TGF5b3V0XCIpP3ZvaWQgdGhpcy5hcnJhbmdlKCk6dm9pZCB0aGlzLl9sYXlvdXQoKX0sbC5fbGF5b3V0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZ2V0SXNJbnN0YW50KCk7dGhpcy5fcmVzZXRMYXlvdXQoKSx0aGlzLl9tYW5hZ2VTdGFtcHMoKSx0aGlzLmxheW91dEl0ZW1zKHRoaXMuZmlsdGVyZWRJdGVtcyx0KSx0aGlzLl9pc0xheW91dEluaXRlZD0hMH0sbC5hcnJhbmdlPWZ1bmN0aW9uKHQpe3RoaXMub3B0aW9uKHQpLHRoaXMuX2dldElzSW5zdGFudCgpO3ZhciBlPXRoaXMuX2ZpbHRlcih0aGlzLml0ZW1zKTt0aGlzLmZpbHRlcmVkSXRlbXM9ZS5tYXRjaGVzLHRoaXMuX2JpbmRBcnJhbmdlQ29tcGxldGUoKSx0aGlzLl9pc0luc3RhbnQ/dGhpcy5fbm9UcmFuc2l0aW9uKHRoaXMuX2hpZGVSZXZlYWwsW2VdKTp0aGlzLl9oaWRlUmV2ZWFsKGUpLHRoaXMuX3NvcnQoKSx0aGlzLl9sYXlvdXQoKX0sbC5faW5pdD1sLmFycmFuZ2UsbC5faGlkZVJldmVhbD1mdW5jdGlvbih0KXt0aGlzLnJldmVhbCh0Lm5lZWRSZXZlYWwpLHRoaXMuaGlkZSh0Lm5lZWRIaWRlKX0sbC5fZ2V0SXNJbnN0YW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZ2V0T3B0aW9uKFwibGF5b3V0SW5zdGFudFwiKSxlPXZvaWQgMCE9PXQ/dDohdGhpcy5faXNMYXlvdXRJbml0ZWQ7cmV0dXJuIHRoaXMuX2lzSW5zdGFudD1lLGV9LGwuX2JpbmRBcnJhbmdlQ29tcGxldGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7ZSYmaSYmbyYmbi5kaXNwYXRjaEV2ZW50KFwiYXJyYW5nZUNvbXBsZXRlXCIsbnVsbCxbbi5maWx0ZXJlZEl0ZW1zXSl9dmFyIGUsaSxvLG49dGhpczt0aGlzLm9uY2UoXCJsYXlvdXRDb21wbGV0ZVwiLGZ1bmN0aW9uKCl7ZT0hMCx0KCl9KSx0aGlzLm9uY2UoXCJoaWRlQ29tcGxldGVcIixmdW5jdGlvbigpe2k9ITAsdCgpfSksdGhpcy5vbmNlKFwicmV2ZWFsQ29tcGxldGVcIixmdW5jdGlvbigpe289ITAsdCgpfSl9LGwuX2ZpbHRlcj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLm9wdGlvbnMuZmlsdGVyO2U9ZXx8XCIqXCI7Zm9yKHZhciBpPVtdLG89W10sbj1bXSxzPXRoaXMuX2dldEZpbHRlclRlc3QoZSkscj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgYT10W3JdO2lmKCFhLmlzSWdub3JlZCl7dmFyIHU9cyhhKTt1JiZpLnB1c2goYSksdSYmYS5pc0hpZGRlbj9vLnB1c2goYSk6dXx8YS5pc0hpZGRlbnx8bi5wdXNoKGEpfX1yZXR1cm57bWF0Y2hlczppLG5lZWRSZXZlYWw6byxuZWVkSGlkZTpufX0sbC5fZ2V0RmlsdGVyVGVzdD1mdW5jdGlvbih0KXtyZXR1cm4gdSYmdGhpcy5vcHRpb25zLmlzSlF1ZXJ5RmlsdGVyaW5nP2Z1bmN0aW9uKGUpe3JldHVybiB1KGUuZWxlbWVudCkuaXModCk7XHJcbn06XCJmdW5jdGlvblwiPT10eXBlb2YgdD9mdW5jdGlvbihlKXtyZXR1cm4gdChlLmVsZW1lbnQpfTpmdW5jdGlvbihlKXtyZXR1cm4gbyhlLmVsZW1lbnQsdCl9fSxsLnVwZGF0ZVNvcnREYXRhPWZ1bmN0aW9uKHQpe3ZhciBlO3Q/KHQ9bi5tYWtlQXJyYXkodCksZT10aGlzLmdldEl0ZW1zKHQpKTplPXRoaXMuaXRlbXMsdGhpcy5fZ2V0U29ydGVycygpLHRoaXMuX3VwZGF0ZUl0ZW1zU29ydERhdGEoZSl9LGwuX2dldFNvcnRlcnM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMuZ2V0U29ydERhdGE7Zm9yKHZhciBlIGluIHQpe3ZhciBpPXRbZV07dGhpcy5fc29ydGVyc1tlXT1mKGkpfX0sbC5fdXBkYXRlSXRlbXNTb3J0RGF0YT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dCYmdC5sZW5ndGgsaT0wO2UmJmk8ZTtpKyspe3ZhciBvPXRbaV07by51cGRhdGVTb3J0RGF0YSgpfX07dmFyIGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiB0O3ZhciBpPWgodCkuc3BsaXQoXCIgXCIpLG89aVswXSxuPW8ubWF0Y2goL15cXFsoLispXFxdJC8pLHM9biYmblsxXSxyPWUocyxvKSxhPWQuc29ydERhdGFQYXJzZXJzW2lbMV1dO3JldHVybiB0PWE/ZnVuY3Rpb24odCl7cmV0dXJuIHQmJmEocih0KSl9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZyKHQpfX1mdW5jdGlvbiBlKHQsZSl7cmV0dXJuIHQ/ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQpfTpmdW5jdGlvbih0KXt2YXIgaT10LnF1ZXJ5U2VsZWN0b3IoZSk7cmV0dXJuIGkmJmkudGV4dENvbnRlbnR9fXJldHVybiB0fSgpO2Quc29ydERhdGFQYXJzZXJzPXtwYXJzZUludDpmdW5jdGlvbih0KXtyZXR1cm4gcGFyc2VJbnQodCwxMCl9LHBhcnNlRmxvYXQ6ZnVuY3Rpb24odCl7cmV0dXJuIHBhcnNlRmxvYXQodCl9fSxsLl9zb3J0PWZ1bmN0aW9uKCl7aWYodGhpcy5vcHRpb25zLnNvcnRCeSl7dmFyIHQ9bi5tYWtlQXJyYXkodGhpcy5vcHRpb25zLnNvcnRCeSk7dGhpcy5fZ2V0SXNTYW1lU29ydEJ5KHQpfHwodGhpcy5zb3J0SGlzdG9yeT10LmNvbmNhdCh0aGlzLnNvcnRIaXN0b3J5KSk7dmFyIGU9YSh0aGlzLnNvcnRIaXN0b3J5LHRoaXMub3B0aW9ucy5zb3J0QXNjZW5kaW5nKTt0aGlzLmZpbHRlcmVkSXRlbXMuc29ydChlKX19LGwuX2dldElzU2FtZVNvcnRCeT1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKylpZih0W2VdIT10aGlzLnNvcnRIaXN0b3J5W2VdKXJldHVybiExO3JldHVybiEwfSxsLl9tb2RlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLmxheW91dE1vZGUsZT10aGlzLm1vZGVzW3RdO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIk5vIGxheW91dCBtb2RlOiBcIit0KTtyZXR1cm4gZS5vcHRpb25zPXRoaXMub3B0aW9uc1t0XSxlfSxsLl9yZXNldExheW91dD1mdW5jdGlvbigpe2UucHJvdG90eXBlLl9yZXNldExheW91dC5jYWxsKHRoaXMpLHRoaXMuX21vZGUoKS5fcmVzZXRMYXlvdXQoKX0sbC5fZ2V0SXRlbUxheW91dFBvc2l0aW9uPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tb2RlKCkuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbih0KX0sbC5fbWFuYWdlU3RhbXA9ZnVuY3Rpb24odCl7dGhpcy5fbW9kZSgpLl9tYW5hZ2VTdGFtcCh0KX0sbC5fZ2V0Q29udGFpbmVyU2l6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tb2RlKCkuX2dldENvbnRhaW5lclNpemUoKX0sbC5uZWVkc1Jlc2l6ZUxheW91dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tb2RlKCkubmVlZHNSZXNpemVMYXlvdXQoKX0sbC5hcHBlbmRlZD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmFkZEl0ZW1zKHQpO2lmKGUubGVuZ3RoKXt2YXIgaT10aGlzLl9maWx0ZXJSZXZlYWxBZGRlZChlKTt0aGlzLmZpbHRlcmVkSXRlbXM9dGhpcy5maWx0ZXJlZEl0ZW1zLmNvbmNhdChpKX19LGwucHJlcGVuZGVkPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2l0ZW1pemUodCk7aWYoZS5sZW5ndGgpe3RoaXMuX3Jlc2V0TGF5b3V0KCksdGhpcy5fbWFuYWdlU3RhbXBzKCk7dmFyIGk9dGhpcy5fZmlsdGVyUmV2ZWFsQWRkZWQoZSk7dGhpcy5sYXlvdXRJdGVtcyh0aGlzLmZpbHRlcmVkSXRlbXMpLHRoaXMuZmlsdGVyZWRJdGVtcz1pLmNvbmNhdCh0aGlzLmZpbHRlcmVkSXRlbXMpLHRoaXMuaXRlbXM9ZS5jb25jYXQodGhpcy5pdGVtcyl9fSxsLl9maWx0ZXJSZXZlYWxBZGRlZD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9maWx0ZXIodCk7cmV0dXJuIHRoaXMuaGlkZShlLm5lZWRIaWRlKSx0aGlzLnJldmVhbChlLm1hdGNoZXMpLHRoaXMubGF5b3V0SXRlbXMoZS5tYXRjaGVzLCEwKSxlLm1hdGNoZXN9LGwuaW5zZXJ0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYWRkSXRlbXModCk7aWYoZS5sZW5ndGgpe3ZhciBpLG8sbj1lLmxlbmd0aDtmb3IoaT0wO2k8bjtpKyspbz1lW2ldLHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChvLmVsZW1lbnQpO3ZhciBzPXRoaXMuX2ZpbHRlcihlKS5tYXRjaGVzO2ZvcihpPTA7aTxuO2krKyllW2ldLmlzTGF5b3V0SW5zdGFudD0hMDtmb3IodGhpcy5hcnJhbmdlKCksaT0wO2k8bjtpKyspZGVsZXRlIGVbaV0uaXNMYXlvdXRJbnN0YW50O3RoaXMucmV2ZWFsKHMpfX07dmFyIGM9bC5yZW1vdmU7cmV0dXJuIGwucmVtb3ZlPWZ1bmN0aW9uKHQpe3Q9bi5tYWtlQXJyYXkodCk7dmFyIGU9dGhpcy5nZXRJdGVtcyh0KTtjLmNhbGwodGhpcyx0KTtmb3IodmFyIGk9ZSYmZS5sZW5ndGgsbz0wO2kmJm88aTtvKyspe3ZhciBzPWVbb107bi5yZW1vdmVGcm9tKHRoaXMuZmlsdGVyZWRJdGVtcyxzKX19LGwuc2h1ZmZsZT1mdW5jdGlvbigpe2Zvcih2YXIgdD0wO3Q8dGhpcy5pdGVtcy5sZW5ndGg7dCsrKXt2YXIgZT10aGlzLml0ZW1zW3RdO2Uuc29ydERhdGEucmFuZG9tPU1hdGgucmFuZG9tKCl9dGhpcy5vcHRpb25zLnNvcnRCeT1cInJhbmRvbVwiLHRoaXMuX3NvcnQoKSx0aGlzLl9sYXlvdXQoKX0sbC5fbm9UcmFuc2l0aW9uPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbjt0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uPTA7dmFyIG89dC5hcHBseSh0aGlzLGUpO3JldHVybiB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uPWksb30sbC5nZXRGaWx0ZXJlZEl0ZW1FbGVtZW50cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZpbHRlcmVkSXRlbXMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LmVsZW1lbnR9KX0sZH0pO1xyXG5cclxufSIsIi8qKlxuICogU1NSIFdpbmRvdyA0LjAuMlxuICogQmV0dGVyIGhhbmRsaW5nIGZvciB3aW5kb3cgb2JqZWN0IGluIFNTUiBlbnZpcm9ubWVudFxuICogaHR0cHM6Ly9naXRodWIuY29tL25vbGltaXRzNHdlYi9zc3Itd2luZG93XG4gKlxuICogQ29weXJpZ2h0IDIwMjEsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IERlY2VtYmVyIDEzLCAyMDIxXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gKG9iaiAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAnY29uc3RydWN0b3InIGluIG9iaiAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdCk7XG59XG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0ID0ge30sIHNyYyA9IHt9KSB7XG4gICAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgICAgICBlbHNlIGlmIChpc09iamVjdChzcmNba2V5XSkgJiZcbiAgICAgICAgICAgIGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3JjW2tleV0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSwgc3JjW2tleV0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IHNzckRvY3VtZW50ID0ge1xuICAgIGJvZHk6IHt9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXIoKSB7IH0sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHsgfSxcbiAgICBhY3RpdmVFbGVtZW50OiB7XG4gICAgICAgIGJsdXIoKSB7IH0sXG4gICAgICAgIG5vZGVOYW1lOiAnJyxcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvckFsbCgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgZ2V0RWxlbWVudEJ5SWQoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgY3JlYXRlRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0RXZlbnQoKSB7IH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUoKSB7IH0sXG4gICAgICAgICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudE5TKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBpbXBvcnROb2RlKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGhhc2g6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgfSxcbn07XG5mdW5jdGlvbiBnZXREb2N1bWVudCgpIHtcbiAgICBjb25zdCBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB7fTtcbiAgICBleHRlbmQoZG9jLCBzc3JEb2N1bWVudCk7XG4gICAgcmV0dXJuIGRvYztcbn1cblxuY29uc3Qgc3NyV2luZG93ID0ge1xuICAgIGRvY3VtZW50OiBzc3JEb2N1bWVudCxcbiAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgdXNlckFnZW50OiAnJyxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGhhc2g6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgfSxcbiAgICBoaXN0b3J5OiB7XG4gICAgICAgIHJlcGxhY2VTdGF0ZSgpIHsgfSxcbiAgICAgICAgcHVzaFN0YXRlKCkgeyB9LFxuICAgICAgICBnbygpIHsgfSxcbiAgICAgICAgYmFjaygpIHsgfSxcbiAgICB9LFxuICAgIEN1c3RvbUV2ZW50OiBmdW5jdGlvbiBDdXN0b21FdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBhZGRFdmVudExpc3RlbmVyKCkgeyB9LFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7IH0sXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldFByb3BlcnR5VmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIEltYWdlKCkgeyB9LFxuICAgIERhdGUoKSB7IH0sXG4gICAgc2NyZWVuOiB7fSxcbiAgICBzZXRUaW1lb3V0KCkgeyB9LFxuICAgIGNsZWFyVGltZW91dCgpIHsgfSxcbiAgICBtYXRjaE1lZGlhKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICB9LFxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH0sXG59O1xuZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICAgIGNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG4gICAgZXh0ZW5kKHdpbiwgc3NyV2luZG93KTtcbiAgICByZXR1cm4gd2luO1xufVxuXG5leHBvcnQgeyBleHRlbmQsIGdldERvY3VtZW50LCBnZXRXaW5kb3csIHNzckRvY3VtZW50LCBzc3JXaW5kb3cgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9