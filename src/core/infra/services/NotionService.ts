import { Client } from "@notionhq/client";
import config from "@/core/infra/config";

export type File = {
  name: string;
  file: { url: string };
};

export class NotionService {
  private static notion = new Client({
    auth: config.get("notion-key"),
  });

  static async request<T = any>(databaseId: string) {
    const response = await this.notion.databases.query({
      database_id: databaseId,
    });

    const results = response.results;

    return results;
  }

  static async requestId(id: string) {
    if (id) {
      const response: any = await this.notion.pages.retrieve({ page_id: id });

      return response;
    }
  }

  static async insertData(databaseId: string, properties: any) {
    const response = await this.notion.pages.create({
      parent: {
        type: "database_id",
        database_id: databaseId,
      },
      properties: properties,
    });

    return response;
  }
}
