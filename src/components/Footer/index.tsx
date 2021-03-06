import React from "react";
import Image from "next/image";

import Logo from '../../images/Logo_horizontal_new.svg'

export const Footer = () => {
  return (
    <footer className="container container--big filterFooter">
      <div className="filterFooter__footerHalf">
        <img src={Logo} alt="logo-bottom" />
        <p className="filterFooter__footerCopyrights">
          All Rights Reserverd © 2021 DesignWays. Skontaktuj się pod:
          <a
            className="filterFooter__footerCopyrights"
            href="mailto:hello@designways.io"
          >
            hello@deisgnways.io
          </a>
        </p>
      </div>
      <div className="filterFooter__footerHal filterFooter__rightFooter">
        <p className="filterFooter__footerTerms">
          <a
            href="https://www.designways.io/polityka-prywatnosci.html"
            className="filterFooter__footerTerms"
          >
            Terms & Privacy
          </a>
        </p>
        <div className="filterFooter__socialMedia">
          <a href="https://www.facebook.com/designwaysconf">
            <Image src="/../../images/facebook-dark.svg" width={50} height={50} />
          </a>
          <a href="https://www.instagram.com/designwaysconf/">
            <img src="images/instagram-dark.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
