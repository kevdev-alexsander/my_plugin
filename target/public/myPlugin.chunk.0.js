(window["myPlugin_bundle_jsonpfunction"] = window["myPlugin_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/application.tsx":
/*!********************************!*\
  !*** ./public/application.tsx ***!
  \********************************/
/*! exports provided: renderApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app */ "./public/components/app.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);




const renderApp = ({
  notifications,
  http
}, {
  navigation
}, {
  appBasePath,
  element
}) => {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_app__WEBPACK_IMPORTED_MODULE_2__["MyPluginApp"], {
    basename: appBasePath,
    notifications: notifications,
    http: http,
    navigation: navigation
  }), element);
  return () => react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(element);
};

/***/ }),

/***/ "./public/components/app.tsx":
/*!***********************************!*\
  !*** ./public/components/app.tsx ***!
  \***********************************/
/*! exports provided: MyPluginApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPluginApp", function() { return MyPluginApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common */ "./common/index.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);







const MyPluginApp = ({
  basename,
  notifications,
  http,
  navigation
}) => {
  // Use React hooks to manage state.
  const [timestamp, setTimestamp] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const onClickHandler = () => {
    // Use the core http service to make a response to the server API.
    http.get('/api/my_plugin/example').then(res => {
      setTimestamp(res.time); // Use the core notifications service to display a success message.

      notifications.toasts.addSuccess(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('myPlugin.dataUpdated', {
        defaultMessage: 'Data updated'
      }));
    });
  }; // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.


  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
    basename: basename
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["I18nProvider"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(navigation.ui.TopNavMenu, {
    appName: _common__WEBPACK_IMPORTED_MODULE_5__["PLUGIN_ID"],
    showSearchBar: true,
    useDefaultBehaviors: true
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPage"], {
    restrictWidth: "1000px"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageBody"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageHeader"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTitle"], {
    size: "l"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h1", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "myPlugin.helloWorldText",
    defaultMessage: "{name}",
    values: {
      name: _common__WEBPACK_IMPORTED_MODULE_5__["PLUGIN_NAME"]
    }
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContent"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContentHeader"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTitle"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "myPlugin.congratulationsTitle",
    defaultMessage: "Congratulations, you have successfully created a new Kibana Plugin!"
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContentBody"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "myPlugin.content",
    defaultMessage: "Look through the generated code and check out the plugin development documentation."
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiHorizontalRule"], null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "myPlugin.timestampText",
    defaultMessage: "Last timestamp: {time}",
    values: {
      time: timestamp ? timestamp : 'Unknown'
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButton"], {
    type: "primary",
    size: "s",
    onClick: onClickHandler
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "myPlugin.buttonText",
    defaultMessage: "Get data"
  }))))))))));
};

/***/ })

}]);
//# sourceMappingURL=myPlugin.chunk.0.js.map