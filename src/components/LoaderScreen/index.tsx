import React from 'react';

import LogoHorizontal from "../../images/Logo_horizontal_white.svg";

export const LoaderScreen = () => {
    return (<main className="page">
      <div className="violet">
        <div className="container">
            <img
              className="logo spacer"
              src={LogoHorizontal}
              alt=""
            />
          <h2 className="text__h2">Ładowanie...</h2>
          </div>
        </div>
    </main>);
} 