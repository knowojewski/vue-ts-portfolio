<template>
  <div id="app" :class="{ 'dark-mode': getDarkMode }">
    <NavigationMain />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import NavigationMain from "@/components/navigation/NavigationMain.vue";
import { Getter, Mutation } from "vuex-class";

@Component({
  components: {
    NavigationMain,
  },
})
export default class App extends Vue {
  @Mutation makeNavSmaller!: any;
  @Getter getDarkMode!: boolean;
  @Mutation toggleDarkMode!: void;

  @Watch("$route")
  onRouteChange() {
    this.$route.path !== "/"
      ? this.makeNavSmaller(true)
      : this.makeNavSmaller(false);
  }
}
</script>

<style lang="scss">
@import "@/scss/components/app";
</style>
