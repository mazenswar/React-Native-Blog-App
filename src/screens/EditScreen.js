import React, { useContext, useState } from 'react';
import BlogForm from '../components/BlogForm';
import { Context as BlogContext } from '../context/BlogContext';

export default function EditScreen({ navigation }) {
  const id = navigation.getParam('id');
  const { state, editBlog } = useContext(BlogContext);
  const blog = state.find((b) => b.id === id);

  return (
    <BlogForm
      initialValues={blog}
      onSubmit={(title, content) =>
        editBlog(id, title, content, () => navigation.pop())
      }
    />
  );
}
