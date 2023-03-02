import React from "/react";

export default function HeaderPortada() {
  function handleScroll() {
    const altoPantalla = window.screen.height - 130;
    window.scrollBy(0, altoPantalla);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "portada"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../img/nasaLogo.png",
    alt: "Logo de la nasa",
    className: "logo"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "titulo"
  }, "Mars Rober Images"), /*#__PURE__*/React.createElement("div", {
    className: "boton-container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleScroll,
    className: "boton"
  }, "Explore Mars"))), /*#__PURE__*/React.createElement("div", {
    className: "botonera"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hvr-horizon"
  }, "Word Word"), /*#__PURE__*/React.createElement("h3", {
    className: "hvr-horizon"
  }, "Word Word"), /*#__PURE__*/React.createElement("h3", {
    className: "hvr-horizon"
  }, "Word Word"), /*#__PURE__*/React.createElement("h3", {
    className: "hvr-horizon"
  }, "Word Word"), /*#__PURE__*/React.createElement("h3", {
    className: "hvr-horizon"
  }, "Word Word"), /*#__PURE__*/React.createElement("h3", {
    className: "hvr-horizon"
  }, "Word Word"), /*#__PURE__*/React.createElement("h3", {
    className: "hvr-horizon"
  }, "Word Word"), /*#__PURE__*/React.createElement("h3", {
    className: "hvr-horizon"
  }, "Word Word")));
}