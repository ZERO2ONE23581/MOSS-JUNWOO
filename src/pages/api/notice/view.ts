import useSWR from 'swr';

export default function view(id: string | string[] | undefined) {
  const { data } = useSWR(
    typeof window === 'undefined' ? null : `/api/notice/?id=${id}`,
  );
  return data;
}
