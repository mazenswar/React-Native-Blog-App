import React, { useContext } from 'react';
import BlogForm from '../components/BlogForm';
import { Context as BlogContext } from '../context/BlogContext';

export default function CreateScreen({ navigation }) {
  const { addBlog } = useContext(BlogContext);
  return (
    <BlogForm
      onSubmit={(title, content) =>
        addBlog(title, content, () => navigation.navigate('Index'))
      }
    />
  );
}
