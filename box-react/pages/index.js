import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import styled from "styled-components";


export default function HomePage() {
  return (
    <StyledHomePage>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack/>
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  display: flex;
  `