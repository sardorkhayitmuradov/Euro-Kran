import React from 'react';
import "../mainDarkBlog/DarkBlog.css";
import darkBlog from '../../assets/images/dark-blog.png';

const DarkBlog = () => {
  return (
    <>
      <div className="dark__blog">
      <img src={darkBlog} alt="DarkBlog" />
      </div>
    </>
  )
}

export default DarkBlog