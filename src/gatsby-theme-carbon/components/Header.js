import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const DefaultHeaderText = () => (
  <>
    IBM&nbsp;<span>AI Design</span>
  </>
);

const CustomHeader = props => (
  <Header children={DefaultHeaderText} />
);

export default CustomHeader;
