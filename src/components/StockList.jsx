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
                    const responses = await Promise.all(watchList.map((stock) => {
                        return finnHub.get("/quote", {
                            params: {
                                symbol: stock
                            }
                        })
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

    return <table className="table hover mt-5">
        <thead style={{ color: "rgb(79,89,102"}}>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Last</th>
                <th scope="col">Chg</th>
                <th scope="col">Chg%</th>
                <th scope="col">High</th>
                <th scope="col">Low</th>
                <th scope="col">Open</th>
                <th scope="col">Pclose</th>
            </tr>
        </thead>
        <tbody>
            {stock.map((stockData) => {
                return (
                    <tr className="table-row" key={stockData.symbol}>
                        <th scope="row">{stockData}.symbol</th>
                    </tr>
                )
            })}
        </tbody>
    </table>
}