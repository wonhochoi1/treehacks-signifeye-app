// defines pins numbers
const int trigPin = 9;
const int echoPin = 10;
const int buzzerPin = 4; 

// defines variables
long duration;
int distance;

void setup() {
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
  pinMode(buzzerPin, OUTPUT); // Sets buzzer pin 4 as Output 
  Serial.begin(9600); // Starts the serial communication
}

void loop() {
  // Clears the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);

  // Calculating the distance
  distance = duration * 0.034 / 2;

  // Prints the distance on the Serial Monitor
  //Serial.print("Distance: ");
  //Serial.println(distance);

  if (distance > 0 && distance < 14.3) {
    tone(buzzerPin, 196); // Send 196Hz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  } 
  else if (distance >= 14.3 && distance < 28.6) {
    tone(buzzerPin, 220); // Send 220Hz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  } 
  else if (distance >= 28.6 && distance < 42.9) {
    tone(buzzerPin, 246.94); // Send 246.94KHz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  } 
  else if (distance >= 42.9 && distance < 57.2) {
    tone(buzzerPin, 261.63); // Send 261.63Hz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  } 
  else if (distance >= 57.2 && distance < 71.5) {
    tone(buzzerPin, 293.66); // Send 293.66Hz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  } 
  else if (distance >= 71.5 && distance < 85.8) {
    tone(buzzerPin, 329.63); // Send 329.63KHz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  } 
  else if (distance >= 85.8 && distance < 100) {
    tone(buzzerPin, 349.23); // Send 349.23Hz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  }

   else if (distance >= 100 && distance < 120) {
    tone(buzzerPin, 392); // Send 392Hz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  }

   else if (distance >= 120 && distance < 150) {
    tone(buzzerPin, 440); // Send 440Hz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  }

   else if (distance >= 150 && distance < 200) {
    tone(buzzerPin, 493.88); // Send 493.88Hz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  }

  else {
    tone(buzzerPin, 523.25); // Send 523.25Hz sound signal...
    delay(200); // ...for 200 ms
    noTone(buzzerPin); // Stop sound...
    delay(200); // ...for 200 ms
  }
}
