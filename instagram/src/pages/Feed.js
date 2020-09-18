import React from 'react';
import styled from 'styled-components';
import logo from '../resources/logo.png';
import home from '../resources/home.png';
import dm from '../resources/dm.png';
import compass from '../resources/compass.png';
import like from '../resources/like.png';
import conference from '../resources/conference.jpg';
import profile from '../resources/profile.jpg';
import reply from '../resources/reply.png';
import save from '../resources/save.png';

import { Link } from 'react-router-dom';

const WrapperPage = styled.div``;

const StyledNavWrapper = styled.nav`  
  border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
  height: 54px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom:30px;
`;

const StyledNav = styled.nav`
  display: flex;
  margin: 0 auto 30px;
  padding: 0px 20px 0px 20px;
  max-width: 975px;
  height: 54px;
  align-items: center;
  justify-content: space-between;
`;

const StyleLeftNav = styled.nav`

  min-width: 40px;
  
`;

const StyleCenterNav = styled.nav`
  padding-left: 80px;
  width: 215px;
`;

const StyleRightNav = styled.nav`

`;

const StyleSection = styled.div`
display:block;
margin: 0 auto;
width:600px;
`;

const ContentHeader = styled.div`
border: 1px solid lightgrey;
padding: 16px;
height:27px;
`;

const StyleArticle = styled.div`
  margin: 0, auto;
  text-align: center;
`;

let ilike = 0;

function Ilike(){
  ilike+=1;
}

export default function Feed (props){

    return(
        <WrapperPage>
      <StyledNavWrapper>
        <StyledNav>
          <StyleLeftNav>
                <Link to='/'>
                    <img src={logo} style={{width: "102px", height: "29px", marginTop: "7px"}}/>
                </Link>
          </StyleLeftNav>
          <StyleCenterNav>
            <input type="text" placeholder="검색"/>
          </StyleCenterNav>
          <StyleRightNav>
            <Link to='/'>
                <img src={home} style={{width:"42px", height:"44px"}}/>
            </Link>
            <img src={dm} style={{width:"42px", height:"44px"}}/>
            <img src={compass} style={{width:"42px", height:"48px"}}/>
            <img src={like} style={{width:"40px", height:"38px"}}/>
          </StyleRightNav>
        </StyledNav>
      </StyledNavWrapper>
      <StyleSection>
        <ContentHeader>
          
          <img src={profile} style={{borderRadius:"20px", margin:"auto 10px" ,width:"32px", height:"32px"}}/>
          
          
          <h2 style={{display:"inline", fontSize:"14px", fontWeight:"600" }}>ecole.project</h2>
          
        </ContentHeader >
        <StyleArticle>
          <img src={conference} style={{width:"600px", height:"450px"}}/>
        </StyleArticle>
        <div style={{marginTop:"4px", padding:"0 8px"}}>
          <button style={{border:"0px", background:"white", cursor:"pointer"}} onClick={Ilike}><img src={like} style={{width:"32px", height:"27px"}}/></button>
          <button style={{border:"0px", background:"white", cursor:"pointer"}}><img src={reply} style={{width:"32px", height:"27px"}}/></button>
          <button style={{border:"0px", background:"white", cursor:"pointer"}}><img src={dm} style={{width:"36px", height:"30px"}}/></button>
          <button style={{border:"0px", background:"white", cursor:"pointer", float:"right"}}><img src={save} style={{width:"36px", height:"30px"}}/></button>
        </div>
        <div>
          <h2 style={{fontSize:"12px", fontWeight:"600", paddingLeft:"8px"}}>좋아요 {ilike}개</h2>
          <span style={{fontSize:"12px", fontWeight:"600", paddingLeft:"8px", marginTop:"10px"}}>ecole.project</span>
          <span style={{color:"blue", fontSize:"12px"}}>&nbsp;#소프트웨어플랫폼 #설명회</span>
        </div>
      </StyleSection>
    </WrapperPage>
    )

}