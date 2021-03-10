export async function getList() {
  const data = await fetch("https://jsonplaceholder.typicode.com/comments");
  return await data.json();
}
