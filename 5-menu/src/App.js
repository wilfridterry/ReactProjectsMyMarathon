import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setMenuItems(items);
  }, []);

  const filteredMenuItems = filter
    ? items.filter((item) => item.category === filter)
    : menuItems;

  const categories = [...new Set(menuItems.map(item => item.category))];

  return (
    <main>
      <div className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filter={filter} handleClick={setFilter} categories={categories}/>
        <Menu items={filteredMenuItems} />
      </div>
    </main>
  );
}

export default App;
