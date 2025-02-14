import React, { useEffect } from "react";
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

type Props = {
  reload: () => void;
  open: boolean;
  data: any;
  setData: (data: any) => void;
  setOpen: (open: boolean) => void;
};

export default function DialogUser(props: Props) {
  const loading = useLoading();
  const [userData, setUserData] = React.useState({
    _id: "",
    name: "",
    email: "",
    password: "",
    nivel: "",
    createdAt: new Date(),
  });

  useEffect(() => {
    if (props.data) {
      console.log("Passou");
      setUserData({
        _id: props.data._id,
        name: props.data.name,
        email: props.data.email,
        password: props.data.password,
        nivel: `${props.data.nivel}`,
        createdAt: new Date(props.data.createdAt),
      });
    } else {
      setUserData({
        _id: "",
        name: "",
        email: "",
        password: "",
        nivel: "",
        createdAt: new Date(),
      });
    }

    if (!props.open) {
      props.setData(null);
    }
  }, [props.open]);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loading.onLoading();
    if (props.data) {
      const data = {
        _id: userData._id,
        name: userData.name,
        email: userData.email,
        nivel: Number(userData.nivel),
      };
      const response = await UserGateway.update(data);
      props.reload();
      toast.success("Usuário atuzalido com sucesso!");
    } else {
      const data = {
        ...userData,
        nivel: Number(userData.nivel),
      };
      const response = await UserGateway.create(data);
      props.reload();
      toast.success("Usuário criado com sucesso!");
    }
    loading.offLoading();
    props.setOpen(false);
  };

  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-600/90 ">
          Criar usuário
        </Button>
      </DialogTrigger>
      <DialogContent className="text-black">
        <DialogHeader>
          {props.data ? "Editar usuário" : "Criar usuário"}
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Nome do usuário"
              className="col-span-3"
              autoComplete="off"
              value={userData.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Email</Label>
            <Input
              id="email"
              placeholder="seuemail@site.com"
              className="col-span-3"
              autoComplete="off"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          {!props.data && (
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
                value={userData.password}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Nivel
            </Label>
            <Select
              value={userData.nivel}
              onValueChange={(value) => {
                setUserData({ ...userData, ["nivel"]: value });
              }}
            >
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
              onClick={handleSubmit}
            >
              {props.data ? "Editar" : "Criar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
