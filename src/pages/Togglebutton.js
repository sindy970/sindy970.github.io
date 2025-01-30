import React, { useState } from "react";

const Togglebutton = (props) => {

    let res = null;

    if(props.gubun === "man"){
        res = "123-456-789";
    } else {
        res = "987-654-432";
    }
    return(
      <div>
          <spen>{res}</spen>
      </div>
    );
}

export default Togglebutton;