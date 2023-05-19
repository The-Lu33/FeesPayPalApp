import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Send = ({ porsentajeComision, comisionFixed }) => {
  const [reciveValue, setReciveValue] = useState();
  const [comisionValue, setComisionValue] = useState(' ');
  const handleInputChange = (text) => {
    const regex = /^[0-9.]*$/;
    if (regex.test(text)) {
      setReciveValue(text);
    }
  };
  // logic if fees paypal

  const paypalCommission = Number(porsentajeComision);
  const paypalCommissionFixed = Number(comisionFixed);

  const [afterValueMoney, setAfterValue] = useState('');
  function getReceiveCommission(value) {
    const crrValue = parseFloat(value);
    let paypalCommissionPorcentaje = paypalCommission / 100;

    return parseFloat(
      crrValue * paypalCommissionPorcentaje + paypalCommissionFixed
    ).toFixed(2);
  }
  function toSend(value) {
    if (!value) {
      setAfterValue(' ');
      setComisionValue(' ');
    } else {
      const crrCommission = getReceiveCommission(value);
      setAfterValue(parseFloat(value - crrCommission).toFixed(2));
      setComisionValue(crrCommission);
    }
  }
  useEffect(() => {
    toSend(reciveValue);
  }, [porsentajeComision, comisionFixed]);
  return (
    <View>
      <View>
        <Text className='text-xl text-orange-500 text-center mt-6'>
          Calcular PayPal para Enviar
        </Text>
      </View>
      <View className='flex-col items-center pr-14 '>
        <View className='flex-row   justify-end mt-8 w-52 items-center'>
          <Text className='text-base text-white'>Si Envia : </Text>
          <TextInput
            className='border border-white rounded-md w-16 px-2 py-1  text-white text-base'
            placeholder='value'
            placeholderTextColor={'white'}
            onChangeText={(text) => {
              handleInputChange(text);
              toSend(text);
            }}
          />
        </View>
        <View className='flex-row  justify-end  mt-8 w-52 items-center'>
          <Text className='text-base text-white '>Comisión : </Text>
          <TextInput
            editable={false}
            className='border border-white rounded-md w-16 px-2 py-1 text-white text-base'
            value={comisionValue}
          />
        </View>
        <View className='flex-row  justify-end mt-8 w-52 items-center'>
          <Text className='text-base text-white '>Total a Recibir : </Text>
          <TextInput
            editable={false}
            className='border border-white rounded-md w-16 px-2 py-1 text-white text-base'
            value={afterValueMoney}
          />
        </View>
      </View>
    </View>
  );
};

export default Send;
