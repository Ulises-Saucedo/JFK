<script setup lang="ts">
import MarkdownIt from "markdown-it";

definePageMeta({
  middleware: ["get-post"],
});

const { find } = useStrapi<Report>();
const route = useRoute();
const { data } = await find("reports", {
  filters: {
    slug: { $in: route.params.slug },
  },
});
const post = data[0].attributes;
const markdown = new MarkdownIt();
</script>

<template>
  <div
    class="max-w-screen-xl mx-auto px-4 my-16 space-y-2 prose"
    v-html="markdown.render(post.content)"
  />
</template>
