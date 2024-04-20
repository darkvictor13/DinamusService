import { IsClientContext } from "@/providers/isClientProvider";
import { useContext } from "react";

export default function useIsClient() {
  return useContext(IsClientContext);
}
