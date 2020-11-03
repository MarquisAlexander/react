import React, { useRef, useCallback } from 'react'
import { Image, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';



import Input from '../../components/Input';
import Button from '../../components/Button';


import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

interface SignUpFormData {
    name: string;
    data: string;
    category: string;
    description: string;

}

const Dashboard: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();


    const handleSignUp = useCallback(async (data: SignUpFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                data: Yup.string().required('E-mail obrigatório'),
                category: Yup.string().required(),
                description: Yup.string().required(),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await api.post('/event', data);

            console.log(data);

            Alert.alert('Evento criado com sucesso!!');

            // navigation.goBack();


        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                // const errors = getValidationErrors(err);

                // formRef.current?.setErrors(errors);

                return;
            }

            Alert.alert('Error no cadastro', 'Ocorreu um erro ao fazer o cadastro, tente novamente.'
            );
        }
    }, []);

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>

                        <View>
                            <Title>Criar evento</Title>
                        </View>

                        <Form ref={formRef} onSubmit={handleSignUp}>
                            <Input
                                autoCapitalize="words"
                                name="name"
                                icon="user"
                                placeholder="Nome do evento"
                                returnKeyType="next"

                            />

                            <Input
                                keyboardType="email-address"
                                autoCorrect={false}
                                autoCapitalize="none"
                                name="data"
                                icon="mail"
                                placeholder="data do evento"
                                returnKeyType="next"

                            />

                            <Input
                                name="category"
                                icon="lock"
                                placeholder="Categoria do evento"
                                textContentType="newPassword"
                                returnKeyType="send"
                                onSubmitEditing={() => formRef.current?.submitForm()}
                            />

                            <Input

                                name="description"
                                icon="lock"
                                placeholder="Descrição do evento"
                                textContentType="newPassword"
                                returnKeyType="send"
                                onSubmitEditing={() => formRef.current?.submitForm()}
                            />


                        </Form>

                        <Button onPress={() => formRef.current?.submitForm()}>Criar</Button>

                    </Container>
                </ScrollView>

                <BackToSignIn onPress={() => navigation.navigate('ShowEvent')}>
                    {/* <Icon name="arrow-left" size={20} color="#fff" /> */}
                    <BackToSignInText>Ver Eventos</BackToSignInText>
                </BackToSignIn>
            </KeyboardAvoidingView>
        </>
    );
}

export default Dashboard;