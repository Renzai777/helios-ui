import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'danger', 'ghost', 'success'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary Button' }
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary Button' }
};

export const Variants: Story = {
    render: () => (
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
    )
  };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
};