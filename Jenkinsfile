#!/bin/bash
echo "------> Install node modules <------"
npm install
echo "------> Gulp webpack <------"
gulp webpack

pipeline {
  agent any
    
  tools {nodejs "nodejs16.16.0"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/bharathvbk/unleash'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install unleash-server --save'
         sh '<<Build Command>>'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
