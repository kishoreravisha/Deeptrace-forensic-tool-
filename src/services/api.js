import { useAuth } from "../context/AuthContext";

export function useApi() {
  const { apiKey } = useAuth();

  async function postForm(url, formData) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey
      },
      body: formData
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Request failed");
    }

    return res.json();
  }

  async function get(url) {
    const res = await fetch(url, {
      headers: {
        "X-API-Key": apiKey
      }
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Request failed");
    }

    return res.json();
  }

  return { postForm, get };
}
