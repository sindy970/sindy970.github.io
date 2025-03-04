import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk"
import Lovelocation from "../lovelocation.webp";
import Car from "../car.webp"
import LocationLogo from "../locationLogo.webp"
import NaverMap from "../img/navermap2-min.jpg"
import { isSafari, isFirefox, isIOS } from 'react-device-detect';

function Navermaps(props) {

    return (
        <>
            <div>
                <h1 className="mt30 red"> 오시는 길</h1>
            </div>
            <div className={props.media}>
                <Map // 지도를 표시할 Container
                    center={{
                        // 지도의 중심좌표
                        lat: 37.51583698541007,
                        lng: 126.72252151890174,
                    }}
                    style={{
                        width: '300px',
                        height: '200px',
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
            <br/>
            <br/>

            {props.gubun === "old" ?
                <div>
                    <span> 웨스턴팰리스웨딩 </span><br/>
                    <p>인천 부평구 부평대로278번길 16 부평 웨스턴팰리스 웨스턴 홀 7층</p>
                    <br/><br/>
                </div>
                    :
                    <></>
                }

            <div className="mapAll">
                <div className="mapLeft">
                    <h2 className="mt10 peach">대중교통</h2>
                    <button className="navy kr-font"
                        onClick={() => window.open('https://map.naver.com/p/directions/-/14106688.7027539,4511257.1399913,%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9,1832003609,PLACE_POI/-/transit?c=15.00,0,0,0,dh', '_blank')}>
                        <h3 className="mt10 navy">
                            <img className="mt20" src={NaverMap}/> 길찾기
                        </h3>
                    </button>
                </div>
                <div className="mapRight">
                    <h2 className="mt10 peach">자가용</h2>
                    <button className="navy kr-font"
                        onClick={() => window.open('https://map.naver.com/p/directions/-/14106688.7027539,4511257.1399913,%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9,1832003609,PLACE_POI/-/car?c=15.00,0,0,0,dh', '_blank')}>
                        <h3 className="mt10 navy">
                            <img className="mt20" src={NaverMap}/> 길찾기
                        </h3>
                    </button>
                </div>
            </div>

            <div>
                <h1 className="mt30 red"> 주차장 지도 </h1>
                <img
                    className={isSafari || isFirefox || isIOS ? "imagefile" : undefined}
                    src={Car}/>
            </div>
        </>
    )
}

export default Navermaps;
