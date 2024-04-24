// OccasionTab.js
import React, { useState, useEffect } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const OccasionTab = ({ handleListboxChange, triggerFetch }) => {
  const [occasions, setOccasions] = useState([]); // State variable to hold the occasions
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
        color="warning"
        className="max-w-xs"
        isMultiline="true"
        onSelectionChange={(selectedItems) =>
          handleListboxChange(selectedItems, 'occasion')
        }
      >
        {/* Cuisine options */}
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

