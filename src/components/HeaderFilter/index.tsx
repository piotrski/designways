import React from "react";
import Image from 'next/image';


export const HeaderFilter = () => {
  return (
      <header className="violet violet__filter display__column">
      <div className="container container--big display__row nav__main">
        <Image src='/images/Logo_horizontal_white.svg' alt="Logo DesignWays" width={168} height={48} />
        <nav className="nav__container display__flex disp">
          <ul className="nav__list display__row">
            <li className="nav__element">
              <a className="nav__element" href="mailto:hello@designways.io">hello@designways.io</a></li>
            
            <li className="nav__element">
              <a
                href="https://www.facebook.com/designwaysconf
          "
                ><Image src="/images/facebook.svg" alt="Facebook logo" width={11} height={19} /></a>
            </li>
            <li className="nav__element">
              <a
                href="https://www.instagram.com/designwaysconf/
          "
              >
                <Image src="/images/insta_icon.svg" alt="Instagram logo" width={19} height={19} /></a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container container--big display__flex display__column">
        <h2 className="text__h2 text__h2--smallBottom">
          Poznaj swoją designerską ścieżkę.
        </h2>
        <h5 className="text__h5">
          Znajdź szkolenia z branży, które pozwolą Ci rozwinąć karierę.
        </h5>
      </div>
    </header>
  )


}
