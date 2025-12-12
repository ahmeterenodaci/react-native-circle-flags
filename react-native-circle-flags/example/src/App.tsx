import { Image, StyleSheet, Text, View } from 'react-native';

import TrFlag from 'react-native-circle-flags/country/TrFlag';
import EsFlag from 'react-native-circle-flags/country/EsFlag';
import PsFlag from 'react-native-circle-flags/country/PsFlag';
import UaFlag from 'react-native-circle-flags/country/UaFlag';

import EnCaFlag from 'react-native-circle-flags/language/EnCaFlag';
import EnAuFlag from 'react-native-circle-flags/language/EnAuFlag';
import DeFlag from 'react-native-circle-flags/language/DeFlag';
import NlFlag from 'react-native-circle-flags/language/NlFlag';

import CheckeredFlag from 'react-native-circle-flags/other/CheckeredFlag';
import PirateFlag from 'react-native-circle-flags/other/PirateFlag';
import OlympicsFlag from 'react-native-circle-flags/other/OlympicsFlag';
import NatoFlag from 'react-native-circle-flags/other/NatoFlag';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>Country Flags</Text>
      <View style={styles.row}>
        <View>
          <Image source={TrFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>Türkiye</Text>
        </View>
        <View>
          <Image source={EsFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>Spain</Text>
        </View>
        <View>
          <Image source={PsFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>Palestine</Text>
        </View>
        <View>
          <Image source={UaFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>Ukraine</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Language Flags</Text>
      <View style={styles.row}>
        <View>
          <Image source={EnCaFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>English (Canada)</Text>
        </View>
        <View>
          <Image source={EnAuFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>English (Australia)</Text>
        </View>
        <View>
          <Image source={DeFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>German</Text>
        </View>
        <View>
          <Image source={NlFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>Dutch</Text>
        </View>
      </View>
      <Text style={styles.sectionLabel}>Other Flags</Text>
      <View style={styles.row}>
        <View>
          <Image source={CheckeredFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>Checkered</Text>
        </View>
        <View>
          <Image source={PirateFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>Pirate</Text>
        </View>
        <View>
          <Image source={OlympicsFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>Olympics</Text>
        </View>
        <View>
          <Image source={NatoFlag} style={styles.flag} />
          <Text style={styles.flagLabel}>NATO</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionLabel: { fontWeight: 'medium', marginTop: 20, fontSize: 18 },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    gap: 20,
  },
  flag: { width: 64, height: 64, marginHorizontal: 'auto' },
  flagLabel: { textAlign: 'center', marginTop: 5, maxWidth: 74 },
});
