import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

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
      danceStyles {
        name
        image
        description
        price
      }
    }
  }
`;


const Home = () => {
  const { dance: { danceStyles } } = useStaticQuery(danceStylesQuery);

  return (
    <Layout>
      <Helmet title='Dancing Gatsby' />
      <Wrapper>
        {
          danceStyles.map(style => (
            <LinkBox key={style.name} to={`/styles/${style.name}`}>
              <img src={style.image} style={{ width: '250px', height: '250px' }} />
              <Name>{style.name}</Name>
            </LinkBox>
          ))
        }
      </Wrapper>
    </Layout>
  )
}

export default Home;