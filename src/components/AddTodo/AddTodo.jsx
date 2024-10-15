import { useState } from "react";

function AddTodo({ updateList }) {
  const [inputText, setInputText] = useState('');
  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="add your next to do "
        onChange={e => setInputText(e.target.value)}



      />
      <button onClick={() => {
        updateList(inputText);
        setInputText('');
      }}>Add</button>
    </div>
  );
}
export default AddTodo;
