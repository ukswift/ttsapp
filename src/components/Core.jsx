import React from "react";
import axios from "axios";
import { useState } from "react";
import { Box, Container, Grid, TextField } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingButton from "@mui/lab/LoadingButton";

import { AudioList } from "./AudioList";
const apiKey = import.meta.env.VITE_API_KEY;

export class AudioEntry {
  constructor(text, audio, createdAt) {
    this.text = text;
    this.audio = audio;
    this.createdAt = createdAt;
  }
}
async function fetchAudio(text, setAudioEntries, setLoading) {
  console.log(text);
  if (text.length < 2) {
    alert("text too short");
    return;
  }
  setLoading(true);
  const xmlBodyStr = `<speak version='1.0' xml:lang='hi-IN'><voice xml:lang='hi-IN' xml:gender='Female'
  name='hi-IN-SwaraNeural'>
  ${text}
  </voice></speak>`;
  const res = await axios.post(
    "https://eastus.tts.speech.microsoft.com/cognitiveservices/v1",
    xmlBodyStr,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": `${apiKey}`,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
      },
      responseType: "blob",
    }
  );
  const bl = res.data;
  const url = URL.createObjectURL(bl);

  const ab = new Audio(url);

  ab.play();
  const data = res.data;
  console.log(data);
  setAudioEntries((audioEntries) => [
    ...audioEntries,
    new AudioEntry(text, ab, Date.now()),
  ]);
  setLoading(false);
}

export const Core = () => {
  const { isLoading } = useAuth0();
  const [text, setText] = useState("");
  const [audioEntries, setAudioEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  if (isLoading) return <Box sx={{ mb: 4 }}>Loading...</Box>;
  return (
    <div>
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchAudio(text, setAudioEntries, setLoading);
          }}
        >
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <TextField
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                label="Enter some text"
                variant="outlined"
                sx={{
                  mt: 8,
                  minWidth: "60vw",
                }}
                InputProps={{
                  sx: {
                    px: 3,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    fontSize: "3rem",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: "1.5rem",
                  },
                }}
              />
            </Grid>
            <Grid item>
              <LoadingButton
                type="submit"
                loading={loading}
                loadingIndicator="Loading..."
                variant="contained"
                size="large"
                sx={{ display: "block", mt: 4 }}
              >
                <span> Speak </span>
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Container sx={{ mt: 3 }}>
        <AudioList
          audioEntries={audioEntries}
          setAudioEntries={setAudioEntries}
        />
      </Container>
    </div>
  );
};
