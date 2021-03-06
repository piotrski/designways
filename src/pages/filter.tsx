import React from "react"
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import { AuthChecker } from "../components/AuthChecker";

console.log('dsad')

export default function Filter() {
  return (
    <AuthChecker>
      <Head />
      {/* do odtworzenia */}
      <Footer />
    </AuthChecker>
  );
}
