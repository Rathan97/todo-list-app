function ToDoItem(props) {
  return (
    <div className="item-card">
      <button className="check-btn" onClick={props.toggle} disabled={props.isEdited}>
        {props.isComplete ? (
          <i className="fa-regular fa-circle-check"></i>
        ) : (
          <i className="fa-regular fa-circle"></i>
        )}
      </button>

      {props.isEdited ? (
        <input
          type="text"
          className="input-box-edit"
          value={props.newText}
          onChange={(e) => props.setNewText(e.target.value)}
        />
      ) : (
        <h2
          className="item-text"
          style={{ textDecoration: props.isComplete ? "line-through" : "none" }}
        >
          {props.description}
        </h2>
      )}

      {props.isEdited ? (
        <button
          className="save-btn"
          disabled={props.isComplete}
          onClick={() => props.saveEdit(props.newText)}
        >
          <i className="fa-solid fa-check"></i>
        </button>
      ) : (
        <button
          className="edit-btn"
          disabled={props.isComplete}
          onClick={props.edit}
        >
          <i className="fa-solid fa-pen"></i>
        </button>
      )}

      <button className="del-btn" onClick={props.delete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default ToDoItem;
