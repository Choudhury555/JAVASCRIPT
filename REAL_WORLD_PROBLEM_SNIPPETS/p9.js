// Deep clone a nested object safely

const original = {
    user: {
      name: "Abhisek",
      skills: ["JavaScript", "Node.js"]
    }
  };

  const deepcopy = JSON.parse(JSON.stringify(original));

  deepcopy.user.name = "new Name";
  deepcopy.user.skills.push("JAVA");

  console.log(original);//original won't be modified because we did a deep copy
  console.log(deepcopy);