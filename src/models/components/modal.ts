import { ReactNode } from "react";

interface IModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export type { IModalProps };
