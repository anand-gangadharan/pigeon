npm install
zip -r my_deployment_package.zip node_modules src
aws s3api put-object --bucket build-lambda-functions  --key SimpleLambdaCode --region eu-west-1  --body ./my_deployment_package.zip


#deploy
# aws cloudformation create-stack  --stack-name pigeon --template-body file:////Users/anandg/git/aws-cloudfront-exp/simple-lambda/deploy-cloudformation.yaml --capabilities CAPABILITY_NAMED_IAM