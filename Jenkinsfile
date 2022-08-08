pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/bharathvbk/unleash'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm install unleash-server --save'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
