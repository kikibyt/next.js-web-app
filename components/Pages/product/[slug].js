import Head from 'next/head';
import { useRouter } from 'next/router';
import { fetchProductBySlug } from '../../utils/api'; // Assuming you have a function to fetch product details

const ProductDetail = ({ product }) => {
  const router = useRouter();

  // Check if data is not fetched yet
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Fashion App - {product.title}</title>
        {/* Add any other meta tags you need */}
      </Head>
      <h1>{product.title}</h1>
      <image src={product.imageUrl} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch all product slugs from the API or any data source
  const productSlugs = await fetchAllProductSlugs();

  // Generate paths based on product slugs
  const paths = productSlugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true, // Enable fallback to enable incremental static regeneration
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Fetch product details based on the slug from the API or any data source
  const product = await fetchProductBySlug(slug);

  return {
    props: {
      product,
    },
    revalidate: 1, // Enable incremental static regeneration
  };
}

export default ProductDetail;