import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const [dataPokemon, setDataPokemon] = useState ([])
  const navigate = useNavigate()
  const getDataPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      // console.log(response.json())
      return response.json()
    })
    .then(data => {
      console.log(data.results)
      console.log(123, data)
      setDataPokemon(data.results)
      console.log(123, data.results)
    })
  }

  useEffect(() => {
    getDataPokemon()
  }, [])


  return (
    <div>
      <h1 className="text-center m-4 text-red-400 font-semibold">
        List Pokemon
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {dataPokemon.slice(0,20).map((item, index) => (
          <div key={index} className="w-32 h-32 hover:scale-[1.2] bg-white border-2 border-gray-500 rounded-md shadow-xl flex items-center justify-center"
          onClick={() => navigate(`/pokemon/${index + 1}`)}>
            <h1>{item?.name}</h1>
          </div>
        ))}
        {/* <div className="w-32 h-32 bg-white border-2 border-gray-500 rounded-md shadow-xl"></div>
        <div className="w-32 h-32 bg-white border-2 border-gray-500 rounded-md shadow-xl"></div>
        <div className="w-32 h-32 bg-white border-2 border-gray-500 rounded-md shadow-xl"></div>
        <div className="w-32 h-32 bg-white border-2 border-gray-500 rounded-md shadow-xl"></div> */}
      </div>
    </div>
  );
};

export default Pokemon;
