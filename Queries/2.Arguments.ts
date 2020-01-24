/* Arguments : You can pass an argument , like id in this case for getting and specific case */
/*

Query:

{
  human(id: "1000") {
    name
    height
  }
}

Result:

{
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 1.72
    }
  }
}

*/

/* You can Specific a type of data that you want in the fetching of the data from the database */
/* In the following example i can see that the field called hight has and specific type that i want, in this case floot */
/*

Query:

{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}

Result:

{
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 5.6430448
    }
  }
}

*/