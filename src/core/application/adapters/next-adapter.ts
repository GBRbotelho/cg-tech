import { NextApiRequest, NextApiResponse } from "next";

type Method = "GET" | "POST" | "PUT" | "DELETE";
type Controller = (params: any, body: any, token?: string) => Promise<any>;

export class NextjsAPIAdapter {
  private controllers: Map<Method, Controller> = new Map();
  create(...controllers: [Method, Controller][]) {
    controllers.forEach((controller) =>
      this.controllers.set(controller[0], controller[1])
    );
    return async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const controller = this.controllers.get(req.method as Method);
        if (!controller) {
          return res.status(405).end();
        }

        // Pegar o token do cabeçalho Authorization (Bearer Token)
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(" ")[1]; // Remover "Bearer "

        // Chamar o controlador passando também o token
        const response = await controller(req.query, req.body, token);

        if (response?.err) {
          return res.status(400).json({ err: response?.err });
        }
        if (!response) {
          return res.status(204).end();
        }
        return res.status(200).json(response);
      } catch (err: any) {
        return res.status(400).send({ err: err.message });
      }
    };
  }
}
