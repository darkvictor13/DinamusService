"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots,
} from "@mui/x-data-grid";

export default function ServiceTable() {
  const days = [
    { id: 1, day: new Date(2024, 4, 3) },
    { id: 2, day: new Date(2024, 4, 10) },
    { id: 3, day: new Date(2024, 4, 17) },
    { id: 4, day: new Date(2024, 4, 24) },
  ];
  const roles = ["som", "midia", "violao", "teclado"];

  const usersPerRole = {
    som: [
      { id: 1, name: "Victor" },
      { id: 2, name: "Gabriel" },
      { id: 3, name: "Jonathan" },
    ],
    midia: [
      { id: 1, name: "Victor" },
      { id: 2, name: "Sabrina" },
    ],
    violao: [
      { id: 1, name: "Victor" },
      { id: 2, name: "Gabriel" },
      { id: 3, name: "Jonathan" },
    ],
    teclado: [
      { id: 1, name: "Victor" },
      { id: 2, name: "Sabrina" },
    ],
  };

  return (
    <Box>
      <DataGrid
        rows={days}
        columns={[
          {
            field: "day",
            headerName: "Dia",
            type: "date",
            editable: false,
          },
          ...roles.map(
            (role) =>
              ({
                field: role,
                headerName: role,
                width: 180,
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
