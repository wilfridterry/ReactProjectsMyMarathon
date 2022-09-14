import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter value", "danger");
    } else if (name && editID) {
      const editedItem = list.filter((item) => item.id === editID)[0];
      editedItem.title = name;
      const newList = list.filter((item) => item.id !== editID);
      
      showAlert(true, "item edited", "success");
      setList([...newList, editedItem]);
      setEditID(null);
      setName("");
    } else {
      showAlert(true, "item added to the list", "success");

      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };

      setList([...list, newItem]);
      setName("");
    }
  };

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    showAlert(true, "Deleted a deal", "danger");
    setList(newList);
  };

  const chooseEditedItem = (id, title) => {
    setEditID(id);
    setName(title);
  }

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, type, msg });
  };

  const handleClearList = () => {
    showAlert(true, "empty items", "danger");
    setList([]);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bug</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {editID ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            items={list}
            handleDelete={handleDelete}
            chooseEditedItem={chooseEditedItem}
          />
          <button className="clear-btn" onClick={handleClearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
