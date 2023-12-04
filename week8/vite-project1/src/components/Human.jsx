const Human = ({people, setPeople
}) => {
    return (
        <div>
            <h1>{people.name || 'anonymous'} </h1>
            <p>{people.age || 'nothing happen'} </p>
            <button onClick={() => setPeople({name: '-', age: '-'})}>clear</button>
        </div>
    )
}

export default Human