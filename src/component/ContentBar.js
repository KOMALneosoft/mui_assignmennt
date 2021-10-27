import React, { Component } from 'react'
import Chanpass from './Chanpass'
import Navs from './Navs'
import SideBar from './SideBar'
import { Row,Col } from 'react-bootstrap'
export class ContentBar extends Component {
    render() {
        return (
            <>
            <main>
                <header><Navs/></header>
               <Row>
                   <Col md={6}><SideBar/></Col>
                   <Col md={6}>Containt</Col>
               </Row>
            </main>
            </>
        )
    }
}

export default ContentBar
