import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "stickyMenu",
  });

  const paths = res.items.map((item) => {
    return { params: { menu: item.fields.slugMenu } };
  });

  return { paths, fallback: true };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "stickyMenu",
    "fields.slugMenu": params.menu,
  });

  const res2 = await client.getEntries({ content_type: "stickyMenu" });
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { slugMenu: items[0], stickyMenu: res2.items }, // get the first item
    revalidate: 1,
  };
}

export default function menu({ slugMenu, ...props }) {
  return <div>{slugMenu?.fields.title}</div>;
}
