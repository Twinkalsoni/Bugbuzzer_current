import React from "react";
import { Box, Grid, Paper, TextField, Typography, Button } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

// import Button from "@mui/material/Button";
// import "./ProductDetail.css";

export default function Participatebtn() {
  const paperStyle = { height: "74vh", width: 500, marginTop: "127px" };
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
        {/* <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        > */}
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
          <TextField
            fullWidth
            label="Bug Title"
            id="fullWidth"
            // color="secondary"
            style={{
              width: "29vw",
              marginTop: "60px",
              //   border:"1px solid rgb(216, 33, 72)",
              //   borderRadius:"5px",
              //   borderColor: " rgb(216, 33, 72) !important",
            }}
          />
          {/* <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
          <ValidationTextField
            label="CSS validation style"
            required
            variant="outlined"
            defaultValue="Success"
            id="validation-outlined-input"
          /> */}

          <div
            className="input-tag"
            style={{
              width: "25vw",
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

          <TextareaAutosize
            fullWidth
            required
            aria-label="minimum height"
            // style={{ width: "auto", marginTop: "60px" }}
            minRows={3}
            placeholder="Description"
            style={{
              width: "29vw",
              marginTop: "60px",
              //   borderColor: " rgb(216, 33, 72)",
            }}
          />

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
        {/* </Box> */}
      </Grid>
    </>
  );
}
