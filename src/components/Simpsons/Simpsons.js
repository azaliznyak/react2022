import simpson from "../Sipmpson/Simpson";
import Simpson from "../Sipmpson/Simpson";

const Simpsons = () => {
    let simpsons = [{
        id: 1,
        name: 'Bart',
        surname: 'Simpson',
        image: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
        {
            id: 2,
            name: 'Homer',
            surname: 'Simpson',
            image: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            id:3,
            name: 'Marge',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            id:4,
            name: 'Lisa',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            id:5,
            name: 'Maggie',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        },
    ];
    return (

        <div>
            {
                simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)
            }

        </div>
    );
};

export default Simpsons;