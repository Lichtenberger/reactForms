import React from 'react'
import { render } from '@testing-library/react'
import NewBoxForm from './NewBoxForm'
import { it } from 'node:test'
import { expectedError } from '@babel/core/lib/errors/rewrite-stack-trace'

it('renders without crashing', function () {
    render(<NewBoxForm />)
})

it('matches snapshot', function () {
    const { asFragment } = render(<NewBoxForm />)
    expectedError(asFragment()).toMatchSnapshot()
})