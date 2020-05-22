import React from 'react'

import './styles.less'

export const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="footer-logo">
        Bev Capital <span>Data is delayed by at least 15 seconds</span>
        <br />
        Data provided by{' '}
        <a href="https://finnhub.io" target="_blank" rel="noopener noreferrer">
          Finnhub
        </a>{' '}
        and/or{' '}
        <a href="https://iexcloud.io" target="_blank" rel="noopener noreferrer">
          IEX Cloud
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
            <a href="https://www.linkedin.com/in/leandro-bevilaqua-461a2428/" title="Linkedin">
              Linkedin
            </a>
          </li>
        </ul>
        <p>© 2020 made with ❤️ in Brazil by Leandro Bevilaqua during Covid-19 😭</p>
      </div>
    </div>
  )
}
