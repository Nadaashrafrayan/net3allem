import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { allCountries } from "country-telephone-data";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main$1 = {
  __name: "volunteerForm",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Volunteer Form"
      // Default title
    },
    containerClasses: {
      type: String,
      default: "bg-white shadow-lg rounded-lg p-8 w-full"
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
      experience: "",
      subjects: "",
      volunteerTime: "",
      hours: ""
    });
    const isDropdownOpen = ref(false);
    const selectedCode = ref(form.value.selectedCode);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-b7d48189><div class="flex flex-col items-center justify-center md:min-h-screen px-8 md:max-w-2xl w-full py-10 md:mx-auto" data-v-b7d48189><form class="md:space-y-4 space-y-3 text-ourGrey md:w-[540px] w-full md:p-10 p-5 bg-ourOrange" data-v-b7d48189><div data-v-b7d48189><label for="name" class="block text-white97 font-thin text-xs mb-1" data-v-b7d48189>Name*</label><input type="text" id="name"${ssrRenderAttr("value", form.value.name)} required placeholder="Your Name" class="w-full border border-gray-300 p-3 focus:outline-none focus:border-white97" data-v-b7d48189></div><div data-v-b7d48189><label for="email" class="block text-white97 text-xs font-thin mb-1" data-v-b7d48189>Email*</label><input type="email" id="email"${ssrRenderAttr("value", form.value.email)} required placeholder="Your Email" class="w-full border border-gray-300 p-3 focus:outline-none focus:border-white97" data-v-b7d48189></div><div class="flex space-x-2" data-v-b7d48189><div class="w-1/3" data-v-b7d48189><label for="code" class="block text-white97 text-xs font-thin mb-1" data-v-b7d48189>Code*</label><div class="relative" data-v-b7d48189><button type="button" class="w-full border border-gray-300 p-3 bg-gray-50 text-white97 focus:outline-none flex justify-between items-center" data-v-b7d48189>${ssrInterpolate(selectedCode.value)} <span class="ml-2" data-v-b7d48189>▼</span></button><ul style="${ssrRenderStyle(isDropdownOpen.value ? null : { display: "none" })}" class="absolute w-full bg-white border border-gray-300 max-h-40 overflow-y-auto mt-1 z-10" data-v-b7d48189><!--[-->`);
      ssrRenderList(unref(countryCodes), (country) => {
        _push(`<li class="cursor-pointer p-2 hover:bg-gray-200 text-yellow-500 uppercase" data-v-b7d48189>${ssrInterpolate(country.iso2)} ${ssrInterpolate(country.dialCode)}</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="w-2/3" data-v-b7d48189><label for="phone" class="block text-white97 text-xs font-thin mb-1" data-v-b7d48189>Phone*</label><input type="tel" id="phone"${ssrRenderAttr("value", form.value.phone)} required placeholder="Phone Number" class="w-full border border-gray-300 p-3 focus:outline-none focus:border-white97" data-v-b7d48189></div></div><div data-v-b7d48189><label for="experience" class="block text-white97 text-xs font-thin mb-1" data-v-b7d48189>Experience*</label><input type="text" id="experience"${ssrRenderAttr("value", form.value.experience)} required placeholder="Your Experience" class="w-full border border-gray-300 p-3 focus:outline-none focus:border-white97" data-v-b7d48189></div><div data-v-b7d48189><label for="subjects" class="block text-white97 text-xs font-thin mb-1" data-v-b7d48189>Subjects Interested in Teaching*</label><input type="text" id="subjects"${ssrRenderAttr("value", form.value.subjects)} required placeholder="Subjects" class="w-full border border-gray-300 p-3 focus:outline-none focus:border-white97" data-v-b7d48189></div><div data-v-b7d48189><label for="volunteerTime" class="block text-white97 text-xs font-thin mb-1" data-v-b7d48189>Volunteering Day and Time Preference*</label><input type="text" id="volunteerTime"${ssrRenderAttr("value", form.value.volunteerTime)} required placeholder="Preferred Day and Time" class="w-full border border-gray-300 p-3 focus:outline-none focus:border-white97" data-v-b7d48189></div><div data-v-b7d48189><label for="hours" class="block text-white97 text-xs font-thin mb-1" data-v-b7d48189>Hours a Week*</label><input type="number" id="hours"${ssrRenderAttr("value", form.value.hours)} required placeholder="Hours per Week" class="w-full border border-gray-300 p-3 focus:outline-none focus:border-white97" data-v-b7d48189></div><div class="text-left" data-v-b7d48189><button type="submit" class="text-white py-2 px-14 text-opacity-80 bg-OurGreen hover:bg-white hover:text-gray-500 border border-white hover:border-gray-500 focus:outline-none mt-5" data-v-b7d48189> Submit </button></div></form></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/volunteer/volunteerForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b7d48189"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_volunteerForm = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="flex flex-col items-center justify-center bg-white px-14 text-center space-y-14 pt-10"><h2 class="md:text-[56px] text-4xl font-[1000] text-ourPurple font-sans uppercase tracking-[0.16em] my-14" style="${ssrRenderStyle({ "font-family": "'lulo-clean-w05-one-bold', sans-serif" })}"> Volunteer With Us </h2><div class="bg-ourGreen text-white bg-OurGreen py-14 px-10 w-full"><p class="md:text-[42px] text-[22px] font-bold font-serif leading-relaxed animate__animated animate__zoomIn animate__delay-0.5s animate__slow"> Together we can create a ripple effect.​ </p></div><p class="max-w-3xl text-[16px] md:text-[18px] text-ourGrey text-base leading-relaxed"> Thank you for your interest in volunteering with Net3allem!​ <br> Please fill out this form and we will contact you shortly in case we have a position available aligned with your availability and experience. </p></section>`);
  _push(ssrRenderComponent(_component_volunteerForm, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/volunteer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const volunteer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  volunteer as default
};
//# sourceMappingURL=volunteer-DJv3MOeJ.js.map
