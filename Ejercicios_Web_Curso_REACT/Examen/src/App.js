import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Entrada from "./Entrada"
import Listas from "./Listas"
import "./CSS.css"


import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers/appReducer";
const store = createStore(appReducer);

export default () => (
  <Provider store={store}>
    <Container >
      <Row>
        <Col md="12" className="CreaNumeros">
          <Entrada />
        </Col>
      </Row>
      <Row>
        <Col md="12" className="CreaNumeros">
          <Listas  />
        </Col>
      </Row>
    </Container>
    </Provider>
);


