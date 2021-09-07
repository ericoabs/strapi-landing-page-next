import Home from '../templates/Home';

import { GetStaticProps } from 'next';
import { loadPages } from '../api/load-pages';

export type IndexProps = {
  data: [];
};

export default function Index({ data = null }: IndexProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let data = null;

  try {
    data = await loadPages('landing-page');
  } catch (error) {
    //
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
