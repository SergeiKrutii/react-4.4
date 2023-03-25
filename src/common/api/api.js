const BASE_URL = "https://pixabay.com/api/?";
const API_KEY = "key=33125565-bcbdb194cdd5c3277aaf5f84a&";
const options = "orientation=horizontal&image_type=photo&per_page=12&";

export default class Fetch {
  constructor() {
    this.page = 1;
  }

  async dataFetch(query) {
    const respons = await fetch(
      `${BASE_URL}${API_KEY}${options}q=${query}&page=${this.page}`
    );

    return respons.ok
      ? respons.json()
      : Promise.reject(new Error(respons.Error));
  }

  set pagination(nextPage) {
    this.page = nextPage;
  }

  get pagination() {
    return this.page;
  }
}
