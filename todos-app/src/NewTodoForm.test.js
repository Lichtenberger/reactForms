import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import NewTodoForm from './NewTodoForm'
import { it } from 'node:test'

it('renders without crashing', function() {
    render(<NewTodoForm />)
})

it('matches snapshot', function() {
    const { asFragment } = render(<NewTodoForm />)
    expect(asFragment()).toMatchSnapshot()
})

it('runs create function on submit', function() {
    const createMock = jest.fn()
    const { getByText } = render(<NewTodoForm createTodo={createMock} />)
    const createButton = getByText('Add a todo')
    fireEvent.click(createButton)
    expect(createMock).toHaveBeenCalled()
})