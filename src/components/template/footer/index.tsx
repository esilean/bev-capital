import * as React from 'react'

import './styles.less'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        Bev Capital
        <br />
        <a href="https://iexcloud.io" target="_blank" rel="noopener noreferrer">
          Data provided by IEX Cloud
        </a>
      </div>
      <div className="footer-nav">
        <ul>
          <li>
            <a href="https://github.com/esilean" title="Github">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/leandro-bevilaqua-461a2428/"
              title="Linkedin"
            >
              Linkedin
            </a>
          </li>
        </ul>
        <p>© 2020 feito por Leandro Bevilaqua</p>
      </div>
    </div>
  )
}
