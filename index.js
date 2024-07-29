import express from 'express';
import jediRoutes from './routes/jediRoutes.js';
import swaggerUI from "swagger-ui-express";
import specs from "./swagger/swagger.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use('/', jediRoutes);


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
