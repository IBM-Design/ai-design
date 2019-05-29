import React from 'react';
import Meta from 'gatsby-theme-carbon/src/components/Meta';

const CustomMeta = props => (
  <Meta {...props}
  meta={[
    {
      name: 'description',
      content: 'AI Design is built on IBM’s Principles for the AI Era as a resource for all designers and developers. This shared collection of ethics, guidelines, and resources ensures that IBM products share a unified foundation.',
    },
    {
      name: 'keywords',
      content: 'IBM, AI, artificial intelligence, ML, machine learning, data, ethics, conversation, conversation design, design, system, Carbon, design system, Bluemix, cloud',
    }
  ]} />
);

export default CustomMeta;
