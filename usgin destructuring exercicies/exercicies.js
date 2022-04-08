/*
    1- Crie uma função que recebe o array alunos e um número que irá representar a média final;
    2- Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
    3- Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
 */

    // function studentHasfEnd(arr, media){  //um exemplo
    //     let auxArr = [];

    //     for(let item of arr){
    //         if(item >= media){
    //             auxArr.push(item);
    //         }
    //     }
    //     return auxArr;
    // }

    // console.log(studentHasfEnd([5,4,3,2], 4));

    function studentAverage(arr, media){  //usando destruturing 
        let auxArr = [];

        for(let item in arr){
          let { nome, nota } = arr[item];  //usando destructuring
        //    if(arr[item].nota >= media){  // sem usar destructuring
        //        auxArr.push(arr[item]);
        //    }
           if(nota >= media){
               auxArr.push(nome);
           }
        }
        return auxArr;
    }

    const students = [
       { nome: 'nelson', nota: 5, turma: '1B' },
       { nome: 'daniel', nota: 4, turma: '2B' },
       { nome: 'mimi', nota: 3, turma: '3B' },
    ];

    console.log(studentAverage(students, 4));