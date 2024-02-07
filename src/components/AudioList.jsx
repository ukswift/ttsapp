import { Stack, IconButton, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { AudioItem } from "./AudioItem";

export const AudioList = ({ audioEntries, setAudioEntries }) => {
  return (
    <ol style={{ listStyleType: "none" }} reversed>
      {audioEntries.map((audioEntry, index) => {
        return (
          <li>
            <AudioItem
              index={index}
              audioEntry={audioEntry}
              setAudioEntries={setAudioEntries}
            />
          </li>
        );
      })}
    </ol>
  );
};
