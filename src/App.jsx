import axios from "axios";
import "./App.css";
import { useRef, useState } from "react";
import { Container } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { AudioList } from "./components/AudioList";
export class AudioEntry {
  constructor(text, audio, createdAt) {
    this.text = text;
    this.audio = audio;
    this.createdAt = createdAt;
  }
}

const apiKey = import.meta.env.VITE_API_KEY;

async function fetchAudio(t, setAudioEntries, setLoading) {
  console.log(t);
  if (t.length < 2) {
    alert("text too short");
    return;
  }
  setLoading(true);
  const xmlBodyStr = `<speak version='1.0' xml:lang='en-US'><voice xml:lang='en-US' xml:gender='Female'
  name='en-US-JennyNeural'>
  ${t}
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
      // responseType: "stream",
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
    new AudioEntry(t, ab, Date.now()),
  ]);
  setLoading(false);
}

function App() {
  const tref = useRef();
  const [audioEntries, setAudioEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Container>
        <input
          type="text"
          ref={tref}
          // inputRe={tref}
          // id="outlined-basic"
          // label="Enter some text"
          // variant="outlined"
        />
        <br />
        <br />
        <LoadingButton
          onClick={() =>
            fetchAudio(tref.current.value, setAudioEntries, setLoading)
          }
          loading={loading}
          loadingIndicator="Loading..."
          variant="contained"
          size="large"
        >
          <span> Speak </span>
        </LoadingButton>
        <br />
        <br />

        {/* <Button
          sx={{ mt: 3 }}
          variant="contained"
          onClick={() =>
            fetchAudio(tref.current.value, setAudioEntries, setLoading)
          }
        >
          Speak
          {loading ? "loading" : ""}
        </Button> */}
      </Container>
      <Container sx={{ mt: 3 }}>
        <AudioList
          audioEntries={audioEntries}
          setAudioEntries={setAudioEntries}
        />
      </Container>
    </>
  );
}

export default App;
