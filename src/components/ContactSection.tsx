import { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: "GRIFTER", sans-serif;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Subtitle = styled.p`
  font-size: 20px;
  margin: 20px auto;
  margin-bottom: 30px;
  max-width: 900px;
  color: rgba(0, 0, 0, 0.6);
`

const Section = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  width: 100%;
`

const Form = styled.form`
  max-width: 500px;
  margin: auto;
`

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`

const TextArea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bffe3;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

export function ContactSection () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    (window as any).Email.send({
      Host: 'smtp.your-email.com',
      Username: 'your-email@gmail.com',
      Password: 'your-email-password',
      To: 'recipient-email@gmail.com',
      From: formData.email,
      Subject: formData.subject,
      Body: `
        Name: ${formData.name} <br/>
        Email: ${formData.email} <br/>
        Message: ${formData.body}
      `,
    }).then((message: string) => alert(message))
  }

  return (
    <Section>
      <Title>Contact Us</Title>
      <Subtitle>
        We're here to assist you! Whether you have a question, feedback, or just want to say hello, feel free to drop us a message. We value your thoughts and are eager to hear from you.
      </Subtitle>

      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='name'
          placeholder='Your Name'
          required
          onChange={handleInputChange}
        />
        <Input
          type='email'
          name='email'
          placeholder='Your Email'
          required
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='subject'
          placeholder='Subject'
          required
          onChange={handleInputChange}
        />
        <TextArea
          name='body'
          rows={5}
          placeholder='Your Message'
          required
          onChange={handleInputChange}
        />
        <Button type='submit'>Send Message</Button>
      </Form>
    </Section>
  )
}
