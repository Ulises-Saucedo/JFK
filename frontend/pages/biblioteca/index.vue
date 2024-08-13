<script setup lang="ts">
useHead({
  title: "Biblioteca",
});

const books = ref();
const selectedYear = ref("");
const selectedSubject = ref("");
const title = ref("");
const years = await getAllYears();
const subjects = await getAllSubjects();

books.value = await getAllBooks();

watch([title, selectedYear, selectedSubject], async () => {
  books.value = await getQueriedBooks(
    title.value,
    selectedYear.value,
    selectedSubject.value
  );
});
</script>

<template>
  <div class="my-16 max-w-screen-lg mx-auto px-8">
    <h2 class="text-black text-center text-5xl font-bold my-8">Biblioteca</h2>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-2">
      <input
        v-model="title"
        class="w-full px-4 py-1 ring-1 ring-gray-200 rounded shadow-sm md:col-span-4 focus:outline-none"
      />

      <select
        v-model="selectedYear"
        class="px-2 py-1 ring-1 ring-gray-200 rounded shadow-sm focus:outline-none"
      >
        <option value="">Todos los años</option>
        <option v-for="year in years" :key="year.id" :value="year.id">
          {{ year.attributes.year }}
        </option>
      </select>
      <select
        v-model="selectedSubject"
        class="px-2 py-1 ring-1 ring-gray-200 rounded shadow-sm focus:outline-none"
      >
        <option value="">Todos las materias</option>
        <option
          v-for="subject in subjects"
          :key="subject.id"
          :value="subject.id"
        >
          {{ subject.attributes.name }}
        </option>
      </select>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-8"
    >
      <article
        v-for="book in books.data"
        class="ring-1 ring-gray-100 rounded shadow-sm px-4 py-2"
      >
        <a
          :href="
            'http://localhost:1337' + book.attributes.pdf.data.attributes.url
          "
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
</template>
