import { useSSRContext, ref, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { allCountries } from "country-telephone-data";
const _sfc_main = {
  __name: "formDonate",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Contact Form"
      // Default title
    },
    containerClasses: {
      type: String,
      default: "bg-white shadow-lg rounded-lg p-8  w-full"
      // Default container styles
    },
    titleClasses: {
      type: String,
      default: "text-2xl font-bold mb-6 text-center"
      // Default title styles
    }
  },
  setup(__props) {
    const countryCodes = allCountries.map((country) => ({
      name: country.name,
      dialCode: `+${country.dialCode}`,
      iso2: country.iso2
    }));
    const form = ref({
      name: "",
      email: "",
      selectedCode: "+20",
      // Default to country code +20 (Egypt)
      phone: "",
      message: ""
    });
    const isDropdownOpen = ref(false);
    const selectedCode = ref(form.value.selectedCode);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-OurGreen" }, _attrs))}><div class="flex flex-col items-center justify-center md:min-h-screen px-8 md:max-w-2xl w-full py-10 md:mx-auto"><h2 class="${ssrRenderClass([__props.titleClasses, "md:w-[550px] w-[227px] self-center font-sans mb-8"])}">${ssrInterpolate(__props.title)}</h2><form class="md:space-y-2 space-y-3 text-ourGrey md:w-[540px] w-full md:p-10 p-5 bg-white"><div><label for="name" class="block text-gray-400 font-thin text-xs mb-1">Name*</label><input type="text" id="name"${ssrRenderAttr("value", form.value.name)} required placeholder="Your Name" class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-gray-400"></div><div><label for="email" class="block text-gray-400 text-xs font-thin mb-1">Email*</label><input type="email" id="email"${ssrRenderAttr("value", form.value.email)} required placeholder="Your Email" class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-gray-400"></div><div class="flex space-x-2"><div class="w-1/3"><label for="code" class="block text-gray-400 text-xs font-thin mb-1">Code*</label><div class="relative"><button type="button" class="w-full border border-gray-300 p-3 rounded-md bg-gray-50 text-gray-400 focus:outline-none flex justify-between items-center">${ssrInterpolate(selectedCode.value)} <span class="ml-2">▼</span></button><ul style="${ssrRenderStyle(isDropdownOpen.value ? null : { display: "none" })}" class="absolute w-full bg-white border border-gray-300 rounded-md max-h-40 overflow-y-auto mt-1 z-10"><!--[-->`);
      ssrRenderList(unref(countryCodes), (country) => {
        _push(`<li class="cursor-pointer p-2 hover:bg-gray-200 text-yellow-500 uppercase">${ssrInterpolate(country.iso2)} ${ssrInterpolate(country.dialCode)}</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="w-2/3"><label for="phone" class="block text-gray-400 text-xs font-thin mb-1">Phone*</label><input type="tel" id="phone"${ssrRenderAttr("value", form.value.phone)} required placeholder="Phone Number" class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-gray-400"></div></div><div><label for="message" class="block text-gray-400 text-xs font-thin mb-1">Write a message*</label><textarea id="message" required placeholder="Your Message" rows="4" class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-gray-400">${ssrInterpolate(form.value.message)}</textarea></div><div class="text-left"><button type="submit" class="text-white py-2 px-14 text-opacity-80 bg-OurGreen hover:bg-transparent hover:text-gray-500 hover:border hover:border-gray-500 focus:outline-none mt-5"> Submit </button></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/donate /formDonate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=formDonate-DIT7R0FK.js.map
