import { Router } from "express";
import { TablesSessionsContoller } from "@/controllers/table-sessions-controller";

const tablesSessionsRoutes = Router();
const tablesSessionsContoller = new TablesSessionsContoller();

tablesSessionsRoutes.get("/", tablesSessionsContoller.index);
tablesSessionsRoutes.post("/", tablesSessionsContoller.create);
tablesSessionsRoutes.patch("/:id", tablesSessionsContoller.update);

export { tablesSessionsRoutes };