"use client";
import useIsClient from "@/hooks/useIsClient";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Ministry {
  id: string;
  name: string;
}

interface MinistrySelectionContextValue {
  selectedMinistry: Ministry | null;
  setSelectedMinistry: (ministry: Ministry) => void;
  ministries: Ministry[];
}

export const MinistrySelectionContext =
  createContext<MinistrySelectionContextValue | null>(null);

export const MinistrySelectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const isClient = useIsClient();
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(
    () => {
      if (!isClient) {
        return null;
      }
      const storedMinistry = localStorage.getItem("selectedMinistry");
      return storedMinistry ? JSON.parse(storedMinistry) : null;
    }
  );

  //TODO: fetch ministries from API
  const ministries: Ministry[] = [
    { id: "1", name: "Dinamus" },
    { id: "2", name: "Diaconia" },
  ];

  useEffect(() => {
    if (!isClient) {
      return;
    }
    if (selectedMinistry) {
      localStorage.setItem(
        "selectedMinistry",
        JSON.stringify(selectedMinistry)
      );
    } else {
      localStorage.removeItem("selectedMinistry");
    }
  }, [isClient, selectedMinistry]);

  return (
    <MinistrySelectionContext.Provider
      value={{ selectedMinistry, setSelectedMinistry, ministries }}
    >
      {children}
    </MinistrySelectionContext.Provider>
  );
};
