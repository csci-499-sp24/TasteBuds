import { Image, Card, Divider, Checkbox} from "@nextui-org/react";
import StarsPopup from '@/components/starpopup';

const RecipeSummary = ({ recipe, id, instructions }) => {
  return (
    <Card shadow style={{ width: '900px', padding: '20px', textAlign: 'center' }}>
      <div style={{ 
        fontSize: '24px', 
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f57c00'
      }}>
        {recipe.title}
      </div>
      <Divider className="my-4" />
      <div style={{ margin: 'auto', maxWidth: '700px' }}>
        <Image 
        src={recipe.image} 
        fallbackSrc="https://via.placeholder.com/300x200"
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
      <Divider className="my-4" />
      <div style={{ 
        fontSize: '18px', 
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#212121'
      }}>
        Instructions
      </div>
      <Divider className="my-4" />
      <div>
        {instructions.length > 0 ? (
          <ol style={{ textAlign: 'left' }}>
            {instructions.map((instruction, index) => (
              <li key={index}>
                <Checkbox>{instruction.step}</Checkbox>
                <Divider className="my-4"/>
              </li>
            ))}
          </ol>
        ) : (
          <p>No instructions available</p>
        )}
      </div>
    </Card>
  );
};

export default RecipeSummary;