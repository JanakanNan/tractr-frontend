import React, {useEffect, useState} from 'react';
import './App.css';
import {ProductApi} from "./api/product.api";
import {ProductDto} from "./api/dto/product.dto";
import {AppBar, Button, Grid, Typography, Toolbar} from "@mui/material";
import Product from "./components/Product";


function App() {
  const [Name, setName] = useState('')
  const [Description, setDescription] = useState('')
  const [Type, setType] = useState('')
  const [Origin, setOrigin] = useState('')
  const [products, setProducts] = useState<ProductDto[]>([])

  useEffect(() => {
    async function fetchAll(){
      const resp = await ProductApi.getAll();

      setProducts(resp);
    }

    fetchAll();

  }, [])

  async function searchName(){
    const res = await ProductApi.searchName(Name)

    setProducts(res)
  }

  async function searchDescription(){
    const res = await ProductApi.searchDescription(Description)

    setProducts(res)
  }

  async function searchType(){
    const res = await ProductApi.searchType(Type)

    setProducts(res)
  }

  async function searchOrigin(){
    const res = await ProductApi.searchOrigin(Origin)

    setProducts(res)
  }
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product Management
          </Typography>
        </Toolbar>
      </AppBar>

      <input type="text" placeholder="Search by Name" onChange={event => {setName(event.target.value)}}/>
      <Button color="primary" variant="contained" onClick={searchName}>Search</Button>

      <input type="text" placeholder="Search by Description" onChange={event => {setDescription(event.target.value)}}/>
      <Button color="primary" variant="contained" onClick={searchDescription}>Search</Button>

      <input type="text" placeholder="Search by Type" onChange={event => {setType(event.target.value)}}/>
      <Button color="primary" variant="contained" onClick={searchType}>Search</Button>

      <input type="text" placeholder="Search by Origin" onChange={event => {setOrigin(event.target.value)}}/>
      <Button color="primary" variant="contained" onClick={searchOrigin}>Search</Button>
      <Grid container spacing={1} style={{ padding: 10}}>
          {
              products.map(product => {
                  return <Grid item xs={3}>
                    <Product data={product} />
                  </Grid>
              })
          }
      </Grid>
    </div>
  );
}

export default App;
