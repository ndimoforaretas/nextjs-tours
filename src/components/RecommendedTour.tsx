import { log } from "console";
import Link from "next/link";

export const RecommendedTour = (props: any) => {
  return (
    <article className="bg-white rounded-lg shadow overflow-hidden">
      <img
        className="w-full object-cover aspect-video"
        src={props.story.content.main_image.filename}
        alt={props.story.content.main_image.alt}
      />
      <div className="p-8">
        <div className="flex gap-4 justify-between text-lg font-bold">
          <h3>{props.story.content.name}</h3>
          <p>
            {Number(props.story.content.price).toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
          {props.story.content.location}, Germany
        </p>
        <Link
          className="font-bold text-base mt-8 block underline"
          href={`/${props.story.full_slug}`}>
          View tour
        </Link>
      </div>
    </article>
  );
};
