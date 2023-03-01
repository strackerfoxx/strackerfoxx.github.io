import React, { useState, useEffect } from "./node_modules/react";
import Paginacion from "./components/Paginacion";
import Layout from "./components/Layout";
import Imagen from "./components/Imagen";
import axios from "axios";
export default function Home() {
  const [imagenes, setImagenes] = useState([]);
  const [paginacion, setPaginacion] = useState(1);
  useEffect(() => {
    async function consultarApi() {
      const {
        data
      } = await axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${paginacion}&api_key=gKIzms3UWssLQBAOO49lPuySDo9rK05avVxrs8Vc`);
      setImagenes(data.photos);
    }
    consultarApi();
  }, [paginacion]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement("div", {
    className: "imagenListado"
  }, imagenes?.map(imagen => /*#__PURE__*/React.createElement(Imagen, {
    key: imagen.id,
    imagen: imagen
  }))), /*#__PURE__*/React.createElement(Paginacion, {
    setPaginacion: setPaginacion,
    paginacion: paginacion
  })));
}