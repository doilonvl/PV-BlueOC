import PostsList from './components/posts/PostList';
import PostForm from './components/posts/PostForm';

export default function App() {
  return (
    <div>
      <h1>Posts</h1>
      <PostForm />
      <PostsList />
    </div>
  );
}
