import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { Login } from '../../src/pages/login'

describe('Login', () => {
  it('renders ok', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
