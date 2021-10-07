import React from 'react'
import {ProductDto} from "../api/dto/product.dto";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, Container} from "@mui/material";

interface Props{
    data: ProductDto

}

const Product = ({data}: Props) => {
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
            </Typography>
        </CardContent>
        <CardActions>
            <Container>
                <Button size="small" variant="contained" color="primary" style={{marginLeft: 5}}>Details</Button>
            </Container>
        </CardActions></>
    )

}

export default Product