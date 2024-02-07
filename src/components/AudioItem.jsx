import { Stack, IconButton, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DeleteIcon from "@mui/icons-material/Delete";

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
        }}
      >
        <DeleteIcon sx={{ color: "red", fontSize: "40px" }} />
      </IconButton>
      <Typography sx={{ borlder: "2px solid blue" }}>
        {audioEntry.text}
      </Typography>
      <Typography sx={{ borlder: "2px solid blue" }}>
        {audioEntry.createdAt}
      </Typography>
    </Stack>
  );
};
