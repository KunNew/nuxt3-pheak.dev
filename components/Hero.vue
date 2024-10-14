<script setup lang="ts"></script>
<template>
  <div
    class="container mx-auto flex flex-col md:flex-row justify-between items-center lg:h-[calc(100vh-5rem)] relative w-full px-4 py-16 md:py-20 lg:py-0"
  >
    <div
      class="mx-auto w-full md:w-7/12 z-20 flex flex-col gap-y-4 items-center md:items-start"
    >
      <h1
        class="text-4xl lg:text-5xl text-center md:text-left font-bold tracking-tight lg:w-11/12"
      >
        Hello, I'm Pheak 👋🏼
      </h1>
      <p
        class="leading-relaxed mt-6 w-11/12 lg:w-8/12 text-center md:text-left text-lg text-zinc-600 dark:text-zinc-400"
      >
        A Front-end developer passionate about creating beautiful, user-friendly
        web applications.
      </p>
    </div>
    <div class="relative w-full md:w-5/12 mt-5">
      <div class="relative overflow-hidden">
        <NuxtImg
          src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=640&q=75"
          alt="hero img"
          class="w-full h-full rounded-2xl"
          :placeholder="[50, 25, 75, 5]"
        />
      </div>
    </div>
  </div>
</template>
