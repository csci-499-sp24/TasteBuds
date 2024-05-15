import { Image, Card, Divider, Checkbox, Accordion, AccordionItem, AccordionButton, AccordionPanel} from "@nextui-org/react";
import StarsPopup from '@/components/starpopup';
import IngredientCard from "@/components/IngredientCard";

const RecipeSummary = ({ recipe, id, instructions, ingredients, tips }) => {

  return (
    <Card shadow style={{ width: '925px', padding: '20px', textAlign: 'center',
    border: '5px solid #FFE0B2', borderRadius: '10px'
    }}>
      <div style={{ 
        fontSize: '24px', 
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f57c00',
        borderRadius: '12px' // Added rounded corners
      }}>
        {recipe.title}
      </div>
      <Divider className="my-4" 
      style={{ height: '4px', backgroundColor: '#FF5252' }} />
      <div style={{ margin: 'auto', maxWidth: '700px' }}>
        <Image 
        src={recipe.image} 
        alt={recipe.title}  
        width={900}
        style={{ 
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
          objectFit: 'cover', // Maintain aspect ratio and cover container
          border: '5px solid #BDBDBD',
         }}
        />
      </div>
      <Divider className="my-4" />
      <div>
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
        {/* Render the recipe summary, https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/ */}
      </div>
      <Divider className="my-4" 
      style={{ height: '4px', backgroundColor: '#f57c00' }} />
      <div style={{ 
        fontSize: '18px', 
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#212121',
        marginBottom: '20px', // Adding bottom margin for spacing
      }}>
        Ingredients
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IngredientCard ingredients={ingredients}/>
      </div>
      <Divider className="my-4" 
      style={{ height: '4px', backgroundColor: '#FF5252' }} />
      <div style={{ 
        fontSize: '18px', 
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#212121',
        marginBottom: '20px', // Adding bottom margin for spacing
      }}>
        Instructions
      </div>
      <div >
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
      <Divider className="my-4" 
      style={{ height: '4px', backgroundColor: '#FF5252' }} />
      <div style={{ 
        fontSize: '18px', 
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#212121',
        marginBottom: '20px', // Adding bottom margin for spacing
      }}>
        Tips
      </div>
      <div>
        {tips && tips.length > 0 ? (
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>
                <p>{tip.tip}</p>
                <Divider className="my-4" />
              </li>
            ))}
          </ul>
        ) : (
          <p>No tips available</p>
        )}
      </div>
      <Divider className="my-4" 
      style={{ height: '4px', backgroundColor: '#FF5252' }} />
      <div>
        <StarsPopup parent_recipe_id={id}/>
      </div>
    </Card>
  );
};

export default RecipeSummary;