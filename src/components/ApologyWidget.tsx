import * as React from "react";
import styled from "styled-components";

function SavingsWidget({ savings }) {
  return (
    <StyledDiv>
      <BigMoneyEmoji>🤷‍♀️</BigMoneyEmoji>
      <Heading>Oh well</Heading>
      <Message>
        We think you can save approximately ${savings} on your property taxes
        over the next five years. See below for more details.
      </Message>
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

const Message = styled.p``;

export default SavingsWidget;
