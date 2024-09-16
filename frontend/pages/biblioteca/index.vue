<script setup lang="ts">
useHead({
  title: "Biblioteca",
});

const router = useRouter();
const route = useRoute();
const books = ref();
const selectedYear = ref("");
const selectedSubject = ref("");
const title = ref("");
const currentPage = ref(1);
const years = await getAllYears();
const subjects = await getAllSubjects();

books.value = await getAllBooks();

const filters = (
  title: string,
  page: number,
  year: string,
  subject: string
) => {
  router.push({
    query: {
      ...(title ? { title: title as string } : {}),
      page: page as number,
      ...(year ? { year: year as string } : {}),
      ...(subject ? { subject: subject as string } : {}),
    },
  });
};

watch(
  [title, currentPage, selectedYear, selectedSubject],
  ([oldTitle, _, oldYear, oldSubject], [newTitle, __, newYear, newSubject]) => {
    if (
      oldTitle != newTitle ||
      oldYear != newYear ||
      oldSubject != newSubject
    ) {
      currentPage.value = 1;
    }

    filters(
      title.value,
      currentPage.value,
      selectedYear.value,
      selectedSubject.value
    );
  }
);

watch(
  () => route.query,
  async (to, from) => {
    const filters = {
      title: (to.title as string) || "",
      page: parseInt(to.page as string) || 1,
      year: (to.year as string) || "",
      subject: (to.subject as string) || "",
    };

    books.value = await getQueriedBooks(
      filters.title,
      filters.page,
      filters.year,
      filters.subject
    );
  }
);

(() => {
  router.push({
    query: {},
  });
})();
</script>

<template>
  <div class="my-16 max-w-screen-xl mx-auto px-4 sm:px-8">
    <h2 class="text-center text-5xl font-bold my-8">Biblioteca</h2>
    <div class="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" size="icon">
            <Icon name="tabler:filter" class="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filtros</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ul class="space-y-2">
            <li>
              <select
                v-model="selectedYear"
                class="w-full px-2 py-1 ring-1 ring-gray-200 rounded shadow-sm focus:outline-none"
              >
                <option value="">Todos los años</option>
                <option
                  v-for="year in years"
                  :key="year.id"
                  :value="year.attributes.year"
                >
                  {{ year.attributes.year }}
                </option>
              </select>
            </li>
            <li>
              <select
                v-model="selectedSubject"
                class="w-full px-2 py-1 ring-1 ring-gray-200 rounded shadow-sm focus:outline-none"
              >
                <option value="">Todas las materias</option>
                <option
                  v-for="subject in subjects"
                  :key="subject.id"
                  :value="subject.attributes.name"
                >
                  {{ subject.attributes.name }}
                </option>
              </select>
            </li>
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>

      <input
        v-model="title"
        placeholder="Programación, Informática, etc..."
        class="w-full flex-1 px-4 py-1 ring-1 ring-gray-200 rounded shadow-sm"
      />
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-8"
    >
      <article
        v-for="book in books.data"
        class="ring-1 ring-gray-100 rounded shadow-sm px-4 py-2"
      >
        <a
          :href="book.attributes.pdf.data.attributes.url.replace('gs://', '')"
          class="text-blue-500 underline"
        >
          {{ book.attributes.name }}
        </a>
        <time class="block text-gray-500">
          Publicado el:
          {{ $dayjs(book.attributes.createdAt).utc().format("DD/MM/YYYY") }}
        </time>
      </article>
    </div>
  </div>

  <Pagination
    v-slot="{ page }"
    :total="books.meta.pagination.total"
    :sibling-count="1"
    :default-page="1"
    show-edges
  >
    <PaginationList
      v-slot="{ items }"
      class="my-8 flex justify-center items-center gap-1"
    >
      <PaginationFirst @change-page="currentPage = 1" />
      <PaginationPrev @change-page="currentPage = currentPage - 1" />

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
            @click="currentPage = item.value"
          >
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext @change-page="currentPage = currentPage + 1" />
      <PaginationLast
        @change-page="currentPage = books.meta.pagination.pageCount"
      />
    </PaginationList>
  </Pagination>
</template>
