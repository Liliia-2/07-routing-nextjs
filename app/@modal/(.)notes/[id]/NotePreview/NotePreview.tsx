'use client';

interface NotePreviewProps {
  id: string;
}

export default function NotePreview({
  id,
}: NotePreviewProps) {
  return (
    <div>
      <h2>Note Preview</h2>
      <p>ID: {id}</p>
    </div>
  );
}