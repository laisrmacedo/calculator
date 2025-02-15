import { View, Text } from "react-native"
import { styles } from './styles'
import Button from '@/src/components/Button/Button'
import { useState } from "react";

export default function Index() {
  const [currentNumber, setCurrentNumber] = useState<string>('0');
  const [previousNumber, setPreviousNumber] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [result, setResult] = useState<Number | null>(null);
  const [expression, setExpression] = useState<string>('');

  const handleNumberPress = (value: string) => {
    if (!isNaN(Number(value)) && currentNumber.length < 10) {
      setCurrentNumber(currentNumber === '0' ? value : currentNumber + value);
    }
  }

  const handleOperatorPress = (value: string) => {
    if(result !== null) {
      console.log('result', result);
      setExpression(`${result.toString()}${operator}`);
    }else {
      setCurrentNumber('0');

    }
    setOperator(value);
    setPreviousNumber(currentNumber);
    setExpression(currentNumber+value);
  }

  const clear = () => {
    setCurrentNumber('0');
    setPreviousNumber('');
    setOperator('');
    setResult(null);
    setExpression('');
  }

  const calculate = () => {
    switch (operator) {
      case '+':
        clear();
        setResult(parseInt(currentNumber) + parseInt(previousNumber));
        break;
      case '-':
        clear();
        setResult(parseInt(previousNumber) - parseInt(currentNumber));
        break;
      case '×':
        clear();
        setResult(parseInt(currentNumber) * parseInt(previousNumber));
        break;
      case '÷':
        clear();
        setResult(parseInt(previousNumber) / parseInt(currentNumber));
        break;
      default:
        clear();
        setResult(0)
        break;
    }
  }

  const currentNumberDisplay = () => {
    if (result !== null) {
      return <Text style={result.toString().length < 7 ? styles.currentNumber : {fontSize: 50}}>{result.toString()}</Text>;
    }

    if (currentNumber && currentNumber.length < 6) {
      return <Text style={styles.currentNumber}>{currentNumber}</Text>;
    }

    if (currentNumber.length > 5 && currentNumber.length < 8) {
      return <Text style={[styles.currentNumber, { fontSize: 70 }]}>{currentNumber}</Text>;
    }
    if (currentNumber.length > 7) {
      return <Text style={[styles.currentNumber, { fontSize: 40 }]}>{currentNumber}</Text>;
    }
  }

  const buttons = [
    '#', '%', '⌫', 'C',
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '.', '0', '=', '+'
  ];

  const whichFunction = (label: string) => {
    if (label === 'C') {
      clear();
    } else if (label === '=') {
      calculate();
      if (result !== null) {
        setCurrentNumber(result.toString());
      }
    } else if (['+', '-', '×', '÷'].includes(label)) {
      handleOperatorPress(label);
    } else {
      handleNumberPress(label);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.previousNumber}>{expression}
          {/* <Text style={styles.operator}>{operator}</Text> */}
        </Text>
        {currentNumberDisplay()}
      </View>
      <View style={styles.keypad}>
        {buttons.map((label) => (
          <Button
            key={label}
            label={label}
            onPress={() => whichFunction(label)}>
          </Button>
        ))}
      </View>
    </View>
  )
}