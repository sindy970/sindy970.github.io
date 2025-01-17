import React from "react";
import {Snowfall} from "react-snowfall";
import Bloom1 from "../bloom1.jpg";
import Bloom2 from "../bloom2.png";

//react-snowfall 라이브러리 사용
const Snow = () => {

    const snowflake1 = document.createElement('img')
    snowflake1.src = Bloom1
    const snowflake2 = document.createElement('img')
    snowflake2.src = Bloom2

    const images = [snowflake1, snowflake2]
    return (
        <Snowfall
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
            }}
            snowflakeCount={200}
            images={images}
        />
    )
}

export default Snow;