import './App.css';
import NavBar from "./Komponente/NavBar";
import Proizvodi from './Komponente/Proizvodi';
import Korpa from "./Komponente/Korpa"
import React,{useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  //let cartNum = 0;
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [ukupnaCena,setTotalPrice] = useState(0);
  const [products] = useState([
    {
      id: 1,
      image:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Patike",
      description:
        "Ovo je jedan od najnovijih modela patika u prodaji. Mogu da se nose u razlicitim prilikama.",
      price: 100,
      amount: 0,
    },
    {
      id: 2, 
      image:"https://images.unsplash.com/photo-1591534577302-1696205bb2bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Ranac",
      description:
        "Ovaj ranac je namenjen osobama i muskog i sensog pola. Moze se nositi u razlicitim prilikama.",
      price: 70,
      amount: 0,
    },
    {
      id: 3,
      image:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      title: "Duks",
      description:
        "Ovaj beli duks je izuzetno udoban i nosiv i dovoljno topao. ",
      price: 130,
      amount: 0,
    },
    {
      id: 4,
      image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Pantalone",
      description:
        "Ovo su moderne pantalone sa izvezenim ukrasima za potpuno opusten izgled.",
      price: 90,
      amount: 0,
    },
    {
      id: 5,
      image:"https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=503&q=80",
      title: "Majica",
      description:
        "Lagana muska majca za uzivanje tokom letnjih meseci.",
      price: 50,
      amount: 0,
    },
    {
      id: 6,
      image:"https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Kosulja",
      description:
        "Elegantna kosolja dostupna u tri boje po svacijem ukusu.",
      price: 80,
      amount: 0,
    },
    {
      id: 7,
      image:"https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80",
      title: "Haljina",
      description:
        "Lepa haljina za svaku priliku za sve dame.",
      price: 110,
      amount: 0,
    },
    {
      id: 8,
      image:"https://images.unsplash.com/photo-1623832101940-647285e32a58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhcmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Sal",
      description:
        "Mekan i topao za prijatnije zimske dane.",
      price: 20,
      amount: 0,
    },
  ]);

  function refreshCart(){
    let noviProizvodi = products.filter((prod) => prod.amount > 0);
    setCartProducts(noviProizvodi);
  }

  function dodajProizvod(title,id){
    console.log("Dodat je proizvod "+title);
    setCartNum(cartNum+1);
    //console.log("Proizvodi u korpi: " +cartNum);
    products.forEach((prod) => {
      if(prod.id === id){
        prod.amount++;
        setTotalPrice(ukupnaCena+prod.price);
      }
      console.log(prod.amount);
    });
  refreshCart();
  }
  return (
  <div className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route path="/" element={ <Proizvodi products={products} onAdd={dodajProizvod}/>} />
        <Route path="/korpa" element={<Korpa products={cartProducts} price={ukupnaCena}/>}/>
      </Routes>
  </div>
  );
}

export default App;
