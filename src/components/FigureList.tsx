import * as React from 'react';
import FigureItem from "./FigureItem";
import {Figure} from "../typeFigures";
import '../styles/App.css';
import {fetchDeleteFigure} from "../redux/actions/deleteFigureActions";
import {Button} from "react-bootstrap";
import {ListFiguresState} from "../types";

interface IProps {
    geometricListState: ListFiguresState,
    dispatch: any,
}

const FigureList: React.FunctionComponent<IProps> = (props: IProps) => {

    const {dispatch} = props;
    const {listFigures} = props.geometricListState;

    return(
        <div>
            <h3>Figures</h3>
            <ul>
                {listFigures.map((figure: Figure) =>
                    <div key={figure.id}>
                        <FigureItem figure={figure}/>
                        <Button variant="primary" onClick={() => dispatch(fetchDeleteFigure(figure.id))}>
                            Delete
                        </Button>
                    </div> )
                }
            </ul>
        </div>
    );
};

export default FigureList;