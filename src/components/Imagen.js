import React from "/react";

export default function Imagen({
  imagen
}) {
  const {
    img_src: img,
    sol,
    earth_date
  } = imagen;
  return /*#__PURE__*/React.createElement("div", {
    className: "imagenContainer"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "Imagen de marte",
    className: "imagen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "descripcion"
  }, /*#__PURE__*/React.createElement("h3", null, "date: ", earth_date), /*#__PURE__*/React.createElement("p", null, "sol: ", sol)));
}