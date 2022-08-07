pipeline {
  agent any
    
  tools {nodejs "nodejs16.16.0"}
    
  stages {
      
   
    stage('Build') {
      steps {
        sh 'npm install'
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
