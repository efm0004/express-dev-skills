const skills = [
    {skill: 'HTML', experience: 'current'},
    {skill: 'CSS', experience: 'current'},
    {skill: 'Javascript', experience: 'current'},
    {skill: 'Node', experience: 'in progress'},
    {skill: 'Express', experience: 'in progress'},
    {skill: 'MongoDB', experience: 'future'}
];

module.exports = {
    getAll,
    getOne
};

function getAll(){
    return skills;
}

function getOne(id){
    return skills[id]
}