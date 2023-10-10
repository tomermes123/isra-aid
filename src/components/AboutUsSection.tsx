import React from 'react'
import styled from 'styled-components'
import bidurLogo from '../assets/bidur-logo.png'
import maprintLogo from '../assets/maprint-logo.png'
import cyeraLogo from '../assets/cyera-logo.png'
import wixLogo from '../assets/wix-logo.png'
import ymLogo from '../assets/ym-logo.png'

const Section = styled.section`
  padding: 50px;
  text-align: center;
  width: 1200px;
  font-family: "Poppins", sans-serif;
`

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
`

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 50px;
`

const Team = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Member = styled.div`
  margin: 20px;
`

const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`

const Name = styled.h3`
  margin-top: 20px;
  font-size: 24px;
`

const Logo = styled.img`
  width: 150px;
  height: 100px;
  object-fit: contain;
`

const teamMembers = [
  {
    img: 'https://media.licdn.com/dms/image/C4E03AQGaCiWCStJtXg/profile-displayphoto-shrink_200_200/0/1627213752339?e=1702512000&v=beta&t=yaBN5prXYipOK0AFY71YloHLIpFYfDV7mAkgAX1e2wk',
    name: 'Mayron Dadush',
    logo: bidurLogo,
  },
  {
    img: 'https://media.licdn.com/dms/image/D4D03AQHPUYVxoclksQ/profile-displayphoto-shrink_800_800/0/1674940325563?e=1702512000&v=beta&t=cFTpfgMqeTK_iQ1x9YoGQrekYpdmXcHLYbaK2ImCgwI',
    name: 'Guy Mesika',
    logo: maprintLogo,
  },
  {
    img: 'https://media.licdn.com/dms/image/C4D03AQHydpRTrf6wuw/profile-displayphoto-shrink_800_800/0/1648556281059?e=1702512000&v=beta&t=uu-W4a9X5PoSeZadKCzToEtfauvLHlpZKkp0eCbKX5A',
    name: 'Tomer Mesika',
    logo: cyeraLogo,
  },
  {
    img: 'https://media.licdn.com/dms/image/C5103AQHueVGprIA8IQ/profile-displayphoto-shrink_800_800/0/1517604699649?e=1702512000&v=beta&t=kZp5_zEMTVBamYm07fwd424taIQwLB-8rnNodxPhK8o',
    name: 'Peter Shershov',
    logo: wixLogo,
  },
  {
    img: 'https://media.licdn.com/dms/image/D4D03AQFeucbcG688EA/profile-displayphoto-shrink_800_800/0/1690277968018?e=1702512000&v=beta&t=Ei0BsCTiBOGyz9vcWelFDk69szy06G-pP14aqjAqBpM',
    name: 'Yossi Molcho',
    logo: ymLogo,
  },
]

export function AboutUsSection () {
  return (
    <Section id='about-us'>
      <Title>About Us</Title>
      <Subtitle>
        We are hi-tech professionals who care deeply about Israel. We've come
        together to create a website that helps people from abroad contribute to
        Israel's resilience.
      </Subtitle>
      <Team>
        {teamMembers.map((member) => (
          <Member key={member.name}>
            <Image src={member.img} alt={member.name} />
            <Name>{member.name}</Name>
            <Logo src={member.logo} />
          </Member>
        ))}
      </Team>
    </Section>
  )
}
