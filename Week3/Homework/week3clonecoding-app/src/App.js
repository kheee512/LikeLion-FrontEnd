import './App.css';
import React from 'react';
import logo from "./daangn_img/logo.png";
import img1 from "./daangn_img/1.jpeg";
import img2 from "./daangn_img/2.jpeg";
import img3 from "./daangn_img/3.jpeg";
import img4 from "./daangn_img/4.jpeg";
import img5 from "./daangn_img/5.jpeg";
import img6 from "./daangn_img/6.jpeg";
import img7 from "./daangn_img/7.jpeg";
import img8 from "./daangn_img/8.jpeg";
import img9 from "./daangn_img/9.jpeg";
import img10 from "./daangn_img/10.jpeg";
import banner_icon from "./daangn_img/banner-icon.png";

function App() {


  return (
    <div className="App">


      <div className = "bannerWrapper">
        <div className="topBanner">

          <a href="#">
            <img src={logo} className="logo" />
          </a>

          <nav className="navBar">
            <ul className="navList">
              <li className="navBtn"><a className="navBtnTxt" href="https://www.google.com">중고거래</a></li>
              <li className="navBtn"><a className="navBtnTxt" href="#">동네업체</a></li>
              <li className="navBtn"><a className="navBtnTxtSelected" href="#">알바</a></li>
              <li className="navBtn"><a className="navBtnTxt" href="#">부동산</a></li>
              <li className="navBtn"><a className="navBtnTxt" href="#">중고차 직거래</a></li>
            </ul>
          </nav>

          <div className="topSearchandChat">

            <form id="searchBox">
              <div id="searchBoxTxt">
                물품이나 동네를 검색해보세요
              </div>
            </form>

            <button id="startChat">
              <div id="startChatTxt">
                채팅하기
              </div>
            </button>

          </div>
        </div>
        
      </div>





      <div className="mainContent">
        <div className="midBannerWrapper">
          <div className="midBannerContent">

            <div className="midBannerText">
              <h1 id="midBannerText1">우리 동네에서 찾는</h1>
              <h1 id="midBannerText2">당근알바</h1>
              <p id="midBannerText3">걸어서 10분 거리의</p>
              <p id="midBannerText4">동네 알바들 여기 다 있어요.</p>
              
              <div id="midBannerButton">
                <button id="postRecruitBtn">
                  <p id="postRecruitBtnTxt">공고 올리기</p>
                </button>
              </div>

            </div>

          </div>

          <div className="midBannerImg">
              <img src={require("./daangn_img/header-image.png")} id="midBannerImage" />
          </div>


        </div>

        <div className="bottomBannerWrapper">
          <h2 id="bottomBannerTitle">
            <div id="bottomBannerTitleTxt">인기 당근알바</div>
          </h2>








          <div className="jobList">


            <div className="listItemWrapper">
              <article className="listItem">
                <div id="imgPosition">
                  <img src={img1} id="img" />
                </div>

                <article className="listItemTxt">
                  <div id="title">익산 서동축제 아르바이트 구합니다.</div>
                  <div id="location">풍선 · 전라북도 인산시 동산동</div>
                  <div id="payment">시급 15,000</div>
                </article>

              </article>
            </div>


            <div className="listItemWrapper">
              <article className="listItem">

                <div id="imgPosition">
                  <img src={img2} id="img" />
                </div>

                <article className="listItemTxt">
                  <div id="title">익산역 팝업스토어 1달 단기 알바하실분</div>
                  <div id="location">퍼니랜드 · 전라북도 익산시 창인동1가</div>
                  <div id="payment">시급 10,000</div>
                </article>

              </article>
            </div>


            <div className="listItemWrapper">
              <article className="listItem">

                <div id="imgPosition">
                  <img src={img3} id="img" />
                </div>

                <article className="listItemTxt">
                  <div id="title">현장에서 일하실분 구합니다~</div>
                  <div id="location">강원특별자치도 원주시 학성동</div>
                  <div id="payment">일급 160,000</div>
                </article>

                
                
              </article>
            </div>


            <div className="listItemWrapper">
              <article className="listItem">

                <div id="imgPosition">
                  <img src={img4} id="img" />
                </div>

                <article className="listItemTxt">
                  <div id="title">삼성전자 어린이날 행사</div>
                  <div id="location">M&F promotion · 충청남도 아산시 배방읍</div>
                  <div id="payment">시급 10,000</div>
                </article>
                
              </article>
            </div>


            <div className="listItemWrapper">
              <article className="listItem">

                <div id="imgPosition">
                  <img src={img5} id="img" />
                </div>

                <article className="listItemTxt">
                  <div id="title">삼성전자 어린이날 행사</div>
                  <div id="location">M&F promotion · 충청남도 아산시 배방읍</div>
                  <div id="payment">시급 10,000</div>
                </article>
                
                
              </article>
            </div>


            <div className="listItemWrapper">
              <article className="listItem">

                <div id="imgPosition">
                  <img src={img6} id="img" />
                </div>

                <article className="listItemTxt">
                  <div id="title">간단한 엑셀, 서류 작업 오전 3시간</div>
                  <div id="location">서울특별시 구로구 구로동</div>
                  <div id="payment">시급 10,000</div>
                </article>
                
              </article>
            </div>



            <div className="listItemWrapper">
              <article className="listItem">

                <div id="imgPosition">
                  <img src={img7} id="img" />
                </div>

                <article className="listItemTxt">
                  <div id="title">단순 포장알바 급구합니다 :)</div>
                  <div id="location">요거마마• 경기도 화성시 영천동</div>
                  <div id="payment">시급 10,000</div>
                </article>
                
              </article>
            </div>


            <div className="listItemWrapper">
              <article className="listItem">

                <div id="imgPosition">
                  <img src={img8} id="img" />
                </div>

                <article className="listItemTxt">
                  <div id="title">판넬시공자 급하게구합니다</div>
                  <div id="location">경상북도 경주시 안강읍</div>
                  <div id="payment">월급 4,000,000</div>
                </article>
                
              </article>
            </div>


            <div className="listItemWrapper">
              <article className="listItem">

                <div id="imgPosition">
                  <img src={img9} id="img" />
                </div>

                <article className="listItemTxt">
                  <div id="title">안전 질서 진행 요원 알바. 내용필독</div>
                  <div id="location">이룸경호기획 전라북도 전주시 덕진구 덕진 동1가</div>
                  <div id="payment">일급 80,000</div>
                </article>
                
              </article>
            </div>


            <div className="listItemWrapper">
              <article className="listItem">

                <div id="imgPosition">
                  <img src={img10} id="img" />
                </div>

                <article className="listItemTxt">
                  <div id="title">치와와 방문 펫시터를 모십니다!</div>
                  <div id="location">서울특별시 구로구 항동</div>
                  <div id="payment">시급 15,000</div>
                </article>
                
              </article>
            </div>

          </div>
        </div>

        <div className="bottomBanner">
          <div className="bannerTexts">
            <img src={banner_icon} id="bannerLogo" />
            <div id="bannerTxt">
              <p id="bannerTxtProperty">대규모 채용이 필요하다면</p>
              <p id="bannerTxtProperty">당근알바 기업용 서비스에 대해 알아보세요!</p>
            </div>
          </div>

          <div className="bannerButtons">
            <button id="freeTrial">7일 무료 체험</button>
            <button id="contact">1:1 문의</button>
          </div>
        </div>
      </div>
        
      
      




    </div>
  );
}

export default App;
