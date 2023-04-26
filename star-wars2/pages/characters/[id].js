import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";


export default function Character() {
  const route = useRouter();
  const {id} = route.query;
  
  const fetcher = async url => {
    const res = await fetch(url)
   
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      error.info = await res.json()
      error.status = res.status
      throw error
    }
   
    return res.json()
  }
  

  const {data, error, isLoading} = useSWR(
    `https://swapi.dev/api/people/${id}/`,
    fetcher
    );

  if(error) return <div>Falied to load</div>

  if(isLoading) return <div>Loading...</div>

  if(data){
    const {name, height, eye_color, birth_year} = data

    return (
      <Layout>
        <Card
          id={id}
          name={name}
          height={height}
          eyeColor={eye_color}
          birthYear={birth_year}
        />
      </Layout>
    );
  }

}
