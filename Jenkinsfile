/* groovylint-disable CompileStatic, DuplicateStringLiteral, LineLength, NoDef, UnnecessaryGString, UnusedVariable, VariableTypeRequired */

pipeline {
    options {
        disableConcurrentBuilds()
    }
    agent any
    stages {
        stage('Build') {
            steps {
                slackSend (color: 'warning', message: "START: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})", channel: "#jenkins")
                script {
                    sh "npm install"
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh "npm test"
                }
            }
        }
    }

    post {
        success {
            slackSend (color: 'good', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})", channel: "#jenkins")
        }

        failure {
            slackSend (color: 'danger', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})", channel: "#jenkins")
        }
    }
}
