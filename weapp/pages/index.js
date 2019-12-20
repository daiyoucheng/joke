"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _store = _interopRequireDefault(require('./../store/index.js'));

var _test = _interopRequireDefault(require('./../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {},
  mixins: [_test["default"]],
  data: {
    dailyJokeList: [{
      name: "十幅图",
      active: true
    }, {
      name: "十句话",
      active: false
    }, {
      name: "十糗事",
      active: false
    }]
  },
  computed: {},
  methods: {
    /*切换日常笑话类型*/
    changeType: function changeType(item) {
      this.dailyJokeList.forEach(function (val, index) {
        val.active = false;

        if (val.name == item.name) {
          val.active = true;
        }
      });
    }
  },
  created: function created() {
    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {}
    }).then(function (res) {
      console.log(res.result); // 3
    })["catch"](console.error);
  }
}, {info: {"components":{},"on":{}}, handlers: {'7-38': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.changeType(item);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{},"on":{}}, handlers: {'7-38': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.changeType(item);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{},"on":{}}, handlers: {'7-38': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.changeType(item);
      })();
    
  }}}, models: {}, refs: undefined });