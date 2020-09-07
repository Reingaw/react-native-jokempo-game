import React, { useState } from 'react';
import { Image, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';

const Stage = () => {

    let [playerChoice, setPlayerChoice] = useState(empty);
    let [playerScore, setPlayerScore] = useState(0);
    let [cpuChoice, setCpuChoice] = useState(empty);
    let [cpuScore, setCpuScore] = useState(0);
    let [winnerText, setWinnerText] = useState('');

     

    const header = require('../../assets/jokenpo.png');
    const paper = require('../../assets/papel.png');
    const rock = require('../../assets/pedra.png');
    const scissor = require('../../assets/tesoura.png');
    const empty = require('../../assets/empty.png');

    return(
        <View style={styles.container}>
        <StatusBar backgroundColor={'#28b4e5'} barStyle={'light-content'} />
        <View style={styles.header}>
            <Image style={styles.headerImage} source={header} />
        </View>
        <View style={styles.body}>
            <View style={styles.centerWrapper}>
            <View style={styles.centerItems}>
                <Text style={styles.namePlayer}>Jogador</Text>
                <Text style={styles.scoreText}>{playerScore}</Text>
            </View>
            <View style={styles.centerItems}>
                <Text style={styles.namePlayer}>Computador</Text>
                <Text style={styles.scoreText}>{cpuScore}</Text>
            </View>
            </View>
            <View style={styles.centerWrapper}>
            <View style={styles.centerItems}>
                <Image style={styles.stageImage} source={playerChoice} />
            </View>
            <View style={styles.centerItems}>
                <Image style={styles.stageImage} source={cpuChoice} />
            </View>
            </View>
            <View style={styles.centerWrapper}>
            <Text style={styles.textResult}>{winnerText}</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.optionsWrapper} onPress={()=> play(0)}>
                <View style={styles.options}>
                    <Image style={styles.optionsImage} source={paper} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsWrapper} onPress={()=> play(1)}>
                <View style={styles.options}>
                    <Image style={styles.optionsImage} source={rock} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsWrapper} onPress={()=> play(2)}>
                <View style={styles.options}>
                    <Image style={styles.optionsImage} source={scissor} />
                </View>
            </TouchableOpacity>
        </View>

        </View>
    );

    function play(choice) {
        let cpuChoose = Math.floor(Math.random() * 3);
        let cpuWin = cpuScore;
        let playerWin = playerScore;

        switch(choice){
            case 0 : setPlayerChoice(paper); break;
            case 1 : setPlayerChoice(rock); break;
            case 2 : setPlayerChoice(scissor); break;
        }

        switch(cpuChoose){
            case 0 : setCpuChoice(paper); break;
            case 1 : setCpuChoice(rock); break;
            case 2 : setCpuChoice(scissor); break;
        }
        
        //0 = paper | 1 = rock | 2 = scissor
        if(cpuChoose == 0) {
            if(choice == 0) setWinnerText('Empate');
            if(choice == 1) {setWinnerText('Você Perdeu'); cpuWin++; setCpuScore(cpuWin);}
            if(choice == 2) {setWinnerText('Você Ganhou'); playerWin++; setPlayerScore(playerWin);}
        }

        if(cpuChoose == 1) {
            if(choice == 0) {setWinnerText('Você Ganhou'); playerWin++; setPlayerScore(playerWin);}
            if(choice == 1) setWinnerText('Empate');
            if(choice == 2) {setWinnerText('Você Perdeu'); cpuWin++; setCpuScore(cpuWin);}
        }

        if(cpuChoose == 2) {
            if(choice == 0) {setWinnerText('Você Perdeu'); cpuWin++; setCpuScore(cpuWin);}
            if(choice == 1) {setWinnerText('Você Ganhou'); playerWin++; setPlayerScore(playerWin);}
            if(choice == 2) setWinnerText('Empate');
        }
    }
}

export default Stage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    width: '100%',
    height: 200,
  },
  headerImage: {
    flex: 1
  },
  body: {
    flex: 1
  },
  centerWrapper: {
    flexDirection: 'row'
  },
  centerItems: {
    flex: 1,
    alignItems: 'center'
  },
  namePlayer: {
    fontSize: 18,
    color: '#28b4e5',
    fontWeight: 'bold'
  },
  scoreText: {
    fontSize: 22,
    color: '#f00',
    fontWeight: 'bold'
  },
  stageImage: {
    marginVertical: 25,
    width: 75,
    height: 75
  },
  textResult: {
    flex: 1,
    fontSize: 26,
    color: '#f00',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25
  },
  footer: {
    flexDirection: 'row',
    height: 45
  },
  optionsWrapper:{
    flex: 1
  },
  options: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionsImage: {
    height: 30,
    width: 30
  }
});