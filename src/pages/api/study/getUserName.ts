import useSWR from 'swr';

export default function getInfo(user: string | undefined) {
  const { data } = useSWR(
    typeof window === 'undefined' ? null : '/api/study/getUser?user=' + user,
  );

  return data?.username;
}
