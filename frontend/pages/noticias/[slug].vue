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
    class="max-w-screen-lg mx-auto my-16 space-y-2 markdown"
    v-html="markdown.render(post.content)"
  />
</template>

<style>
@media print {
  .markdown *,
  .markdown *:before,
  .markdown *:after {
    background: transparent !important;
    color: #303030 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  .markdown a,
  .markdown a:visited {
    text-decoration: underline;
  }

  .markdown a[href]:after {
    content: " (" attr(href) ")";
  }

  .markdown abbr[title]:after {
    content: " (" attr(title) ")";
  }

  .markdown a[href^="#"]:after,
  .markdown a[href^="javascript:"]:after {
    content: "";
  }

  .markdown pre,
  .markdown blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }

  .markdown thead {
    display: table-header-group;
  }

  .markdown tr,
  .markdown img {
    page-break-inside: avoid;
  }

  .markdown img {
    max-width: 100% !important;
  }

  .markdown p,
  .markdown h2,
  .markdown h3 {
    orphans: 3;
    widows: 3;
  }

  .markdown h2,
  .markdown h3 {
    page-break-after: avoid;
  }
}

.markdown html {
  font-size: 12px;
}

@media screen and (min-width: 32rem) and (max-width: 48rem) {
  .markdown html {
    font-size: 15px;
  }
}

@media screen and (min-width: 48rem) {
  .markdown html {
    font-size: 16px;
  }
}

.markdown body {
  line-height: 1.85;
}

.markdown p {
  font-size: 1rem;
  margin-bottom: 1.3rem;
}

.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4 {
  margin: 1.414rem 0 0.5rem;
  font-weight: inherit;
  line-height: 1.42;
}

.markdown h1 {
  margin-top: 0;
  font-size: 3.998rem;
}

.markdown h2 {
  font-size: 2.827rem;
}

.markdown h3 {
  font-size: 1.999rem;
}

.markdown h4 {
  font-size: 1.414rem;
}

.markdown h5 {
  font-size: 1.121rem;
}

.markdown h6 {
  font-size: 0.88rem;
}

.markdown small {
  font-size: 0.707em;
}

.markdown img,
.markdown canvas,
.markdown iframe,
.markdown video,
.markdown svg,
.markdown select,
.markdown textarea {
  max-width: 100%;
}

@import url(http://fonts.googleapis.com/css?family=Merriweather:300italic,300);

.markdown html {
  font-size: 18px;
  max-width: 100%;
}

.markdown body {
  color: #444;
  font-family: "Merriweather", Georgia, serif;
  margin: 0;
  max-width: 100%;
}

.markdown p,
.markdown
  *:not(div):not(img):not(body):not(html):not(li):not(blockquote):not(p) {
  margin: 1rem auto 1rem;
  max-width: 36rem;
  padding: 0.25rem;
}

.markdown div {
  width: 100%;
}

.markdown div img {
  width: 100%;
}

.markdown blockquote p {
  font-size: 1.5rem;
  font-style: italic;
  margin: 1rem auto 1rem;
  max-width: 48rem;
}

.markdown li {
  margin-left: 2rem;
}

.markdown h1 {
  padding: 4rem 0 !important;
}

.markdown p {
  color: #555;
  height: auto;
  line-height: 1.45;
}

.markdown pre,
.markdown code {
  font-family: Menlo, Monaco, "Courier New", monospace;
}

.markdown pre {
  background-color: #fafafa;
  font-size: 0.8rem;
  overflow-x: scroll;
  padding: 1.125em;
}

.markdown a,
.markdown a:visited {
  color: #3498db;
}

.markdown a:hover,
.markdown a:focus,
.markdown a:active {
  color: #2980b9;
}
</style>
