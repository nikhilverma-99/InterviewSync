import React from "react";
import Logo from '../../images/Logo.svg';
import './Loading.css' ; 
const Loading = () => {
  return <div class="spinner">
  <img src={Logo} height="55rem"/>
  <svg viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
  </svg>
</div>
};

export default Loading;
