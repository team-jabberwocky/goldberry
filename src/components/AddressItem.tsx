import * as React from "react";
import styled from "styled-components";

function AddressItem(props) {
  const { fullAddress, city, zip, handleClick } = props;
  return (
    <Wrapper onClick={() => handleClick({ fullAddress, city, zip })}>
      <FullAddress>{fullAddress}</FullAddress>
      <CityZip>
        {city} {zip}
      </CityZip>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  font-size: 1.5rem;
  font-weight: bold;
  border: 0;
  padding: 1.3rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s;

  div {
    opacity: 0.4;
    transition: all 0.3s;
  }

  :hover {
    background-color: #efefef;

    div {
      opacity: 0.8;
    }
  }
`;

const FullAddress = styled.div``;

const CityZip = styled.div`
  font-size: 1.2rem;
`;

export default AddressItem;
