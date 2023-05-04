import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DetailsPage(){
    const router = useRouter();
    const {id} = router.query;
    const { data } = useSWR(`/api/products/${id}`, fetcher);
    console.log(data);
    return (
        <div>
        {data.name}<br/>
        {data.description}<br/>
        {data.category}<br/>
        {data.price} {data.currency}<br/>
        </div>
    )
}