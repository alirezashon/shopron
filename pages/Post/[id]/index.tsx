// pages/posts/[id].tsx
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdAddCircle } from 'react-icons/md';
import { FaMinus } from 'react-icons/fa';
import { Add, Remove } from '@/Components/Basket/Actions';
import styles from './index.module.css';

interface PostProps {
  post: {
    _id: string;
    title: string;
    src: string;
    price: number;
    category: string;
    quantity: number;
    description: string;
    inBasket?: number;
  };
}

const Post: NextPage<PostProps> = ({ post }) => {
  const [inBasket, setInBasket] = useState<number>(post.inBasket || 0);

  const inceriment = (id: string) => {
    Add(id);
    setInBasket((prev) => prev + 1);
  };

  const deceroment = (id: string) => {
    Remove(id);
    setInBasket((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className={styles.postBox} key={post._id}>
      <div className={styles.innerPostBox}>
        <h6 className={styles.title}>{post.title}</h6>
        <Image
          src={post.src}
          alt={post.description}
          width={1111}
          height={1111}
          className={styles.image}
         />
        {inBasket && inBasket > 0 ? (
          <div className={styles.productDetails}>
            <div className={styles.details}>
              <div className={styles.priceBox}>
                <p>{post.price}</p>
              </div>
              <div className={styles.controlBox}>
                <MdAddCircle
                  className={styles.inceriment}
                  size={'3vh'}
                  onClick={() => inceriment(post._id)}
                />
                <p className={styles.quantity}>{inBasket}</p>
                <FaMinus
                  className={styles.deceriment}
                  size={'3vh'}
                  onClick={() => deceroment(post._id)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.priceBasketBox}>
            <div className={styles.innerPriceBasketBox}>
              <div className={styles.priceBasket}>
                <div
                  className={styles.icon}
                  onClick={() => inceriment(post._id)}>
                  <AiOutlineShoppingCart size={'3vh'} color={'rgb(255,255,255)'} />
                </div>
                <p className={styles.price}>{post.price}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PostProps> = async ({ params }) => {
  // const postId = params?.id as string;
  const res = await fetch(`http://localhost:3000/api/data/Post/Client/page`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      category: '@L$L%O%F#D%M^',
      title:'EBiramoza', // Updated to use the post title as ID
      authType: 'G&E!T*P^R$O#D$U^C@T*S',
    }),
  });
  const postData = await res.json();

  return {
    props: {
      post: postData.products, // Assuming your API response has a "products" field
    },
  };
};

export default Post;
