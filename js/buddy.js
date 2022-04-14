const loadBuddy = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => buddy(data));
};
loadBuddy();
const buddy = (friends) => {
  const getResults = friends.results;
  const userFriends = document.getElementById("userFriends");
  for (const user of getResults) {
    const p = document.createElement("p");
    p.innerText = `Name: ${user.name.title} ${user.name.first} ${user.name.last}
    Email: ${user.email}
    `;
    userFriends.appendChild(p);
  }
};
