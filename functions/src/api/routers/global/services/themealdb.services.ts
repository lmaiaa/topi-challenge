import axios from "axios";

const mealDb = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

mealDb.interceptors.response.use((response) => response.data);

export { mealDb };
