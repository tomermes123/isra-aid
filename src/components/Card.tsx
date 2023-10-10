import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin: 0px 50px;
  margin-top: 30px;
  text-align: left;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 0px 40px 0px #0000000d;
`;

const CardContent = styled.div`
  margin: 24px;
  height: 600px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h3`
  font-size: 24px;
  margin: 10px 0px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin: 10px 0px;
`;

export { Card, CardContent, Image, Title, Subtitle };
