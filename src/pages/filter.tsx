import React from "react"
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import { AuthChecker } from "../components/AuthChecker";
import { HeaderFilter } from "../components/HeaderFilter";
import { Filters } from "../components/Filters";

console.log('dsad')

export default function Filter() {
  return (
    <AuthChecker>
      <Head />
      <HeaderFilter />
      <Filters/>
      
      <Footer />
    </AuthChecker>
  );
}
