import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from '../components/layout'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
  `

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Text = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const ContentItem = props => (
  <ContentWrapper>
    <Description>
    <Link to={props.slug}>
    <Text>{props.title}</Text> 
              </Link>
      {/* <text>{props.title}</text> */}
      <Excerpt>{props.content}</Excerpt>
    </Description>
  </ContentWrapper>
)

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <Container>
        <h1>WP Content</h1>
        <p>Pages</p>

        {data.allWordpressPage.edges.map(({ node }) => (

          <ContentItem
          key={node.slug}
          title = {node.title}
          content= {node.excerpt}
          slug = {node.slug}
          >
          </ContentItem>
          ))}

        
<       p>Posts</p>
        {data.allWordpressPost.edges.map(({ node }) => (

        <ContentItem
        key={node.slug}
        title = {node.title}
        content= {node.excerpt}
        slug = {node.slug}
        >
        </ContentItem>


      
        ))}

        </Container>
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`