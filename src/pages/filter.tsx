import React from "react"
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import { AuthChecker } from "../components/AuthChecker";
import { HeaderFilter } from "../components/HeaderFilter";
import { Filters } from "../components/Filters";
import { fetchEntries } from '../util/contentfulPosts'
import Post from '../components/Post'

console.log('dsad')



export default function Filter({posts}) {
  return (
    <AuthChecker>
      <Head />
      <HeaderFilter />
      <Filters/>
      
  {/* {console.log(posts)} */}
      <Footer />
    </AuthChecker>
  );
}


export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}