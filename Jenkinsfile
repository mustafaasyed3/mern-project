pipeline{
    agent any
    tools{

    }
    stages{
        stage("Build"){
            steps{
                nodejs("Node"){
                echo "downloading backend dependencies"
                sh "npm install"
                echo "downloading backend dependencies"
                sh "cd client"
                sh "npm install"
                }
            }
        }
        stage("Test"){
            steps{
                echo "running backend tests"
                sh "npm test"
                echo "running frontend tests"
                sh "cd client"
                sh "npm test"
            }
        }
        stage("Deploy"){
            steps{
                echo "creating backend image"
                sh "docker build -t ${BUILD_NUMBER} ."
                echo "creating frontend image"
                sh "docker build -t ${BUILD_NUMBER} /client"
            }
        }
    }
    post{
        success{
            echo "pushing to docker hub"
            sh "docker push"
        }
    }
}