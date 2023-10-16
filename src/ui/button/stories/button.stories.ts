import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filter: Story = {
  args: {
    buttonType: 'filter',
    label: 'По Москве',
  },
};

export const FilterWithSign: Story = {
  args: {
    buttonType: 'filter',
    label: 'По Москве',
    signPic: '/images/from-moscow.svg',
  },
};

export const Card: Story = {
  args: {
    buttonType: 'card',
    label: 'Архитектура Варварки',
  },
};

export const CardWithLongLabel: Story = {
  args: {
    buttonType: 'card',
    label: 'Архитектура Варварки Архитектура Варварки',
  },
};

export const CardWithText: Story = {
  args: {
    buttonType: 'card',
    label: 'Пушкин в городе',
    text: 'Тверской бульвар и окрестности',
  },
};

export const City: Story = {
  args: {
    buttonType: 'city',
    label: 'Калуга',
  },
};

export const Subscribe: Story = {
  args: {
    buttonType: 'subscribe',
    label: 'Подписаться',
  },
};

export const RequestBrown: Story = {
  args: {
    buttonType: 'request',
    label: 'Оставить заявку',
  },
};

export const RequestGreen: Story = {
  args: {
    buttonType: 'request',
    label: 'Оставить заявку',
    backgroundColor: 'pinegreen',
  },
};
