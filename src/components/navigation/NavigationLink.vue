<template>
  <li class="nav__link-box" :class="{ active: linkProp.active }">
    <router-link
      v-if="linkProp.pageType === 'router'"
      :to="linkProp.pageRoute"
      class="nav__link"
    >
      <span class="nav__link-items">
        <span
          class="nav__link-icon iconify"
          data-inline="false"
          :data-icon="linkProp.pageIcon"
        ></span>
        <span class="nav__link-text">{{ linkProp.pageName }} </span>
      </span>
    </router-link>
    <a
      v-else-if="linkProp.pageType === 'socials'"
      :href="linkProp.pageRoute"
      class="nav__link"
      target="_blank"
    >
      <span class="nav__link-items">
        <span
          class="nav__link-icon iconify"
          data-inline="false"
          :data-icon="linkProp.pageIcon"
        ></span>
        <span class="nav__link-text">{{ linkProp.pageName }} </span>
      </span>
    </a>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import LinkInterface from "./NavigationMain.vue";

@Component
export default class NavigationLink extends Vue {
  @Prop(Object) linkProp!: LinkInterface;
}
</script>

<style></style>
