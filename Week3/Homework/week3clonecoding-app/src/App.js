import './App.css';
import React from 'react';
import logo from "./daangn_img/logo.png";

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




      </div>

      




    </div>
  );
}

export default App;
