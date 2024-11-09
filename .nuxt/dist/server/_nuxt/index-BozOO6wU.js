import { s as setInterval } from "./interval-gl53xdpR.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "hookable";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main$3 = {
  data() {
    return {
      counter: 0,
      target: 6615,
      // Target number for the counter
      interval: null
      // Interval ID
    };
  },
  mounted() {
    this.startCounter();
  },
  methods: {
    startCounter() {
      Math.ceil(this.target / 50);
      this.interval = setInterval();
    },
    sponsorOption(option) {
      if (option === "month") {
        (void 0).open("https://bedayango.org/donation/payment/donate/44?amount=700&name=&email=&phone=", "_blank");
      } else if (option === "year") {
        (void 0).open("https://bedayango.org/donation/payment/donate/44?amount=8400&name=&email=&phone=", "_blank");
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center text-center md:px-4 pb-8 px-14 text-grey20" }, _attrs))}><h2 class="text-2xl font-extrabold uppercase tracking-[0.18em] text-ourOrange"> Net3allem has served over </h2><div class="md:text-[160px] font-[1000] text-[120px] font-sans text-ourGrey">${ssrInterpolate($data.counter)}</div><div class="space-y-1 -mt-4"><h3 class="text-2xl font-bold uppercase text-ourOrange tracking-[0.18em]">Students</h3><p class="text-lg text-grey20"> and we are committed to serve many more. </p></div><h3 class="md:text-[30px] mt-8 py-6 text-[27px] font-extrabold leading-9 font-sans uppercase text-ourOrange tracking-[0.2em]">Sponsor a student for:</h3><div class="md:space-x-4 space-x-0 space-y-2 md:space-y-0 flex md:flex-row flex-col"><button class="md:px-6 px-10 py-2 bg-OurGreen text-white font-semibold rounded-[10px] hover:border-[1px] hover:text-ourGrey hover:bg-transparent"> Month (700 EGP) </button><button class="md:px-6 px-10 py-2 bg-OurGreen text-white font-semibold rounded-[10px] hover:border-[1px] hover:text-ourGrey hover:bg-transparent"> Year (8400 EGP) </button></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/counterSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  data() {
    return {
      images: [
        "/banners/gallery1.jpeg",
        "/banners/gallery2.jpeg",
        "/banners/gallery3.png",
        "/banners/gallery4.png",
        "/banners/gallery5.png",
        "/banners/gallery6.png",
        "/banners/gallery7.png"
      ],
      currentImageIndex: 0
      // Currently displayed image index
    };
  },
  methods: {
    // Go to the previous main image
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex + this.images.length - 1) % this.images.length;
    },
    // Go to the next main image
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    // Scroll the thumbnail row
    scrollThumbnails(direction) {
      const container = this.$refs.thumbnailContainer;
      const scrollAmount = 80;
      container.scrollLeft += direction === "right" ? scrollAmount : -scrollAmount;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-5 mx-auto max-w-7xl items-center bg-ourOrange text-white90 py-10 px-4 md:px-12 min-h-screen overflow-hidden" }, _attrs))}><div class="w-full md:w-1/2 space-y-4 mx-4 text-left font-thin tracking-[0.1em] pt-4 px-4 md:px-0"><h3 class="text-2xl md:text-[40px] font-bold uppercase text-white97 tracking-[0.18em]">Our Solution</h3><p class="text-sm md:text-base font-light"> Our solution is three-fold: </p><ul class="list-decimal list-outside space-y-6 pl-5"><li class="text-sm md:text-base leading-relaxed"> We <strong class="font-bold text-white97">empower</strong> teachers by providing professional development workshops for optimal teaching and learning environments. We directly train women from the community to become teachers at our own pre-schools or indirectly through partnerships with NGOs, acting as their professional development providers. </li><li class="text-sm md:text-base leading-relaxed"> We give our students at Net3allem a safe space to <strong class="font-bold text-white97">learn</strong> and <strong class="font-bold text-white97">grow</strong>. Students graduate from Net3allem with Grade 2 Egyptian curriculum proficiency, enabling them to excel in school. </li><li class="text-sm md:text-base leading-relaxed"> We give parent workshops, guide parents to follow play-based child-parent interaction, and raise awareness to tackle common myths within the community. </li></ul></div><div class="w-full md:w-1/2 flex flex-col items-center"><div class="relative w-full h-auto border-2 md:border-4 px-2 border-white bg-white rounded-lg overflow-hidden mb-4 max-w-full"><img${ssrRenderAttr("src", $data.images[$data.currentImageIndex])} alt="Gallery Image" class="w-full h-full object-cover transition duration-500 ease-in-out"><button class="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl md:text-[40px] text-white97 p-2 rounded-full"> ‹ </button><button class="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl md:text-[40px] text-white97 p-2 rounded-full"> › </button></div><div class="relative flex items-center justify-center w-full"><button class="absolute left-0 text-white p-2 text-xl md:text-[40px] z-10"> ‹ </button><div class="flex gap-2 overflow-hidden w-full px-4 md:px-8"><div class="flex gap-2"><!--[-->`);
  ssrRenderList($data.images, (image, index2) => {
    _push(`<img${ssrRenderAttr("src", image)} class="${ssrRenderClass(["w-16 h-16 md:w-24 md:h-24 lg:w-40 lg:h-40 object-cover cursor-pointer rounded", $data.currentImageIndex === index2 ? "border-2 border-white" : "opacity-75"])}" alt="Thumbnail">`);
  });
  _push(`<!--]--></div></div><button class="absolute right-0 text-white p-2 text-xl md:text-[40px] z-10"> › </button></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/ourSol.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      email: "",
      // Holds the input value
      isFocused: false
      // Tracks focus state
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center py-12 px-6 text-center space-y-6" }, _attrs))}><h2 class="text-2xl font-extrabold uppercase tracking-[0.18em] text-ourGrey"> Subscribe to Our Newsletter </h2><p class="text-gray-600 text-sm md:text-base max-w-md"> Be the first to find out about our latest updates! </p><div class="flex flex-col items-center w-full max-w-4xl space-y-4 md:space-x-4 relative"><div class="relative w-full"><label class="${ssrRenderClass([{ "text-xs -top-2 text-gray-500": $data.isFocused || $data.email, "text-base text-gray-600 top-2 left-4": !$data.isFocused && !$data.email }, "absolute transition-all duration-200"])}"> Enter your email here </label><input type="email"${ssrRenderAttr("value", $data.email)} class="w-full px-4 py-2 border-b-2 border-ourOrange focus:outline-none focus:border-gray-400 text-gray-700"></div><button type="button" class="w-full px-6 py-3 bg-OurGreen text-white97 hover:text-OurGreen hover:border-[1px] hover:border-OurGreen max-w-4xl rounded-lg hover:bg-transparent transition"> Sign Up </button></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/singUp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = publicAssetsURL("/banners/vidbanner.mov");
const _imports_1 = "" + __buildAssetsURL("net3allem.Cd3_4_8e.png");
const _imports_2 = "" + __buildAssetsURL("houses.CZqrLHqw.webp");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_counterSection = __nuxt_component_0;
  const _component_ourSol = __nuxt_component_1;
  const _component_singUp = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}><main class="min-h-screen"><div><video${ssrRenderAttr("src", _imports_0)} autoplay loop muted playsinline class="w-full h-full object-cover"></video></div><section class="flex flex-col md:flex-row items-center justify-center md:py-20 py-10 px-30 text-grey20 text-lg font-light leading-relaxed justify-items-center"><div class="w-full md:w-1/2 md:pl-56 md:pr-20 md:mt-20 px-5"><ul class="list-disc list-outside marker:text-black pl-8"><li class="py-1 px-2"> Net3allem, Arabic for &quot;To Learn Collectively&quot;, is a project under the umbrella of Bedaya for Charitable Activities. </li><li class="py-1 px-2"> The project aims to eradicate poverty by employing women and investing in high-quality pre-school Montessori education in the communities we serve and beyond. </li><li class="py-1 px-2"> This is achieved through collaborations with various governmental and non-governmental stakeholders, in partnership with The Ministry of Social Solidarity. </li></ul></div><div class="w-full md:w-1/2 mt-10 md:mt-0 flex md:justify-start justify-center text-center mr-14"><img${ssrRenderAttr("src", _imports_1)} alt="Net3allem Logo" class="w-9/12 h-auto object-contain"></div></section><section class="md:pt-28 pt-2 pb-16 md:px-[16%] px-8 text-grey20 text-lg text-center leading-loose"><h2 class="text-[40px] font-[1000] tracking-[0.2em] font-sans uppercase mb-2 text-ourPurple">Our Reality</h2><div class="mb-10"><p class="text-base font-light">Research shows that 90% of brain development happens before the age of 5.</p></div><div class="mb-10"><p class="text-base font-light">The learning foundations established during those early years of life are built to last.</p></div><div class="mb-6"><h3 class="text-lg text-grey40 font-[500] mx-auto">Lack of quality early childhood education denies children the chance to reach their full potential. It limits their future and reduces their chances of lifelong health, employment, and earning potential later in life.</h3></div></section><section class="flex flex-col items-center py-20"><img${ssrRenderAttr("src", _imports_2)} alt="Houses" class="w-full md:h-auto h-[209px] object-cover animate__animated animate__fadeInUp animate__slow animate__delay-0.5s"><div class="w-full bg-opacity-90 bg-OurGreen md:py-10 md:px-[27%] p-10 text-center"><blockquote class="md:text-[20px] text-[14px] contrast-[2.999] font-[400] italic leading-relaxed text-white97"><p> &quot;What is one of the best ways a country can boost shared prosperity, promote inclusive economic growth, expand equitable opportunity, and end extreme poverty? The answer is simple: Invest in early childhood development.&quot; </p><footer class="mt-4 font-extralight md:text-[18px] text[13px] text-white90 opacity-80">– Early Childhood Development, UNICEF</footer></blockquote></div></section>`);
  _push(ssrRenderComponent(_component_counterSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ourSol, null, null, _parent));
  _push(ssrRenderComponent(_component_singUp, null, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BozOO6wU.js.map
