import React, { useEffect } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const CuisineTab = ({ handleListboxChange, triggerFetch }) => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        triggerFetch(); 
        event.stopPropagation(); 
      }
    };

    const selectElement = document.getElementById('cuisine-select');
    selectElement.addEventListener('keydown', handleKeyDown);

    return () => {
      selectElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerFetch]);

  return (
    <Select
      id="cuisine-select"
      label="Selected Cuisine"
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
  );
};

export default CuisineTab;
