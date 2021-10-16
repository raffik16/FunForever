// Import custom directives here
import Vue from "vue";
import IntersectionObserver from "~/directives/IntersectionObserver";
import { VuePrlxDirective } from "vue-prlx";
let hasLoadedDirectives = false;

if (!hasLoadedDirectives) {
  Vue.directive("intersection-observer", IntersectionObserver);
  Vue.directive("prlx", VuePrlxDirective);
  hasLoadedDirectives = true;
}
