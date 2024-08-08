import "./App.css";
import React from 'react';
import { Navbar } from "./components.js/Navbar";
import item1 from "./components.js/product/item-1.png";
import { Product } from "./components.js/Product";

const App = () => {
  const productData = [
    {
      id: "1",
      imgUrl: item1,
      name: "Ургамлын хандтай үсний тэжээлийн маск 300мл",
      description: "Бүйлс, Polygonum multiflorum, Ligustrum lucidum, чангаанзны ханд улаан буудайн уураг зэрэг ургамлын ханд агуулсан бөгөөд үсний сэнс, индүү, хуурайших шулуун, буржгар хими, үсний цайруулалт, будах зэргээс үүссэн гэмтлийг үр дүнтэй эмчилж үснээс алдагдсан уургийг нөхөж. Үсний чанарыг сайжруулна. Хуурай, салаалсан, хэврэг, өнгө алдаж гандсан үсэнд тэжээл өгч намирсан зөөлөн бүтэцтэй болгодог.",
      usage: "Бүтээгдэхүүнээс зохих хэмжээгээр алгандаа авч үсэндээ жигд түрхээд 3-5 минутын дараа усаар зайлж угаана."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {productData.map((data) => (
          <Product
            key={data.id} // Unique key for each product
            imgUrl={data.imgUrl}
            name={data.name}
            description={data.description}
            usage={data.usage}
          />
        ))}
      </main>
    </>
  );
}

export default App;
