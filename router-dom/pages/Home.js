import { useContext } from "react"
import { AppContext } from "../App"

export const Home = () => {
    const { userName } = useContext(AppContext);
    return <h1> THIS is the HOME PAGE for {userName}</h1>
}