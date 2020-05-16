import React from 'react'
import renderer from 'react-test-renderer'

import { Footer } from '../../src/components/template/footer/index'

describe('Footer', () => {
  it('renders ok', () => {
    const component = renderer.create(<Footer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
