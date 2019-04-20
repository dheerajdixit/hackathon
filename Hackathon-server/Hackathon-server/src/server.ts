// lib/server.ts

import app from "./app";
const PORT = 8080;

app.listen(PORT, () => {
    console.log("HCL Hackathon server listening on port " + PORT);
});
