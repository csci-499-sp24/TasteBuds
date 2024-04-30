import { useRouter } from "next/router";
import Sidebar from "../components/sidebar";

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