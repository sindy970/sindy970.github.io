import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk"
import Lovelocation from "../lovelocation.png";

// const { kakao } = window;

const Navermaps = () => {

    const options = {
        src: {Lovelocation}, // 마커이미지의 주소입니다
        size: {
            width: 45,
            height: 45,
        }
    };

    // useEffect(() => {
    //     const container = document.getElementById('map');
    //     //지도를 담을 영역의 DOM 레퍼런스
    //     const options = {
    //         center: new kakao.maps.LatLng(37.516081,126.722443),
    //         Level: 3
    //     };
    //     const map = new kakao.maps.Map (container, options);
    //     //지도 생성 및 객체 리턴
    // }, [])
    return (

    <Map // 지도를 표시할 Container
        center={{
            // 지도의 중심좌표
            lat: 37.516081,
            lng: 126.722443,
        }}
        style={{
            // 지도의 크기
            width: "450px",
            height: "450px",
        }}
        level={5} // 지도의 확대 레벨
    >
        <MapMarker // 마커를 생성합니다
            position={{
                // 마커가 표시될 위치입니다
                lat: 37.516081,
                lng: 126.722443,
            }}
            image={options}
        />
    </Map>
    )
}

export default Navermaps;
