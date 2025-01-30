import { useEffect } from "react";
import LinkImg from "../link.webp";
import KakaoImg from "../kakao.webp";
// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;

const Share = () =>{
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
        // 잘 적용되면 true 를 뱉는다.
        console.log(Kakao.isInitialized());
    },[]);

    const shareKakao = () =>{

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '우리 결혼해요~♥',
                description: '새로운 시작을 응원해 주세요~',
                imageUrl:
                    'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
                link: {
                    mobileWebUrl: realUrl,
                },
            },
            buttons: [
                {
                    title: '자세히 보기',
                    link: {
                        mobileWebUrl: realUrl,
                    },
                },
            ],
        });
    }

    const handleCopyUrl = () => {
            navigator.clipboard.writeText(realUrl)
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
