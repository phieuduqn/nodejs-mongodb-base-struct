import repo from "./repository";

async function show() {
  return repo.show();
}

async function update(data) {
  return repo.update(data);
}

export default {
  show,
  update,
};
