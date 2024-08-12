export default defineNuxtRouteMiddleware(async (to, from) => {
  const { find } = useStrapi<Report>();

  const post = await find("reports", {
    filters: {
      slug: { $in: to.params.slug },
    },
  });

  if (post.data.length == 0) {
    throw new Error();
  }

  useHead({
    title: post.data[0].attributes.title,
    meta: [
      { name: "description", content: post.data[0].attributes.description },
    ],
  });
});
