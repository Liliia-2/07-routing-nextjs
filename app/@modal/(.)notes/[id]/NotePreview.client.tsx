'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api';

interface NotePreviewClientProps {
  id: string;
}
const router = useRouter();

const closeModal = () => {
  router.back();
};

export default function NotePreviewClient({
    id,
}: NotePreviewClientProps) {
    const {
        data: note,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['note', id],
        queryFn: () => fetchNoteById(id),
        refetchOnMount: false,
    });
if (isLoading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Something went wrong.</p>;
}

if (!note) {
  return <p>Something went wrong.</p>;
}

return (
  <Modal onClose={closeModal}>
    <div>
      <h2>{note.title}</h2>
      <p>{note.tag}</p>
      <p>{note.content}</p>
      <p>
        {new Date(
          note.createdAt
        ).toLocaleDateString()}
      </p>
    </div>
  </Modal>
);
}