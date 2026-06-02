interface Props {
  params: Promise<{
    slug: string[];
  }>;
}
export default async function Page({
  params,
}: Props) {
  const { slug } = await params;
  const tag = slug[0] === 'all'
    ? undefined
        : slug[0];
return (
    <div> Current tag: {tag}</div>
);
}