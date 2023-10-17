import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { ButtonType } from '../types';

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
    buttonType: ButtonType.Filter,
    label: 'По Москве',
  },
};

export const FilterWithSign: Story = {
  args: {
    buttonType: ButtonType.Filter,
    label: 'По Москве',
    signPic: '/images/from-moscow.svg',
  },
};

export const Card: Story = {
  args: {
    buttonType: ButtonType.Card,
    label: 'Архитектура Варварки',
  },
};

export const CardWithLongLabel: Story = {
  args: {
    buttonType: ButtonType.Card,
    label: 'Архитектура Варварки Архитектура Варварки',
  },
};

export const CardWithText: Story = {
  args: {
    buttonType: ButtonType.Card,
    label: 'Пушкин в городе',
    text: 'Тверской бульвар и окрестности',
  },
};

export const City: Story = {
  args: {
    buttonType: ButtonType.City,
    label: 'Калуга',
  },
};

export const Subscribe: Story = {
  args: {
    buttonType: ButtonType.Subscribe,
    label: 'Подписаться',
  },
};

export const RequestBrown: Story = {
  args: {
    buttonType: ButtonType.Request,
    label: 'Оставить заявку',
  },
};

export const RequestGreen: Story = {
  args: {
    buttonType: ButtonType.Request,
    label: 'Оставить заявку',
    backgroundColor: 'pinegreen',
  },
};

export const DisabledButton: Story = {
  args: {
    buttonType: ButtonType.Card,
    label: 'Пушкин в городе',
    text: 'Тверской бульвар и окрестности',
    disabled: true,
  },
};
