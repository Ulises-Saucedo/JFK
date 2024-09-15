<script setup lang="ts">
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

useHead({
  title: "Noticias",
});

const response: Ref<any> = ref(null);
const currentPage: Ref<number> = ref(1);
const { find } = useStrapi<Report>();

const pagination = async (page: number) => {
  currentPage.value = page;

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
  <div
    class="absolute w-full top-0 left-0 min-h-screen bg-gradient-to-b from-blue-100 to-white"
  />

  <div class="relative my-16 max-w-screen-2xl mx-auto px-8">
    <div class="my-8">
      <h2 class="text-3xl font-bold text-center text-blue-600">
        Bienvenido a Nuestro Blog Escolar
      </h2>
      <p class="text-center text-lg mt-2">
        Un espacio para compartir conocimientos, experiencias y logros de
        nuestra comunidad educativa
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
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

    <Pagination
      v-slot="{ page }"
      :total="response.meta.pagination.total"
      :sibling-count="1"
      :default-page="1"
      show-edges
    >
      <PaginationList
        v-slot="{ items }"
        class="my-8 flex justify-center items-center gap-1"
      >
        <PaginationFirst @change-page="pagination(1)" />
        <PaginationPrev @change-page="pagination(currentPage - 1)" />

        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button
              class="w-9 h-9 p-0"
              :variant="item.value === page ? 'default' : 'outline'"
              @click="pagination(item.value)"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext @change-page="pagination(currentPage + 1)" />
        <PaginationLast
          @change-page="pagination(response.meta.pagination.pageCount)"
        />
      </PaginationList>
    </Pagination>
  </div>
</template>
