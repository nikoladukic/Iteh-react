import React,{useEffect, useState} from 'react';
import JedanProizvod from './JedanProizvod';

const Korpa = ({products,price}) => {
    return(
        <div className='cart-container'>
            <h3> Proizvodi u korpi: </h3>
            {products.map((prod) =>(
                <JedanProizvod proizvod={prod} key={prod.id} uKorpi={1}/>
            ))}
            <h3 className='ukc'>Ukupna cena: {price} RSD</h3>
        </div>
    )
}

export default Korpa;