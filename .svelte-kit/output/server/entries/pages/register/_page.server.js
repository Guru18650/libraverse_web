import { a as apiFetch } from "../../../chunks/api.js";
const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("pass");
    if (email != "" && password != "") {
      const payload = { email, password };
      var resp = await apiFetch("/auth/login", payload);
      cookies.set("jwt", resp);
    }
  }
};
export {
  actions
};
