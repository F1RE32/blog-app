import React, { useState, useEffect } from 'react';

const DisplayBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('./data/blog.json');

        if (!response.ok) {
          throw new Error(`Fetch failed with status ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>Recent Blogs</h2>
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayBlogs;
