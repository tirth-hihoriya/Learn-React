import { ChangeProfile } from "./ChangeProfile";
import { useContext } from "react"
import { AppContext } from "../App"

export const Profile = () => {
    const { userName } = useContext(AppContext)
    return (
        <div>
            Profile, User is {userName}
            <ChangeProfile />

        </div>
    )
}