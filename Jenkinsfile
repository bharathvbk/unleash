pipeline {
    agent any
    tools {nodejs "nodejs16.16.0"}
    
    stages {
        stage('Build') {
            steps {
                sh "node -v'
                sh 'npm -v'
                
                sh 'npm install'
            }
        }
        stage('Test') {
                    steps {
                        sh './jenkins/scripts/test.sh'
                    }
                }
                stage('Deliver') {
                            steps {
                                sh './jenkins/scripts/deliver.sh'
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                sh './jenkins/scripts/kill.sh'
                            }
                        }

    }
}
