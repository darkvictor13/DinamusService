"use client";
import { useCurrentMinistry } from "@/hooks/useCurrentMinistry";

export default function Services() {
  const { selectedMinistry } = useCurrentMinistry();
  if (!selectedMinistry) {
    return <div>Selecione um ministério</div>;
  }
  return <div>Escalas do ministério {selectedMinistry.name}</div>;
}
