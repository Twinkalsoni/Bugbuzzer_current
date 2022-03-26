import React from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./Style.css";
const QandAmodal = () => {
  const paperStyle = { height: "67vh", width: 500, marginTop: "127px" };
  let tagInput;
  const [tags, setTags] = React.useState(["Tags", "Input"]);

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);

    // Call the defined function setTags which will replace tags with the new value.
    setTags(newTags);
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);
      tagInput.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <Typography
            variant="h5"
            sx={{
              pt: 6,
              fontWeight: "bolder",
              color: " rgb(216, 33, 72)",
              TextDecoder: "none",
              border: "none",
            }}
          >
            Ask A Question
          </Typography>

          <TextareaAutosize
            required
            aria-label="minimum height"
            fullwidth
            // style={{ width: "auto", marginTop: "60px" }}
            minRows={3}
            placeholder="Ask your Question here!"
            style={{
              width: 450,
              marginTop: "60px",
              // borderColor: " rgb(216, 33, 72)",
            }}
          />

          <div
            className="input-tag"
            style={{
              width: "26vw",
              //  borderColor: " rgb(216, 33, 72)"
            }}
          >
            <ul className="input-tag__tags">
              {tags.map((tag, i) => (
                <li key={tag}>
                  {tag}
                  <button
                    type="button"
                    onClick={() => {
                      removeTag(i);
                    }}
                  >
                    +
                  </button>
                </li>
              ))}
              <li className="input-tag__tags__input">
                <input
                  type="text"
                  onKeyDown={inputKeyDown}
                  ref={(c) => {
                    tagInput = c;
                  }}
                />
              </li>
            </ul>
          </div>

          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#D82148",
              textTransform: "capitalize",
              border: "2px solid #D82148",
              marginRight: "18px",
              fontWeight: "bold",
            }}
            sx={{ borderRadius: 2, mt: 5 }}
          >
            Submit
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default QandAmodal;

// import React from "react";

// export default function QandAmodal(){
//     return(
//         <div>
//             <h1>QandAmodal..........</h1>
//         </div>
//     )
// }
