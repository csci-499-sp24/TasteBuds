import { Image, Card } from "@nextui-org/react";
import StarsPopup from '@/components/starpopup';

const RecipeSummary = ({ recipe }) => {
  return (
    <Card shadow style={{ width: '600px', padding: '20px', textAlign: 'center' }}>
      <div>{recipe.title}</div>
      <div style={{ margin: 'auto', maxWidth: '700px' }}>
        <Image src={recipe.image} alt={recipe.title} />
      </div>
      <div className="stars-container">
        {/* Replace StarsPopup with your NextUI equivalent */}
        <StarsPopup />
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
        {/* Render the recipe summary, https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/ */}
      </div>
    </Card>
  );
};

export default RecipeSummary;