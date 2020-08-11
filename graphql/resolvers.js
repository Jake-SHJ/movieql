const people = [
  {
    id: "0",
    name: "Jake",
    age: 29,
    gender: "male",
  },
  {
    id: "1",
    name: "Tom",
    age: 29,
    gender: "male",
  },
  {
    id: "2",
    name: "Vicky",
    age: 31,
    gender: "female",
  },
];

const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
  },
};

export default resolvers;
