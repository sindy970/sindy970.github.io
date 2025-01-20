import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk"
import Lovelocation from "../lovelocation.png";

const Navermaps = () => {

    return (

    <Map // 지도를 표시할 Container
        center={{
            // 지도의 중심좌표
            lat: 37.51583698541007,
            lng: 126.72252151890174,
        }}
        style={{
            // 지도의 크기
            width: "450px",
            height: "225px",
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
                src: Lovelocation, // 마커이미지의 주소입니다
                size: {
                    width: 45,
                    height: 45,
                }
            }}
        />
    </Map>
    )
}

export default Navermaps;
