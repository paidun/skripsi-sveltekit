export const ssr = true
// export const prerender = true;

export async function load() {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/reviews/review-text`);
  const res = await response.json();

  return res
}