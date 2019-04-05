import * as React from "react";

import zillowLogo from "../assets/zillow.svg";

function ZillowLogo() {
  return (
    <a href="http://www.zillow.com/">
      <img
        src={zillowLogo}
        alt="Zillow Real Estate Listings"
        style={{ width: 110 }}
      />
    </a>
  );
}

export default ZillowLogo;
