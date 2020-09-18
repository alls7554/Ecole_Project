import React from 'react';
import styled from 'styled-components';
import phone from './resources/instaphone.png';
import logo from './resources/logo.png';
import facebook from './resources/facebook.png';
import appstore from './resources/appstore.png';
import googleplay from './resources/googleplay.png';

const StyledBackground = styled.article`
margin: 56px auto 0;
max-width: 935px;
padding-bottom: 64px;
width: 100%;
background-size: 100%;
`;

const StyledDivLeft = styled.div`
margin-top: 28px;
padding-bottom: 64px;
align-items: center;
height: 618px;
float: left;
`;

const StyledDivRight = styled.div`
margin-top: 64px;
padding-bottom: 64px;
align-items: center;
height: 618px;
display: inline-block;
`;

const StyledDivlogin = styled.div`
border: 1px solid rgba(var(--b6a,219,219,219),1);
background-color: rgba(var(--d87,255,255,255),1);
align-items: center;
border-radius: 1px;
margin: 0 0 10px;
padding: 10px 0;
justify-content: center;
text-align: center;
`;

const StyleDivdiv1 = styled.div`
margin-bottom: 10px;
max-width: 350px;
width: 100%;
`;

const StyleButton = styled.button`
border-radius: 4px;
width: 272px;
margin-right: 40px;
margin-left: 40px;
height: 30px;
text-align: center;
background: #0095f6;
color: white;
`;

const StyledInput = styled.input`
margin-bottom: 10px;
padding: 9px 0 7px 8px;
flex: 1 0 auto;
font-size: 12px;
line-height: 18px;
width: 258px;
`;

const StyledLine = styled.div`
background-color: rgba(var(--b38,219,219,219),1);
height: 1px;
position: relative;
top: .45em;
width: 103px;
`;

const StyledOr = styled.div`
font-size: 13px;
font-weight: 600;
line-height: 15px;
margin: 0 18px;
`;

const StyledFace = styled.button`
border: 0;
color: rgba(var(--d69,0,149,246),1);
display: inline;
padding: 0;
position: relative;
width: auto;
box-sizing: border-box;
cursor: pointer;
appearance: none;
background: 0 0
`;

const StyledRes = styled.span`
display: inline!important;
margin: 0!important;
font-size: 14px;
line-height: 18px;
font-weight: 600;
color: #0095f6;
color: rgba(var(--d69,0,149,246),1);
`;

function App() {
  return (
    <StyledBackground>
      <StyledDivLeft>
        <img src={phone}></img>
        <div style={{
          margin: "99px 0 0 151px",
          position: "relative"
        }}>

        </div>
      </StyledDivLeft>

      <StyledDivRight>
        <StyledDivlogin>
          <div>
            <img src={logo} style={{ height: "51px", width: "175px", margin: "22px auto 12px" }}></img>
          </div>
          <StyleDivdiv1>
            <form>
              <div style={{ marginTop: "24px" }}>
                <StyledInput type="text" placeholder="전화번호, 사용자 이름 또는 이메일"></StyledInput>
                <StyledInput type="text" placeholder="비밀번호"></StyledInput>
                <div>
                  <StyleButton>로그인</StyleButton>
                </div>
                <div style={{ margin: "10px 40px 18px", display: "flex", justifyContent: "space-between" }}>
                  <StyledLine></StyledLine>
                  <StyledOr>또는</StyledOr>
                  <StyledLine></StyledLine>
                </div>
                <div style={{ margin: "8px 40px" }}>
                  <StyledFace>
                    <span style={{ display: "inline-block", marginRight: "8px", position: "relative", top: "3px" }}>
                      <img src={facebook} style={{ width: "16px", height: "16px" }}></img>
                    </span>
                    <span style={{ color: "#385185", fontWeight: "600" }}>Facebook으로 로그인</span>
                  </StyledFace>
                </div>
              </div>
              <a href="www.naver.com" tabindex="0" style={{ color: "#00376b", color: "rgba(var(--fe0,0,55,107),1)", fontSize: "12px", lineHeight: "14px", marginTop: "12px", textAlign: "center" }}>비밀번호를 잊으셨나요?</a>
            </form>
          </StyleDivdiv1>
        </StyledDivlogin>

        <div style={{
          border: "1px solid rgba(var(--b6a,219,219,219),1)",
          borderRadius: "1px",
          margin: "0 0 10px",
          padding: "10px 0"
        }}>
          <div style={{ display: "block" }}>
            <p style={{
              color: "#262626",
              color: "rgba(var(--i1d,38,38,38),1)",
              fontSize: "14px",
              margin: "15px",
              textAlign: "center",
            }}>계정이 없으신가요?
              <a style={{
                color: "#0095f6",
                color: "rgba(var(--d69,0,149,246),1)"
              }}>
                <StyledRes>가입하기</StyledRes>
              </a>
            </p>
          </div>
        </div>
        <div>
          <p style={{
            color: "rgba(var(--i1d,38,38,38),1)",
            fontSize: "14px",
            lineHeight: "18px",
            margin: "10px 20px 10px 20px",
            textAlign: "center",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px"
          }}>앱을 다운로드하세요.</p>
          <div style={{
            justifyContent: "center",
            margin: "10px 0 10px 0",
            flexDirection: "row",
            WebkitBoxPack: "center",
            textAlign: "center"
          }}>
            <a style={{ marginRight: "8px" }}>
              <img src={appstore} style={{ height: "40px" }}></img>
            </a>
            <a style={{ marginRight: "8px" }}>
              <img src={googleplay} style={{ height: "40px" }}></img>
            </a>
          </div>
        </div>
      </StyledDivRight>
    </StyledBackground >
  );
}

export default App;
