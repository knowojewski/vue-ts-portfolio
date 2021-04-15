<template>
  <li class="link-box" :class="{ active: linkProp.active }">
    <router-link
      v-if="linkProp.pageType === 'router'"
      :to="linkProp.pageRoute"
      class="link"
    >
      <span class="link-items">
        <span
          class="iconify"
          data-inline="false"
          :data-icon="linkProp.pageIcon"
        ></span>
        <span class="link-text">{{ linkProp.pageName }} </span>
      </span>
    </router-link>
    <a
      v-else-if="linkProp.pageType === 'socials'"
      :href="linkProp.pageRoute"
      class="link"
      target="_blank"
    >
      <span class="link-items">
        <span
          class="iconify"
          data-inline="false"
          :data-icon="linkProp.pageIcon"
        ></span>
        <span class="link-text">{{ linkProp.pageName }} </span>
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
