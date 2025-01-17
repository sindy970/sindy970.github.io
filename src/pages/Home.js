
//함수형 컴포넌트

    import React, { useState, useEffect } from 'react';
    import Left from '../Default.png';
    import Right from '../image 2.png';
    import '../index.css';

    const Home = () => {
        const [isOpen, setIsOpen] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 500); // 0.5초 후 애니메이션 실행

            return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
        }, []);

        return (
            <div className="expanding-door-container">
                <img className={`door left-door ${isOpen ? 'open' : ''}`} src={Left} alt='Left' />
                <img className={`door right-door ${isOpen ? 'open' : ''}`} src={Right} alt='Right' />
            </div>

        );
    };
export default Home;

//lo ==> 화살표 함수

// class 형 컴포넌트 => 요즘 추세
// import React, {Component} from "react";
//
// class Home extends Component{
//     render(){
//         return <h1>Home 화면 입닏.</h1>
//     }
// }
//
// export default Home;