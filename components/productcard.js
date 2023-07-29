import Link from 'next/link';
import styles from '../styles/ProductCard.module.css';
import { ImageOptimizerCache } from 'next/dist/server/image-optimizer';
import { ImageResponse } from 'next/dist/compiled/@vercel/og';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <Link href={`/product/${product.slug}`}>
        <a>
        <image src={product.imageurl} alt={product.title} className={styles.productImage} />
         
          <h3 className={styles.productTitle}>{product.title}</h3>
          <p className={styles.productPrice}>${product.price}</p>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;