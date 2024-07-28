import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { it } from 'node:test'
import { expectedError } from '@babel/core/lib/errors/rewrite-stack-trace'

it('renders without crashing', function () {
    render(<App />)
})

it('matches snapshot', function () {
    const { asFragment } = render(<App />)
    expect(asFragment).toMatchSnapshot()
})