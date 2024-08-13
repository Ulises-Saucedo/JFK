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
    populate: ["pdf"],
  });
}
export async function getQueriedBooks(
  book: string,
  year?: string,
  subject?: string
) {
  const filters = {
    ...(year ? { year: { $in: year } } : {}),
    ...(subject ? { subject: { $in: subject } } : {}),
    name: {
      $contains: book,
    },
  };

  return await findBooks("libraries", {
    filters,
    populate: ["pdf"],
  });
}

// const post = await find("reports", {
//   filters: {
//     slug: { $in: to.params.slug },
//   },
// });
