import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as FormInput, a as FormSubmit } from "../../../chunks/formSubmit.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:pt-72"><div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700 dark:bg-gray-800 dark:border-gray-700"><div class="p-6 space-y-4 md:space-y-6 sm:p-8"><h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl" data-svelte-h="svelte-lb01my">Create your account</h1> <form class="space-y-4 md:space-y-6" method="post">${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      type: "email",
      label: "Email adress",
      name: "email"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      type: "text",
      label: "Username",
      name: "uname"
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
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      type: "password",
      label: "Repeat password",
      name: "pass2"
    },
    {},
    {}
  )} ${validate_component(FormSubmit, "FormSubmit").$$render($$result, { text: "Sign up" }, {}, {})} <p class="text-sm font-light text-gray-400" data-svelte-h="svelte-1wpw5a6">Already have an account?  <a href="login" class="font-medium text-primary-500 hover:underline">Sign in</a></p></form></div></div></div>`;
});
export {
  Page as default
};
