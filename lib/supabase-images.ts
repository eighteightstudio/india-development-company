/**
 * Supabase image URL utility
 * Use getImageUrl() to construct public Supabase Storage URLs.
 * Replace placeholder URLs with real Supabase-hosted images when available.
 */

export const getImageUrl = (bucket: string, imagePath: string): string => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) {
    // Return a placeholder if Supabase URL is not configured
    return `https://placehold.co/800x500/0C4D8B/FFFFFF?text=${encodeURIComponent(imagePath)}`;
  }
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${imagePath}`;
};
