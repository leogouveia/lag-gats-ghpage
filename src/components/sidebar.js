import React from "react"
import styled from "styled-components"
const Container = styled.aside`
  padding: 10px 5px 10px 15px;
  width: 20vw;
  border-right: 5px solid black;
  margin-right: 20px;
`
const List = styled.ul`
  list-style: none;
  padding-left: 0;
`
const Box = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    <div style={{ fontSize: ".6rem" }}>{children}</div>
  </div>
)
export default function() {
  return (
    <Container className="">
      <Box title="About Me">
        <p>
          I'm dedicated and committed to my work and my team. I'm a very
          innovative person who loves technology.
        </p>
      </Box>
      <Box title="Contacts">
        <List style={{}}>
          <li>leogouv@gmail.com</li>
          <li>+55 61 98377-1117</li>
          <li>leogouveia.com</li>
        </List>
      </Box>
      <Box title="Where">
        <List>
          <li>Brasília, DF</li>
          <li>Brazil</li>
        </List>
      </Box>
    </Container>
  )
}
