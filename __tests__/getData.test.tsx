import { Axios } from "../src/configs/AxiosConfig";

it("getData devuelve un array de objetos con las propiedades esperadas", async () => {
  const { data } = await Axios.get("/products");
  const expectedProperties = [
    "createdAt",
    "product",
    "points",
    "image",
    "is_redemption",
    "id",
  ];
  expect(Array.isArray(data)).toBe(true);
  expect(
    data.every((item) => expectedProperties.every((prop) => prop in item))
  ).toBe(true);
});
