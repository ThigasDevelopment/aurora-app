import React from 'react';

import { Text, View, ScrollView } from 'react-native';

export default function RenderPage ({ page }) {
    if (page == 'Feed') {
        return (
            <View>
                <Text>{ page }</Text>
            </View>
        )
    }

    if (page == 'Maps') {
        return (
            <Text>{ page }</Text>
        )
    }

    return (
        <View style = { { paddingVertical: 20, alignItems: 'center', justifyContent: 'center' } }>
            <Text>Pagina { page } nao encontrada</Text>
        </View>
    )
}