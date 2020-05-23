/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useState }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App= () => {
  const [selectedValue, setSelectedValue] = useState("05");
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>        
          <View style={styles.body}>            
              <Text style={styles.sectionTitle}>Appointment</Text> 
              <Text style={styles.sectionPick}>PICK DATE</Text>              
          </View>
          <RNPickerSelect
           selectedValue={{label:'February',value: '02'}}
           
           onValueChange={(itemValue, itemIndex) => setSelectedValue("05")}
            items={[
                { label: 'January', value: '01' },
                { label: 'February', value: '02' },
                { label: 'March', value: '03' },
                { label: 'April', value: '04' },
                { label: 'May', value: '05' },
                { label: 'June', value: '06' },
                { label: 'July', value: '07' },
                { label: 'August', value: '08' },
                { label: 'September', value: '09' },
                { label: 'October', value: '10' },
                { label: 'November', value: '11' },
                { label: 'December', value: '12' },
            ]}
        />

<Calendar
  
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-23'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2012-05-23'}
    monthFormat={'yyyy MM dd'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  
/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 14,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'left',
    padding: 60,
    fontWeight : 'bold',
    paddingLeft: 12,
  },
  sectionPick: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'left',
    padding: 20,
    fontWeight : 'bold',
    paddingLeft: 12,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
