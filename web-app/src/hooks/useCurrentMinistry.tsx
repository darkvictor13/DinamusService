"use client";
import { MinistrySelectionContext } from "@/providers/ministrySelectionProvider";
import { useContext } from "react";

export default function useCurrentMinistry() {
  const context = useContext(MinistrySelectionContext);
  if (!context) {
    throw new Error(
      "useCurrentMinistry must be used within a MinistrySelectionProvider"
    );
  }
  return context;
}
