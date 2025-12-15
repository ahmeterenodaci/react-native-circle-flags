import { StyleSheet, Text, View } from 'react-native';

import TrFlag from 'react-native-circle-flags/country/tr-flag';
import EsFlag from 'react-native-circle-flags/country/es-flag';
import PsFlag from 'react-native-circle-flags/country/ps-flag';
import UaFlag from 'react-native-circle-flags/country/ua-flag';

import DeFlag from 'react-native-circle-flags/language/de-flag';
import EnAuFlag from 'react-native-circle-flags/language/en-au-flag';
import EnCaFlag from 'react-native-circle-flags/language/en-ca-flag';
import NlFlag from 'react-native-circle-flags/language/nl-flag';

import CheckeredFlag from 'react-native-circle-flags/other/checkered-flag';
import NatoFlag from 'react-native-circle-flags/other/nato-flag';
import OlympicsFlag from 'react-native-circle-flags/other/olympics-flag';
import PirateFlag from 'react-native-circle-flags/other/pirate-flag';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>Country Flags</Text>
      <View style={styles.row}>
        <View>
          <TrFlag style={styles.flag} />
          <Text style={styles.flagLabel}>Türkiye</Text>
        </View>
        <View>
          <EsFlag style={styles.flag} />
          <Text style={styles.flagLabel}>Spain</Text>
        </View>
        <View>
          <PsFlag style={styles.flag} />
          <Text style={styles.flagLabel}>Palestine</Text>
        </View>
        <View>
          <UaFlag style={styles.flag} />
          <Text style={styles.flagLabel}>Ukraine</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Language Flags</Text>
      <View style={styles.row}>
        <View>
          <EnCaFlag style={styles.flag} />
          <Text style={styles.flagLabel}>English (Canada)</Text>
        </View>
        <View>
          <EnAuFlag style={styles.flag} />
          <Text style={styles.flagLabel}>English (Australia)</Text>
        </View>
        <View>
          <DeFlag style={styles.flag} />
          <Text style={styles.flagLabel}>German</Text>
        </View>
        <View>
          <NlFlag style={styles.flag} />
          <Text style={styles.flagLabel}>Dutch</Text>
        </View>
      </View>
      <Text style={styles.sectionLabel}>Other Flags</Text>
      <View style={styles.row}>
        <View>
          <CheckeredFlag style={styles.flag} />
          <Text style={styles.flagLabel}>Checkered</Text>
        </View>
        <View>
          <PirateFlag style={styles.flag} />
          <Text style={styles.flagLabel}>Pirate</Text>
        </View>
        <View>
          <OlympicsFlag style={styles.flag} />
          <Text style={styles.flagLabel}>Olympics</Text>
        </View>
        <View>
          <NatoFlag style={styles.flag} />
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
    backgroundColor: '#f0f0f0',
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
