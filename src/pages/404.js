import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class FourOhFour extends React.Component {
  render() {
    return (
      <div className="blog">
        <Helmet title="404 - Page Not Found" />
        <div className="FourOhFour">
          <p className="404">
            Oh no! <span role="img" artia-label="crying emoji">😢</span> This page was not found.
            <br />
            <Link to="/">
              Here's a link to my homepage
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default FourOhFour;
