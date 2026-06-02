'use client';
import { useParams, useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';

import NotePreview from '@/components/NotePreview/NotePreview';

export default function ModalPage(){
const router = useRouter();
const params = useParams();
const id = params.id as string;

  return (
    <Modal onClose={()=> router.back()}>
      <NotePreview id={id} />
    </Modal>
  );
}