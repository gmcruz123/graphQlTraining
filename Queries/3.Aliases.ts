/* No es posible hacer query de un field o campo con diferentes argumentos , por tanto es requerido los alias */
/*

If you have a sharp eye, you may have noticed that,
since the result object fields match the name of the
 field in the query but don't include arguments, you
  can't directly query for the same field with different
   arguments. That's why you need aliases - they let you
    rename the result of a field to anything you want.

En este caso los alias son "jedihero" y "empirehero"

Explicacion : En los querys previos se consutlaba teninedo solo en cuenta el schema en este caso hero, 
ya que solo se ponia el nombre del schema y el campo que se buscaba que trajera mas, no es posible apuntar
con el mismo schema y que este reciba dos argumentos diferentes , por tanto se crean dos intancias de este 
schemase nombran diferente y se le pone a cada una de ella los argumentos y campos que quiere que traiga, es
posible verlo en el siguiente ejemplo 
*/

/*

Query:

{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}

Result:

{
  "data": {
    "empireHero": {
      "name": "Luke Skywalker"
    },
    "jediHero": {
      "name": "R2-D2"
    }
  }
}

*/