import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <div className="item-container">
      {props.data.map((item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          description={item.text}
          delete={() => props.delete(item.id)}
          toggle={() => props.toggle(item.id)}
          isComplete={item.isComplete}
          isEdited={item.isEdited}
          edit={() => props.edit(item.id)}
          saveEdit={(textValue) => props.saveEdit(item.id, textValue)}
          newText={props.newText}
          setNewText={props.setNewText}
        />
      ))}
    </div>
  );
}

export default ToDoList;
