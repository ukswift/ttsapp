import { Stack, IconButton, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

export const AudioItem = ({ index, audioEntry, setAudioEntries }) => {
  return (
    <Stack
      direction="row"
      sx={{
        boxShadow: "0px 0px 5px 0px pink",
        borderRadius: "5px",
        mb: 2,
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
      <Stack>
        <Typography variant="body1">{audioEntry.text}</Typography>
        <Typography variant="subtitle2">
          {new Date(audioEntry.createdAt).toDateString()}
          {/* {new Date(audioEntry.createdAt).toLocaleDateString()} */}
        </Typography>
      </Stack>
    </Stack>
  );
};
