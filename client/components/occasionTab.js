// OccasionTab.js
import React, { useEffect, useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const OccasionTab = ({ handleListboxChange, triggerFetch }) => {
  const [occasions, setOccasions] = useState([]); 


  useEffect(() => {
    const fetchOccasions = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/getAllOccasions`);
        if (!response.ok) {
          throw new Error('Failed to fetch occasions');
        }
        const data = await response.json();
        setOccasions(data); // Set the fetched occasions in state
      } catch (error) {
        console.error('Error fetching occasions:', error);
      }
    };

    fetchOccasions(); // Call fetchOccasions function when the component mounts
  }, []);



  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        triggerFetch(); // Trigger fetch here
        event.stopPropagation(); // Prevent event from bubbling up
      }
    };

    const selectElement = document.getElementById('occasion-select');
    selectElement.addEventListener('keydown', handleKeyDown);

    return () => {
      selectElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerFetch]);

  return (
    <div className="mb-4">
      <Select
        id="occasion-select"
        label="Selected Occasion"
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
          handleListboxChange(selectedItems, 'occasion')
        }
      >
        {occasions.map((item) => (
          <SelectItem key={item.occasion_name} textValue={item.occasion_name}>
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <span className="text-small">{item.occasion_name}</span>
              </div>
            </div>
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default OccasionTab;

