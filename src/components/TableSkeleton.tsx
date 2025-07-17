import { TableBody, TableRow, TableCell } from "./ui/table";

export default function TableSkeleton() {
  return (
    <TableBody>
      {Array.from({ length: 5 }).map((_, i) => (
        <TableRow key={i}>
          <TableCell>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gray-300 animate-pulse" />
              <div className="w-24 h-4 bg-gray-300 rounded animate-pulse" />
            </div>
          </TableCell>
          <TableCell>
            <div className="w-20 h-4 bg-gray-300 rounded animate-pulse" />
          </TableCell>
          <TableCell>
            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse" />
          </TableCell>
          <TableCell>
            <div className="w-20 h-4 bg-gray-300 rounded animate-pulse" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
