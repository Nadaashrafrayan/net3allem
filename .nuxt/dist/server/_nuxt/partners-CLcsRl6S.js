import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
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
const _sfc_main = {
  name: "OurPartners",
  data() {
    return {
      logos: [
        "/banners/net3allem.png",
        "/parteners/bedaya.png",
        "/parteners/egypt.png",
        "/parteners/harvard.png",
        "/parteners/bloom.png",
        "/parteners/zeede.png"
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-41a6bae1><section class="flex flex-col items-center justify-center min-h-screen md:max-w-screen-md max-w-screen-sm mx-auto py-24 bg-white px-4" data-v-41a6bae1><h2 class="md:text-[56px] text-4xl stroke-ourPurple stroke-1 font-[1000] text-ourPurple font-sans uppercase tracking-[0.28em] mb-28" style="${ssrRenderStyle({ "font-family": "'lulo-clean-w01-one-bold', 'lulo-clean-w05-one-bold', sans-serif" })}" data-v-41a6bae1>Partners</h2><div class="flex flex-col items-center md:space-y-24 space-y-12" data-v-41a6bae1>`);
  if ($data.logos.length > 1) {
    _push(`<div class="flex flex-row justify-center items-center md:space-x-24 space-x-4 w-full" data-v-41a6bae1><img${ssrRenderAttr("src", $data.logos[0])} alt="Partner Logo" class="object-contain w-4/12 md:w-2/3 max-h-[300px] animate__animated animate__fadeInLeft animate__delay-0.5s" data-v-41a6bae1><img${ssrRenderAttr("src", $data.logos[1])} alt="Partner Logo" class="object-contain w-3/12 md:w-2/3 max-h-[300px] animate__animated animate__fadeInRight animate__delay-0.5s" data-v-41a6bae1></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($data.logos.slice(2), (logo, index) => {
    _push(`<div class="flex justify-center w-full" data-v-41a6bae1><img${ssrRenderAttr("src", logo)} alt="Partner Logo" class="object-contain w-5/12 max-h-auto animate__animated animate__fadeInUp animate__delay-1s" data-v-41a6bae1></div>`);
  });
  _push(`<!--]--></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partners = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-41a6bae1"]]);
export {
  partners as default
};
//# sourceMappingURL=partners-CLcsRl6S.js.map
