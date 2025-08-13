import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postSlice';
import type { AppDispatch } from '../../app/store';

export default function PostForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !body) return;
    dispatch(addPost({ title, body, userId: 1 }));
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <br />
      <textarea
        placeholder="Body"
        value={body}
        onChange={e => setBody(e.target.value)}
      /> <br />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
