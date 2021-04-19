<template>
  <div class="nav" :class="{ smaller: getSmallerNav }">
    <div class="nav__container">
      <nav class="nav__wrapper">
        <ul class="nav__links nav__links--main">
          <NavigationLink
            v-for="link in mainLinks"
            :key="link.pageName"
            :linkProp="link"
          />
        </ul>

        <ul class="nav__links nav__links--socials">
          <NavigationLink
            v-for="link in socialsLinks"
            :key="link.pageName"
            :linkProp="link"
          />
        </ul>
      </nav>
      <div class="nav__border"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import NavigationLink from "./NavigationLink.vue";
import { Getter } from "vuex-class";

export interface LinkInterface {
  pageType: string;
  pageRoute: string;
  pageName: string;
  pageIcon: string;
  active?: boolean;
}

@Component({
  components: {
    NavigationLink,
  },
})
export default class NavigationMain extends Vue {
  @Getter getSmallerNav!: boolean;

  mainLinks: LinkInterface[] = [
    {
      pageType: "router",
      pageRoute: "/",
      pageName: "Home",
      pageIcon: "ic:round-home",
      active: false,
    },
    {
      pageType: "router",
      pageRoute: "/about",
      pageName: "About",
      pageIcon: "ic:baseline-3p",
      active: false,
    },
    {
      pageType: "router",
      pageRoute: "/stack",
      pageName: "Stack",
      pageIcon: "ic:round-home-repair-service",
      active: false,
    },
    {
      pageType: "router",
      pageRoute: "/works",
      pageName: "Works",
      pageIcon: "ic:outline-web",
      active: false,
    },
    {
      pageType: "router",
      pageRoute: "/contact",
      pageName: "Mail",
      pageIcon: "ic:baseline-email",
      active: false,
    },
  ];

  socialsLinks: LinkInterface[] = [
    {
      pageType: "socials",
      pageRoute: "https://www.facebook.com/kamil.nowojewski",
      pageName: "Facebook",
      pageIcon: "bi:facebook",
    },
    {
      pageType: "socials",
      pageRoute: "https://www.github.com",
      pageName: "GitHub",
      pageIcon: "bi:github",
    },
    {
      pageType: "socials",
      pageRoute: "https://www.linkedin.com",
      pageName: "LinkedIn",
      pageIcon: "bi:linkedin",
    },
  ];

  @Watch("$route")
  onRouteChange() {
    this.checkIfActive();
  }

  checkIfActive() {
    this.mainLinks.forEach((link) => {
      link.pageRoute === this.$route.path
        ? (link.active = true)
        : (link.active = false);
    });
  }

  created() {
    this.checkIfActive();
  }
}
</script>

<style lang="scss">
@import "@/scss/components/navigation.scss";
</style>
