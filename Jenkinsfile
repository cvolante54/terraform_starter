pipeline {
    agent { dockerfile true }
    stages {
        stage('Build') {
            steps {
                echo "Building ..."
                sh 'node --version'
            }
        }
        stage('Test') {
            steps {
                echo "Testing ..."
                sh "npm run test"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying ..."
            }
        }
    }
}
