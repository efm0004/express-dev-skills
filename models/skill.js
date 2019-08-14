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
    getOne,
    create,
    deleteOne
};

function deleteOne(id){
    skills.splice(id, 1);
}

function create(skill){
    skills.push(skill);
}

function getAll(){
    return skills;
}

function getOne(id){
    return skills[id]
}