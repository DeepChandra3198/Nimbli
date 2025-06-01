import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/style/css/feather.css";
import "../src/index.scss";
import "../src/style/icon/boxicons/boxicons/css/boxicons.min.css";
import "../src/style/icon/weather/weathericons.css";
import "../src/style/icon/typicons/typicons.css";
import "../src/style/icon/fontawesome/css/fontawesome.min.css";
import "../src/style/icon/fontawesome/css/all.min.css";
import "../src/style/icon/ionic/ionicons.css";
import "../src/style/icon/tabler-icons/webfont/tabler-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'react-tooltip/dist/react-tooltip.css'
import 'react-quill/dist/quill.snow.css';
import { Flip, ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      transition={Flip}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </React.StrictMode>,
)
