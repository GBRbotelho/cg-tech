import { NextjsAPIAdapter } from "@/core/application/adapters/next-adapter";
import { UserController } from "@/core/infra/controllers/user-controller";

const adapter = new NextjsAPIAdapter();

export default adapter.create(
  ["POST", UserController.authenticate],
  ["GET", UserController.verify]
);
