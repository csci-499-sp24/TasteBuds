// https://dstackoverflow.com/questions/62556633/sequelize-6-import-models-from-file

module.exports = function (sequelize, DataTypes) {
/* --- MODELS and RELATIONSHP ---- */

/* RECIPE */
const Recipe = sequelize.define('Recipe', {
    recipe_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        allowNull: false, 
    },
    title: {
        type: DataTypes.STRING,
    },
    summary: {
        type: DataTypes.TEXT,
    },
    preparation_minutes: {
        type: DataTypes.INTEGER,
    },
    cooking_minutes: {
        type: DataTypes.INTEGER,
    },
    ready_in_minutes: {
        type: DataTypes.INTEGER,
    },
    servings: {
        type: DataTypes.INTEGER,
    },
    price_per_serving: {
        type: DataTypes.FLOAT,
    },
    image: {
        type: DataTypes.STRING, 
    },
    image_type: {
        type: DataTypes.STRING,
    },
    very_healthy: {
        type: DataTypes.BOOLEAN,
    },
    cheap: {
        type: DataTypes.BOOLEAN,
    },
    weight_watcher_smart_points: {
        type: DataTypes.INTEGER,
    },
    sustainable: {
        type: DataTypes.BOOLEAN,
    },
    source_name: {
        type: DataTypes.STRING,
    },
    source_url:{
        type: DataTypes.STRING,
    },
    totalPrice: {
        type: DataTypes.VIRTUAL,
        get() {
            return this.getDataValue('servings') * this.getDataValue('price_per_serving') / 100;
        },
        set(value) {
            throw new Error('Do not try to set the total price value!');
        }
    }
}, {
    tableName: 'recipes',  
    timestamps: false, 
});

/* CUISINE */
const Cuisines = sequelize.define('Cuisines', {
    cuisine_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cuisine_name: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'cuisines',
    timestamps: false,
});

const RecipeCuisines = sequelize.define('RecipeCuisines', {
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'recipes',
        key: 'recipe_id'
      }
    },
    cuisine_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'cuisines',
        key: 'cuisine_id'
      }
    },
  }, {
    tableName: 'recipe_cuisine',
    timestamps: false
  });
  
// Define the ER of Cuisines and Recipe (M:M)
Cuisines.belongsToMany(Recipe, { through: RecipeCuisines, foreignKey: 'cuisine_id' });
Recipe.belongsToMany(Cuisines, { through: RecipeCuisines, foreignKey: 'recipe_id' });

/* DIET */
const Diet = sequelize.define('Diet', {
    diet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
    },
    diet_name: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'diets',
    timestamps: false,
});
const RecipeDiet = sequelize.define('RecipeDiet', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
      },
      diet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'diets',
          key: 'diet_id'
        }
      }, 
}, {
    tableName: 'recipe_diet',
    timestamps: false
});
// Define the ER of Diet and Recipe (M:M)
Diet.belongsToMany(Recipe, { through: RecipeDiet, foreignKey: 'diet_id' });
Recipe.belongsToMany(Diet, { through: RecipeDiet, foreignKey: 'recipe_id' });

/* DISH TYPE */
 const DishType = sequelize.define('DishType', { 
    dish_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    dish_type_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'dishTypes',
    timestamps: false,
});
const RecipeDishType = sequelize.define('RecipeDishType', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
      },
      dish_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'dishTypes',
          key: 'dish_type_id:'
        }
      }
}, {
    tableName: 'recipe_dishType',
    timestamps: false
});
// Define the ER of DishType and Recipe (M:M)
Recipe.belongsToMany(DishType, { through: RecipeDishType, foreignKey: 'recipe_id' });
DishType.belongsToMany(Recipe, { through: RecipeDishType, foreignKey: 'dish_type_id' });

