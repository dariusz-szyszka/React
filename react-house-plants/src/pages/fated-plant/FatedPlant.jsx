import { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";
import classes from "./FatedPlant.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FatedPlant = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isPlantFetched, setIsPlantFetched] = useState(false);
  const [plantData, setPlantData] = useState([{}]);
  const isFatedPlantDataFetched = sessionStorage.getItem("fatedPlant");
  let plantNumber = Math.floor(Math.random() * 209);

  const getFatedPlant = async () => {
    if (isFatedPlantDataFetched) {
      setPlantData(JSON.parse(isFatedPlantDataFetched));
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
          sessionStorage.setItem(
            "fatedPlant",
            JSON.stringify(response[plantNumber])
          );
        })
        .then((response) => setPlantData(response))
        .catch((err) => console.error(err[plantNumber]));
    }
  };

  const notify = () => {
    !sessionStorage.getItem("plantCheck")
      ? toast.success("🤩 Yeah! You got your plant!", {
          position: "top-right",
          autoClose: 2000,
          limit: 1,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      : toast.info("😆 You can't change the destiny!", {
          position: "top-right",
          autoClose: 2000,
          limit: 1,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  };

  useEffect(() => {
    getFatedPlant();
  }, [isBtnClicked, isPlantFetched]);

  return (
    <div className={classes.wrapper}>
      <h1>Check your destiny</h1>
      <button
        className={classes.btn}
        onClick={() => {
          setIsPlantFetched(false);
          setIsBtnClicked(true);
          setTimeout(() => {
            setIsPlantFetched(true);
            setIsBtnClicked(false);
            notify();
            sessionStorage.setItem("plantCheck", true);
          }, 2000);
        }}
      >
        Click me!
      </button>
      {isBtnClicked && !isPlantFetched && (
        <div className={classes.loader}>
          <ClockLoader
            color="#36d7b7"
            loading={true}
            size={200}
            speedMultiplier={1}
          />
        </div>
      )}
      {!isBtnClicked && isPlantFetched && (
        <div className={classes.container}>
          <div className={classes.id}>{(plantData?.id + 1).toString()}</div>
          <div className={classes.common}>
            {plantData?.common?.map((name) =>
              plantData?.common.indexOf(name) > 1
                ? ""
                : plantData?.common.indexOf(name) !== 1 &&
                  plantData?.common.length > 1
                ? name.replace(name, `${name} / `)
                : name
            )}
          </div>
          <div className={classes.latin}>
            (lat.<span>&nbsp;{plantData?.latin}</span>)
          </div>
          <div className={classes.details}>
            <div>
              Family:{" "}
              <span className={classes.family}>{plantData?.family}</span>
            </div>
            <div>
              Origin:{" "}
              <span className={classes.origin}>{plantData?.origin}</span>
            </div>
            <div>
              Min temp:
              <span className={classes.tempmin}>
                {plantData?.tempmin?.celsius}&deg;C{" / "}
                {plantData?.tempmin?.fahrenheit}&deg;F
              </span>
            </div>
            <div>
              Max temp:
              <span className={classes.tempmax}>
                {plantData?.tempmax?.celsius}&deg;C{" / "}
                {plantData?.tempmax?.fahrenheit}&deg;F
              </span>
            </div>
            <div>
              Ideal light:
              <span className={classes.ideallight}>
                {plantData?.ideallight}
              </span>
            </div>
            <div>
              Tolerated light:
              <span className={classes.toleratedlight}>
                {plantData?.toleratedlight}
              </span>
            </div>
            <div>
              Watering:
              <span className={classes.watering}>{plantData?.watering}</span>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default FatedPlant;
