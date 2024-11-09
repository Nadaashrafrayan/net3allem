import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("students.BDqD3mVD.webp");
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center md:min-h-screen bg-white md:mt-24 mt-12 md:px-24 px-9" }, _attrs))} data-v-bd31c46f><div class="text-center mb-8 md:px-3" data-v-bd31c46f><h2 class="md:text-[56px] text-4xl mb-24 font-[1000] text-OurGreen font-sans uppercase tracking-[0.2em]" style="${ssrRenderStyle({ "font-family": "'lulo-clean-w05-one-bold', sans-serif" })}" data-v-bd31c46f> Impact </h2><h2 class="md:text-[28px] text-2xl font-extrabold text-left text-ourOrange mt-4 tracking-[0.1em] leading-relaxed font-sans uppercase pb-3" data-v-bd31c46f> Impact Stories </h2><p class="md:max-w-4xl md:text-lg text-sm text-left text-gray-400 font-light leading-loose animate__animated animate__fadeInLeftBig animate__delay-0.5s" data-v-bd31c46f><span class="text-xl" data-v-bd31c46f> Ahmed&#39;s Story</span><br data-v-bd31c46f> Before Net3allem, Ahmed was deprived of his childhood, potential and the opportunity to attend school. Trapped in poverty, he was obliged to join his father in garbage collection to earn a living. ​​<br data-v-bd31c46f><br data-v-bd31c46f> After Net3allem, Ahmed attended two years of quality preschool education. His body was nourished with a nutritious meal every day at Net3allem school. He learned self-hygiene and care. Ahmed is now fully-funded for 12 years of education. He has a better employment and earning potential in life, and a brighter future awaiting him. </p></div><img${ssrRenderAttr("src", _imports_0)} alt="Illustration related to Net3allem&#39;s Program" class="object-cover md:w-[660px] md:h-[350px] h-full" data-v-bd31c46f><h4 class="md:text-[20px] text-base font-bold text-left text-ourOrange tracking-[0.14em] leading-relaxed font-sans uppercase pb-3" data-v-bd31c46f> Ahmed’s story is one of thousands at Net3allem</h4></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/impact/student.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-bd31c46f"]]);
const _sfc_main$2 = {
  data() {
    return {
      theoryChangeElements: [
        {
          subtitle: "Core Elements",
          list: [
            "Pre-school education",
            "Nutrition and hygiene for the kids",
            "Employment of women in local community",
            "Parent Workshops",
            "Support for alumni school children"
          ],
          bgClass: "bg-ourOrange"
        },
        {
          subtitle: "Behavior Change",
          list: [
            "Parents send their kids to school every day",
            "Kids stay in school and pay attention",
            "Community supports the school and become engaged in it (e.g., as teachers or cooks)"
          ],
          bgClass: "bg-ourPurple"
        },
        {
          subtitle: "Outcomes (Intermediate)",
          list: [
            "Child labor reduced as kids achieve education persistence",
            "Women employment increases family income",
            "Better parenting: less abuse/violence in the household"
          ],
          bgClass: "bg-OurGreen"
        },
        {
          subtitle: "Outcomes (Ultimate)",
          list: [
            "Kids are provided better foundation to succeed in school",
            "Better educational outcomes help kids increase their earning potential and break out of the poverty cycle"
          ],
          bgClass: "bg-ourOrange"
        }
      ],
      isInView: false
      // Tracks if section is visible
    };
  },
  mounted() {
    this.observeSection();
  },
  methods: {
    observeSection() {
      const options = {
        root: null,
        // Use the viewport as the root
        threshold: 0.1
        // Trigger when 10% of section is visible
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isInView = true;
            observer.unobserve(entry.target);
          }
        });
      }, options);
      observer.observe(this.$refs.theorySection);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    ref: "theorySection",
    class: "flex flex-col items-center justify-center pt-8 bg-white container"
  }, _attrs))} data-v-44e78eb2><h2 class="text-OurGreen md:text-[38px] text-[38px] text-center md:text-left font-extrabold uppercase md:mb-8 mb-2 leading-normal tracking-wider" data-v-44e78eb2>Theory of Change</h2><div class="flex flex-col items-center" data-v-44e78eb2><!--[-->`);
  ssrRenderList($data.theoryChangeElements, (element, index) => {
    _push(`<div class="card-container" data-v-44e78eb2><div class="${ssrRenderClass(`rounded-lg p-6 text-center border border-gray-300 ${element.bgClass}`)}" data-v-44e78eb2><h3 class="text-lg font-semibold text-white97" data-v-44e78eb2>${ssrInterpolate(element.subtitle)}</h3><ul class="list-disc list-inside text-center text-white97 mt-2 text-sm font-thin opacity-85 leading-relaxed" data-v-44e78eb2><!--[-->`);
    ssrRenderList(element.list, (item, idx) => {
      _push(`<li data-v-44e78eb2>${ssrInterpolate(item)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
    if (index < $data.theoryChangeElements.length - 1) {
      _push(`<div class="arrow-container" data-v-44e78eb2><svg class="${ssrRenderClass({ "arrow": true, "arrow-animate": $data.isInView })}" viewBox="0 0 24 24" data-v-44e78eb2><path d="M12 2L12 22M12 22L17 17M12 22L7 17" stroke="currentColor" stroke-width="2" data-v-44e78eb2></path></svg></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/impact/change.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-44e78eb2"]]);
const _sfc_main$1 = {
  data() {
    return {
      beforeNet3allemStats: [
        { value: "100%", description: "Illiteracy rate amongst the children" },
        { value: "75%", description: "Illiteracy rate amongst parents" }
      ],
      afterNet3allemStats: [
        { value: "45", description: "Students go to Tagrebi Schools​" },
        { value: "98%", description: "School Persistence" },
        { value: "85%", description: "of students graduate with second grade literacy and numeracy proficiency​" },
        { value: "54%", description: "Parents enrolled in Net3allem’s Literacy Programs" },
        { value: "87%", description: "Parents equipped to support their child’s development and education after Net3allem’s workshops" }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap md:flex-nowrap w-full h-full py-8" }, _attrs))}><div class="w-full md:w-1/2 md:h-[700px] h-[300px] flex items-center justify-center bg-cover bg-center text-center px-8" style="${ssrRenderStyle({ backgroundImage: "url(/evaluation/impact/bg-student.webp)" })}"><div class="text-white max-w-md"><h2 class="text-2xl md:text-3xl font-bold mb-4">Our Impact in Numbers</h2><p class="text-sm md:text-base leading-relaxed"> Our achievements to date, were made possible by the generous contributions received to help paint a brighter future for children.​ </p></div></div><div class="w-full md:w-1/2 flex flex-col items-center py-16 bg-white px-16"><div class="w-full mb-16"><h3 class="text-4xl font-extrabold text-ourGrey mb-14 text-center animate__animated animate__slideInLeft animate__delay-1s animate__slow">Before Net3allem</h3><div class="grid md:grid-cols-2 grid-flow-row gap-y-8 gap-x-6 place-items-center"><!--[-->`);
  ssrRenderList($data.beforeNet3allemStats, (item, index) => {
    _push(`<div class="text-center space-y-3 place-self-center tracking-widest animate__animated animate__zoomIn animate__delay-1s animate__slow"><span class="text-3xl font-bold text-OurGreen">${ssrInterpolate(item.value)}</span><p class="text-sm mx-4 text-gray-400">${ssrInterpolate(item.description)}</p></div>`);
  });
  _push(`<!--]--></div></div><div class="w-full"><h3 class="text-4xl font-extrabold text-ourGrey mb-14 text-center animate__animated animate__slideInLeft animate__delay-1s animate__slow">After Net3allem</h3><div class="grid md:grid-cols-3 grid-flow-row gap-y-14 gap-x-6 place-items-center mb-8"><!--[-->`);
  ssrRenderList($data.afterNet3allemStats.slice(0, 3), (item, index) => {
    _push(`<div class="text-center max-w-xl place-self-center space-y-3 leading-relaxed tracking-widest animate__animated animate__zoomIn animate__delay-1s animate__slow"><span class="text-3xl font-bold text-ourOrange">${ssrInterpolate(item.value)}</span><p class="text-xs text-gray-400">${ssrInterpolate(item.description)}</p></div>`);
  });
  _push(`<!--]--></div><div class="grid grid-flow-row md:grid-cols-2 gap-y-14 gap-x-6 place-items-center"><!--[-->`);
  ssrRenderList($data.afterNet3allemStats.slice(3), (item, index) => {
    _push(`<div class="text-center max-w-6xl space-y-3 place-self-center tracking-widest animate__animated animate__zoomIn animate__delay-1s animate__slow"><span class="text-3xl font-bold text-ourOrange">${ssrInterpolate(item.value)}</span><p class="text-xs text-gray-400">${ssrInterpolate(item.description)}</p></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/impact/inNumber.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_student = __nuxt_component_0;
  const _component_change = __nuxt_component_1;
  const _component_inNumber = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_student, null, null, _parent));
  _push(ssrRenderComponent(_component_change, null, null, _parent));
  _push(ssrRenderComponent(_component_inNumber, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/evaluation/impact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const impact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  impact as default
};
//# sourceMappingURL=impact-eNHOwjxp.js.map
