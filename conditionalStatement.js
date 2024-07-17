for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["vishnu", "Lucky", "Honey"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "Vishnu",
  age: 25,
  location: "Telangana",
  isAdmin: false,
};

for (const key in loggedInUser) {
  console.log(loggedInUser[key]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done");
