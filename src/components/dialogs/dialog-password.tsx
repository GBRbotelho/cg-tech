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
  id: string;
};

export default function DialogPassword(props: Props) {
  const loading = useLoading();
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState({
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setPassword({ ...password, [id]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loading.onLoading();
    if (!password.password) {
      toast.error("Preencha a senha!");
      loading.offLoading();
      return;
    }

    if (password.password !== password.passwordConfirm) {
      toast.error("As senhas devem ser iguais!");
      loading.offLoading();
      return;
    }

    const response = await UserGateway.password(props.id, password);
    if (response.err) {
      toast.error(response.err);
    } else {
      toast.success("Senha redefinida com sucesso!");
      props.reload();
    }
    loading.offLoading();
    setPassword({ password: "", passwordConfirm: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-yellow-600 hover:bg-opacity-90 hover:bg-yellow-600/90"
          type="button"
        >
          Redefinir Senha
        </Button>
      </DialogTrigger>
      <DialogContent className="text-black">
        <DialogHeader>Redefinir Senha</DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
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
              value={password.password}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Confirmação de Senha
            </Label>
            <Input
              id="passwordConfirm"
              placeholder="**********"
              type="password"
              autoComplete="off"
              className="col-span-3"
              value={password.passwordConfirm}
              onChange={handleChange}
            />
          </div>
          <DialogFooter>
            <Button
              className="bg-yellow-600 hover:bg-opacity-90 hover:bg-yellow-600/90"
              type="submit"
              onClick={handleSubmit}
            >
              Redefinir
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
