import React from "./node_modules/react";

import HeaderPortada from './HeaderPortada';
import Footer from './Footer';
export default function Layout({
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeaderPortada, null), children, /*#__PURE__*/React.createElement(Footer, null));
}