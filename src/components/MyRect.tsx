import * as React from"react";
import {Stage, Layer, Rect} from "react-konva";

export interface IRectProps {
    width: number,
    height: number,
    color: string,
}

const MyRect: React.FunctionComponent<IRectProps> = (props: IRectProps) => {

    const {width, height, color} = props;

    return (
        <Stage width={width*2} height={height*2}>
            <Layer>
                <Rect
                    x={width/2}
                    y={height/2}
                    width={width}
                    height={height}
                    fill={color}
                    stroke={"black"}
                    strokeWidth={1}
                />
            </Layer>
        </Stage>
    );

};

export default MyRect;
