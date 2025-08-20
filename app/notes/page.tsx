import { fetchNotes, FetchNotesResponse } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function Notes() {
    // Параметри початкового завантаження
    const pageStart = 1;
    const searchTerm = "";

    // Завантаження початкових нотаток
    const notesData: FetchNotesResponse = await fetchNotes(pageStart, searchTerm);

    // Передаємо дані у клієнтський компонент
    return (
        <NotesClient 
            initialPage={pageStart} 
            initialData={notesData} 
            initialQuery={searchTerm} 
        />
    );
}
