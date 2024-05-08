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
        className="max-w-xs"
        classNames={{
          base: "rounded-md bg-[#f57c00]", // Change background color of the base element
          listboxWrapper: "bg-[#f57c00]",
          innerWrapper:  "bg-[#f57c00]",
        }}
        listboxProps={{
          itemClasses: {
            base: [
              "rounded-md",
              "text-warning-500",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-warning-100",
              "dark:data-[hover=true]:bg-warning-50",
              "data-[selectable=true]:focus:bg-warning-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-warning-500",
            ],
          },
        }}
        popoverProps={{
          classNames: {
            base: "before:bg-warning-200",
            content: "p-0 border-small border-divider bg-background",
          },
        }}
        
        
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

