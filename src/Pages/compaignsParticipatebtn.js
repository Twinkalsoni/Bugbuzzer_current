import React, { useState } from "react";
import {
  Stack,
  TextField,
  FormControl,
  Box,
  Container,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Dropdown, InputGroup, DropdownButton } from "react-bootstrap";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import { useFormik, Form, FormikProvider } from "formik";
import { border, style } from "@mui/system";

export default function Participatebtn(props) {
  const [tags, setTags] = React.useState(["Tags"]);
  const [bugTitle, SetbugTitle] = useState("");
  // const [bugTag, SetbugTag] = useState([]);
  const [bugDesc, SetbugDesc] = useState("");
  const [loading, setLoading] = useState(false);
  let tagInput;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, val) => {
    setValue(val);
    console.log(val);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      tags: "",
      description: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const formData = {
        title: values.title,
        tags: tags,
        description: values.description,
      };
      console.log(formData, "data");

      resetForm();
    },
  });

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
    <Container>
      <Typography
        variant="h5"
        sx={{
          pt: 16,
          fontWeight: "bolder",
          color: " rgb(216, 33, 72)",
          TextDecoder: "none",
          border: "none",
          textAlign: "center",
        }}
      >
        Participate in campaign
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          justifyContent: "center",
          marginLeft: "12vw",
          marginRight: "12vw",
          marginTop: "110px",
        }}
      >
        <Stack spacing={3}>
          <TextField
            onChange={(e) => SetbugTitle(e.target.value)}
            required
            fullWidth
            label="Bug Title"
            name="title"
            id="to"
            type="text"
            {...formik.getFieldProps("title")}
          />{" "}
          <div
            className="input-tag"
            style={{
              width: "auto",
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
                    {/* {console.log(tags,'tagg')} */}+
                  </button>
                </li>
              ))}
              <li className="input-tag__tags__input">
                <input
                  // required
                  // onChange={(e)=>bugTagschange(e)}
                  onChange={(e) => setTags(e.target.value)}
                  name="tags"
                  type="text"
                  onKeyDown={inputKeyDown}
                  ref={(c) => {
                    tagInput = c;
                  }}
                  {...formik.getFieldProps("tags")}
                />
                ;{/* })} */}
              </li>
            </ul>
          </div>
          <TextareaAutosize
            onChange={(e) => SetbugDesc(e.target.value)}
            fullWidth
            required
            name="description"
            aria-label="minimum height"
            minRows={5}
            placeholder="Description"
            style={{
              width: "auto",
              borderColor: "rgb(196 196 196)",
              borderRadius: "5px",
              marginTop: "60px",
            }}
            {...formik.getFieldProps("description")}
          ></TextareaAutosize>
          {/* ----------------------------------------------- */}
        </Stack>
        <DialogActions>
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              type="submit"
              size="midium"
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
          </Grid>
        </DialogActions>
      </form>
    </Container>
  );
}

// import React, { useState } from "react";
// import {
//   Form,
//   Box,
//   Grid,
//   Paper,
//   TextField,
//   Typography,
//   Button,
// } from "@mui/material";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
// import { useMoralis } from "react-moralis";
// import { toast } from "react-toastify";
// import { useFormik } from "formik";

// // import Button from "@mui/material/Button";
// // import "./ProductDetail.css";

// export default function Participatebtn() {
//   const { Moralis, user } = useMoralis();

//   const [bugTitle, SetbugTitle] = useState("");
//   const [bugTag, SetbugTag] = useState("");
//   const [bugDesc, SetbugDesc] = useState("");
//   const [loading, setLoading] = useState(false);

//   const paperStyle = { height: "74vh", width: 500, marginTop: "127px" };
//   let tagInput;
//   const [tags, setTags] = React.useState(["Tags"]);

//   const removeTag = (i) => {
//     const newTags = [...tags];
//     newTags.splice(i, 1);

//     // Call the defined function setTags which will replace tags with the new value.
//     setTags(newTags);
//   };

//   const inputKeyDown = (e) => {
//     const val = e.target.value;
//     if (e.key === "Enter" && val) {
//       if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
//         return;
//       }
//       setTags([...tags, val]);
//       tagInput.value = null;
//     } else if (e.key === "Backspace" && !val) {
//       removeTag(tags.length - 1);
//     }
//   };

//   // function SubmitParticipate(e) {
//   //   console.log(bugTitle, bugTag, bugDesc);
//   //   e.preventDefault();
//   // }

//   const formik = useFormik({
//     initialValues: {
//       title: "",
//       tags: "",
//       description: "",
//     },
//   });

//   // -----------------------Moralis Object------------------------------------->
//   const CompaignsParticipate = Moralis.Object.extend("CompaignsParticipate");
//   const participateCompaigns = new CompaignsParticipate();
//   // console.log(ParticipateCompaigns,'ParticipateCompaigns===>');

//   const SubmitParticipate = async (formData) => {
//     formData.preventDefault();

//     try {
//       setLoading(true);
//       // ParticipateCompaigns.set("user", user.attributes.username);
//       participateCompaigns.set("title", formData.title);
//       // console.log(formData, "dataaa");
//       participateCompaigns.set("tags", formData.tags);
//       participateCompaigns.set("desc", formData.desc);

//       await participateCompaigns.save();
//       setLoading(false);
//       // toast.success(`Successfully ${type}ed!`);
//       // props.setIsUpdated(!props.isUpdated);
//       // props.close();
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <Grid align="center">
//           <Paper elevation={10} style={paperStyle}>
//             <Typography
//               variant="h5"
//               sx={{
//                 pt: 6,
//                 fontWeight: "bolder",
//                 color: " rgb(216, 33, 72)",
//                 TextDecoder: "none",
//                 border: "none",
//               }}
//             >
//               Participate in campaign
//             </Typography>
//             <TextField
//               onChange={(e) => SetbugTitle(e.target.value)}
//               fullWidth
//               label="Bug Title"
//               id="fullWidth"
//               required
//               {...formik.getFieldProps("title")}
//               style={{
//                 width: "29vw",
//                 marginTop: "60px",
//               }}
//             />
{
  /* <div
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
        onChange={(e) => SetbugTag(e.target.value)}
        type="text"
        onKeyDown={inputKeyDown}
        ref={(c) => {
          tagInput = c;
        }}
      />
    </li>
  </ul>
</div>; */
}

//             <TextareaAutosize
//               onChange={(e) => SetbugDesc(e.target.value)}
//               fullWidth
//               required
//               aria-label="minimum height"
//               // style={{ width: "auto", marginTop: "60px" }}
//               minRows={3}
//               placeholder="Description"
//               style={{
//                 width: "29vw",
//                 marginTop: "60px",
//                 //   borderColor: " rgb(216, 33, 72)",
//               }}
//             >
//               {bugDesc}
//             </TextareaAutosize>

//             <Button
//               variant="contained"
//               type="submit"
//               size="small"
//               style={{
//                 backgroundColor: "#D82148",
//                 textTransform: "capitalize",
//                 border: "2px solid #D82148",
//                 marginRight: "18px",
//                 fontWeight: "bold",
//               }}
//               sx={{ borderRadius: 2, mt: 5 }}
//             >
//               Submit
//             </Button>
//           </Paper>
//           {/* </Box> */}
//         </Grid>
//       </form>
//     </div>
//   );
// }
