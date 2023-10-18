import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '..';

const meta = {
    title: 'UI/InputField',
    component: InputField,
    parameters: {
      layout: 'centered',
      backgrounds: {
        default: 'header',
        values: [
          { name: 'header', value: '#E8E1D7' },
          { name: 'footer', value: '#6A898B' },
        ],
      },
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof InputField>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const SearchField: Story = {
    args: {
        type: 'search'
    }
  }

  export const SubscribeField: Story = {
    args: {
        type: 'subscribe'
    },
    parameters: {
        backgrounds: { default: 'footer' },
      },
  }