import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

export default function ShowScreen({ navigation }) {
  const { state } = useContext(BlogContext);
  const id = navigation.getParam('id');
  const blog = state.find((b) => b.id === id);
  return (
    <View>
      <Text>{blog.title}</Text>
      <Text>{blog.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Edit', { id: navigation.getParam('id') });
          }}
        >
          <FontAwesome name="pencil" size={35} />
        </TouchableOpacity>
      );
    },
  };
};
