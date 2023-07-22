import type { Preview } from '@storybook/react';
import { RouterDecorator } from './decorators/RouterDecorator';
import { StyleDecorator } from './decorators/StyleDecorator';
const preview: Preview = {
    parameters: {
        
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        background: { disable: true },
        themes: {
            default: 'dark',
            clearable: false,
            list: [
                { name: 'dark', class: ['app', 'dark'], color: '#3b5998' },
                { name: 'light', class: ['app', 'light'], color: '#f8ccf5' }
            ]
        }
       
    },
    decorators: [RouterDecorator, StyleDecorator]
};

export default preview;
