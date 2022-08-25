const fetchedUserData = {
  name: 'John',
  age: 34,
  job: {
    description: 'lorem ipsume desc',
    salary: '$2222',
  },
};

console.log(fetchedUserData?.job?.description);
