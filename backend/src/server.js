import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
    console.log("Backend escuchando en el puerto", PORT);
});