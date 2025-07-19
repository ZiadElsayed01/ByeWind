import { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Input } from "../../ui/input";
import avatar from "../../../assets/avatar.png";
import { Card } from "../../ui/card";
import { Dot } from "lucide-react";
import TableSkeleton from "../../TableSkeleton";
import type { IUsers } from "@/types/Types";

export default function SessionTable() {
  const [data, setData] = useState<IUsers[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://scopey.onrender.com/api/session/sessions"
      );
      const sessions = res.data.sessions;
      const filteredData = sessions?.filter((e: IUsers) => e.clientName).slice(0, 5);
      setData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Filtered Results
  const filteredSessions = data.filter((item: IUsers) => {
    const search = searchTerm.toLowerCase();
    const name = item.nurseName?.toLowerCase() ?? "";
    const total = String(item.total ?? "").toLowerCase();

    const matchesSearch = name.includes(search) || total.includes(search);

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <Card className="mb-6 gap-3">
      <div className="flex justify-between items-center gap-0 flex-wrap">
        <Input
          placeholder="Search by nurse, total ...."
          className="w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select
          value={statusFilter}
          onValueChange={(value) => setStatusFilter(value)}
        >
          <SelectTrigger className="w-[180px]">
            Filter by status
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <h1 className="text-md font-semibold">
        Project Spendings
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Manager</TableHead>
            <TableHead className="w-1/4">Date</TableHead>
            <TableHead className="w-1/4">Total</TableHead>
            <TableHead className="w-1/4">Status</TableHead>
          </TableRow>
        </TableHeader>

        {data.length === 0 ? (
          <TableSkeleton />
        ) : filteredSessions.length === 0 ? (
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-6 text-gray-500"
              >
                No results found.
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {filteredSessions.map((item: IUsers) => (
              <TableRow key={item._id}>
                <TableCell className="flex items-center gap-2 py-3">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-7 h-7 rounded-full"
                  />
                  <p>{item.nurseName}</p>
                </TableCell>
                <TableCell className="py-3">
                  <p>
                    {item.date
                      ? new Date(item.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })
                      : "May 11, 2025"}
                  </p>
                </TableCell>
                <TableCell className="py-3">
                  <p>${item.total}</p>
                </TableCell>
                <TableCell
                  className={`py-3 ${item.status === "pending"
                    ? "text-[#9dc5ff]"
                    : item.status === "confirmed"
                      ? "text-[#56d585]"
                      : ""
                    }`}
                >
                  <p className="flex items-center">
                    <Dot />
                    {item.status}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </Card>
  );
}
