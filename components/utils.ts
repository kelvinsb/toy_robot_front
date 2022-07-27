export interface TableProps {
  positionX: number;
  positionY: number;
  facing: Facing;
}

export interface InputCommandProps {
  error: string;
  validateCommand: (input: string) => void;
}

export interface IncomingResult {
  game_id?: String;
  position_x?: Number;
  position_y?: Number;
  facing?: String;
}

export type Commands = "PLACE" | "MOVE" | "LEFT" | "RIGHT" | "REPORT";
export type Facing = "NORTH" | "EAST" | "SOUTH" | "WEST";
