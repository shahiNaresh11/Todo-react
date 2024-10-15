import { useState } from "react";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {

  const [finished, setFinished] = useState(isFinished);
  const [isEditting, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);


  return (
    <div>
      <input type="checkbox" checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);



        }} />
      {/* {todoData} */}
      {(isEditting) ? <input type="text" value={editText}
        onChange={e => setEditText(e.target.value)} /> : <span>{todoData}</span>}

      <button onClick={() => {
        setIsEditing(!isEditting);
        onEdit(editText);
      }}>  {(!isEditting) ? 'edit' : 'save'}</button>
      <button onClick={onDelete}> delete</button>
    </div>
  );
}

export default Todo;
