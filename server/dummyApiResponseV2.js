const dummyApiResponseV2 = [
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 28,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 0,
        "healthScore": 43,
        "creditsText": "blogspot.com",
        "sourceName": "blogspot.com",
        "pricePerServing": 279.64,
        "extendedIngredients": [
            {
                "id": 93647,
                "aisle": "Pasta and Rice",
                "image": "pastina.jpg",
                "consistency": "SOLID",
                "name": "sale e pepe",
                "nameClean": "pastina",
                "original": "Sale e pepe",
                "originalName": "Sale e pepe",
                "amount": 1.0,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 12061,
                "aisle": "Nuts",
                "image": "almonds.jpg",
                "consistency": "SOLID",
                "name": "almonds",
                "nameClean": "almonds",
                "original": "A handful of almonds",
                "originalName": "almonds",
                "amount": 1.0,
                "unit": "handful",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "handful",
                        "unitLong": "handful"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "handful",
                        "unitLong": "handful"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "boquerones",
                "original": "4/5 Anchovies (or Sardines)",
                "originalName": "Anchovies (or Sardines)",
                "amount": 0.8,
                "unit": "",
                "meta": [
                    "(or Sardines)"
                ],
                "measures": {
                    "us": {
                        "amount": 0.8,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.8,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consistency": "SOLID",
                "name": "anchovies",
                "nameClean": "boquerones",
                "original": "4/5 Anchovies (or Sardines)",
                "originalName": "Anchovies (or Sardines)",
                "amount": 0.8,
                "unit": "",
                "meta": [
                    "(or Sardines)"
                ],
                "measures": {
                    "us": {
                        "amount": 0.8,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.8,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11124,
                "aisle": "Produce",
                "image": "sliced-carrot.png",
                "consistency": "SOLID",
                "name": "pealed carrots",
                "nameClean": "carrot",
                "original": "2 raw pealed carrots",
                "originalName": "raw pealed carrots",
                "amount": 2.0,
                "unit": "",
                "meta": [
                    "raw"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11135,
                "aisle": "Produce",
                "image": "cauliflower.jpg",
                "consistency": "SOLID",
                "name": "quarter of a cauliflower",
                "nameClean": "cauliflower",
                "original": "A quarter of a raw cauliflower",
                "originalName": "A quarter of a raw cauliflower",
                "amount": 1.0,
                "unit": "serving",
                "meta": [
                    "raw"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "extra virgin olive oil",
                "nameClean": "extra virgin olive oil",
                "original": "Extra virgin olive oil",
                "originalName": "Extra virgin olive oil",
                "amount": 1.0,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "dressing: extra virgin olive oil",
                "nameClean": "extra virgin olive oil",
                "original": "Dressing: Extra virgin olive oil, Salt and pepper, 3 Tbs Lemon juice",
                "originalName": "Dressing: Extra virgin olive oil, Salt and pepper, Lemon juice",
                "amount": 3.0,
                "unit": "Tbs",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 9152,
                "aisle": "Produce",
                "image": "lemon-juice.jpg",
                "consistency": "LIQUID",
                "name": "lemon juice",
                "nameClean": "lemon juice",
                "original": "3 Tbs Lemon juice",
                "originalName": "Lemon juice",
                "amount": 3.0,
                "unit": "Tbs",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "Tbs",
                        "unitLong": "Tbs"
                    }
                }
            },
            {
                "id": 11959,
                "aisle": "Produce",
                "image": "arugula-or-rocket-salad.jpg",
                "consistency": "SOLID",
                "name": "rocket",
                "nameClean": "arugula",
                "original": "Rocket (arugula) 50gr",
                "originalName": "Rocket (arugula)",
                "amount": 50.0,
                "unit": "gr",
                "meta": [
                    "(arugula)"
                ],
                "measures": {
                    "us": {
                        "amount": 1.764,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 50.0,
                        "unitShort": "gr",
                        "unitLong": "grs"
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consistency": "SOLID",
                "name": "salt and pepper",
                "nameClean": "salt and pepper",
                "original": "Salt and pepper",
                "originalName": "Salt and pepper",
                "amount": 1.0,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            }
        ],
        "id": 3,
        "title": "Carrots, Cauliflower And Anchovies",
        "readyInMinutes": 45,
        "servings": 1,
        "sourceUrl": "http://saladpride.blogspot.com/2011/06/carrots-cauliflower-and-anchovies.html",
        "image": "https://spoonacular.com/recipeImages/3-556x370.jpg",
        "imageType": "jpg",
        "nutrition": {
            "nutrients": [
                {
                    "name": "Calories",
                    "amount": 947.47,
                    "unit": "kcal",
                    "percentOfDailyNeeds": 47.37
                },
                {
                    "name": "Fat",
                    "amount": 73.02,
                    "unit": "g",
                    "percentOfDailyNeeds": 112.34
                },
                {
                    "name": "Saturated Fat",
                    "amount": 9.05,
                    "unit": "g",
                    "percentOfDailyNeeds": 56.57
                },
                {
                    "name": "Carbohydrates",
                    "amount": 64.59,
                    "unit": "g",
                    "percentOfDailyNeeds": 21.53
                },
                {
                    "name": "Net Carbohydrates",
                    "amount": 54.51,
                    "unit": "g",
                    "percentOfDailyNeeds": 19.82
                },
                {
                    "name": "Sugar",
                    "amount": 11.23,
                    "unit": "g",
                    "percentOfDailyNeeds": 12.47
                },
                {
                    "name": "Cholesterol",
                    "amount": 3.84,
                    "unit": "mg",
                    "percentOfDailyNeeds": 1.28
                },
                {
                    "name": "Sodium",
                    "amount": 300.3,
                    "unit": "mg",
                    "percentOfDailyNeeds": 13.06
                },
                {
                    "name": "Protein",
                    "amount": 17.15,
                    "unit": "g",
                    "percentOfDailyNeeds": 34.3
                },
                {
                    "name": "Vitamin A",
                    "amount": 21574.02,
                    "unit": "IU",
                    "percentOfDailyNeeds": 431.48
                },
                {
                    "name": "Vitamin E",
                    "amount": 16.87,
                    "unit": "mg",
                    "percentOfDailyNeeds": 112.46
                },
                {
                    "name": "Vitamin K",
                    "amount": 104.48,
                    "unit": "µg",
                    "percentOfDailyNeeds": 99.5
                },
                {
                    "name": "Manganese",
                    "amount": 1.03,
                    "unit": "mg",
                    "percentOfDailyNeeds": 51.62
                },
                {
                    "name": "Fiber",
                    "amount": 10.08,
                    "unit": "g",
                    "percentOfDailyNeeds": 40.32
                },
                {
                    "name": "Vitamin C",
                    "amount": 32.6,
                    "unit": "mg",
                    "percentOfDailyNeeds": 39.51
                },
                {
                    "name": "Magnesium",
                    "amount": 124.62,
                    "unit": "mg",
                    "percentOfDailyNeeds": 31.15
                },
                {
                    "name": "Vitamin B2",
                    "amount": 0.48,
                    "unit": "mg",
                    "percentOfDailyNeeds": 28.21
                },
                {
                    "name": "Iron",
                    "amount": 4.59,
                    "unit": "mg",
                    "percentOfDailyNeeds": 25.48
                },
                {
                    "name": "Potassium",
                    "amount": 869.25,
                    "unit": "mg",
                    "percentOfDailyNeeds": 24.84
                },
                {
                    "name": "Folate",
                    "amount": 95.03,
                    "unit": "µg",
                    "percentOfDailyNeeds": 23.76
                },
                {
                    "name": "Phosphorus",
                    "amount": 228.18,
                    "unit": "mg",
                    "percentOfDailyNeeds": 22.82
                },
                {
                    "name": "Calcium",
                    "amount": 213.97,
                    "unit": "mg",
                    "percentOfDailyNeeds": 21.4
                },
                {
                    "name": "Copper",
                    "amount": 0.42,
                    "unit": "mg",
                    "percentOfDailyNeeds": 21.16
                },
                {
                    "name": "Vitamin B3",
                    "amount": 3.38,
                    "unit": "mg",
                    "percentOfDailyNeeds": 16.91
                },
                {
                    "name": "Vitamin B6",
                    "amount": 0.28,
                    "unit": "mg",
                    "percentOfDailyNeeds": 13.88
                },
                {
                    "name": "Vitamin B1",
                    "amount": 0.18,
                    "unit": "mg",
                    "percentOfDailyNeeds": 11.92
                },
                {
                    "name": "Zinc",
                    "amount": 1.6,
                    "unit": "mg",
                    "percentOfDailyNeeds": 10.66
                },
                {
                    "name": "Vitamin B5",
                    "amount": 0.8,
                    "unit": "mg",
                    "percentOfDailyNeeds": 7.99
                },
                {
                    "name": "Selenium",
                    "amount": 3.89,
                    "unit": "µg",
                    "percentOfDailyNeeds": 5.56
                }
            ],
            "properties": [
                {
                    "name": "Glycemic Index",
                    "amount": 158.83,
                    "unit": ""
                },
                {
                    "name": "Glycemic Load",
                    "amount": 19.49,
                    "unit": ""
                },
                {
                    "name": "Inflammation Score",
                    "amount": -10.0,
                    "unit": ""
                },
                {
                    "name": "Nutrition Score",
                    "amount": 30.319565217391304,
                    "unit": "%"
                }
            ],
            "flavonoids": [
                {
                    "name": "Cyanidin",
                    "amount": 0.74,
                    "unit": "mg"
                },
                {
                    "name": "Petunidin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Delphinidin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Malvidin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Pelargonidin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Peonidin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Catechin",
                    "amount": 0.38,
                    "unit": "mg"
                },
                {
                    "name": "Epigallocatechin",
                    "amount": 0.78,
                    "unit": "mg"
                },
                {
                    "name": "Epicatechin",
                    "amount": 0.18,
                    "unit": "mg"
                },
                {
                    "name": "Epicatechin 3-gallate",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Epigallocatechin 3-gallate",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Theaflavin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Thearubigins",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Eriodictyol",
                    "amount": 2.27,
                    "unit": "mg"
                },
                {
                    "name": "Hesperetin",
                    "amount": 6.51,
                    "unit": "mg"
                },
                {
                    "name": "Naringenin",
                    "amount": 0.75,
                    "unit": "mg"
                },
                {
                    "name": "Apigenin",
                    "amount": 0.05,
                    "unit": "mg"
                },
                {
                    "name": "Luteolin",
                    "amount": 0.2,
                    "unit": "mg"
                },
                {
                    "name": "Isorhamnetin",
                    "amount": 2.94,
                    "unit": "mg"
                },
                {
                    "name": "Kaempferol",
                    "amount": 17.86,
                    "unit": "mg"
                },
                {
                    "name": "Myricetin",
                    "amount": 0.06,
                    "unit": "mg"
                },
                {
                    "name": "Quercetin",
                    "amount": 4.5,
                    "unit": "mg"
                },
                {
                    "name": "Theaflavin-3,3'-digallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Theaflavin-3'-gallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Theaflavin-3-gallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Gallocatechin",
                    "amount": 0.0,
                    "unit": "mg"
                }
            ],
            "ingredients": [
                {
                    "id": 93647,
                    "name": "sale e pepe",
                    "amount": 1.0,
                    "unit": "serving",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 197.68,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 1.96,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Fluoride",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 1.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 51.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 39.48,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 1.81,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 1.96,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 6.89,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 41.44,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                },
                {
                    "id": 12061,
                    "name": "almonds",
                    "amount": 1.0,
                    "unit": "handful",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 1.09,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 173.7,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 1.3,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 80.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.69,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.3,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 14.97,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 81.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 1.23,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 51.0
                        },
                        {
                            "name": "Choline",
                            "amount": 15.63,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 219.9,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.34,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 9.48,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 13.2,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.94,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 2.73,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.14,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 1.11,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 3.75,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 7.68,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.31,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 6.36,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.06,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 1.14,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 6.48,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 3.69,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 144.3,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.3,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                },
                {
                    "id": 15001,
                    "name": "anchovies",
                    "amount": 0.8,
                    "unit": "",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.45,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 4.19,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 4.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 3.33,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 0.15,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 1.31,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 1.17,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Potassium",
                            "amount": 12.26,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.04,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.29,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.06,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.1,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 1.92,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 0.65,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.04,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.02,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.05,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 5.57,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 1.6,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                },
                {
                    "id": 15001,
                    "name": "anchovies",
                    "amount": 0.8,
                    "unit": "",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.45,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 4.19,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 4.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 3.33,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 0.15,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 1.31,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 1.17,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Potassium",
                            "amount": 12.26,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.04,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.29,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.06,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.1,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 1.92,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 0.65,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.04,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.02,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.05,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 5.57,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 1.6,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                },
                {
                    "id": 11124,
                    "name": "pealed carrots",
                    "amount": 2.0,
                    "unit": "",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 1.2,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 50.02,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 5.78,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 40.26,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Fluoride",
                            "amount": 3.9,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.17,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 84.18,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 0.29,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 14.64,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.12,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 51.0
                        },
                        {
                            "name": "Choline",
                            "amount": 10.74,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 390.4,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.07,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 23.18,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.17,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.29,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 8.27,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.33,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.37,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 3.42,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.81,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 1.13,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 7.2,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.08,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.04,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 11.69,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Lycopene",
                            "amount": 1.22,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.12,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 42.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 20381.32,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 16.1,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                },
                {
                    "id": 11135,
                    "name": "quarter of a cauliflower",
                    "amount": 1.0,
                    "unit": "serving",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 0.25,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.22,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Fluoride",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.3,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.15,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.01,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 51.0
                        },
                        {
                            "name": "Choline",
                            "amount": 0.44,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 2.99,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.57,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.03,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 0.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.48,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.05,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.44,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.16,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                },
                {
                    "id": 1034053,
                    "name": "extra virgin olive oil",
                    "amount": 1.0,
                    "unit": "serving",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 123.76,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.14,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.28,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 14.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Choline",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.14,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 10.22,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.08,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 2.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 1.93,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 1.47,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 8.43,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                },
                {
                    "id": 1034053,
                    "name": "dressing: extra virgin olive oil",
                    "amount": 3.0,
                    "unit": "Tbs",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 371.28,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.42,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.84,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 42.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Choline",
                            "amount": 0.13,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.42,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 30.66,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.24,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 6.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 5.8,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 4.41,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 25.28,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                },
                {
                    "id": 9152,
                    "name": "lemon juice",
                    "amount": 3.0,
                    "unit": "Tbs",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 9.9,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 1.13,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 2.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.45,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 0.11,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 2.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.05,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 51.0
                        },
                        {
                            "name": "Choline",
                            "amount": 2.3,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 46.35,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 9.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 2.97,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.06,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.14,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.07,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 0.16,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 17.42,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 3.11,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 3.6,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 2.7,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                },
                {
                    "id": 11959,
                    "name": "rocket",
                    "amount": 50.0,
                    "unit": "gr",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.15,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 12.5,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 1.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 80.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.16,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 13.5,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 0.33,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 23.5,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.15,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Choline",
                            "amount": 7.65,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 184.5,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 48.5,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.23,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 1.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.22,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.73,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.8,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.22,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 1.29,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 7.5,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.04,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 1.83,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.16,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 26.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 1186.5,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 54.5,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                },
                {
                    "id": 1102047,
                    "name": "salt and pepper",
                    "amount": 1.0,
                    "unit": "serving",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.91
                        },
                        {
                            "name": "Calories",
                            "amount": 0.0,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 47.37
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 12.47
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.12,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.4
                        },
                        {
                            "name": "Fluoride",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 51.62
                        },
                        {
                            "name": "Sodium",
                            "amount": 193.79,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.06
                        },
                        {
                            "name": "Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 112.34
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.15
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 5.56
                        },
                        {
                            "name": "Choline",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 24.84
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 28.21
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 23.76
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.88
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.66
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 19.82
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.99
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.48
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 40.32
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 112.46
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.16
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 1.28
                        },
                        {
                            "name": "Protein",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 34.3
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 39.51
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.92
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 56.57
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 21.53
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.66
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 22.82
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 431.48
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 99.5
                        }
                    ]
                }
            ],
            "caloricBreakdown": {
                "percentProtein": 6.97,
                "percentFat": 66.78,
                "percentCarbs": 26.25
            },
            "weightPerServing": {
                "amount": 367,
                "unit": "g"
            }
        },
        "summary": "Carrots, Cauliflower And Anchovies might be just the main course you are searching for. For <b>$2.8 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. Watching your figure? This dairy free and pescatarian recipe has <b>943 calories</b>, <b>17g of protein</b>, and <b>73g of fat</b> per serving. A mixture of sale e pepe, quarter of a cauliflower, extra virgin olive oil, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe is liked by 1 foodies and cooks. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by saladpride.blogspot.com. With a spoonacular <b>score of 83%</b>, this dish is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/carrots-cauliflower-and-anchovies-1228191\">Carrots, Cauliflower And Anchovies</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-anchovies-and-tomatoes-23\">Cauliflower, Anchovies and Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/orecchiette-with-cauliflower-anchovies-and-pistachios-1228731\">Orecchiette with Cauliflower, Anchovies and Pistachios</a>.",
        "cuisines":[],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "dairy free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Sauvignon Blanc, Riesling, and Sparkling rosé are great choices for Anchovies. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. The CMS Sauvignon Blanc Wine with a 5 out of 5 star rating seems like a good match. It costs about 15 dollars per bottle.",
            "productMatches": [
                {
                    "id": 428198,
                    "title": "CMS Sauvignon Blanc Wine",
                    "description": "Gorgeously angular with green apple notes.",
                    "price": "$14.99",
                    "imageUrl": "https://spoonacular.com/productImages/428198-312x231.jpg",
                    "averageRating": 1.0,
                    "ratingCount": 9.0,
                    "score": 0.9643,
                    "link": "https://www.amazon.com/CMS-White-Columbia-Valley-Sauvignon/dp/B00VQRVDSE?tag=spoonacular-20"
                }
            ]
        },
        "instructions": null,
        "analyzedInstructions": [],
        "report": null,
        "tips": {
            "health": [
                "You can easily replace regular noodles with whole wheat noodles to add a little extra fiber, protein, vitamins, and minerals to this dish. Just don't make the mistake of assuming that because the pasta is whole wheat, you can eat as much as you want. The calories and the <a href=\"http://www.quickanddirtytips.com/health-fitness/healthy-eating/truth-about-whole-grains?page=all\">effect on your blood sugar</a> is not so drastically different! "
            ],
            "price": [],
            "cooking": [
                "The best method for cooking pasta is pretty controversial, but most sources seem to reach a consensus. Check out our lesson on <a href=\"https://spoonacular.com/academy/how-to-cook-pasta\">how to cook pasta</a> in the academy.",
                "The average fresh lemon contains between 2 to 3 tablespoons of lemon juice (just in case you are substituting bottled lemon juice).",
                "Carrots can be stored in the fridge for 2 to 3 weeks. The starch in the carrots will turn to sugar over time, but this is not a problem, they'll just taste sweeter. The academy lesson about <a href=\"https://spoonacular.com/academy/carrots\">carrots</a> contains more useful information.",
                "Extra-virgin olive oil is the least refined type of olive oil and therefore contains more of the beneficial compounds that get lost during processing. However, its minimal processing could also mean it has a lower smoke point than other olive oils. Once an oil starts to smoke, it begins to break down, producing a bad flavor and potentially harmful compounds. Unfortunately, the smoke point of an oil depends on so many factors that it is hard to say what the smoke point of an oil really is. For extra-virgin olive oil, it could be anywhere between 200-400 degrees Fahrenheit. Most people recommend using extra-virgin olive oil to add flavor to a finished dish or in cold dishes to be on the safe side. More refined olive oils, canola oil,  coconut oil, and <a href=\"https://spoonacular.com/academy/butter\">clarified butter/ghee</a> are better options for high temperature cooking.",
                "Fresh cauliflower should be white without any discoloration. If its leaves are attached, they should be green and not wilty. Store cauliflower in the crisper in your fridge and use within 5-7 days."
            ],
            "green": []
        },
        "openLicense": 0,
        "suspiciousDataScore": 100.0,
        "approved": 2,
        "unknownIngredients": [],
        "userTags": [],
        "originalId": null,
        "spoonacularScore": 75.24517822265625
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 13,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 11,
        "healthScore": 22,
        "creditsText": "blogspot.com",
        "sourceName": "blogspot.com",
        "pricePerServing": 415.91,
        "extendedIngredients": [
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "fresh-anchovies.jpg",
                "consistency": "SOLID",
                "name": "tiny anchovies",
                "nameClean": "boquerones",
                "original": "150g tiny dried anchovies",
                "originalName": "tiny dried anchovies",
                "amount": 150.0,
                "unit": "g",
                "meta": [
                    "dried"
                ],
                "measures": {
                    "us": {
                        "amount": 5.291,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 150.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 15001,
                "aisle": "Seafood",
                "image": "anchovies.jpg",
                "consistency": "SOLID",
                "name": "tiny anchovies",
                "nameClean": "boquerones",
                "original": "150g tiny dried anchovies",
                "originalName": "tiny dried anchovies",
                "amount": 150.0,
                "unit": "g",
                "meta": [
                    "dried"
                ],
                "measures": {
                    "us": {
                        "amount": 5.291,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 150.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 18369,
                "aisle": "Baking",
                "image": "white-powder.jpg",
                "consistency": "SOLID",
                "name": "turn the heat back on and stir",
                "nameClean": "baking powder",
                "original": "4. Turn the heat back on and stir for another 3-4 minutes.",
                "originalName": "Turn the heat back on and stir for another 3-4 minutes",
                "amount": 4.0,
                "unit": "",
                "meta": [
                    "for another 3-4 minutes."
                ],
                "measures": {
                    "us": {
                        "amount": 4.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 4582,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "vegetable-oil.jpg",
                "consistency": "LIQUID",
                "name": "cooking oil",
                "nameClean": "cooking oil",
                "original": "2 T cooking oil",
                "originalName": "cooking oil",
                "amount": 2.0,
                "unit": "T",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 4669,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "vegetable-oil.jpg",
                "consistency": "SOLID",
                "name": "heat a frying pan",
                "nameClean": "vegetable oil",
                "original": "1. Heat a frying pan with the oil on medium heat. Add the anchovies and mix around for a couple minutes.",
                "originalName": "Heat a frying pan with the oil on medium heat. Add the anchovies and mix around for a couple minutes",
                "amount": 1.0,
                "unit": "",
                "meta": [
                    "with the oil on medium heat. add the anchovies and mix around for a couple minutes."
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "add garlic",
                "nameClean": "garlic",
                "original": "2. Add garlic slices, ginger, toasted nuts. Mix for another minute until the garlic and ginger is fragrant.",
                "originalName": "Add garlic slices, ginger, toasted nuts. Mix for another minute until the garlic and ginger is fragrant",
                "amount": 2.0,
                "unit": "",
                "meta": [
                    "toasted",
                    "for another minute until the garlic and ginger is fragrant."
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic",
                "nameClean": "garlic",
                "original": "2 T sliced garlic",
                "originalName": "sliced garlic",
                "amount": 2.0,
                "unit": "T",
                "meta": [
                    "sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 2021,
                "aisle": "Spices and Seasonings",
                "image": "ginger.png",
                "consistency": "SOLID",
                "name": "ground ginger",
                "nameClean": "ginger powder",
                "original": "1/2 ground ginger",
                "originalName": "ground ginger",
                "amount": 0.5,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 10112155,
                "aisle": "Baking",
                "image": "walnuts.jpg",
                "consistency": "SOLID",
                "name": "pine nuts",
                "nameClean": "walnut pieces",
                "original": "2 T toasted pine nuts (we substituted with chopped walnuts and pumpkin seed and it was yummy)",
                "originalName": "toasted pine nuts (we substituted with chopped walnuts and pumpkin seed and it was yummy)",
                "amount": 2.0,
                "unit": "T",
                "meta": [
                    "with chopped walnuts and pumpkin seed and it was yummy)",
                    "toasted"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 9279,
                "aisle": "Produce",
                "image": "plum.jpg",
                "consistency": "SOLID",
                "name": "plum extract",
                "nameClean": "purple plum",
                "original": "1.5 t plum extract",
                "originalName": "plum extract",
                "amount": 1.5,
                "unit": "t",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 93784,
                "aisle": "Baking",
                "image": "corn-syrup.png",
                "consistency": "SOLID",
                "name": "korean cooking syrup",
                "nameClean": "brown rice syrup",
                "original": "1 T Korean cooking syrup",
                "originalName": "Korean cooking syrup",
                "amount": 1.0,
                "unit": "T",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 93784,
                "aisle": "Baking",
                "image": "corn-syrup.png",
                "consistency": "SOLID",
                "name": "turn off the heat. add the cooking syrup",
                "nameClean": "brown rice syrup",
                "original": "3. Turn off the heat. Add the cooking syrup, sugar and plum extract. Mix it around.",
                "originalName": "Turn off the heat. Add the cooking syrup, sugar and plum extract. Mix it around",
                "amount": 3.0,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 12023,
                "aisle": "Ethnic Foods",
                "image": "sesame-seeds.png",
                "consistency": "SOLID",
                "name": "sesame seeds",
                "nameClean": "sesame seeds",
                "original": "2 T toasted sesame seeds",
                "originalName": "toasted sesame seeds",
                "amount": 2.0,
                "unit": "T",
                "meta": [
                    "toasted"
                ],
                "measures": {
                    "us": {
                        "amount": 2.25,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.25,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 19335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "sugar",
                "nameClean": "sugar",
                "original": "1 T sugar",
                "originalName": "sugar",
                "amount": 1.0,
                "unit": "T",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 12023,
                "aisle": "Ethnic Foods",
                "image": "sesame-seeds.png",
                "consistency": "SOLID",
                "name": "sprinkle",
                "nameClean": "sesame seeds",
                "original": "5. Sprinkle with sesame seeds.",
                "originalName": "Sprinkle with sesame seeds",
                "amount": 5.0,
                "unit": "",
                "meta": [
                    "with sesame seeds."
                ],
                "measures": {
                    "us": {
                        "amount": 5.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 5.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            }
        ],
        "id": 4,
        "title": "Bap Story: Stir Fried Anchovies (Myulchi Bokkeum)",
        "readyInMinutes": 45,
        "servings": 2,
        "sourceUrl": "http://bapstory.blogspot.com/2011/08/stir-fried-anchovies-myulchi-bokkeum.html",
        "image": "https://spoonacular.com/recipeImages/4-556x370.jpg",
        "imageType": "jpg",
        "nutrition": {
            "nutrients": [
                {
                    "name": "Calories",
                    "amount": 538.88,
                    "unit": "kcal",
                    "percentOfDailyNeeds": 26.94
                },
                {
                    "name": "Fat",
                    "amount": 34.19,
                    "unit": "g",
                    "percentOfDailyNeeds": 52.6
                },
                {
                    "name": "Saturated Fat",
                    "amount": 4.52,
                    "unit": "g",
                    "percentOfDailyNeeds": 28.28
                },
                {
                    "name": "Carbohydrates",
                    "amount": 25.49,
                    "unit": "g",
                    "percentOfDailyNeeds": 8.5
                },
                {
                    "name": "Net Carbohydrates",
                    "amount": 22.78,
                    "unit": "g",
                    "percentOfDailyNeeds": 8.29
                },
                {
                    "name": "Sugar",
                    "amount": 14.0,
                    "unit": "g",
                    "percentOfDailyNeeds": 15.55
                },
                {
                    "name": "Cholesterol",
                    "amount": 90.0,
                    "unit": "mg",
                    "percentOfDailyNeeds": 30.0
                },
                {
                    "name": "Sodium",
                    "amount": 380.66,
                    "unit": "mg",
                    "percentOfDailyNeeds": 16.55
                },
                {
                    "name": "Protein",
                    "amount": 35.34,
                    "unit": "g",
                    "percentOfDailyNeeds": 70.68
                },
                {
                    "name": "Vitamin B3",
                    "amount": 22.02,
                    "unit": "mg",
                    "percentOfDailyNeeds": 110.12
                },
                {
                    "name": "Manganese",
                    "amount": 1.83,
                    "unit": "mg",
                    "percentOfDailyNeeds": 91.57
                },
                {
                    "name": "Selenium",
                    "amount": 62.33,
                    "unit": "µg",
                    "percentOfDailyNeeds": 89.05
                },
                {
                    "name": "Copper",
                    "amount": 0.99,
                    "unit": "mg",
                    "percentOfDailyNeeds": 49.69
                },
                {
                    "name": "Calcium",
                    "amount": 491.27,
                    "unit": "mg",
                    "percentOfDailyNeeds": 49.13
                },
                {
                    "name": "Phosphorus",
                    "amount": 433.8,
                    "unit": "mg",
                    "percentOfDailyNeeds": 43.38
                },
                {
                    "name": "Iron",
                    "amount": 7.8,
                    "unit": "mg",
                    "percentOfDailyNeeds": 43.34
                },
                {
                    "name": "Magnesium",
                    "amount": 127.1,
                    "unit": "mg",
                    "percentOfDailyNeeds": 31.77
                },
                {
                    "name": "Zinc",
                    "amount": 4.01,
                    "unit": "mg",
                    "percentOfDailyNeeds": 26.75
                },
                {
                    "name": "Vitamin B2",
                    "amount": 0.45,
                    "unit": "mg",
                    "percentOfDailyNeeds": 26.25
                },
                {
                    "name": "Vitamin B6",
                    "amount": 0.51,
                    "unit": "mg",
                    "percentOfDailyNeeds": 25.69
                },
                {
                    "name": "Vitamin E",
                    "amount": 3.46,
                    "unit": "mg",
                    "percentOfDailyNeeds": 23.09
                },
                {
                    "name": "Potassium",
                    "amount": 759.15,
                    "unit": "mg",
                    "percentOfDailyNeeds": 21.69
                },
                {
                    "name": "Vitamin B12",
                    "amount": 0.93,
                    "unit": "µg",
                    "percentOfDailyNeeds": 15.5
                },
                {
                    "name": "Vitamin B1",
                    "amount": 0.23,
                    "unit": "mg",
                    "percentOfDailyNeeds": 15.46
                },
                {
                    "name": "Vitamin K",
                    "amount": 11.77,
                    "unit": "µg",
                    "percentOfDailyNeeds": 11.21
                },
                {
                    "name": "Vitamin B5",
                    "amount": 1.11,
                    "unit": "mg",
                    "percentOfDailyNeeds": 11.14
                },
                {
                    "name": "Fiber",
                    "amount": 2.7,
                    "unit": "g",
                    "percentOfDailyNeeds": 10.81
                },
                {
                    "name": "Folate",
                    "amount": 35.33,
                    "unit": "µg",
                    "percentOfDailyNeeds": 8.83
                },
                {
                    "name": "Vitamin C",
                    "amount": 3.93,
                    "unit": "mg",
                    "percentOfDailyNeeds": 4.77
                },
                {
                    "name": "Vitamin A",
                    "amount": 92.6,
                    "unit": "IU",
                    "percentOfDailyNeeds": 1.85
                }
            ],
            "properties": [
                {
                    "name": "Glycemic Index",
                    "amount": 175.38,
                    "unit": ""
                },
                {
                    "name": "Glycemic Load",
                    "amount": 6.47,
                    "unit": ""
                },
                {
                    "name": "Inflammation Score",
                    "amount": -5.0,
                    "unit": ""
                },
                {
                    "name": "Nutrition Score",
                    "amount": 30.476956521739133,
                    "unit": "%"
                }
            ],
            "flavonoids": [
                {
                    "name": "Cyanidin",
                    "amount": 0.48,
                    "unit": "mg"
                },
                {
                    "name": "Petunidin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Delphinidin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Malvidin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Pelargonidin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Peonidin",
                    "amount": 0.01,
                    "unit": "mg"
                },
                {
                    "name": "Catechin",
                    "amount": 0.11,
                    "unit": "mg"
                },
                {
                    "name": "Epigallocatechin",
                    "amount": 0.01,
                    "unit": "mg"
                },
                {
                    "name": "Epicatechin",
                    "amount": 0.12,
                    "unit": "mg"
                },
                {
                    "name": "Epicatechin 3-gallate",
                    "amount": 0.03,
                    "unit": "mg"
                },
                {
                    "name": "Epigallocatechin 3-gallate",
                    "amount": 0.01,
                    "unit": "mg"
                },
                {
                    "name": "Theaflavin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Thearubigins",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Eriodictyol",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Hesperetin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Naringenin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Apigenin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Luteolin",
                    "amount": 0.0,
                    "unit": "mg"
                },
                {
                    "name": "Isorhamnetin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Kaempferol",
                    "amount": 0.03,
                    "unit": "mg"
                },
                {
                    "name": "Myricetin",
                    "amount": 0.18,
                    "unit": "mg"
                },
                {
                    "name": "Quercetin",
                    "amount": 0.22,
                    "unit": "mg"
                },
                {
                    "name": "Theaflavin-3,3'-digallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Theaflavin-3'-gallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Theaflavin-3-gallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Gallocatechin",
                    "amount": 0.0,
                    "unit": "mg"
                }
            ],
            "ingredients": [
                {
                    "id": 15001,
                    "name": "tiny anchovies",
                    "amount": 75.0,
                    "unit": "g",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 10.52,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 98.25,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 110.25,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 78.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 3.63,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 30.75,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 27.38,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Potassium",
                            "amount": 287.25,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.19,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.89,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 6.75,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.11,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 1.29,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.48,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 2.44,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.43,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.16,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 45.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 15.26,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.96,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.47,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 1.23,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 130.5,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 37.5,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.08,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 15001,
                    "name": "tiny anchovies",
                    "amount": 75.0,
                    "unit": "g",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 10.52,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 98.25,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 110.25,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 78.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 3.63,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 30.75,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 27.38,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Potassium",
                            "amount": 287.25,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.19,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.89,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 6.75,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.11,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 1.29,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.48,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 2.44,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.43,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.16,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 45.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 15.26,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.96,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.47,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 1.23,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 130.5,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 37.5,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.08,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 18369,
                    "name": "turn the heat back on and stir",
                    "amount": 2.0,
                    "unit": "",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 1.06,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 117.52,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 212.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.54,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Choline",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.4,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.55,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.22,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.55,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 43.82,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 4582,
                    "name": "cooking oil",
                    "amount": 1.0,
                    "unit": "T",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 123.76,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 14.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.06,
                            "unit": "g",
                            "percentOfDailyNeeds": 586.9
                        },
                        {
                            "name": "Choline",
                            "amount": 0.03,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 8.86,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 2.45,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 1.03,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 3.93,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 9.98,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 4669,
                    "name": "heat a frying pan",
                    "amount": 0.5,
                    "unit": "",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 4.42,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 0.5,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 586.9
                        },
                        {
                            "name": "Choline",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.11,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.08,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.29,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.92,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 11215,
                    "name": "add garlic",
                    "amount": 1.0,
                    "unit": "",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 4.47,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.03,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 5.43,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.51,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.75,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.43,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Choline",
                            "amount": 0.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 12.03,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.09,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.03,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.93,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.06,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.19,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.94,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.99,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 4.59,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.27,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.05,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 11215,
                    "name": "garlic",
                    "amount": 1.0,
                    "unit": "T",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.06,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 11.92,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.08,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 14.48,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.13,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 1.36,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 0.04,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 2.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 1.14,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Choline",
                            "amount": 1.86,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 32.08,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.24,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.1,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.09,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 2.48,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.14,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.17,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.51,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 2.5,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 2.65,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 12.24,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.72,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.14,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 2021,
                    "name": "ground ginger",
                    "amount": 0.25,
                    "unit": "",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.26,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 9.21,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.09,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 3.13,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.92,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.74,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 0.12,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 5.89,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 1.53,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 586.9
                        },
                        {
                            "name": "Choline",
                            "amount": 1.13,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 36.3,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.36,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.1,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 1.58,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.54,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.39,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.25,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.07,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 1.97,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.03,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 4.62,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.82,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.02,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 10112155,
                    "name": "pine nuts",
                    "amount": 1.0,
                    "unit": "T",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.11,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 65.4,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.26,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 9.8,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.34,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.2,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 6.52,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 15.8,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.49,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Choline",
                            "amount": 3.92,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 44.1,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.89,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 9.8,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.31,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.7,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.06,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.29,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.67,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.07,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.16,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 1.52,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.13,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.03,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.61,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 1.37,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 4.72,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 34.6,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 2.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.27,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 9279,
                    "name": "plum extract",
                    "amount": 0.75,
                    "unit": "t",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 1.7,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.37,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.22,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Fluoride",
                            "amount": 0.07,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.26,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Choline",
                            "amount": 0.07,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 5.8,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.18,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.37,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.05,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.03,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.35,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.42,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.59,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 12.75,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.24,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 93784,
                    "name": "korean cooking syrup",
                    "amount": 0.5,
                    "unit": "T",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 27.51,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 6.25,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 7.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Fluoride",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 7.45,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 586.9
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 7.75,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.25,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 7.75,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 93784,
                    "name": "turn off the heat. add the cooking syrup",
                    "amount": 1.5,
                    "unit": "",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 3.93,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.89,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 1.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Fluoride",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 1.07,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 586.9
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 1.11,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.04,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 1.11,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 12023,
                    "name": "sesame seeds",
                    "amount": 1.0,
                    "unit": "T",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.41,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 51.57,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.03,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 87.75,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.22,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.99,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 4.47,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 31.59,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 3.1,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Choline",
                            "amount": 2.3,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 42.12,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 1.69,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 8.73,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.07,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 1.05,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 1.31,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 1.06,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.37,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 1.6,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.07,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.63,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 2.11,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 1.96,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 56.61,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.81,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 19335,
                    "name": "sugar",
                    "amount": 0.5,
                    "unit": "T",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 23.1,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 5.99,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.06,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Fluoride",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.06,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 0.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.04,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Choline",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.12,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 5.98,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 5.98,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                },
                {
                    "id": 12023,
                    "name": "sprinkle",
                    "amount": 2.5,
                    "unit": "",
                    "nutrients": [
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.11,
                            "unit": "mg",
                            "percentOfDailyNeeds": 110.12
                        },
                        {
                            "name": "Calories",
                            "amount": 14.32,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 26.94
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 15.55
                        },
                        {
                            "name": "Calcium",
                            "amount": 24.38,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.13
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.06,
                            "unit": "mg",
                            "percentOfDailyNeeds": 91.57
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.28,
                            "unit": "mg",
                            "percentOfDailyNeeds": 16.55
                        },
                        {
                            "name": "Fat",
                            "amount": 1.24,
                            "unit": "g",
                            "percentOfDailyNeeds": 52.6
                        },
                        {
                            "name": "Magnesium",
                            "amount": 8.77,
                            "unit": "mg",
                            "percentOfDailyNeeds": 31.77
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.86,
                            "unit": "µg",
                            "percentOfDailyNeeds": 89.05
                        },
                        {
                            "name": "Choline",
                            "amount": 0.64,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 11.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 21.69
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.25
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.47,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folate",
                            "amount": 2.42,
                            "unit": "µg",
                            "percentOfDailyNeeds": 8.83
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 25.69
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.19,
                            "unit": "mg",
                            "percentOfDailyNeeds": 26.75
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.29,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.29
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.14
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Iron",
                            "amount": 0.36,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.34
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.29,
                            "unit": "g",
                            "percentOfDailyNeeds": 10.81
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 23.09
                        },
                        {
                            "name": "Copper",
                            "amount": 0.1,
                            "unit": "mg",
                            "percentOfDailyNeeds": 49.69
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.0
                        },
                        {
                            "name": "Protein",
                            "amount": 0.44,
                            "unit": "g",
                            "percentOfDailyNeeds": 70.68
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.77
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 15.46
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.17,
                            "unit": "g",
                            "percentOfDailyNeeds": 28.28
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.59,
                            "unit": "g",
                            "percentOfDailyNeeds": 8.5
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 15.5
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.54,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 15.73,
                            "unit": "mg",
                            "percentOfDailyNeeds": 43.38
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.22,
                            "unit": "IU",
                            "percentOfDailyNeeds": 1.85
                        },
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 11.21
                        }
                    ]
                }
            ],
            "caloricBreakdown": {
                "percentProtein": 25.65,
                "percentFat": 55.85,
                "percentCarbs": 18.5
            },
            "weightPerServing": {
                "amount": 223,
                "unit": "g"
            }
        },
        "summary": "If you have around <b>45 minutes</b> to spend in the kitchen, Bap Story: Stir Fried Anchovies (Myulchi Bokkeum) might be a spectacular <b>gluten free, dairy free, and pescatarian</b> recipe to try. One portion of this dish contains roughly <b>20g of protein</b>, <b>31g of fat</b>, and a total of <b>441 calories</b>. For <b>$4.16 per serving</b>, you get a main course that serves 2. A mixture of heat a frying pan, pine nuts, sesame seeds, and a handful of other ingredients are all it takes to make this recipe so yummy. A couple people made this recipe, and 11 would say it hit the spot. It is brought to you by bapstory.blogspot.com. With a spoonacular <b>score of 94%</b>, this dish is amazing. Try <a href=\"https://spoonacular.com/recipes/bap-story-spicy-octopus-over-rice-nakji-dup-bap-36524\">Bap Story: Spicy Octopus Over Rice (Nakji Dup Bap)</a>, <a href=\"https://spoonacular.com/recipes/dinner-tonight-stir-fried-squid-ojinguh-bokkeum-199338\">Dinner Tonight: Stir-Fried Squid (Ojinguh Bokkeum)</a>, and <a href=\"https://spoonacular.com/recipes/jeyuk-bokkeum-korean-spicy-pork-stir-fry-567345\">Jeyuk-Bokkeum (Korean Spicy Pork Stir-Fry)</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "pescatarian"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sauvignon blanc",
                "riesling",
                "sparkling rose"
            ],
            "pairingText": "Sauvignon Blanc, Riesling, and Sparkling rosé are my top picks for Anchovies. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. You could try Cakebread Sauvignon Blanc. Reviewers quite like it with a 4.4 out of 5 star rating and a price of about 35 dollars per bottle.",
            "productMatches": [
                {
                    "id": 433123,
                    "title": "Cakebread Sauvignon Blanc",
                    "description": "Our 2011 Sauvignon Blanc reflects all the positive attributes of a cool growing season. It's wonderfully fresh and aromatic, with bright scents of pink grapefruit, gooseberry, melon and green apple. On the palate, the wine is medium-bodied with rich, vibrant citrus (grapefruit and kiwi), honeydew melon, spice and mineral flavors balanced by excellent acidity and a long, refreshing, mineral/chalky finish reminiscent of a fine White Bordeaux.\n\nA superb apèritif wine, our 2011 Sauvignon Blanc is also wonderfully versatile with food, especially salads and lighter seafood, poultry and pasta dishes.",
                    "price": "$34.99",
                    "imageUrl": "https://spoonacular.com/productImages/433123-312x231.jpg",
                    "averageRating": 0.8799999952316284,
                    "ratingCount": 10.0,
                    "score": 0.8477,
                    "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fcakebread-sauvignon-blanc-2011%2F118027"
                }
            ]
        },
        "instructions": null,
        "analyzedInstructions": [],
        "report": null,
        "tips": {
            "health": [
                "Before you pass up garlic because you don't want the bad breath that comes with it, keep in mind that the compounds that cause garlic breath also offer a lot of health benefits. Garlic has anti-inflammatory, antioxidant, antibacterial, and antiviral properties. If you really want to get the most health benefits out of your garlic, choose Spanish garlic, which contains the most allicin (one of garlic's most beneficial compounds).",
                "Be conscious of your choice of <a href=\"https://spoonacular.com/academy/vegetable-oil\">cooking oils</a>. Some studies have shown that vegetable oils like safflower oil, sunflower oil, and canola oil might actually <a href=\"http://www.ctvnews.ca/health/some-vegetable-oils-may-increase-risk-of-heart-disease-1.1537586\">contribute to heart disease</a>. Olive oil is a good alternative for low temperature cooking, while coconut oil is a recent favorite for high temperature cooking. Do your research!",
                "If you're trying to <a href=\"https://spoonacular.com/academy/sugar-nutrient\">cut back on sugar</a>, consider replacing some of the sugar in this recipe with a sweetener like Stevia or Splenda. If you're against these kinds of sweeteners, start reducing the amount of real sugar you use until your tastebuds adjust. "
            ],
            "price": [],
            "cooking": [
                "Here's a trick for peeling garlic quickly. Put the garlic clove on your cutting board. Take a knife with a thick blade and place the blade flat across the garlic clove (the clove should be closer to the handle than the middle of the blade). Whack down on the flat side of the blade with your free hand to smoosh the garlic a bit. Done correctly, the skin will peel right off."
            ],
            "green": [
                "According to the Non-GMO Project, about 90% of the canola oil in the United States is made from genetically modified rapeseed, so if this issue is important to you be sure to buy certified organic or certified GMO-free canola oil!"
            ]
        },
        "openLicense": 0,
        "suspiciousDataScore": 100.0,
        "approved": 2,
        "unknownIngredients": [
            {
                "name": "sprinkle",
                "longName": "sprinkle",
                "amount": 5.0,
                "unit": "",
                "originalString": "5. Sprinkle with sesame seeds.",
                "originalStringClean": "sprinkle",
                "originalName": "Sprinkle with sesame seeds",
                "metaInformation": [
                    "with sesame seeds."
                ],
                "sourceLanguage": "ENGLISH",
                "id": -1,
                "aisle": null,
                "image": null,
                "consistency": "SOLID",
                "ontologyName": null,
                "amountAndUnitMetric": null,
                "amountAndUnitUs": null,
                "ingredientId": null,
                "comparableName": "sprinkle",
                "nutritionId": null,
                "pricePerAmount": -1.0,
                "amountForPrice": null,
                "price": 0.0,
                "sustainable": false,
                "vegetarian": false,
                "vegan": false,
                "glutenFree": false,
                "dairyFree": false,
                "nutrients": {},
                "foodProperties": {},
                "flavonoids": {},
                "possibleUnits": [],
                "ontologyConcept": null,
                "relevance": 10.0,
                "refuse": 0.0,
                "multiplier": 1.0,
                "immutable": false,
                "unitLong": "",
                "amountWithUnit": "5",
                "unitShort": "",
                "metaInformationForDb": "with sesame seeds."
            }
        ],
        "userTags": [],
        "originalId": null,
        "spoonacularScore": 72.57514190673828
    },
    // {
    //     "vegetarian": false,
    //     "vegan": false,
    //     "glutenFree": true,
    //     "dairyFree": true,
    //     "veryHealthy": false,
    //     "cheap": false,
    //     "veryPopular": false,
    //     "sustainable": false,
    //     "lowFodmap": true,
    //     "weightWatcherSmartPoints": 0,
    //     "gaps": "no",
    //     "preparationMinutes": 40,
    //     "cookingMinutes": 4460,
    //     "aggregateLikes": 0,
    //     "healthScore": 47,
    //     "creditsText": "Epicurious",
    //     "sourceName": "Epicurious",
    //     "pricePerServing": 58.44,
    //     "extendedIngredients": [
    //         {
    //             "id": 15001,
    //             "aisle": "Seafood",
    //             "image": "anchovies.jpg",
    //             "consistency": "SOLID",
    //             "name": "boquerones",
    //             "nameClean": "boquerones",
    //             "original": "12 boquerones (white anchovy fillets in vinegar), drained, patted dry, and halved lengthwise",
    //             "originalName": "boquerones (white anchovy fillets in vinegar), drained, patted dry, and halved lengthwise",
    //             "amount": 12.0,
    //             "unit": "",
    //             "meta": [
    //                 "white",
    //                 "dry",
    //                 "halved lengthwise",
    //                 "drained",
    //                 "( anchovy fillets in vinegar)"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 12.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 },
    //                 "metric": {
    //                     "amount": 12.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 }
    //             }
    //         },
    //         {
    //             "id": 15001,
    //             "aisle": "Seafood",
    //             "image": "fresh-anchovies.jpg",
    //             "consistency": "SOLID",
    //             "name": "boquerones",
    //             "nameClean": "boquerones",
    //             "original": "12 boquerones (white anchovy fillets in vinegar), drained, patted dry, and halved lengthwise",
    //             "originalName": "boquerones (white anchovy fillets in vinegar), drained, patted dry, and halved lengthwise",
    //             "amount": 12.0,
    //             "unit": "",
    //             "meta": [
    //                 "white",
    //                 "dry",
    //                 "halved lengthwise",
    //                 "drained",
    //                 "( anchovy fillets in vinegar)"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 12.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 },
    //                 "metric": {
    //                     "amount": 12.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11821,
    //             "aisle": "Produce",
    //             "image": "red-pepper.jpg",
    //             "consistency": "SOLID",
    //             "name": "bell peppers",
    //             "nameClean": "red pepper",
    //             "original": "6 large red bell peppers (3 pounds total)",
    //             "originalName": "red bell peppers (3 pounds total)",
    //             "amount": 6.0,
    //             "unit": "large",
    //             "meta": [
    //                 "red",
    //                 "(3 pounds total)"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 6.0,
    //                     "unitShort": "large",
    //                     "unitLong": "larges"
    //                 },
    //                 "metric": {
    //                     "amount": 6.0,
    //                     "unitShort": "large",
    //                     "unitLong": "larges"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 1012068,
    //             "aisle": "Oil, Vinegar, Salad Dressing",
    //             "image": "dark-sauce.jpg",
    //             "consistency": "LIQUID",
    //             "name": "sherry vinegar",
    //             "nameClean": "sherry vinegar",
    //             "original": "1 tablespoon Sherry vinegar",
    //             "originalName": "Sherry vinegar",
    //             "amount": 1.0,
    //             "unit": "tablespoon",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "Tbsp",
    //                     "unitLong": "Tbsp"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "Tbsp",
    //                     "unitLong": "Tbsp"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 19335,
    //             "aisle": "Baking",
    //             "image": "sugar-in-bowl.png",
    //             "consistency": "SOLID",
    //             "name": "sugar",
    //             "nameClean": "sugar",
    //             "original": "1 teaspoon sugar",
    //             "originalName": "sugar",
    //             "amount": 1.0,
    //             "unit": "teaspoon",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 }
    //             }
    //         }
    //     ],
    //     "id": 12,
    //     "title": "Roasted Peppers with Boquerones",
    //     "readyInMinutes": 4500,
    //     "servings": 12,
    //     "sourceUrl": "http://www.epicurious.com/recipes/food/views/Roasted-Peppers-with-Boquerones-231380",
    //     "image": "https://spoonacular.com/recipeImages/12-556x370.jpg",
    //     "imageType": "jpg",
    //     "nutrition": {
    //         "nutrients": [
    //             {
    //                 "name": "Calories",
    //                 "amount": 33.32,
    //                 "unit": "kcal",
    //                 "percentOfDailyNeeds": 1.67
    //             },
    //             {
    //                 "name": "Fat",
    //                 "amount": 0.63,
    //                 "unit": "g",
    //                 "percentOfDailyNeeds": 0.98
    //             },
    //             {
    //                 "name": "Saturated Fat",
    //                 "amount": 0.15,
    //                 "unit": "g",
    //                 "percentOfDailyNeeds": 0.94
    //             },
    //             {
    //                 "name": "Carbohydrates",
    //                 "amount": 5.28,
    //                 "unit": "g",
    //                 "percentOfDailyNeeds": 1.76
    //             },
    //             {
    //                 "name": "Net Carbohydrates",
    //                 "amount": 3.56,
    //                 "unit": "g",
    //                 "percentOfDailyNeeds": 1.29
    //             },
    //             {
    //                 "name": "Sugar",
    //                 "amount": 3.78,
    //                 "unit": "g",
    //                 "percentOfDailyNeeds": 4.2
    //             },
    //             {
    //                 "name": "Cholesterol",
    //                 "amount": 4.8,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 1.6
    //             },
    //             {
    //                 "name": "Sodium",
    //                 "amount": 11.7,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 0.51
    //             },
    //             {
    //                 "name": "Protein",
    //                 "amount": 2.44,
    //                 "unit": "g",
    //                 "percentOfDailyNeeds": 4.88
    //             },
    //             {
    //                 "name": "Vitamin C",
    //                 "amount": 104.97,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 127.23
    //             },
    //             {
    //                 "name": "Vitamin A",
    //                 "amount": 2571.42,
    //                 "unit": "IU",
    //                 "percentOfDailyNeeds": 51.43
    //             },
    //             {
    //                 "name": "Vitamin B6",
    //                 "amount": 0.25,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 12.5
    //             },
    //             {
    //                 "name": "Vitamin B3",
    //                 "amount": 1.92,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 9.62
    //             },
    //             {
    //                 "name": "Folate",
    //                 "amount": 38.44,
    //                 "unit": "µg",
    //                 "percentOfDailyNeeds": 9.61
    //             },
    //             {
    //                 "name": "Vitamin E",
    //                 "amount": 1.34,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 8.94
    //             },
    //             {
    //                 "name": "Fiber",
    //                 "amount": 1.72,
    //                 "unit": "g",
    //                 "percentOfDailyNeeds": 6.89
    //             },
    //             {
    //                 "name": "Potassium",
    //                 "amount": 204.15,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 5.83
    //             },
    //             {
    //                 "name": "Vitamin B2",
    //                 "amount": 0.09,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 5.31
    //             },
    //             {
    //                 "name": "Manganese",
    //                 "amount": 0.1,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 4.9
    //             },
    //             {
    //                 "name": "Selenium",
    //                 "amount": 3.0,
    //                 "unit": "µg",
    //                 "percentOfDailyNeeds": 4.29
    //             },
    //             {
    //                 "name": "Vitamin K",
    //                 "amount": 4.03,
    //                 "unit": "µg",
    //                 "percentOfDailyNeeds": 3.83
    //             },
    //             {
    //                 "name": "Phosphorus",
    //                 "amount": 35.34,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 3.53
    //             },
    //             {
    //                 "name": "Iron",
    //                 "amount": 0.62,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 3.44
    //             },
    //             {
    //                 "name": "Magnesium",
    //                 "amount": 13.17,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 3.29
    //             },
    //             {
    //                 "name": "Vitamin B1",
    //                 "amount": 0.05,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 3.25
    //             },
    //             {
    //                 "name": "Vitamin B5",
    //                 "amount": 0.31,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 3.12
    //             },
    //             {
    //                 "name": "Zinc",
    //                 "amount": 0.34,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 2.29
    //             },
    //             {
    //                 "name": "Calcium",
    //                 "amount": 17.58,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 1.76
    //             },
    //             {
    //                 "name": "Copper",
    //                 "amount": 0.03,
    //                 "unit": "mg",
    //                 "percentOfDailyNeeds": 1.55
    //             }
    //         ],
    //         "properties": [
    //             {
    //                 "name": "Glycemic Index",
    //                 "amount": 8.51,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Glycemic Load",
    //                 "amount": 1.26,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Inflammation Score",
    //                 "amount": -9.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Nutrition Score",
    //                 "amount": 10.704782608695654,
    //                 "unit": "%"
    //             }
    //         ],
    //         "flavonoids": [
    //             {
    //                 "name": "Cyanidin",
    //                 "amount": 0.0,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Petunidin",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Delphinidin",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Malvidin",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Pelargonidin",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Peonidin",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Catechin",
    //                 "amount": 0.0,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Epigallocatechin",
    //                 "amount": 0.0,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Epicatechin",
    //                 "amount": 0.0,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Epicatechin 3-gallate",
    //                 "amount": 0.0,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Epigallocatechin 3-gallate",
    //                 "amount": 0.0,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Theaflavin",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Thearubigins",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Eriodictyol",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Hesperetin",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Naringenin",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Apigenin",
    //                 "amount": 0.0,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Luteolin",
    //                 "amount": 0.5,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Isorhamnetin",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Kaempferol",
    //                 "amount": 0.02,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Myricetin",
    //                 "amount": 0.0,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Quercetin",
    //                 "amount": 0.19,
    //                 "unit": "mg"
    //             },
    //             {
    //                 "name": "Theaflavin-3,3'-digallate",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Theaflavin-3'-gallate",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Theaflavin-3-gallate",
    //                 "amount": 0.0,
    //                 "unit": ""
    //             },
    //             {
    //                 "name": "Gallocatechin",
    //                 "amount": 0.0,
    //                 "unit": "mg"
    //             }
    //         ],
    //         "ingredients": [
    //             {
    //                 "id": 15001,
    //                 "name": "boquerones",
    //                 "amount": 1.0,
    //                 "unit": "",
    //                 "nutrients": [
    //                     {
    //                         "name": "Lycopene",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Folic Acid",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Potassium",
    //                         "amount": 15.32,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 5.83
    //                     },
    //                     {
    //                         "name": "Copper",
    //                         "amount": 0.01,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.55
    //                     },
    //                     {
    //                         "name": "Mono Unsaturated Fat",
    //                         "amount": 0.05,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Calories",
    //                         "amount": 5.24,
    //                         "unit": "kcal",
    //                         "percentOfDailyNeeds": 1.67
    //                     },
    //                     {
    //                         "name": "Caffeine",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Iron",
    //                         "amount": 0.13,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.44
    //                     },
    //                     {
    //                         "name": "Vitamin B5",
    //                         "amount": 0.03,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.12
    //                     },
    //                     {
    //                         "name": "Calcium",
    //                         "amount": 5.88,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.76
    //                     },
    //                     {
    //                         "name": "Vitamin B2",
    //                         "amount": 0.01,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 5.31
    //                     },
    //                     {
    //                         "name": "Fat",
    //                         "amount": 0.19,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.98
    //                     },
    //                     {
    //                         "name": "Vitamin K",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 3.83
    //                     },
    //                     {
    //                         "name": "Vitamin B3",
    //                         "amount": 0.56,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 9.62
    //                     },
    //                     {
    //                         "name": "Vitamin B12",
    //                         "amount": 0.02,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.83
    //                     },
    //                     {
    //                         "name": "Vitamin C",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 127.23
    //                     },
    //                     {
    //                         "name": "Saturated Fat",
    //                         "amount": 0.05,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.94
    //                     },
    //                     {
    //                         "name": "Cholesterol",
    //                         "amount": 2.4,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.6
    //                     },
    //                     {
    //                         "name": "Carbohydrates",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 1.76
    //                     },
    //                     {
    //                         "name": "Zinc",
    //                         "amount": 0.07,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 2.29
    //                     },
    //                     {
    //                         "name": "Protein",
    //                         "amount": 0.81,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 4.88
    //                     },
    //                     {
    //                         "name": "Sugar",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 4.2
    //                     },
    //                     {
    //                         "name": "Fiber",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 6.89
    //                     },
    //                     {
    //                         "name": "Net Carbohydrates",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 1.29
    //                     },
    //                     {
    //                         "name": "Selenium",
    //                         "amount": 1.46,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 4.29
    //                     },
    //                     {
    //                         "name": "Poly Unsaturated Fat",
    //                         "amount": 0.07,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Vitamin B6",
    //                         "amount": 0.01,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 12.5
    //                     },
    //                     {
    //                         "name": "Phosphorus",
    //                         "amount": 6.96,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.53
    //                     },
    //                     {
    //                         "name": "Folate",
    //                         "amount": 0.36,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 9.61
    //                     },
    //                     {
    //                         "name": "Vitamin A",
    //                         "amount": 2.0,
    //                         "unit": "IU",
    //                         "percentOfDailyNeeds": 51.43
    //                     },
    //                     {
    //                         "name": "Alcohol",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Magnesium",
    //                         "amount": 1.64,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.29
    //                     },
    //                     {
    //                         "name": "Vitamin B1",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.25
    //                     },
    //                     {
    //                         "name": "Vitamin E",
    //                         "amount": 0.02,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 8.94
    //                     },
    //                     {
    //                         "name": "Manganese",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 4.9
    //                     },
    //                     {
    //                         "name": "Sodium",
    //                         "amount": 4.16,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.51
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": 15001,
    //                 "name": "boquerones",
    //                 "amount": 1.0,
    //                 "unit": "",
    //                 "nutrients": [
    //                     {
    //                         "name": "Lycopene",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Folic Acid",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Potassium",
    //                         "amount": 15.32,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 5.83
    //                     },
    //                     {
    //                         "name": "Copper",
    //                         "amount": 0.01,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.55
    //                     },
    //                     {
    //                         "name": "Mono Unsaturated Fat",
    //                         "amount": 0.05,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Calories",
    //                         "amount": 5.24,
    //                         "unit": "kcal",
    //                         "percentOfDailyNeeds": 1.67
    //                     },
    //                     {
    //                         "name": "Caffeine",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Iron",
    //                         "amount": 0.13,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.44
    //                     },
    //                     {
    //                         "name": "Vitamin B5",
    //                         "amount": 0.03,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.12
    //                     },
    //                     {
    //                         "name": "Calcium",
    //                         "amount": 5.88,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.76
    //                     },
    //                     {
    //                         "name": "Vitamin B2",
    //                         "amount": 0.01,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 5.31
    //                     },
    //                     {
    //                         "name": "Fat",
    //                         "amount": 0.19,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.98
    //                     },
    //                     {
    //                         "name": "Vitamin K",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 3.83
    //                     },
    //                     {
    //                         "name": "Vitamin B3",
    //                         "amount": 0.56,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 9.62
    //                     },
    //                     {
    //                         "name": "Vitamin B12",
    //                         "amount": 0.02,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.83
    //                     },
    //                     {
    //                         "name": "Vitamin C",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 127.23
    //                     },
    //                     {
    //                         "name": "Saturated Fat",
    //                         "amount": 0.05,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.94
    //                     },
    //                     {
    //                         "name": "Cholesterol",
    //                         "amount": 2.4,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.6
    //                     },
    //                     {
    //                         "name": "Carbohydrates",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 1.76
    //                     },
    //                     {
    //                         "name": "Zinc",
    //                         "amount": 0.07,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 2.29
    //                     },
    //                     {
    //                         "name": "Protein",
    //                         "amount": 0.81,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 4.88
    //                     },
    //                     {
    //                         "name": "Sugar",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 4.2
    //                     },
    //                     {
    //                         "name": "Fiber",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 6.89
    //                     },
    //                     {
    //                         "name": "Net Carbohydrates",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 1.29
    //                     },
    //                     {
    //                         "name": "Selenium",
    //                         "amount": 1.46,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 4.29
    //                     },
    //                     {
    //                         "name": "Poly Unsaturated Fat",
    //                         "amount": 0.07,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Vitamin B6",
    //                         "amount": 0.01,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 12.5
    //                     },
    //                     {
    //                         "name": "Phosphorus",
    //                         "amount": 6.96,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.53
    //                     },
    //                     {
    //                         "name": "Folate",
    //                         "amount": 0.36,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 9.61
    //                     },
    //                     {
    //                         "name": "Vitamin A",
    //                         "amount": 2.0,
    //                         "unit": "IU",
    //                         "percentOfDailyNeeds": 51.43
    //                     },
    //                     {
    //                         "name": "Alcohol",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Magnesium",
    //                         "amount": 1.64,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.29
    //                     },
    //                     {
    //                         "name": "Vitamin B1",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.25
    //                     },
    //                     {
    //                         "name": "Vitamin E",
    //                         "amount": 0.02,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 8.94
    //                     },
    //                     {
    //                         "name": "Manganese",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 4.9
    //                     },
    //                     {
    //                         "name": "Sodium",
    //                         "amount": 4.16,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.51
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": 11821,
    //                 "name": "bell peppers",
    //                 "amount": 0.5,
    //                 "unit": "large",
    //                 "nutrients": [
    //                     {
    //                         "name": "Lycopene",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Folic Acid",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Potassium",
    //                         "amount": 173.02,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 5.83
    //                     },
    //                     {
    //                         "name": "Copper",
    //                         "amount": 0.01,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.55
    //                     },
    //                     {
    //                         "name": "Mono Unsaturated Fat",
    //                         "amount": 0.01,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Calories",
    //                         "amount": 21.32,
    //                         "unit": "kcal",
    //                         "percentOfDailyNeeds": 1.67
    //                     },
    //                     {
    //                         "name": "Caffeine",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Iron",
    //                         "amount": 0.35,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.44
    //                     },
    //                     {
    //                         "name": "Vitamin B5",
    //                         "amount": 0.26,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.12
    //                     },
    //                     {
    //                         "name": "Calcium",
    //                         "amount": 5.74,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.76
    //                     },
    //                     {
    //                         "name": "Vitamin B2",
    //                         "amount": 0.07,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 5.31
    //                     },
    //                     {
    //                         "name": "Vitamin K",
    //                         "amount": 4.02,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 3.83
    //                     },
    //                     {
    //                         "name": "Fat",
    //                         "amount": 0.25,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.98
    //                     },
    //                     {
    //                         "name": "Vitamin B3",
    //                         "amount": 0.8,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 9.62
    //                     },
    //                     {
    //                         "name": "Vitamin D",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Vitamin B12",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.83
    //                     },
    //                     {
    //                         "name": "Vitamin C",
    //                         "amount": 104.96,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 127.23
    //                     },
    //                     {
    //                         "name": "Saturated Fat",
    //                         "amount": 0.05,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.94
    //                     },
    //                     {
    //                         "name": "Cholesterol",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.6
    //                     },
    //                     {
    //                         "name": "Carbohydrates",
    //                         "amount": 4.94,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 1.76
    //                     },
    //                     {
    //                         "name": "Zinc",
    //                         "amount": 0.2,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 2.29
    //                     },
    //                     {
    //                         "name": "Protein",
    //                         "amount": 0.81,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 4.88
    //                     },
    //                     {
    //                         "name": "Sugar",
    //                         "amount": 3.44,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 4.2
    //                     },
    //                     {
    //                         "name": "Fiber",
    //                         "amount": 1.72,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 6.89
    //                     },
    //                     {
    //                         "name": "Net Carbohydrates",
    //                         "amount": 3.22,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 1.29
    //                     },
    //                     {
    //                         "name": "Selenium",
    //                         "amount": 0.08,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 4.29
    //                     },
    //                     {
    //                         "name": "Poly Unsaturated Fat",
    //                         "amount": 0.13,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Vitamin B6",
    //                         "amount": 0.24,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 12.5
    //                     },
    //                     {
    //                         "name": "Phosphorus",
    //                         "amount": 21.32,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.53
    //                     },
    //                     {
    //                         "name": "Folate",
    //                         "amount": 37.72,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 9.61
    //                     },
    //                     {
    //                         "name": "Vitamin A",
    //                         "amount": 2567.42,
    //                         "unit": "IU",
    //                         "percentOfDailyNeeds": 51.43
    //                     },
    //                     {
    //                         "name": "Alcohol",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Choline",
    //                         "amount": 4.59,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Magnesium",
    //                         "amount": 9.84,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.29
    //                     },
    //                     {
    //                         "name": "Vitamin B1",
    //                         "amount": 0.04,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.25
    //                     },
    //                     {
    //                         "name": "Vitamin E",
    //                         "amount": 1.3,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 8.94
    //                     },
    //                     {
    //                         "name": "Manganese",
    //                         "amount": 0.09,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 4.9
    //                     },
    //                     {
    //                         "name": "Sodium",
    //                         "amount": 3.28,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.51
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": 1012068,
    //                 "name": "sherry vinegar",
    //                 "amount": 0.08,
    //                 "unit": "tablespoon",
    //                 "nutrients": [
    //                     {
    //                         "name": "Protein",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 4.88
    //                     },
    //                     {
    //                         "name": "Sugar",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 4.2
    //                     },
    //                     {
    //                         "name": "Fiber",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 6.89
    //                     },
    //                     {
    //                         "name": "Net Carbohydrates",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 1.29
    //                     },
    //                     {
    //                         "name": "Potassium",
    //                         "amount": 0.49,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 5.83
    //                     },
    //                     {
    //                         "name": "Copper",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.55
    //                     },
    //                     {
    //                         "name": "Calories",
    //                         "amount": 0.24,
    //                         "unit": "kcal",
    //                         "percentOfDailyNeeds": 1.67
    //                     },
    //                     {
    //                         "name": "Phosphorus",
    //                         "amount": 0.1,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.53
    //                     },
    //                     {
    //                         "name": "Iron",
    //                         "amount": 0.01,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.44
    //                     },
    //                     {
    //                         "name": "Vitamin A",
    //                         "amount": 0.0,
    //                         "unit": "IU",
    //                         "percentOfDailyNeeds": 51.43
    //                     },
    //                     {
    //                         "name": "Calcium",
    //                         "amount": 0.07,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.76
    //                     },
    //                     {
    //                         "name": "Magnesium",
    //                         "amount": 0.05,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.29
    //                     },
    //                     {
    //                         "name": "Fat",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.98
    //                     },
    //                     {
    //                         "name": "Vitamin C",
    //                         "amount": 0.01,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 127.23
    //                     },
    //                     {
    //                         "name": "Saturated Fat",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.94
    //                     },
    //                     {
    //                         "name": "Trans Fat",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Manganese",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 4.9
    //                     },
    //                     {
    //                         "name": "Zinc",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 2.29
    //                     },
    //                     {
    //                         "name": "Sodium",
    //                         "amount": 0.1,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.51
    //                     },
    //                     {
    //                         "name": "Carbohydrates",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 1.76
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": 19335,
    //                 "name": "sugar",
    //                 "amount": 0.08,
    //                 "unit": "teaspoon",
    //                 "nutrients": [
    //                     {
    //                         "name": "Lycopene",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Folic Acid",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Potassium",
    //                         "amount": 0.01,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 5.83
    //                     },
    //                     {
    //                         "name": "Copper",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.55
    //                     },
    //                     {
    //                         "name": "Mono Unsaturated Fat",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Calories",
    //                         "amount": 1.28,
    //                         "unit": "kcal",
    //                         "percentOfDailyNeeds": 1.67
    //                     },
    //                     {
    //                         "name": "Caffeine",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Iron",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.44
    //                     },
    //                     {
    //                         "name": "Vitamin B5",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.12
    //                     },
    //                     {
    //                         "name": "Vitamin B2",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 5.31
    //                     },
    //                     {
    //                         "name": "Calcium",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.76
    //                     },
    //                     {
    //                         "name": "Vitamin K",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 3.83
    //                     },
    //                     {
    //                         "name": "Fat",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.98
    //                     },
    //                     {
    //                         "name": "Vitamin B3",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 9.62
    //                     },
    //                     {
    //                         "name": "Vitamin D",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Vitamin B12",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 0.83
    //                     },
    //                     {
    //                         "name": "Vitamin C",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 127.23
    //                     },
    //                     {
    //                         "name": "Saturated Fat",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.94
    //                     },
    //                     {
    //                         "name": "Cholesterol",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 1.6
    //                     },
    //                     {
    //                         "name": "Carbohydrates",
    //                         "amount": 0.33,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 1.76
    //                     },
    //                     {
    //                         "name": "Zinc",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 2.29
    //                     },
    //                     {
    //                         "name": "Protein",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 4.88
    //                     },
    //                     {
    //                         "name": "Sugar",
    //                         "amount": 0.33,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 4.2
    //                     },
    //                     {
    //                         "name": "Fiber",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 6.89
    //                     },
    //                     {
    //                         "name": "Net Carbohydrates",
    //                         "amount": 0.33,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 1.29
    //                     },
    //                     {
    //                         "name": "Selenium",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 4.29
    //                     },
    //                     {
    //                         "name": "Poly Unsaturated Fat",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Vitamin B6",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 12.5
    //                     },
    //                     {
    //                         "name": "Phosphorus",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.53
    //                     },
    //                     {
    //                         "name": "Folate",
    //                         "amount": 0.0,
    //                         "unit": "µg",
    //                         "percentOfDailyNeeds": 9.61
    //                     },
    //                     {
    //                         "name": "Vitamin A",
    //                         "amount": 0.0,
    //                         "unit": "IU",
    //                         "percentOfDailyNeeds": 51.43
    //                     },
    //                     {
    //                         "name": "Alcohol",
    //                         "amount": 0.0,
    //                         "unit": "g",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Choline",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.0
    //                     },
    //                     {
    //                         "name": "Magnesium",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.29
    //                     },
    //                     {
    //                         "name": "Vitamin B1",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 3.25
    //                     },
    //                     {
    //                         "name": "Sodium",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.51
    //                     },
    //                     {
    //                         "name": "Vitamin E",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 8.94
    //                     },
    //                     {
    //                         "name": "Manganese",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 4.9
    //                     },
    //                     {
    //                         "name": "Fluoride",
    //                         "amount": 0.0,
    //                         "unit": "mg",
    //                         "percentOfDailyNeeds": 0.0
    //                     }
    //                 ]
    //             }
    //         ],
    //         "caloricBreakdown": {
    //             "percentProtein": 26.68,
    //             "percentFat": 15.6,
    //             "percentCarbs": 57.72
    //         },
    //         "weightPerServing": {
    //             "amount": 92,
    //             "unit": "g"
    //         }
    //     },
    //     "summary": "Roasted Peppers with Boquerones takes approximately <b>75 hours</b> from beginning to end. This recipe serves 12. Watching your figure? This gluten free, dairy free, fodmap friendly, and pescatarian recipe has <b>28 calories</b>, <b>2g of protein</b>, and <b>0g of fat</b> per serving. For <b>58 cents per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. If you have boquerones, bell peppers, sherry vinegar, and a few other ingredients on hand, you can make it. It works well as a side dish. 1 person were impressed by this recipe. It is brought to you by Epicurious. Overall, this recipe earns a <b>great spoonacular score of 81%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/marinated-boquerones-10\">Marinated Boquerones</a>, <a href=\"https://spoonacular.com/recipes/boquerones-with-green-olives-and-orange-1765635\">Boquerones With Green Olives and Orange</a>, and <a href=\"https://spoonacular.com/recipes/tomato-and-boquerones-salad-with-garlicky-breadcrumbs-49\">Tomato And Boquerones Salad With Garlicky Breadcrumbs</a>.",
    //     "cuisines": [],
    //     "dishTypes": [
    //         "side dish"
    //     ],
    //     "diets": [
    //         "gluten free",
    //         "dairy free",
    //         "fodmap friendly",
    //         "pescatarian"
    //     ],
    //     "occasions": [],
    //     "winePairing": {
    //         "pairedWines": [],
    //         "pairingText": "",
    //         "productMatches": []
    //     },
    //     "instructions": "Preparation                                                        Preheat broiler.                                                                Broil bell peppers on a broiler pan about 5 inches from heat, turning occasionally with tongs, until skins are blackened, 15 to 20 minutes. Transfer to a large bowl and cover bowl tightly with plastic wrap, then let steam 20 minutes.                                                                When peppers are cool enough to handle, peel them, reserving all juices in bowl, and discard stems and seeds. Cut peppers lengthwise into 1/4-inch-wide strips. Pour pepper juices through a sieve into another bowl, then add vinegar and sugar to juices, stirring until sugar is dissolved, then stir in peppers. Marinate peppers at room temperature, stirring occasionally, at least 2 hours.                                                                Spoon peppers and juices into a shallow bowl and arrange anchovy strips decoratively on top.                                                Cooks' note:            Peppers can marinate (without anchovies), covered and chilled, up to 3 days. Bring to room temperature before serving.",
    //     "analyzedInstructions": [
    //         {
    //             "name": "",
    //             "steps": [
    //                 {
    //                     "number": 1,
    //                     "step": "Preheat broiler.",
    //                     "ingredients": [],
    //                     "equipment": [
    //                         {
    //                             "id": 405914,
    //                             "name": "broiler",
    //                             "localizedName": "broiler",
    //                             "image": "oven.jpg"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "number": 2,
    //                     "step": "Broil bell peppers on a broiler pan about 5 inches from heat, turning occasionally with tongs, until skins are blackened, 15 to 20 minutes.",
    //                     "ingredients": [
    //                         {
    //                             "id": 10211821,
    //                             "name": "bell pepper",
    //                             "localizedName": "bell pepper",
    //                             "image": "bell-pepper-orange.png"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 404698,
    //                             "name": "broiler pan",
    //                             "localizedName": "broiler pan",
    //                             "image": "broiler-pan.jpg"
    //                         },
    //                         {
    //                             "id": 404641,
    //                             "name": "tongs",
    //                             "localizedName": "tongs",
    //                             "image": "tongs.jpg"
    //                         }
    //                     ],
    //                     "length": {
    //                         "number": 15,
    //                         "unit": "minutes"
    //                     }
    //                 },
    //                 {
    //                     "number": 3,
    //                     "step": "Transfer to a large bowl and cover bowl tightly with plastic wrap, then let steam 20 minutes.",
    //                     "ingredients": [
    //                         {
    //                             "id": 10018364,
    //                             "name": "wrap",
    //                             "localizedName": "wrap",
    //                             "image": "flour-tortilla.jpg"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 404730,
    //                             "name": "plastic wrap",
    //                             "localizedName": "plastic wrap",
    //                             "image": "plastic-wrap.jpg"
    //                         },
    //                         {
    //                             "id": 404783,
    //                             "name": "bowl",
    //                             "localizedName": "bowl",
    //                             "image": "bowl.jpg"
    //                         }
    //                     ],
    //                     "length": {
    //                         "number": 20,
    //                         "unit": "minutes"
    //                     }
    //                 },
    //                 {
    //                     "number": 4,
    //                     "step": "When peppers are cool enough to handle, peel them, reserving all juices in bowl, and discard stems and seeds.",
    //                     "ingredients": [
    //                         {
    //                             "id": 10111333,
    //                             "name": "peppers",
    //                             "localizedName": "peppers",
    //                             "image": "green-pepper.jpg"
    //                         },
    //                         {
    //                             "id": 93818,
    //                             "name": "seeds",
    //                             "localizedName": "seeds",
    //                             "image": "sunflower-seeds.jpg"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 404783,
    //                             "name": "bowl",
    //                             "localizedName": "bowl",
    //                             "image": "bowl.jpg"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "number": 5,
    //                     "step": "Cut peppers lengthwise into 1/4-inch-wide strips.",
    //                     "ingredients": [
    //                         {
    //                             "id": 10111333,
    //                             "name": "peppers",
    //                             "localizedName": "peppers",
    //                             "image": "green-pepper.jpg"
    //                         }
    //                     ],
    //                     "equipment": []
    //                 },
    //                 {
    //                     "number": 6,
    //                     "step": "Pour pepper juices through a sieve into another bowl, then add vinegar and sugar to juices, stirring until sugar is dissolved, then stir in peppers. Marinate peppers at room temperature, stirring occasionally, at least 2 hours.",
    //                     "ingredients": [
    //                         {
    //                             "id": 10111333,
    //                             "name": "peppers",
    //                             "localizedName": "peppers",
    //                             "image": "green-pepper.jpg"
    //                         },
    //                         {
    //                             "id": 2053,
    //                             "name": "vinegar",
    //                             "localizedName": "vinegar",
    //                             "image": "vinegar-(white).jpg"
    //                         },
    //                         {
    //                             "id": 1002030,
    //                             "name": "pepper",
    //                             "localizedName": "pepper",
    //                             "image": "pepper.jpg"
    //                         },
    //                         {
    //                             "id": 19335,
    //                             "name": "sugar",
    //                             "localizedName": "sugar",
    //                             "image": "sugar-in-bowl.png"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 405600,
    //                             "name": "sieve",
    //                             "localizedName": "sieve",
    //                             "image": "strainer.png"
    //                         },
    //                         {
    //                             "id": 404783,
    //                             "name": "bowl",
    //                             "localizedName": "bowl",
    //                             "image": "bowl.jpg"
    //                         }
    //                     ],
    //                     "length": {
    //                         "number": 120,
    //                         "unit": "minutes"
    //                     }
    //                 },
    //                 {
    //                     "number": 7,
    //                     "step": "Spoon peppers and juices into a shallow bowl and arrange anchovy strips decoratively on top.",
    //                     "ingredients": [
    //                         {
    //                             "id": 15001,
    //                             "name": "anchovies",
    //                             "localizedName": "anchovies",
    //                             "image": "anchovies.jpg"
    //                         },
    //                         {
    //                             "id": 10111333,
    //                             "name": "peppers",
    //                             "localizedName": "peppers",
    //                             "image": "green-pepper.jpg"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 404783,
    //                             "name": "bowl",
    //                             "localizedName": "bowl",
    //                             "image": "bowl.jpg"
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "Cooks' note",
    //             "steps": [
    //                 {
    //                     "number": 1,
    //                     "step": "Peppers can marinate (without anchovies), covered and chilled, up to 3 days. Bring to room temperature before serving.",
    //                     "ingredients": [
    //                         {
    //                             "id": 15001,
    //                             "name": "anchovies",
    //                             "localizedName": "anchovies",
    //                             "image": "anchovies.jpg"
    //                         },
    //                         {
    //                             "id": 10111333,
    //                             "name": "peppers",
    //                             "localizedName": "peppers",
    //                             "image": "green-pepper.jpg"
    //                         }
    //                     ],
    //                     "equipment": []
    //                 }
    //             ]
    //         }
    //     ],
    //     "report": null,
    //     "tips": {
    //         "health": [
    //             "If you're trying to <a href=\"https://spoonacular.com/academy/sugar-nutrient\">cut back on sugar</a>, consider replacing some of the sugar in this recipe with a sweetener like Stevia or Splenda. If you're against these kinds of sweeteners, start reducing the amount of real sugar you use until your tastebuds adjust. "
    //         ],
    //         "price": [],
    //         "cooking": [],
    //         "green": [
    //             "Bell peppers are unfortunately on the <a href=\"http://www.ewg.org/foodnews/summary.php\">\"dirty dozen\" list</a> compiled by the Environmental Working Group (EWG). You might want to buy them organic when you can."
    //         ]
    //     },
    //     "openLicense": 0,
    //     "suspiciousDataScore": 0.0,
    //     "approved": 2,
    //     "unknownIngredients": [],
    //     "userTags": [],
    //     "originalId": null,
    //     "spoonacularScore": 82.69237518310547
    // },        
];
module.exports = dummyApiResponseV2;