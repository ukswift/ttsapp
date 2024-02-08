import { Stack, IconButton, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import Share from "./Share";

export const AudioItem = ({ index, audioEntry, setAudioEntries }) => {
  return (
    <Stack direction="row" justifyContent="center">
      <Stack
        direction="row"
        sx={{
          boxShadow: "0px 0px 5px 0px pink",
          borderRadius: "5px",
          mb: 2,
          maxWidth: "70vw",
          minWidth: "40vw",
        }}
        alignItems="center"
      >
        <IconButton
          onClick={() => {
            audioEntry.audio.play();
          }}
          sx={{ mr: 0 }}
        >
          <PlayCircleIcon sx={{ color: "green", fontSize: "40px" }} />
        </IconButton>
        <Share text={encodeURIComponent(audioEntry.text)} />
        <Stack flexGrow={1} sx={{ ml: 1 }}>
          <Typography
            variant="body1"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "200px", // Adjust the maximum width as needed
            }}
          >
            {audioEntry.text}
          </Typography>
          <Typography
            variant="subtitle2"
            color="gray"
            sx={{ fontSize: "0.7rem" }}
          >
            {new Date(audioEntry.createdAt).toDateString()}
          </Typography>
        </Stack>
        <IconButton
          size="large"
          sx={{ ml: -1 }}
          onClick={() => {
            setAudioEntries((entries) => [
              ...entries.slice(0, index),
              ...entries.slice(index + 1),
            ]);
            toast.success("Item deleted successfully");
          }}
        >
          <DeleteIcon sx={{ color: "red", fontSize: "40px" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};
