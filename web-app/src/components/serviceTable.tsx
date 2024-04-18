"use client";

import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// TODO: use api user
interface User {
  id: number;
  name: string;
  roles: string[];
}

export interface ServiceTableProps {
  days: Date[];
  serviceRoles: string[];
  users: User[];
}

export default function ServiceTable({
  days,
  serviceRoles,
  users,
}: ServiceTableProps) {
  const usersPerRole = serviceRoles.reduce((acc, role) => {
    acc[role] = users.filter((user) => user.roles.includes(role));
    return acc;
  }, {} as Record<string, User[]>);

  return (
    <Box>
      <DataGrid
        rows={days.map((day, index) => ({ id: index, day }))}
        columns={[
          {
            field: "day",
            headerName: "Dia",
            type: "date",
            editable: false,
          },
          ...serviceRoles.map(
            (role) =>
              ({
                field: role,
                headerName: role,
                editable: true,
                flex: 1,
                type: "singleSelect",
                valueOptions: usersPerRole[role].map((user) => user.name),
              } as GridColDef)
          ),
        ]}
        hideFooterSelectedRowCount
        editMode="cell"
        rowModesModel={{}}
        onRowModesModelChange={() => {}}
        onRowEditStop={() => {
          console.log("onRowEditStop");
        }}
      />
    </Box>
  );
}
