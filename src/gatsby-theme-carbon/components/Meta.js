import React from 'react';
import Meta from 'gatsby-theme-carbon/src/components/Meta';

const CustomMeta = props => (
  <Meta {...props} />
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
);

export default CustomMeta;
