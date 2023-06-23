'use client'

import Feed from "@components/Feed"
import AnimatePage from "./animatePage"


const page = () => {
  return (
    <AnimatePage>
      <section className="w-full flex-center flex-col">
          <h1 className="head_text text-center">
              Discover & Share
              <br className="show"/>
              <span className="orange_gradient text-center">AI Powered Prompts</span>
          </h1>
          <p className="desc text-center">
            Proomptopia is a open-source AI prompting tool for modern world to discover, create and share createive prompts
          </p>
          
          <Feed/>

      </section>
    </AnimatePage>
  )
}

export default page