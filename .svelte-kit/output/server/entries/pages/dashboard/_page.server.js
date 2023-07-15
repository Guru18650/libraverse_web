import { r as redirect } from "../../../chunks/index.js";
import { a as apiFetch } from "../../../chunks/api.js";
async function load({ cookies }) {
  const jwt = cookies.get("jwt");
  if (jwt === void 0) {
    throw redirect(307, "/login");
  } else {
    const payload = { token: jwt };
    var resp = await apiFetch("/auth/verify", payload);
    if (resp.authenticated == "false") {
      throw redirect(307, "/login");
    }
  }
}
export {
  load
};
