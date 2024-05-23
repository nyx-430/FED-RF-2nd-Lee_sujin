// 보그 PJ 메인 JS - main.js

// 상단영역 불러오기
import TopArea from "./components/TopArea";

// 메인영역 불러오기
import MainArea from "./components/MainArea";

// 하단영역 불러오기
import FooterArea from "./components/FooterArea";

// [1] 메인 페이지 전체 레이아웃 로딩 컴포넌트
function Layout() {
  // 코드 리턴 구역
  return (
    <React.Fragment>
      {/* 1. 상단영역 컴포넌트 */}
      <TopArea />
      {/* 2. 메인영역 컴포넌트 */}
      <MainArea />
      {/* 3. 하단영역 컴포넌트 */}
      <FooterArea />
    </React.Fragment>
  );
} ///////////// Layout 컴포넌트 /////////////

// [2] 상단영역 서브 컴포넌트
// ReactDOM.render(<TopArea />, document.querySelector("#top-area"));

// [3] 메인영역 서브 컴포넌트
// ReactDOM.render(<MainArea />, document.querySelector("#main-area"));

// [4] 하단영역 서브 컴포넌트
// ReactDOM.render(<FooterArea />, document.querySelector("#footer-area"));

// 메인 페이지 전체 출력하기
ReactDOM.render(<Layout />, document.querySelector("#root"));
