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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_data__ = __webpack_require__(/*! @wordpress/data */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_data__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);\n/**\n * BLOCK: opdracht3-fancypager\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n // get page data\n // selectControl for selecting page\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType(\"schakel-opdrachten/block-opdracht3-fancypager\", {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __(\"Opdracht 3 - Fancypager\"), // Block title.\n\ticon: \"smiley\", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: \"common\", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__(\"opdracht3-fancypager — Fancypager\"), __(\"CGB Example\"), __(\"create-guten-block\")],\n\tattributes: {\n\t\tselectedPageData: {\n\t\t\ttype: \"object\"\n\t\t},\n\t\tselectedPageId: {\n\t\t\ttype: \"integer\"\n\t\t},\n\t\tpostFeaturedImage: {\n\t\t\ttype: \"string\"\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: Object(__WEBPACK_IMPORTED_MODULE_2__wordpress_data__[\"withSelect\"])(function (select) {\n\t\tvar posts = select(\"core\").getEntityRecords(\"postType\", \"page\", {});\n\n\t\tvar media = {};\n\n\t\tif (posts) {\n\t\t\tposts.forEach(function (post) {\n\t\t\t\tmedia[post.id] = select(\"core\").getMedia(post.featured_media);\n\t\t\t});\n\t\t}\n\n\t\treturn {\n\t\t\tpostsData: {\n\t\t\t\tposts: posts,\n\t\t\t\tmedia: media\n\t\t\t}\n\t\t};\n\t})(function (_ref) {\n\t\tvar postsData = _ref.postsData,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    className = _ref.className,\n\t\t    attributes = _ref.attributes;\n\t\tvar media = postsData.media,\n\t\t    posts = postsData.posts;\n\n\t\t// return 'loading' state, if no page data available\n\n\t\tif (!posts || !posts.length || !media) {\n\t\t\treturn wp.element.createElement(\n\t\t\t\t\"p\",\n\t\t\t\tnull,\n\t\t\t\t__(\"Loading post data...\", \"wholesomecode\")\n\t\t\t);\n\t\t}\n\n\t\tif (attributes.selectedPageId || attributes.selectedPageId === 0) {\n\t\t\tposts.forEach(function (post) {\n\t\t\t\tif (post.id === attributes.selectedPageId) {\n\t\t\t\t\tsetAttributes({ selectedPageData: post });\n\t\t\t\t}\n\t\t\t});\n\t\t} else {\n\t\t\tsetAttributes({\n\t\t\t\tselectedPageId: posts[0].id,\n\t\t\t\tselectedPageData: posts[0]\n\t\t\t});\n\t\t}\n\n\t\tconsole.log(attributes.selectedPageData);\n\n\t\tvar selectControlOptions = posts.map(function (post) {\n\t\t\treturn {\n\t\t\t\tvalue: post.id,\n\t\t\t\tlabel: post.title.raw\n\t\t\t};\n\t\t});\n\n\t\t// selectControlOptions.unshift({\n\t\t// \tvalue: 0,\n\t\t// \tlabel: 'Select a page:',\n\t\t// });\n\n\t\tvar selectControl = wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"SelectControl\"], {\n\t\t\tlabel: __(\"Select page:\"),\n\t\t\tvalue: attributes.selectedPageId // e.g: value = [ 'a', 'c' ]\n\t\t\t, onChange: function onChange(page) {\n\t\t\t\tsetAttributes({ selectedPageId: Number(page) });\n\t\t\t},\n\t\t\toptions: selectControlOptions\n\t\t});\n\n\t\tif (media[attributes.selectedPageId]) {\n\t\t\tvar image = media[attributes.selectedPageId].media_details.sizes.full.source_url;\n\t\t\tsetAttributes({ postFeaturedImage: image });\n\t\t}\n\n\t\tif (!attributes.selectedPageData) {\n\t\t\treturn wp.element.createElement(\n\t\t\t\t\"p\",\n\t\t\t\tnull,\n\t\t\t\t\"No page data available\"\n\t\t\t);\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: className },\n\t\t\tselectControl,\n\t\t\twp.element.createElement(\n\t\t\t\t\"h3\",\n\t\t\t\tnull,\n\t\t\t\tattributes.selectedPageData.title.raw\n\t\t\t),\n\t\t\twp.element.createElement(\"img\", { src: attributes.postFeaturedImage }),\n\t\t\twp.element.createElement(\n\t\t\t\t\"p\",\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"a\",\n\t\t\t\t\t{ href: attributes.selectedPageData.link },\n\t\t\t\t\t\"Visit page\"\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}),\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\t\tif (!attributes.selectedPageData) {\n\t\t\treturn wp.element.createElement(\n\t\t\t\t\"p\",\n\t\t\t\tnull,\n\t\t\t\t\"No page data available\"\n\t\t\t);\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t\"h3\",\n\t\t\t\t{ className: \"title\" },\n\t\t\t\tattributes.selectedPageData.title.raw\n\t\t\t),\n\t\t\twp.element.createElement(\"img\", { src: attributes.postFeaturedImage }),\n\t\t\twp.element.createElement(\n\t\t\t\t\"p\",\n\t\t\t\t{ className: \"content\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"a\",\n\t\t\t\t\t{ href: attributes.selectedPageData.link },\n\t\t\t\t\t\"Visit page\"\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IG9wZHJhY2h0My1mYW5jeXBhZ2VyXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyB3aXRoU2VsZWN0IH0gZnJvbSBcIkB3b3JkcHJlc3MvZGF0YVwiOyAvLyBnZXQgcGFnZSBkYXRhXG5pbXBvcnQgeyBTZWxlY3RDb250cm9sIH0gZnJvbSBcIkB3b3JkcHJlc3MvY29tcG9uZW50c1wiOyAvLyBzZWxlY3RDb250cm9sIGZvciBzZWxlY3RpbmcgcGFnZVxuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZShcInNjaGFrZWwtb3BkcmFjaHRlbi9ibG9jay1vcGRyYWNodDMtZmFuY3lwYWdlclwiLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oXCJPcGRyYWNodCAzIC0gRmFuY3lwYWdlclwiKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246IFwic21pbGV5XCIsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6IFwiY29tbW9uXCIsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKFwib3BkcmFjaHQzLWZhbmN5cGFnZXIg4oCUIEZhbmN5cGFnZXJcIiksIF9fKFwiQ0dCIEV4YW1wbGVcIiksIF9fKFwiY3JlYXRlLWd1dGVuLWJsb2NrXCIpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdHNlbGVjdGVkUGFnZURhdGE6IHtcblx0XHRcdHR5cGU6IFwib2JqZWN0XCJcblx0XHR9LFxuXHRcdHNlbGVjdGVkUGFnZUlkOiB7XG5cdFx0XHR0eXBlOiBcImludGVnZXJcIlxuXHRcdH0sXG5cdFx0cG9zdEZlYXR1cmVkSW1hZ2U6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCJcblx0XHR9XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggQ29tcG9uZW50LlxuICAqL1xuXHRlZGl0OiB3aXRoU2VsZWN0KGZ1bmN0aW9uIChzZWxlY3QpIHtcblx0XHR2YXIgcG9zdHMgPSBzZWxlY3QoXCJjb3JlXCIpLmdldEVudGl0eVJlY29yZHMoXCJwb3N0VHlwZVwiLCBcInBhZ2VcIiwge30pO1xuXG5cdFx0dmFyIG1lZGlhID0ge307XG5cblx0XHRpZiAocG9zdHMpIHtcblx0XHRcdHBvc3RzLmZvckVhY2goZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRcdFx0bWVkaWFbcG9zdC5pZF0gPSBzZWxlY3QoXCJjb3JlXCIpLmdldE1lZGlhKHBvc3QuZmVhdHVyZWRfbWVkaWEpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHBvc3RzRGF0YToge1xuXHRcdFx0XHRwb3N0czogcG9zdHMsXG5cdFx0XHRcdG1lZGlhOiBtZWRpYVxuXHRcdFx0fVxuXHRcdH07XG5cdH0pKGZ1bmN0aW9uIChfcmVmKSB7XG5cdFx0dmFyIHBvc3RzRGF0YSA9IF9yZWYucG9zdHNEYXRhLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcztcblx0XHR2YXIgbWVkaWEgPSBwb3N0c0RhdGEubWVkaWEsXG5cdFx0ICAgIHBvc3RzID0gcG9zdHNEYXRhLnBvc3RzO1xuXG5cdFx0Ly8gcmV0dXJuICdsb2FkaW5nJyBzdGF0ZSwgaWYgbm8gcGFnZSBkYXRhIGF2YWlsYWJsZVxuXG5cdFx0aWYgKCFwb3N0cyB8fCAhcG9zdHMubGVuZ3RoIHx8ICFtZWRpYSkge1xuXHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJwXCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdF9fKFwiTG9hZGluZyBwb3N0IGRhdGEuLi5cIiwgXCJ3aG9sZXNvbWVjb2RlXCIpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChhdHRyaWJ1dGVzLnNlbGVjdGVkUGFnZUlkIHx8IGF0dHJpYnV0ZXMuc2VsZWN0ZWRQYWdlSWQgPT09IDApIHtcblx0XHRcdHBvc3RzLmZvckVhY2goZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRcdFx0aWYgKHBvc3QuaWQgPT09IGF0dHJpYnV0ZXMuc2VsZWN0ZWRQYWdlSWQpIHtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgc2VsZWN0ZWRQYWdlRGF0YTogcG9zdCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRzZWxlY3RlZFBhZ2VJZDogcG9zdHNbMF0uaWQsXG5cdFx0XHRcdHNlbGVjdGVkUGFnZURhdGE6IHBvc3RzWzBdXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhhdHRyaWJ1dGVzLnNlbGVjdGVkUGFnZURhdGEpO1xuXG5cdFx0dmFyIHNlbGVjdENvbnRyb2xPcHRpb25zID0gcG9zdHMubWFwKGZ1bmN0aW9uIChwb3N0KSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogcG9zdC5pZCxcblx0XHRcdFx0bGFiZWw6IHBvc3QudGl0bGUucmF3XG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0Ly8gc2VsZWN0Q29udHJvbE9wdGlvbnMudW5zaGlmdCh7XG5cdFx0Ly8gXHR2YWx1ZTogMCxcblx0XHQvLyBcdGxhYmVsOiAnU2VsZWN0IGEgcGFnZTonLFxuXHRcdC8vIH0pO1xuXG5cdFx0dmFyIHNlbGVjdENvbnRyb2wgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdFx0bGFiZWw6IF9fKFwiU2VsZWN0IHBhZ2U6XCIpLFxuXHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuc2VsZWN0ZWRQYWdlSWQgLy8gZS5nOiB2YWx1ZSA9IFsgJ2EnLCAnYycgXVxuXHRcdFx0LCBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UocGFnZSkge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgc2VsZWN0ZWRQYWdlSWQ6IE51bWJlcihwYWdlKSB9KTtcblx0XHRcdH0sXG5cdFx0XHRvcHRpb25zOiBzZWxlY3RDb250cm9sT3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0aWYgKG1lZGlhW2F0dHJpYnV0ZXMuc2VsZWN0ZWRQYWdlSWRdKSB7XG5cdFx0XHR2YXIgaW1hZ2UgPSBtZWRpYVthdHRyaWJ1dGVzLnNlbGVjdGVkUGFnZUlkXS5tZWRpYV9kZXRhaWxzLnNpemVzLmZ1bGwuc291cmNlX3VybDtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBwb3N0RmVhdHVyZWRJbWFnZTogaW1hZ2UgfSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFhdHRyaWJ1dGVzLnNlbGVjdGVkUGFnZURhdGEpIHtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwicFwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcIk5vIHBhZ2UgZGF0YSBhdmFpbGFibGVcIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHNlbGVjdENvbnRyb2wsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0YXR0cmlidXRlcy5zZWxlY3RlZFBhZ2VEYXRhLnRpdGxlLnJhd1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYXR0cmlidXRlcy5wb3N0RmVhdHVyZWRJbWFnZSB9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJwXCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImFcIixcblx0XHRcdFx0XHR7IGhyZWY6IGF0dHJpYnV0ZXMuc2VsZWN0ZWRQYWdlRGF0YS5saW5rIH0sXG5cdFx0XHRcdFx0XCJWaXNpdCBwYWdlXCJcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0pLFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggRnJvbnRlbmQgSFRNTC5cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblxuXHRcdGlmICghYXR0cmlidXRlcy5zZWxlY3RlZFBhZ2VEYXRhKSB7XG5cdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcInBcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XCJObyBwYWdlIGRhdGEgYXZhaWxhYmxlXCJcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImgzXCIsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBcInRpdGxlXCIgfSxcblx0XHRcdFx0YXR0cmlidXRlcy5zZWxlY3RlZFBhZ2VEYXRhLnRpdGxlLnJhd1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYXR0cmlidXRlcy5wb3N0RmVhdHVyZWRJbWFnZSB9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJwXCIsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBcImNvbnRlbnRcIiB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJhXCIsXG5cdFx0XHRcdFx0eyBocmVmOiBhdHRyaWJ1dGVzLnNlbGVjdGVkUGFnZURhdGEubGluayB9LFxuXHRcdFx0XHRcdFwiVmlzaXQgcGFnZVwiXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: withSelect */
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ }),
/* 5 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: SelectControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ })
/******/ ]);