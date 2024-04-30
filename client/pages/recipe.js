import React, { useState, useEffect } from 'react';
import RecipeBox from '../components/RecipeBox';
import Link from 'next/link';
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