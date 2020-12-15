import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const LinkBox = styled(Link)`
  margin: 30px;
  padding: 5px;
  border: 1px solid gold;
  text-decoration: none;
  &:hover div {
    color: #ff07c9;
  }
`

const Name = styled.div`
  text-align: center;
  text-decoration: none;
  margin-top: 10px;
  color: #0582ff;
`

const danceStylesQuery = graphql`
  {
    dance {
      instructors {
        name
        avatar
        slug
        yearsExperience
        danceStyles {
          name
        }
      }
    }
  }
`;


const Instructors = () => {
  const { dance: { instructors } } = useStaticQuery(danceStylesQuery);

  console.log(instructors)

  return (
    <Layout>
      <Helmet title='Dancing Gatsby - Instructors' />
      <Wrapper>
        {
          instructors.map(instructor => (
            <LinkBox key={instructor.slug} to={`/instructors/${instructor.slug}`}>
              <img src={instructor.avatar} style={{ width: '250px', height: '250px' }} />
              <Name>{instructor.name}</Name>
            </LinkBox>
          ))
        }
      </Wrapper>
    </Layout>
  )
}

export default Instructors;