 const req = {
    body: {
        name: "ichda",
        age: 20,
        major: "IT",
    },
 };
const { name, age, major } = req.body;
console.log(name, age, major);
