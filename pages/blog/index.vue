<script setup lang="ts"></script>
<template>
  <div>
    <PageHero
      title="Website Design, and Full Stack Development Articles."
      description="Get Website Design, Development, Nodejs, Vue and Typescript Related
          Articles, Tips, Web Hosting deals coupons and more."
    />
    <section class="blog">
      <div class="container mx-auto">
        <ContentList
          path="/blog"
          :query="{
            //   limit: -1,
            fields: ['title', 'image', 'date'],
            sort: [
              {
                date: -1,
              },
            ],
          }"
          v-slot="{ list }"
        >
          <div class="grid lg:grid-cols-3 gap-5">
            <CardBlog
              v-for="blog in list"
              :key="blog._path"
              class="lg:col-span-1"
              :blog="blog"
            />
          </div>
        </ContentList>
      </div>
    </section>
  </div>
</template>
