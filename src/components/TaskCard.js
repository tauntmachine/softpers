import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TaskCard({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{data.title}</Text>
    </View>
  );
}

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 16
  },
  txtTitle: {
    fontSize: 14,
  },
});
