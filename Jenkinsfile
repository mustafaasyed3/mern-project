pipeline{
    agent any
    stages{
        stage("Obtaining Git Repo in Jenkins"){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mustafaasyed3/mern-project.git']]])
            }
        }
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
                nodejs("Node"){
                echo "running frontend tests"
                sh "cd client"
                sh "npm test"
                }
                }
            }
        stage("Deploy"){
            steps{
                echo "creating backend image"
                sh "docker build -t mustafaapp/mern-project:backend${BUILD_NUMBER} ."
                sh "docker login"
                echo "creating frontend image"
                sh "docker build -t mustafaapp/mern-project:frontend${BUILD_NUMBER} /client"
            }
        }
    }
}