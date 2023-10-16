export const CONFIG = {
  BASE_URL: import.meta.env.BASE_URL,
  ENABLE_LEGACY: import.meta.env.VITE_ENABLE_LEGACY === 'true',
  LOCAL_STORAGE_KEY_LEGACY: import.meta.env.VITE_LOCAL_STORAGE_KEY,
};
