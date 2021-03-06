import React, { useEffect, useState } from "react";
import { Magic } from "magic-sdk";

type Props = {
  children: React.ReactNode;
};

export const AuthChecker = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      if (process.browser) {
        const magicClient = new Magic("pk_live_6A8CF7F906BC895E");
        const isLoggedIn = await magicClient.user.isLoggedIn();
        setIsLogged(isLoggedIn);
      }
      setLoading(false);
    })();
  }, [isLogged]);

  if (isLoading) {
    return null;
  }

  if (isLogged) {
    return children;
  }

  return (
    <main className="page">
      <div className="violet">
        <div className="container">
          <img
            className="logo spacer"
            src="images/Logo_horizontal_white.svg"
            alt=""
          />
          <h2 className="text__h2">Cały Twój rozwój w jednym miejscu</h2>
          <p className="text__paragraph">
            Szkolenia, warsztaty, konferencje, meetupy, webinary i nie tylko –
            cały Twój rozwój w jednym miejscu. Chcesz dostać dostęp do wersji
            Beta? Zostaw swój adres email, a my wyślemy Ci tajny dostęp.
          </p>
          <form className="form">
            <input
              type="email"
              className="form__text"
              name="email"
              required={true}
              placeholder="Enter your email"
            />
            <button type="submit" className="form__button">
              Dołącz do Beta-testów
            </button>
          </form>
          <div className="form__rodo">
            <input
              type="checkbox"
              name="newsletter"
              value="rodo"
              className="form__checkbox"
              checked
            />
            <label
              className="text__paragraph text__paragraph--checkbox"
            >
              Wyrażam zgodę na otrzymywanie drogą elektroniczną na wskazany
              przeze mnie adres e-mail treści zgodnie z{" "}
              <a href="https://www.designways.io/polityka-prywatnosci.html">
                polityka prywatności.
              </a>
            </label>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <ul className="list">
            <li className="list__element list__element--active">
              <img
                src="images/check-active.svg"
                className="list__image"
                alt=""
              />
              Lista wydarzeń z branży kreatywnej
            </li>
            <li className="list__element">
              <img src="images/check.svg" className="list__image" alt="" />{" "}
              Polecane materiały edukacyjne i kursy
              <span className="list__span">Wkrótce</span>
            </li>
            <li className="list__element">
              <img src="images/check.svg" className="list__image" alt="" />
              Spersonalizowane rekomendacje
              <span className="list__span">Wkrótce</span>
            </li>
            <li className="list__element">
              <img src="images/check.svg" className="list__image" alt="" />
              Zniżki i program lojalnościowy
              <span className="list__span">Wkrótce</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
