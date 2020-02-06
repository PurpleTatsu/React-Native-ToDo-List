import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setToDos] = useState([
    { text: 'wake up', key: '1' },
    { text: 'eat breatkfast', key: '2' },
    { text: 'study', key: '3' },

  ]);

  const pressHandler = (key) => {
    setToDos((prevToDos) => {
      return prevToDos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setToDos((prevToDos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevToDos
        ]
      })

    } else {
      Alert.alert("Oops", "item must be longer than 4 characters", [
        { text: "OK", onPress: () => console.log('alert closed') }
      ]);
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log("dismissed keyboard")
      Keyboard.dismiss();
    }}>

      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo
            submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item}
                  pressHandler={pressHandler} />
              )}
            />

          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 20,
  }

});























//notes
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

// export default function App() {

//   const [people, setPeople] = useState([
//     { name: 'shaun', id: '1' },
//     { name: 'yoshi', id: '2' },
//     { name: 'mario', id: '3' },
//     { name: 'luigi', id: '4' },
//     { name: 'peach', id: '5' },
//     { name: 'toad', id: '6' },
//     { name: 'bowser', id: '7' },

//   ]);
//   const pressHandler = (id) => {
//     console.log(id)
//     setPeople((prevPeople) => {
//       return prevPeople.filter(person => person.id != id)
//     })
//   }

//   return (
//     <View style={styles.container}>
//       {/* FlatList= renders as you scroll */}
//       <FlatList
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => pressHandler(item.id)}>
//             <Text style={styles.item}> {item.name} </Text>
//           </TouchableOpacity>

//         )}
//       />

//       {/* ScrollView= renders everything at the beginning  */}
//       {/* <ScrollView>
//         {people.map(item => (
//           <View key={item.key}>
//             <Text style={styles.item}>{item.name} </Text>
//           </View>
//         ))}
//       </ScrollView> */}

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: "pink",
//     fontSize: 24,
//     marginHorizontal: 10,
//   }

// });
