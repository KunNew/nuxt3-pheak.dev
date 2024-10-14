<script setup lang="ts">
// @ts-ignore
import VLazyImage from "v-lazy-image";
const slug = useRoute().params.slug as string;

const { data } = await useAsyncData(slug, () =>
  queryContent(`/blog/${slug}`).findOne()
);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog post not found",
  });
}
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-12">
    <article class="container mx-auto" v-if="data">
      <!-- Blog Header  -->
      <header class="mx-auto max-w-3xl mb-10">
        <h1 class="text-center font-semibold lg:!text-5xl">{{ data.title }}</h1>
        <!-- Post Meta  -->
        <div class="flex justify-center mt-5">
          <div class="inline-flex">
            <Icon name="heroicons:calendar" class="mr-2" size="16" />
            <span>{{ formatDate(data.date) }}</span>
          </div>
          <div class="inline-flex ml-4">
            <Icon name="heroicons:user" class="mr-2" size="16" />
            <span>Pheak</span>
          </div>
        </div>
        <!-- ./ Post Meta   -->
        <!-- Post Thumbnail -->
        <div
          class="relative mt-5 h-[200px] md:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <v-lazy-image
            :src="data.image"
            :alt="data.title"
            class="absolute w-full h-full object-cover rounded-3xl overflow-hidden"
            width="334px"
            height="188px"
          ></v-lazy-image>
          <!-- loading="lazy"
          :placeholder="[50, 25, 75, 5]" -->
        </div>
        <!-- ./ Post Thumbnail  -->
      </header>
      <!-- ./ Blog Header  -->

      <!-- Blog Content  -->
      <div class="mx-auto max-w-3xl">
        <!-- <Toc
          v-if="data.body.toc?.links"
          :links="data.body.toc.links"
          class="mb-5"
        /> -->

        <ContentRenderer
          :value="data"
          class="content blog prose md:prose-lg lg:prose-xl dark:prose-invert !max-w-none"
        />
      </div>
      <!-- ./ Blog Content  -->
    </article>
  </div>
</template>

<style scoped>
/* Only reference the code not the pre code */
code:not(pre code) {
  @apply bg-white/20 py-px px-1 rounded;
}

.v-lazy-image {
  filter: blur(5px);
  transition: filter 1.6s;
  will-change: filter;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
