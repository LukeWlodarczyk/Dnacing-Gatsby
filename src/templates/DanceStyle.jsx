import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

import styled from 'styled-components';

import { Helmet } from 'react-helmet'


const Wrapper = styled.div`
  display: flex;
  margin: 30px;
  justify-content: center;
  color: #42a0ff;
`


const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`

const Name = styled.h1`
  color: #0582ff;
`

const Description = styled.p`
  margin: 10px 0;
  width: 700px;
  line-height: 24px;
`

const Cost = styled.p`
  margin: 15px 0;
`
const StyledLink = styled(Link)`
  margin-top: 50px;
  color: #0582ff;
  text-decoration: none;
  &:hover {
    color: #ff07c9;
  }
`

const List = styled.ul`
  margin-left: 15px;
`

const ListItem = styled.li`
  margin: 5px 0;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  color: #0582ff;
  margin: 0 auto;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border-color: #0582ff;
  border-radius: 4px;
`

const Textarea = styled.textarea`
  padding: 10px;
  border-color: #0582ff;
  border-radius: 4px;
  min-height: 200px;
`

const FormBtn = styled.button`
  width: 100%;
  height: 35px;
  background-color: #0582ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 30px;
  margin: 30px auto;
  &:hover {
    cursor: pointer;
    color: #0582ff;
    background-color: #ffffff;
    border: 2px solid #0582ff;
  }
`

const Img = styled.img`
  width: 300px;
  height: 300px;
`

const DanceStyle = ({
  data: {
    dance: { danceStyle },
  },
}) => {

  const [message, setMessage] = React.useState('');
  const [name, setName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message, name);
    setMessage('');
    setName('');
  }

  return (
    <Layout>
      <Helmet title={`Dancing Gatsby - ${danceStyle.name}`} />
      <Wrapper>
        <Img src={danceStyle.image} />
        <Details>
          <Name>{danceStyle.name}</Name>
          <Description>{danceStyle.description}</Description>
          <Cost>Costs: {danceStyle.price}$ per hour</Cost>
          <h3>Available instructors:</h3>
          <List>
            {
              danceStyle.instructors.map(instructor => (
                <ListItem key={instructor.slug}>
                  <StyledLink to={`/instructors/${instructor.slug}`}>{instructor.name}</StyledLink>
                </ListItem>
              ))
            }
          </List>
        </Details>
      </Wrapper>


      <Form onSubmit={handleSubmit}>
        <h3>Apply for classses</h3>
        <Input name='name' value={name} onChange={e => setName(e.target.value)} />
        <Textarea name='message' value={message} onChange={e => setMessage(e.target.value)} />
        <FormBtn type='submit'>Apply!</FormBtn>
      </Form>

    </Layout >
  )
};

export const pageQuery = graphql`
  query DanceStyleQuery($name: String!) {
          dance {
          danceStyle(where: {name: $name }) {
          name
        image
        description
        price
        instructors {
          name
          avatar
          slug
        }
      }
    }
  }
`;

export default DanceStyle;