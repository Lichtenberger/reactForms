import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Todo from './Todo'
import { it } from 'node:test'
import { expectedError } from '@babel/core/lib/errors/rewrite-stack-trace'

it('renders without crashing', function() {
    render(<Todo />)
})

it('matches snapshot', function() {
    const { asFragment } = render(<Todo />)
    expect(asFragment()).toMatchSnapshot()
})

it('matches snapshot when editing', function() {
    const { asFragment, getByText } = rander(<Todo />)
    const editButton = getByText('Edit')
    fireEvent.click(editButton)
    expect(asFragment()).toMatchSnapshot()
})

it('runs the update on form submit', function() {
    const updateMock = jest.fn()
    const { getByText } = render(<Todo update={updateMock} />)
    const editButton = getByText('Edit')
    fireEvent.click(editButton)
    const updateButton = getByText('Update')
    fireEvent.click(updateButton)
    expect(updateMock).toHaveBeenCalled()
})

it('runs the delete on click', function() {
    const removeMock = jest.fn()
    const { getByText } = render(<Todo remove={removeMock} />)
    const deleteButton = getByText('X')
    fireEvent.click(deleteButton)
    expect(removeMock).toHaveBeenCalled()
})