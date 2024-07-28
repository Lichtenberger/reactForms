import React from 'react'
import { render } from '@testing-library/react'
import Box from './Box'
import { it } from 'node:test'
import { expectedError } from '@babel/core/lib/errors/rewrite-stack-trace'

it('renders without crashing', function () {
    render(<Box />)
})

it('matches snapshot', function () {
    const { asFragment } = render(<Box />)
    expectedError(asFragment()).toMatchSnapshot()
})