import { Card, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"
import PDF from "../../../assets/PDF.png"
import JPG from "../../../assets/FileJpg.png"
import XLS from "../../../assets/FileXls.png"
import type { IFile } from "@/types/Types"
import Files from "@/components/Files"


export default function LatestFiles() {
  const files: IFile[] = [
    {
      id: 1,
      name: "Project tech requirements.pdf",
      size: "5.6 MB",
      time: "Just now",
      uploader: "Karina Clark",
      type: "pdf",
      downloadable: true,
    },
    {
      id: 2,
      name: "Dashboard-design.jpg",
      size: "2.3 MB",
      time: "59 minutes ago",
      uploader: "Marcus Blake",
      type: "jpg",
      downloadable: false,
    },
    {
      id: 3,
      name: "Completed Project Stylings.pdf",
      size: "4.6 MB",
      time: "12 hours ago",
      uploader: "Terry Barry",
      type: "pdf",
      downloadable: false,
    },
    {
      id: 4,
      name: "Create Project Wireframes.xls",
      size: "1.2 MB",
      time: "Today, 11:59 AM",
      uploader: "Roth Bloom",
      type: "xls",
      downloadable: false,
    },
    {
      id: 5,
      name: "Project tech requirements.pdf",
      size: "2.8 MB",
      time: "Yesterday",
      uploader: "Natali Craig",
      type: "pdf",
      downloadable: false,
    },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <img src={PDF} width={18} height={18} alt="PDF" />
      case "jpg":
        return <img src={JPG} width={18} height={18} alt="JPG" />
      case "xls":
        return <img src={XLS} width={18} height={18} alt="PDF" />
      default:
        return <FileText className="w-5 h-5 text-purple-600" />
    }
  }

  return (
    <Card>
      <CardTitle>Latest Files</CardTitle>
      <Files files={files} getFileIcon={getFileIcon} />
    </Card>
  )
}
