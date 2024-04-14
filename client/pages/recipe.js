import { useRouter } from "next/router";
import Sidebar from "./sidebar";

function Recipe({recipes}){
    const router = useRouter();
    const {title} = router.query;
    
    return (
        <div>
            {title}
        </div>
    )
}

export default Recipe;