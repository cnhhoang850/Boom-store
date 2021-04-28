import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menuItems }) => {
  return (
    <div className="grid">
      {menuItems.map((menuItem) => {
        return (
          <MenuItem
            firstName={menuItem.firstName}
            lastName={menuItem.lastName}
            price={menuItem.price}
            index={menuItem.index}
          />
        );
      })}
    </div>
  );
};

export default Menu;
