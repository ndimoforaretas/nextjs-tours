import { storyblokEditable } from "@storyblok/react/rsc";

export const Feature = (params: any) => {
  return (
    <div
      {...storyblokEditable(params.blok)}
      className="bg-white p-8 rounded-lg shadow">
      <h2 className="font-bold text-3xl truncate">{params.blok.headline}</h2>
      <p className="mt-6 text-lg">{params.blok.content}</p>
    </div>
  );
};
