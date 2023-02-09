import React from 'react';
import "./Proizvodi.css";
function JedanProizvod({proizvod,onAdd,uKorpi}) {
  function CardHover(e){
    e.preventDefault();
    console.log(this);
  }

  return <div className={uKorpi === 0 ? "kartica" : "kartica-korpa"} >

      <div className={uKorpi === 0 ? 'slikaProizvoda' : 'slikaProizvodaUKorpi'}>
        <img src={proizvod.image} alt="Neka slika"/>
      </div>
      <div className={uKorpi === 0 ? 'podaci' : 'podaciKorpa'}>
          <h3 className="card-title">{proizvod.title}</h3>
          <p className="card-text">{proizvod.description}</p>
          {uKorpi === 0 ? (<div>
            <button className='dugmici' onClick={() => onAdd(proizvod.title, proizvod.id)}> Kupi </button>
            </div>) : (<div className='kolicinaICena'> <h3> Kolicina: {proizvod.amount}</h3> 
            <h3> Cena: {proizvod.price} RSD</h3></div>)}
          
      </div>
      
  </div>;
}

export default JedanProizvod;