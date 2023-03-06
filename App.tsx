/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {getTodo} from './src/network/Data.js';
import Card from './src/components/TaskCard.js';

function App(): JSX.Element {
  const [taskList, setTaskList] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let url = 'todos';
    const res = await getTodo(url);
    setTaskList(res);
  };

  const renderItem = ({item}) => <Card data={item} />;

  return (
    <FlatList
      style={{
        margin: 8,
        flex: 1,
      }}
      data={taskList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default App;
