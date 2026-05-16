import { Router } from "express";
import { TablesContoller } from "@/controllers/tables.controller";

const tablesRoutes = Router();
const tablesControlle = new TablesContoller();

tablesRoutes.get("/", tablesControlle.index);

export { tablesRoutes };