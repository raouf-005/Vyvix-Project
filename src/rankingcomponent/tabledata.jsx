
const users = [
    {
      key: "1",
      name: "Tony Reichert",
      age: 55,
      status: 10,
      
    },
    {
      key: "2",
      name: "Zoey Lang",
      age: 33,
      status:20,

    },
    {
      key: "3",
      name: "Jane Fisher",
      age: 22,
      status: 100,
    },
    {
      key: "4",
      name: "William Howard",
      age: 12,
      status: 30,
    },
  ];
  
  const columns = [
    {
      key: "name",
      label: "NAME",
      allowsSorting: true,
    },
    {
      key: "age",
      label: "AGE",
        allowsSorting: true,
    },
    {
      key: "status",
      label: "STATUS",
        allowsSorting: true,
    },
  ];
  

export {columns,users}