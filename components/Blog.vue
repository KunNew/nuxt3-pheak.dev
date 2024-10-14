<template>
  <div class="container mx-auto">
    <ClientOnly>
      <Heading
        title="Blogs"
        :action="{
          text: 'View All',
          to: '/blog',
        }"
      >
        <template #title>
          <h2 class="md:w-1/2 text-center md:text-left text-3xl font-semibold">
            Web Development
          </h2>
          <span class="lg:text-primary-500 text-base font-normal"
            >Lessons Learned and Shared</span
          >
        </template>
        <template #action>
          <span>View All</span>
          <Icon
            name="heroicons:arrow-right"
            size="16"
            class="ml-1 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
          />
        </template>
      </Heading>
    </ClientOnly>
    <!-- Blog List  -->
    <ContentList
      path="/blog"
      :query="{
        limit: 5,
        fields: ['title', 'image', 'date'],
        sort: [
          {
            date: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <ClientOnly>
        <Swiper
          :modules="[SwiperAutoplay]"
          :space-between="20"
          :loop="true"
          :autoplay="{
            delay: 4000,
          }"
          :breakpoints="{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }"
        >
          <SwiperSlide v-for="blog in list" :key="blog._path">
            <CardBlog :blog="blog" />
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </ContentList>
    <!-- ./ Blog List  -->
  </div>
</template>

<script lang="ts" setup></script>
