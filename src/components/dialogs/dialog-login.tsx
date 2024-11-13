import React from "react";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { UserGateway } from "@/core/infra/gateways/user-gateway";
import { toast } from "sonner";
import { useLoading } from "@/contexts/LoadingContext";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export default function DialogLogin() {
  const [user, setUser] = React.useState({ email: "", password: "" });
  const loading = useLoading();
  const { saveToken } = useAuth();
  const { replace, pathname } = useRouter();

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loading.onLoading();
    const response = await UserGateway.authenticate(user);

    console.log(response);
    if (response.err) {
      toast.error(response.err);
    } else {
      toast.success("Acesso realizado com sucesso!");
      saveToken(response.data.token);
      replace("/dashboard");
    }
    loading.offLoading();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-400">Acesso</Button>
      </DialogTrigger>
      <DialogContent className="text-black">
        <DialogHeader>Login</DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              placeholder="seuemail@site.com"
              className="col-span-3"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Senha
            </Label>
            <Input
              id="password"
              placeholder="**********"
              type="password"
              className="col-span-3"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <DialogFooter>
            <Button
              className="bg-[#003f88] hover:bg-opacity-90 hover:bg-[#003f88]"
              type="submit"
              onClick={handleSubmit}
            >
              Acessar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
