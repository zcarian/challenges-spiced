import { Fragment, useState } from "react";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";
import { useImmer } from "use-immer";

const finishLine = 200;

export default function CarRace() {
  const [cars, updateCars] = useImmer(initialCars);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();
    // setCars((cars) =>
    //   cars.map((car) => {
    //     if (car.emoji === clickedCar.emoji) {
    //       return {
    //         ...car,
    //         position: {
    //           ...car.position,
    //           x: car.position.x + coveredDistance,
    //           lastDistance: coveredDistance,
    //         },
    //       };
    //     }
    //     return car;
    //   })
    // );
    updateCars((draft) => {
      const car = draft.find((car) => car.emoji === clickedCar.emoji);
      car.position.x += coveredDistance;
      car.position.lastDistance = coveredDistance;
    })

    console.log("clickedCar", clickedCar);
    console.log("coveredDistance", coveredDistance);
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => updateCars(initialCars)} />
      ) : (
        <AllCarRoutes finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track finishLine={finishLine}>
                <CarButton
                  onClick={() => moveCar(car)}
                  positionX={car.position.x}
                  lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
