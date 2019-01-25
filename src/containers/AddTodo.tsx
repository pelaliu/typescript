import * as React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

const AddTodo = ({ dispatch }: {dispatch: any}) => {
  let input: any

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input className='input'
          ref={node => {
            input = node
          }}
        />
        <button type="submit" className='submit'>
          Add Todo
        </button>
      </form>
    </div>
  )
}
const AddTodos = connect()(AddTodo);

export default AddTodos