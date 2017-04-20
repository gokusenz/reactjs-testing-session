import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'
import TodoItem from '../TodoItem'

storiesOf('TodoItem', module)
  .addDecorator(withKnobs)
  .addWithInfo('Not complete', 'An incomplete todo item', () => (
    <TodoItem
      text={text('Text', 'TodoItem')}
      complete={boolean('Complete', false)}
    />
  ))
  .addWithInfo('Complete', 'A complete todo item', () => (
    <TodoItem
      text={text('Text', 'TodoItem')}
      complete={boolean('Complete', true)}
    />
  ))
