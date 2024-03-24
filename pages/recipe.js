import { useRouter } from "next/router";
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