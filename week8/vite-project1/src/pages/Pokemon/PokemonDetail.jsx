import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/pokemon");
  };

  const getDetail = async () => {
    setLoading(true)
    try{
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const dataRes = await res.json();
      console.log(id, dataRes);
      setData(dataRes);
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center m-4">
        <h1 className="text-lg text-red-400">
          Pokemon detail {">"} {id}
        </h1>
        <button
          className="bg-red-400 px-4 py-2 text-white"
          onClick={() => handleNavigate()}
        >
          Back
        </button>
      </div>
      <div>
        {data?.abilities?.map((item, index) => (
          <h1 key={index} className="">
            {item?.ability?.name}
          </h1>
        ))}
        <img src={data?.sprites?.front_default} alt="" />
      </div>
      <div>
        <h1 className="flex justify-center">Generation</h1>
        <div className="flex justify-center gap-2">
          <div>
            <img
              src={
                data?.sprites?.versions?.["generation-i"]["red-blue"]
                  .front_default
              }
              alt="image-1"
              className="w-24"
            />
            <h1>Generation 1</h1>
          </div>
          <div>
            <img
              src={
                data?.sprites?.versions?.["generation-ii"].crystal.front_default
              }
              alt="image-1"
              className="w-24"
            />
            <h1>Generation 2</h1>
          </div>
          <div>
            <img
              src={
                data?.sprites?.versions?.["generation-iii"].emerald.front_default
              }
              alt="image-1"
              className="w-24"
            />
            <h1>Generation 3</h1>
          </div>
          <div>
            <img
              src={
                data?.sprites?.versions?.["generation-iv"]["diamond-pearl"].front_default
              }
              alt="image-1"
              className="w-24"
            />
            <h1>Generation 4</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
