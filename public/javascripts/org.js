// Auteur: Félix Bélanger-Robillard
// Matricule: 1013159
// Nom: Arbre en postfixe

// Code fourni

function noeud(val, gauche, droite) {
  if (typeof gauche === "undefined") gauche = null;
  if (typeof droite === "undefined") droite = null;

  return {val: val, gauche: gauche, droite: droite};
}

// Fonction postfix

var postfix = function(v) {
  var t = [];
  var helper = function(v,t) {

    if (v.gauche !== null) helper(v.gauche,t);
    if (v.droite !== null) helper(v.droite,t);
    t.push(v.val);
    return t;
  };
  helper(v,t);
  return t;
};

// Tests unitaitres, test la fonction postfixe avec l'exemple de l'énoncé


var testsuni = function() {
    var arbre = noeud(              //        7
    7,                              //      /   \
    noeud(3, noeud(1), noeud(2)),   //    3       6
    noeud(6, noeud(4), noeud(5)));  //   / \     / \
                                    //  1   2   4   5
                                    // / \ / \ / \ / \
                                    // # # # # # # # #
    // assert(postfix(arbre) == "1 2 3 4 5 6 7");
    return print(postfix(arbre));
}

testsuni();


                                  
