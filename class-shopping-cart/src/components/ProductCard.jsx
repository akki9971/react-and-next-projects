import React from "react";
import '../App.css';
import { Button, CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from '@material-ui/core/CardContent'



export const ProductCard = ({ id, title, price, image, rating, onProductViewDetails, onAddToCart }) => {

    return (

        <Grid item key={id} spacing={30} style={{width: '250px', margin:'30px'}} >
            <Card>
                <CardActionArea>
                    <CardMedia component="img"
                        alt="Product Image"
                        height="200px"
                        width="90%"
                        image={image}
                        title={"Product"}
                    >
                    </CardMedia>
                    <CardContent >
                        <Typography variant="h6" component="h6" gutterBottom >
                          <span style={{fontSize:14 }}>  {title} </span>
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <span color="primary">Price: ${price}</span>
                    <span color="primary">Rating: {rating.rate}</span>
                </CardActions>
                <CardActions>
                    <Button size="small" color="primary" onClick={()=>onProductViewDetails(id)}>View Details</Button>
                    <Button size="small" color="primary" onClick={()=>onAddToCart(id)}>Add to Cart</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

// <div style={{ width: '50%', height: 400, padding: 10, margin: 10 }}>
//     <img src={image} style={{ width: '100%', height: '60%', margin: 10 }} />
//     <h2>{title}</h2>
//     <div>
//         <strong>Price: ${price}</strong>
//         <strong>Rating: {rating.rate}</strong>
//     </div>
//     <div>
//         <input type="button" value="View Details" onClick={()=>{onProductViewDetails(id)}} />
//         <input type="button" value="Add To Cart" onClick={()=>{onAddToCart(id)}}/>
//     </div>

{/* <Grid container spacing={30} justifyContent="center"> */ }