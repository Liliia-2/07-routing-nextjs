'use client';

import { useParams, useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import NotePreviewClient from './NotePreview.client';

export default function ModalPage() {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  return (
    <Modal onClose={() => router.back()}>
      <NotePreviewClient id={id} />
    </Modal>
  );
}