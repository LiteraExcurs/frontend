import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { ButtonType } from '../types';
import { Location } from "@/utils/types";

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

export const FilterButton: Story = {
  args: {
    buttonType: ButtonType.Filter,
    label: 'Ближайшие прогулки',
  },
};

export const FilterButtonForMoscow: Story = {
  args: {
    buttonType: ButtonType.Filter,
    label: 'По Москве',
    location: Location.Capital,
  },
};

export const FilterButtonForRegions: Story = {
  args: {
    buttonType: ButtonType.Filter,
    label: 'Из Москве',
    location: Location.Region,
  },
};

export const CardWithMoscowPlace: Story = {
  args: {
    buttonType: ButtonType.Card,
    location: Location.Capital,
    label: 'Архитектура Варварки',
  },
};

export const CardWithRegionPlace: Story = {
  args: {
    buttonType: ButtonType.Card,
    location: Location.Region,
    label: 'Калуга',
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
    location: Location.Capital,
  },
};

export const Subscribe: Story = {
  args: {
    buttonType: ButtonType.Subscribe,
    label: 'Подписаться',
  },
};

export const Send: Story = {
  args: {
    buttonType: ButtonType.Send,
    label: 'Отправить',
  },
};

export const RequestForMoscow: Story = {
  args: {
    buttonType: ButtonType.Request,
    label: 'Оставить заявку',
    location: Location.Capital,
  },
};

export const RequestForRegions: Story = {
  args: {
    buttonType: ButtonType.Request,
    label: 'Оставить заявку',
    location: Location.Region,
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
