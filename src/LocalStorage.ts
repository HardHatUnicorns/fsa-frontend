export const writeToLocalStorage = (key: string, data: unknown): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    return false;
  }
};

export const readFromLocalStorage = (key: string): unknown => {
  try {
    const value: string | null = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : undefined;
  } catch (error) {
    return undefined;
  }
};

export const removeFromLocalStorage = (key: string): boolean => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};
