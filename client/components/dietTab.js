// DietTab.js
import React, { useEffect } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const DietTab = ({ handleListboxChange, triggerFetch }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        triggerFetch(); // Trigger fetch here
        event.stopPropagation(); // Prevent event from bubbling up
      }
    };

    const selectElement = document.getElementById('diet-select');
    selectElement.addEventListener('keydown', handleKeyDown);

    return () => {
      selectElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerFetch]);

  
  return (
    <div className="mb-4"> {/* Add margin top */}
    <Select
      id="diet-select"
      label="Selected Diet"
      selectionMode="multiple"
      color="warning"
      isMultiline="true"
      className="max-w-xs"
      onSelectionChange={(selectedItems) =>
        handleListboxChange(selectedItems, "diet")
      }
    >
      {[
        { key: "dairy free",  name: "Dairy Free" },
        { key: "gluten free", name: "Gluten Free" },
        { key: "ketogenic",  name: "Keto" },
        { key: "lacto ovo vegetarian", name: "Lacto-Ovo Vegetarian" },
        { key: "lacto vegetarian", name: "Lacto Vegetarian" },
        { key: "Low Fodmap",  name: "Low Fodmap" },
        { key: "ovo vegetarian", name: "Ovo Vegetarian" },
        { key: "paleolithic", name: "Paleolithic" },
        { key: "pescatarian", name: "Pescatarian" },
        { key: "primal", name: "Primal" },
        { key: "vegan" , name: "Vegan" },
        { key: "vegetarian", name: "Vegetarian"},
        ].map((item) => (
        <SelectItem
          key={item.key}
          textValue={item.key}
        >
          <div className="flex gap-2 items-center">
            <div className="flex flex-col">
              <span className="text-small">{item.key}</span>
            </div>
          </div>
        </SelectItem>
      ))}
    </Select>
    </div>
  );
};

export default DietTab;
