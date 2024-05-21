import DrinkList from "@/components/drinks/drink-list";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const fetchDrinks = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await res.json();
  return data.drinks;
};

const DrinksPage = async () => {
  const drinks = await fetchDrinks(url);
  return (
    <div>
      <h1 className="mt-8 text-2xl underline">DrinksPage</h1>
      <DrinkList drinks={drinks} />
    </div>
  );
};
export default DrinksPage;
