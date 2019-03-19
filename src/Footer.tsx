import * as React from 'react'

export const Footer:React.SFC<{}> = () => {
  return (
    <footer id="footer" className="center-content">
      <div id="portal-title-footer">
          CSBC - PS/ON
      </div>
      <div id="portal-contact-footer center-content">
        <a href="mailto:csbc_pson_dcc@sagebase.org" className="footer-link"> Contact Us </a>
        <a target="_blank" href="https://s3.amazonaws.com/static.synapse.org/governance/SageBionetworksSynapseTermsandConditionsofUse.pdf?v=5" className="footer-link"> Terms of Use </a>
      </div>
    </footer>
  )
}
