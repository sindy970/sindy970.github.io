# 모바일

* 내가 설치한 모듈
  * gh-pages
    * githup pages를 사용하기 위해 설치
  * react-snowfall
    * 벛꽃 내리는 효과 사용을 위해 설치
    * 이미지 변경이 안돼서 삭제함
  * npm install react-router-dom@6
    * 6버전 설치
    * 메뉴나 특정 주소를 이동할때 화면전환할때 사용됨
  * npm i react-device-detect
    * 사파리, firefox 에서 css 깨짐 이슈로 설치함
  * npm install firebase
    * firebase 연동 사용 안함..ㅎㅎ

결국엔 index.html 파일로 실행함
src폴더에 코드작업

내부적으로 제일먼저 실행되는게 index.js 파일이 열리면서 
bundle.js 로 만들어지면서 index.html에 추가된다.

jsx를 사용하여 코드 작성
react-dom - html요소를 가지고 와서 react dom으로 만들어서 렌더링 하겠다 
