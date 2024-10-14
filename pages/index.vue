<script setup lang="ts">
const images = [
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=640&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=640&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=640&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=640&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&w=640&q=75",
];
</script>
<template>
  <div>
    <Hero />
    <div class="mt-16 sm:mt-20 mb-14 lg:mb-32">
      <div
        class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
      >
        <div
          class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2"
          v-for="(img, idx) in images"
          :key="idx"
        >
        <!-- loading="lazy" -->
          <image

            width="3744"
            height="5616"
            class="absolute inset-0 h-full w-full object-cover"
            style="color: transparent"
            :src="img"
            :alt="`hero-img-${idx}`"
          />
        </div>
      </div>
    </div>
    <Blog />
  </div>
</template>



