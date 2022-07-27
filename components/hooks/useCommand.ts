import { useEffect, useState } from "react";
import useRequest from "./useRequest";
import { Commands, Facing } from "../utils";

const useCommand = () => {
  const [error, setError] = useState<string>("");
  const [currentId, setCurrentId] = useState<string>("");
  const [currentX, setCurrentX] = useState<number>(-1);
  const [currentY, setCurrentY] = useState<number>(-1);
  const [currentFacing, setCurrentFacing] = useState<Facing>("NORTH");
  const [historic, setHistoric] = useState<string[]>([]);

  const {
    postData,
    response: responseRequest,
    error: errorRequest,
    isLoading,
  } = useRequest();

  const sendCommand = (
    command: string,
    id?: string,
    commandArguments?: string
  ) => {
    const object = {
      command,
      arguments: commandArguments,
      id,
    };

    postData(object).then().catch(console.error);
  };

  const validatePlace = (command: Commands, commandArguments: string) => {
    if (command !== "PLACE") return;

    const argumentsSplited = commandArguments.split(",");
    if (argumentsSplited.length !== 3)
      setError("Wrong number of arguments, must be exact 3");

    const [positionX, positionY, facing] = argumentsSplited;
    const positionXNumber = parseInt(positionX);
    const positionYNumber = parseInt(positionY);
    const isFacingRight = ["NORTH", "EAST", "SOUTH", "WEST"].includes(facing);

    const isPositionXRight =
      !isNaN(positionXNumber) && positionXNumber >= 0 && positionXNumber < 5;
    if (!isPositionXRight)
      setError("Position x must be a positive number less than 5");
    const isPositionYRight =
      !isNaN(positionYNumber) && positionYNumber >= 0 && positionYNumber < 5;
    if (!isPositionYRight)
      setError("Position y must be a positive number less than 5");
    if (!isFacingRight)
      setError("Facing must be one of those: NORTH, EAST, SOUTH, WEST");

    sendCommand("PLACE", undefined, commandArguments);
    changeHistoric(`${command} ${commandArguments}`);
  };

  const validateMove = (command: Commands) => {
    if (command !== "MOVE") return;
    if (!currentId) return;

    sendCommand("MOVE", currentId);
    changeHistoric(command);
  };

  const validateLeft = (command: Commands) => {
    if (command !== "LEFT") return;
    if (!currentId) return;

    sendCommand("LEFT", currentId);
    changeHistoric(command);
  };

  const validateRight = (command: Commands) => {
    if (command !== "RIGHT") return;
    if (!currentId) return;

    sendCommand("RIGHT", currentId);
    changeHistoric(command);
  };

  const changeHistoric = (input: string) => {
    setHistoric((previousHistoric) => [...previousHistoric, input]);
  };

  const validateCommand = (input: string) => {
    const [command, commandArguments] = input.split(" ");

    switch (command) {
      case "PLACE":
        validatePlace(command, commandArguments);
        break;
      case "MOVE":
        validateMove(command);
        break;
      case "LEFT":
        validateLeft(command);
        break;
      case "RIGHT":
        validateRight(command);
        break;
    }
  };

  useEffect(() => {
    const { game_id, position_x, position_y, facing } = responseRequest;
    if (game_id !== currentId) {
      game_id && setCurrentId(game_id);
    }

    if (position_x !== null && position_x >= 0 && position_x !== currentX) {
      setCurrentX(position_x);
    }

    if (position_y !== null && position_y >= 0 && position_y !== currentY) {
      setCurrentY(position_y);
    }

    if (facing !== currentFacing) {
      facing && setCurrentFacing(facing);
    }
  }, [responseRequest, currentId, currentX, currentY, currentFacing]);

  useEffect(() => {
    if (!error || error.length == 0) return;
    setTimeout(() => {
      setError("");
    }, 1000);
  }, [error]);

  return {
    validateCommand,
    error,
    currentX,
    currentY,
    currentFacing,
    historic,
  };
};

export default useCommand;
