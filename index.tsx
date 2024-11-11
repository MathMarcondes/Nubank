import React from "react";
import { View, Image, Text, StyleSheet, FlatList} from "react-native";
import Home from "./Screens/Home";
import Header from "./Header";
import Balance from "./Components";
import Movements from "./Movements";
import Actions from "./Actions";

const list = [
    {
        id: 1,
        label: 'Conta de Luz',
        value: '300,99',
        date: '17/08/2024',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Conta de água',
        value: '250,00',
        date: '18/08/2024',
        type: 0 // despesas 
    },
    {
        id: 3,
        label: 'Conta Celular',
        value: '39,90',
        date: '18/08/2024',
        type: 0 // despesas
    }
]

export default function App () {
    return(

        

        <View style={styles.container}>


        <Header name="Cristiano Ronaldo"/>



        <Balance saldo="15.000,00" gastos="390,00"/>

        <Actions/>

        <Text style={styles.title}>Extrato</Text>



        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id) }
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Movements data={item}/> }
            />


            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        color: 'black',
        marginTop: 14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    },
    item:{
        color: 'black'
    }
})