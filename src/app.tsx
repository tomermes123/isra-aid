import styled from "styled-components";
import { TopMenu } from "./components/TopMenu";
import { HeroSection } from "./components/HeroSection";
import { ItemSection } from "./components/ItemSection";
import { HowItWorks } from "./components/HowItWorks";
import { AboutUsSection } from "./components/AboutUsSection";
import { FooterSection } from "./components/FooterSection";

const AppContainer = styled.div`
  text-align: center;
  background: linear-gradient(209deg, #eef6ff -20.22%, #fff 89.32%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function App() {
  return (
    <AppContainer>
      <TopMenu />
      <HeroSection />
      <ItemSection />
      <HowItWorks />
      <AboutUsSection />
      <FooterSection />
    </AppContainer>
  );
}
