pipeline {
    agent {
      label 'docker'
    }
    stages {
        stage('Build') {
            agent { dockerfile true }
            steps {
                echo "Building ..."
                sh 'node --version'
            }
        }
        stage('Test') {
            steps {
                echo "Testing ..."
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying ..."
            }
        }
    }
}
