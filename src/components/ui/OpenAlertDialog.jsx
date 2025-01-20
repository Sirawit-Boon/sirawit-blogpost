import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  
  export function OpenAlertDialog({ isOpen, onClose, title, description }) {
    return (
      <AlertDialog open={isOpen} onOpenChange={onClose}>
        <AlertDialogContent className="md:max-w-md w-[350px] flex flex-col justify-center items-center">
        <AlertDialogCancel onClick={onClose} className="border-none text-gray-500 absolute -top-1 -right-1 bg-transparent hover:bg-transparent md:text-md text-sm">X</AlertDialogCancel>
          <AlertDialogTitle className="text-3xl">
            {title}
          </AlertDialogTitle>
          <AlertDialogAction onClick={onClose} className="max-w-40 rounded-full">Create account</AlertDialogAction>
          <AlertDialogDescription>
            {description}
            <span className="underline font-bold">
              <a href="/login">  log in</a> 
            </span>
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  