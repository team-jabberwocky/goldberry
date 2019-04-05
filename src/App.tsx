import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import AddressSearch from "./components/AddressSearch";
import Widget from "./components/Widget";
import ZillowLogo from "./components/ZillowLogo";

const CALCULATE_SAVINGS = gql`
  query CalculateSavings($fullAddress: String!, $city: String!, $zip: String!) {
    calculateSavings(fullAddress: $fullAddress, city: $city, zip: $zip) {
      totalSavings
    }
  }
`;

function App() {
  const initialAddress = { fullAddress: "", city: "", zip: "" };
  const [address, setAddress] = React.useState(initialAddress);

  return (
    <Wrapper>
      <Header role="banner">
        <HeaderContainer>
          🏠 <Wordmark>Bombadil</Wordmark>
        </HeaderContainer>
      </Header>

      <Main className="patterned" role="main">
        <Container>
          {address === initialAddress ? (
            <AddressSearch
              addressSelected={selected => {
                setAddress(selected);
              }}
            />
          ) : (
            <Query query={CALCULATE_SAVINGS} variables={address}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading…</p>;
                if (error) return <p>Error!</p>;

                const savings = data.calculateSavings.totalSavings;

                let emoji = "💸";
                let heading = "Congratulations!";
                let message = `
                It looks like you may be paying too much in property taxes!
                We estimate we can reduce your taxes by $${savings} over the
                next 5 years.
                `;

                if (savings <= 0) {
                  emoji = "🤷‍♀️";
                  heading = "Oh well";
                  message =
                    "Sorry, it doesn't look like we found any savings for you.";
                }

                return (
                  <Widget emoji={emoji} heading={heading} message={message} />
                );
              }}
            </Query>
          )}
        </Container>
      </Main>

      <Footer role="contentinfo">
        <Container>
          <Small>
            <ZillowLogo />
            <p style={{ marginBottom: 0 }}>
              © Zillow, Inc., 2006-2016. Use is subject to{" "}
              <a href="https://www.zillow.com/corp/Terms.htm">Terms of Use</a>
            </p>
            <p style={{ marginTop: 10 }}>
              <a href="https://www.zillow.com/wikipages/What-is-a-Zestimate/">
                What’s a Zestimate?
              </a>
            </p>
          </Small>
        </Container>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Container = styled.div`
  max-width: 60rem;
  margin: auto;
  padding: 0 3rem;
`;

const Header = styled.header`
  background: white;
  background: white;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  font-size: 2.3rem;
`;

const Wordmark = styled.h1`
  margin-left: 1rem;
  font-family: "Pacifico";
  font-size: 2.3rem;
  color: #243c20;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 12rem 0;
`;

const Footer = styled.footer`
  padding: 2rem 3rem;
  background: white;

  img {
    width: 150px;
  }
`;

const Small = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

export default App;
