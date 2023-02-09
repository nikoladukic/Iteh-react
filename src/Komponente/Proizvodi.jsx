import React from 'react';
import JedanProizvod from './JedanProizvod.jsx';
import "./Proizvodi.css";
const Proizvodi = ({products,onAdd}) => {
  const naziv = "Naziv proizvoda";
  const opis = "Ovo je opis proizvoda";
  const prod = {
      title:"Naziv proizvoda",
      description:"Ovo je opis proizvoda"
  }
  return <div className='svi_proizvodi'>
      {products.map((prod)=>{
          return <JedanProizvod proizvod = {prod} key={prod.id} onAdd={onAdd} uKorpi={0}/>
      })}
  </div>;
};

export default Proizvodi;
