let theJonathans = {
    name: 'jonathan',
    children: [
        {
            name: 'Elias'
        },
        {
            name: 'Sarah',
            children: [
                {
                    name: 'Max',
                    children: [{
                        name: 'Lily'
                    }]
                },
                {
                    name: 'Zoe'
                },
                {
                    name: 'Theo'
                }
            ]
        },
        {
            name: 'Maria',
            children: [
                {
                    name: 'Daniel'
                }
            ]
        },
        {
            name: 'David'
        }
    ]
};

function getAllDescendants(parent) {
    let descendants = [];

    if (parent.children) {
        parent.children.forEach(child => {
            descendants.push(child.name);
            descendants = descendants.concat(getAllDescendants(child));
        });
    }

    return descendants;
}

console.log(getAllDescendants(theJonathans));
