import React, { FC } from "react";
import { ModalContainer, ModalContents, ModalHeader } from "./model.styles";
import { IconX } from "@tabler/icons-react";
import { IModalProps } from "../../models/components/modal";

const Modal: FC<IModalProps> = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return <></>;

  return (
    <ModalContainer>
      <ModalContents>
        <ModalHeader>
          <p>{title}</p>
          <IconX onClick={onClose} color={"#000"} />
        </ModalHeader>
        <main>{children}</main>
      </ModalContents>
    </ModalContainer>
  );
};

export default Modal;
