 import React, {useState} from "react";

// 동적인 값을 state라 칭한다.
const Counter = () => {
    // 배열구조로 선언
    /*
        0이라는 값을 기본값으로 가짐
        num이라는 값을 변경할수 있는 함수가 setNumber라는 의미이다.
        상태 관리를 위해서 배열구조로 선언하여 관리한다. 

        함수를 호출할때는 {} 안에 넣어줘야 한다.
     */
    const [num, setNumber] = useState(0);

    /*
    * num = num + 1 과 같은 의미이다. 
    * num = num + 1이라고 사용하면 상태관리가 안되기 때문에 set함수를 사용하여 관리함
    * */
    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num - 1);
    }


    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;