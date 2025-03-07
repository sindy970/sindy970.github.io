import { useEffect, useState } from "react";
import LinkImg from "../link.webp";
import KakaoImg from "../kakao.webp";

const { Kakao } = window;

const Share = () =>{
    const imageUrl = "https://raw.githubusercontent.com/sindy970/sindy970.github.io/refs/heads/main/src/img/ber.jpg";
    const resultUrl = window.location.href;

    // 재랜더링시에 실행되게 해준다.
    useEffect(()=>{
        // init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('8e920bbf27080912d8dc732f62f6cd1a');
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
                <div className="sns-kakao">
                    <button type="button" className='grey-btn'
                            onClick={() => {
                                shareKakao()
                            }}><img className="imagefile" src={KakaoImg} />
                    </button>
                </div>
                <div className="sns-url">
                    <button type="button" onClick={handleCopyUrl} ><img className="imagefile" src={LinkImg} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Share;
