import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as FormInput, a as FormSubmit } from "../../../chunks/formSubmit.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:pt-72"><div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700 dark:bg-gray-800 dark:border-gray-700 "><div class="p-6 space-y-4 md:space-y-6 sm:p-8"><h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl" data-svelte-h="svelte-vsknf1">Sign in to your account</h1> <form class="space-y-4 md:space-y-6" method="post">${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      type: "email",
      label: "Your email",
      name: "email"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      type: "password",
      label: "Password",
      name: "pass"
    },
    {},
    {}
  )} <div class="flex items-center justify-between" data-svelte-h="svelte-q1snu3"><div class="flex items-start"><div class="flex items-center h-5"><input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-primary-600"></div> <div class="ml-3 text-sm"><label for="remember" class="text-gray-300">Remember me</label></div></div> <a href="#" class="text-sm font-medium text-primary-500 hover:underline">Forgot password?</a></div> ${validate_component(FormSubmit, "FormSubmit").$$render($$result, { text: "Sign in" }, {}, {})} <p class="text-sm font-light text-gray-400" data-svelte-h="svelte-swl0kw">Don’t have an account yet? <a href="register" class="font-medium text-primary-500 hover:underline">Sign up</a></p></form></div></div></div>`;
});
export {
  Page as default
};
