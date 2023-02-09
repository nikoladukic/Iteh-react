import React from 'react';
import {BsFillCartFill} from "react-icons/bs";
import {Link} from "react-router-dom";
function NavBar({cartNum}) {
  //const cartNum = 0;
  return <div className='navBar'>
      <Link className='navBarLink' to="/"> Katalog </Link>
      <div className='cart-items'>
        <Link className='navBarLink' to={"/korpa"}>
        <BsFillCartFill/>
        </Link>
        <p className="cart-num"> {cartNum} </p>
      </div>
  </div>;
}

export default NavBar;
