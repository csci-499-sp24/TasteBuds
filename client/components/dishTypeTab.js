// dishTypeTab.js
import React, { useState, useEffect } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const DishTypeTab = ({ handleListboxChange, triggerFetch }) => {
  const [DishTypes, setDishTypes] = useState([]); 
  useEffect(() => {
    const fetchDishTypes = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/getAllDishTypes`);
        if (!response.ok) {
          throw new Error('Failed to fetch DishTypes');
        }
        const data = await response.json();
        setDishTypes(data); 
      } catch (error) {
        console.error('Error fetching DishTypes:', error);
      }
    };

    fetchDishTypes();
  }, []);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        triggerFetch(); // Trigger fetch here
        event.stopPropagation(); // Prevent event from bubbling up
      }
    };

    const selectElement = document.getElementById('dishType-select');
    selectElement.addEventListener('keydown', handleKeyDown);

    return () => {
      selectElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerFetch]);

  return (
    <div className="mb-4"> {/* Add margin top */}
      <Select
        id="dishType-select"
        label="Selected DishType"
        selectionMode="multiple"
        color="warning"
        className="max-w-xs"
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

export default DishTypeTab;