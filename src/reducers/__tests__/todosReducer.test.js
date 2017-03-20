import todosReducer from '../todosReducer'

describe('todosReducer', () => {
  it('return correct initial state', () => {
    expect(todosReducer(undefined, {})).toEqual([])
  })
})
