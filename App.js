import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Pie, Bar } from 'react-native-progress';
import { useState } from 'react';

export default function App() {
  // Keep track of what the user's typing
  const [inputText, setInputText] = useState('');
  
  // Simple math - how full is our "tank"?
  const progress = Math.min(inputText.length / 100, 1); // don't let it go over 100%
  const characterCount = inputText.length;
  
  // When we hit 100 chars, time to turn red!
  const isComplete = characterCount >= 100;
  const progressColor = isComplete ? '#FF3B30' : '#007AFF';
  
  // These colors look nice - iOS style
  // Blue: #007AFF 
  // Red: #FF3B30 (kinda like a warning color)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Character Progress Tracker</Text>
      
      {/* Show the count - changes color when we're done */}
      <Text style={[styles.counter, { color: isComplete ? '#FF3B30' : '#333' }]}>
        {characterCount} / 100 characters {isComplete && '✓ Complete!'}
      </Text>
      
      {/* Pie chart thing - keeps it blue for consistency */}
        <View style={styles.progressContainer}>
        <Text style={styles.label}>Pie Progress</Text>
        <Pie
          progress={progress}
          size={100}
          color="#007AFF" // decided to keep this blue
          unfilledColor="#E1E1E1"
        />
      </View>

      {/* This bar actually changes color - more dramatic! */}
      <View style={styles.progressContainer}>
        <Text style={styles.label}>Bar Progress</Text>
        <Bar
          progress={progress}
          width={200}
          height={20}
          color={progressColor} // this one changes!
          unfilledColor="#E1E1E1"
          borderWidth={0}
        />
      </View>

      {/* Main text input area */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your text (max 100 characters):</Text>
        <TextInput
          style={[
            styles.textInput,
            isComplete && styles.textInputComplete // red border when full
          ]}
          value={inputText}
          onChangeText={setInputText} 
          multiline={true} 
          maxLength={100} // React Native handles this for us
          placeholder="Start typing here..."
          placeholderTextColor="#999"
          textAlignVertical="top" // keeps text at top
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // gives us some breathing room
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  counter: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center', // center this too
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 20, // some space around each progress thing
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333', // dark gray looks good
  },
  inputContainer: {
    width: '100%',
    marginTop: 30, // push it down a bit
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8, // rounded corners are nice
    padding: 15,
    fontSize: 16,
    minHeight: 100, // give people room to write
    backgroundColor: '#F9F9F9',
    textAlignVertical: 'top', // start from the top
  },
  textInputComplete: {
    borderColor: '#FF3B30', // warning color!
    borderWidth: 2, // make it obvious
  },
});
