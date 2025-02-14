import React from "react";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export default function DialogUser() {
  //   const handleChange = (e: any) => {
  //     const { id, value } = e.target;
  //     setUser({ ...user, [id]: value });
  //   };

  //   const handleSubmit = async (e: any) => {
  //     e.preventDefault();
  //     loading.onLoading();
  //     const response = await UserGateway.authenticate(user);

  //     console.log(response);
  //     if (response.err) {
  //       toast.error(response.err);
  //     } else {
  //       toast.success("Acesso realizado com sucesso!");
  //       saveToken(response.data.token);
  //       replace("/dashboard");
  //     }
  //     loading.offLoading();
  //   };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-600/90 ">
          Criar usuário
        </Button>
      </DialogTrigger>
      <DialogContent className="text-black">
        <DialogHeader>Novo usuário</DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={() => {}}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Nome do usuário"
              className="col-span-3"
              autoComplete="off"
              //   value={user.email}
              //   onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Email</Label>
            <Input
              id="emaill"
              placeholder="seuemail@site.com"
              className="col-span-3"
              autoComplete="off"
              //   value={user.email}
              //   onChange={handleChange}
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
              autoComplete="off"
              className="col-span-3"
              //   value={user.password}
              //   onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Nivel
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecione um nivel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Funcionário</SelectItem>
                <SelectItem value="2">Administrador</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button
              className="bg-green-600 hover:bg-opacity-90 hover:bg-green-600/90"
              type="submit"
              //   onClick={handleSubmit}
            >
              Criar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
