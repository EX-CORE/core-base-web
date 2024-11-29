import { useState, useImperativeHandle, forwardRef } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog";

type DefaultAlertDialogProps = {
  title: string;
  content: string;
  cancelEvent?: () => void;
  confirmEvent: () => void;
  confirmText?: string;
  cancelText?: string;
};

// Forward ref to expose `openDialog` method to parent components
const DefaultAlert = forwardRef((props: DefaultAlertDialogProps, ref) => {
  const {
    title,
    content,
    cancelEvent,
    confirmEvent,
    confirmText = "확인",
    cancelText = "취소",
  } = props;
  const [open, setOpen] = useState(false);

  // Expose `openDialog` method to the parent
  useImperativeHandle(ref, () => ({
    openDialog: () => setOpen(true),
  }));

  const handleCancel = () => {
    cancelEvent?.();
    setOpen(false);
  };

  const handleConfirm = () => {
    confirmEvent();
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});

DefaultAlert.displayName = "DefaultAlert";

export default DefaultAlert;
