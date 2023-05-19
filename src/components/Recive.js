import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function Recive({ porsentajeComision, comisionFixed }) {
  const [reciveValue, setReciveValue] = useState('');
  const [comisionValue, setComisionValue] = useState('');
  const handleInputChange = (text) => {
    const regex = /^[0-9.]*$/;
    if (regex.test(text)) {
      setReciveValue(text);
    }
  };

  // logica para comciones

  const paypalCommission = Number(porsentajeComision);
  const paypalCommissionFixed = Number(comisionFixed);
  const [afterValueMoney, setAfterValue] = useState('');
  // console.log(afterValueMoney)
  function getReceiveCommission(value) {
    const crrValue = parseFloat(value);
    let paypalCommissionPorcentaje = paypalCommission / 100;
    return parseFloat(
      (crrValue + paypalCommissionFixed) / (1 - paypalCommissionPorcentaje)
    ).toFixed(2);
  }
  function toRecive(value) {
    if (!value) {
      setAfterValue(' ');
      setComisionValue(' ');
    } else {
      const crrCommission = getReceiveCommission(value);
      setComisionValue(parseFloat(crrCommission - value).toFixed(2));
      setAfterValue(crrCommission);
    }
  }
  useEffect(() => {
    toRecive(reciveValue);
  }, [porsentajeComision, comisionFixed]);
  return (
    <View>
      <View>
        <Text className='text-xl text-orange-500 text-center mt-6'>
          Calcular PayPal para Recibir
        </Text>
      </View>
      <View className='flex-col items-center pr-14 '>
        <View className='flex-row   justify-end mt-8  w-52 items-center'>
          <Text className='text-base text-white'>Para Recibir : </Text>
          <TextInput
            className='border border-white rounded-md w-16 text-white px-2 py-1 text-base    '
            placeholder='value'
            placeholderTextColor={'white'}
            onChangeText={(text) => {
              handleInputChange(text);
              toRecive(text);
            }}
          />
        </View>
        <View className='flex-row  justify-end  mt-8  w-52 items-center'>
          <Text className='text-base text-white '>Comisión : </Text>
          <TextInput
            editable={false}
            className='border border-white rounded-md w-16 text-white px-2 py-1 text-base   '
            value={comisionValue}
          />
        </View>
        <View className='flex-row  justify-end mt-8  w-52 items-center'>
          <Text className='text-base text-white '>Total a Enviar : </Text>
          <TextInput
            editable={false}
            className='border border-white rounded-md w-16 text-white px-2 py-1 text-base   '
            value={afterValueMoney}
          />
        </View>
      </View>
    </View>
  );
}
