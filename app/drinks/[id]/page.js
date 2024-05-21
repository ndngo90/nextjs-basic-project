import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const fetchSingleDrink = async (id) => {
  const res = await fetch(url + id);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await res.json();
  return data;
};
const SingleDrinkPage = async ({ params }) => {
  const data = await fetchSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mb-12 mt-8">
        back to drinks
      </Link>
      <h1 className="mb-8 text-4xl">{title}</h1>
      <div className="relative h-48 w-48">
        <Image
          src={imgSrc}
          fill
          alt={title}
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw"
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};
export default SingleDrinkPage;
