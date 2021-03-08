import React from "react"
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import { AuthChecker } from "../components/AuthChecker";
import { HeaderFilter } from "../components/HeaderFilter";
import { Filters } from "../components/Filters";
import { getEvents, getTags, getLevel } from '../util/contentfulPosts'




export default function Filter({posts, tags, levels}) {
  return (
    <AuthChecker>
      <Head />
      <HeaderFilter />
      <Filters posts={posts} tags={tags} levels={levels}/>
      
      <Footer />
    </AuthChecker>
  );
}


export async function getStaticProps() {
  const res = await getEvents()
  const resTag = await getTags()
  const resLvl = await getLevel()
  const posts = await res.map((p) => {
    return p.fields
  })
  const tags = await resTag.map((p) => {
    return p.fields
  })
  const levels = await resLvl.map((p) => {
    return p.fields
  })


  return {
    props: {
      tags,
      posts,
      levels,
    }
  }
}