import { Download } from "lucide-react";
import { Button } from "./ui/button";
import type { IFile } from "@/types/Types";
import { FileInputButton } from "./ui/input";

interface FilesProps {
  files: IFile[];
  getFileIcon: (type: string) => React.ReactNode;
}


export default function Files({ files, getFileIcon }: FilesProps) {
  return (
    <>
      <div className="space-y-4">
        {files.map((file, i) => (
          <div key={file.id} className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className={`rounded-full flex items-center justify-center w-10 h-10 ${((i + 1) % 2 === 0 ? "bg-[#edeefc]" : "bg-[#e6f1fd]")}`}>
                {getFileIcon(file.type)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {file.size} / {file.time} / {file.uploader}
                </p>
              </div>
            </div>
            {file.downloadable && (
              <Button variant="secondary" size="icon" aria-label="Download file">
                <Download className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500 text-sm">
        <p>Drop files here or upload files</p>
        <FileInputButton type="file" className="px-3 file:disabled:none" />
      </div>
    </>
  )
}
