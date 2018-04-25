import React from 'react';
import Link from 'gatsby-link';

const Subfooter = () => (
  <div className="subfooter">
    <div className="container h-padding h-center">
      <p>
        <Link target="_blank" to="//www.kbsdev.io">
          Developed by Kieran Smith (kbsdev)
        </Link>
      </p>
    </div>
  </div>
);

export default Subfooter;
