import { fetchNoteById } from "@/lib/api";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import NotePreviewClient from "./NotePreview.client";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", params.id],
    queryFn: () => fetchNoteById(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreviewClient id={params.id} />
    </HydrationBoundary>
  );
}
