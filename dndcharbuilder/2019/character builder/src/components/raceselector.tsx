import * as React from "react"; // DEPENDENCIES
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

import "../scss/style.scss";

export class RaceSelectorProps {
    raceData: Array<RaceMeta> = new Array();
}

export class RaceMeta {
    Name: string = "";
    Ability: string = "";
    Size: string = "";
    Source: string = "";
}

export default class RaceSelector extends React.Component<RaceSelectorProps, any> {

    constructor(props: RaceSelectorProps) {
        super(props);
    }

    filltable()
    {
        let raceRow:Array<any> = new Array();

        for (let dataRow of this.props.raceData)
        {
            raceRow.push(<tr>
                <td>{dataRow.Name}</td>
                <td>{dataRow.Ability}</td>
                <td>{dataRow.Size}</td>
                <td>{dataRow.Source}</td>
            </tr>)
        }

        return raceRow;
    }

    render() {

        return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ability</th>
                        <th>Size</th>
                        <th>Source</th>
                    </tr>
                </thead>
                <tbody>
                   {this.filltable()}
                </tbody>
            </Table>
            ) 
    }

}