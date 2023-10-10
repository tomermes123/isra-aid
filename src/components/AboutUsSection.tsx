import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 50px;
  text-align: center;
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

const Role = styled.p`
  font-size: 18px;
  color: grey;
`

const teamMembers = [
  { img: '/path/to/image1.jpg', name: 'Name 1', role: 'Role 1' },
  { img: '/path/to/image2.jpg', name: 'Name 2', role: 'Role 2' },
  { img: '/path/to/image3.jpg', name: 'Name 3', role: 'Role 3' },
  { img: '/path/to/image4.jpg', name: 'Name 4', role: 'Role 4' },
  { img: '/path/to/image5.jpg', name: 'Name 5', role: 'Role 5' },
]

export function AboutUsSection () {
  return (
    <Section>
      <Title>About Us</Title>
      <Subtitle>Words about us</Subtitle>
      <Team>
        {teamMembers.map(member => (
          <Member key={member.name}>
            <Image src={member.img} alt={member.name} />
            <Name>{member.name}</Name>
            <Role>{member.role}</Role>
          </Member>
        ))}
      </Team>
    </Section>
  )
}
