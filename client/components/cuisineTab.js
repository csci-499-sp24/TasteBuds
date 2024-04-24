// CuisineTab.js
import React, { useEffect } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const CuisineTab = ({ handleListboxChange, triggerFetch }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        triggerFetch(); // Trigger fetch here
        event.stopPropagation(); // Prevent event from bubbling up
      }
    };

    const selectElement = document.getElementById('cuisine-select');
    selectElement.addEventListener('keydown', handleKeyDown);

    return () => {
      selectElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerFetch]);

  return (
    <div className="mb-4"> {/* Add margin top */}
      <Select
        id="cuisine-select"
        label="Selected Cuisine"
        selectionMode="multiple"
        color="warning"
        className="max-w-xs"
        isMultiline="true"
        onSelectionChange={(selectedItems) =>
          handleListboxChange(selectedItems, 'cuisine')
        }
      >
        {[{key: "African"},{key: "American"},{key: "Asian"},{key: "British"},{key: "Cajun"},{key: "Caribbean"},{key: "Chinese"},{key: "Eastern European"},{key: "European"},{key: "French"},{key: "German"},{key: "Greek"},{key: "Indian"},{key: "Irish"},{key: "Italian"},{key: "Japanese"},{key: "Jewish"},{key: "Korean"},{key: "Latin American"},{key: "Nordic"},{key: "Mediterranean"},{key: "Mexican"},{key: "Middle Eastern"},{key: "Spanish"},{key: "Thai"},{key: "Vietnamese"}].map((item) => (
          <SelectItem key={item.key} textValue={item.key}>
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

export default CuisineTab;

