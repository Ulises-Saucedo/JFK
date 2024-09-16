const { find: findSubjects } = useStrapi<Subject>();
const { find: findYears } = useStrapi<Year>();
const { find: findBooks } = useStrapi<Library>();

export async function getAllYears() {
  const { data } = await findYears("years");
  return data;
}

export async function getAllSubjects() {
  const { data } = await findSubjects("subjects");
  return data;
}

export async function getAllBooks() {
  return await findBooks("libraries", {
    pagination: {
      page: 1,
      pageSize: 10,
    },
    populate: ["pdf"],
  });
}
export async function getQueriedBooks(
  book: string,
  page = 1,
  year?: string,
  subject?: string
) {
  const filters = {
    ...(year ? { year: { year: { $eq: year } } } : {}),
    ...(subject ? { subject: { name: { $eq: subject } } } : {}),
    name: {
      $contains: book,
    },
  };

  return await findBooks("libraries", {
    filters,
    pagination: {
      page,
      pageSize: 10,
    },
    populate: ["pdf"],
  });
}
