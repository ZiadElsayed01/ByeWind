import type { ReactNode } from "react";

interface InfoBlockProps {
  title: string;
  content: ReactNode;
  className: string;
}

export default function InfoBlock({ title, content, className }: InfoBlockProps) {
  return (
    <div className={`border-r-2 border-gray-300 ${className}`}>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <div className="font-semibold text-lg">
        {content}
      </div>
    </div>
  );
}
