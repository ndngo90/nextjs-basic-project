import Image from "next/image";
import Link from "next/link";
const DrinkList = ({ drinks }) => {
  return (
    <div className=" mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {drinks.map((drink) => {
        const {
          idDrink: id,
          strDrinkThumb: thumbnail,
          strCategory: category,
        } = drink;
        return (
          <article key={id}>
            <Link href={`/drinks/${id}`}>
              <div className="relative h-48">
                <Image
                  src={thumbnail}
                  fill
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw"
                  alt={category}
                  className="rounded-md object-cover"
                />
              </div>
            </Link>
            <span className="mt-4 font-mono text-lg uppercase">{category}</span>
          </article>
        );
      })}
    </div>
  );
};
export default DrinkList;
