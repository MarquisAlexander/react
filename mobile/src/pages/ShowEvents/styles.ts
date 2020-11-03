import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    margin: 20px 20px;
`;

export const Content = styled.Text`
    
`;

export const Event = styled.View`
    border-radius: 16px;
    border: 3px solid #fff;
    margin-top: 10px;
    background-color: #f5f5f0;
`;

export const EventList = styled.View`
    margin: 10px 10px;
`;

export const BackToSignIn = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #312e38;
    border-top-width: 1px;
    border-color: #232129;
    padding: 16px 0 ${16 + getBottomSpace()}px;

    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const BackToSignInText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    margin-left: 16px;
`;