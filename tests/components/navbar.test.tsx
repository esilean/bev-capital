import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { NavBar } from '../../src/components/template/navbar'
import { LoginEnum } from '../../src/interfaces/enums/login'

describe('NavBar', () => {
  it('renders ok', () => {
    const component = renderer.create(
      <MemoryRouter>
        <NavBar loggedIn={LoginEnum.In} />
      </MemoryRouter>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
