import React, { useState, FormEvent } from "react";
import { Magic } from "magic-sdk";

import { MAGIC_TOKEN } from "../../constants";

import CheckActive from "../../images/check-active.svg";
import CheckNotActive from "../../images/check.svg";
import LogoHorizontal from "../../images/Logo_horizontal_white.svg";

export const SignIn = () => {
  // form fields
  const [email, setEmail] = useState("");
  const [rodo, setRodo] = useState(false);

  const [magicClient] = useState(
    process.browser ? new Magic(MAGIC_TOKEN) : null
  );

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (magicClient) {
      await magicClient.auth.loginWithMagicLink({ email });
    }
  };

  return (
    <main className="page">
      <div className="violet">
        <div className="container">
          <img
            className="logo spacer"
            src={LogoHorizontal}
            alt=""
          />
          <h2 className="text__h2">Cały Twój rozwój w jednym miejscu</h2>
          <p className="text__paragraph">
            Szkolenia, warsztaty, konferencje, meetupy, webinary i nie tylko –
            cały Twój rozwój w jednym miejscu. Chcesz dostać dostęp do wersji
            Beta? Zostaw swój adres email, a my wyślemy Ci tajny dostęp.
          </p>
          <form className="form" onSubmit={handleLogin}>
            <input
              type="email"
              className="form__text"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required={true}
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="form__button"
              disabled={!rodo || !email.length}
            >
              Dołącz do Beta-testów
            </button>
          </form>
          <div className="form__rodo">
            <input
              type="checkbox"
              name="newsletter"
              className="form__checkbox"
              checked={rodo}
              onChange={() => setRodo(!rodo)}
            />
            <label className="text__paragraph text__paragraph--checkbox">
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
              <img src={CheckActive} className="list__image" alt="" />
              Lista wydarzeń z branży kreatywnej
            </li>
            <li className="list__element">
              <img src={CheckNotActive} className="list__image" alt="" />
              Polecane materiały edukacyjne i kursy
              <span className="list__span">Wkrótce</span>
            </li>
            <li className="list__element">
              <img src={CheckNotActive} className="list__image" alt="" />
              Spersonalizowane rekomendacje
              <span className="list__span">Wkrótce</span>
            </li>
            <li className="list__element">
              <img src={CheckNotActive} className="list__image" alt="" />
              Zniżki i program lojalnościowy
              <span className="list__span">Wkrótce</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