/* OCCASION TYPE */
const Occasions = sequelize.define('Occasions', {
    occasion_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    occasion_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'occasions',
    timestamps: false,
});
const RecipeOccasions = sequelize.define('RecipeOccasions', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
      },
      occasion_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'occasions',
          key: 'occasion_id'
        }
      }
}, {
    tableName: 'recipe_occasion',
    timestamps: false
});
// Define the ER of Occasions and Recipe (M:M)
Occasions.belongsToMany(Recipe, { through: RecipeOccasions, foreignKey: 'occasion_id' });
Recipe.belongsToMany(Occasions, { through: RecipeOccasions, foreignKey: 'recipe_id' });

/* TIPS */
const Tips = sequelize.define('Tips', {
    tip_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
    },
    tip: {
        type: DataTypes.TEXT,
    },
    recipe_id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
            model: 'Recipe', 
            key: 'recipe_id',
        }
    }
}, {
    tableName: 'tips', 
    timestamps: false
});
// Define the ER of Tips and Recipe (M:1)
Tips.belongsTo(Recipe, { foreignKey: 'recipe_id' });
Recipe.hasMany(Tips, { foreignKey: 'recipe_id' });

/* INGREDIENTS AND RECIPE INGREDIENTS */
const Ingredients = sequelize.define('Ingredients', {
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    standard_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'ingredients',
    timestamps: false
});
const RecipeIngredients = sequelize.define('RecipeIngredients', {
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'ingredients',
          key: 'ingredient_id'
        }
      },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
    },
    specialized_name: {
        type: DataTypes.STRING
    },
    metric_unit: {
        type: DataTypes.STRING
    },
    metric_amount: {
        type: DataTypes.DOUBLE
    },
    us_unit: {
        type: DataTypes.STRING
    },
    us_amount: {
        type: DataTypes.DOUBLE
    }
}, {
    tableName: 'recipe_ingredient',
    timestamps: false
});
// Define the ER of Ingredients and Recipe (M:M)
RecipeIngredients.belongsTo(Ingredients, { foreignKey: 'ingredient_id' });
RecipeIngredients.belongsTo(Recipe, { foreignKey: 'recipe_id' });
Recipe.hasMany(RecipeIngredients, { foreignKey: 'recipe_id' });
Ingredients.hasMany(RecipeIngredients, { foreignKey: 'ingredient_id' });

/* INSTRUTIONS, EQUIPMENT, INSTRUCTIONS-INGREDIENTS, and INSTRUCATION-LENGTH */
const Instructions = sequelize.define('Instructions', {
    instruction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    step_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    step: {
        type: DataTypes.TEXT
    },
    is_secondary_recipe: {
        type: DataTypes.BOOLEAN,
        defaultValue: false 
    }
}, {
    tableName: 'instructions', 
    timestamps: false
});
const InstructionsIngredients = sequelize.define('InstructionsIngredients', {
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    instruction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
}, {
    tableName: 'instruction_ingredient',
    timestamps: false
});
// Define the ER of Instructions and Recipe (M:1), Instructions and Ingredients (M:M)
Instructions.belongsTo(Recipe, { foreignKey: 'recipe_id' });
Instructions.belongsToMany(Ingredients, { through: InstructionsIngredients, foreignKey: 'instruction_id' });
Ingredients.belongsToMany(Instructions, { through: InstructionsIngredients, foreignKey: 'ingredient_id' });

const Equipment = sequelize.define('Equipment', {
    equipment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'equipments',
    timestamps: false
});
const RecipeEquipment = sequelize.define('RecipeEquipment', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
      },
      equipment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'equipments',
          key: 'equipment_id'
        }
      },
}, {
    tableName: 'recipe_equipment',
    timestamps: false
});
// Define the ER of Recipe and Equipment (M:M)
Equipment.belongsToMany(Recipe, { through: RecipeEquipment, foreignKey: 'equipment_id' });
Recipe.belongsToMany(Equipment, { through: RecipeEquipment, foreignKey: 'recipe_id' });

