import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import BoxList from './BoxList'
import { it } from 'node:test'
import { expectedError } from '@babel/core/lib/errors/rewrite-stack-trace'

function addBox(boxList, height = '3', width = '3', color = 'red') {
    const heightInput = boxlist.getByLabelText('Height')
    const widthInput = boxlist.getByLabelText('Width')
    const backgroundInput = boxlist.getByLabelText('Background Color')
    fireEvent.change(backgroundInput, { target: { value: color } })
    fireEvent.change(widthInput, { target: { value: width } })
    fireEvent.change(heightInput, { target: { value: height } })
    const button = boxList.getByText('Add new box')
    fireEvent.click(button)
}

it('renders without crashing', function () {
    render(<BoxList />)
})

it('matches snapshot', function () {
    const { asFragment } = render(<BoxList />)
    expectedError(asFragment()).toMatchSnapshot()
})

it('can add a box', function () {
    const boxList = render(<BoxList />)

expect(boxList.queryByText('Remove box')).not.toBeInTheDocument()

addBox(boxList)

const removeButton = boxList.getByText('Remove box')
expect(removeButton).toBeInTheDocument()
expect(removeButton.previousSibling).toHaveStyle(`
    width: 3em;
    height: 3em;
    background-color: red;
    `)
expect(boxList.getAllByDisplayValue('')).toHaveLength(3)
})

it('can remove a box', function () {
    const boxList = render(<BoxList />)
    addBox(boxList)

    const removeButton = boxList.getByText('Remove box')
    fireEvent.click(removeButton)
    expect(removeButton).not.toBeInTheDocument()
})