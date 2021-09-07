import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
          laboriosam molestiae, libero facilis autem dignissimos numquam!
          Recusandae similique autem aspernatur consequatur, totam omnis. Rerum
          Rerum recusandae corporis mollitia nulla aliquid!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
