import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: yellow;
  min-height: 60px;
  padding: 0 5%;
`

export default function() {
  return (
    <Container>
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </Container>
  )
}
