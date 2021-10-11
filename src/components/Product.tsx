import React from 'react'
import {ProductDto} from "../api/dto/product.dto";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, Container} from "@mui/material";
import {Link} from "react-router-dom";

interface Props{
    data: ProductDto

}

const Product = ({data}: Props) => {
    const id = data._id
    return(
            <><CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                {data.name}
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                {data.description}
                <br/>
                {data.type}
                <br/>
                {data.origin}
                <br/>
            </Typography>
        </CardContent>

            <CardActions>
                <Container>
                        <Link to="/about">
                    <Button size="small" variant="contained" color="primary" style={{marginLeft: 5}}>Details</Button>
                        </Link>
                </Container>
            </CardActions></>
    )

}

export default Product