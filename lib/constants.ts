const generateDummyCustomers = (count: number) => {
  const customers = [];
  for (let i = 1; i <= count; i++) {
    customers.push({
      name: `Customer ${i.toString().padStart(2, "0")}`,
      title: `Title ${i}`,
      address: `Address ${i}, Some City, Some Country`,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      photos: new Array(9)
        .fill("")
        .map(() => `https://picsum.photos/150?random=${Math.random()}`),
    });
  }
  return customers;
};

export const dummyCustomers = generateDummyCustomers(1000);
