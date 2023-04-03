import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foods }) {
  console.log(foods);

  return (
    <div>
      {foods.map((item) => (
        <MenuItem item={item} />
      ))}
    </div>
  );
}

export default MenuList;
