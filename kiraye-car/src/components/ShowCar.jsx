import React, { Component } from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './styles/showcar.css'
import Button from '@material-ui/core/Button';
import Carousel from 'react-bootstrap/Carousel'
let queryString = window.location.search;


export default class ShowCar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             car:[]
        }
    }
    componentDidMount(){
        Axios.get(`https://kiraye-car.herokuapp.com/cartype/?type=${queryString}`)
        .then(res=>{
        // console.log(res.data)
        this.setState({
            car: res.data
        })
        })
        .catch(err=>{
          console.log(err)
        })
    }
    render() {
        if(window.location.search.type)
        {
            queryString = window.location.type;
        }
        else
        {
            queryString = this.props.location.type;
        }
        console.log(this.state.car)
        return (
            <div>
                {this.state.car.map((cars,index)=>{
                            return(
                                <div key= {index}>
                                    <div style={{marginLeft: '550px'}}>
                                        <Card style={{height: '70vh', width: '60%', marginTop: '50px', backgroundColor: '#ecf0f1'}}>
                                            <div style={{height: '300px'}}>
                                                <Carousel>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={cars.media.images[0]}
                                                        alt="First slide"
                                                        height="400px"
                                                        width="20px"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={cars.media.images[1]}
                                                        alt="Third slide"
                                                        height="400px"
                                                        width="20px"
                                                        />

                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={cars.media.images[2]}
                                                        alt="Third slide"
                                                        height="400px"
                                                        width="20px"
                                                        />


                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={cars.media.images[3]}
                                                        alt="First slide"
                                                        height="400px"
                                                        width="20px"
                                                        />

                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={cars.media.images[4]}
                                                        alt="First slide"
                                                        height="400px"
                                                        width="20px"
                                                        />
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{marginTop: '120px'}}>
                                                {cars.heading}
                                            </Typography>
                                            <div style={{marginTop: '30px'}}>
                                                <Typography variant="body2" color="textSecondary" style={{float: 'left', display: 'inline'}}>
                                                        <span>Fuel Type:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{cars.build.fuel_type}</span>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" style={{display: 'inline'}}>
                                                        <span>Make:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{cars.build.make}</span>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" style={{float: 'right', display: 'inline'}}>
                                                        <span>Model:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{cars.build.model}</span>
                                                </Typography>
                                            </div>
                                            <div style={{marginTop: '30px'}}>
                                                <Typography variant="body2" color="textSecondary" style={{float: 'left', display: 'inline'}}>
                                                        <span>Year:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{cars.build.year}</span>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" style={{display: 'inline'}}>
                                                        <span>Miles:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{cars.miles}</span>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" style={{float: 'right', display: 'inline'}}>
                                                        <span>Price:</span><span style={{color: 'black'}}>&nbsp;&nbsp;{cars.price}</span>
                                                </Typography>
                                            </div>
                                            <Button variant="contained" style={{backgroundColor: 'orange', marginTop: '30px'}}>
                                                Book Your Car now
                                            </Button>
                                            </CardContent>    
                                        </Card>
                                    </div>
                                </div>
                            )
                        })}
            </div>
        )
    }
}