import ServiceTable from "@/components/serviceTable";

/*
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
  */

export default function Home() {
  return (
    <ServiceTable
      days={[
        new Date(2024, 4, 3),
        new Date(2024, 4, 10),
        new Date(2024, 4, 17),
        new Date(2024, 4, 24),
      ]}
      serviceRoles={[
        "som",
        "midia",
        "violao",
        "teclado",
        "back vocal",
        "ministro",
      ]}
      users={[
        { id: 1, name: "Victor", roles: ["som", "violao", "teclado"] },
        { id: 2, name: "Gabriel", roles: ["som", "violao", "ministro"] },
        { id: 3, name: "Jonathan", roles: ["som"] },
        { id: 4, name: "Sabrina", roles: ["midia", "teclado", "back vocal"] },
      ]}
    />
  );
}
