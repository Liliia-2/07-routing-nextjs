import axios from 'axios';
import { Note, NoteTag } from '@/types/note';

const BASE_URL = 'https://notehub-public.goit.study/api';

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.baseURL = BASE_URL;

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams {
  page: number;
  search?: string;
  perPage?: number;
  tag?: string;
}

interface CreateNotePayload {
  title: string;
  content: string;
  tag: NoteTag;
}

export async function fetchNotes({
  page,
  search,
  tag,
  perPage = 12,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const response = await axios.get<FetchNotesResponse>('/notes', {
    params: {
      page,
      search,
      perPage,
      tag,
    },
  });

  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await axios.get<Note>(`/notes/${id}`);

  return response.data;
}

export async function createNote(
  payload: CreateNotePayload
): Promise<Note> {
  const response = await axios.post<Note>('/notes', payload);

  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await axios.delete<Note>(`/notes/${id}`);

  return response.data;
}