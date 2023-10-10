import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin-top: 30px;
  text-align: left;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 0px 40px 0px #0000000d;
  background-color: #fff;
`

const CardContent = styled.div`
  margin: 24px;
  min-height: 150px; // Changed to min-height for flexibility
`

const Image = styled.img`
  width: 100%;
  height: 200px; // Fixed height
  object-fit: cover;
  border-bottom: 1px solid #ccc;
`

const Title = styled.h3`
  font-size: 24px;
  margin: 10px 0px;
`

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export { Card, CardContent, Image, Title, Subtitle }
