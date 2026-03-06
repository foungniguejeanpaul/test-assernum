type ClassValue = string | number | boolean | null | undefined | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const walk = (value: ClassValue): void => {
    if (!value && value !== 0) return;

    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }

    if (typeof value === "string" || typeof value === "number") {
      if (String(value).trim()) {
        classes.push(String(value).trim());
      }
      return;
    }

    if (typeof value === "boolean") return;
  };

  inputs.forEach(walk);

  return classes.join(" ");
}

