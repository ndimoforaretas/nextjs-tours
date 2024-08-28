export const Feature = (params: any) => {
  return (
    <article>
      <h2>{params.blok.headline}</h2>
      <p>{params.blok.content}</p>
    </article>
  );
};
