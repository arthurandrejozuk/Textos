export async function fetchApi(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ocorreu um erro: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

interface MethodProps {
  url: string;
  method: string;
  object: {};
  erro: string;
}

export async function defaultMethod({
  url,
  method,
  object,
  erro,
}: MethodProps) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  if (!response.ok) {
    throw new Error(erro);
  }
  setTimeout(() => {
    window.location.reload();
  }, 1000);
}
