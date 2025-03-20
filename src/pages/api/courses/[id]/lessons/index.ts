import { NextjsAPIAdapter } from "@/core/application/adapters/next-adapter";
import { NotionController } from "@/core/infra/controllers/notion-controller";

const adapter = new NextjsAPIAdapter();

export default adapter.create(["GET", NotionController.getLessonsByCourse]);
