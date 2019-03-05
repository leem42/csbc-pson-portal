import * as React from 'react'
import { SynapseComponents } from 'synapse-react-client'

const About = () => {
  return (
    <div className="container">
      <SynapseComponents.Markdown
        ownerId="syn7080714"
        wikiId="470467"
      />
    </div>
  )
}

export default About
