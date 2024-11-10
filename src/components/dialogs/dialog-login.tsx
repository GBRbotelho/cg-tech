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

export default function DialogLogin() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#003f88] hover:bg-opacity-90 hover:bg-[#003f88]">
          Acesso
        </Button>
      </DialogTrigger>
      <DialogContent className="text-black">
        <DialogHeader>Login</DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="name"
              placeholder="seuemail@site.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Senha
            </Label>
            <Input
              id="username"
              placeholder="**********"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg-[#003f88] hover:bg-opacity-90 hover:bg-[#003f88]"
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
