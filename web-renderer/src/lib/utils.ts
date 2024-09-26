import clsx from "clsx";

type ClassValue = string | number | boolean | undefined | null | ClassValue[] | { [key: string]: any };

import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