const InstructionsEquipment = sequelize.define('InstructionsEquipment', {
    equipment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'equipments',
          key: 'equipment_id'
        }
    },
    instruction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'instructions',
          key: 'rinstruction_id'
        }
      },
}, {
    tableName: 'instruction_equipment',
    timestamps: false
});
// Define the ER of Instructions and Equipment (M:M)
Equipment.belongsToMany(Instructions, { through: InstructionsEquipment, foreignKey: 'equipment_id' });
Instructions.belongsToMany(Equipment, { through: InstructionsEquipment, foreignKey: 'instruction_id' });


const InstructionLength = sequelize.define('InstructionLength', {
    instruction_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        references: {
            model: 'Instructions', 
            key: 'instruction_id'
        }
    },
    length_number: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    length_unit: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'instructionLength', 
    timestamps: false 
});
// Define the relationship with Instructions and Length (1:1)
InstructionLength.belongsTo(Instructions, { foreignKey: 'instruction_id', primaryKey: true });


/* NUTRITION TABLES */

/* NUTRIENTS */
const Nutrients = sequelize.define('Nutrients', {
    nutrient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'nutrients',
    timestamps: false
});
/* RECIPE NUTRIENTS */
const RecipeNutrients = sequelize.define('RecipeNutrients', {
    nutrient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: 'nutrients',
            key: 'nutrient_id'
        }
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    percent_of_daily_needs: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    tableName: 'recipe_nutrient',
    timestamps: false
});
// Define the relationship with Nutrients and Recipe (M:M), 
Recipe.belongsToMany(Nutrients, { through: RecipeNutrients, foreignKey: 'recipe_id' });
Nutrients.belongsToMany(Recipe, { through: RecipeNutrients, foreignKey: 'nutrient_id' });

/* RECIPE INGREDIENTS NUTRIENTS */
const RecipeIngredientsNutrients = sequelize.define('RecipeIngredientsNutrients', {
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    nutrient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    ingredient_amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    nutrient_amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    ingredient_unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    percent_of_daily_needs: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'recipe_ingredient_nutrient',
    timestamps: false
});
// Define the relationships with Recipes, Nutrients, and Ingredients table (M:M)
Ingredients.belongsToMany(Nutrients, { through: RecipeIngredientsNutrients, foreignKey: 'ingredient_id', otherKey: 'nutrient_id' });
Nutrients.belongsToMany(Ingredients, { through: RecipeIngredientsNutrients, foreignKey: 'nutrient_id', otherKey: 'ingredient_id' });

Recipe.belongsToMany(Ingredients, { through: RecipeIngredientsNutrients, foreignKey: 'recipe_id', otherKey: 'ingredient_id' });
Ingredients.belongsToMany(Recipe, { through: RecipeIngredientsNutrients, foreignKey: 'ingredient_id', otherKey: 'recipe_id' });

Recipe.belongsToMany(Nutrients, { through: RecipeIngredientsNutrients, foreignKey: 'recipe_id', otherKey: 'nutrient_id' });
Nutrients.belongsToMany(Recipe, { through: RecipeIngredientsNutrients, foreignKey: 'nutrient_id', otherKey: 'recipe_id' });

// Define the relationships between RecipeIngredientsNutrients and other tables
RecipeIngredientsNutrients.belongsTo(Recipe, { foreignKey: 'recipe_id', targetKey: 'recipe_id' });
RecipeIngredientsNutrients.belongsTo(Ingredients, { foreignKey: 'ingredient_id', targetKey: 'ingredient_id' });
RecipeIngredientsNutrients.belongsTo(Nutrients, { foreignKey: 'nutrient_id', targetKey: 'nutrient_id' });

