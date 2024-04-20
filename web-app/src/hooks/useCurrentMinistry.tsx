"use client";
import { MinistrySelectionContext } from "@/providers/ministrySelectionProvider";
import { useContext } from "react";

export const useCurrentMinistry = () => {
  const context = useContext(MinistrySelectionContext);
  if (!context) {
    throw new Error(
      "useCurrentMinistry must be used within a MinistrySelectionProvider"
    );
  }
  return context;
};
