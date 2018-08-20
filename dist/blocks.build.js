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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var el = wp.element.createElement;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    BlockControls = _wp$editor.BlockControls,\n    BlockFormatControls = _wp$editor.BlockFormatControls,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    Dashicon = _wp$components.Dashicon,\n    Tooltip = _wp$components.Tooltip,\n    IconButton = _wp$components.IconButton,\n    Toolbar = _wp$components.Toolbar;\n\nvar editors = {}; //stores all the TinyMCE editors in our blocks\n\nregisterBlockType('my-block-plugin/block-w-insert-shortcode', {\n\ttitle: 'Block w Shortcode Button',\n\ticon: 'universal-access-alt',\n\tcategory: 'layout',\n\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children'\n\t\t},\n\t\talignment: {\n\t\t\ttype: 'string'\n\t\t},\n\t\teditorID: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\tedit: function edit(props) {\n\n\t\tvar content = props.attributes.content,\n\t\t    alignment = props.attributes.alignment,\n\t\t    editorID = props.attributes.editorID;\n\n\t\tfunction onChangeContent(newContent) {\n\t\t\tprops.setAttributes({ content: newContent });\n\t\t}\n\n\t\tfunction onChangeAlignment(newAlignment) {\n\t\t\tprops.setAttributes({ alignment: newAlignment });\n\t\t}\n\n\t\tfunction onClickShortcodeButton(event, editorID) {\n\t\t\tvar activeEditor = editors[props.attributes.editorID];\n\t\t\tvar myContent = '[myshortcode][/myshortcode]';\n\t\t\tactiveEditor.execCommand('mceInsertContent', false, myContent);\n\t\t}\n\n\t\tfunction onEditorSetup(editor) {\n\t\t\t//store a reference to this editor\n\t\t\teditors[editor.id] = editor;\n\t\t\t//store a reference to the editor ID within the Block\n\t\t\tprops.setAttributes({ editorID: editor.id });\n\t\t}\n\n\t\treturn [el(BlockFormatControls, { key: 'controls-custom' }, wp.element.createElement(\n\t\t\tToolbar,\n\t\t\tnull,\n\t\t\twp.element.createElement(IconButton, {\n\t\t\t\ticon: 'edit',\n\t\t\t\tlabel: 'Insert Shortcode',\n\t\t\t\tonClick: function onClick(event) {\n\t\t\t\t\treturn onClickShortcodeButton(event, editorID);\n\t\t\t\t}\n\t\t\t})\n\t\t)), el(BlockControls, { key: 'controls-alignment' }, el(AlignmentToolbar, {\n\t\t\tvalue: alignment,\n\t\t\tonChange: onChangeAlignment\n\t\t})), el(RichText, {\n\t\t\tkey: 'editable',\n\t\t\ttagName: 'p',\n\t\t\tclassName: props.className,\n\t\t\tstyle: { textAlign: alignment },\n\t\t\tonChange: onChangeContent,\n\t\t\tvalue: content,\n\t\t\tonSetup: onEditorSetup\n\t\t})];\n\t},\n\n\tsave: function save(props) {\n\t\tvar content = props.attributes.content,\n\t\t    alignment = props.attributes.alignment;\n\n\t\treturn el(RichText.Content, {\n\t\t\tclassName: props.className,\n\t\t\tstyle: { textAlign: alignment },\n\t\t\tvalue: content\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBCbG9ja0NvbnRyb2xzID0gX3dwJGVkaXRvci5CbG9ja0NvbnRyb2xzLFxuICAgIEJsb2NrRm9ybWF0Q29udHJvbHMgPSBfd3AkZWRpdG9yLkJsb2NrRm9ybWF0Q29udHJvbHMsXG4gICAgQWxpZ25tZW50VG9vbGJhciA9IF93cCRlZGl0b3IuQWxpZ25tZW50VG9vbGJhcjtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIERhc2hpY29uID0gX3dwJGNvbXBvbmVudHMuRGFzaGljb24sXG4gICAgVG9vbHRpcCA9IF93cCRjb21wb25lbnRzLlRvb2x0aXAsXG4gICAgSWNvbkJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkljb25CdXR0b24sXG4gICAgVG9vbGJhciA9IF93cCRjb21wb25lbnRzLlRvb2xiYXI7XG5cbnZhciBlZGl0b3JzID0ge307IC8vc3RvcmVzIGFsbCB0aGUgVGlueU1DRSBlZGl0b3JzIGluIG91ciBibG9ja3NcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ215LWJsb2NrLXBsdWdpbi9ibG9jay13LWluc2VydC1zaG9ydGNvZGUnLCB7XG5cdHRpdGxlOiAnQmxvY2sgdyBTaG9ydGNvZGUgQnV0dG9uJyxcblx0aWNvbjogJ3VuaXZlcnNhbC1hY2Nlc3MtYWx0Jyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRjb250ZW50OiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nXG5cdFx0fSxcblx0XHRhbGlnbm1lbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHRlZGl0b3JJRDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9XG5cdH0sXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblxuXHRcdHZhciBjb250ZW50ID0gcHJvcHMuYXR0cmlidXRlcy5jb250ZW50LFxuXHRcdCAgICBhbGlnbm1lbnQgPSBwcm9wcy5hdHRyaWJ1dGVzLmFsaWdubWVudCxcblx0XHQgICAgZWRpdG9ySUQgPSBwcm9wcy5hdHRyaWJ1dGVzLmVkaXRvcklEO1xuXG5cdFx0ZnVuY3Rpb24gb25DaGFuZ2VDb250ZW50KG5ld0NvbnRlbnQpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBuZXdDb250ZW50IH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ2hhbmdlQWxpZ25tZW50KG5ld0FsaWdubWVudCkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogbmV3QWxpZ25tZW50IH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ2xpY2tTaG9ydGNvZGVCdXR0b24oZXZlbnQsIGVkaXRvcklEKSB7XG5cdFx0XHR2YXIgYWN0aXZlRWRpdG9yID0gZWRpdG9yc1twcm9wcy5hdHRyaWJ1dGVzLmVkaXRvcklEXTtcblx0XHRcdHZhciBteUNvbnRlbnQgPSAnW215c2hvcnRjb2RlXVsvbXlzaG9ydGNvZGVdJztcblx0XHRcdGFjdGl2ZUVkaXRvci5leGVjQ29tbWFuZCgnbWNlSW5zZXJ0Q29udGVudCcsIGZhbHNlLCBteUNvbnRlbnQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uRWRpdG9yU2V0dXAoZWRpdG9yKSB7XG5cdFx0XHQvL3N0b3JlIGEgcmVmZXJlbmNlIHRvIHRoaXMgZWRpdG9yXG5cdFx0XHRlZGl0b3JzW2VkaXRvci5pZF0gPSBlZGl0b3I7XG5cdFx0XHQvL3N0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBlZGl0b3IgSUQgd2l0aGluIHRoZSBCbG9ja1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGVkaXRvcklEOiBlZGl0b3IuaWQgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtlbChCbG9ja0Zvcm1hdENvbnRyb2xzLCB7IGtleTogJ2NvbnRyb2xzLWN1c3RvbScgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0VG9vbGJhcixcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwge1xuXHRcdFx0XHRpY29uOiAnZWRpdCcsXG5cdFx0XHRcdGxhYmVsOiAnSW5zZXJ0IFNob3J0Y29kZScsXG5cdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gb25DbGlja1Nob3J0Y29kZUJ1dHRvbihldmVudCwgZWRpdG9ySUQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCkpLCBlbChCbG9ja0NvbnRyb2xzLCB7IGtleTogJ2NvbnRyb2xzLWFsaWdubWVudCcgfSwgZWwoQWxpZ25tZW50VG9vbGJhciwge1xuXHRcdFx0dmFsdWU6IGFsaWdubWVudCxcblx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUFsaWdubWVudFxuXHRcdH0pKSwgZWwoUmljaFRleHQsIHtcblx0XHRcdGtleTogJ2VkaXRhYmxlJyxcblx0XHRcdHRhZ05hbWU6ICdwJyxcblx0XHRcdGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuXHRcdFx0c3R5bGU6IHsgdGV4dEFsaWduOiBhbGlnbm1lbnQgfSxcblx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUNvbnRlbnQsXG5cdFx0XHR2YWx1ZTogY29udGVudCxcblx0XHRcdG9uU2V0dXA6IG9uRWRpdG9yU2V0dXBcblx0XHR9KV07XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHZhciBjb250ZW50ID0gcHJvcHMuYXR0cmlidXRlcy5jb250ZW50LFxuXHRcdCAgICBhbGlnbm1lbnQgPSBwcm9wcy5hdHRyaWJ1dGVzLmFsaWdubWVudDtcblxuXHRcdHJldHVybiBlbChSaWNoVGV4dC5Db250ZW50LCB7XG5cdFx0XHRjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcblx0XHRcdHN0eWxlOiB7IHRleHRBbGlnbjogYWxpZ25tZW50IH0sXG5cdFx0XHR2YWx1ZTogY29udGVudFxuXHRcdH0pO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);