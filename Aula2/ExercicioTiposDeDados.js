let people = [
    {id:1, first_name: 'luiz', last_name:'Pereira', age:25, gender:'M'},
    {id:2, first_name: 'Maria', last_name:'Silva', age:30, gender:'F'},
    {id:3, first_name: 'José', last_name:'Silveira', age:42, gender:'M'},
    {id:4, first_name: 'Luiza', last_name:'Camões', age:39, gender:'F'},
];

let person = people.find(p => {
    let test;
    test = p.id === 3;
    return test
});

console.log(test);