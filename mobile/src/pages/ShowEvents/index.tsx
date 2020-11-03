import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Container, Content, Event, EventList, BackToSignIn, BackToSignInText } from './styles';

interface Event {
    name: string;
    data: string;
    category: string;
    description: string;
}

const ShowEvent: React.FC = () => {

    const navigation = useNavigation();

    const [events, setEvents] = useState<Event[]>();

    useEffect(() => {
        api.get('eventslist').then(response => {
            // console.log(response.data.next);
            setEvents(response.data);
            // setUrl = (response.data.next);
        });
    }, []);

    return (
        <>
            <ScrollView>
                <Container>
                    {events?.map((event) => {
                        return (
                            <>
                                <Event>
                                    <EventList>

                                        <Content>Evento: {event.name}</Content>
                                        <Content>Data: {event.data}</Content>
                                        <Content>Categoria: {event.category}</Content>
                                        <Content>Descrição: {event.description}</Content>
                                    </EventList>
                                </Event>
                            </>
                        )
                    })}</Container>
            </ScrollView>
            <BackToSignIn onPress={() => navigation.navigate('Dashboard')}>
                {/* <Icon name="arrow-left" size={20} color="#fff" /> */}
                <BackToSignInText>Criar Evento</BackToSignInText>
            </BackToSignIn>
        </>
    );
}

export default ShowEvent;