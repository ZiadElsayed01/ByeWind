import type { ReactNode } from "react";

interface InfoBlockProps {
  title: string;
  content: ReactNode;
  className: string;
}

export default function InfoBlock({ title, content, className }: InfoBlockProps) {
  return (
    <div className={`lg:border-r-2 lg:border-b-0 border-b-2 py-3 lg:p-0 border-gray-300 ${className}`}>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <div className="font-semibold text-lg">
        {content}
      </div>
    </div>
  );
}
