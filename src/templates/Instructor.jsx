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

const Expierience = styled.p`
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


const Img = styled.img`
  width: 200px;
  height: 200px;
`

const Instructor = ({
  data: {
    dance: { instructor },
  },
}) => (
    <Layout>
      <Helmet title={`Dancing Gatsby - ${instructor.name}`} />
      <Wrapper>
        <Img src={instructor.avatar} />
        <Details>
          <Name>{instructor.name}</Name>
          <Expierience>{instructor.yearsExperience} years expierience</Expierience>
          <h3>Skills</h3>
          <List>
            {
              instructor.danceStyles.map(style => (
                <ListItem>
                  <StyledLink to={`/styles/${style.name}`}>{style.name}</StyledLink>
                </ListItem>
              ))
            }
          </List>
        </Details>
      </Wrapper>
    </Layout>
  );

export const pageQuery = graphql`
  query InstructorQuery($slug: String!) {
    dance {
      instructor(where: { slug: $slug }) {
        name
        avatar
        yearsExperience
        danceStyles {
          name
        }
      }
    }
  }
`;

export default Instructor;