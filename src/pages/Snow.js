import React from "react";
import {Snowfall} from "react-snowfall";
import Bloom1 from "../bloom1.webp";
import Bloom2 from "../bloom2.webp";

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
                alignContent: 'center',
                width: 'auto',
                height: 'auto',
                // background: 'transparent',
            }}
            snowflakeCount={200}
            images={images}
        />
    )
}

export default Snow;