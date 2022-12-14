import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, handleDelete, chooseEditedItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item, index) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit onClick={() => chooseEditedItem(id, title)} />
              </button>
              <div
                type="button"
                className="delete-btn"
                onClick={() => handleDelete(id)}
              >
                <FaTrash />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
