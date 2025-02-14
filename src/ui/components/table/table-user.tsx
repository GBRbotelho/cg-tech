import React, { useEffect } from "react";
import { DataTable } from "./common/table";
import { Button } from "@/components/ui/button";
import { InputSearch } from "@/components/input-search";
import { UserGateway } from "@/core/infra/gateways/user-gateway";
import { ActionsTable } from "./common/action-table";
import { cn } from "@/lib/utils";
import DialogUser from "@/components/dialogs/dialog-user";

function TableUser() {
  const [search, setSearch] = React.useState<string>("");
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [editData, setEditData] = React.useState<any>(null);
  const [selecteds, setSelecteds] = React.useState<number[]>([]);
  const [users, setUsers] = React.useState<any[]>([]);

  const fetchUsers = async () => {
    const response = await UserGateway.search(search);
    setUsers(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log(selecteds);
  }, [selecteds]);

  return (
    <section className="w-full">
      <div className="flex gap-3 my-2">
        <InputSearch
          value={search}
          onChange={(e) => setSearch(e)}
          placeholder="Buscar por usuário"
          onSearch={() => fetchUsers()}
        />
        <DialogUser
          open={openModal}
          data={editData}
          setData={setEditData}
          setOpen={setOpenModal}
          reload={fetchUsers}
        />
      </div>
      <ActionsTable
        hidden={selecteds.length <= 0}
        selectedsCount={selecteds.length}
        buttons={[
          {
            text: `Excluir usuário${selecteds.length > 1 ? "s" : ""}`,
            className:
              "border-red-500 bg-transparent text-red-500 hover:text-red-500",
            withConfirmation: true,
            action() {},
          },
          {
            action() {
              setEditData(users.find((user) => user._id === selecteds[0]));
              setOpenModal(true);
            },
            text: "Editar usuário",
            className: cn(
              `border-emerald-500 bg-transparent text-emerald-500 hover:text-emerald-500`,
              !(selecteds.length === 1) ? "hidden" : ""
            ),
          },
        ]}
      />
      <DataTable
        onSelectedRows={(rows) => {
          setSelecteds(rows.map((row) => row._id));
        }}
        withCheckbox
        columns={[
          {
            enableSorting: true,
            accessorKey: "name",
            className: "!w-[150px]",
            header: "Nome",
          },
          {
            accessorKey: "email",
            header: "Email",
            className: "!w-[150px]",
          },
          {
            accessorKey: "nivel",
            header: "Nivel de acesso",
            className: "!w-[150px]",
          },
        ]}
        data={users}
      />
    </section>
  );
}

export default TableUser;
