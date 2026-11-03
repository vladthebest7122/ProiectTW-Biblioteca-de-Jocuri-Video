// Toate cererile HTTP stau aici; componentele nu apelează fetch direct.
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchJocuri() {
  const res = await fetch(`${API_URL}/jocuri`);
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  return res.json();
}