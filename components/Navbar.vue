<script lang="ts" setup>
const isOpen = ref(false);
import { vOnClickOutside } from "@vueuse/components";

const route = useRoute();

const navigation = ref<Navigation[]>([
  {
    label: "Blog",
    to: "/blog",
  },
]);
const closeDropdown = () => {
  isOpen.value = false;
};
watch(isOpen, () => {
  if (isOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>
<template>
  <nav
    class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md supports-backdrop-blur:bg-white/95 border-b border-slate-900/10 dark:border-slate-50/[0.06] -mb-px sticky top-0 z-50 lg:mb-0 shadow-gray-200 dark:shadow-gray-600"
  >
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-wrap items-center justify-between gap-3 h-auto py-4 lg:py-0 lg:h-16"
    >
      <div class="flex lg:flex-1 items-center gap-1.5">
        <Logo />
      </div>

      <div class="flex items-center gap-x-4 lg:hidden">
        <button class="toggle-button inline-flex" @click="isOpen = !isOpen">
          <Icon v-if="!isOpen" name="heroicons:bars-2" size="24" />
          <Icon v-else name="heroicons:x-mark" size="24" />
        </button>
        <ThemeSelector />
      </div>

      <ul
        class="flex-col items-end gap-y-4 hidden lg:flex lg:flex-row lg:items-center lg:gap-x-4"
      >
        <li class="relative" v-for="item in navigation" :key="item.label">
          <NuxtLink
            :to="item.to"
            @click="closeDropdown"
            class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
        <li class="relative">
          <ThemeSelector />
        </li>
      </ul>
      <!-- <div
        class="navbar-nav lg:w-auto"
        :class="isOpen ? 'block w-full' : 'hidden lg:block'"
        v-on-click-outside="closeDropdown"
      >
        <ul
          class="flex flex-col items-end gap-y-4 lg:flex-row lg:items-center lg:gap-x-8"
        >
          <li class="relative" v-for="item in navigation" :key="item.label">
            <NuxtLink
              :to="item.to"
              @click="closeDropdown"
              class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          <li class="relative">
            <ClientOnly>
              <ColorSwitcher />
            </ClientOnly>
          </li>
        </ul>
      </div> -->
    </div>
  </nav>
  <!-- Mobile Menu  -->
  <div
    class="fixed lg:hidden inset-0 z-40 backdrop-blur supports-backdrop-blur:bg-white/95 top-14 flex w-full flex-col justify-between"
    :class="isOpen ? 'block w-full' : 'hidden lg:block'"
  >
    <div
      class="flex h-full flex-col justify-between gap-y-2 overflow-y-auto bg-white/60 dark:bg-slate-900/60 px-6 ring-top-1 ring-white/5"
    >
      <nav class="flex flex-1 flex-col justify-evenly mt-4 py-4">
        <ul class="flex flex-col flex-1 gap-y-2">
          <li
            class="relative group"
            v-for="item in navigation"
            :key="item.label"
          >
            <NuxtLink
              :to="item.to"
              @click="closeDropdown"
              class="text-black dark:text-white group hover:text-white flex gap-x-3 rounded-xl p-2 text-sm leading-6 font-semibold group-hover:text-primary"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
