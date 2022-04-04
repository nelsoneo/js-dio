/*
    Verifique de duas maneiras diferentes entre si, se uma string é um palindromo.

    Palindromo, frase ou palavra que se pode ler indiferentemente de esquerda para a dereita e vice-versa (ex: ama, ovo, radar)

*/

function palindromo(strPalindrome) {
  try {
    if (!strPalindrome || Number(strPalindrome)) {
      return "Nâo é uma string valida";
    } else {
      return strPalindrome.split("").reverse().join("") === strPalindrome;
    }
  } catch (error) {
    console.log(error);
  }
}

console.log(palindromo('radar'));
