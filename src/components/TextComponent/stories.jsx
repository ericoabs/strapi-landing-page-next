import { TextComponent } from '.';

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
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
