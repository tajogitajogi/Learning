import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = { component: Button, title: 'Shared' };
export default meta;

type Story = StoryObj<typeof Button>;

export const button: Story = { args: { children: 'TEXT', theme: ThemeButton.CLEAR } };
