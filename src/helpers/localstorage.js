const readLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data)
}

const saveLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export {readLocalStorage , saveLocalStorage}
