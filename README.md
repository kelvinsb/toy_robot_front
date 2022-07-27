# Description

- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5x5.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

# Commands

## PLACE X,Y,F

Initial command, to place the robot on a position

- X -> x coordinate
- Y -> y coordinate
- F -> facing side(NORTH, EAST, SOUTH, WEST)

## MOVE

Move the robot to current robot facing side.
Ex: if the robot is facing south, it will move south

## LEFT

Robot will face the left side(90 degrees)

## RIGHT

Robot will face the right side(90 degrees)

# Project dependency

- [Backend](https://github.com/kelvinsb/toy_robot/)

# Dependencies

- `yarn` or `npm`
- Install dependencies running `yarn install` or `npm install`

# Run local

- `yarn dev` or `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
