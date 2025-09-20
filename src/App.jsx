import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./style.css";

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const [newText, setNewText] = useState("");

  // Add new todo
  function HandleSearch() {
    if (!text.trim()) return; // ignore empty input
    const obj = {
      id: id,
      text: text,
      isComplete: false,
      isEdited: false
    };
    setData([...data, obj]);
    setId(id + 1);
    setText("");
  }

  // Delete
  function HandleDelete(idx) {
    setData(data.filter((item) => item.id !== idx));
  }

  // Toggle complete
  function HandleComplete(idx) {
    setData(
      data.map((item) =>
        item.id === idx ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  }

  // Start editing
  function HandleEdit(idx) {
    setData(
      data.map((item) =>
        item.id === idx ? { ...item, isEdited: true } : item
      )
    );

    const item = data.find((item) => item.id === idx);
    if (item) setNewText(item.text); // initialize input
  }

  // Save edited text
  function HandleSaveEdit(idx, textValue) {
    setData(
      data.map((item) =>
        item.id === idx ? { ...item, text: textValue, isEdited: false } : item
      )
    );
    setNewText(""); // clear temporary text
  }

  return (
    <div className="app-container">
      <Header />
      <div className="app-todo">
        <input
          type="text"
          value={text}
          className="input-box"
          placeholder="Enter a task to add."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-btn" onClick={HandleSearch}>
          ADD
        </button>
      </div>

      <ToDoList
        data={data}
        delete={HandleDelete}
        toggle={HandleComplete}
        edit={HandleEdit}
        saveEdit={HandleSaveEdit}
        newText={newText}
        setNewText={setNewText}
      />
    </div>
  );
}

export default App;
