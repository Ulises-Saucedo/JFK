<script setup lang="ts">
useHead({
  title: "Noticias",
});

const response: Ref<any> = ref(null);
const { find } = useStrapi<Report>();

const pagination = async (page: number) => {
  response.value = await find("reports", {
    pagination: {
      page,
      pageSize: 10,
    },
    sort: "createdAt:DESC",
  });
};

await pagination(1);
</script>

<template>
  <div class="my-16 max-w-screen-xl mx-auto px-8">
    <h2 class="text-center text-5xl font-bold my-8">Blog Escolar</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <Card v-for="post in response.data">
        <CardHeader>
          <div class="bg-blue-500 p-4 rounded overflow-hidden">
            <img
              src="/logotipo.png"
              alt="Logotipo de la escuela"
              class="w-20 mx-auto"
            />
          </div>
        </CardHeader>
        <CardContent>
          <NuxtLink
            :to="`/noticias/${post.attributes.slug}`"
            class="text-pretty font-bold underline"
          >
            {{ post.attributes.title }}
          </NuxtLink>

          <p class="text-gray-500 line-clamp-3">
            {{ post.attributes.description }}
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
