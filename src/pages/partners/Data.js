import React, { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Main () {
    const [ dataPartner, setActualPartner ] = useState ({ });

    async function checkActualPartner () {
        const data = await AsyncStorage.getItem ('dataPartner');

        if (data) {
            setActualPartner (JSON.parse (data));

            return true;
        }

        return false;
    }

    // checkActualPartner ();

    if (dataPartner.name) {
        return (
            <SafeAreaView>
                <Text>{ dataPartner.name }</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style = { { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
            <Image style = { { resizeMode: 'contain', width: 60, height: 60 } } source = { require ('../../../assets/images/bad-review.png') }/>
            <Text style = { { textAlign: 'center' } }>Ocorreu um erro, contate um Administrador / Desenvolvedor.</Text>
        </SafeAreaView>
    )
}