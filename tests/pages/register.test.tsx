import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { Register } from '../../src/pages/register'

describe('Registeru', () => {
  it('renders ok', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
