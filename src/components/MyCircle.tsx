import * as React from "react";
import {Stage, Layer, Circle} from "react-konva";

export interface ICircleProps {
    radius: number,
    color: string,
}

const MyCircle: React.FunctionComponent<ICircleProps> = (props: ICircleProps)=> {

    const {color, radius} = props;

        return (
            <Stage width={450} height={radius*3} aling={"center"}>
                <Layer>
                    <Circle
                        x={225}
                        y={3*radius/2}
                        radius={radius}
                        fill={color}
                        stroke={"black"}
                        strokeWidth={1}
                    />
                </Layer>
            </Stage>
        );
};

export default MyCircle;