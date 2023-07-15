import axios from "axios";
async function apiFetch(endpoint, payload) {
  try {
    var resp = await axios.post("http://localhost:3001" + endpoint, payload, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    const data = await resp.data;
    return data;
  } catch (error) {
    console.log("API ERROR");
  }
}
export {
  apiFetch as a
};
