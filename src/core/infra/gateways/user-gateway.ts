import { User } from "@/core/domain/entities/user";
import axios from "axios";
import { toast } from "sonner";
export class UserGateway {
  //   static async verify(data: { token: string }) {
  //     try {
  //       return await axios.post("/api/v1/users/verify", data);
  //     } catch (err: any) {
  //       const error = err?.response?.data.err || err?.data;
  //       toast.error(error);
  //       return err?.response?.data;
  //     }
  //   }

  static async authenticate(user: { email: string; password: string }) {
    try {
      return await axios.post("/api/user/login", user);
    } catch (err: any) {
      const error = err?.response?.data;
      return error;
    }
  }

  static async search(input: string) {
    try {
      return await axios.post("/api/user/search", { input });
    } catch (err: any) {
      const error = err?.response?.data;
      return error;
    }
  }

  static async create(user: User.Props) {
    try {
      return await axios.post("/api/user", user);
    } catch (err: any) {
      const error = err?.response?.data || err?.data;
      toast.error(error);
      return error;
    }
  }

  static async update(user: any) {
    try {
      return await axios.put("/api/user", user);
    } catch (err: any) {
      const error = err?.response?.data || err?.data;
      toast.error(error);
      return error;
    }
  }

  static async delete(user: any) {
    try {
      return await axios.delete("/api/user/" + user);
    } catch (err: any) {
      const error = err?.response?.data || err?.data;
      toast.error(error);
      return error;
    }
  }

  static async password(id: string, password: string) {
    try {
      return await axios.put("/api/user/" + id, password);
    } catch (err: any) {
      const error = err?.response?.data || err?.data;
      toast.error(error);
      return error;
    }
  }

  static async verify(token: string) {
    try {
      return await axios.get("/api/user/login", {
        headers: { Authorization: token ? `Bearer ${token}` : "" },
      });
    } catch (err: any) {
      const error = err?.response?.data || err?.data;
      toast.error(error);
      return error;
    }
  }
}
