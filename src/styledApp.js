import styled from 'styled-components';

const WrapperDivStyled = styled.div`
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  /* min-height:90vh; */
  /* background-color: white; */
  background-image:radial-gradient(whitesmoke,hsl(0, 0%, 20%));
  text-align: center;
  display:flex;
  flex-direction: column;
`;

const MainStyled = styled.main`
  position:relative;
  padding-top:80px;
  width:100%;
  min-height:calc(100vh - 60px - 100px - 40px);
`;

export {
  WrapperDivStyled,
  MainStyled
};
