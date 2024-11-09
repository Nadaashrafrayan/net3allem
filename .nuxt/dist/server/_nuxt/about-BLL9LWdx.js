import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center bg-white px-6 text-center space-y-10 py-10" }, _attrs))} data-v-eb347140><h2 class="md:text-[56px] text-4xl font-[1000] text-ourOrange font-sans uppercase tracking-[0.2em]" style="${ssrRenderStyle({ "font-family": "'lulo-clean-w05-one-bold', sans-serif" })}" data-v-eb347140> About Us </h2><p class="max-w-3xl text-gray-400 text-base leading-relaxed" data-v-eb347140> We&#39;re here to catch those who fall behind during the early years of life and lead the fight for equitable access to education. <br data-v-eb347140><br data-v-eb347140> We&#39;re here to end the vicious cycle that continues to disadvantage vulnerable populations. </p><div class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 mt-8" data-v-eb347140><div class="bg-ourGreen text-white bg-OurGreen pt-3 pb-10 px-10 max-w-sm shadow-md animate__animated animate__fadeInLeft" data-v-eb347140><h3 class="text-5xl font-bold mb-1 leading-relaxed tracking-widest animate__animated animate__lightSpeedInLeft" data-v-eb347140>Vision</h3><p class="text-sm font-thin opacity-85 leading-relaxed animate__animated animate__lightSpeedInLeft" data-v-eb347140> Our vision is to end extreme poverty, one family at a time, by investing in early childhood development. </p></div><div class="bg-ourGreen text-white bg-OurGreen pt-3 pb-12 px-10 max-w-sm shadow-md animate__animated animate__fadeInRight" data-v-eb347140><h3 class="text-5xl font-bold mb-1 leading-relaxed tracking-widest animate__animated animate__lightSpeedInRight" data-v-eb347140>Mission</h3><p class="text-sm font-thin opacity-85 leading-relaxed animate__animated animate__lightSpeedInRight" data-v-eb347140> Our mission is to provide access to universal high-quality early childhood education for every child in need, in Egypt. </p></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/visMis.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-eb347140"]]);
const _imports_0$3 = publicAssetsURL("/about/stratgy.GIF");
const _sfc_main$4 = {
  name: "StrategicPriorities"
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center md:min-h-screen bg-white" }, _attrs))} data-v-2609b6e6><div class="text-center" data-v-2609b6e6><h1 class="bg-ourPurple text-white97 md:px-52 px-24 py-6 inline-block text-3xl font-bold" data-v-2609b6e6> Our Strategic Priorities </h1><img${ssrRenderAttr("src", _imports_0$3)} alt="Our Strategic Priorities" class="animated-image" data-v-2609b6e6></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/ourStratgy.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-2609b6e6"]]);
const settingIcon = "data:image/svg+xml,%3csvg%20preserveAspectRatio='xMidYMid%20meet'%20data-bbox='23%2023%20153.999%20154'%20viewBox='23%2023%20153.999%20154'%20height='200'%20width='200'%20xmlns='http://www.w3.org/2000/svg'%20data-type='color'%20role='presentation'%20aria-hidden='true'%20aria-label=''%3e%3cdefs%3e%3cstyle%3e%23comp-le2rymcm%20svg%20[data-color='1']%20{fill:%20%23FFFFFF;}%3c/style%3e%3c/defs%3e%3cg%3e%3cpath%20d='M100%2076.091c-13.184%200-23.909%2010.726-23.909%2023.909S86.816%20123.909%20100%20123.909s23.909-10.726%2023.909-23.909S113.184%2076.091%20100%2076.091zm0%2039.818c-8.772%200-15.909-7.137-15.909-15.909S91.228%2084.091%20100%2084.091s15.909%207.137%2015.909%2015.909-7.137%2015.909-15.909%2015.909zm59.728-33.182h-1.113a6.947%206.947%200%200%201-6.06-3.597%203.993%203.993%200%200%200-.317-1.186c-1.153-2.614-.608-5.623%201.363-7.638l.371-.372.035-.035a17.156%2017.156%200%200%200%205.052-12.217%2017.157%2017.157%200%200%200-5.036-12.181l-.039-.04a17.163%2017.163%200%200%200-12.207-5.052h-.01a17.158%2017.158%200%200%200-12.208%205.062l-.368.369c-2.043%201.998-5.049%202.545-7.706%201.373a6.941%206.941%200%200%201-4.212-6.344v-.597C117.272%2030.749%20109.524%2023%20100%2023s-17.272%207.749-17.272%2017.273v1.112a6.945%206.945%200%200%201-3.597%206.06%204.03%204.03%200%200%200-1.187.317c-2.615%201.154-5.623.608-7.631-1.355l-.397-.398-.045-.044c-6.736-6.7-17.669-6.687-24.392.035l-.012.011-.006.006c-6.73%206.739-6.725%2017.697.014%2024.427l.366.365a6.919%206.919%200%200%201%201.39%207.666%204.432%204.432%200%200%200-.095.235c-.992%202.696-3.488%204.481-6.267%204.548h-.598C30.748%2083.258%2023%2091.007%2023%20100.531c0%209.524%207.748%2017.273%2017.272%2017.273h1.113c2.771.011%205.268%201.664%206.377%204.251%201.153%202.614.608%205.623-1.363%207.638l-.371.372-.035.035a17.156%2017.156%200%200%200-5.052%2012.217%2017.157%2017.157%200%200%200%205.036%2012.181l.039.04a17.163%2017.163%200%200%200%2012.207%205.052h.01a17.158%2017.158%200%200%200%2012.208-5.062l.368-.369a6.92%206.92%200%200%201%207.666-1.39c.077.034.155.065.234.094%202.696.992%204.482%203.489%204.548%206.267v.597c0%209.524%207.749%2017.273%2017.273%2017.273s17.272-7.749%2017.272-17.273v-1.112c.011-2.772%201.665-5.269%204.252-6.377%202.616-1.153%205.624-.608%207.631%201.355l.397.398.045.044c6.738%206.7%2017.671%206.687%2024.392-.036l.012-.011.006-.006c6.73-6.739%206.725-17.697-.014-24.427l-.366-.365a6.919%206.919%200%200%201-1.39-7.666l.018-.04a6.939%206.939%200%200%201%206.344-4.211h.598c9.524%200%2017.272-7.749%2017.272-17.273s-7.747-17.273-17.271-17.273zm0%2026.546h-.613a14.939%2014.939%200%200%200-13.673%209.041c-2.471%205.619-1.295%2012.082%203.03%2016.504l.398.398c3.617%203.613%203.621%209.496.008%2013.114l-.011.01c-3.613%203.618-9.498%203.62-13.113.007l-.033-.032-.405-.407c-4.396-4.298-10.868-5.471-16.45-3.007a14.952%2014.952%200%200%200-9.062%2013.698v1.128c0%205.113-4.159%209.273-9.272%209.273s-9.273-4.16-9.273-9.273l-.001-.69c-.143-6.136-3.933-11.476-9.667-13.638-5.594-2.415-12.01-1.228-16.404%203.07l-.401.401a9.21%209.21%200%200%201-6.555%202.719h-.006a9.21%209.21%200%200%201-6.528-2.688l-.034-.035a9.209%209.209%200%200%201-2.72-6.556%209.21%209.21%200%200%201%202.688-6.534l.037-.036.425-.426c4.299-4.394%205.473-10.867%203.008-16.452a14.948%2014.948%200%200%200-13.697-9.06h-1.129c-5.113%200-9.272-4.16-9.272-9.273%200-5.113%204.159-9.272%209.272-9.272l.691-.001c6.136-.144%2011.475-3.934%2013.637-9.667%202.415-5.596%201.229-12.01-3.072-16.408l-.398-.398c-3.617-3.613-3.621-9.496-.008-13.114l.011-.01c3.612-3.618%209.497-3.62%2013.113-.007l.033.032.405.407c4.184%204.091%2010.249%205.353%2015.677%203.321.449-.03.891-.136%201.305-.314A14.952%2014.952%200%200%200%2090.731%2041.4v-1.128C90.728%2035.16%2094.887%2031%20100%2031s9.272%204.16%209.272%209.273v.613c.024%205.962%203.581%2011.333%209.021%2013.665%205.625%202.481%2012.097%201.308%2016.521-3.02l.401-.401a9.21%209.21%200%200%201%206.555-2.719h.006a9.21%209.21%200%200%201%206.528%202.688l.034.035a9.209%209.209%200%200%201%202.72%206.556%209.21%209.21%200%200%201-2.688%206.534l-.037.036-.425.426c-4.093%204.184-5.354%2010.252-3.322%2015.678.031.449.137.89.314%201.305a14.948%2014.948%200%200%200%2013.697%209.06h1.129c5.113%200%209.272%204.16%209.272%209.273s-4.157%209.271-9.27%209.271z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
const speakerIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='96'%20height='96'%20viewBox='0%200%2024%2024'%3e%3cg%20fill='none'%20stroke='%23f7f7f8'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1'%3e%3cpath%20d='M18%208a3%203%200%200%201%200%206m-8-6v11a1%201%200%200%201-1%201H8a1%201%200%200%201-1-1v-5'%20/%3e%3cpath%20d='m12%208l4.524-3.77A.9.9%200%200%201%2018%204.922v12.156a.9.9%200%200%201-1.476.692L12%2014H4a1%201%200%200%201-1-1V9a1%201%200%200%201%201-1z'%20/%3e%3c/g%3e%3c/svg%3e";
const awardIcon = "data:image/svg+xml,%3csvg%20preserveAspectRatio='xMidYMid%20meet'%20data-bbox='39%2019.999%20121.999%20160.001'%20viewBox='39%2019.999%20121.999%20160.001'%20height='200'%20width='200'%20xmlns='http://www.w3.org/2000/svg'%20data-type='color'%20role='presentation'%20aria-hidden='true'%20aria-label=''%3e%3cdefs%3e%3cstyle%3e%23comp-le2s1kwy%20svg%20[data-color='1']%20{fill:%20%23FFFFFF;}%3c/style%3e%3c/defs%3e%3cg%3e%3cpath%20d='M100%20126.646c-24.275%200-44.025-19.639-44.025-43.777%200-24.139%2019.749-43.778%2044.025-43.778s44.025%2019.639%2044.025%2043.778c0%2024.138-19.75%2043.777-44.025%2043.777zm0-83.873c-22.244%200-40.34%2017.987-40.34%2040.095s18.096%2040.094%2040.34%2040.094%2040.34-17.986%2040.34-40.094S122.244%2042.773%20100%2042.773z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3cpath%20d='M100%20145.735a17.797%2017.797%200%200%201-12.38-5.008%2014.08%2014.08%200%200%200-11.806-3.812c-9.565%201.347-18.365-5.016-20.035-14.48-.756-4.293-3.414-7.928-7.289-9.972-8.541-4.504-11.903-14.799-7.655-23.436a13.861%2013.861%200%200%200%200-12.319c-4.247-8.637-.884-18.931%207.655-23.436%203.875-2.044%206.533-5.679%207.289-9.972%201.67-9.464%2010.466-15.826%2020.035-14.48%204.345.616%208.65-.776%2011.806-3.812a17.802%2017.802%200%200%201%2024.759%200%2014.086%2014.086%200%200%200%2011.806%203.812c9.571-1.34%2018.365%205.017%2020.035%2014.48.756%204.293%203.414%207.928%207.289%209.972%208.54%204.505%2011.902%2014.8%207.655%2023.436a13.861%2013.861%200%200%200%200%2012.319c4.248%208.638.885%2018.932-7.655%2023.436-3.875%202.044-6.533%205.679-7.289%209.972-1.67%209.464-10.47%2015.812-20.035%2014.48a14.081%2014.081%200%200%200-11.806%203.812A17.803%2017.803%200%200%201%20100%20145.735zm-22.163-12.644a17.73%2017.73%200%200%201%2012.338%204.983%2014.133%2014.133%200%200%200%2019.651%200c3.976-3.825%209.397-5.574%2014.873-4.805%207.591%201.078%2014.57-3.971%2015.894-11.473.955-5.421%204.308-10.01%209.198-12.589%206.765-3.567%209.431-11.719%206.069-18.555a17.52%2017.52%200%200%201%200-15.567c3.362-6.837.696-14.987-6.069-18.555-4.89-2.58-8.242-7.168-9.198-12.589-1.323-7.5-8.295-12.543-15.894-11.473-5.482.769-10.898-.982-14.873-4.805a14.133%2014.133%200%200%200-19.651%200c-3.976%203.824-9.397%205.574-14.873%204.805-7.582-1.072-14.569%203.973-15.894%2011.473-.955%205.421-4.308%2010.01-9.198%2012.589-6.764%203.568-9.431%2011.719-6.069%2018.555a17.52%2017.52%200%200%201%200%2015.567c-3.362%206.837-.697%2014.988%206.069%2018.555%204.89%202.58%208.242%207.168%209.198%2012.589%201.323%207.5%208.295%2012.549%2015.894%2011.473a18.09%2018.09%200%200%201%202.535-.178z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3cpath%20fill='%23f7f7f8'%20d='M129.964%20180%20100%20163.752%2070.036%20180v-44.83h3.685v38.643L100%20159.563l26.279%2014.25V135.17h3.685V180z'%20data-color='1'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
const helpIcon = "data:image/svg+xml,%3csvg%20preserveAspectRatio='xMidYMid%20meet'%20data-bbox='20%2020%20160%20160'%20viewBox='20%2020%20160%20160'%20height='200'%20width='200'%20xmlns='http://www.w3.org/2000/svg'%20data-type='color'%20role='presentation'%20aria-hidden='true'%20aria-label=''%3e%3cdefs%3e%3cstyle%3e%23comp-le2s2efy%20svg%20[data-color='1']%20{fill:%20%23FFFFFF;}%3c/style%3e%3c/defs%3e%3cg%3e%3cpath%20d='M100%20105.145%2069.842%2074.989a20.263%2020.263%200%200%201-5.974-14.424c0-5.449%202.121-10.571%205.974-14.424s8.975-5.974%2014.424-5.974%2010.571%202.121%2014.424%205.974l1.31%201.311%201.31-1.311c7.954-7.952%2020.894-7.952%2028.848%200a20.263%2020.263%200%200%201%205.974%2014.424%2020.263%2020.263%200%200%201-5.974%2014.424L100%20105.145zM84.266%2043.886a16.635%2016.635%200%200%200-11.799%204.88c-6.507%206.506-6.507%2017.092%200%2023.598L100%2099.897l27.532-27.533c6.507-6.506%206.507-17.092%200-23.598-6.508-6.507-17.094-6.506-23.598%200L100%2052.7l-3.935-3.934a16.633%2016.633%200%200%200-11.799-4.88z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3cpath%20d='M73.349%20159.834h-3.713v-11.047l-19.789-15.832a16.911%2016.911%200%200%201-6.218-10.965l-5.917-43.391a7.212%207.212%200%200%201%207.144-8.183%207.173%207.173%200%200%201%206.888%205.083l9.467%2030.686-3.548%201.094-9.467-30.685a3.479%203.479%200%200%200-3.342-2.466%203.495%203.495%200%200%200-3.466%203.968l5.917%2043.391a13.218%2013.218%200%200%200%204.858%208.569l21.183%2016.946v12.832z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3cpath%20d='M101.856%20164.876h-3.713V134.02a17.006%2017.006%200%200%200-11.91-16.271%2011.939%2011.939%200%200%201-5.394-3.539L69.12%20100.756a4.748%204.748%200%200%200-6.405-.676l-.124.093c-2.076%201.557-2.54%204.421-1.061%206.525%203.751%205.328%209.397%2013.388%2012.238%2017.445l1.065%201.521-3.041%202.129-1.065-1.521c-2.839-4.055-8.483-12.111-12.232-17.438-2.641-3.756-1.822-8.863%201.866-11.628l.124-.093c3.525-2.641%208.546-2.11%2011.433%201.206l11.719%2013.454a8.217%208.217%200%200%200%203.717%202.438%2020.705%2020.705%200%200%201%2014.501%2019.81v30.855z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3cpath%20d='M130.364%20159.834h-3.713v-12.831l21.183-16.946a13.214%2013.214%200%200%200%204.858-8.569l5.917-43.391a3.495%203.495%200%200%200-3.466-3.968%203.48%203.48%200%200%200-3.342%202.466l-9.467%2030.685-3.548-1.094%209.467-30.686a7.173%207.173%200%200%201%206.888-5.083%207.21%207.21%200%200%201%207.144%208.183l-5.917%2043.391a16.915%2016.915%200%200%201-6.218%2010.965l-19.789%2015.832v11.046z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3cpath%20d='M101.856%20164.876h-3.713V134.02c0-9.099%205.827-17.06%2014.501-19.81a8.217%208.217%200%200%200%203.717-2.438l11.719-13.454c2.89-3.316%207.91-3.846%2011.43-1.209l.132.099c3.684%202.763%204.503%207.87%201.862%2011.624a10772.82%2010772.82%200%200%200-12.232%2017.439l-1.065%201.521-3.041-2.129%201.065-1.521c2.841-4.057%208.487-12.116%2012.238-17.446%201.48-2.102%201.015-4.967-1.057-6.521l-.132-.099c-1.968-1.477-4.783-1.179-6.401.679l-11.719%2013.454a11.939%2011.939%200%200%201-5.394%203.539%2017.004%2017.004%200%200%200-11.91%2016.271v30.857z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3cpath%20d='M100%20180c-44.112%200-80-35.888-80-80s35.888-80%2080-80%2080%2035.888%2080%2080-35.888%2080-80%2080zm0-156.287c-42.065%200-76.287%2034.222-76.287%2076.287S57.935%20176.287%20100%20176.287s76.287-34.222%2076.287-76.287S142.065%2023.713%20100%2023.713z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
const secureIcon = "data:image/svg+xml,%3csvg%20preserveAspectRatio='xMidYMid%20meet'%20data-bbox='35%2028.098%20130%20143.902'%20viewBox='35%2028.098%20130%20143.902'%20height='200'%20width='200'%20xmlns='http://www.w3.org/2000/svg'%20data-type='color'%20role='presentation'%20aria-hidden='true'%20aria-label=''%3e%3cdefs%3e%3cstyle%3e%23comp-le2s2uli%20svg%20[data-color='1']%20{fill:%20%23FFFFFF;}%3c/style%3e%3c/defs%3e%3cg%3e%3cpath%20d='M164.6%2052.5l-2.5.3c-2.4.3-4.9.5-7.4.5-15.1%200-41.1-8-50.8-23a4.734%204.734%200%200%200-8%200c-6.2%209.3-26.5%2023.1-50.7%2023.1-2.5%200-5-.2-7.4-.5l-2.4-.3-.4%202.8v.3c0%2044.3%2017.3%2073.4%2031.9%2090%2015.8%2018%2031.4%2025.5%2032.1%2025.8l1%20.5%201-.5c.7-.3%2016.3-7.5%2032.1-25.4%2014.5-16.5%2031.9-45.5%2031.9-90.4l-.4-3.2zm-64.5-19.6L98%2031.5l2.1%201.4zm29.4%20109.8c-12.8%2014.6-25.8%2021.9-29.5%2023.8-3.7-1.9-16.6-9.4-29.4-24-13.7-15.7-30-43-30.6-84.5%201.7.1%203.5.2%205.2.2C71%2058.2%2093%2043.4%20100%2033.1c6.8%2010.2%2028.6%2025.1%2054.8%2025.1%201.8%200%203.5-.1%205.2-.2-.6%2041.9-16.8%2069.2-30.5%2084.7z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3cpath%20d='M130%2087.8l-18.4-2.7-8.2-16.7c-.6-1.3-1.9-2.1-3.3-2.1s-2.7.8-3.3%202.1l-8.2%2016.7L70%2087.8c-1.4.2-2.6%201.2-3%202.5-.4%201.4-.1%202.8.9%203.8l13.3%2013-3.1%2018.3c-.2%201.4.3%202.8%201.5%203.6.7.5%201.4.7%202.2.7.6%200%201.2-.1%201.7-.4l16.5-8.6%2016.5%208.6c1.3.7%202.8.6%203.9-.3%201.2-.8%201.7-2.2%201.5-3.6l-3.1-18.3%2013.3-13c1-1%201.4-2.5.9-3.8-.4-1.3-1.6-2.2-3-2.5zm-15.2%2016.3c-.9.9-1.3%202.1-1.1%203.3l2.8%2016.5-14.8-7.8c-1.1-.6-2.4-.6-3.5%200l-14.8%207.8%202.8-16.5c.2-1.2-.2-2.4-1.1-3.3l-12-11.7L89.8%2090c1.2-.2%202.3-.9%202.8-2l7.4-15%207.4%2015c.5%201.1%201.6%201.9%202.8%202l16.6%202.4-12%2011.7z'%20fill='%23f7f7f8'%20data-color='1'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$3 = {
  data() {
    return {
      topTitle: "Our Values",
      text: "We responsibly serve the community to build a better world for children, working effectively with relevant stakeholders to achieve common goals. Remaining true to our mandate in supporting equitable access to quality education, we ensure our core values are embedded in everything we do.",
      items: [
        { title: "Impact Driven", icon: settingIcon, bgColor: "bg-ourPurple" },
        { title: "Empowerment, Voice and Accountability", icon: speakerIcon, bgColor: "bg-OurGreen" },
        { title: "Quality and Collaboration", icon: awardIcon, bgColor: "bg-ourOrange" },
        { title: "Psychological Safety", icon: helpIcon, bgColor: "bg-ourOrange" },
        { title: "Security and Safety", icon: secureIcon, bgColor: "bg-ourPurple" }
      ],
      hoverIndex: null
      // Index of the currently hovered item
    };
  },
  methods: {
    addHoverAnimation(index) {
      this.hoverIndex = index;
    },
    removeHoverAnimation() {
      this.hoverIndex = null;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center py-5 bg-white container" }, _attrs))} data-v-cc72c67c><div class="text-center mb-8" data-v-cc72c67c><h2 class="text-[46px] font-extrabold text-OurGreen font-sans uppercase tracking-[0.12em] leading-relaxed" data-v-cc72c67c>${ssrInterpolate($data.topTitle)}</h2><p class="mt-4 max-w-4xl text-base text-ourGrey animate__animated animate__fadeInLeftBig animate__delay-3s tracking-[0.12em] leading-loose py-4" data-v-cc72c67c>${ssrInterpolate($data.text)}</p></div><div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-6" data-v-cc72c67c><!--[-->`);
  ssrRenderList($data.items.slice(0, 3), (item, index) => {
    _push(`<div class="${ssrRenderClass([item.bgColor, "flex flex-col items-center justify-center p-8 border w-full h-full md:w-[254px] md:h-[195px] border-gray-300 mx-auto text-center", { "hover-animation": $data.hoverIndex === index }])}" data-v-cc72c67c><img${ssrRenderAttr("src", item.icon)} alt="" class="h-24 w-24" data-v-cc72c67c><h3 class="text-base font-light text-center text-white97 opacity-85" data-v-cc72c67c>${ssrInterpolate(item.title)}</h3></div>`);
  });
  _push(`<!--]--></div><div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8" data-v-cc72c67c><!--[-->`);
  ssrRenderList($data.items.slice(3), (item, index) => {
    _push(`<div class="${ssrRenderClass([item.bgColor, "flex flex-col items-center justify-center p-8 border w-[354px] h-full md:w-[254px] md:h-[195px] border-gray-300 mx-auto text-center", { "hover-animation": $data.hoverIndex === index + 3 }])}" data-v-cc72c67c><img${ssrRenderAttr("src", item.icon)} alt="" class="w-24 h-24" data-v-cc72c67c><h3 class="text-base font-light text-white97 opacity-85" data-v-cc72c67c>${ssrInterpolate(item.title)}</h3></div>`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/ourValues.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-cc72c67c"]]);
const _imports_0$2 = "" + __buildAssetsURL("nuturingCare.BwEqm-mk.png");
const _sfc_main$2 = {
  name: "YourComponentName",
  data() {
    return {
      isVisible: false
      // To track visibility of the image
    };
  },
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.disconnect();
          }
        });
      }, {
        threshold: 0.1
        // Adjust the threshold as needed
      });
      observer.observe(this.$refs.spinningImage);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center md:min-h-screen bg-white md:mt-24 mt-12" }, _attrs))} data-v-5544e42d><div class="text-center mb-8" data-v-5544e42d><h1 class="md:text-[56px] text-3xl font-extrabold text-ourOrange font-sans uppercase tracking-[0.13em] leading-loose md:mb-14 mb-6" data-v-5544e42d> Net3allem&#39;s Program </h1><h2 class="md:text-[42px] text-3xl font-[1000] text-ourPurple mt-4 tracking-[0.18em] leading-loose font-sans uppercase pb-3" data-v-5544e42d> Our Framework </h2><p class="max-w-3xl px-8 text-ourGrey text-base text-left leading-loose" data-v-5544e42d> We believe that children&#39;s brains and bodies need nurture to help them survive, thrive, and reach their full potential. We follow UNICEF&#39;s Nurturing Care Framework, which is locally adapted to the needs of every community we serve. </p></div><img${ssrRenderAttr("src", _imports_0$2)} alt="Illustration related to Net3allem&#39;s Program" class="${ssrRenderClass([{ "spinning-image": $data.isVisible }, "mt-3 max-w-lg object-cover md:w-[450px] md:h-[450px] w-[300px] h-[300px]"])}" data-v-5544e42d></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/program.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-5544e42d"]]);
const _imports_0$1 = "" + __buildAssetsURL("amina1.CQ8rDBrD.webp");
const _imports_1 = "" + __buildAssetsURL("21222.BuzuW5Ih.webp");
const _imports_2 = "" + __buildAssetsURL("sarah1.IKeHgi-j.webp");
const _imports_3 = "" + __buildAssetsURL("sarah2.DIu3qrAV.webp");
const _imports_4 = "" + __buildAssetsURL("sarah3.B1N2IH9g.webp");
const _imports_5 = "" + __buildAssetsURL("mariam1.BhKtoWYx.png");
const _imports_6 = "" + __buildAssetsURL("mariam2.CMz7HzzH.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center bg-OurGreen py-28 mt-28 leading-loose tracking-wider" }, _attrs))}><div class="bg-white max-w-5xl w-full p-14"><div class="text-center mb-8"><h1 class="text-[46px] text-ourPurple font-extrabold uppercase leading-tight">Our Team</h1><p class="text-base text-ourPurple tracking-normal font-semibold">We have a strong team with a range of expertise working with us at Net3allem.</p></div><div class="mb-8"><h2 class="text-2xl text-ourPurple font-bold mb-2">Core Team</h2><div class="mb-6 space-y-3"><h3 class="text-xl text-ourPurple font-semibold">Safaa Ismail</h3><p class="text-gray-400 font-extralight"> Co-founder of Net3allem &amp; Pre-school Principal <br> Safaa has over 14 years of education experience and a total of 25 years of professional experience. She is Montessori (IM &#39;15) certified and holds a master&#39;s degree in economics. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"><div class="space-y-3"><h3 class="text-xl text-ourPurple font-semibold underline">Amina Elgamal</h3><p class="text-gray-400 font-extralight"> Co-founder of Net3allem and CEO <br> Amina Elgamal is a master&#39;s graduate from the Education and Entrepreneurship program at the Harvard Graduate School of Education, specializing in early childhood. <br><br> She has worked in brand management, corporate social responsibility, and corporate communication at Nestle for six years. She now collaborates with the Saul Zaentz Initiative at Harvard to enhance early learning environments. </p></div><div class="flex flex-col items-center justify-center"><img${ssrRenderAttr("src", _imports_0$1)} alt="Team member" class="md:w-2/3 w-full h-32 object-cover"><img${ssrRenderAttr("src", _imports_1)} alt="Team member" class="md:w-2/3 w-full h-32 object-cover mb-4"></div></div><div class="mb-6 space-y-3"><h3 class="text-xl text-ourPurple font-semibold">Enas Abousafi</h3><p class="text-gray-400 font-extralight"> Co-founder of Net3allem &amp; Fundraising Specialist <br> Enas is an M.A. graduate of the American University in Cairo. She has had a passion for education and development for many years and has been invested in Net3allem since its initiation. </p></div><div class="mb-6 space-y-3"><h3 class="text-xl text-ourPurple font-semibold">Khalil Endisha</h3><p class="text-gray-400 font-extralight"> Volunteers and Outreach Coordinator <br> Khalil graduated from Virginia Commonwealth University with a Bachelor&#39;s in Political Science and a Minor in Environmental Studies. He has experience in fundraising and now leverages his network in Egypt to help promote education. </p></div></div><div class="md:text-center text-left mt-8"><h2 class="md:text-xl text-base text-ourPurple font-bold">+ 42 Employees from the community</h2><h2 class="md:text-xl text-base text-ourPurple font-bold">+ 12 Volunteers</h2></div><div class="mt-12"><h2 class="text-2xl text-ourPurple font-bold mb-4">Advisory Board</h2><div class="mb-6"><h3 class="text-xl text-ourPurple font-semibold underline mb-2">Sarah Frandsen</h3><div class="flex flex-col md:flex-row gap-4"><img${ssrRenderAttr("src", _imports_2)} alt="Sarah Frandsen Image 1" class="w-full h-24 object-cover"><img${ssrRenderAttr("src", _imports_3)} alt="Sarah Frandsen Image 2" class="w-full h-24 object-cover"><img${ssrRenderAttr("src", _imports_4)} alt="Sarah Frandsen Image 3" class="text-left w-full h-24 object-cover"></div></div><div class="mb-5 md:mb-10"><h3 class="text-xl text-ourPurple font-semibold underline mb-4">Mariam Tag</h3><div class="flex flex-col md:flex-row gap-4"><img${ssrRenderAttr("src", _imports_5)} alt="Mariam Tag Image 1" class="w-2/3 h-24 object-contain"><img${ssrRenderAttr("src", _imports_6)} alt="Mariam Tag Image 2" class="w-full h-24 object-contain"></div></div><div class="mb-10"><h3 class="text-xl text-ourPurple font-semibold underline mb-4">Nadine El Ashkar</h3><div class="flex flex-col md:flex-row gap-4"><img${ssrRenderAttr("src", _imports_3)} alt="Sarah Frandsen Image 2" class="w-full h-24 object-cover"><img${ssrRenderAttr("src", _imports_4)} alt="Nadine El Ashkar Image 2" class="w-full h-24 object-contain"></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/paper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = publicAssetsURL("/about/image.png");
const _sfc_main = {
  components: { ourStratgy: __nuxt_component_1, OurValues: __nuxt_component_2, Program: __nuxt_component_3, Paper: __nuxt_component_4 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VisMis = __nuxt_component_0;
  const _component_ourStratgy = __nuxt_component_1;
  const _component_ourValues = __nuxt_component_2;
  const _component_program = __nuxt_component_3;
  const _component_paper = __nuxt_component_4;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="">`);
  _push(ssrRenderComponent(_component_VisMis, null, null, _parent));
  _push(ssrRenderComponent(_component_ourStratgy, null, null, _parent));
  _push(ssrRenderComponent(_component_ourValues, null, null, _parent));
  _push(ssrRenderComponent(_component_program, null, null, _parent));
  _push(`<section class="flex flex-col items-center justify-center bg-white mt-8"><h2 class="text-[46px] font-extrabold text-OurGreen font-sans uppercase tracking-[0.12em] leading-relaxed md:py-24 py-10"> Our Model </h2><img class="mt-3 max-w-screen-lg px-2 object-cover w-full h-full"${ssrRenderAttr("src", _imports_0)}></section>`);
  _push(ssrRenderComponent(_component_paper, null, null, _parent));
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-BLL9LWdx.js.map