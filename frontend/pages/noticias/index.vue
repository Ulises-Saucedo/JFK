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
  <div class="my-16 max-w-screen-lg mx-auto px-8">
    <h2 class="text-black text-center text-5xl font-bold my-8">Noticias</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ReportCard v-for="post in response.data" :post="post" :key="post.id" />
    </div>

    <div class="flex justify-center items-center my-8 gap-4">
      <Pagination
        v-for="page in response.meta.pagination.pageCount"
        @change-page="pagination"
        :page="page"
      />
    </div>
  </div>
</template>
