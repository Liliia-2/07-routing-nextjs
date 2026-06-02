interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function FilterLayout({
  children,
  sidebar,
}: LayoutProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
      }}
    >
      {sidebar}

      {children}
    </div>
  );
}