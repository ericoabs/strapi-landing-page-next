import P from 'prop-types';
import Home from '../templates/Home';
import { Loading } from '../templates/Loading';
import { loadPages } from '../api/load-pages';
import { useRouter } from 'next/router';

export default function Page({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <Home data={data} />;
}

export const getStaticPaths = async () => {
  // const paths = (await loadPages()).map((page) => {
  //   return {
  //     params: {
  //       slug: page.slug,
  //     },
  //   };
  // });

  return {
    paths: [{ params: { slug: 'second-page' } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  let data = null;

  try {
    data = await loadPages(context.params.slug);
  } catch (error) {
    data = null;
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
    revalidate: 600,
  };
};

Page.propTypes = {
  data: P.array,
};
