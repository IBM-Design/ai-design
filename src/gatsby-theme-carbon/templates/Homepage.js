import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';

// Component to be shadowed
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import Carbon from '../../images/hero.png';

const FirstLeftText = () => (
  <p>
    Our Mission
  </p>
);

const FirstRightText = () => (
  <p>
    Discovering and enacting the path to safe artificial general intelligence.
  Our practice is built on IBM’s Principles for the AI Era as a resource for
    all designers and developers. This shared collection of ethics, guidelines,
    and resources ensures that IBM products share a unified foundation.
  </p>
);

const SecondLeftText = () => <p>Get in touch</p>;

const SecondRightText = () => (
  <p>
    For any questions, clarifications, or comments, please reach out to us at
    any time. We’re open and available for ideas, guidance and support.
    <br />
    <a
      css={({ typeStyles }) => typeStyles.bodyShort02}
      href="https://www.carbondesignsystem.com/contributing/governance"
    >
      Start Contributing →
    </a>
  </p>
);

const BannerText = () => (
  <h1>
    Carbon
    <br />
    Design System
  </h1>
);

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout leftText={FirstLeftText} rightText={FirstRightText} />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#171717"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
