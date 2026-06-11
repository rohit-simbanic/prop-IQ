import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { Button } from './Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalInteractiveWrapper = (
  args: Omit<React.ComponentProps<typeof Modal>, 'isOpen' | 'onClose'>
) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal Dialog
      </Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ModalInteractiveWrapper {...args} />,
  args: {
    title: 'Luxury Estate Tour Inquiry',
    size: 'md',
    children: (
      <div className="space-y-4">
        <p className="text-sm text-slate-500">
          This is a modal content container. You can load forms, descriptions, or confirmation
          screens here.
        </p>
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button variant="primary" size="sm">
            Confirm Tour
          </Button>
        </div>
      </div>
    ),
  },
};
