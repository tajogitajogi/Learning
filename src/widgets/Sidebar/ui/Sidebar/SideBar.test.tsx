import { screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { rendetWithTranslation } from 'shared/lib/test/renderWithTranslation'

describe('Sidebar', () => {
    test('with 1 params', () => {
        rendetWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
