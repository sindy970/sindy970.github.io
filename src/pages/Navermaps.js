import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk"
import Lovelocation from "../lovelocation.png";
import Car from "../car.webp"

function Navermaps(props) {

    return (
    <>
        <div>
            <h2> 오시는 길<br /> </h2>
        </div>
        <div className ={props.media}>
            <Map // 지도를 표시할 Container
                center={{
                    // 지도의 중심좌표
                    lat: 37.51583698541007,
                    lng: 126.72252151890174,
                }}
                style={{
                    // 지도의 크기
                    width: "300px",
                    height: "240px",
                }}
                level={3} // 지도의 확대 레벨
            >
                <MapMarker // 마커를 생성합니다
                    position={{
                        // 마커가 표시될 위치입니다
                        lat: 37.51583698541007,
                        lng: 126.72252151890174,
                    }}
                    image={{
                        // 이미지 경로가 string타입이여야 해서 {}를 넣으면 인식 안됨
                        src: Lovelocation, // 마커이미지의 주소입니다
                        size: {
                            width: 25,
                            height: 25,
                        }
                    }}
                />
            </Map>
        </div>
        <div>
            <spen>대중교통</spen>
            <button onClick={() => window.open('https://map.naver.com/p/directions/-/14106688.7027539,4511257.1399913,%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9,1832003609,PLACE_POI/-/transit?c=15.00,0,0,0,dh', '_blank')}>
                네이버 빠른길찾기
            </button>
            <spen>자가용</spen>
            <button onClick={() => window.open('https://map.naver.com/p/directions/-/14106688.7027539,4511257.1399913,%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9,1832003609,PLACE_POI/-/car?c=15.00,0,0,0,dh', '_blank')}>
                네이버 빠른길찾기
            </button>
            <img src={Car} />
        </div>
    </>
    )
}

export default Navermaps;
