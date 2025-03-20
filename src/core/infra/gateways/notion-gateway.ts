import axios from "axios";
import { toast } from "sonner";
export class NotionGateway {
  static async getCourses() {
    try {
      return await axios.get("/api/courses");
    } catch (err: any) {
      const error = err?.response?.data;
      return error;
    }
  }
}
