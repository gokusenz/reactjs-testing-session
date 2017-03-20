import React, { PropTypes } from 'react'
import style from './TodoItem.css'

const TodoItem = ({ text, complete }) => (
  <li className={complete ? style.complete : ''}>{text}</li>
)

TodoItem.prototype = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool,
}
export default TodoItem
