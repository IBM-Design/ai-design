import React from 'react';
import { HomepageCallout } from 'gatsby-theme-carbon';
import HomepageVideo  from '../../components/HomepageVideo';
import { settings } from "carbon-components";
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

const { prefix } = settings;

// Component to be shadowed


const FirstLeftText = () => (
  <h5 class="mission">
    Our practice
  </h5>
);

const FirstRightText = () => (
  <p>
    <strong>To design for a relationship with AI, we need to know ourselves first.</strong>  Our practice is built on IBM’s Principles for the AI Era as a resource for
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
  <h1 class='banner-text'>
    To design for a relationship with AI, we need to know ourselves first.
  </h1>
);

const customProps = {
  Banner: (
    <HomepageVideo
      src="hero.mp4"
      poster="hero.png"
    />),
  FirstCallout: (
    <HomepageCallout className={'callout'} leftText={FirstLeftText} rightText={FirstRightText} />
  ),
  SecondCallout: (
    <HomepageCallout
      className={'hidden'}
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
