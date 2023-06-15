import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('Button', () => {
    test('with 1 params', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})

describe('Button with thme Clear', () => {
    test('with 1 params', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})
