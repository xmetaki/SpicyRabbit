import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { MtButton } from '../index'
describe('MtButton', () => {
    test('base', () => {
        const dom = mount(MtButton)
        expect(dom.classes()).toContain('mt_button')
    })

    test('props/type', () => {
        const dom = mount(MtButton, {
            props: {
                type: 'danger'
            }
        })
        expect(dom.classes()).toContain('mt_button__danger')
    })

    test('props/size', () => {
        const dom = mount(MtButton, {
            props: {
                size: "large"
            }
        })
        expect(dom.classes()).toContain('mt_button__large')
    })
} )