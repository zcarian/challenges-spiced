import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ProductsPage() {
    const { data } = useSWR('/api/products', fetcher)
    
    if (!data) return <div>Loading...</div>
    
    return (
        <ul>
        {data.map((product) => (
            <li key={product.id}>
            {product.name}<br/>
            {product.description}<br/>
            {product.price} {product.currency}<br/>
            </li>
        ))}
        </ul>
    )
}