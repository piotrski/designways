import React from "react"
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import { AuthChecker } from "../components/AuthChecker";

export default function Filter() {
  return (
    <AuthChecker>
      <Head />
      {/* do odtworzenia */}
      <Footer />
    </AuthChecker>
  );
}
