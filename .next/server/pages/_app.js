/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCD7V3JV21xgnZUr1AgHE7_RDoe48Rypfg\",\n    authDomain: \"hkflix-c6309.firebaseapp.com\",\n    projectId: \"hkflix-c6309\",\n    storageBucket: \"hkflix-c6309.appspot.com\",\n    messagingSenderId: \"643143449705\",\n    appId: \"1:643143449705:web:8fb08cd9ee35818ae036f8\"\n};\n// Initialize Firebase\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDTTtBQUNaO0FBQ1Y7QUFFdkMsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1LLGNBQWMsR0FBRztJQUNuQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLDhCQUE4QjtJQUMxQ0MsU0FBUyxFQUFFLGNBQWM7SUFDekJDLGFBQWEsRUFBRSwwQkFBMEI7SUFDekNDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7Q0FDckQ7QUFDRCxzQkFBc0I7QUFDdEIsTUFBTUMsR0FBRyxHQUFHLENBQUNWLHFEQUFPLEVBQUUsQ0FBQ1csTUFBTSxHQUFHYiwyREFBYSxDQUFDSyxjQUFjLENBQUMsR0FBR0osb0RBQU0sRUFBRTtBQUN4RSxNQUFNYSxFQUFFLEdBQUdYLGdFQUFZLEVBQUU7QUFDekIsTUFBTVksSUFBSSxHQUFHWCxzREFBTyxFQUFFO0FBRXRCLGlFQUFlUSxHQUFHO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS50cz85MmY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwLCBnZXRBcHBzIH0gZnJvbSAnZmlyZWJhc2UvYXBwJ1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG5cclxuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXHJcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q0Q3VjNKVjIxeGduWlVyMUFnSEU3X1JEb2U0OFJ5cGZnXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImhrZmxpeC1jNjMwOS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJoa2ZsaXgtYzYzMDlcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiaGtmbGl4LWM2MzA5LmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2NDMxNDM0NDk3MDVcIixcclxuICAgIGFwcElkOiBcIjE6NjQzMTQzNDQ5NzA1OndlYjo4ZmIwOGNkOWVlMzU4MThhZTAzNmY4XCJcclxufTtcclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSAhZ2V0QXBwcygpLmxlbmd0aCA/IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDogZ2V0QXBwKClcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKVxyXG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBcclxuZXhwb3J0IHsgYXV0aCwgZGIgfSJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXBwIiwiZ2V0QXBwcyIsImdldEZpcmVzdG9yZSIsImdldEF1dGgiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImxlbmd0aCIsImRiIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./hooks/useAuth.tsx":
/*!***************************!*\
  !*** ./hooks/useAuth.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    signUp: async ()=>{},\n    signIn: async ()=>{},\n    logout: async ()=>{},\n    error: null,\n    loading: false\n});\nconst AuthProvider = ({ children  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: initialLoading , 1: setInitialLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                // Logged in...\n                setUser(user);\n                setLoading(false);\n            } else {\n                // Not logged in...\n                setUser(null);\n                setLoading(true);\n                router.push(\"/login\");\n            }\n            setInitialLoading(false);\n        }), [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.auth\n    ]);\n    const signUp = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const signIn = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            setUser(null);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            user,\n            signUp,\n            signIn,\n            error,\n            loading,\n            logout\n        }), [\n        user,\n        loading,\n        error\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: memoedValue,\n        children: !initialLoading && children\n    }, void 0, false, {\n        fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\hooks\\\\useAuth.tsx\",\n        lineNumber: 103,\n        columnNumber: 7\n    }, undefined);\n};\n// Let's only export the `useAuth` hook instead of the context.\n// We only want to use the hook directly and never the context comopnent.\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU1WLE1BQU0sR0FBRyxVQUFZO1FBQ3pCVSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBRWhCdEIsc0RBQU8sQ0FBQ08sMkNBQUksQ0FBQyxDQUNWbUIsSUFBSSxDQUFDLElBQU07WUFDVlIsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUNEVSxLQUFLLENBQUMsQ0FBQ2YsS0FBSyxHQUFLZ0IsS0FBSyxDQUFDaEIsS0FBSyxDQUFDaUIsT0FBTyxDQUFDLENBQUMsQ0FDdENDLE9BQU8sQ0FBQyxJQUFNVCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU1VLFdBQVcsR0FBRzNCLDhDQUFPLENBQ3pCLElBQU0sQ0FBQztZQUFFSSxJQUFJO1lBQUVDLE1BQU07WUFBRUMsTUFBTTtZQUFFRSxLQUFLO1lBQUVDLE9BQU87WUFBRUYsTUFBTTtTQUFFLENBQUMsRUFDeEQ7UUFBQ0gsSUFBSTtRQUFFSyxPQUFPO1FBQUVELEtBQUs7S0FBQyxDQUN2QjtJQUVELHFCQUNFLDhEQUFDTCxXQUFXLENBQUN5QixRQUFRO1FBQUNDLEtBQUssRUFBRUYsV0FBVztrQkFDckMsQ0FBQ1osY0FBYyxJQUFJSixRQUFROzs7OztpQkFDUCxDQUN4QjtBQUNILENBQUM7QUFFRCwrREFBK0Q7QUFDL0QseUVBQXlFO0FBQzFELFNBQVNtQixPQUFPLEdBQUc7SUFDaEMsT0FBT2hDLGlEQUFVLENBQUNLLFdBQVcsQ0FBQztBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQXV0aC50c3g/ZmJhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gICAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgICBzaWduT3V0LFxyXG4gICAgVXNlcixcclxuICB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcbiAgXHJcbiAgaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbiAgaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4gIGltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSdcclxuICBcclxuICBpbnRlcmZhY2UgSUF1dGgge1xyXG4gICAgdXNlcjogVXNlciB8IG51bGxcclxuICAgIHNpZ25VcDogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD5cclxuICAgIHNpZ25JbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD5cclxuICAgIGxvZ291dDogKCkgPT4gUHJvbWlzZTx2b2lkPlxyXG4gICAgZXJyb3I6IHN0cmluZyB8IG51bGxcclxuICAgIGxvYWRpbmc6IGJvb2xlYW5cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoPih7XHJcbiAgICB1c2VyOiBudWxsLFxyXG4gICAgc2lnblVwOiBhc3luYyAoKSA9PiB7fSxcclxuICAgIHNpZ25JbjogYXN5bmMgKCkgPT4ge30sXHJcbiAgICBsb2dvdXQ6IGFzeW5jICgpID0+IHt9LFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICB9KVxyXG4gIFxyXG4gIGludGVyZmFjZSBBdXRoUHJvdmlkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKVxyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2luaXRpYWxMb2FkaW5nLCBzZXRJbml0aWFsTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbiAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAvLyBMb2dnZWQgaW4uLi5cclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gTm90IGxvZ2dlZCBpbi4uLlxyXG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBzZXRJbml0aWFsTG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9KSxcclxuICAgICAgW2F1dGhdXHJcbiAgICApXHJcbiAgXHJcbiAgICBjb25zdCBzaWduVXAgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgXHJcbiAgICAgIGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgICBzZXRVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpXHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gYWxlcnQoZXJyb3IubWVzc2FnZSkpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBzaWduSW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgICAgIHNldFVzZXIodXNlckNyZWRlbnRpYWwudXNlcilcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gIFxyXG4gICAgICBzaWduT3V0KGF1dGgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VXNlcihudWxsKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gYWxlcnQoZXJyb3IubWVzc2FnZSkpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBtZW1vZWRWYWx1ZSA9IHVzZU1lbW8oXHJcbiAgICAgICgpID0+ICh7IHVzZXIsIHNpZ25VcCwgc2lnbkluLCBlcnJvciwgbG9hZGluZywgbG9nb3V0IH0pLFxyXG4gICAgICBbdXNlciwgbG9hZGluZywgZXJyb3JdXHJcbiAgICApXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21lbW9lZFZhbHVlfT5cclxuICAgICAgICB7IWluaXRpYWxMb2FkaW5nICYmIGNoaWxkcmVufVxyXG4gICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICAvLyBMZXQncyBvbmx5IGV4cG9ydCB0aGUgYHVzZUF1dGhgIGhvb2sgaW5zdGVhZCBvZiB0aGUgY29udGV4dC5cclxuICAvLyBXZSBvbmx5IHdhbnQgdG8gdXNlIHRoZSBob29rIGRpcmVjdGx5IGFuZCBuZXZlciB0aGUgY29udGV4dCBjb21vcG5lbnQuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICAgIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIH0iXSwibmFtZXMiOlsiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwidXNlUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJhdXRoIiwiQXV0aENvbnRleHQiLCJ1c2VyIiwic2lnblVwIiwic2lnbkluIiwibG9nb3V0IiwiZXJyb3IiLCJsb2FkaW5nIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJzZXRVc2VyIiwic2V0RXJyb3IiLCJpbml0aWFsTG9hZGluZyIsInNldEluaXRpYWxMb2FkaW5nIiwic2V0TG9hZGluZyIsInB1c2giLCJlbWFpbCIsInBhc3N3b3JkIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwiY2F0Y2giLCJhbGVydCIsIm1lc3NhZ2UiLCJmaW5hbGx5IiwibWVtb2VkVmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useAuth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"A:\\\\PROJECTS\\\\hktv2\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRWlCO0FBQ1o7QUFFbkMsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNILDhDQUFVO2tCQUVULDRFQUFDRCx3REFBWTtzQkFDWCw0RUFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ2Y7Ozs7O1lBQ0osQ0FDZDtBQUNILENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9ob29rcy91c2VBdXRoJ1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gJ3JlY29pbCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxSZWNvaWxSb290PlxuICAgICAgey8qIEhpZ2hlciBPcmRlciBDb21wb25lbnQgKi99XG4gICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICA8L1JlY29pbFJvb3Q+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiUmVjb2lsUm9vdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();