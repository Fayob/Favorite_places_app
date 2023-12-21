import { useEffect, useState } from "react"
import { useIsFocused } from "@react-navigation/native"

import PLacesList from "../components/Places/PlacesList"
import { fetchPlaces } from "../util/database"

function AllPlaces({route}) {
  const [loadedPlaces, setLoadedPlaces] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    async function loadedPlaces() {
      const places = await fetchPlaces()
      setLoadedPlaces(places)
    }
    if (isFocused && route.params) {
      loadedPlaces()
      // setLoadedPlaces(currPlaces => [...currPlaces, route.params.place])
    }
  }, [isFocused, route])

  return <PLacesList places={loadedPlaces} />
}

export default AllPlaces