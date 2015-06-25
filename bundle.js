/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var React = __webpack_require__(2);

	window.log = console.log.bind(console);


	var slogans = [
	  {
	    content: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
	    signature: "C. A. R. Hoare"
	  }
	  ,
	  {
	    content: 'I have no particular talent. I am merely inquisitive.',
	    signature: 'Albert Einstein'
	  }
	];

	var interval = 5*1000;

	// var Main = React.createClass({

	var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Main[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Main.prototype=Object.create(____SuperProtoOf____Class0);Main.prototype.constructor=Main;Main.__superConstructor__=____Class0;
	  function Main(props){"use strict";
	    ____Class0.call(this,props);
	    this.state = {
	      timer: null,
	      index: Math.floor(slogans.length*Math.random())
	    }
	  }

	  //componentDidMount(){
	  //  this.setState({
	  //    timer: setInterval(() => {
	  //      this.tick()
	  //    }, interval)
	  //  })
	  //}
	  //
	  //componentWillUnmount(){
	  //  var t = this.state.timer;
	  //  clearInterval(t);
	  //}

	  //tick(){
	  //  this.setState({ index: this.state.index + 1 })
	  //}

	  Object.defineProperty(Main.prototype,"prev",{writable:true,configurable:true,value:function(){"use strict";
	    var n = this.state.index - 1;
	    if( n < 0 ) n += slogans.length;
	    this.setState({ index: n });
	  }});;

	  Object.defineProperty(Main.prototype,"next",{writable:true,configurable:true,value:function(){"use strict";
	    var n = this.state.index + 1;
	    n %= slogans.length;
	    this.setState({ index: n });
	  }});;

	  Object.defineProperty(Main.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
	    var s = slogans[this.state.index % slogans.length];
	    return React.createElement("div", {className: "container"}, 
	      React.createElement("div", {id: "slogan"}, 
	        React.createElement("div", null, s.content), 
	        React.createElement("div", {className: "signature"}, s.signature), 
	        React.createElement("div", {className: "button", onClick: this.prev.bind(this)}, "Previous"), 
	        React.createElement("div", {className: "button", onClick: this.next.bind(this)}, "Next")
	      )
	    )
	  }});



	React.render(React.createElement(Main, null), document.getElementById('mount'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);