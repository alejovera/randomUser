import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import './styles/User.css';
import Loader from './Loader';

function User({data}) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false);
    }, [])

    
    return (
        <div className="container">
            {loading ? (
                <Loader />
            ) : (
                    data.map((item) => (
                        <Link to={`/${item.mail}`} className="cardLink">
                            <div className="cardContainer">
                                <Card className="card">
                                    <CardActionArea className="cardAction">
                                        <CardMedia
                                        component="img"
                                        image={item.picture}
                                        className="cardMedia"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent className="cardContent">
                                            <h2 className="cardTitle">
                                                {item.name} {item.lastName}
                                            </h2>
                                            <p className="cardInfo">
                                                {item.city}
                                            </p>
                                            <p className="cardInfo">
                                                {item.country}
                                            </p>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </Link>
                        
                    ))
                
                )
            }
        </div>
    )
}

export default User
