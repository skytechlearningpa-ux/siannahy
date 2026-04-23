import * as React from "react";

function Badge({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"span"> & {
  variant?: "default" | "secondary" | "destructive" | "outline";
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit";
  
  const variants = {
    default: "border-transparent bg-blue-600 text-white",
    secondary: "border-transparent bg-gray-200 text-gray-900",
    destructive: "border-transparent bg-red-600 text-white",
    outline: "text-gray-900 border-gray-300",
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className || ""}`}
      {...props}
    />
  );
}

export { Badge };
