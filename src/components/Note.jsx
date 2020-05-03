import React from "react";
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1 className="title">{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <RemoveCircleOutlineRoundedIcon />
      </button>
    </div>
  );
}

export default Note;
