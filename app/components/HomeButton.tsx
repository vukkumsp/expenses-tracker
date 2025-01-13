import { HomeIcon } from "@/app/utils/IconComponents";
import { Link } from "expo-router";

const HomeButton = () => {
  return (
        <Link href={"./Day"}>
            <HomeIcon size={20}/>
        </Link>
    );
}

export default HomeButton;