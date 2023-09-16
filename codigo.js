const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
    {
      name: "Nico",
      age: 20,
    },
  ];

/* const respuesta = team.every(item => item.age < 20);
console.log(respuesta); */

function estaOno(array,term){
  return array.filter(item=>item.includes(term));
}
const   tittle = "La forma de correr Python";
function parseToUrl(tittle){
  return tittle.split(' ').join('-').toLowerCase();
}

  const array= [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ];

function countWords(array){
  
  return array.flatMap(item=>item.split(" ")).length;
};

