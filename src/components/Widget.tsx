import * as React from "react";
import styled from "styled-components";

function Widget({ emoji, heading, message }) {
  return (
    <StyledDiv>
      <BigMoneyEmoji>{emoji}</BigMoneyEmoji>
      <Heading>{heading}</Heading>
      <Message>{message}</Message>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background: white;
  border-radius: 3px;
  padding: 3rem;
  text-align: center;
`;

const BigMoneyEmoji = styled.div`
  font-size: 6rem;
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 3rem;
`;

const Message = styled.p`
  color: #333;
  font-size: 1.5rem;
  line-height: 1.4;
  max-width: 30rem;
  margin: auto;
`;

export default Widget;
