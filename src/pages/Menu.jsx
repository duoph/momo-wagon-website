import React, { useState, useEffect } from "react";
import MenuCard from "../components/Menu/MenuCard";
import MenuItems from "../utils/MenuItems";

const Menu = () => {
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [selectedPreparation, setSelectedPreparation] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState(MenuItems);

  useEffect(() => {
    // Update the filtered menu whenever selectedFoodItem or selectedPreparation changes
    let tempMenu = MenuItems;

    if (selectedFoodItem) {
      tempMenu = tempMenu.filter((item) => item.type === selectedFoodItem);
    }

    if (selectedPreparation) {
      tempMenu = tempMenu.filter(
        (item) => item.preparation === selectedPreparation
      );
    }

    setFilteredMenu(tempMenu);
  }, [selectedFoodItem, selectedPreparation]);

  const applyFilter = () => {
    // No need to manually call applyFilter here
    // useEffect will handle the filtering when the state changes
  };

  const resetFilters = () => {
    setSelectedFoodItem(null);
    setSelectedPreparation(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:px-10 md:px-5 mb-5">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-momo-red text-[30px] font-bold">Menu</h1>

        {/* Search option */}
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <div className="w-full flex items-center justify-center bg-gray-200 rounded-2xl">
            <input
              type="text"
              className="bg-gray-200 rounded-2xl py-2 px-2 w-full"
            />
            <button
              className="bg-momo-primary px-3 rounded-2xl py-2 text-white"
              onClick={applyFilter}
            >
              Search
            </button>
          </div>
          {/* filter */}
          <div className="flex flex-col items-center justify-center gap-3 font-semibold">
            <div className="flex items-center justify-center gap-3 text-white">
              <button
                onClick={() => {
                  setSelectedFoodItem("Momos");
                  setSelectedPreparation(null);
                }}
                className={`${
                  selectedFoodItem === "Momos"
                    ? "bg-momo-primary border"
                    : "text-black border"
                } px-3 py-2 rounded-2xl`}
              >
                Momos
              </button>
              <button
                onClick={() => {
                  setSelectedFoodItem("Soups");
                  setSelectedPreparation(null);
                }}
                className={`${
                  selectedFoodItem === "Soups"
                    ? "bg-momo-primary border"
                    : "text-black border"
                } px-3 py-2 rounded-2xl`}
              >
                Soups
              </button>
              <button
                onClick={() => {
                  setSelectedFoodItem("Beverages");
                  setSelectedPreparation(null);
                }}
                className={`${
                  selectedFoodItem === "Beverages"
                    ? "bg-momo-primary border"
                    : "text-black border"
                } px-3 py-2 rounded-2xl`}
              >
                Beverages
              </button>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedPreparation("Steamed");
                  setSelectedFoodItem(null);
                }}
                className={`${
                  selectedPreparation === "Steamed"
                    ? "border bg-momo-primary"
                    : "border border-momo-primary"
                } px-3 py-2 rounded-2xl`}
              >
                Steamed
              </button>
              <button
                onClick={() => {
                  setSelectedPreparation("Fried");
                  setSelectedFoodItem(null);
                }}
                className={`${
                  selectedPreparation === "Fried"
                    ? "border bg-momo-primary"
                    : "border border-momo-primary"
                } px-3 py-2 rounded-2xl`}
              >
                Fried
              </button>
            </div>
            <button
              onClick={resetFilters}
              className={`${
                selectedFoodItem || selectedPreparation
                  ? "bg-momo-red text-white"
                  : "border border-momo-primary"
              } px-3 py-2 rounded-2xl`}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 flex-wrap">
        {filteredMenu.map((item, i) => (
          <MenuCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
