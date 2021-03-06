import React from "react";

import { Head } from "../components/Head";
import { AuthChecker } from "../components/AuthChecker";
import { Redirect } from "../components/Redirect";
import { DEFAULT_PAGE_PATH } from "../constants";

export default function Home() {
  return (
    <>
      <Head />
      <AuthChecker withLoader>
        <Redirect to={DEFAULT_PAGE_PATH} />
      </AuthChecker>
    </>
  );
}
