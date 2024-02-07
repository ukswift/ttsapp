import { Stack, IconButton, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { AudioItem } from "./AudioItem";

export const AudioList = ({ audioEntries, setAudioEntries }) => {
  return (
    <Stack style={{ listStyleType: "none" }} direction={"column-reverse"}>
      {audioEntries.map((audioEntry, index) => {
        return (
          <AudioItem
            key={`audio-entry-${audioEntry.createdAt}`}
            index={index}
            audioEntry={audioEntry}
            setAudioEntries={setAudioEntries}
          />
        );
      })}
    </Stack>
  );
};
