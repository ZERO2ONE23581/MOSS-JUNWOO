import useSWR from 'swr';

export default function View(id: string | string[] | undefined) {
  const { data } = useSWR(
    typeof window === 'undefined' ? null : `/api/notice/?id=${id}`,
  );
  return data;
}
