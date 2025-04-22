import express from "express";
import archiver from "archiver";
import axios from "axios";

const router = express.Router();
// router.use(express.json());
router.post("/api/download", async (req, res) => {
  const { songs } = req.body;
  const archive = archiver("zip", { zlib: { level: 9 } });

  res.attachment("playlist.zip");
  archive.pipe(res);

  await Promise.all(
    songs?.map(async (song) => {
      try {
        const response = await axios.get(song.audio, {
          responseType: "arraybuffer",
        });
        const safeTitle = (song.title || "track").replace(
          /[/\\?%*:|"<>]/g,
          "-"
        );
        archive.append(response.data, { name: `${safeTitle}.mp3` });
        console.log("response is here??",response)
      } catch (error) {
        console.error(`failed to fetch songs:${song.title}`, error.message);
      }
    })
  );

  await archive.finalize();
  console.log("recieved songs", songs);
});

export default router;
