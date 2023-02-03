import { MouseEventHandler, ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  const handleClickOutside: MouseEventHandler = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-container" onClick={handleClickOutside}>
      <div className="modal">{children}</div>
    </div>
  );
};
