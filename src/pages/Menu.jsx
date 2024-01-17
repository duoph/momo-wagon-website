import React, { useState, useEffect } from "react";
import MenuCard from "../components/Menu/MenuCard";
import MenuItems from "../utils/MenuItems";

const Menu = () => {
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [selectedPreparation, setSelectedPreparation] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState(MenuItems);

  useEffect(() => {
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

  const resetFilters = () => {
    setSelectedFoodItem(null);
    setSelectedPreparation(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:px-10 md:px-5 px-3 mb-5">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-momo-red text-[30px] font-bold">Menu</h1>
        {/* Search option */}
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <div className="flex flex-col items-center justify-center gap-3 font-semibold">
            <div className="flex items-center justify-center gap-3 text-white">
              {/* Momos filter */}
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

              {/* Beverages filter */}
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
              {/* Soups filter */}
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
            </div>

            {/* Sub-filters for Momos */}
            {selectedFoodItem === "Momos" && (
              <div className="flex items-center justify-center gap-3">
                {/* Steamed filter */}
                <button
                  onClick={() => {
                    setSelectedPreparation("Steamed");
                  }}
                  className={`${
                    selectedPreparation === "Steamed"
                      ? "border bg-momo-primary"
                      : "border border-momo-primary"
                  } px-3 py-2 rounded-2xl`}
                >
                  Steamed
                </button>

                {/* Fried filter */}
                <button
                  onClick={() => {
                    setSelectedPreparation("Fried");
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
            )}

            {/* Reset Filters button */}
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

      <div className="flex items-center w-full flex-wrap justify-center gap-2">
        {filteredMenu.map((item, i) => (
          <MenuCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
