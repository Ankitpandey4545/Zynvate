"use client";

import { Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type CustomSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: readonly (string | { value: string; label: string })[];
  placeholder: string;
  name?: string | undefined;
  required?: boolean | undefined;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string | undefined;
  className?: string;
};

export function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  name,
  required,
  className,
  ...aria
}: CustomSelectProps) {
  return (
    <Select
      {...(name ? { name } : {})}
      {...(required ? { required } : {})}
      value={value}
      onValueChange={onChange}
    >
      <SelectTrigger
        aria-invalid={aria["aria-invalid"]}
        aria-describedby={aria["aria-describedby"]}
        className={cn(
          "w-full border-0 bg-transparent shadow-none focus:ring-0 focus:ring-offset-0",
          !value && "text-muted-foreground",
          className,
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="rounded-xl border-border bg-background/95 p-1 shadow-xl backdrop-blur-xl">
        {options.map((option) => {
          const item = typeof option === "string" ? { value: option, label: option } : option;
          return (
            <SelectItem
              key={item.value}
              value={item.value}
              className="rounded-lg py-2.5 pl-3 pr-9 text-sm focus:bg-primary/10 focus:text-foreground"
            >
              <span>{item.label}</span>
              <Check className="absolute right-3 size-4 opacity-0 group-data-[state=checked]:opacity-100" />
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
