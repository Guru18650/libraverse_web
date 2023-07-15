import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
const FormInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label, type, name } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div><label${add_attribute("for", name, 0)} class="block mb-2 text-sm font-medium ">${escape(label)}</label> <input${add_attribute("type", type, 0)}${add_attribute("name", name, 0)} class="bg-gray-700 border border-gray-600 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></div>`;
});
const FormSubmit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<button type="submit" class="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">${escape(text)}</button>`;
});
export {
  FormInput as F,
  FormSubmit as a
};
