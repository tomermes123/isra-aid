import { memo } from "react";
import styled from "styled-components";
import { ReactComponent as HowItWorksImage } from "../assets/how-it-works.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 30px;
  max-width: 1400px;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: start;
  margin: 0px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 22px;
  text-align: start;
  margin: 10px auto;
`;

const Image = styled(HowItWorksImage)`
  max-width: 560px;
`;

const Bold = styled.span`
  font-weight: 600;
`;

export const HowItWorks = memo(() => {
  return (
    <Container id="how-it-works">
      <Information>
        <Heading>How it works?</Heading>
        <Description>
          We only utilize{" "}
          <Bold>confirmed and reputable donation channels in Israel</Bold>,
          which are thoroughly vetted by our team. After that, we upload them
          here so you can easily click a link and donate.
        </Description>
      </Information>
      <Image />
    </Container>
  );
});
