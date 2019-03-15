import * as React from "react"; // DEPENDENCIES
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import racedata from "../data/races.json";

import "../scss/style.scss";

import RaceSelector from "../components/raceselector";  //default class
import { RaceMeta } from "../components/raceselector";  //specific class

export default class RacePage extends React.Component<any, any> {

    constructor(props: any) {

        super(props);

    }

    componentDidMount() {
        let array_RaceMeta: Array<RaceMeta> = new Array();  //declare an array of datatype RaceMeta (generic)

        for (let row of racedata.race) {
            let insertRow: RaceMeta = new RaceMeta();

            insertRow.Name = row.name;
            insertRow.Size = row.size;
            insertRow.Source = row.source;

            let abilityArray: Array<String> = new Array();

            for (let stat in row.ability) {
                if (row.ability[stat]) {
                    abilityArray.push(stat + ": " + row.ability[stat]);
                }
            }

            insertRow.Ability = abilityArray.join(";");

            array_RaceMeta.push(insertRow);
        }


        this.setState({ "updatedArray": array_RaceMeta });  //asyncronous call to update the state with the filled array

    }

    render() {

        return () => {

            <Container>
                <Row>
                    <Col>
                        <RaceSelector raceData={this.state.updatedArray} />  {/* this calls the updated state */}
                    </Col>
                </Row>
            </Container>
        }
    }

}