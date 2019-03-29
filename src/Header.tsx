import * as React from 'react'

export const Header: React.SFC<{}> = () => {
  return (
    <header>
      <div id="header" className="center-content">
        <div className="header-text">
          <h2>
          Cancer Systems Biology Consortium and Physical Sciences in Oncology Network
          </h2>
          <p className="normal-weight">
            The NIH National Cancer Institute-sponsored Cancer Systems Biology Consortium (CSBC) and Physical Sciences
            in Oncology Network (PS-ON) aim to tackle the most perplexing issues in cancer to increase our understanding
            of tumor biology, treatment options, and patient outcome. The CSBC / PS-ON Data Portal highlights ongoing
            research efforts in these richly interdisciplinary fields, including the data generated and methods
            developed in the addresssing fundamental questions in cancer research.
          </p>
        </div>
      </div>
  </header>
  )
}
