import {useState, useEffect} from "react"
import finnHub from "../components/apis/finnHub"

export const StockList = () => {
    const [stock, setStock] = useState()
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"])

        useEffect(() => {
            let isMounted = true
            const fetchData = async () => {
                const responses = []
                try {
                    const responses = Promise.all
                    Promise.all(
                  finnHub.get("/quote", {
                    params: {
                        symbol: "GOOGL"
                    }
                  }), finnHub.get("/quote", {
                    params: {
                        symbol: "MSFT"
                    }
                }), finnHub.get("/quote", {
                    params: {
                        symbol: "AMZN"
                    }
                }))
                  console.log(responses)
                  if (isMounted) {
                    setStock(responses)
                  }
                } catch (err) {

            }
          }
          fetchData()

          return () => (isMounted = false)
        }, [])

    return <div>StockList</div>
}