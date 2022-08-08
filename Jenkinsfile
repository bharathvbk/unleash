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
      }
    }  
  }
}
