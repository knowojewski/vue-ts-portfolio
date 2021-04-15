import { Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module
export default class UI extends VuexModule {
  smallerNav: boolean = false;
  darkMode: boolean = false;

  get getSmallerNav() {
    return this.smallerNav;
  }
  get getDarkMode() {
    return this.darkMode;
  }

  @Mutation
  makeNavSmaller(value: boolean): void {
    this.smallerNav = value;
  }

  @Mutation
  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
