import * as React from "react";
import AddressList from "./AddressList";
import styled from "styled-components";

function AddressSearch(props) {
  const { addressSelected } = props;
  const [prefix, setPrefix] = React.useState("");

  return (
    <>
      <Input
        type="text"
        value={prefix}
        onChange={e => setPrefix(e.target.value)}
        placeholder="Where do you even live?"
      />
      <AddressList
        prefix={prefix}
        handleSelect={address => {
          setPrefix("");
          addressSelected(address);
        }}
      />
    </>
  );
}

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 3rem;
  border: 0;
  padding: 1.3rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

export default AddressSearch;
