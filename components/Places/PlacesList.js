import { FlatList, StyleSheet, Text, View } from 'react-native';

import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/colors';

function PLacesList({ places }) {
  if (!places || places.length == 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          You have not added any place yet
        </Text>
      </View>
    );
  }

  function renderPlaces(place) {
    return <PlaceItem place={place.item} />;
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderPlaces}
    />
  );
}

export default PLacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
