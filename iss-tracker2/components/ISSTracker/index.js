import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR, { useSWRConfig } from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {  
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
  
  const { data, error, isLoading, mutate} = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544",
    fetcher,
    { refreshInterval: 5000}
    )

  function handleRefresh() {
    mutate()
  }

  if (isLoading) return <div>loading...</div>

  if (error) return <div>failed to load</div>

  if(data){
    const {latitude, longitude} = data
    return (
      <main>
        <Map 
        longitude={longitude} latitude={latitude} 
        />
        <Controls
          longitude={longitude}
          latitude={latitude}
          onRefresh={handleRefresh}
        />
      </main>
    );
  }

}
