import * as React from 'react';
import FigureItem from "./FigureItem";
import {Figure} from "../typeFigures";
import '../styles/App.css';
import {fetchDeleteFigure} from "../redux/actions/deleteFigureActions";
import {Button} from "react-bootstrap";
import {ListFiguresState} from "../types";
import {AppState} from "../redux/store/indexStore";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {setTmpFigure, setType} from "../redux/actions/editFigureActions";
import {showUpdateFigure} from "../redux/actions/visibilityFilterActions";

interface IProps {
    geometricListState: ListFiguresState,
    dispatch: ThunkDispatch<any,any,AnyAction>,
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
                        <br/>
                        <br/>
                        <Button variant="primary" onClick={() => {
                            // console.log(figure.id);
                            dispatch(setType(figure.type));
                            dispatch(setTmpFigure(figure));
                            dispatch(showUpdateFigure())
                        }}>
                            Edit
                        </Button>
                        <br/>
                        <br/>
                    </div> )
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    geometricListState: state.getGeometricList
});

export default connect(mapStateToProps)(FigureList);