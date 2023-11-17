// pages/posts/[id].tsx
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';

interface Post {
  id: number;
  title: string;
}

interface PostPageProps {
  post?: Post; // Make post optional to handle the case where it might be undefined
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>ID: {post.id}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PostPageProps> = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const id = params?.id;

  if (!id || Array.isArray(id)) {
    // Handle the case where id is undefined or an array
    return {
      notFound: true,
    };
  }

  // Replace this with your logic to fetch a specific post by ID from an external API
  const response = await fetch(`http://localhost:3000/api/test`);
  const posts: Post[] = await response.json();
  const post = posts.find((p) => p.id === +id);

  if (!post) {
    // Handle the case where the post with the specified id is not found
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
