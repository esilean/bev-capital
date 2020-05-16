import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { Home } from '../../src/pages/home'
import { LoginEnum } from '../../src/interfaces/enums/login'

describe('Home', () => {
  it('renders ok', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Home loggedIn={LoginEnum.In} />
      </MemoryRouter>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
