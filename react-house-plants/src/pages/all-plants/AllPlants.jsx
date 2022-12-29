import SearchBar from "./SearchBar";
import classes from "./AllPlants.module.css";
import { useEffect, useState } from "react";

const AllPlants = () => {
  const [search, setSearch] = useState("");
  const [plantsData, setPlantsData] = useState([{}]);
  const isDataFetched = localStorage.getItem("allPlants");

  const callback = (text) => {
    setSearch(text);
  };

  const getPlants = async () => {
    if (isDataFetched) {
      setPlantsData(JSON.parse(isDataFetched));
    } else {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "house-plants.p.rapidapi.com",
        },
      };

      await fetch("https://house-plants.p.rapidapi.com/all", options)
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem("allPlants", JSON.stringify(response));
        })
        .then((response) => setPlantsData(response))
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getPlants();
  }, [isDataFetched, search]);

  return (
    <div>
      <SearchBar callback={callback} />
      {plantsData
        ?.filter(
          (plant) =>
            (plant.id ? (plant.id + 1).toString().includes(search) : "") ||
            (plant.common
              ? plant.common[0]
                  ?.toLowerCase()
                  .includes(search?.toLowerCase()) ||
                plant.common[1]?.toLowerCase().includes(search?.toLowerCase())
              : "") ||
            (plant.latin
              ? plant.latin?.toLowerCase().includes(search?.toLowerCase())
              : "") ||
            (plant.family
              ? plant.family?.toLowerCase().includes(search?.toLowerCase())
              : "") ||
            (plant.origin
              ? plant.origin?.toLowerCase().includes(search?.toLowerCase())
              : "") ||
            (plant.tempmin?.celsius
              ? plant.tempmin?.celsius.toString().includes(search)
              : "") ||
            (plant.tempmin?.fahrenheit
              ? plant.tempmin?.fahrenheit.toString().includes(search)
              : "") ||
            (plant.tempmax?.celsius
              ? plant.tempmax?.celsius.toString().includes(search)
              : "") ||
            (plant.tempmax?.fahrenheit
              ? plant.tempmax?.fahrenheit.toString().includes(search)
              : "") ||
            (plant.ideallight
              ? plant.ideallight?.toLowerCase().includes(search?.toLowerCase())
              : "") ||
            (plant.toleratedlight
              ? plant.toleratedlight
                  ?.toLowerCase()
                  .includes(search?.toLowerCase())
              : "") ||
            (plant.watering
              ? plant.watering?.toLowerCase().includes(search?.toLowerCase())
              : "")
        )
        ?.map((plant, index) => (
          <div key={index} className={classes.container}>
            <div className={classes.id}>{(plant.id + 1).toString()}</div>
            <div className={classes.common}>
              {plant.common?.map((name) =>
                plant.common.indexOf(name) > 1
                  ? ""
                  : plant.common.indexOf(name) !== 1 && plant.common.length > 1
                  ? name.replace(name, `${name} / `)
                  : name
              )}
            </div>
            <div className={classes.latin}>
              (lat.<span>&nbsp;{plant.latin}</span>)
            </div>
            <div className={classes.details}>
              <div>
                Family: <span className={classes.family}>{plant.family}</span>
              </div>
              <div>
                Origin: <span className={classes.origin}>{plant.origin}</span>
              </div>
              <div>
                Min temp:
                <span className={classes.tempmin}>
                  {plant.tempmin?.celsius}&deg;C{" / "}
                  {plant.tempmin?.fahrenheit}&deg;F
                </span>
              </div>
              <div>
                Max temp:
                <span className={classes.tempmax}>
                  {plant.tempmax?.celsius}&deg;C{" / "}
                  {plant.tempmax?.fahrenheit}&deg;F
                </span>
              </div>
              <div>
                Ideal light:
                <span className={classes.ideallight}>{plant.ideallight}</span>
              </div>
              <div>
                Tolerated light:
                <span className={classes.toleratedlight}>
                  {plant.toleratedlight}
                </span>
              </div>
              <div>
                Watering:
                <span className={classes.watering}>{plant.watering}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllPlants;
