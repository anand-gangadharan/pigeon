AWS_REGION="localhost" 
sam local invoke -d 5838 --docker-network aws-local -t ../deploy-cloudformation.yaml -e event.json --env-vars env.json helloLM