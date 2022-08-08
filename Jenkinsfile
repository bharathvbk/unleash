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
