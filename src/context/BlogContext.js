import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case 'get_blogs':
      return payload;
    case 'delete_blog':
      return state.filter((blog) => blog.id !== payload);
    case 'edit_blog':
      return state.map((blog) => (blog.id === payload.id ? payload : blog));
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_blogs', payload: response.data });
  };
};

const addBlog = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    callback ? callback() : null;
  };
};
const deleteBlog = (dispatch) => {
  return async (blogId) => {
    await jsonServer.delete('/blogposts/' + blogId);
    dispatch({ type: 'delete_blog', payload: blogId });
  };
};

const editBlog = (dispatch) => {
  return async (id, title, content, callback) => {
    const response = await jsonServer.patch(`/blogposts/${id}`, {
      title,
      content,
    });
    dispatch({ type: 'edit_blog', payload: response.data });
    callback ? callback() : null;
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, deleteBlog, editBlog, getBlogPosts },
  []
);
