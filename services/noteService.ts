import axios from 'axios';
import type { Note, NoteTag } from '../types/note';

axios.defaults.baseURL =
  'https://notehub-public.goit.study/api';

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams {
  page: number;
  search: string;
}

interface CreateNoteData {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async ({
  page,
  search,
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>(
    '/notes',
    {
      params: {
        page,
        perPage: 12,
        search,
      },
    },
  );

  return response.data;
};

export const createNote = async (
  noteData: CreateNoteData,
): Promise<Note> => {
  const response = await axios.post<Note>(
    '/notes',
    noteData,
  );

  return response.data;
};

export const deleteNote = async (
  id: string,
): Promise<Note> => {
  const response = await axios.delete<Note>(
    `/notes/${id}`,
  );

  return response.data;
};


