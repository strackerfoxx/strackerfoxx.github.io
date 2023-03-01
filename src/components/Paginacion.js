import React from "./node_modules/react";

export default function Paginacion({
  paginacion,
  setPaginacion
}) {
  function nuevaPagina(pagina) {
    setPaginacion(pagina);
    const altoPantalla = window.screen.height - 130;
    window.scrollTo(0, altoPantalla);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "paginacion"
  }, paginacion > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    className: "paginado",
    onClick: () => nuevaPagina(paginacion - 1)
  }, `<`)), /*#__PURE__*/React.createElement("h3", {
    className: "paginado",
    onClick: () => nuevaPagina(paginacion + 1)
  }, `${paginacion + 1} `), /*#__PURE__*/React.createElement("h3", {
    className: "paginado",
    onClick: () => nuevaPagina(paginacion + 2)
  }, `${paginacion + 2} `), /*#__PURE__*/React.createElement("h3", {
    className: "paginado",
    onClick: () => nuevaPagina(paginacion + 3)
  }, `${paginacion + 3} `), /*#__PURE__*/React.createElement("h3", {
    className: "paginado",
    onClick: () => nuevaPagina(paginacion + 1)
  }, `>`));
}