import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { TodoListContainer, mapStateToProps } from '../TodoList'
import TodoList from '../../components/TodoList'

describe('TodoList Container', () => {
  const createStore = configureMockStore()
  let component

  beforeEach(() => {
    const store = createStore(state)
    component = mount(
      <Provider store={store}>
        <TodoListContainer />
      </Provider>
    ).find(TodoListContainer).find(TodoList)
  })
  it('receives todos props from state', () => {
    expect(component.prop('todos')).toEqual([
      { id: 1, text: 'Feed cat', complete: false },
      { id: 2, text: 'Drink coffee', complete: true },
    ])
  })

  it('performs mapStateToProps correctly', () => {
    const state = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    const expectedProps = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    expect(mapStateToProps(state)).toEqual(expectedProps)
  })
})
