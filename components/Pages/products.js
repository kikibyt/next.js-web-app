import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import { fetchAllProducts } from '../utils/api'; // Assuming you have a function to fetch all products

const Products = ({ allProducts }) => {
  return (
    <div>
      <Head>
        <title>Wedding Haven</title>
        {/* Add any other meta tags you need */}
      </Head>
      <h1>All Wedding Products</h1>
      <div>
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch all products from the API or any data source
  const allProducts = await fetchAllProducts();

  return {
    props: {
      allProducts,
    },
  };
}

export default Products;