import { Image, Card, Divider } from "@nextui-org/react";
import StarsPopup from '@/components/starpopup';

const RecipeSummary = ({ recipe, id }) => {
  return (
    <Card shadow style={{ width: '600px', padding: '20px', textAlign: 'center' }}>
      <div>{recipe.title}</div>
      <Divider className="my-4" />
      <div style={{ margin: 'auto', maxWidth: '700px' }}>
        <Image 
        src={recipe.image} 
        alt={recipe.title}  
        width={900}
        radius
        />
      </div>
      <Divider className="my-4" />
      <div>
        <StarsPopup parent_recipe_id={id} />
      </div>
      <Divider className="my-4" />
      <div>
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
        {/* Render the recipe summary, https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/ */}
      </div>
    </Card>
  );
};

export default RecipeSummary;