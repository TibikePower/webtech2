import React from "react";
import ListOfProducts from "./ListOfProducts";
import FormOfProducts from "./FormOfProducts";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import useTodoState from "./hooks/useProductState";
import Button from '@material-ui/core/Button';
import {logout} from "./services/users";
import './ProductStore.css';

function ProductStore() {

    const { products, addProduct, removeProduct } = useTodoState(
        []
    );

    return (
        <Paper className="main">
            <AppBar className="header" position='static'>
                <Toolbar>
                    <Typography className="hTitle" style={{ flex: 1 }} align='center'>Terméknyilvántartás</Typography>
                    <Button
                        type="submit"
                        variant="outlined"
                        onClick={(e)=>{e.preventDefault(); logout()}}
                    >
                        Kijelentkezés
                    </Button>
                </Toolbar>

            </AppBar>
            <Grid container justify='center' style={{ marginTop: "3rem" }}>
                <Grid item xs={10} md={9} lg={8}>
                    <FormOfProducts addProduct={addProduct} />
                    <ListOfProducts
                        products={products}
                        removeProduct={removeProduct}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ProductStore;