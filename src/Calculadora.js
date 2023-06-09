import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {create, all} from 'mathjs';

const math=create(all);

const Calculadora=()=>{

    const[resultado, setResultado]=useState('');

    const handleButtonPress=(value)=>{
        setResultado(resultado+value);
    };

    const calcularResultado=()=>{
        try{
            const evaluatedResult=math.evaluate(resultado);
            setResultado(evaluatedResult.toString());
        }catch(error) {
            setResultado('Error');
        }
    };

    const limpiarResultado=()=>{
        setResultado('');
    };

    return(
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{resultado}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('7')}
                >
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('8')}
                >
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('9')}
                >
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('4')}
                >
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('5')}
                >
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('6')}
                >
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('1')}
                >
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('2')}
                >
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('3')}
                >
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('0')}
                >
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>handleButtonPress('.')}
                >
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.operatorButton]}
                    onPress={calcularResultado}
                >
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.button, styles.operatorButton]}
                    onPress={()=>handleButtonPress('+')}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>                
                <TouchableOpacity
                    style={[styles.button, styles.operatorButton]}
                    onPress={()=>handleButtonPress('-')}
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.operatorButton]}
                    onPress={()=>handleButtonPress('*')}
                >
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.button, styles.operatorButton]}
                    onPress={()=>handleButtonPress('/')}
                >
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>                
                <TouchableOpacity
                    style={[styles.button, styles.operatorButton]}
                    onPress={limpiarResultado}
                >
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>              
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
    },
    resultContainer: {
      marginBottom: 20,
    },
    resultText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#333',
    },
    buttonContainer: {
      width: 300,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EAEAEA',
      padding: 20,
      borderRadius: 5,
      margin: 4,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    operatorButton: {
        backgroundColor: '#4287f5', 
      },
  });

export default Calculadora;
