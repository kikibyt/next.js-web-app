import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import { fetchFeaturedProducts } from '../utils/api'; // Assuming you have a function to fetch featured products

const Home = ({ featuredProducts }) => {
  return (
    <div>
      <Head>
        <title>Fashion App - Home</title>
        {/* Add any other meta tags you need */}
      </Head>
      <h1>Welcome to Fashion App</h1>
      <div>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch featured products from the API or any data source
  const featuredProducts = await fetchFeaturedProducts();

  return {
    props: {
      featuredProducts,
    },
  };
}

export default Home;