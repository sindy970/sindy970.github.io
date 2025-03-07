import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk"
import Lovelocation from "../lovelocation.webp";
import Car from "../car.webp"
import Arrow from "../arrow.png"
import { isSafari, isFirefox, isIOS } from 'react-device-detect';

function Navermaps() {

    return (
        <>
            <div>
                <h1 className="mt30 title-font red"> 오시는 길</h1>
            </div>

            <div className="kr-fonf navy mt30">
                <h2 className="mt20"> 웨스턴팰리스웨딩 </h2>
                <h3 className="mt10">인천 부평구 부평대로278번길 16 부평</h3>
                <h3 className="mt10">웨스턴팰리스 웨스턴 홀 7층</h3>
            </div>

            <div>
                <Map // 지도를 표시할 Container
                    className="mt20"
                    center={{
                        // 지도의 중심좌표
                        lat: 37.51583698541007,
                        lng: 126.72252151890174,
                    }}
                    style={{
                        width: "300px",
                        height: "200px",
                    }}
                    level={2} // 지도의 확대 레벨
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


            <div className="mt30 kr-fonf navy">
                <spen className="map_title mt20">주 소</spen><h6 className="map_content">인천 부평구 부평대로 278번길16</h6>
                <spen className="map_title mt10">지하철</spen><h6 className="map_content">인천 1호선 갈산역 2번출구 ( 도보1분 )</h6>
                <h6 className="map_content">1호선(인천방면) 부평역 하차 후 인천 1호선 환승(귤현 계양방면)</h6>
                <spen className="map_title mt10">버 스</spen><h6 className="map_content">갈산역(40601)정류장 또는 한국지엠기술교육원(40570)정류장 하차</h6>
                <spen className="map_title mt10">주차장</spen><h6 className="map_content">웨딩홀 맞은편 공영주차장 이용</h6>
                <h6 className="map_content">(인천 부평구 부평대로 283)</h6>
                <h6 className="map_content">우림 라이온스밸리 A동 지하2층</h6>
                <h6 className="map_content">기둥번호(05)주변 주차후 갈산역 만남의광장으로 이동</h6>
                <h6 className="map_content">-> 갈산역 2번 출구로 나오세요</h6>
            </div>

            <div className="mapAll mt30">
                <div className="mapLeft">
                    <h2 className="mt10 peach">대중교통</h2>
                    <button className="navy kr-font"
                        onClick={() => window.open('https://map.naver.com/p/directions/-/14106688.7027539,4511257.1399913,%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9,1832003609,PLACE_POI/-/transit?c=15.00,0,0,0,dh', '_blank')}>
                        <h3 className="mt10 navy">
                            <img className="mt20 map_road" src={Arrow}/> 길찾기
                        </h3>
                    </button>
                </div>
                <div className="mapRight">
                    <h2 className="mt10 peach">자가용</h2>
                    <button className="navy kr-font"
                        onClick={() => window.open('https://map.naver.com/p/directions/-/14106688.7027539,4511257.1399913,%EC%9B%A8%EC%8A%A4%ED%84%B4%ED%8C%B0%EB%A6%AC%EC%8A%A4%EC%9B%A8%EB%94%A9,1832003609,PLACE_POI/-/car?c=15.00,0,0,0,dh', '_blank')}>
                        <h3 className="mt10 navy">
                            <img className="mt20" src={Arrow}/> 길찾기
                        </h3>
                    </button>
                </div>
            </div>

            <div>
                <h1 className="mt30 title-font red"> 주차장 지도 </h1>
                <img
                    className={isSafari || isFirefox || isIOS ? "mt20 imagefile" : "mt20"}
                    src={Car}/>
            </div>
        </>
    )
}

export default Navermaps;
