import { Meta, Story } from '@storybook/react/types-6-0';
import { TextComponent, TextComponentProps } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
    omnis et impedit totam voluptatem pariatur dolorum sapiente. Ipsam sint,
     nulla facilis in nemo voluptatem, distinctio nam nesciunt perspiciatis
      dicta beatae!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
