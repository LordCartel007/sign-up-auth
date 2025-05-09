import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import "../components/VideoBackground.css";

const StyledDiv = styled.div`
  @media screen and (max-width: 767px) {
  }
`;

const HomePage = () => {
  return (
    <div>
      <Header />
      <StyledDiv className="containervideo">
        <video autoPlay loop muted playsInline className="background-clip">
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/liquid+ink+cut+video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="content"></div>
      </StyledDiv>
    </div>
  );
};

export default HomePage;
