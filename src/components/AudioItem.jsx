import { Stack, IconButton, Typography, Box } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

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
          // mx: 37,
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

        <Stack flexGrow={1} sx={{ ml: 2 }}>
          <Typography variant="body1">{audioEntry.text}</Typography>
          <Typography variant="subtitle2">
            {new Date(audioEntry.createdAt).toDateString()}
            {/* {new Date(audioEntry.createdAt).toLocaleDateString()} */}
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
