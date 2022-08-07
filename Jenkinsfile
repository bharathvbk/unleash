pipeline {
  agent any
    
  tools {nodejs "nodejs16.16.0"}
    
  stages {
      
        stage('Git') {
      steps {
        git 'https://github.com/bharathvbk/unleash'
      }
    }

    stage('Unit') {
      steps {
        checkout scm
        sh 'node -v' // 8.10.0
        sh 'npm -v' // 5.6.0
        sh 'npm install' // <-- desired change: 'yarn install'
        sh 'npm run test:unit' // <-- desired change: 'yarn test:unit'
      }
  }
}
