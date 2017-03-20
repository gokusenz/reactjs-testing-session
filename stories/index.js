import React from 'react'
import { storiesOf } from '@kadira/storybook'
import TodoItem from '../src/components/TodoItem'

storiesOf('TodoItem', module)
  .add('not complete', () => (
    <TodoItem text="Not Complete" />
  ))
  .add('complete', () => (
    <TodoItem text="Complete" complete />
  ))
