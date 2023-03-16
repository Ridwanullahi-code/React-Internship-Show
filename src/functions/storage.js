const userArray = [];

export default function store(data) {
  userArray.push(data);
  localStorage.setItem('user', JSON.stringify(userArray));
}
