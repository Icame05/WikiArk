import express from "express";
import cors from "cors";
import criaturasRoutes from "./routes/criaturas.routes.js";
import objetosRoutes from "./routes/objetos.routes.js";
import guiasRoutes from "./routes/guias.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/criaturas", criaturasRoutes);
app.use("/api/objetos", objetosRoutes);
app.use("/api/guias", guiasRoutes);

export default app;