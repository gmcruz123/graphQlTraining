/* Queries : when you ask something like the model it's exactly waht you're gonna have For example : */
/*

Query:

{
  hero {
    name
  }
}


Result:

{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}


Query2 :

{
  hero {
    name
    # Queries can have comments!
    friends { // debido a las llaves del query friends se ve que la respuesta sera un arreglo
      name
    }
  }
}

Result2: 

{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}

*/