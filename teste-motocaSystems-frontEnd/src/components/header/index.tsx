import Profile from "@/assets/icon/profile.svg"
import House from "@/assets/icon/house.svg"

export default function header() {
    return (
        <div>
            <img src={Profile} alt="" />
            <img src={House} alt="" />
        </div>
    )
}