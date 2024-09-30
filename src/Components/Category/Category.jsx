import React, { useState } from 'react';
import './Category.css';
import category from '../../assets/category/category';
import arrow_icon from '../../assets/category/arrow_icon.svg';

const Category = () => {
  // State to keep track of the hovered category
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className='category'>
      <div className="cat-title">
        <h1>Categories</h1>
      </div>

      <div className="cat-container">
        {category.map((categoryItem, index) => {
          return (
            <div key={index} className="cat-item">
              {/* Image */}
              <img
                src={categoryItem.w_img}
                alt=''
                onMouseEnter={() => setHoveredCategory(categoryItem.w_name)}  // Set the hovered category on hover
                onMouseLeave={() => setHoveredCategory(null)}  // Clear the hovered category when leaving the hover
              />
              {/* Conditionally display the category name when hovered */}
              {hoveredCategory === categoryItem.w_name && (
                <h1 className="cat-name">{categoryItem.w_name}</h1>
              )}
            </div>
          );
        })}
      </div>

        <div className="cat-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>

    </div>
  );
};

export default Category;