// RecipeIngredientsNutrients.belongsTo(RecipeIngredients, {foreignKey: 'ingredient_id'})
// RecipeIngredients.hasMany(RecipeIngredientsNutrients, {foriengKey: 'ingredient_id'})
/* FLAVONOIDS */
const Flavonoids = sequelize.define('Flavonoids', {
    flavonoid_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'flavonoids',
    timestamps: false
});
/* RECIPE FLAVONOIDS */
const RecipeFlavonoids = sequelize.define('RecipeFlavonoids', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
    },
    flavonoid_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'flavonoids',
            key: 'flavonoid_id'
        }
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'recipe_flavonoid',
    timestamps: false
});
// Define the  the relationship with Recipes and Flavonoids tabel (M:M)
Recipe.belongsToMany(Flavonoids, { through: RecipeFlavonoids, foreignKey: 'recipe_id' });
Flavonoids.belongsToMany(Recipe, { through: RecipeFlavonoids, foreignKey: 'flavonoid_id' });

/* PROPERTIES  */
const Properties = sequelize.define('Properties', {
    property_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'properties',
    timestamps: false
});
/* RECIPE FLAVONOIDS */
const RecipeProperties = sequelize.define('RecipeProperties', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
      },
    property_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: 'properties',
            key: 'property_id'
          }
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'recipe_property',
    timestamps: false
});
// Define the many-to-many relationship between Recipe and Properties (M:M)
Recipe.belongsToMany(Properties, { through: RecipeProperties, foreignKey: 'recipe_id' });
Properties.belongsToMany(Recipe, { through: RecipeProperties, foreignKey: 'property_id' });

/* WEIGHT PER SERVING */
const WeightPerServing = sequelize.define('WeightPerServing', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Recipe',
            key: 'recipe_id'
        }
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'weightPerServing',
    timestamps: false
});

// Define the relationship with Recipe and WeightPerServing (1:1)
WeightPerServing.belongsTo(Recipe, { foreignKey: 'recipe_id' });

/* CALORIC BREAKDOWN */
const CaloricBreakdown = sequelize.define('CaloricBreakdown', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Recipe',
            key: 'recipe_id'
        }
    },
    percent_protein: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    percent_fat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    percent_carbs: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'caloricBreakdowns',
    timestamps: false,
});

// Define the relationship with Recipe and CaloricBreakdown (1:1)
CaloricBreakdown.belongsTo(Recipe, { foreignKey: 'recipe_id' });


const Comments = sequelize.define('Comments', {
    comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    firebase_user_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
            model: 'Recipe', 
            key: 'recipe_id',
        }
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
      },
}, {
    tableName: 'comments', 
    timestamps: false
});
// Define the ER of Comments and Recipe (M:1)
Comments.belongsTo(Recipe, { foreignKey: 'recipe_id' });
Recipe.hasMany(Comments, { foreignKey: 'recipe_id' });

const Ratings = sequelize.define('Ratings', {
    rating_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        //omitNull: true,
        // https://stackoverflow.com/questions/15737949/how-does-autoincrement-work-in-nodejss-sequelize
    },
    firebase_user_id: {
        type: DataTypes.STRING,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
    },
    rating: {
        type: DataTypes.INTEGER,
    }
}, {
    tableName: 'ratings',
    timestamps: false,
});

Recipe.hasMany(Ratings, {foreignKey: 'recipe_id'})

/* END OF MODELS*/
    return {
        Recipe,
        Cuisines,
        RecipeCuisines,
        Diet,
        RecipeDiet,
        DishType,
        RecipeDishType,
        Occasions,
        RecipeOccasions,
        Tips,
        Ingredients,
        RecipeIngredients,
        Instructions,
        InstructionsIngredients,
        Equipment,
        RecipeEquipment,
        InstructionsEquipment,
        InstructionLength,
        Nutrients,
        RecipeNutrients,
        RecipeIngredientsNutrients,
        Flavonoids,
        RecipeFlavonoids,
        Properties,
        RecipeProperties,
        WeightPerServing,
        CaloricBreakdown,   
        Comments, 
        Ratings
    }
}