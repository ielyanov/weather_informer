import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, setActivePlace } from '../actions/act';
import "bootswatch/paper/bootstrap.css";
import { Navbar,NavDropdown, MenuItem, Nav, Grid, Row, Col } from "react-bootstrap";
import '../styles/App.css';

class WeatherDisplay extends Component{

    collectData(place){
        let URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.props.cities[place].name}&appid=e03fcde097d74790d2a8569aa4d88bd1&units=metric&lang=ru`;
        this.props.fetchData(URL);
    }


    componentWillReceiveProps(nextProps) {
            if(this.props.activePlace !== nextProps.activePlace){
                this.collectData(nextProps.activePlace);
            } 
    }

    componentDidMount() {
        this.collectData(this.props.activePlace);
    }

    render() {
        let weatherData = this.props.weatherData;
            if(weatherData.weather){
                const weatherMain = weatherData.weather[0]; 
                const iconUrl = `http://openweathermap.org/img/w/${weatherMain.icon}.png`;
                return (
                    <div>
                        <h1>
                            {this.props.cities[this.props.activePlace].name}
							<img src={iconUrl} alt={weatherData.weather[0].description} />
                        </h1> 
						<h3>{weatherData.weather[0].description}</h3>
                        <h4>
                            Температура: <b> {weatherData.main.temp}°C </b>
                        </h4>
                        <h4>
                            Скорость ветра: <b> {weatherData.wind.speed} м/с </b>
                        </h4>
                        <p>
                            Координаты: ({weatherData.coord.lat}, {weatherData.coord.lon})
                        </p>
                    </div>
                );
            }
        return (
            <div>
                Загрузка...
            </div>
            );
        
       }  
}

class App extends Component {

    render() {
        return (
        <div
            className="App">
                <div>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                Погода в России
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>
                    <Grid>
                        <Row>
                            <Col md={3} sm={3} lg={3} >
                                <Nav
                                    bsStyle="pills"
                                    stacked
                                    activeKey={this.props.activePlace}
                                    onSelect={(index) => {
                                        this.props.setActivePlace(index);
                                    }}>
                                        <NavDropdown
                                            eventKey="4"
                                            title="Выберите город"
                                            id="nav-dropdown">
                                            {this.props.cities.map((city, index) => (
                                                <MenuItem key={index} eventKey={index}>{city.name}</MenuItem>
                                            ))}
                                        </NavDropdown>
                                </Nav>
                            </Col>
                            <Col
                                md={9}
                                sm={9}
                                lg={9}>
                                <WeatherDisplay key={0} cities={this.props.cities} weatherData={this.props.weather} activePlace={this.props.activePlace} fetchData={this.props.fetchData}/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        weather: state.weatherData,
        activePlace: state.activePlace,
        cities: state.cities
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchData(url)),
        setActivePlace: (index) => dispatch(setActivePlace(index))
    };
};

export default connect(
mapStateToProps,
mapDispatchToProps)(App);

