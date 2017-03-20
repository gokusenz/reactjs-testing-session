import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

describe('TodoItem', () => {
  let component

  beforeEach(() => {
    component = shallow(<TodoItem text="Hello" />)
  })

  it('matches its snapshot - not complete', () => {
    expect(component).toMatchSnapshot()
  })

  it('matches it snapshot - complete', () => {
    component.setProps({ complete: true })

    expect(component).toMatchSnapshot()
  })

  it('renders correct structure', () => {
    expect(component.is('li')).toBe(true)
  })

  it('has complete class if receiving complete prop', () => {
    component.setProps({ complete: true })

    expect(component.hasClass('complete')).toBe(true)
    expect(component.text()).toBe('Hello :)')
  })
})
