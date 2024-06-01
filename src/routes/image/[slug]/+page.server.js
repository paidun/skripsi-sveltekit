export const ssr = true
// export const prerender = true;
export async function load({ params }) {
  const slug = params.slug
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/reviews/review-image/${slug}`);
  const res = await response.json();

  return {
    data: res,
    slug: params.slug
  }
}