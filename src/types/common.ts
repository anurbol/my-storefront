export interface PageProps<P> {
  params: P,
  searchParams?: Record<string, string | string[]>
}