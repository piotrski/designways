import React, { FC, useEffect, useState } from "react";
import { Magic } from "magic-sdk";

import { MAGIC_TOKEN } from "../../constants";
import { SignIn } from "../SignIn";
import { LoaderScreen } from "../LoaderScreen";

type Props = {
  withLoader?: boolean
};

export const AuthChecker: FC<Props> = ({ withLoader, children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      if (process.browser) {
        const magicClient = new Magic(MAGIC_TOKEN);
        const isLoggedIn = await magicClient.user.isLoggedIn();
        setIsLogged(isLoggedIn);
      }
      setLoading(false);
    })();
  }, [isLogged]);

  if (isLoading) {
    return withLoader ? <LoaderScreen /> : null;
  }

  if (isLogged) {
    return <>
      {children}
    </>;
  }
  
  return <SignIn /> 
}
