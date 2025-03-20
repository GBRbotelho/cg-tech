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

  static async getCourseId(id: string) {
    try {
      return await axios.get("/api/courses/" + id);
    } catch (err: any) {
      const error = err?.response?.data;
      return error;
    }
  }

  static async getCourseIdLessons(id: string) {
    try {
      return await axios.get("/api/courses/" + id + "/lessons");
    } catch (err: any) {
      const error = err?.response?.data;
      return error;
    }
  }
}
