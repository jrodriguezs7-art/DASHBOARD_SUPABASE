const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL) {
  console.error("Falta VITE_SUPABASE_URL");
}

if (!SUPABASE_KEY) {
  console.error("Falta VITE_SUPABASE_ANON_KEY");
}

export const getSensorData = async () => {
  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      throw new Error("Variables de Supabase no configuradas");
    }

    const url =
      `${SUPABASE_URL}/rest/v1/datos_sensor` +
      `?select=*&order=created_at.desc&limit=10`;

    console.log("Consultando:", url);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Supabase REST error:",
        response.status,
        errorText
      );

      throw new Error(
        `Supabase respondió con HTTP ${response.status}`
      );
    }

    return await response.json();

  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
};