import React from "react";
import styled from "styled-components";
import bidurLogo from "../assets/bidur-logo.png";
import maprixLogo from "../assets/maprix-logo.png";
import cyeraLogo from "../assets/cyera-logo.png";
import wixLogo from "../assets/wix-logo.png";
import ymLogo from "../assets/ym-logo.png";

const Section = styled.section`
  padding: 50px auto;
  margin: 50px auto;
  margin-top: 0;
  text-align: center;
  max-width: 1200px;
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin: auto 30px;
  margin-bottom: 50px;
  max-width: 900px;
  color: rgba(0, 0, 0, 0.6);
`;

const Team = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Member = styled.div`
  margin: 20px;

  @media (max-width: 768px) {
    // 768px is a common breakpoint for mobile devices
    width: calc(
      100% - 40px
    ); // On small screens, each member takes the full width
  }
`;

const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
`;

const Name = styled.h3`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 150px;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
`;

const teamMembers = [
  {
    img: "https://media.licdn.com/dms/image/C4E03AQGaCiWCStJtXg/profile-displayphoto-shrink_200_200/0/1627213752339?e=1702512000&v=beta&t=yaBN5prXYipOK0AFY71YloHLIpFYfDV7mAkgAX1e2wk",
    name: "Mayron Dadush",
    nameLink: "https://www.linkedin.com/in/mayron-dadush-7b84b1202/",
    logo: bidurLogo,
    logoLink:
      "https://www.open.co.il/%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%91%D7%99%D7%93%D7%95%D7%A8",
  },
  {
    img: "https://media.licdn.com/dms/image/D4D03AQHPUYVxoclksQ/profile-displayphoto-shrink_800_800/0/1674940325563?e=1702512000&v=beta&t=cFTpfgMqeTK_iQ1x9YoGQrekYpdmXcHLYbaK2ImCgwI",
    name: "Guy Mesika",
    nameLink: "https://www.linkedin.com/in/guy-m-20301487/",
    logo: maprixLogo,
    logoLink: "https://www.maprix.com/",
  },
  {
    img: "https://media.licdn.com/dms/image/C4D03AQHydpRTrf6wuw/profile-displayphoto-shrink_800_800/0/1648556281059?e=1702512000&v=beta&t=uu-W4a9X5PoSeZadKCzToEtfauvLHlpZKkp0eCbKX5A",
    name: "Tomer Mesika",
    nameLink: "https://www.linkedin.com/in/tomer-mesika-0aa7b242/",
    logo: cyeraLogo,
    logoLink: "https://www.cyera.io/",
  },
  {
    img: "https://media.licdn.com/dms/image/C5103AQHueVGprIA8IQ/profile-displayphoto-shrink_800_800/0/1517604699649?e=1702512000&v=beta&t=kZp5_zEMTVBamYm07fwd424taIQwLB-8rnNodxPhK8o",
    name: "Peter Shershov",
    nameLink: "https://www.linkedin.com/in/peter-shershov/",
    logo: wixLogo,
    logoLink: "https://www.wix.com/",
  },
  {
    img: "https://media.licdn.com/dms/image/D4D03AQFeucbcG688EA/profile-displayphoto-shrink_800_800/0/1690277968018?e=1702512000&v=beta&t=Ei0BsCTiBOGyz9vcWelFDk69szy06G-pP14aqjAqBpM",
    name: "Yossi Molcho",
    nameLink: "https://www.linkedin.com/in/yossi-molcho-08640498/",
    logo: ymLogo,
    logoLink: "https://www.yossimolcho.com/",
  },
];

export function AboutUsSection() {
  return (
    <Section id="about-us">
      <Title>About Us</Title>
      <Subtitle>
        We are hi-tech professionals who care deeply about Israel. We've come
        together to create a website that helps people from abroad contribute to
        Israel's resilience.
      </Subtitle>
      <Team>
        {teamMembers.map((member) => (
          <Member key={member.name}>
            <Image
              src={member.img}
              alt={member.name}
              onClick={(e: any) => window.open(member.nameLink, "_blank")}
            />
            <Name onClick={(e: any) => window.open(member.nameLink, "_blank")}>
              {member.name}
            </Name>
            <Logo
              src={member.logo}
              onClick={(e: any) => window.open(member.logoLink, "_blank")}
            />
          </Member>
        ))}
      </Team>
    </Section>
  );
}
