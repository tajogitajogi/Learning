import { ClassNames } from './ClassNames'

describe('classnames', () => {
    test('with 1 params', () => {
        expect(ClassNames('someClass')).toBe('someClass')
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(ClassNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods', () => {
        const expected = 'someClass hovered'
        expect(ClassNames('someClass', { hovered: true, selectable: false })).toBe(expected)
    })

    test('with mods undefined', () => {
        const expected = 'someClass hovered'
        expect(ClassNames('someClass', { hovered: true, selectable: undefined })).toBe(expected)
    })

    test('with all', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(ClassNames('someClass', { hovered: true, selectable: undefined }, ['class1', 'class2'])).toBe(expected)
    })
})
