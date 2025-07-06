// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveToLocalStorage = (key: string, data: any) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLocalStorage = (key: string) => {
  if (typeof window === "undefined") return null;
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
