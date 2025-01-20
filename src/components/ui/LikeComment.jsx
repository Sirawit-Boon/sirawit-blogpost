import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Linkedin, Twitter, SmilePlus, Copy } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { useAlertDialog } from "@/hooks/useAlertDialog";
import { OpenAlertDialog } from "./OpenAlertDialog";

export function LikeComment({ likes }) {
  const { isOpen, openDialog, closeDialog } = useAlertDialog();

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center md:justify-between p-4 gap-6">
        <button
          className="bg-white rounded-[999px] border-[1px] border-black p-2 text-center w-full md:w-[127px] flex items-center justify-center gap-2"
          onClick={openDialog}
        >
          <SmilePlus size={20} />
          {likes}
        </button>
        <div className="flex items-center gap-2 ">
          <Toaster />
          <button
            className="bg-white rounded-[999px] border-[1px] border-black p-2 text-center w-[141px] flex items-center justify-center gap-2"
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(encodeURI(window.location.href));
              toast("Copied", {
                description: "The article has been copied to your clipboard",
                action: {
                  label: "X",
                  onClick: () => console.log("Undo"),
                },
              });
            }}
          >
            <Copy />
            Copy
          </button>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border-[1px] border-black bg-white"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/share.php?u=${encodeURI(
                    window.location.href
                  )}`,
                  "_blank"
                )
              }
            >
              <Facebook className="w-4 h-4" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border-[1px] border-black bg-white"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(
                    window.location.href
                  )}`,
                  "_blank"
                )
              }
            >
              <Linkedin className="w-4 h-4" />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border-[1px] border-black bg-white"
              onClick={() =>
                window.open(
                  `https://www.twitter.com/share?&url=${encodeURI(
                    window.location.href
                  )}`,
                  "_blank"
                )
              }
            >
              <Twitter className="w-4 h-4" />
              <span className="sr-only">Share on Twitter</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-2 p-4 md:p-0">
        <h2 className="text-lg font-semibold text-start text-fourth">Comment</h2>
        <div className="flex flex-col md:items-end gap-3">
          <Textarea
            placeholder="What are your thoughts?"
            className="min-h-[120px] resize-none pr-20"
          />
          <Button onClick={openDialog} className="rounded-full w-28 md:w-32 h-12 bg-black text-white">
            Send
          </Button>
        </div>
      </div>
      <OpenAlertDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title={`Create an account to continue`}
        description={`Already have an account?`}
      />
    </div>
  );
}
