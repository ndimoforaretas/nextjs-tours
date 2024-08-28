export const Testimonial = (params: any) => {
  return (
    <article>
      <p>{params.blok.comment}</p>
      <p>{params.blok.name}</p>
    </article>
  );
};
