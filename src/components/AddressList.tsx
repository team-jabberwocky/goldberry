import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import AddressItem from "./AddressItem";

const STREET_ADDRESSES_QUERY = gql`
  query StreetAddresses($prefix: String!) {
    streetAddresses(prefix: $prefix) {
      fullAddress
      city
      zip
    }
  }
`;

function AddressList({ prefix, handleSelect }) {
  return prefix ? (
    <Query query={STREET_ADDRESSES_QUERY} variables={{ prefix }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading…</p>;
        if (error) return <p>Error!</p>;

        return data.streetAddresses.map(({ fullAddress, city, zip }, i) => {
          return (
            <AddressItem
              key={i}
              fullAddress={fullAddress}
              city={city}
              zip={zip}
              handleClick={handleSelect}
            />
          );
        });
      }}
    </Query>
  ) : null;
}

export default AddressList;
