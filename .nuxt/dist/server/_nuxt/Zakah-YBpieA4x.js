import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("zakah.DEoGYykB.webp");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white mt-16 pl-3" }, _attrs))}><section class="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0"><div class="md:w-[60%] w-full text-left py-8 md:pt-16 md:pl-12 md:pr-44 pr-0 space-y-4 md:space-y-6"><h2 class="md:text-[40px] text-2xl stroke-ourPurple stroke-1 font-[1000] text-ourPurple font-sans uppercase leading-relaxed tracking-[0.1em]" style="${ssrRenderStyle({ "font-family": "'lulo-clean-w01-one-bold', 'lulo-clean-w05-one-bold', sans-serif" })}"> Zakah Calculator</h2><p class="text-ourOrange text-opacity-90 font-thin text-base md:text-lg"> To determine your zakah, kindly input the total value of your assets owned throughout the entire year in the designated boxes below: </p><ul class="list-disc pl-5 text-ourOrange text-opacity-90 font-thin text-sm md:text-base space-y-2 leading-loose"><li>The Nisab for 24-carat gold stands at 85 grams, while the Nisab for silver is set at 595 grams.</li><li> Please note: The gold price is calculated based on the following dynamic live pricing <a href="https://metalpriceapi.com/" class="text-[#4682B4] underline" target="_blank"> here </a>. </li><li>This tool is exclusively designed to assist you in calculating your Zakah. Rest assured, we do not request any personal information from you.</li></ul></div><div class="md:w-[40%] w-full"><img${ssrRenderAttr("src", _imports_0)} alt="Zakah Calculator" class="w-full h-auto object-cover"></div></section></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Zakah/calcHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      zakahData: {
        money: 0,
        profits: 0,
        gold: 0,
        // in grams
        properties: 0
        // net annual rent income
      },
      calculatedZakah: {
        money: 0,
        profits: 0,
        gold: 0,
        properties: 0
      }
    };
  },
  computed: {
    totalZakah() {
      return (this.calculatedZakah.money + this.calculatedZakah.profits + this.calculatedZakah.gold + this.calculatedZakah.properties).toFixed(2);
    }
  },
  methods: {
    // Updated calculateZakah method with rounding
    calculateZakah() {
      const zakahRateMoneyAndProfits = 0.025;
      const goldZakahPerGram = 81.2931;
      const zakahRateProperties = 0.1;
      this.calculatedZakah.money = this.zakahData.money * zakahRateMoneyAndProfits;
      this.calculatedZakah.profits = this.zakahData.profits * zakahRateMoneyAndProfits;
      this.calculatedZakah.gold = this.zakahData.gold > 85 ? this.zakahData.gold * goldZakahPerGram : 0;
      this.calculatedZakah.properties = this.zakahData.properties * zakahRateProperties;
      this.calculatedZakah.money = parseFloat(this.calculatedZakah.money.toFixed(2));
      this.calculatedZakah.profits = parseFloat(this.calculatedZakah.profits.toFixed(2));
      this.calculatedZakah.gold = parseFloat(this.calculatedZakah.gold.toFixed(2));
      this.calculatedZakah.properties = parseFloat(this.calculatedZakah.properties.toFixed(2));
    },
    // Method to navigate to the donation page with total zakah
    donate() {
      const donationAmount = this.totalZakah;
      const donationLink = `https://bedayango.org/donation/payment/donate/44?amount=${donationAmount}&name=&email=&phone=`;
      (void 0).location.href = donationLink;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white pt-16 md:px-48 px-3 min-h-[90vh]" }, _attrs))} data-v-578e2b7b><h2 class="md:text-3xl text-2xl font-[1000] text-OurGreen font-sans uppercase leading-loose tracking-[0.16em]" style="${ssrRenderStyle({ "font-family": "'lulo-clean-w05-one-bold', sans-serif" })}" data-v-578e2b7b> Calculate your zakah </h2><hr class="w-[15%] my-5 mx-1 border-ourOrange border-[0.5px]" data-v-578e2b7b><div class="flex flex-col md:flex-row" data-v-578e2b7b><div class="md:w-1/2 p-4" data-v-578e2b7b><div class="" data-v-578e2b7b><label class="block text-ourOrange font-thin text-opacity-85" data-v-578e2b7b>Zakah on Money in EGP</label><input${ssrRenderAttr("value", $data.zakahData.money)} type="number" placeholder="Cash at home and bank accounts" class="w-full border-2 px-2 py-[0.5px] focus:outline-none focus:border-ourGrey" data-v-578e2b7b></div><div class="" data-v-578e2b7b><label class="block text-ourOrange font-thin text-opacity-85" data-v-578e2b7b>Zakah on Profits in EGP</label><input${ssrRenderAttr("value", $data.zakahData.profits)} type="number" placeholder="Including bonds and market shares" class="w-full border-2 px-2 py-[0.5px] focus:outline-none focus:border-ourGrey" data-v-578e2b7b></div><div class="" data-v-578e2b7b><label class="block text-ourOrange font-thin text-opacity-85" data-v-578e2b7b>Zakah on Gold (if more than 85g)</label><input${ssrRenderAttr("value", $data.zakahData.gold)} type="number" placeholder="Write the amount of gold you own in grams" class="w-full border-2 px-2 py-[0.5px] focus:outline-none focus:border-ourGrey" data-v-578e2b7b></div><div class="" data-v-578e2b7b><label class="block text-ourOrange font-thin text-opacity-85" data-v-578e2b7b>Zakah on Properties in EGP</label><input${ssrRenderAttr("value", $data.zakahData.properties)} type="number" placeholder="Annual rent after deducting taxes and maintenance" class="w-full border px-2 py-[0.5px] focus:outline-none focus:border-gray-400" data-v-578e2b7b></div><button class="bg-OurGreen text-white97 font-thin hover:bg-white hover:border hover:border-gray-600 hover:text-gray-600 py-[0.5px] mt-12 text-opacity-90 w-full" data-v-578e2b7b> Calculate </button></div><div class="md:w-1/2 p-4" data-v-578e2b7b><h3 class="text-base font-medium mb-1 text-ourPurple" data-v-578e2b7b>Total Zakah Value</h3><div class="border p-4 bg-ourPurple mb-1" data-v-578e2b7b><p class="text-sm text-white" data-v-578e2b7b>Zakah on Money in EGP: ${ssrInterpolate($data.calculatedZakah.money.toFixed(2))}</p><hr class="w-[70%] my-3 border-white border" data-v-578e2b7b><p class="text-sm text-white" data-v-578e2b7b>Zakah on Profits in EGP: ${ssrInterpolate($data.calculatedZakah.profits.toFixed(2))}</p><hr class="w-[70%] my-3 border-white border" data-v-578e2b7b><p class="text-sm text-white" data-v-578e2b7b>Zakah on Gold in EGP: ${ssrInterpolate($data.calculatedZakah.gold.toFixed(2))}</p><hr class="w-[70%] my-3 border-white border" data-v-578e2b7b><p class="text-sm text-white" data-v-578e2b7b>Zakah on Properties in EGP: ${ssrInterpolate($data.calculatedZakah.properties.toFixed(2))}</p></div><div class="font-bold text-center text-base text-ourPurple" data-v-578e2b7b> Total Zakah in EGP: ${ssrInterpolate($options.totalZakah)} <hr class="w-[70%] my-3 mx-auto border-ourPurple border" data-v-578e2b7b></div><button class="bg-OurGreen text-white97 font-thin hover:bg-white hover:border hover:border-ourGrey hover:text-ourGrey py-[0.5px] mt-12 text-opacity-90 w-full" data-v-578e2b7b> Donate </button></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Zakah/calc.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-578e2b7b"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CalcHeader = __nuxt_component_0;
  const _component_calc = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-20" }, _attrs))}><section class="flex items-center justify-center bg-ourPurple leading-loose tracking-wider"><div class="w-full pb-10 md:px-20">`);
  _push(ssrRenderComponent(_component_CalcHeader, null, null, _parent));
  _push(`</div></section><section class="flex items-center justify-center bg-ourPurple leading-loose tracking-wider"><div class="w-full py-10 md:px-20 px-4 md:max-h-screen">`);
  _push(ssrRenderComponent(_component_calc, { class: "" }, null, _parent));
  _push(`</div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Zakah.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Zakah = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Zakah as default
};
//# sourceMappingURL=Zakah-YBpieA4x.js.map
