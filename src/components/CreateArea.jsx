import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [getCondition, setCondition] = React.useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function changeConditional() {
    setCondition(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Título"
          style={{ display: getCondition === false ? "none" : "" }}
        />
        <textarea
          name="content"
          onChange={handleChange}
          onClick={changeConditional}
          value={note.content}
          placeholder="Descripción..."
          rows={getCondition === false ? "1" : "3"}
        />
        <Zoom in={getCondition}>
          <Fab
            onClick={submitNote}
            style={{ display: getCondition === false ? "none" : "" }}
          >
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
