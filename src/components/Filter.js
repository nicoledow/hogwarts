import React from 'react';

const Filter = () => {
    return (
      <div>
          <h3>Filter Hogs:</h3>
          <select>
              <option value="greased">Greased</option>
              <option value="name">Sort By Name</option>
              <option value="weight">Sort By Weight</option>
          </select>
      </div>
    )
}

export default Filter;