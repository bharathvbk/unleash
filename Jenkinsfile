pipeline {
  agent any

  tools {nodejs 'node-8.10.0'} // previously configured via Manage Jenkins -> Global Tool Configuration

  stages {
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
}
