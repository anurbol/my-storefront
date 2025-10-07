export interface PageProps<P> {
  params: Promise<P>,
  searchParams?: Promise<Record<string, string | string[]>>
}