import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Footer from '../src/components/Footer';
import Send from '../src/components/Send';
import Recive from '../src/components/Recive';
import Header from '../src/components/Header';

export default function Calculadora() {
  const [porsentajeComision, setPorsentajeComision] = useState('5.4');
  const [comisionFixed, setComisionFixed] = useState('0.3');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 30,
        paddingBottom: 10
      }}
      className='h-full '
    >
      <ScrollView>
        <View>
          <Header
            porsentajeComision={porsentajeComision}
            setPorsentajeComision={setPorsentajeComision}
            comisionFixed={comisionFixed}
            setComisionFixed={setComisionFixed}
          />

          <Recive
            porsentajeComision={porsentajeComision}
            comisionFixed={comisionFixed}
          />
          <Send
            porsentajeComision={porsentajeComision}
            comisionFixed={comisionFixed}
          />
        </View>
        <View>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
