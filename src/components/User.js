import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


function User({data}) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false);
    }, [])
    
    return (
        <div>
            {loading ? (
                <p>Cargando</p>
            ) : (
                data.map((item) => (
                    <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        image={item.picture}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                            <h2>
                                {item.name} {item.lastName}
                            </h2>
                            <p>
                                {item.city}
                            </p>
                            <p>
                                {item.country}
                            </p>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to="/otro">
                            <Button size="small" color="primary">
                                Visit
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
                ))
                
            )}
        </div>
    )
}

export default User
