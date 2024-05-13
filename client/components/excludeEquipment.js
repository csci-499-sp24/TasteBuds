// Equipment.js
import React, { useEffect,useState} from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const EquipmentTab = ({ handleListboxChange, triggerFetch }) => {
  const [Equipments, setEquipments] = useState([]); 
  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/getAllEquipment`);
        if (!response.ok) {
          throw new Error('Failed to fetch equipment');
        }
        const data = await response.json();
        setEquipments(data); 
      } catch (error) {
        console.error('Error fetching equipment:', error);
      }
    };

    fetchEquipments();
  }, []);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        triggerFetch();
        event.stopPropagation();
      }
    };

    const selectElement = document.getElementById('equipment-select');
    selectElement.addEventListener('keydown', handleKeyDown);

    return () => {
      selectElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerFetch]);

  return (
    <div className="mb-4"> 
      <Select
        id="dishType-select"
        label="Selected DishType"
        selectionMode="multiple"
        className="max-w-xs"
        variant="bordered"
      style={{ backgroundColor: '#FFE0B2', color: '#212121', borderColor: '#FF5252' }}
      listboxProps={{
        itemClasses: {
          base: [
            "rounded-md",
            "text-[#FF9800]",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-[#FF9800]",
            "dark:data-[hover=true]:bg-[#FF9800]",
            "data-[selectable=true]:focus:bg-[#FF9800]",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-[#FF9800]",
          ],
        },
      }}
      popoverProps={{
        classNames: {
          base: "before:bg-[#FF5252]",
          content: "p-0 border-small border-divider bg-background",
        },
      }}
        isMultiline="true"
        onSelectionChange={(selectedItems) =>
          handleListboxChange(selectedItems, 'dishType')
        }
      >
        {DishTypes.map((item) => (
          <SelectItem key={item.dish_type_name} textValue={item.dish_type_name}>
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <span className="text-small">{item.dish_type_name}</span>
              </div>
            </div>
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default EquipmentTab;