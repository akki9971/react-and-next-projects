import React from "react";
import '../App.css';
import { Button, CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from '@material-ui/core/CardContent'

export const ProductDetails = ({ id, title, price, image, rating, category, description }) => {

    return (
        <div style={{ padding: 3 }}>
            <Card>
                <CardActionArea>
                    <CardMedia component="img"
                        alt="Product Image"
                        height="200px"
                        width="70%"
                        image={image}
                        title={"Product"}
                    >
                    </CardMedia>
                    <CardContent >
                        <Typography variant="h5" component="h5" gutterBottom >
                            <span>  {title} </span>
                        </Typography>

                       
                            <span style={{fontSize:16, color:'gray', marginTop:10}}> category: {category} </span>
<br />
                            <span style={{fontSize:16, marginTop:10}}>  {description} </span>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <span color="primary">Price: ${price}</span>
                    <span color="primary">Rating: {rating?.rate}</span>
                </CardActions>
                {/* <CardActions>
            <Button size="small" color="primary" onClick={onProductViewDetails}>View Details</Button>
            <Button size="small" color="primary" onClick={onAddToCart}>Add to Cart</Button>
        </CardActions> */}
            </Card>
        </div>
    )
}