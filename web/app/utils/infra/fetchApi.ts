export async function fetchApi(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ocorreu um erro: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
