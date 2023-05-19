import { View, Text, TextInput } from 'react-native';

export default function Header({
  porsentajeComision,
  setPorsentajeComision,
  comisionFixed,
  setComisionFixed
}) {
  const handleInputChangePorsentaje = (text) => {
    const regex = /^[0-9.]*$/;
    if (regex.test(text)) {
      setPorsentajeComision(text);
    }
  };
  const handleInputChangeFixed = (text) => {
    const regex = /^[0-9.]*$/;
    if (regex.test(text)) {
      setComisionFixed(text);
    }
  };
  return (
    <View>
      <View>
        <Text className='text-orange-500 text-[23px] font-semibold text-center'>
          Calculadora de Comsiones de PayPal
        </Text>
      </View>
      <View>
        <Text className='text-orange-400 text-center text-base mt-4'>
          Comisión Regular de PayPal
        </Text>
        <View className=' flex-row justify-center items-center mt-4'>
          <View className='flex-row justify-center'>
            <TextInput
              className='border  rounded-md w-[35%]  border-slate-300 text-white text-center text-lg'
              value={porsentajeComision}
              onChangeText={(text) => handleInputChangePorsentaje(text)}
            />
            <Text className='text-orange-400 text-xl'> %</Text>
          </View>
          <View>
            <Text className='text-orange-400 text-2xl'>+</Text>
          </View>
          <View className='flex-row justify-center'>
            <TextInput
              className='border rounded-md w-[35%]   border-slate-300 text-white text-center text-lg'
              value={comisionFixed}
              onChangeText={(text) => handleInputChangeFixed(text)}
            />
            <Text className='text-orange-400 text-xl'> $</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
