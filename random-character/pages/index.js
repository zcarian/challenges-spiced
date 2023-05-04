import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data } = useSWR("/api/random-character", fetcher);
  return (
    <div>
      <h1>Random Character</h1>
      <p>First Name: {data?.firstName}</p>
      <p>Last Name: {data?.lastName}</p>
      <p>Age: {data?.age}</p>
      <p>Email: {data?.email}</p>
    </div>
  )
}
