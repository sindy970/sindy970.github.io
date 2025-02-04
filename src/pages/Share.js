import { useEffect, useState } from "react";
import LinkImg from "../link.webp";
import KakaoImg from "../kakao.webp";
import Sun5 from "../sun5.webp"

// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;

const Share = () =>{
    const imageUrl = "https://raw.githubusercontent.com/sindy970/mobilewedding/refs/heads/main/src/sun5.webp";
    // 배포한 자신의 사이트
    const realUrl = "https://sindy970.github.io/mobilewedding/"
    // 로컬 주소 (localhost 3000 같은거)
    const resultUrl = window.location.href;

    // 재랜더링시에 실행되게 해준다.
    useEffect(()=>{
        // init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('0e6517cf9f05b1a937356f77251bd662');
    },[]);

    const shareKakao = () =>{

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '우리 결혼해요~♥',
                description: '새로운 시작을 응원해 주세요~',
                imageUrl: imageUrl,
                link: {
                    mobileWebUrl: resultUrl,
                },
            },
            buttons: [
                {
                    title: '자세히 보기',
                    link: {
                        mobileWebUrl: resultUrl,
                    },
                },
            ],
        });
    }

    const handleCopyUrl = () => {
            navigator.clipboard.writeText(resultUrl)
            .then(() => {
                alert('클립보드에 복사되었습니다');
            })
            .catch((error) => {
                console.error('클립보드 복사 실패!');
            });
    };

    return(
        <>
            <div className="sns-area">
                <ul>
                    <li><button type="button" className='grey-btn'
                                onClick={() => {
                                    shareKakao()
                                }}><img src={KakaoImg} /></button></li>
                    <li><button type="button" onClick={handleCopyUrl} ><img src={LinkImg} /></button></li>
                </ul>
            </div>
        </>
    )
}

export default Share;
