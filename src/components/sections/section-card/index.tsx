import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <Card className={`shadow-sm border-border/50 ${className}`}>
      <CardContent className="p-8 sm:p-12">{children}</CardContent>
    </Card>
  );
}
